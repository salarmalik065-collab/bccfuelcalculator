const CACHE_NAME = 'rtech-fuel-v1';
const ASSETS = [
  '/bccfuelcalculator/',
  '/bccfuelcalculator/index.html',
  '/bccfuelcalculator/manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
