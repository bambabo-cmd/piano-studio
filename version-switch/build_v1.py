#!/usr/bin/env python3
"""Create a deploy-only v1 copy with version links and an isolated service worker.
The existing repository index.html, sw.js, model, icons, and database identifiers
are never rewritten. Python 3.10+, standard library only.
"""
from __future__ import annotations
import argparse, hashlib, json, re, shutil, sys
from html.parser import HTMLParser
from pathlib import Path

HERE=Path(__file__).resolve().parent
RUNTIME=('index.html','sw.js','manifest.webmanifest','icon-192.png','icon-512.png','bp.bundle.js','vexflow-bravura.js')
ASSETS=('version-switch.js','version-switch.css')
A='<!-- PIANO_V1_VERSION_SWITCH_HEAD_START -->\n'
B='<!-- PIANO_V1_VERSION_SWITCH_HEAD_END -->\n'
C='<!-- PIANO_V1_VERSION_SWITCH_BODY_START -->\n'
D='<!-- PIANO_V1_VERSION_SWITCH_BODY_END -->\n'

def sha(data): return hashlib.sha256(data).hexdigest()

def closing_offset(text, tag):
    # Ignore </body> or </head> inside original print/export JavaScript strings.
    offsets=[0]
    for match in re.finditer('\n',text): offsets.append(match.end())
    class Parser(HTMLParser):
        def __init__(self): super().__init__(convert_charrefs=False); self.matches=[]
        def handle_endtag(self,name):
            if name==tag:
                line,col=self.getpos();self.matches.append(offsets[line-1]+col)
    parser=Parser();parser.feed(text)
    if len(parser.matches)!=1: raise ValueError(f'Expected one actual </{tag}>; got {len(parser.matches)}')
    return parser.matches[0]

def patch_html(raw):
    text=raw.decode('utf-8');original=text
    if A in text or C in text: raise ValueError('Input is already patched; keep the original source index.html.')
    for ident in ('recBtn','playBtn','mpOpen'):
        if not re.search(r'\bid=[\'"]'+ident+r'[\'"]',text): raise ValueError('Original control missing: '+ident)
    if not re.search(r'<header\b[^>]*\bclass=[\'"][^\'"]*\btop\b',text): raise ValueError('Original header missing.')
    head=A+'<link rel="stylesheet" href="./version-switch/version-switch.css">\n'+B
    body=C+'<script src="./version-switch/version-switch.js" data-current-version="1"></script>\n'+D
    at=closing_offset(text,'head');text=text[:at]+head+text[at:]
    at=closing_offset(text,'body');text=text[:at]+body+text[at:]
    recovered=text.replace(head,'',1).replace(body,'',1)
    if recovered.encode('utf-8')!=raw: raise AssertionError('Original source recovery failed.')
    ids=lambda s:re.findall(r'\bid=[\'"]([^\'"]+)[\'"]',s)
    if ids(original)!=ids(text): raise AssertionError('Original control IDs changed.')
    return text.encode('utf-8'), {'inverse_patch_recovers_original_bytes':True,'original_controls_preserved':True,
        'original_sha256':sha(raw),'output_sha256':sha(text.encode('utf-8')),
        'engine_changed':False,'database_keys_changed':False}

def build(source:Path, output:Path):
    source=source.resolve();output=output.resolve()
    if source==output or source.is_relative_to(output): raise ValueError('Unsafe output directory.')
    if output.exists(): raise FileExistsError('Output exists; nothing overwritten: '+str(output))
    before={}
    for name in RUNTIME:
        p=source/name
        if not p.is_file() or p.is_symlink(): raise ValueError('Missing/non-regular runtime asset: '+name)
        before[name]=sha(p.read_bytes())
    for name in ASSETS:
        if not (HERE/name).is_file(): raise ValueError('Missing switch asset: '+name)
    patched,report=patch_html((source/'index.html').read_bytes())
    template=(HERE/'sw-template.js').read_text(encoding='utf-8')
    build_id=sha(patched+template.encode()+b''.join((HERE/n).read_bytes() for n in ASSETS))[:16]
    try:
        output.mkdir(parents=True)
        for name in RUNTIME: shutil.copy2(source/name,output/name)
        (output/'index.html').write_bytes(patched)
        (output/'version-switch').mkdir()
        for name in ASSETS: shutil.copy2(HERE/name,output/'version-switch'/name)
        (output/'sw.js').write_text(template.replace('__BUILD_ID__',build_id),encoding='utf-8')
        (output/'.nojekyll').write_text('',encoding='utf-8')
        report.update(build_id=build_id,version='1',source_files=before,
            source_unchanged=all(sha((source/n).read_bytes())==h for n,h in before.items()),
            runtime_assets_preserved=all(sha((output/n).read_bytes())==before[n] for n in RUNTIME if n not in ('index.html','sw.js')),
            note='Preservation/build report, not a microphone, AI accuracy or physical-device test.')
        if not report['source_unchanged'] or not report['runtime_assets_preserved']: raise AssertionError('Source preservation failed.')
        (output/'version-switch-build-info.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
        return report
    except Exception:
        if output.exists(): shutil.rmtree(output)
        raise

def main():
    p=argparse.ArgumentParser(description=__doc__);p.add_argument('--source',type=Path,default=Path('.'));p.add_argument('--output',type=Path,default=Path('_site-v1'));args=p.parse_args()
    print(json.dumps(build(args.source,args.output),ensure_ascii=False,indent=2))
if __name__=='__main__':
    try: main()
    except (ValueError,OSError,AssertionError) as e: print('BUILD FAILED:',e,file=sys.stderr);raise SystemExit(1)
