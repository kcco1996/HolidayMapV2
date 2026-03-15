const CACHE_NAME = "holiday-map-v3";

const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./favicon.png",
  "./assets/app-icon.png",
  "./assets/black-dot.png",

  "./assets/england-flag.png",
  "./assets/scotland-flag.png",
  "./assets/wales-flag.png",
  "./assets/ireland-flag.png",
  "./assets/france-flag.png",
  "./assets/germany-flag.png",
  "./assets/italy-flag.png",
  "./assets/spain-flag.png",
  "./assets/portugal-flag.png",
  "./assets/cyprus-flag.png",
  "./assets/turkey-flag.png",
  "./assets/poland-flag.png",
  "./assets/china-flag.png",
  "./assets/vietnam-flag.png",
  "./assets/morocco-flag.png",
  "./assets/usa-flag.png"
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

  const url = new URL(request.url);

  const shouldCache =
    url.origin === self.location.origin ||
    url.hostname.includes("unpkg.com") ||
    url.hostname.includes("cartocdn.com") ||
    url.hostname.includes("gstatic.com");

  if (!shouldCache) return;

  // Pages: network first, fallback to cache
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(async () => {
          return (
            (await caches.match(request)) ||
            (await caches.match("./index.html"))
          );
        })
    );
    return;
  }

  // Everything else: cache first
  event.respondWith(
    caches.match(request).then(async (cached) => {
      if (cached) return cached;

      try {
        const response = await fetch(request);
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        }
        return response;
      } catch (err) {
        return caches.match("./index.html");
      }
    })
  );
});