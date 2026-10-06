/* WIST — service worker pentru funcționare offline.
   Se pune în același folder cu wist_tel.html pe server (ex. somial.ro/wist/).
   La fiecare versiune nouă a jocului, schimbă numărul din CACHE (v1 → v2 …)
   ca telefoanele să ia versiunea nouă în loc de cea din cache. */
const CACHE = 'wist-v1';
const ASSETS = [
  './',
  './wist_tel.html'
];

self.addEventListener('install', e=>{
  e.waitUntil(caches.open(CACHE).then(c=> c.addAll(ASSETS)).then(()=> self.skipWaiting()));
});

self.addEventListener('activate', e=>{
  e.waitUntil(
    caches.keys().then(keys=> Promise.all(keys.filter(k=> k!==CACHE).map(k=> caches.delete(k))))
      .then(()=> self.clients.claim())
  );
});

self.addEventListener('fetch', e=>{
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(hit=>{
      if (hit) return hit;
      return fetch(e.request).then(resp=>{
        // păstrează în cache paginile proprii; fonturile Google se cachează și ele la prima descărcare
        const copy = resp.clone();
        caches.open(CACHE).then(c=> c.put(e.request, copy)).catch(()=>{});
        return resp;
      }).catch(()=> caches.match('./wist_tel.html'));
    })
  );
});
