
  import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';

/* precacheAndRoute([{"revision":"cba577fd74dbea61cf24edb46e5461f7","url":"master.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"leaderboard.html"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"savedgames.html"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"settings.html"},{"revision":"b15eb03ed78aec4f5f2d513d3d328088","url":"startgamesetup.html"},{"revision":"8b5977ec25fc3a2bcfd99910b12ec746","url":"tally.html"}]);

  workbox.routing.registerRoute(
    ({request}) => request.destination === 'images',
    new workbox.stratehies.precacheAndRoute()
  );*/

  

// Register the service worker
if ('serviceWorker' in navigator) {
  // Wait for the 'load' event to not block other work
  window.addEventListener('load', async () => {
    // Try to register the service worker.
    try {
      const reg = await navigator.serviceWorker.register(swURL);
      console.log('Service worker registered! 😎', reg);
    } catch (err) {
      console.log('😥 Service worker registration failed: ', err);
    }
  });
}

// Choose a cache name
const cacheName = 'cache-v1';
// List the files to precache
const precacheResources = ['/', '/tally.html', '/css/master.css', '/js/masterjacascript.js', '/js/setAccessOptions.js', '/startgamesetup.html', "/settings.html", "/savedgames.html", "/leaderboard.html"];

// When the service worker is installing, open the cache and add the precache resources to it
self.addEventListener('install', (event) => {
  console.log('Service worker install event!');
  event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(precacheResources)));
});

self.addEventListener('activate', (event) => {
  console.log('Service worker activate event!');
});

// When there's an incoming fetch request, try and respond with a precached resource, otherwise fall back to the network
self.addEventListener('fetch', (event) => {
  console.log('Fetch intercepted for:', event.request.url);
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    }),
  );
});

import { warmStrategyCache } from 'workbox-recipes';
import { CacheFirst } from 'workbox-strategies';
import { registerRoute } from 'workbox-routing';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { ExpirationPlugin } from 'workbox-expiration';

// Set up page cache
const pageCache = new CacheFirst({
  cacheName: 'page-cache',
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60,
    }),
  ],
});

warmStrategyCache({
  urls: ['/index.html', '/'],
  strategy: pageCache,
});

registerRoute(({ request }) => request.mode === 'navigate', pageCache);

// Set up asset cache
registerRoute(
  ({ request }) => ['style', 'script', 'worker'].includes(request.destination),
  new StaleWhileRevalidate({
    cacheName: 'asset-cache',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  }),
);

// Set up offline fallback
offlineFallback({
  pageFallback: '/offline.html',
});

  