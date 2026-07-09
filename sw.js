/* Service Worker — On apprend avec Levy
   Rend le jeu jouable hors-ligne : le "coeur" (page, code, données) est mis en
   cache à l'installation ; l'audio est mis en cache au fur et à mesure qu'il est
   joué (runtime cache). Deuxième visite quasi instantanée. */
const VERSION = "levy-v21";
const CORE = VERSION + "-core";
const AUDIO = VERSION + "-audio";

const CORE_ASSETS = [
  "./",
  "./index.html",
  "./app.js",
  "./mascot.js",
  "./style.css",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./data/audio-map.js",
  "./data/level1.js", "./data/level2.js", "./data/level3.js", "./data/level4.js",
  "./data/level5.js", "./data/level6.js", "./data/level7.js", "./data/level8.js",
  "./data/level9.js", "./data/level10.js"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CORE).then(c => c.addAll(CORE_ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k.indexOf(VERSION) !== 0).map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const isAudio = url.pathname.indexOf("/audio/") >= 0 && url.pathname.endsWith(".mp3");

  if (isAudio) {
    // audio : cache-first, on met en cache à la première écoute
    e.respondWith(
      caches.open(AUDIO).then(cache =>
        cache.match(req).then(hit => hit || fetch(req).then(res => {
          if (res && res.ok) cache.put(req, res.clone());
          return res;
        }).catch(() => hit))
      )
    );
    return;
  }

  // coeur du jeu : cache-first avec repli réseau
  e.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(res => {
      if (res && res.ok && (url.origin === location.origin)) {
        const copy = res.clone();
        caches.open(CORE).then(c => c.put(req, copy));
      }
      return res;
    }).catch(() => caches.match("./index.html")))
  );
});
