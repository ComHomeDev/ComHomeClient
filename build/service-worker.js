const IMMUTABLE_APPSHELL = [
  "/favicon.ico",
  "/logo_simple.png",
  "/logo192.png",
  "/logo512.png",
  "/img/sswu.png",
];

const MUTABLE_APPSHELL = ["/"];

const CACHE_LIST = IMMUTABLE_APPSHELL.concat(MUTABLE_APPSHELL);

self.addEventListener("install", (event) => {
  console.log("Service worker - install");
  event.waitUntil(
    caches.open("MY_CACHE").then((cache) => {
      return cache.addAll(CACHE_LIST);
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("service-worker-activate");
});

self.addEventListener("fetch", (event) => {
  console.log("service-worker-fetch", event.request.url);
});
