"""Synthetic fixture tests. Not tests of the full upstream audio engine."""
import tempfile, unittest
from pathlib import Path
import build_v1 as m
FIXTURE=b'''<!doctype html><html><head><title>v1</title></head><body><header class="top"><h1>v1</h1></header><button id="recBtn">rec</button><button id="playBtn">play</button><button id="mpOpen">metro</button><script>const printHtml="<html><head></head><body>print</body></html>";const database='home-piano-studio';</script></body></html>'''
def source(path):
    path.mkdir()
    for name in m.RUNTIME:(path/name).write_bytes(b'TEST ASSET, NOT FOR DEPLOYMENT')
    (path/'index.html').write_bytes(FIXTURE)
class V1Tests(unittest.TestCase):
    def test_reversible_patch(self):
        data,report=m.patch_html(FIXTURE);self.assertTrue(report['inverse_patch_recovers_original_bytes']);self.assertTrue(report['original_controls_preserved'])
        self.assertEqual(data.count(b'data-current-version="1"'),1)
    def test_database_unchanged(self):
        data,_=m.patch_html(FIXTURE);self.assertIn(b"database='home-piano-studio'",data)
    def test_embedded_print_html_not_mistaken_for_document(self):
        data,_=m.patch_html(FIXTURE);self.assertIn(b'<body>print</body>',data);self.assertTrue(data.endswith(b'</body></html>'))
    def test_repeat_rejected(self):
        with self.assertRaises(ValueError):m.patch_html(m.patch_html(FIXTURE)[0])
    def test_wrong_input_rejected(self):
        with self.assertRaises(ValueError):m.patch_html(b'<html><body>preview</body></html>')
    def test_build_preserves_assets(self):
        with tempfile.TemporaryDirectory() as tmp:
            src=Path(tmp)/'source';source(src);out=src/'dist';r=m.build(src,out)
            self.assertTrue(r['source_unchanged']);self.assertTrue(r['runtime_assets_preserved'])
            self.assertEqual((src/'index.html').read_bytes(),FIXTURE);self.assertIn('piano-studio-v1:',(out/'sw.js').read_text())
    def test_output_never_overwritten(self):
        with tempfile.TemporaryDirectory() as tmp:
            src=Path(tmp)/'source';source(src);out=src/'dist';out.mkdir()
            with self.assertRaises(FileExistsError):m.build(src,out)
    def test_missing_asset_fails_before_output(self):
        with tempfile.TemporaryDirectory() as tmp:
            src=Path(tmp)/'source';source(src);(src/'bp.bundle.js').unlink();out=src/'dist'
            with self.assertRaises(ValueError):m.build(src,out)
            self.assertFalse(out.exists())
if __name__=='__main__':unittest.main()
