const CACHE_NAME = 'ai-orbit-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './assets/css/tokens.css',
  './assets/css/base.css',
  './assets/css/layout.css',
  './assets/css/components.css',
  './assets/css/animations.css',
  './assets/css/responsive.css',
  './assets/js/app.js',
  './assets/js/firebase-config.js',
  './assets/js/auth.js',
  './assets/js/tools-data.js',
  './assets/js/storage.js',
  './assets/js/theme.js',
  './assets/js/search-filter.js',
  './assets/js/command-palette.js',
  './assets/js/ui-render.js',
  './assets/js/dashboard.js'
];

// Install Event: Caching the App Shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Caching App Shell');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate Event: Cleaning up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('[Service Worker] Clearing Old Cache');
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch Event: Cache-First Strategy for static assets
self.addEventListener('fetch', (event) => {
  // Skip caching for Firebase Auth calls or external APIs
  if (event.request.url.includes('googleapis') || event.request.url.includes('firebase')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).then((fetchResponse) => {
        // Optionally cache new resources here
        return fetchResponse;
      });
    }).catch(() => {
      // Return offline fallback if needed
      if (event.request.mode === 'navigate') {
        return caches.match('./index.html');
      }
    })
  );
});