/* Service Worker — On apprend avec Levy
   Rend le jeu jouable hors-ligne : le "coeur" (page, code, données) est mis en
   cache à l'installation ; l'audio est mis en cache au fur et à mesure qu'il est
   joué (runtime cache). Deuxième visite quasi instantanée. */
const VERSION = "levy-v38";
const CORE = VERSION + "-core";
// Cache audio NON versionné : les ~1375 mp3 ne doivent PAS être re-téléchargés à chaque
// nouvelle version (sinon un enfant qui met à jour puis passe hors-ligne perd tout le son).
const AUDIO = "levy-audio";
// Cache des polices Google (cross-origin) : pour que le rendu soit IDENTIQUE hors-ligne.
const FONTS = "levy-fonts";

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
  "./data/level9.js", "./data/level10.js",
  "./sfx/mouton.mp3", "./sfx/chat.mp3", "./sfx/vache.mp3", "./sfx/coq.mp3"
];

self.addEventListener("install", e => {
  // addAll est atomique : un seul asset en 404 ferait échouer TOUT l'install (plus d'offline).
  // On met en cache asset par asset, en tolérant les échecs isolés.
  // PAS de skipWaiting ici : lors d'une MISE À JOUR, le nouveau SW ATTEND en coulisse pour ne
  // pas casser la session en cours. Il ne s'active que quand l'utilisateur touche "Mettre à jour"
  // (message ci-dessous). Sur une 1re visite (aucun ancien SW), il s'active tout de suite.
  e.waitUntil(
    caches.open(CORE).then(c => Promise.allSettled(CORE_ASSETS.map(a => c.add(a))))
  );
});

// La page demande l'activation immédiate quand l'utilisateur accepte la mise à jour
self.addEventListener("message", e => {
  if (e.data === "skipWaiting") self.skipWaiting();
});

self.addEventListener("activate", e => {
  // on purge les vieux caches CORE mais on GARDE le cache audio non versionné
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== AUDIO && k !== FONTS && k.indexOf(VERSION) !== 0).map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // polices Google (cross-origin) : cache-first pour un rendu identique hors-ligne
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    e.respondWith(
      caches.open(FONTS).then(cache =>
        cache.match(req).then(hit => hit || fetch(req).then(res => {
          if (res) cache.put(req, res.clone());
          return res;
        }).catch(() => hit))
      )
    );
    return;
  }

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
