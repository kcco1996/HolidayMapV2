const CACHE_NAME = "holiday-map-v1";

const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest"
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
          const responseClone = networkResponse.clone();

          // Cache useful GET responses
          if (
            request.url.startsWith(self.location.origin) ||
            request.url.includes("unpkg.com") ||
            request.url.includes("cartocdn.com")
          ) {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }

          return networkResponse;
        })
        .catch(async () => {
          // Fallback to cached index for navigations
          if (request.mode === "navigate") {
            const fallback = await caches.match("./index.html");
            if (fallback) return fallback;
          }
        });
    })
  );
});