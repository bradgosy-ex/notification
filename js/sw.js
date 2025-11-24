const CACHE_NAME = 'HaemiLife-v1';
const urlsToCache = [
  '/',
  '/index.html',
  // 필요한 파일들 미리 캐싱
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});