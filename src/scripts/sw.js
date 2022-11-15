import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

// Caching the listed asset below
const assetsToCache = [
  './',
  './images/icons/icon-72x72.png',
  './images/icons/icon-96x96.png',
  './images/icons/icon-128x128.png',
  './images/icons/icon-144x144.png',
  './images/icons/icon-152x152.png',
  './images/icons/icon-192x192.png',
  './images/icons/icon-384x384.png',
  './images/icons/icon-512x512.png',
  './index.html',
  './images/icons/favicon.ico',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  // console.log(event.request);

  if (!(event.request.url.indexOf('http') === 0)) return; // skip the request. if request is not made with http protocol

  event.respondWith(CacheHelper.revalidateCache(event.request));
});
