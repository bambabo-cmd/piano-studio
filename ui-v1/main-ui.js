/* Piano Studio Next · real-engine responsive main UI, 1.0.0-ui.4.
 * No demo notes, fake recording, iframe, second AudioContext, or replacement DB.
 * Requires the reviewed classic-script engine (upstream bd54de7e).
 * CSS is inserted by the package builder into the CSS placeholder below.
 */
(() => {
  'use strict';
  if (window.PianoStudioMainUI) return;
  const RELEASE = '1.0.0-ui.4';
  const CSS = "/* Next main screen. All runtime-specific styling is scoped and reversible. */\nhtml.nxt-root{padding:0!important;overflow:hidden;height:100%}\nbody.nxt-ui{margin:0!important;padding:0!important;overflow:hidden;height:100%;font-family:system-ui,-apple-system,'Apple SD Gothic Neo','Malgun Gothic',sans-serif;font-size:14px}\n.nxt-root{--nxt-h:100vh;--nxt-blue:var(--accent);--nxt-green:#32bca1;--nxt-soft:color-mix(in srgb,var(--accent) 11%,var(--panel));--nxt-radius:17px}\n@supports(height:100dvh){.nxt-root{--nxt-h:100dvh}}\nhtml.nxt-root[data-theme=dark]{--paper:#101622;--panel:#182132;--ink:#e8edf7;--muted:#a1afc7;--line:#2d394e;--accent:#9bafff;--rec:#ef637a;--roll-bg:#131c2b;--roll-black:#1a2537;--roll-grid:#253148;--roll-beat:#394861;--roll-bar:#657795;--key-w:#dfe6f2;--key-b:#0c1220;--ruler:#1d293c;color-scheme:dark}\nhtml.nxt-root[data-theme=light]{--paper:#f3f5fa;--panel:#fff;--ink:#24324a;--muted:#66748d;--line:#dce3ee;--accent:#4261c8;--rec:#d84b62;--nxt-green:#198777;--roll-bg:#fff;--roll-black:#f0f3f9;--roll-grid:#e8edf5;--roll-beat:#d5deed;--roll-bar:#9dafc9;--key-w:#fff;--key-b:#263248;--ruler:#f5f7fc;color-scheme:light}\nbody.nxt-ui #ps-tools-dock,body.nxt-ui>.wrap,body.nxt-ui #deckToggle,body.nxt-ui #rollToggle{display:none!important}\nbody.nxt-ui button,body.nxt-ui select,body.nxt-ui input{font-family:inherit}\nbody.nxt-ui button,body.nxt-ui select,body.nxt-ui input[type=text],body.nxt-ui input[type=number]{min-height:44px;font-size:13px;border-radius:11px}\nbody.nxt-ui button{touch-action:manipulation}\nbody.nxt-ui button:focus-visible,body.nxt-ui select:focus-visible,body.nxt-ui [tabindex]:focus-visible{outline:3px solid var(--accent);outline-offset:2px}\n.nxt-icon{width:19px;height:19px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;flex-shrink:0;vertical-align:middle}\n.nxt-ui .nxt-button{display:inline-flex;align-items:center;justify-content:center;gap:7px;padding:8px 13px;font-weight:600;white-space:nowrap;background:var(--panel);color:var(--ink);border:1px solid var(--line)}\n.nxt-ui .nxt-iconbutton>span{display:none}\n.nxt-ui .nxt-iconbutton{width:44px;flex:0 0 44px;padding:0}\n.nxt-ui .nxt-primary{background:var(--accent);color:var(--paper);border-color:var(--accent)}\n.nxt-root[data-theme=light] .nxt-primary{color:white}\n.nxt-ui button[aria-pressed=true]{background:var(--nxt-soft);border-color:var(--accent);color:var(--accent)}\n.nxt-ui button[hidden],.nxt-ui [hidden]{display:none!important}\n.nxt-app{height:var(--nxt-h);display:grid;grid-template-rows:auto minmax(0,1fr) auto;padding:env(safe-area-inset-top,0px) env(safe-area-inset-right,0px) env(safe-area-inset-bottom,0px) env(safe-area-inset-left,0px);background:var(--paper);overflow:hidden}\n.nxt-app>header.top{height:68px;padding:0 22px;display:flex;gap:13px;flex-wrap:nowrap;justify-content:flex-start;background:var(--panel);border-bottom:1px solid var(--line);min-width:0}\n.nxt-app>header.top>h1{font-family:inherit;font-weight:780;font-size:19px;letter-spacing:-.8px;white-space:nowrap;margin:0;flex-shrink:0}\n.nxt-brand{display:flex;gap:3px;padding:8px 6px;border-radius:9px;background:var(--ink);height:34px;width:32px;flex-shrink:0}\n.nxt-brand i{flex:1;position:relative;border-radius:2px;background:var(--panel)}\n.nxt-brand i:not(:last-child):after{content:'';position:absolute;width:4px;height:9px;top:0;right:-3px;background:var(--ink);border:1px solid var(--ink);z-index:1}\n.nxt-head-song{flex:1;min-width:0;border-left:1px solid var(--line);padding-left:15px;font-size:12px;display:flex;flex-direction:column}\n.nxt-head-song strong{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:13px}\n.nxt-head-song small{color:var(--muted);font-size:10px}\n.nxt-head-actions{display:flex;gap:6px;align-items:center;margin-left:auto}\n.nxt-app .ps-version-switch{margin:0;order:2;font-size:11px;padding:2px;border-radius:11px}\n.nxt-app .ps-version-switch .ps-version-item{min-height:38px;padding:5px 9px}\n.nxt-app .ps-version-sub{display:none}\n.nxt-head-actions{order:3}.nxt-head-song{order:1}\n.nxt-workspace{display:grid;grid-template-columns:235px minmax(0,1fr) 214px;gap:16px;padding:18px 20px;min-width:0;min-height:0;overflow:hidden}\n.nxt-left{display:flex;flex-direction:column;gap:14px;min-height:0;min-width:0;overflow:hidden}\n.nxt-card{background:var(--panel);border:1px solid var(--line);border-radius:var(--nxt-radius);min-width:0}\n.nxt-record-card{padding:18px;flex-shrink:0}\n.nxt-eyebrow{font-size:10px;font-weight:750;letter-spacing:1.4px;color:var(--accent);margin-bottom:7px}\n.nxt-record-card h2{font-family:inherit;font-weight:750;font-size:21px;line-height:1.4;margin:0 0 5px;letter-spacing:-.8px}\n.nxt-record-intro{font-size:11px;line-height:1.8;color:var(--muted);margin:0}\n.nxt-record-status{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:15px;min-height:30px;font-size:11px}\n.nxt-led{width:6px;height:6px;display:inline-block;border-radius:100%;background:var(--nxt-green);margin-right:5px}\n.nxt-recording .nxt-led{background:var(--rec)}\nbody.nxt-ui #recTime{font:650 25px/1.1 system-ui,sans-serif;text-align:right;min-width:0;font-variant-numeric:tabular-nums}\n.nxt-meter-wrap{padding:9px 0 4px}.nxt-meter-wrap #meter{display:block;width:100%;height:18px;border-color:var(--line);border-radius:8px}\n.nxt-meter-caption{font-size:10px;line-height:1.5;color:var(--muted)}\n.nxt-card-actions{display:flex;gap:6px;margin-top:12px}.nxt-card-actions button{flex:1;font-size:11px;padding:6px}\n.nxt-home-tracks{flex:1;min-height:0;overflow:auto;padding:14px;scrollbar-width:thin}\n.nxt-home-tracks>h2,.nxt-practice>h2{font:700 12px/1.5 system-ui,sans-serif;margin:0 0 11px}\n.nxt-track-host{min-width:0}.nxt-ui .nxt-track-host .sec-head h2{display:none}.nxt-track-host .sec-head{margin-bottom:10px}.nxt-track-host .sec-head>div{gap:5px!important}\n.nxt-track-host .sec-head button{font-size:11px;padding:6px 9px;min-height:40px}.nxt-track-host #storageLbl{font-size:10px;display:block}\n.nxt-track-host p.hint{font-size:10px;line-height:1.7}\n.nxt-track-host .track{grid-template-columns:6px minmax(0,1fr);gap:7px;padding:10px;margin-bottom:8px;font-size:12px}\n.nxt-track-host .track .bar{grid-column:1;grid-row:1/5}.nxt-track-host .track .nm{grid-column:2;grid-row:1}\n.nxt-track-host .track .instw{grid-column:2;grid-row:2}.nxt-track-host .track .vol{grid-column:2;grid-row:3;min-height:25px}.nxt-track-host .track .btns{grid-column:2;grid-row:4;display:flex;gap:5px}.nxt-track-host .track .btns button{flex:1;min-height:38px;font-size:11px;padding:5px}\n.nxt-track-host .track .nm input{font-size:12px;min-height:34px}.nxt-track-host .track select{min-height:36px;font-size:11px}.nxt-track-host .track .meta{font-size:10px}\n.nxt-track-host .track .lsn{font-size:11px;min-height:36px}\n.nxt-track-host .empty{font-size:11px;line-height:1.8;padding:14px 10px}\n.nxt-score-card{display:flex;flex-direction:column;min-height:0;overflow:hidden;height:100%}\n.nxt-score-head{display:flex;align-items:center;gap:8px;padding:14px 18px;border-bottom:1px solid var(--line);min-height:65px;flex-shrink:0}\n.nxt-score-head h2{font:700 15px/1.4 system-ui,sans-serif;margin:0 0 3px}.nxt-score-head p{margin:0;font-size:10px;color:var(--muted)}\n.nxt-score-head>div:first-child{flex:1;min-width:0}.nxt-score-head button{font-size:11px;min-height:40px;padding:6px 10px}\n.nxt-score-head-actions{display:flex;gap:5px;align-items:center}\n.nxt-score-meta{display:flex;gap:8px;align-items:center;justify-content:space-between;padding:9px 16px 4px;min-height:39px;font-size:10px;color:var(--muted);flex-shrink:0}\n.nxt-score-meta select{min-height:32px;max-width:min(190px,45%);min-width:0;font-size:11px;padding:3px 6px;border-radius:8px}\n.nxt-hand-legend{white-space:nowrap;display:flex;gap:8px;font-size:10px}.nxt-hand-legend span:before{content:'●';font-size:8px;margin-right:4px}.nxt-hand-legend span:first-child{color:var(--accent)}.nxt-hand-legend span:last-child{color:var(--nxt-green)}\n.nxt-score-scroll{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;padding:12px 14px;scrollbar-width:thin}\n.nxt-score-render{min-height:0;width:100%;margin:auto}\n.nxt-score-render .sh-page{margin:0 auto 16px;background:white;box-shadow:0 1px 6px #0002;overflow:hidden}\n.nxt-score-render svg{display:block;width:100%;height:auto}\n.nxt-root[data-theme=dark] .nxt-score-render{filter:invert(.91) hue-rotate(180deg)}\n.nxt-score-empty{height:100%;min-height:160px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:20px;gap:12px;color:var(--muted)}\n.nxt-empty-mark{font-size:48px;color:var(--accent);font-weight:400;line-height:1.3}.nxt-score-empty h3{margin:0;font-size:16px;color:var(--ink)}.nxt-score-empty p{font-size:12px;line-height:1.9;max-width:300px;margin:0}\n.nxt-empty-actions{display:flex;gap:6px;flex-wrap:wrap;justify-content:center}.nxt-empty-actions button{font-size:11px}\n.nxt-score-foot{display:flex;align-items:center;gap:7px;justify-content:space-between;padding:8px 12px;border-top:1px solid var(--line);min-height:57px;flex-shrink:0}\n.nxt-score-foot button{font-size:11px;padding:6px 10px;min-height:40px}.nxt-score-summary{font-size:10px;color:var(--muted);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}\n.nxt-zoom{display:flex;align-items:center;gap:3px}.nxt-zoom button{min-width:32px;padding:4px 8px}.nxt-zoom span{font-size:10px;min-width:30px;text-align:center}\n.nxt-right{display:flex;flex-direction:column;gap:14px;overflow:auto;min-height:0}.nxt-practice{padding:17px}.nxt-practice label{display:block;font-size:11px;color:var(--muted);margin:11px 0 7px}.nxt-practice select{width:100%;font-size:11px;padding:0 8px}.nxt-practice p{font-size:11px;color:var(--muted);line-height:1.9}.nxt-practice button{width:100%;margin-top:7px;font-size:12px;justify-content:flex-start}\n.nxt-note{font-size:10px;color:var(--muted);line-height:1.9;padding:0 3px}\n.nxt-dock{display:flex;align-items:center;gap:16px;padding:11px 20px;border-top:1px solid var(--line);background:var(--panel);min-height:82px;min-width:0;z-index:5}\n.nxt-dock-buttons{display:flex;gap:7px;flex-shrink:0}.nxt-dock-buttons>button{min-width:112px;min-height:48px;padding:8px 12px;font-size:12px;font-weight:650;border-radius:12px}\nbody.nxt-ui #recBtn{width:auto;height:auto;display:flex;flex-direction:row;gap:8px;background:var(--rec);color:#fff;box-shadow:none!important;font-family:inherit;animation:none!important}\nbody.nxt-ui #recBtn .dot{width:11px;height:11px;margin:0;border-radius:50%;flex-shrink:0;background:white}body.nxt-ui #recBtn.recording .dot{border-radius:2px}\nbody.nxt-ui #playBtn{background:var(--accent);color:var(--paper);border-color:var(--accent);min-width:112px}\n.nxt-root[data-theme=light] #playBtn{color:#fff}\n.nxt-dock-buttons #nxt-metro[aria-pressed=true]{background:var(--nxt-soft);color:var(--accent);border-color:var(--accent)}\n.nxt-seek{min-width:70px;flex:1;display:grid;grid-template-columns:auto 1fr auto;column-gap:8px;align-items:center}\n.nxt-seek #posLbl,.nxt-seek>span{font:500 10px/1.5 system-ui,sans-serif;font-variant-numeric:tabular-nums;min-width:32px;color:var(--muted)}\n.nxt-seek input[type=range]{width:100%;min-width:0;min-height:28px;margin:0;accent-color:var(--accent)}\n.nxt-dock-extra{display:flex;gap:5px;flex-shrink:0}.nxt-dock-extra button{font-size:11px;padding:6px 9px}\n.nxt-drawer{position:fixed;inset:0;z-index:300;background:#050a166b;display:flex;align-items:center;justify-content:center;padding:18px;backdrop-filter:blur(4px)}\n.nxt-drawer-panel{display:flex;flex-direction:column;max-width:880px;width:100%;height:min(780px,calc(var(--nxt-h) - 36px));max-height:100%;min-height:0;border-radius:20px;background:var(--panel);border:1px solid var(--line);box-shadow:0 20px 70px #0005;overflow:hidden}\n.nxt-drawer-head{display:flex;align-items:center;gap:10px;padding:14px 18px;border-bottom:1px solid var(--line);flex-shrink:0}.nxt-drawer-head h2{font:700 16px/1.5 system-ui,sans-serif;margin:0}.nxt-drawer-head small{font-size:10px;color:var(--muted)}.nxt-drawer-head button{margin-left:auto}\n.nxt-drawer-tabs{display:flex;gap:5px;overflow-x:auto;flex-shrink:0;padding:9px 14px;border-bottom:1px solid var(--line);scrollbar-width:none}.nxt-drawer-tabs button{white-space:nowrap;flex:1;font-size:12px;padding:7px 12px;min-height:40px}.nxt-drawer-tabs button[aria-selected=true]{background:var(--nxt-soft);border-color:var(--accent);color:var(--accent)}\n.nxt-drawer-content{overflow:auto;overscroll-behavior:contain;min-height:0;flex:1;padding:20px;scrollbar-width:thin}\n.nxt-tab-panel h3{font-size:13px;margin:0 0 12px}.nxt-tab-panel .nxt-help-text{font-size:11px;color:var(--muted);line-height:1.9;margin:8px 0 15px}\n.nxt-field-group{display:flex;flex-direction:column;gap:12px;margin-bottom:20px}.nxt-field-group>label{display:flex;align-items:center;gap:10px;font-size:12px}.nxt-field-group>label input,.nxt-field-group>label select{min-width:0;flex:1;max-width:600px;width:auto!important}\n.nxt-file-actions{display:grid;grid-template-columns:1fr 1fr;gap:8px}.nxt-file-actions button{font-size:12px;text-align:left;padding:10px 13px;min-height:46px}.nxt-file-actions #songDel{color:var(--rec)}\n.nxt-tab-panel .opts{display:flex;flex-direction:column;align-items:stretch;gap:13px;padding:15px;border:1px solid var(--line);border-radius:14px;margin-bottom:12px}.nxt-tab-panel .opts label{font-size:12px;gap:8px;white-space:normal}.nxt-tab-panel .opts select{flex:1;max-width:300px}\n.nxt-tab-panel #analysis{display:flex;flex-direction:column;align-items:stretch;gap:13px;margin-top:10px;padding:15px}.nxt-tab-panel #analysis label{white-space:normal;display:flex;align-items:center;gap:10px;font-size:12px}.nxt-tab-panel #analysis input[type=range],.nxt-tab-panel #analysis select{flex:1;min-width:0;max-width:100%;font-size:12px}\n.nxt-tab-panel .tempo{padding:0;border:0;background:transparent;display:block!important}.nxt-tab-panel .tempo>summary{display:none}.nxt-tab-panel .tp-grid{display:grid;grid-template-columns:1fr 1fr;margin:0;gap:12px}.nxt-tab-panel .tp-card{padding:14px;gap:10px}.nxt-tab-panel .tp-card .hint{font-size:11px;line-height:1.8}.nxt-tab-panel .tp-card b{font-size:13px}.nxt-tab-panel .tp-card .row{font-size:12px;gap:7px}.nxt-tab-panel .tp-card .row label{white-space:normal}.nxt-tab-panel .tp-card button{font-size:11px;padding:7px 9px}.nxt-tab-panel .scope{font-size:12px;flex-wrap:wrap}\n.nxt-tab-panel #ps-tools-theme{display:flex;flex-wrap:wrap;gap:10px;border:0;padding:0;background:transparent;margin:0}.nxt-tab-panel #ps-tools-theme label{font-size:12px}\n.nxt-tab-panel .metro-row{display:flex;gap:14px;flex-direction:column;align-items:stretch;font-size:12px}.nxt-tab-panel .metro-row label{display:flex;align-items:center;gap:10px}.nxt-tab-panel .metro-row select,.nxt-tab-panel .metro-row input[type=range]{flex:1}\n.nxt-theme-buttons{display:flex;gap:6px;margin-bottom:18px}.nxt-theme-buttons button{flex:1;font-size:12px;white-space:nowrap}\n.nxt-tab-panel .help{font-size:12px;line-height:1.9}.nxt-tab-panel .foot{font-size:11px;line-height:1.8}\n#nxt-drawer-tracks #tracks{display:grid;grid-template-columns:repeat(auto-fit,minmax(245px,1fr));gap:10px;align-items:start}\n.nxt-editor{position:fixed;inset:0;height:var(--nxt-h);z-index:200;display:grid;grid-template-rows:58px 49px minmax(0,1fr) auto;background:var(--paper);padding:env(safe-area-inset-top,0px) env(safe-area-inset-right,0px) env(safe-area-inset-bottom,0px) env(safe-area-inset-left,0px);overflow:hidden}\n.nxt-edit-head{display:flex;gap:10px;align-items:center;padding:0 18px;background:var(--panel);border-bottom:1px solid var(--line)}.nxt-edit-head h2{font:700 14px/1.5 system-ui,sans-serif;margin:0;max-width:45vw;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.nxt-edit-head small{font-size:10px;color:var(--muted)}.nxt-edit-head>button:last-child{margin-left:auto}\n.nxt-edit-tabs{display:flex;gap:6px;align-items:center;padding:0 18px;background:var(--panel);border-bottom:1px solid var(--line);overflow-x:auto;scrollbar-width:none}.nxt-edit-tabs button{font-size:11px;padding:5px 11px;min-height:36px;white-space:nowrap}.nxt-edit-tabs .nxt-grow{flex:1}\n.nxt-edit-layout{display:grid;grid-template-columns:190px minmax(0,1fr) 206px;gap:12px;padding:12px;min-height:0;overflow:hidden}.nxt-edit-tracks{padding:12px;overflow:auto;scrollbar-width:thin}\n.nxt-edit-center{display:grid;grid-template-rows:minmax(0,var(--nxt-score-share,42%)) 10px minmax(0,1fr);min-height:0;min-width:0;overflow:hidden}.nxt-edit-sheet{min-height:0;overflow:hidden}.nxt-edit-center[data-view=roll]{grid-template-rows:minmax(0,1fr)}.nxt-edit-center[data-view=roll] .nxt-edit-sheet,.nxt-edit-center[data-view=roll] .nxt-splitter{display:none}.nxt-edit-center[data-view=score]{grid-template-rows:minmax(0,1fr)}.nxt-edit-center[data-view=score] .nxt-edit-roll,.nxt-edit-center[data-view=score] .nxt-splitter{display:none}\n.nxt-splitter{display:flex;justify-content:center;align-items:center;touch-action:none;cursor:row-resize}.nxt-splitter:after{content:'';width:34px;height:3px;border-radius:3px;background:var(--line)}\n.nxt-edit-roll{display:flex;min-height:0;overflow:hidden}.nxt-native-editor{display:flex;flex-direction:column;min-height:0;min-width:0;width:100%;height:100%;margin:0!important;padding:10px;border-radius:16px;overflow:hidden;background:var(--panel);border:1px solid var(--line)}\n.nxt-native-editor>.sec-head{display:none}.nxt-native-editor>.toolbar{display:flex!important;flex-wrap:nowrap;overflow-x:auto;gap:5px;flex-shrink:0;margin:0 0 8px;min-height:42px;max-height:90px;align-items:center;scrollbar-width:thin;padding:1px 2px 4px}\n.nxt-native-editor>.toolbar>*{flex-shrink:0}.nxt-native-editor>.toolbar button,.nxt-native-editor>.toolbar select{min-height:36px;font-size:11px;padding:5px 9px}.nxt-native-editor>.toolbar .hint{font-size:11px}\nbody.nxt-ui .nxt-native-editor #rollWrap{display:block!important;min-height:70px!important;height:auto!important;flex:1;border-radius:11px;overflow:hidden}.nxt-native-editor #roll{height:100%;width:100%}\n.nxt-edit-inspector{padding:16px;overflow:auto;scrollbar-width:thin}.nxt-edit-inspector h3{font-size:12px;margin:0 0 15px}.nxt-selection-name{font-size:23px;font-weight:700;margin-bottom:6px}.nxt-selection-info{font-size:10px;line-height:1.7;color:var(--muted);min-height:17px}.nxt-edit-inspector label{display:block;font-size:11px;color:var(--muted);margin:15px 0 7px}\n.nxt-inspector-row{display:flex;gap:5px;align-items:center}.nxt-inspector-row button{flex:1;padding:6px 9px;font-size:11px}.nxt-inspector-row span{font-size:11px;text-align:center;min-width:40px}\n.nxt-edit-inspector p{font-size:10px;color:var(--muted);line-height:1.9}.nxt-edit-inspector .nxt-delete{width:100%;color:var(--rec);margin-top:16px}\n.nxt-edit-foot{display:flex;align-items:center;gap:9px;border-top:1px solid var(--line);background:var(--panel);padding:9px 16px;min-height:66px}.nxt-edit-foot button{font-size:11px;min-height:42px;padding:7px 11px}.nxt-edit-foot .nxt-edit-time{font-size:11px;color:var(--muted);font-variant-numeric:tabular-nums}.nxt-edit-foot .nxt-foot-help{font-size:10px;color:var(--muted);margin-left:auto}.nxt-mobile-properties{display:none}\n.nxt-editor .nxt-score-foot .nxt-open-editor{display:none}.nxt-editor .nxt-score-head{min-height:44px;padding:7px 12px}.nxt-editor .nxt-score-head p{display:none}.nxt-editor .nxt-score-meta{padding-top:4px;min-height:31px}.nxt-editor .nxt-score-scroll{padding-top:5px}.nxt-editor .nxt-score-foot{min-height:43px;padding:2px 9px}.nxt-editor .nxt-score-foot button{min-height:36px}.nxt-editor .nxt-score-head h2{font-size:12px}\nbody.nxt-ui>.overlay{z-index:500;padding:14px}body.nxt-ui>.overlay .panel{max-height:calc(var(--nxt-h) - 28px);overflow:auto}body.nxt-ui #overlay>.panel{width:min(580px,100%)}\nbody.nxt-ui #sheetPanel>.sheet{height:min(1100px,calc(var(--nxt-h) - 28px));overflow:hidden;max-height:100%;min-width:0}body.nxt-ui .sh-box{min-height:80px;overscroll-behavior:contain}\nbody.nxt-ui #toast{z-index:650;bottom:calc(100px + env(safe-area-inset-bottom,0px))}\n.nxt-failure-notice{padding:10px 14px;margin:12px;border:1px solid #b78234;border-radius:10px;background:#fff6df;color:#62440a;font-size:13px}\n/* Space-driven device layouts; orientation changes never recreate the engine. */\n.nxt-root[data-next-layout=tablet-landscape] .nxt-workspace{grid-template-columns:210px minmax(0,1fr);padding:14px;gap:12px}\n.nxt-root[data-next-layout=tablet-landscape] .nxt-right{display:none}\n.nxt-root[data-next-layout=tablet-landscape] .nxt-edit-layout{grid-template-columns:158px minmax(0,1fr) 182px;gap:9px;padding:9px}\n.nxt-root[data-next-layout=tablet-portrait] .nxt-workspace{grid-template-columns:1fr;grid-template-rows:auto minmax(0,1fr);padding:16px;gap:14px}\n.nxt-root[data-next-layout=tablet-portrait] .nxt-right,.nxt-root[data-next-layout=tablet-portrait] .nxt-home-tracks{display:none}\n.nxt-root[data-next-layout=tablet-portrait] .nxt-record-card{display:grid;grid-template-columns:1fr 230px;gap:3px 20px;padding:15px 19px}\n.nxt-root[data-next-layout=tablet-portrait] .nxt-record-intro-group{grid-row:1/4}.nxt-root[data-next-layout=tablet-portrait] .nxt-record-status{margin:0}.nxt-root[data-next-layout=tablet-portrait] .nxt-card-actions{display:none}\n.nxt-root[data-next-layout=tablet-portrait] .nxt-edit-layout{grid-template-columns:1fr;padding:12px}.nxt-root[data-next-layout=tablet-portrait] .nxt-edit-tracks,.nxt-root[data-next-layout=tablet-portrait] .nxt-edit-inspector{display:none}\n.nxt-root[data-next-layout=tablet-portrait] .nxt-mobile-properties{display:flex;gap:5px;align-items:center;margin-left:auto}.nxt-root[data-next-layout=tablet-portrait] .nxt-foot-help{display:none}\n.nxt-root[data-next-layout=tablet-portrait] .nxt-dock-extra{display:none}.nxt-root[data-next-layout=tablet-portrait] .nxt-dock{gap:12px;padding:11px 16px}.nxt-root[data-next-layout=tablet-portrait] .nxt-dock-buttons>button{min-width:107px}\n.nxt-root[data-next-layout^=phone] .nxt-app>header.top{height:54px;padding:0 12px;gap:7px}\n.nxt-root[data-next-layout^=phone] .nxt-app>header.top>h1{font-size:15px;letter-spacing:-.6px}\n.nxt-root[data-next-layout^=phone] .nxt-brand{width:27px;height:29px;padding:6px 5px;gap:2px}\n.nxt-root[data-next-layout^=phone] .nxt-head-song,.nxt-root[data-next-layout^=phone] .nxt-head-metro,.nxt-root[data-next-layout^=phone] .nxt-head-edit{display:none}\n.nxt-root[data-next-layout^=phone] .nxt-head-actions{gap:3px;margin:0}\n.nxt-root[data-next-layout^=phone] .nxt-app .ps-version-switch{margin-left:auto;font-size:10px;gap:0;padding:2px}\n.nxt-root[data-next-layout^=phone] .nxt-app .ps-version-item{padding:4px 7px;min-height:37px}\n.nxt-root[data-next-layout^=phone] .nxt-workspace{padding:11px;gap:11px;grid-template-columns:1fr;grid-template-rows:auto minmax(0,1fr)}\n.nxt-root[data-next-layout^=phone] .nxt-right,.nxt-root[data-next-layout^=phone] .nxt-home-tracks{display:none}\n.nxt-root[data-next-layout^=phone] .nxt-record-card{padding:11px 13px;display:grid;grid-template-columns:1fr 108px;gap:1px 12px;border-radius:14px}\n.nxt-root[data-next-layout^=phone] .nxt-record-intro-group{grid-row:1/4}.nxt-root[data-next-layout^=phone] .nxt-eyebrow{font-size:8px;margin-bottom:4px}\n.nxt-root[data-next-layout^=phone] .nxt-record-card h2{font-size:17px;margin-bottom:3px}.nxt-root[data-next-layout^=phone] .nxt-record-intro{font-size:10px;line-height:1.7;max-height:51px;overflow:auto}\n.nxt-root[data-next-layout^=phone] .nxt-record-status{margin:0;font-size:9px;min-height:25px;gap:3px}.nxt-root[data-next-layout^=phone] #recTime{font-size:19px}\n.nxt-root[data-next-layout^=phone] .nxt-meter-wrap{padding:3px 0}.nxt-root[data-next-layout^=phone] .nxt-meter-caption{font-size:8px}.nxt-root[data-next-layout^=phone] .nxt-meter-wrap #meter{height:12px}\n.nxt-root[data-next-layout^=phone] .nxt-card-actions{display:none}\n.nxt-root[data-next-layout^=phone] .nxt-score-card{border-radius:14px}.nxt-root[data-next-layout^=phone] .nxt-score-head{padding:9px 11px;min-height:58px}\n.nxt-root[data-next-layout^=phone] .nxt-score-head h2{font-size:13px}.nxt-root[data-next-layout^=phone] .nxt-score-head p{font-size:9px}.nxt-root[data-next-layout^=phone] .nxt-score-head button{font-size:10px;min-height:39px;padding:6px 8px}\n.nxt-root[data-next-layout^=phone] .nxt-score-meta{padding:6px 10px 2px;min-height:35px}.nxt-root[data-next-layout^=phone] .nxt-score-meta select{max-width:175px;font-size:10px}\n.nxt-root[data-next-layout^=phone] .nxt-hand-legend{font-size:9px;gap:7px}\n.nxt-root[data-next-layout^=phone] .nxt-score-scroll{padding:8px 5px}.nxt-root[data-next-layout^=phone] .nxt-score-empty{padding:12px;gap:11px;min-height:150px}.nxt-root[data-next-layout^=phone] .nxt-score-empty p{font-size:11px}.nxt-root[data-next-layout^=phone] .nxt-score-empty h3{font-size:14px}\n.nxt-root[data-next-layout^=phone] .nxt-score-foot{padding:4px 8px;gap:5px;min-height:52px}.nxt-root[data-next-layout^=phone] .nxt-score-foot button{font-size:10px;padding:5px 8px}.nxt-root[data-next-layout^=phone] .nxt-score-summary{max-width:100px;font-size:9px}.nxt-root[data-next-layout^=phone] .nxt-score-foot .nxt-open-editor .nxt-icon{display:none}\n.nxt-root[data-next-layout^=phone] .nxt-dock{display:grid;grid-template-rows:auto auto;gap:1px;padding:4px 10px 8px;min-height:96px}\n.nxt-root[data-next-layout^=phone] .nxt-dock-buttons{grid-row:2;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:5px;width:100%}\n.nxt-root[data-next-layout^=phone] .nxt-dock-buttons>button{min-width:0!important;min-height:47px;padding:6px 3px;font-size:11px;gap:5px;border-radius:11px}\n.nxt-root[data-next-layout^=phone] .nxt-dock-buttons .nxt-icon{width:15px;height:15px}.nxt-root[data-next-layout^=phone] #recBtn .dot{width:9px;height:9px}\n.nxt-root[data-next-layout^=phone] .nxt-seek{grid-row:1;width:100%;gap:8px;min-height:28px}.nxt-root[data-next-layout^=phone] .nxt-seek #posLbl{font-size:9px}\n.nxt-root[data-next-layout^=phone] .nxt-dock-extra{display:none}\n.nxt-root[data-next-layout^=phone] .nxt-drawer{padding:0;align-items:flex-end;backdrop-filter:blur(3px)}\n.nxt-root[data-next-layout^=phone] .nxt-drawer-panel{height:calc(var(--nxt-h) - env(safe-area-inset-top,0px));max-height:100%;border-radius:17px 17px 0 0;padding-bottom:env(safe-area-inset-bottom,0px)}\n.nxt-root[data-next-layout^=phone] .nxt-drawer-head{padding:10px 12px}.nxt-root[data-next-layout^=phone] .nxt-drawer-tabs{padding:7px 9px;gap:4px}.nxt-root[data-next-layout^=phone] .nxt-drawer-tabs button{font-size:11px;padding:7px 10px}.nxt-root[data-next-layout^=phone] .nxt-drawer-content{padding:15px 12px}.nxt-root[data-next-layout^=phone] .nxt-file-actions{grid-template-columns:1fr}.nxt-root[data-next-layout^=phone] .nxt-tab-panel .tp-grid{grid-template-columns:1fr}\n.nxt-root[data-next-layout^=phone] .nxt-editor{grid-template-rows:53px 46px minmax(0,1fr) auto}\n.nxt-root[data-next-layout^=phone] .nxt-edit-head{padding:0 10px;gap:8px}.nxt-root[data-next-layout^=phone] .nxt-edit-head h2{font-size:13px}.nxt-root[data-next-layout^=phone] .nxt-edit-head small{font-size:9px}\n.nxt-root[data-next-layout^=phone] .nxt-edit-tabs{padding:0 9px;gap:4px}.nxt-root[data-next-layout^=phone] .nxt-edit-tabs button{font-size:10px;min-height:37px;padding:5px 9px}\n.nxt-root[data-next-layout^=phone] .nxt-edit-layout{grid-template-columns:1fr;padding:8px;gap:0}.nxt-root[data-next-layout^=phone] .nxt-edit-tracks,.nxt-root[data-next-layout^=phone] .nxt-edit-inspector,.nxt-root[data-next-layout^=phone] .nxt-view-split{display:none}\n.nxt-root[data-next-layout^=phone] .nxt-native-editor{padding:7px;border-radius:13px}.nxt-root[data-next-layout^=phone] .nxt-native-editor>.toolbar{max-height:44px;min-height:42px;margin-bottom:5px}\n.nxt-root[data-next-layout^=phone] .nxt-edit-foot{display:flex;flex-wrap:wrap;gap:4px;padding:6px 10px 8px;min-height:99px;justify-content:space-between}.nxt-root[data-next-layout^=phone] .nxt-foot-help{display:none}\n.nxt-root[data-next-layout^=phone] .nxt-mobile-properties{display:flex;width:100%;order:-1;gap:5px;justify-content:space-between;align-items:center}.nxt-root[data-next-layout^=phone] .nxt-mobile-properties button{font-size:11px;min-height:40px;padding:5px 10px}.nxt-root[data-next-layout^=phone] .nxt-mobile-properties>span{font-size:11px;min-width:36px}\n.nxt-root[data-next-layout^=phone] .nxt-edit-foot>button{min-height:39px}.nxt-root[data-next-layout^=phone] .nxt-edit-foot .nxt-edit-time{font-size:10px}\n.nxt-root[data-next-layout=phone-landscape] .nxt-app>header.top{height:46px}.nxt-root[data-next-layout=phone-landscape] .nxt-head-song{display:flex}.nxt-root[data-next-layout=phone-landscape] .nxt-head-song small{display:none}\n.nxt-root[data-next-layout=phone-landscape] .nxt-workspace{grid-template-columns:172px minmax(0,1fr);grid-template-rows:minmax(0,1fr);padding:8px 12px;gap:10px}\n.nxt-root[data-next-layout=phone-landscape] .nxt-record-card{display:flex;flex-direction:column;height:100%;padding:12px;justify-content:flex-start;overflow:auto}.nxt-root[data-next-layout=phone-landscape] .nxt-record-intro-group{width:100%}.nxt-root[data-next-layout=phone-landscape] .nxt-record-status{width:100%;margin-top:auto;padding-top:7px}.nxt-root[data-next-layout=phone-landscape] .nxt-meter-wrap{width:100%;margin-top:7px}.nxt-root[data-next-layout=phone-landscape] .nxt-meter-caption{width:100%}\n.nxt-root[data-next-layout=phone-landscape] .nxt-score-head{min-height:41px;padding:3px 10px}.nxt-root[data-next-layout=phone-landscape] .nxt-score-head p{display:none}.nxt-root[data-next-layout=phone-landscape] .nxt-score-meta{display:none}.nxt-root[data-next-layout=phone-landscape] .nxt-score-foot{min-height:40px;padding:0 7px}.nxt-root[data-next-layout=phone-landscape] .nxt-score-foot button{min-height:36px}.nxt-root[data-next-layout=phone-landscape] .nxt-score-empty{min-height:0;gap:4px}.nxt-root[data-next-layout=phone-landscape] .nxt-empty-mark{display:none}.nxt-root[data-next-layout=phone-landscape] .nxt-score-empty p{font-size:10px;line-height:1.4}\n.nxt-root[data-next-layout=phone-landscape] .nxt-dock{display:flex;min-height:62px;padding:6px 12px;gap:12px}.nxt-root[data-next-layout=phone-landscape] .nxt-seek{order:0;flex:1;min-width:85px;width:auto}.nxt-root[data-next-layout=phone-landscape] .nxt-dock-buttons{order:1;display:flex;width:auto;gap:6px}.nxt-root[data-next-layout=phone-landscape] .nxt-dock-buttons>button{min-width:92px!important;min-height:44px;font-size:11px;padding:6px 8px}\n.nxt-root[data-next-layout=phone-landscape] .nxt-editor{grid-template-rows:45px 42px minmax(0,1fr) 56px}.nxt-root[data-next-layout=phone-landscape] .nxt-edit-foot{flex-wrap:nowrap;min-height:56px;padding:6px 10px;gap:7px}.nxt-root[data-next-layout=phone-landscape] .nxt-mobile-properties{order:3;width:auto;margin-left:auto;justify-content:flex-end}.nxt-root[data-next-layout=phone-landscape] .nxt-edit-time{display:none}.nxt-root[data-next-layout=phone-landscape] .nxt-mobile-properties button{padding:5px 8px;min-width:34px}\n@media(max-width:359px){.nxt-root[data-next-layout^=phone] .nxt-brand{display:none}.nxt-root[data-next-layout^=phone] .nxt-app>header.top{gap:5px;padding:0 8px}.nxt-root[data-next-layout^=phone] .nxt-app>header.top>h1{font-size:14px}.nxt-root[data-next-layout^=phone] .nxt-app .ps-version-item{padding:4px 5px}.nxt-root[data-next-layout^=phone] .nxt-dock-buttons .nxt-icon{display:none}.nxt-root[data-next-layout^=phone] .nxt-workspace{padding:8px}.nxt-root[data-next-layout^=phone] .nxt-score-summary{display:none}}\n@media print{.nxt-app,.nxt-editor,.nxt-drawer{display:none!important}}\n\n.nxt-hand-legend{color:var(--muted);font-size:10px}\n.nxt-root[data-next-layout^=phone] .nxt-hand-legend{font-size:9px}\n.nxt-score-empty p{word-break:keep-all;overflow-wrap:break-word}\n\n.nxt-card-actions{flex-direction:column}.nxt-card-actions button{min-width:0;width:100%}.nxt-record-intro,.nxt-practice p{word-break:keep-all;overflow-wrap:break-word}\n";
  const q = id => document.getElementById(id);
  const all = (s, root=document) => [...root.querySelectorAll(s)];
  const flags = {mounted:false, ready:false, reason:'waiting-for-engine'};
  const ui = {editor:false, drawer:null, layout:'', view:'split', zoom:1, scoreTrack:'all',
    revision:0, drawn:-1, renderTimer:0, rendering:false, forceRender:false,
    lastProject:null, projectSignature:'', trackSignature:'', count:0, end:0, lastSelection:'', lastNative:null,
    busy:false, returnFocus:null, editorFocus:null, tracksDirty:true, lastWidth:0};
  const moved=[], added=[], listeners=[], observers=[];
  const originalRefs = new Map();
  let native={}, mountedNodes={}, tickTimer=null, folded=[], retryTimer=null;
  const iconPaths={
    menu:'<path d="M4 6h16M4 12h16M4 18h16"/>', close:'<path d="m6 6 12 12M18 6 6 18"/>',
    score:'<path d="M4 6h16M4 10h16M4 14h16M4 18h16M9 5v11"/><ellipse cx="7" cy="17" rx="2" ry="1.5"/>',
    edit:'<path d="m4 16 11-11 4 4L8 20H4v-4ZM13 7l4 4"/>',
    play:'<path d="m8 5 11 7-11 7V5Z"/>', metro:'<path d="m8 3-4 18h16L16 3H8ZM7 16h10M12 16l6-11"/>',
    upload:'<path d="M4 15v5h16v-5M12 16V3m-5 5 5-5 5 5"/>',
    keys:'<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M7 9v4M12 9v4M17 9v4M8 16h8"/>',
    gear:'<circle cx="12" cy="12" r="3"/><path d="m10 3-1 3-3 1-3-1-1 4 3 2v3l-2 2 3 3 3-1 3 1 1 2 4-2v-3l2-2 3-1-1-4-3-1-1-3-4-2Z"/>',
    check:'<path d="m5 12 4 4L20 5"/>', folder:'<path d="M3 6h6l2 3h10v11H3V6Z"/>',
    back:'<path d="M4 5v14m15-14-11 7 11 7V5Z"/>', plus:'<path d="M12 5v14M5 12h14"/>'
  };
  const icon=(name)=>`<svg class="nxt-icon" viewBox="0 0 24 24" aria-hidden="true">${iconPaths[name]||iconPaths.score}</svg>`;
  const btn=(action,label,name='',cls='',extra='')=>`<button type="button" class="nxt-button ${cls}" data-nxt-action="${action}" ${extra}>${name?icon(name):''}<span>${label}</span></button>`;
  const nativeBtn=(id,label,name='',cls='')=>`<button type="button" class="nxt-button ${cls}" data-nxt-native="${id}">${name?icon(name):''}<span>${label}</span></button>`;
  function listen(el,type,fn,options){el.addEventListener(type,fn,options);listeners.push(()=>el.removeEventListener(type,fn,options));}
  function watch(el,options,fn){if(!el)return;const o=new MutationObserver(fn);o.observe(el,options);observers.push(o);}
  function put(el,host){if(!el||!host)throw new Error('화면의 원래 구성요소를 찾지 못했습니다.');if(el.parentElement===host)return;const marker=document.createComment('next-main:original-position');el.before(marker);moved.push([el,marker]);host.appendChild(el);}
  function place(el,host){if(el&&host&&el.parentElement!==host)host.appendChild(el);}
  function text(id,value){const el=q(id);if(el&&el.textContent!==String(value))el.textContent=String(value);}
  function fmt(sec){sec=Math.max(0,Number(sec)||0);return String(Math.floor(sec/60))+':'+String(Math.floor(sec%60)).padStart(2,'0');}
  function notify(message){if(typeof window.toast==='function')window.toast(message,4500);else console.warn(message);}
  function getProject(){return typeof project!=='undefined'?project:null;}
  function currentTrack(){return typeof activeTrack==='function'?activeTrack():null;}
  function isRecording(){return typeof recording!=='undefined'&&!!recording;}
  function isPlaying(){return typeof playing!=='undefined'&&!!playing;}
  function position(){return typeof curPos==='function'?curPos():typeof pos!=='undefined'?pos:0;}
  function standaloneRunning(){return q('mpOpen')?.classList.contains('running')||false;}
  function nativeModal(){return ['overlay','metroPanel','sheetPanel'].map(q).find(el=>el&&!el.hidden)||null;}
  function workBusy(){return !!(q('overlay')&&!q('overlay').hidden);}
  function blocked(){return isRecording()||workBusy();}
  function engineReady(){return !!getProject()&&typeof window.renderScore==='function'&&typeof window.buildScore==='function'&&typeof window.loadVF==='function'&&typeof window.edit==='function'&&typeof window.resizeRoll==='function'&&typeof q('recBtn')?.onclick==='function'&&typeof q('mpStart')?.onclick==='function';}
  function refreshPalette(){if(typeof window.readColors==='function')window.readColors();if(typeof window.drawRoll==='function')window.drawRoll();}
  function diagnostics(){return {release:RELEASE,...flags,layout:ui.layout,editorOpen:ui.editor,drawer:ui.drawer,
    realProject:!!getProject(),demoData:false,originalElementsRetained:[...originalRefs].every(([id,el])=>q(id)===el),
    mainScoreNoteCount:ui.count,metronomeRunning:standaloneRunning(),recording:isRecording(),playing:isPlaying(),
    database:'home-piano-studio',recognitionAlgorithmChanged:false};}
  window.PianoStudioMainUI=Object.freeze({diagnostics});
  function meta(mode){window.PianoStudioV1=Object.freeze({version:RELEASE,database:'home-piano-studio',
    mode,fullResponsiveUIIntegrated:mode==='responsive-main-with-original-engine',recognitionAlgorithmChanged:false});}

  function makeShell(){
    const app=document.createElement('div');app.id='nxt-app';app.className='nxt-app';
    app.innerHTML=`<main class="nxt-workspace">
      <aside class="nxt-left"><section class="nxt-record-card nxt-card" id="nxt-record-card">
        <div class="nxt-record-intro-group"><div class="nxt-eyebrow">RECORD &amp; PRACTICE</div><h2>연주를 담아 보세요</h2><p class="nxt-record-intro" id="nxt-record-hint-slot"></p></div>
        <div class="nxt-record-status"><span><i class="nxt-led"></i><span id="nxt-record-state">녹음 준비</span></span><span id="nxt-record-time-slot"></span></div>
        <div class="nxt-meter-wrap" id="nxt-meter-slot"></div><div class="nxt-meter-caption" id="nxt-meter-caption">녹음 중 실제 입력 음량</div>
        <div class="nxt-card-actions">${nativeBtn('importAudio','파일 불러오기','upload')}${btn('drawer:record','녹음 설정','gear')}</div>
      </section><section class="nxt-home-tracks nxt-card"><h2>트랙 · 악기</h2><div class="nxt-track-host" id="nxt-home-tracks"></div></section></aside>
      <div id="nxt-home-score-slot" style="min-height:0;min-width:0"></div>
      <aside class="nxt-right"><section class="nxt-practice nxt-card"><h2>연습에 맞게 보기</h2><label for="nxt-split">왼손 · 오른손 악보</label><select id="nxt-split"><option value="hand">음표에 지정한 손 구분</option><option value="60">가운데 도(C4) 아래는 왼손</option><option value="55">솔(G3) 아래는 왼손</option><option value="48">낮은 도(C3) 아래는 왼손</option><option value="none">한 줄로 보기</option></select><p>손 배정은 집중 편집에서 고칠 수 있어요. 이미 정한 손은 악보에도 반영됩니다.</p>${nativeBtn('typeBtn','계이름 타이핑','keys')}${btn('drawer:tracks','트랙 · 악기 선택','folder')}</section>
      <section class="nxt-practice nxt-card"><h2>필요한 부분만 고치기</h2>${btn('editor','집중 편집 열기','edit')}${btn('drawer:correction','박자 · 양손 보정','score')}${btn('arrange','코드 · 반주 · 편곡','score')}</section>
      <div class="nxt-note">현재 곡은 이 브라우저에 저장돼요.<br>다른 기기로 옮길 때는 곡 파일을 내보내세요.</div></aside>
    </main><footer class="nxt-dock" aria-label="녹음·악보 생성·재생·메트로놈">
      <div class="nxt-dock-buttons" id="nxt-dock-buttons">${btn('generate','악보 생성','score','', 'id="nxt-generate" title="현재 음표로 악보 생성 · 원음 재분석은 녹음·AI 설정"')}${btn('metro','메트로놈','metro','', 'id="nxt-metro" aria-pressed="false"')}</div>
      <div class="nxt-seek" id="nxt-seek-slot"><input id="nxt-seek" type="range" min="0" max="1" step="0.01" value="0" aria-label="실제 곡 재생 위치"><span id="nxt-duration">0:00</span></div>
      <div class="nxt-dock-extra" id="nxt-extra-slot">${btn('drawer:practice','재생 설정','gear','nxt-iconbutton','aria-label="재생 음량·빠르기 설정"')}</div>
    </footer>`;
    const score=document.createElement('section');score.id='nxt-score';score.className='nxt-score-card nxt-card';
    score.innerHTML=`<div class="nxt-score-head"><div><h2>나의 연주 악보</h2><p id="nxt-score-subtitle">현재 곡의 실제 음표를 표시합니다</p></div><div class="nxt-score-head-actions">${nativeBtn('typeBtn','타이핑','keys')}${btn('export','저장','upload')}</div></div>
      <div class="nxt-score-meta"><select id="nxt-score-track" aria-label="악보에 표시할 트랙"><option value="all">모든 트랙</option></select><div class="nxt-hand-legend" id="nxt-hand-legend">위: 오른손 · 아래: 왼손</div></div>
      <div class="nxt-score-scroll" id="nxt-score-scroll" tabindex="0" aria-label="현재 곡 악보. 내부 스크롤 및 확대 가능"><div class="nxt-score-render" id="nxt-score-render" hidden></div><div class="nxt-score-empty" id="nxt-score-empty"><div class="nxt-empty-mark" aria-hidden="true">♬</div><h3 id="nxt-empty-title">첫 음을 담아 보세요</h3><p id="nxt-empty-text">녹음하거나 계이름을 입력하면<br>이곳에 실제 연주 악보가 나타나요.</p><div class="nxt-empty-actions">${nativeBtn('typeBtn','도도솔솔 입력하기','keys')}${nativeBtn('importAudio','녹음 파일 열기','upload')}</div></div></div>
      <div class="nxt-score-foot"><div class="nxt-zoom">${btn('zoom:-','−','','','aria-label="악보 축소"')}<span id="nxt-zoom-label">맞춤</span>${btn('zoom:+','+','','','aria-label="악보 확대"')}</div><span class="nxt-score-summary" id="nxt-score-summary">음표 없음</span>${btn('editor','전체 화면 편집','edit','nxt-open-editor')}</div>`;
    app.querySelector('#nxt-home-score-slot').append(score);
    const drawer=document.createElement('section');drawer.id='nxt-drawer';drawer.className='nxt-drawer';drawer.hidden=true;drawer.setAttribute('role','dialog');drawer.setAttribute('aria-modal','true');drawer.setAttribute('aria-labelledby','nxt-drawer-title');
    const tabs=[['files','곡·파일'],['record','녹음·AI'],['tracks','트랙·악기'],['correction','박자·편곡'],['practice','화면·연습']];
    drawer.innerHTML=`<div class="nxt-drawer-panel"><header class="nxt-drawer-head"><div><h2 id="nxt-drawer-title">연주실 메뉴</h2><small>기존 기능을 그대로 사용하는 작업 메뉴</small></div>${btn('close-drawer','닫기','close','nxt-iconbutton','aria-label="메뉴 닫기"')}</header><nav class="nxt-drawer-tabs" role="tablist" aria-label="작업 종류">${tabs.map(([id,l])=>`<button type="button" role="tab" id="nxt-tab-${id}" data-nxt-action="drawer:${id}" aria-controls="nxt-panel-${id}" aria-selected="false">${l}</button>`).join('')}</nav><div class="nxt-drawer-content" id="nxt-drawer-content">
      <section class="nxt-tab-panel" id="nxt-panel-files" role="tabpanel" aria-labelledby="nxt-tab-files" hidden><h3>현재 곡</h3><div class="nxt-field-group" id="nxt-song-fields"></div><h3>불러오기 · 내보내기</h3><div class="nxt-file-actions" id="nxt-file-actions"></div><p class="nxt-help-text">버전 1과 버전 2의 곡 보관함은 별도입니다. 중요한 곡은 원음 포함 곡 파일로 백업하세요.</p></section>
      <section class="nxt-tab-panel" id="nxt-panel-record" role="tabpanel" aria-labelledby="nxt-tab-record" hidden><h3>새로 녹음할 때</h3><div id="nxt-record-options"></div><h3>선택한 트랙의 채보 · 원음</h3><p class="nxt-help-text">‘다시 악보 만들기’는 선택한 트랙의 원음을 재분석합니다. 수동으로 고친 음표가 다시 만들어질 수 있어요.</p><div id="nxt-analysis-slot"></div></section>
      <section class="nxt-tab-panel" id="nxt-panel-tracks" role="tabpanel" aria-labelledby="nxt-tab-tracks" hidden><div class="nxt-track-host" id="nxt-drawer-tracks"></div></section>
      <section class="nxt-tab-panel" id="nxt-panel-correction" role="tabpanel" aria-labelledby="nxt-tab-correction" hidden><p class="nxt-help-text">현재 고른 트랙에 적용합니다. ‘모든 트랙에 함께 적용’을 켜면 적용 범위가 바뀝니다. 기타 등 악기 소리 변경은 ‘트랙·악기’에서 선택하세요.</p><div id="nxt-correction-slot"></div></section>
      <section class="nxt-tab-panel" id="nxt-panel-practice" role="tabpanel" aria-labelledby="nxt-tab-practice" hidden><h3>화면 모드</h3><div class="nxt-theme-buttons">${['system','dark','light'].map((t,i)=>btn('theme:'+t,['시스템 기본','다크 모드','일반 모드'][i],'','',`data-nxt-theme="${t}" aria-pressed="false"`)).join('')}</div><div id="nxt-theme-slot"></div><h3 style="margin-top:22px">곡 재생 · 녹음 카운트인</h3><div class="nxt-field-group" id="nxt-playback-options"></div><div id="nxt-help-slot"></div><hr><p class="nxt-help-text">화면 통합 ${RELEASE} · 현재 화면은 시안이 아닌 기존 엔진 연결판입니다. 인식률·자동 양손 분리·편곡 알고리즘은 이전 구현을 유지합니다.</p>${btn('classic','버전 2의 이전 화면으로 보기')}<p class="nxt-help-text">같은 버전 2의 곡을 유지하고 이전 배치로 엽니다. 버전 1로 이동하는 버튼과는 다릅니다.</p></section>
    </div></div>`;
    const editor=document.createElement('section');editor.id='nxt-editor';editor.className='nxt-editor';editor.hidden=true;editor.setAttribute('role','dialog');editor.setAttribute('aria-modal','true');editor.setAttribute('aria-labelledby','nxt-editor-title');
    editor.innerHTML=`<header class="nxt-edit-head">${btn('close-editor','닫기','close','nxt-iconbutton','aria-label="편집 닫기. 변경 내용은 유지"')}<div><h2 id="nxt-editor-title">집중 편집</h2><small>실제 음표에 바로 반영 · 되돌리기 가능</small></div>${btn('finish-editor','완료','check','nxt-primary','id="nxt-editor-done"')}</header>
      <nav class="nxt-edit-tabs" aria-label="편집 화면 구성">${btn('view:score','악보','','','data-nxt-view="score" aria-pressed="false"')}${btn('view:roll','음표 편집','','','data-nxt-view="roll" aria-pressed="false"')}${btn('view:split','함께 보기','','nxt-view-split','data-nxt-view="split" aria-pressed="false"')}<span class="nxt-grow"></span>${btn('drawer:tracks','트랙')}${btn('drawer:correction','편집 도구')}</nav>
      <div class="nxt-edit-layout"><aside class="nxt-edit-tracks nxt-card"><div class="nxt-track-host" id="nxt-edit-tracks"></div></aside><div class="nxt-edit-center" id="nxt-edit-center" data-view="split"><div class="nxt-edit-sheet" id="nxt-edit-score-slot"></div><div class="nxt-splitter" id="nxt-splitter" role="separator" tabindex="0" aria-label="악보와 음표 편집 높이 조절" aria-orientation="horizontal" aria-valuemin="20" aria-valuemax="75" aria-valuenow="42"></div><div class="nxt-edit-roll" id="nxt-native-editor-slot"></div></div>
      <aside class="nxt-edit-inspector nxt-card"><h3>선택한 음</h3><div class="nxt-selection-name" id="nxt-selection-name">선택 없음</div><div class="nxt-selection-info" id="nxt-selection-info">음표를 눌러 선택하세요</div><label>연주하는 손</label><div class="nxt-inspector-row">${btn('hand:L','왼손','','','data-nxt-selection-control data-nxt-hand="L"')}${btn('hand:R','오른손','','','data-nxt-selection-control data-nxt-hand="R"')}</div><label>음 높이</label><div class="nxt-inspector-row">${btn('pitch:-1','−','','','data-nxt-selection-control aria-label="반음 내리기"')}<span id="nxt-pitch-label">—</span>${btn('pitch:1','+','','','data-nxt-selection-control aria-label="반음 올리기"')}</div><label>음 길이</label><div class="nxt-inspector-row">${btn('length:-1','−','','','data-nxt-selection-control aria-label="칸 맞춤만큼 길이 줄이기"')}<span id="nxt-length-label">—</span>${btn('length:1','+','','','data-nxt-selection-control aria-label="칸 맞춤만큼 길이 늘리기"')}</div><label>시작 위치</label><div class="nxt-inspector-row">${btn('time:-1','앞으로','','','data-nxt-selection-control')}${btn('time:1','뒤로','','','data-nxt-selection-control')}</div>${btn('delete','선택 음 삭제','','nxt-delete','data-nxt-selection-control')}<p>음을 끌어 높이·시작 위치 변경<br>오른쪽 끝을 끌어 길이 변경<br>Shift + 클릭: 여러 음 선택<br>Ctrl/Cmd + Z: 되돌리기</p></aside></div>
      <footer class="nxt-edit-foot">${nativeBtn('playBtn','재생','play','nxt-primary')}${nativeBtn('toStart','처음','back')}<span class="nxt-edit-time" id="nxt-edit-time">0:00 / 0:00</span>${btn('metro','메트로놈','metro','','id="nxt-editor-metro" aria-pressed="false"')}<div class="nxt-mobile-properties"><span id="nxt-mobile-note">선택 없음</span>${btn('hand:L','왼손','','','data-nxt-selection-control data-nxt-hand="L"')}${btn('hand:R','오른손','','','data-nxt-selection-control data-nxt-hand="R"')}${btn('pitch:-1','−','','','data-nxt-selection-control aria-label="반음 내리기"')}${btn('pitch:1','+','','','data-nxt-selection-control aria-label="반음 올리기"')}${btn('delete','삭제','','','data-nxt-selection-control')}</div><span class="nxt-foot-help">실제 곡 편집 · Space 재생 · Ctrl/Cmd+Z 되돌리기</span></footer>`;
    for(const el of [app,drawer,editor]){document.body.appendChild(el);added.push(el);}
    mountedNodes={app,drawer,editor,score};
  }

  function collectAndMove(){
    const ids=['recBtn','recLabel','recTime','recHint','meter','playBtn','posLbl','toStart','bpm','masterVol','bpb','metroBtn','countIn','recSrc','importAudio','tracks','newTrackBtn','typeBtn','analysis','tempoPanel','rollWrap','roll','edTitle','songSel','songName','songNew','songRename','shOpen','shOpen2','exMidi','exJson','exJsonLite','imJson','songDel','mpOpen','mpStart','mpClose','metroPanel','sheetPanel','overlay','shBox','shTrack','shTitle','shGrid','shSplit','shLegato','shClose'];
    const missing=ids.filter(id=>!q(id));if(missing.length)throw new Error('필수 제어 없음: '+missing.join(', '));
    const header=document.querySelector('header.top'), deck=q('recBtn').closest('.deck'), trackSection=q('tracks').closest('section'), editor=q('roll').closest('.editor');
    if(!header||!deck||!trackSection||!editor||!editor.querySelector('.toolbar'))throw new Error('기존 화면 구조가 기준과 다릅니다.');
    native={header,deck,trackSection,editor,opts:all('.deck-main>.opts',deck),metroRow:deck.querySelector('.metro-row'),help:deck.querySelector('.help'),foot:document.querySelector('.wrap>.foot')};
    if(native.opts.length!==2||!native.metroRow)throw new Error('녹음 설정 구조가 기준과 다릅니다.');
    all('[id]').filter(el=>!el.id.startsWith('nxt-')).forEach(el=>originalRefs.set(el.id,el));
    const title=header.querySelector('h1');if(title)title.textContent='우리집 연주실 1';document.title='우리집 연주실 1';put(header,mountedNodes.app);mountedNodes.app.prepend(header);
    for(const el of [...header.children]){if(el.tagName==='H1'||el.id==='ps-version-switch')continue;put(el,document.querySelector('body>.wrap'));}
    const mark=document.createElement('span');mark.className='nxt-brand';mark.setAttribute('aria-hidden','true');mark.innerHTML='<i></i><i></i><i></i>';header.prepend(mark);added.push(mark);
    const label=document.createElement('div');label.className='nxt-head-song';label.innerHTML='<strong id="nxt-song-title"></strong><small>브라우저 자동 저장 · 실제 연주 데이터</small>';header.append(label);added.push(label);
    const buttons=document.createElement('div');buttons.className='nxt-head-actions';buttons.innerHTML=btn('metro-settings','메트로놈','metro','nxt-head-metro')+btn('editor','편집','edit','nxt-head-edit')+btn('drawer:files','','menu','nxt-iconbutton','aria-label="연주실 메뉴"');header.append(buttons);added.push(buttons);
    put(q('recHint'),q('nxt-record-hint-slot'));put(q('recTime'),q('nxt-record-time-slot'));put(q('meter'),q('nxt-meter-slot'));
    const docks=q('nxt-dock-buttons');put(q('recBtn'),docks);docks.prepend(q('recBtn'));put(q('playBtn'),docks);q('nxt-metro').before(q('playBtn'));
    put(q('posLbl'),q('nxt-seek-slot'));q('nxt-seek-slot').prepend(q('posLbl'));put(q('toStart'),q('nxt-extra-slot'));q('nxt-extra-slot').prepend(q('toStart'));
    put(trackSection,q('nxt-home-tracks'));put(editor,q('nxt-native-editor-slot'));editor.classList.add('nxt-native-editor');
    for(const el of native.opts)put(el,q('nxt-record-options'));
    put(q('analysis'),q('nxt-analysis-slot'));put(q('tempoPanel'),q('nxt-correction-slot'));native.tempoOpen=q('tempoPanel').open;q('tempoPanel').open=true;
    for(const [id,label] of [['songSel','곡 선택'],['songName','곡 이름']]){const el=document.createElement('label');el.append(document.createTextNode(label));q('nxt-song-fields').append(el);put(q(id),el);}
    put(q('songNew'),q('nxt-song-fields'));
    for(const id of ['songRename','shOpen2','exMidi','exJson','exJsonLite','imJson','songDel'])put(q(id),q('nxt-file-actions'));
    for(const id of ['bpm','masterVol'])put(q(id).closest('label'),q('nxt-playback-options'));
    put(native.metroRow,q('nxt-playback-options'));
    if(q('ps-tools-theme'))put(q('ps-tools-theme'),q('nxt-theme-slot'));
    if(native.help)put(native.help,q('nxt-help-slot'));if(native.foot)put(native.foot,q('nxt-help-slot'));
    folded=['roll-folded','deck-folded'].filter(c=>document.body.classList.contains(c));document.body.classList.remove(...folded);
    q('nxt-split').value=q('shSplit').value;
  }

  function layout(){
    const w=innerWidth,h=innerHeight,vv=window.visualViewport;
    const usableH=vv&&Math.abs(vv.scale-1)<.02?Math.min(h,vv.height):h;
    document.documentElement.style.setProperty('--nxt-h',Math.round(usableH)+'px');
    const l=w<600&&h>=w?'phone-portrait':w>h&&h<=540&&w<1250?'phone-landscape':w<1000&&h>w?'tablet-portrait':w<=1280?'tablet-landscape':'desktop';
    const old=ui.layout;ui.layout=l;document.documentElement.dataset.nextLayout=l;
    if(old!==l){if(l.startsWith('phone')&&ui.view==='split')ui.view='roll';else if(old.startsWith('phone')&&!l.startsWith('phone'))ui.view='split';placeTracks();setView(ui.view);}
    if(ui.editor&&typeof window.resizeRoll==='function')requestAnimationFrame(()=>{resizeRoll();});
    markScore();
  }
  function placeTracks(){
    let host=q('nxt-home-tracks');
    if(ui.drawer==='tracks'||ui.layout.startsWith('phone')||ui.layout==='tablet-portrait')host=q('nxt-drawer-tracks');
    else if(ui.editor)host=q('nxt-edit-tracks');
    place(native.trackSection,host);
  }
  function setView(view){
    if(view==='split'&&ui.layout.startsWith('phone'))view='roll';ui.view=view;q('nxt-edit-center').dataset.view=view;
    all('[data-nxt-view]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.nxtView===view)));
    if(ui.editor)requestAnimationFrame(()=>{if(typeof window.resizeRoll==='function')resizeRoll();markScore();});
  }
  function updateInert(){
    const overlay=nativeModal();mountedNodes.app.inert=ui.editor||!!ui.drawer||!!overlay;
    mountedNodes.editor.inert=!!ui.drawer||!!overlay;mountedNodes.drawer.inert=!!overlay;
    if(overlay!==ui.lastNative){
      if(overlay){ui.nativeFocus=document.activeElement;queueMicrotask(()=>{if(overlay!==nativeModal())return;if(!overlay.contains(document.activeElement)){const f=focusables(overlay)[0];f?.focus({preventScroll:true});}});}
      else if(ui.lastNative&&ui.nativeFocus?.isConnected){const f=ui.nativeFocus;queueMicrotask(()=>{if(!nativeModal()&&!f.closest('[hidden],[inert]'))f.focus({preventScroll:true});});}
      ui.lastNative=overlay;
    }
  }
  function openDrawer(tab='files'){
    if(!['files','record','tracks','correction','practice'].includes(tab))tab='files';
    if(!ui.drawer)ui.returnFocus=document.activeElement;
    const changed=ui.drawer!==tab;ui.drawer=tab;mountedNodes.drawer.hidden=false;
    for(const el of all('.nxt-tab-panel',mountedNodes.drawer))el.hidden=el.id!=='nxt-panel-'+tab;
    for(const b of all('[role=tab]',mountedNodes.drawer)){const active=b.id==='nxt-tab-'+tab;b.setAttribute('aria-selected',String(active));b.tabIndex=active?0:-1;}
    if(changed)q('nxt-drawer-content').scrollTop=0;
    placeTracks();updateInert();q('nxt-tab-'+tab).focus({preventScroll:true});sync();
  }
  function closeDrawer(focus=true){
    ui.drawer=null;mountedNodes.drawer.hidden=true;placeTracks();updateInert();
    if(focus){const f=ui.returnFocus;if(f?.isConnected&&!f.closest('[hidden],[inert]'))f.focus({preventScroll:true});}ui.returnFocus=null;
  }
  function openEditor(){
    if(blocked())return notify('녹음·분석이 끝난 뒤 편집을 열어 주세요.');
    if(!ui.editor)ui.editorFocus=document.activeElement;
    if(ui.drawer)closeDrawer(false);
    ui.editor=true;mountedNodes.editor.hidden=false;place(mountedNodes.score,q('nxt-edit-score-slot'));placeTracks();setView(ui.view);updateInert();
    requestAnimationFrame(()=>{resizeRoll();if(typeof fitView==='function')fitView(currentTrack());drawRoll();q('nxt-editor-done').focus({preventScroll:true});});sync();
  }
  function closeEditor(){
    if(workBusy())return;
    if(ui.drawer)closeDrawer(false);
    ui.editor=false;mountedNodes.editor.hidden=true;place(mountedNodes.score,q('nxt-home-score-slot'));placeTracks();updateInert();markScore();
    const f=ui.editorFocus;if(f?.isConnected&&!f.closest('[hidden],[inert]'))f.focus({preventScroll:true});ui.editorFocus=null;
  }
  async function saveConfirmed(){
    const p=getProject();if(!p)return;
    const db=typeof DB!=='undefined'?DB.db:null;
    if(!db||typeof db.transaction!=='function')throw new Error('브라우저 저장소가 준비되지 않았습니다. 곡 파일로 먼저 저장해 주세요.');
    const copy=structuredClone(p);copy.updatedAt=Date.now();
    await new Promise((res,rej)=>{let finished=false;const tx=db.transaction(['projects','meta'],'readwrite');
      const done=err=>{if(finished)return;finished=true;clearTimeout(timer);err?rej(err):res();};
      const timer=setTimeout(()=>{try{tx.abort();}catch(_){}done(new Error('저장 확인 시간이 초과되었습니다.'));},10000);
      tx.oncomplete=()=>done();tx.onerror=tx.onabort=()=>done(tx.error||new Error('곡을 저장하지 못했습니다.'));
      try{tx.objectStore('projects').put(copy);tx.objectStore('meta').put(copy.id,'last');}catch(e){try{tx.abort();}catch(_){}done(e);}
    });
  }
  async function finishEditor(){
    const b=q('nxt-editor-done');if(b.disabled)return;b.disabled=true;
    try{await saveConfirmed();closeEditor();notify('현재 편집 내용을 저장했어요.');}
    catch(e){notify(e.message||'저장을 확인하지 못했습니다. 편집 내용은 이 화면에 남아 있습니다.');}
    finally{b.disabled=false;}
  }
  async function classic(){
    if(blocked())return notify('현재 작업을 마친 뒤 화면을 전환해 주세요.');
    try{await saveConfirmed();if(blocked())return;const u=new URL(location.href);u.searchParams.set('ui','classic');location.assign(u.href);}catch(e){notify(e.message);}
  }

  function updateTracksAndSummary(){
    const p=getProject();if(!p)return;
    const sig=JSON.stringify([p.id,p.tracks.map(t=>[t.id,t.name,t.notes.length])]);
    if(sig!==ui.trackSignature){
      const sel=q('nxt-score-track'),old=sel.value;sel.replaceChildren(new Option('모든 트랙','all'));
      for(const t of p.tracks)sel.append(new Option(t.name,t.id));
      sel.value=[...sel.options].some(o=>o.value===old)?old:'all';ui.scoreTrack=sel.value;ui.trackSignature=sig;
    }
    if(ui.tracksDirty){ui.count=0;ui.end=0;for(const t of p.tracks){ui.count+=t.notes.length;for(const n of t.notes)ui.end=Math.max(ui.end,n.s+n.d);}
      if(typeof projectEnd==='function')ui.end=Math.max(ui.end,projectEnd());ui.tracksDirty=false;
    }
  }
  function markScore(force=false){
    ui.revision++;ui.tracksDirty=true;ui.forceRender=ui.forceRender||force;
    if(!flags.mounted)return;clearTimeout(ui.renderTimer);ui.renderTimer=setTimeout(renderMainScore,260);
  }
  function scoreStatus(title,message){text('nxt-empty-title',title);text('nxt-empty-text',message);q('nxt-score-empty').hidden=false;q('nxt-score-render').hidden=true;}
  async function renderMainScore(){
    if(!flags.mounted||ui.rendering)return;
    const p=getProject();if(!p)return;
    if(isRecording()||workBusy()){ui.renderTimer=setTimeout(renderMainScore,500);return;}
    updateTracksAndSummary();
    const tracks=ui.scoreTrack==='all'?p.tracks:p.tracks.filter(t=>t.id===ui.scoreTrack), count=tracks.reduce((a,t)=>a+t.notes.length,0);
    if(!count){q('nxt-score-render').replaceChildren();scoreStatus('첫 음을 담아 보세요','녹음하거나 계이름을 입력하면 이곳에 실제 연주 악보가 나타나요.');text('nxt-score-summary','음표 없음');ui.drawn=ui.revision;return;}
    if(count>10000&&!ui.forceRender){scoreStatus('긴 곡의 악보를 준비할까요?',`${count.toLocaleString()}개 음표가 있어요. 아래 ‘악보 생성’을 눌러 그리기를 시작하세요.`);return;}
    ui.forceRender=false;ui.rendering=true;const rev=ui.revision,pid=p.id;
    if(!q('nxt-score-render').children.length)scoreStatus('악보를 준비하고 있어요','실제 음표와 악보 그리기 파일을 준비합니다.');
    try{
      await loadVF();
      if(getProject()?.id!==pid||rev!==ui.revision||isRecording()||workBusy())return;
      const sv=q('shSplit').value,split=sv==='none'?null:sv==='hand'?'hand':+sv;
      const score=buildScore(tracks,{split,grid:+q('shGrid').value||1,legato:q('shLegato').checked});
      const container=q('nxt-score-render');container.hidden=false;
      const w=Math.max(720,Math.min(1100,q('nxt-score-scroll').clientWidth-10));
      const svgs=renderScore(score,container,{width:w,title:p.name,subtitle:tracks.length===1?tracks[0].name:''});
      for(const svg of svgs){const width=+svg.getAttribute('width'),height=+svg.getAttribute('height');svg.setAttribute('viewBox',`0 0 ${width} ${height}`);svg.setAttribute('role','img');svg.setAttribute('aria-label',`${p.name} 실제 악보`);}
      q('nxt-score-empty').hidden=true;container.style.width=(ui.zoom*100)+'%';
      text('nxt-score-summary',`${score.nBars}마디 · ${count}음`);text('nxt-score-subtitle',`${p.bpm} BPM · ${score.time} · 실제 연주 데이터`);
      ui.drawn=rev;
    }catch(e){console.error('[Piano Studio Next score]',e);scoreStatus('악보를 그리지 못했어요',String(e.message||e)+' · 메뉴의 악보 저장 창에서 다시 확인하거나 악보 생성을 다시 눌러 주세요.');text('nxt-score-summary','악보 확인 필요');}
    finally{ui.rendering=false;if(ui.drawn!==ui.revision&&getProject()?.id!==pid)markScore();else if(rev!==ui.revision){clearTimeout(ui.renderTimer);ui.renderTimer=setTimeout(renderMainScore,200);}}
  }
  function generate(){
    if(blocked())return notify('현재 녹음·분석이 끝나면 악보를 표시합니다.');
    const p=getProject(),t=currentTrack();if(!p)return;
    if(p.tracks.some(tr=>tr.notes.length)){markScore(true);notify('현재 음표로 악보를 갱신합니다. 원음 재분석은 메뉴 → 녹음·AI에서 할 수 있어요.');return;}
    if(t?.audio&&q('anRun')){q('anRun').click();return;}
    notify('먼저 녹음하거나 계이름을 입력해 주세요.');
  }
  async function exportSheet(){
    if(blocked())return notify('현재 녹음·분석이 끝난 뒤 악보를 저장해 주세요.');
    if(ui.drawer)closeDrawer(false);
    const pid=getProject()?.id;await openSheet();
    if(getProject()?.id!==pid||q('sheetPanel').hidden)return;
    const sel=q('shTrack');if([...sel.options].some(o=>o.value===ui.scoreTrack))sel.value=ui.scoreTrack;
    if(window.Vex&&window.Vex.Flow)renderSheet();updateInert();
  }
  function toggleMetro(){
    const quick=document.querySelector('#ps-tools-dock [data-ps-action=metro]');
    if(quick&&!quick.disabled)quick.click();
    else{if(!standaloneRunning()){q('mpOpen').click();q('mpClose').click();}q('mpStart').click();}
    sync();
  }
  function editSelected(action){
    if(!ui.editor||blocked())return;
    const t=currentTrack(),ns=typeof selNotes==='function'?selNotes():[];
    if(!t||!ns.length)return notify('먼저 고칠 음표를 골라 주세요.');
    const [kind,value]=action.split(':'),step=typeof gridSec==='function'&&gridSec()>0?gridSec():60/getProject().bpm/4;
    if(kind==='hand'){if(!['L','R'].includes(value))return;edit(tr=>{for(const n of tr.notes)if(selected.has(n.id))n.h=value;});}
    else if(kind==='pitch')shiftSel(+value,0);
    else if(kind==='time')shiftSel(0,+value*step);
    else if(kind==='length')edit(tr=>{for(const n of tr.notes)if(selected.has(n.id))n.d=Math.max(.03,n.d+(+value)*step);});
    else if(kind==='delete')q('delSel').click();
    markScore();syncSelection();
  }
  function syncSelection(){
    if(!ui.editor)return;
    const ns=typeof selNotes==='function'?selNotes():[],bpm=getProject()?.bpm||100;
    const sig=JSON.stringify(ns.map(n=>[n.id,n.p,n.s,n.d,n.h]));if(sig===ui.lastSelection)return;ui.lastSelection=sig;
    const one=ns[0],name=one?(typeof koPitch==='function'?koPitch(one.p):String(one.p)):'선택 없음';
    text('nxt-selection-name',ns.length>1?ns.length+'개 음':name);text('nxt-mobile-note',ns.length>1?ns.length+'음':name);text('nxt-pitch-label',ns.length===1?name:'—');
    text('nxt-length-label',ns.length===1?(Math.round(one.d/(60/bpm)*100)/100)+'박':'—');
    text('nxt-selection-info',one?`${typeof barBeatStr==='function'?barBeatStr(one.s):fmt(one.s)} · ${ns.length>1?'여러 음 선택':one.h==='L'?'왼손':one.h==='R'?'오른손':'손 미지정'}`:'음표를 눌러 선택하세요');
    all('[data-nxt-selection-control]').forEach(el=>el.disabled=!ns.length);
    all('[data-nxt-hand]').forEach(el=>el.setAttribute('aria-pressed',String(ns.length>0&&ns.every(n=>n.h===el.dataset.nxtHand))));
  }
  function sync(){
    if(!flags.mounted||document.hidden)return;
    const p=getProject();if(!p)return;
    if(ui.lastProject!==p.id){ui.lastProject=p.id;ui.scoreTrack='all';ui.trackSignature='';ui.lastSelection='';ui.tracksDirty=true;markScore();}
    const psig=JSON.stringify([p.id,p.name,p.bpm,p.beatsPerBar]);if(psig!==ui.projectSignature){ui.projectSignature=psig;markScore();}
    updateTracksAndSummary();
    const split=q('shSplit').value;text('nxt-hand-legend',split==='none'?'한 줄 악보':split==='hand'?'위: 오른손 · 아래: 왼손':'위: 높은 음 · 아래: 낮은 음');
    text('nxt-song-title',p.name);text('nxt-editor-title',(currentTrack()?.name||p.name)+' · 집중 편집');
    const rec=isRecording(),busy=workBusy(),running=standaloneRunning();q('nxt-record-card').classList.toggle('nxt-recording',rec);
    text('nxt-record-state',rec?'녹음 중':busy?'작업 중':'녹음 준비');
    text('nxt-meter-caption',q('recSrc').value==='midi'?'MIDI 입력 · 녹음 중 표시':'녹음 중 실제 입력 음량');
    const posNow=position();text('nxt-duration',fmt(ui.end));text('nxt-edit-time',fmt(posNow)+' / '+fmt(ui.end));
    const seek=q('nxt-seek');seek.max=String(Math.max(1,ui.end));if(document.activeElement!==seek)seek.value=String(Math.max(0,posNow));seek.disabled=rec||busy||ui.end<=0;
    q('nxt-generate').disabled=rec||busy;
    all('[data-nxt-action=editor],[data-nxt-action=export]').forEach(el=>el.disabled=rec||busy);
    for(const id of ['nxt-metro','nxt-editor-metro']){const el=q(id);el.setAttribute('aria-pressed',String(running));el.setAttribute('aria-label',running?'메트로놈 단독 실행 정지':'메트로놈 단독 실행');el.disabled=rec&&!running;}
    const ep=document.querySelector('#nxt-editor [data-nxt-native=playBtn]');if(ep){const s=ep.querySelector('span');const value=isPlaying()?'멈춤':'재생';if(s.textContent!==value)s.textContent=value;ep.disabled=q('playBtn').disabled||rec;}
    const choice=window.PianoTheme?.get().choice||'dark';all('[data-nxt-theme]').forEach(b=>b.setAttribute('aria-pressed',String(choice===b.dataset.nxtTheme)));
    if(q('nxt-split').value!==q('shSplit').value)q('nxt-split').value=q('shSplit').value;
    if(ui.busy&&!busy)markScore();ui.busy=busy;syncSelection();updateInert();
  }
  function doAction(action){
    if(action.startsWith('drawer:'))return openDrawer(action.split(':')[1]);
    if(action.startsWith('theme:')){window.PianoTheme.set(action.split(':')[1]);refreshPalette();sync();return;}
    if(action.startsWith('view:'))return setView(action.split(':')[1]);
    if(/^(hand|pitch|length|time):/.test(action)||action==='delete')return editSelected(action);
    if(action.startsWith('zoom:')){ui.zoom=Math.min(2.5,Math.max(1,ui.zoom+(action.endsWith('+')?.25:-.25)));q('nxt-score-render').style.width=(ui.zoom*100)+'%';text('nxt-zoom-label',ui.zoom===1?'맞춤':Math.round(ui.zoom*100)+'%');return;}
    switch(action){case 'editor':return openEditor();case 'close-editor':return closeEditor();case 'finish-editor':return finishEditor();case 'close-drawer':return closeDrawer();case 'generate':return generate();case 'metro':return toggleMetro();case 'metro-settings':q('mpOpen').click();return;case 'export':return exportSheet();case 'arrange':openDrawer('correction');q('arChords').closest('.tp-card')?.scrollIntoView({block:'start'});return;case 'classic':return classic();}
  }
  function focusables(root){return all('button:not([disabled]),select:not([disabled]),input:not([disabled]),textarea,a[href],[tabindex]:not([tabindex="-1"])',root).filter(el=>el.getClientRects().length&&!el.closest('[hidden],[inert]'));}
  function keydown(e){
    if(!flags.mounted)return;
    const over=nativeModal(),layer=over||(ui.drawer?mountedNodes.drawer:ui.editor?mountedNodes.editor:null);
    if(e.key==='Tab'&&layer){const fs=focusables(layer);if(!fs.length){e.preventDefault();return;}const at=fs.indexOf(document.activeElement);if(e.shiftKey&&(at<=0)){e.preventDefault();fs.at(-1).focus();}else if(!e.shiftKey&&(at<0||at===fs.length-1)){e.preventDefault();fs[0].focus();}return;}
    if(over)return;
    if(e.target.closest('input,textarea,select,[contenteditable=true]'))return;
    if(e.key==='Escape'&&(ui.drawer||ui.editor)){e.preventDefault();e.stopImmediatePropagation();ui.drawer?closeDrawer():closeEditor();return;}
    if(e.target.id==='nxt-splitter'&&['ArrowUp','ArrowDown','Home','End'].includes(e.key)){e.preventDefault();e.stopImmediatePropagation();const v=+e.target.getAttribute('aria-valuenow');setShare(e.key==='Home'?20:e.key==='End'?75:v+(e.key==='ArrowUp'?-5:5));return;}
    // Keep the original engine's global edit shortcuts away from home/settings.
    const correctionKeys=ui.drawer==='correction'&&(e.key===' '||['b','B'].includes(e.key)||((e.ctrlKey||e.metaKey)&&['z','y'].includes(e.key.toLowerCase())));
    if(correctionKeys)return;
    if(ui.drawer||(!ui.editor&&['Delete','Backspace','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','h','H'].includes(e.key))||(!ui.editor&&(e.ctrlKey||e.metaKey)&&['a','z','y'].includes(e.key.toLowerCase())))e.stopImmediatePropagation();
  }
  function setShare(v){v=Math.max(20,Math.min(75,v));q('nxt-edit-center').style.setProperty('--nxt-score-share',v+'%');q('nxt-splitter').setAttribute('aria-valuenow',String(Math.round(v)));if(ui.editor)resizeRoll();}
  function wire(){
    listen(document,'click',e=>{
      if(!flags.mounted)return;
      const el=e.target.closest('[data-nxt-action],[data-nxt-native]');if(!el||!el.closest('#nxt-app,#nxt-editor,#nxt-drawer'))return;
      if(el.disabled)return;
      if(el.dataset.nxtNative){const id=el.dataset.nxtNative,target=q(id);if(!target||target.disabled)return;if(['typeBtn','importAudio','imJson'].includes(id)&&ui.drawer)closeDrawer(false);target.click();markScore();sync();}
      else{try{const promise=doAction(el.dataset.nxtAction);if(promise&&typeof promise.catch==='function')promise.catch(e=>notify(e.message||String(e)));}catch(e){console.error(e);notify('작업 중 문제가 생겼어요: '+e.message);}}
    });
    listen(q('nxt-file-actions'),'click',e=>{if(e.target.closest('button'))closeDrawer(false);},true);
    listen(q('nxt-drawer-tracks'),'click',e=>{if(e.target.closest('#typeBtn'))closeDrawer(false);},true);
    listen(q('nxt-record-options'),'click',e=>{if(e.target.closest('#importAudio'))closeDrawer(false);},true);
    listen(mountedNodes.drawer,'click',e=>{if(e.target===mountedNodes.drawer)closeDrawer();});
    listen(q('nxt-score-track'),'change',e=>{ui.scoreTrack=e.target.value;markScore(true);});
    listen(q('nxt-split'),'change',e=>{q('shSplit').value=e.target.value;q('shSplit').dispatchEvent(new Event('change',{bubbles:true}));markScore();});
    listen(q('nxt-seek'),'change',e=>{if(blocked())return;const was=isPlaying();if(was)stop();pos=Math.max(0,Math.min(+e.target.value,ui.end));updatePos();drawRoll();if(was)play();sync();});
    listen(document,'change',e=>{if(e.target.id.startsWith('nxt-'))return;if(['shSplit','shGrid','shLegato','shTitle','bpm','bpb','songSel','songName','snapSel'].includes(e.target.id))markScore();});
    listen(document,'keydown',keydown,true);
    listen(window,'resize',layout);if(window.visualViewport)listen(window.visualViewport,'resize',layout);
    listen(window,'piano-theme-change',()=>{refreshPalette();sync();});
    listen(document,'visibilitychange',()=>{if(!document.hidden){layout();sync();}});
    watch(q('tracks'),{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['class']},()=>markScore());
    watch(q('edTitle'),{subtree:true,childList:true,characterData:true},()=>{markScore();sync();});
    for(const id of ['overlay','metroPanel','sheetPanel'])watch(q(id),{attributes:true,attributeFilter:['hidden']},()=>{updateInert();sync();});
    watch(q('shBox'),{childList:true},()=>{if(q('sheetPanel').hidden)markScore();});
    const ro=new ResizeObserver(entries=>{const w=entries[0].contentRect.width;if(Math.abs(ui.lastWidth-w)>4){ui.lastWidth=w;markScore();}});ro.observe(q('nxt-score-scroll'));observers.push(ro);
    const splitter=q('nxt-splitter');let resizing=false;
    listen(splitter,'pointerdown',e=>{resizing=true;splitter.setPointerCapture(e.pointerId);e.preventDefault();});
    listen(splitter,'pointermove',e=>{if(!resizing)return;const r=q('nxt-edit-center').getBoundingClientRect();setShare((e.clientY-r.top)/r.height*100);});
    listen(splitter,'pointerup',()=>{resizing=false;markScore();});listen(splitter,'pointercancel',()=>resizing=false);
    tickTimer=setInterval(sync,200);
  }
  function rollback(error){
    flags.mounted=false;flags.ready=false;flags.reason=String(error.message||error);clearInterval(tickTimer);clearTimeout(ui.renderTimer);
    observers.forEach(o=>o.disconnect());listeners.forEach(fn=>fn());
    for(const [el,marker] of moved.reverse())if(marker.parentNode){marker.replaceWith(el);}
    if(native.editor)native.editor.classList.remove('nxt-native-editor');if(q('tempoPanel')&&native.tempoOpen!==undefined)q('tempoPanel').open=native.tempoOpen;
    added.reverse().forEach(el=>el.remove());q('nxt-main-style')?.remove();
    document.documentElement.classList.remove('nxt-root');delete document.documentElement.dataset.nextLayout;document.documentElement.style.removeProperty('--nxt-h');document.body.classList.remove('nxt-ui');document.body.classList.add(...folded);
    meta('original-engine-fallback');
    const notice=document.createElement('div');notice.className='nxt-failure-notice';notice.textContent='새 화면을 연결하지 못해 기존 화면을 유지했습니다. 곡은 삭제하지 않았습니다. '+flags.reason;document.body.prepend(notice);console.error('[Piano Studio Next main]',error);
  }
  function mount(){
    try{
      // Validate before hiding anything; mount errors restore every moved original.
      if(!document.querySelector('body>.wrap'))throw new Error('기준 앱 화면이 없습니다.');
      const style=document.createElement('style');style.id='nxt-main-style';style.textContent=CSS;document.head.append(style);
      makeShell();collectAndMove();document.documentElement.classList.add('nxt-root');document.body.classList.add('nxt-ui');
      flags.mounted=true;flags.ready=true;flags.reason='ready';meta('responsive-main-with-original-engine');
      wire();layout();sync();markScore();refreshPalette();
      window.dispatchEvent(new CustomEvent('piano-main-ui-ready',{detail:diagnostics()}));
    }catch(e){rollback(e);}
  }
  function start(){
    if(new URL(location.href).searchParams.get('ui')==='classic'){
      flags.reason='classic-requested';meta('original-engine-classic');
      const box=document.createElement('div');box.className='nxt-failure-notice';box.textContent='우리집 연주실 1 · 이전 화면입니다. ';
      const a=document.createElement('a');const u=new URL(location.href);u.searchParams.delete('ui');a.href=u.href;a.textContent='새 화면으로 열기';box.append(a);document.querySelector('.wrap')?.prepend(box);return;
    }
    let tries=0;const wait=()=>{if(engineReady()){mount();return;}if(++tries<150)retryTimer=setTimeout(wait,100);else rollback(new Error('앱 초기화가 끝나지 않았습니다. 기존 화면에서 저장소·스크립트 오류를 확인해 주세요.'));};wait();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
