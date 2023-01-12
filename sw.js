self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open("PWA")
      .then((cache) =>
        cache.addAll([
          "/",
          "/index.html",
          "/index.js",
          "/style.css",
          "/assets/logo.jpg",
        ])
      )
  );
});

self.addEventListener("fetch", (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
