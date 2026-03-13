const CACHE_NAME = "holiday-map-v3";

const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./favicon.png",
  "./assets/app-icon.png",
  "./assets/black-dot.png",
  "./assets/usa-flag.png",
  "./assets/england-flag.png",
  "./assets/france-flag.png",
  "./assets/ireland-flag.png",
  "./assets/scotland-flag.png",
  "./assets/wales-flag.png",
  "./assets/poland-flag.png",
  "./assets/germany-flag.png",
  "./assets/italy-flag.png",
  "./assets/greece-flag.png",
  "./assets/spain-flag.png",
  "./assets/portugal-flag.png",
  "./assets/cyprus-flag.png",
  "./assets/turkey-flag.png",
  "./assets/china-flag.png",
  "./assets/vietnam-flag.png",
  "./assets/thailand-flag.png",
  "./assets/morocco-flag.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const request = event.request;

  if (request.method !== "GET") return;

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;

      return fetch(request)
        .then((networkResponse) => {
          // Only cache successful basic/cors responses
          if (
            networkResponse &&
            networkResponse.status === 200 &&
            (request.url.startsWith(self.location.origin) ||
             request.url.includes("unpkg.com") ||
             request.url.includes("cartocdn.com"))
          ) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }

          return networkResponse;
        })
        .catch(async () => {
          if (request.mode === "navigate") {
            return caches.match("./index.html");
          }

          // Optional fallback for images
          if (request.destination === "image") {
            return caches.match("./assets/black-dot.png");
          }

          self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(clients.claim());
});
        });
    })
  );
});