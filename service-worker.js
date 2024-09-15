self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        '/dados/',
        '/dados/index.html',
        '/dados/manifest.json',
        'https://png.pngtree.com/png-vector/20191030/ourmid/pngtree-playing-dice-vector-set-realistic-3d-illustration-of-two-white-dice-png-image_1895117.jpg'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
