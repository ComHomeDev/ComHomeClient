const IMMUTABLE_APPSHELL = [
  "/favicon.ico",
  "/logo_simple.png",
  "/logo192.png",
  "/logo512.png",
  "/img/sswu.png",
];

const MUTABLE_APPSHELL = ["/index.html"];

const VERSION = "v5";
const CACHE_NAME = "ComHome-cache_" + VERSION;
const IMAGE_CACHE_NAME = "ComHome-image_" + VERSION;

const CACHE_LIST = IMMUTABLE_APPSHELL.concat(MUTABLE_APPSHELL);
const DYNAMIC_PATTERN = /(\.eot$|\.ttf$|\.woff$|\/icons)/;

self.addEventListener("install", (event) => {
  console.log("insta");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CACHE_LIST);
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("activated");
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME && key !== IMAGE_CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (IMMUTABLE_APPSHELL.includes(url.pathname)) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  } else if (MUTABLE_APPSHELL.includes(url.pathname)) {
    event.respondWith(
      caches.open(CACHE_NAME).then(async (cache) => {
        try {
          const networkResponse = await fetch(event.request);
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        } catch {
          return await cache.match(event.request);
        }
      })
    );
  } else if (
    url.pathname.startsWith("/upload") ||
    DYNAMIC_PATTERN.test(url.pathname)
  ) {
    const TARGET_CACHE = url.pathname.startsWith("/upload")
      ? IMAGE_CACHE_NAME
      : CACHE_NAME;
    event.respondWith(
      caches.open(TARGET_CACHE).then((cache) => {
        return cache.match(event.request).then((cacheResponse) => {
          if (cacheResponse) {
            return cacheResponse;
          } else {
            return fetch(event.request).then((networkResponse) => {
              cache.put(event.request, networkResponse.clone());
              return networkResponse;
            });
          }
        });
      })
    );
  }
});

self.addEventListener("push", (event) => {
  const data = event.data.json();
  const title = "ComHome";
  const options = {
    body: data.message,
    requireInteraction: true,
    icon: "/logo_simple.png",
    badge: "/logo_simple.png",
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener("notificationclick", (event) => {
  console.log("Service Worker - Notification clicked! ");
  event.notification.close();
  event.waitUntil(self.clients.openWindow("http://localhost:3000"));
});
