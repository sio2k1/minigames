/**
 * Imported by the generated sw.js (vite.config.ts `workbox.importScripts` —
 * imported before the generated workbox bundle evaluates, so plain Cache
 * Storage API only, no `self.workbox`). Purges the runtime navigation cache
 * on every SW activate (including updates): cached prerendered pages must
 * never outlive their build's hashed assets — a stale page served after a
 * deploy 404s its own CSS/JS and renders unstyled until the user clears
 * data. The cache name must stay in sync with the `navigations` cacheName
 * in vite.config.ts.
 */
self.addEventListener('activate', (event) => {
  event.waitUntil(caches.delete('navigations'))
})