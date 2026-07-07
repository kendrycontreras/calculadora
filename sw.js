const CACHE_NAME = 'caja-pastelitos-v1';
// Quitamos los iconos locales de aquí, ya que los llamaremos por URL
const ASSETS = ['./', './index.html']; 

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
