const CACHE_NAME = "laberkoman";

const urlsToCache = [
  "/laberkomanstudy/",
  "/laberkomanstudy/index.html",
  "/laberkomanstudy/BEBAS.html",
  "/laberkomanstudy/FILSAFAT.html",
  "/laberkomanstudy/INVESTASI.html"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match("/busu/index.html"))
  );
});
