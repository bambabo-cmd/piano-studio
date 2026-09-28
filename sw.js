/* Piano Studio 1 — direct runtime UI 6. */
'use strict';
const BUILD = 'ui6-direct-f8ae51cfc0930b0f';
const ROOT = new URL(self.registration.scope);
const PREFIX = 'piano-studio-v1:' + ROOT.pathname + ':';
const CACHE = PREFIX + BUILD;
const SHELL = ['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./bp.bundle.js','./vexflow-bravura.js'].map(p=>new URL(p,ROOT).href);
const KNOWN = new Set(SHELL);
self.addEventListener('install', event => {
  event.waitUntil((async()=>{
    const cache=await caches.open(CACHE);
    await cache.addAll(SHELL.map(url=>new Request(url,{cache:'reload'})));
    // No forced window reload: existing recordings and editors stay in place.
    await self.skipWaiting();
  })());
});
self.addEventListener('activate', event => {
  event.waitUntil((async()=>{
    const names=await caches.keys();
    await Promise.all(names.filter(n=>n.startsWith(PREFIX)&&n!==CACHE).map(n=>caches.delete(n)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  const request=event.request;
  if(request.method!=='GET')return;
  const url=new URL(request.url);
  if(url.origin!==ROOT.origin||!url.pathname.startsWith(ROOT.pathname))return;
  const canonical=new URL(url);canonical.search='';canonical.hash='';
  const isPage=request.mode==='navigate'&&(canonical.href===ROOT.href||canonical.href===new URL('./index.html',ROOT).href);
  if(!KNOWN.has(canonical.href)||(!isPage&&url.search))return;
  event.respondWith((async()=>{
    const cache=await caches.open(CACHE);
    try{
      const response=await fetch(new Request(request,{cache:isPage?'no-store':'no-cache'}));
      if(response.ok){await cache.put(canonical.href,response.clone());return response;}
      return (await cache.match(canonical.href))||response;
    }catch(error){
      const cached=await cache.match(canonical.href);
      if(cached)return cached;
      if(isPage){const index=await cache.match(new URL('./index.html',ROOT).href);if(index)return index;}
      throw error;
    }
  })());
});
