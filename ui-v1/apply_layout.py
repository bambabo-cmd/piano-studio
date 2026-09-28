#!/usr/bin/env python3
"""Add the requested alpha.4 visual layout to the deploy-only v1 artifact.
Never writes the source repository index.html, DB identifiers or saved projects.
"""
from pathlib import Path
from html.parser import HTMLParser
import argparse, json, hashlib, re, shutil
HERE=Path(__file__).resolve().parent
ASSETS=('theme.js','original-addon.js','original-addon.css','main-ui.js')
def sha(b):return hashlib.sha256(b).hexdigest()
def endpos(s,tag):
 offsets=[0]+[m.end() for m in re.finditer('\n',s)]
 class P(HTMLParser):
  def __init__(self):super().__init__(convert_charrefs=False);self.hits=[]
  def handle_endtag(self,t):
   if t==tag:
    row,col=self.getpos();self.hits.append(offsets[row-1]+col)
 p=P();p.feed(s)
 if len(p.hits)!=1:raise ValueError('Ambiguous HTML boundary '+tag)
 return p.hits[0]
def apply(site):
 p=site/'index.html';raw=p.read_bytes();s=raw.decode()
 if 'PS_V1_LAYOUT4_HEAD' in s:raise ValueError('Already patched site')
 if "indexedDB.open('piano-studio-next-v2',1)" in s:raise ValueError('This is a v2 app: refused')
 if "indexedDB.open('home-piano-studio',1)" not in s:raise ValueError('Expected v1 database identifier missing')
 before={x:sha((site/x).read_bytes()) for x in ['bp.bundle.js','vexflow-bravura.js','manifest.webmanifest','icon-192.png','icon-512.png']}
 head='<!-- PS_V1_LAYOUT4_HEAD -->\n<script src="./ui-v1/theme.js"></script>\n<link rel="stylesheet" href="./ui-v1/original-addon.css">\n<!-- PS_V1_LAYOUT4_HEAD_END -->\n'
 body='<!-- PS_V1_LAYOUT4_BODY -->\n<script src="./ui-v1/original-addon.js"></script>\n<script src="./ui-v1/main-ui.js"></script>\n<!-- PS_V1_LAYOUT4_BODY_END -->\n'
 at=s.find('<style');assert at>=0;s=s[:at]+head+s[at:];at=endpos(s,'body');s=s[:at]+body+s[at:]
 assert s.replace(head,'',1).replace(body,'',1).encode()==raw
 assets={n:(HERE/n).read_bytes() for n in ASSETS}
 build=sha(s.encode()+b''.join(assets.values()))[:16]
 sw=(site/'sw.js').read_text();sw,n=re.subn(r"const BUILD = '[^']+';",f"const BUILD = 'v1-layout4-{build}';",sw);assert n==1
 anchor="'./version-switch/version-switch.js', './version-switch/version-switch.css'"
 assert sw.count(anchor)==1;sw=sw.replace(anchor,anchor+",\n  "+', '.join(repr('./ui-v1/'+n) for n in ASSETS))
 (site/'ui-v1').mkdir(exist_ok=False)
 for name,data in assets.items():(site/'ui-v1'/name).write_bytes(data)
 p.write_text(s);(site/'sw.js').write_text(sw)
 assert all(sha((site/x).read_bytes())==h for x,h in before.items())
 report={'version':'1.0.0-ui.4','layout':'previous alpha.4 main moved to v1','database':'home-piano-studio','source_index_untouched':True,'deploy_html_inverse_preserved':True,'runtime_assets_preserved':True,'extra_offline_assets':list(ASSETS),'build_id':build}
 (site/'v1-layout-info.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
 print(json.dumps(report,ensure_ascii=False,indent=2))
if __name__=='__main__':
 p=argparse.ArgumentParser();p.add_argument('--site',required=True,type=Path);apply(p.parse_args().site)
