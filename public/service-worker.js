const CACHE_NAME = "movie-search-cache-v2";
const urlsToCache = [
    "/",
    "/index.html",
    "/offline.html",
    "/manifest.json",
    "/icons/icon-192x192.png",
    "/icons/icon-512x512.png",
    "/styles.css",
    "/app.js"
];

// Install Service Worker dan Caching awal
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log("Opened cache");
            return cache.addAll(urlsToCache);
        })
    );
    self.skipWaiting(); // Langsung aktifkan service worker baru
});

// Fetch Event Handler
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) {
                return response; // Gunakan cache jika tersedia
            }
            return fetch(event.request)
                .then((fetchResponse) => {
                    return caches.open(CACHE_NAME).then((cache) => {
                        // Simpan response ke cache untuk permintaan berikutnya
                        if (event.request.url.startsWith("http")) {
                            cache.put(event.request, fetchResponse.clone());
                        }
                        return fetchResponse;
                    });
                })
                .catch(() => caches.match("/offline.html"));
        })
    );
});

// Activate dan hapus cache lama
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) =>
            Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log("Deleting old cache:", cache);
                        return caches.delete(cache);
                    }
                })
            )
        )
    );
    self.clients.claim(); // Langsung klaim kontrol ke semua tab terbuka
});
