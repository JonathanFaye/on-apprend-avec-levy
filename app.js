/* ============================================================
   On apprend avec Levy — moteur du jeu
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Données ---------- */
  const LEVELS = (window.LEVELS || []).slice().sort((a, b) => a.order - b.order);

  /* ---------- Stockage ---------- */
  const KEY = "levy-game-v1";
  let store = load();
  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return { profiles: {}, current: null, heOn: true, soundOn: true };
  }
  let saveErrorShown = false;
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) {
      if (!saveErrorShown) {
        saveErrorShown = true;
        toast("oops", "Ta progression ne peut pas être sauvegardée sur cet appareil !", "הַהִתְקַדְּמוּת לֹא נִשְׁמֶרֶת בַּמַּכְשִׁיר הַזֶּה!");
      }
    }
  }
  function profile() { return store.current ? store.profiles[store.current] : null; }

  /* ---------- Utilitaires ---------- */
  const $screen = document.getElementById("screen");
  const $overlay = document.getElementById("mascot-overlay");
  const $confetti = document.getElementById("confetti-layer");

  function esc(s) {
    return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
  // Met en forme le corps d'une leçon pour que ce soit agréable à lire pour un enfant :
  // chaque phrase sur sa ligne, et les listes ("M comme moto, P comme pizza..." ou
  // "M s'appelle 'èm', P s'appelle 'pé'...") avec un item par ligne.
  function formatBody(text) {
    const t = String(text || "").trim();
    if (!t) return "";
    const sentences = t.match(/[^.!?]+[.!?]*/g) || [t];
    const out = [];
    sentences.forEach(raw => {
      const s = raw.trim();
      if (!s) return;
      const listHits = (s.match(/ comme | s'appelle |כְּמוֹ|כמו/gi) || []).length;
      if (listHits >= 2) {
        s.split(/\s*,\s+/).forEach(p => out.push('<span class="body-item">' + esc(p.trim()) + "</span>"));
      } else {
        out.push('<span class="body-line">' + esc(s) + "</span>");
      }
    });
    return out.join("");
  }
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function normalize(s, strict) {
    s = String(s).trim().replace(/\s+/g, " ");
    if (strict) return s;
    return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  }
  function isEmoji(s) {
    try { return /\p{Extended_Pictographic}/u.test(s) && s.length <= 8; } catch (e) { return false; }
  }
  function he(txt) {
    return store.heOn && txt ? '<span class="he" dir="rtl">' + esc(txt) + "</span>" : "";
  }

  /* ---------- Audio : voix de Levy (mp3 pré-générés) + repli synthèse vocale ---------- */
  let frVoice = null;
  function pickVoice() {
    const vs = window.speechSynthesis ? speechSynthesis.getVoices() : [];
    frVoice = vs.find(v => /^fr[-_]FR/i.test(v.lang)) || vs.find(v => /^fr/i.test(v.lang)) || null;
  }
  if (window.speechSynthesis) {
    pickVoice();
    speechSynthesis.onvoiceschanged = pickVoice;
  }
  // NE PAS MODIFIER SANS RÉPERCUTER DANS gen_audio.py / gen_audio_levy.py : le hash doit
  // rester identique des deux côtés, sinon une partie de AUDIO_MAP devient invalide
  // silencieusement (repli TTS navigateur sans erreur visible).
  function audioKey(t) {
    let str = String(t);
    try { str = str.replace(/[\p{Extended_Pictographic}\u200D\uFE0F]/gu, ""); } catch (e) {}
    str = str.replace(/\s+/g, " ").trim().toLowerCase();
    let h = 5381;
    for (let i = 0; i < str.length; i++) h = ((h * 33) ^ str.charCodeAt(i)) >>> 0;
    return h.toString(16);
  }
  let currentAudio = null;
  // coupe tout son en cours (mp3 + synthèse vocale) : appelé à chaque changement d'écran
  // pour ne pas laisser une énumération continuer après avoir quitté la leçon
  function stopAudio() {
    try { if (currentAudio) { currentAudio.pause(); currentAudio.src = ""; currentAudio = null; } } catch (e) {}
    try { if (window.speechSynthesis) speechSynthesis.cancel(); } catch (e) {}
    try { document.querySelectorAll(".say-btn.loading").forEach(b => b.classList.remove("loading")); } catch (e) {}
    // nettoie une éventuelle barre "Suivant" restée à l'écran si on quitte l'exercice
    try { document.querySelectorAll(".correct-bar").forEach(b => b.remove()); } catch (e) {}
  }
  let audioErrorShown = false;
  function audioErrorToast() {
    if (audioErrorShown) return;
    audioErrorShown = true;
    toast("oops", "Levy n'entend plus rien, réessaie ! 📶", "לֵוִי לֹא שׁוֹמֵעַ, נַסּוּ שׁוּב!");
  }
  // btnOverride : bouton a marquer "en chargement" pendant l'attente ; par defaut on
  // cherche le bouton #sayb de l'ecran courant (present sur la quasi-totalite des ecrans).
  // Voix : tout le contenu est pré-généré (Denise pour l'apprentissage, voix d'homme
  // pour les phrases de Levy). Si un mp3 ne peut pas jouer (lecture auto bloquée sur
  // mobile, erreur réseau), on reste SILENCIEUX — JAMAIS la voix du navigateur, qui
  // est différente et casse la cohérence. L'enfant a toujours le bouton 🔊.
  function speak(text, rate, btnOverride) {
    const btn = btnOverride || document.getElementById("sayb");
    if (!store.soundOn || !text) { if (btn) btn.classList.remove("loading"); return; }
    stopAudio();
    if (btn) btn.classList.add("loading");
    const clear = () => { if (btn) btn.classList.remove("loading"); };
    const map = window.AUDIO_MAP || {};
    const k = audioKey(text);
    if (map[k]) {
      try {
        const a = new Audio("audio/" + k + ".mp3");
        currentAudio = a;
        a.addEventListener("playing", clear, { once: true });
        a.addEventListener("error", clear);
        a.play().catch(clear);
        return;
      } catch (e) {}
    }
    // repli synthèse navigateur UNIQUEMENT si un texte n'a pas d'audio pré-généré (rarissime)
    ttsFallback(text, rate, btn);
  }
  function ttsFallback(text, rate, btn) {
    const clear = () => { if (btn) btn.classList.remove("loading"); };
    if (!window.speechSynthesis) { clear(); audioErrorToast(); return; }
    try {
      const clean = String(text).replace(/[\p{Extended_Pictographic}\u200D\uFE0F]/gu, "");
      const u = new SpeechSynthesisUtterance(clean);
      u.lang = "fr-FR";
      if (frVoice) u.voice = frVoice;
      u.rate = rate || 0.85;
      u.pitch = 1.25; // plus proche d'une voix d'enfant
      u.onstart = clear;
      u.onend = clear;
      u.onerror = () => { clear(); audioErrorToast(); };
      speechSynthesis.speak(u);
    } catch (e) { clear(); audioErrorToast(); }
  }

  /* ---------- Petits sons (WebAudio) ---------- */
  let actx = null;
  function beep(freqs, dur) {
    if (!store.soundOn) return;
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      let t = actx.currentTime;
      freqs.forEach(f => {
        const o = actx.createOscillator(), g = actx.createGain();
        o.type = "sine"; o.frequency.value = f;
        g.gain.setValueAtTime(0.12, t);
        g.gain.exponentialRampToValueAtTime(0.001, t + dur);
        o.connect(g); g.connect(actx.destination);
        o.start(t); o.stop(t + dur);
        t += dur * 0.55;
      });
    } catch (e) {}
  }
  const dingGood = () => beep([660, 880], 0.18);
  const dingBad = () => beep([220], 0.25);

  /* ---------- Confettis ---------- */
  function confetti(n) {
    const colors = ["#F5A623", "#4A90D9", "#34A853", "#E5484D", "#6A1B9A", "#00838F"];
    for (let i = 0; i < (n || 40); i++) {
      const d = document.createElement("div");
      d.className = "confetti";
      d.style.left = Math.random() * 100 + "vw";
      d.style.background = colors[Math.floor(Math.random() * colors.length)];
      d.style.animationDuration = 1.6 + Math.random() * 1.6 + "s";
      d.style.animationDelay = Math.random() * 0.4 + "s";
      d.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
      $confetti.appendChild(d);
      setTimeout(() => d.remove(), 4000);
    }
  }

  /* ---------- Phrases de Levy ---------- */
  const PRAISE = [
    ["Bravo !", "כָּל הַכָּבוֹד!"], ["Super !", "מְעֻלֶּה!"], ["Mazal Tov !", "מַזָּל טוֹב!"],
    ["Génial !", "גְּאוֹנִי!"], ["Champion !", "אַלּוּף!"], ["Parfait !", "מֻשְׁלָם!"],
    ["Incroyable !", "מַדְהִים!"], ["Quel talent !", "אֵיזֶה כִּשָּׁרוֹן!"],
    ["Excellent !", "מְצֻיָּן!"], ["Tu gères !", "אַתָּה שׁוֹלֵט בָּזֶה!"],
    ["Trop fort !", "חָזָק מְאֹד!"], ["Yes !", "כֵּן!"],
    ["C'est ça !", "זֶה בְּדִיּוּק זֶה!"], ["Impressionnant !", "מַרְשִׁים!"],
    ["Tu assures !", "אַתָּה מְעֻלֶּה!"], ["Continue comme ça !", "תַּמְשִׁיךְ כָּכָה!"],
    ["Wow !", "וַאוּ!"], ["Tu es un pro !", "אַתָּה מִקְצוֹעָן!"],
    ["Félicitations !", "כָּל הַכָּבוֹד!"], ["Magnifique !", "יָפֶה מְאוֹד!"],
    ["Bien joué !", "עֲבוֹדָה טוֹבָה!"], ["Superbe !", "נֶהְדָּר!"],
    ["Tu es un champion !", "אַתָּה אַלּוּף!"], ["Extraordinaire !", "לֹא יֵאָמֵן!"]
  ];
  const OOPS = [
    ["Presque !", "כִּמְעַט!"], ["Pas grave, on apprend !", "לֹא נוֹרָא, כָּכָה לוֹמְדִים!"],
    ["Hop, je t'explique !", "בּוֹא נָבִין יַחַד!"], ["Courage, tu y es presque !", "עוֹד קְצָת, אַתָּה כִּמְעַט שָׁם!"]
  ];
  // petites remarques rigolotes de Levy, affichees de temps en temps avant un exercice
  // (surprise/variete, casse la previsibilite des blagues de fin de niveau)
  const QUIPS = [
    ["Tu vas assurer ! 😎", "אַתֶּם תַּצְלִיחוּ!"],
    ["Prêt ? Vas-y !", "מוּכָנִים? קָדִימָה!"],
    ["Je crois en toi !", "אֲנִי מַאֲמִין בָּכֶם!"],
    ["Celui-là, il est pour toi !", "זֶה בִּשְׁבִילְכֶם!"],
    ["Allez, champion !", "קָדִימָה, אַלּוּף!"]
  ];
  function rand(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

  /* ---------- Progression ---------- */
  function subStars(subId) {
    const p = profile();
    return p && p.done && typeof p.done[subId] === "number" ? p.done[subId] : null;
  }
  function isSubDone(subId) { return subStars(subId) !== null; }
  function levelDone(level) { return isSubDone(level.sublevels[level.sublevels.length - 1].id); }
  // note de maîtrise sur 3 étoiles (objectif clair pour un enfant) à partir du % de
  // bonnes réponses du premier coup : <60% = 1, 60-99% = 2, 100% = 3
  function starRating(correct, total) {
    if (!total) return 1;
    const pct = Math.min(1, (correct || 0) / total);
    return pct >= 1 ? 3 : pct >= 0.6 ? 2 : 1;
  }
  function subRating(sub) {
    const c = subStars(sub.id);
    return c === null ? null : starRating(c, sub.exercises.length);
  }
  function stars3HTML(rating) {
    return '<span class="stars3">' + [1, 2, 3].map(i =>
      '<span class="star3' + (i <= rating ? " on" : "") + '" style="animation-delay:' + (0.15 + i * 0.28) + 's">★</span>'
    ).join("") + "</span>";
  }
  function isLevelUnlocked(idx) {
    if (idx === 0) return true;
    return levelDone(LEVELS[idx - 1]);
  }
  function isSubUnlocked(level, subIdx) {
    if (subIdx === 0) return true;
    return isSubDone(level.sublevels[subIdx - 1].id);
  }
  function totalStars() {
    const p = profile();
    if (!p || !p.done) return 0;
    return Object.values(p.done).reduce((s, v) => s + (v || 0), 0);
  }
  function gameFinished() {
    return LEVELS.length > 0 && LEVELS.every(levelDone);
  }
  function isSkipped(subId) {
    const p = profile();
    return !!(p && p.skipped && p.skipped[subId]);
  }
  function skipLevelsBefore(lvlIdx, how) {
    // marque tous les sous-niveaux des niveaux < lvlIdx comme validés (0 étoile, badge 🔓)
    const p = profile();
    p.done = p.done || {}; p.skipped = p.skipped || {};
    for (let i = 0; i < lvlIdx; i++) {
      LEVELS[i].sublevels.forEach(sub => {
        if (typeof p.done[sub.id] !== "number") {
          p.done[sub.id] = 0;
          p.skipped[sub.id] = how || "adulte";
        }
      });
    }
    save();
  }

  /* ---------- Porte adulte : débloquer un niveau ---------- */
  function adultGate(lvlIdx) {
    const lv = LEVELS[lvlIdx];
    const a = 12 + Math.floor(Math.random() * 77);
    const b = 13 + Math.floor(Math.random() * 76);
    $overlay.innerHTML =
      '<div class="mascot-panel">' +
      '<div class="mascot-wrap">' + mascotSVG("think") + "</div>" +
      "<h3>Tu connais déjà tout ça ? 🤔</h3>" +
      '<div class="explain">Demande à un adulte de confirmer que tu peux sauter directement au niveau ' + lv.order + " !" +
      he("בַּקְּשׁוּ מִמְּבֻגָּר לְאַשֵּׁר שֶׁאַתֶּם יְכוֹלִים לִקְפֹּץ לְשָׁלָב " + lv.order + "!") + "</div>" +
      '<div class="explain" style="margin-top:10px;font-weight:700">Question pour l\'adulte 🧑‍🦳 : combien font ' + a + " + " + b + " ?</div>" +
      '<input class="type-input" id="gate-input" inputmode="numeric" autocomplete="off" placeholder="Réponse de l\'adulte...">' +
      '<button class="btn btn-good" id="gate-ok">Valider ✓</button>' +
      '<button class="btn btn-ghost" id="gate-cancel">Annuler</button>' +
      "</div>";
    $overlay.classList.remove("hidden");
    document.getElementById("gate-cancel").addEventListener("click", () => $overlay.classList.add("hidden"));
    document.getElementById("gate-ok").addEventListener("click", check);
    document.getElementById("gate-input").addEventListener("keydown", e => { if (e.key === "Enter") check(); });
    function check() {
      const v = parseInt(document.getElementById("gate-input").value, 10);
      if (v === a + b) {
        skipLevelsBefore(lvlIdx, "adulte");
        $overlay.classList.add("hidden");
        confetti(60);
        speak("Mazal Tov ! Un adulte a confirmé que tu sais déjà tout ça !");
        toast("cheer", "Un adulte a confirmé : tu sais déjà tout ça ! 🎉", "מְבֻגָּר אִשֵּׁר: אַתֶּם כְּבָר יוֹדְעִים אֶת זֶה!");
        setTimeout(screenMap, 1400);
      } else {
        const inp = document.getElementById("gate-input");
        inp.value = ""; inp.style.borderColor = "var(--bad)";
        inp.placeholder = "Hmm... demande à un vrai adulte 😄";
      }
    }
  }

  /* ---------- Test magique de placement ---------- */
  function placementPool(lv) {
    // On ne garde QUE des types non devinables (il faut vraiment décoder pour réussir).
    // match / pick à emoji + read / riddle sont exclus : sinon un enfant qui ne lit pas
    // peut réussir au hasard et être catapulté trop haut.
    const HARD = { listen: 1, fill: 1, build: 1, type: 1, blend: 1 };
    const pool = [];
    lv.sublevels.forEach(sub => sub.exercises.forEach(ex => {
      if (HARD[ex.type]) pool.push(ex);
    }));
    return pool;
  }
  function screenPlacementIntro() {
    $screen.innerHTML =
      '<div class="screen splash" style="padding:24px 20px">' +
      '<div class="mascot-wrap">' + mascotSVG("think") + "</div>" +
      "<h1>Le test magique 🧙</h1>" +
      '<div class="subtitle">On regarde ce que tu sais déjà ? Je te pose quelques questions, de plus en plus dures, et je trouve ton niveau de départ !' +
      he("בּוֹדְקִים מָה אַתֶּם כְּבָר יוֹדְעִים? אֲנִי שׁוֹאֵל כַּמָּה שְׁאֵלוֹת וּמוֹצֵא אֶת שָׁלָב הַהַתְחָלָה שֶׁלָּכֶם!") + "</div>" +
      '<button class="btn btn-accent" id="pl-go">🧙 C\'est parti !' + he("יַאלְלָה מַתְחִילִים!") + "</button>" +
      '<button class="btn btn-ghost" id="pl-skip">Non, je commence au début' + he("לֹא, אֲנִי מַתְחִיל מֵהַהַתְחָלָה") + "</button>" +
      "</div>";
    document.getElementById("pl-go").addEventListener("click", () => placementRun(0));
    document.getElementById("pl-skip").addEventListener("click", screenMap);
  }
  function placementRun(lvlIdx) {
    if (lvlIdx >= LEVELS.length) return placementFinish(LEVELS.length);
    const lv = LEVELS[lvlIdx];
    const picks = shuffle(placementPool(lv)).slice(0, 3);
    if (picks.length < 3) return placementFinish(lvlIdx);
    const session = {
      lvlIdx, subIdx: 0,
      list: picks, i: 0, stars: 0, failedThis: false,
      placement: true,
      onDone: sess => {
        // 3/3 exigé pour valider un niveau : on ne fait jamais monter au-dessus du décodage réel.
        if (sess.stars >= 3) placementRun(lvlIdx + 1);
        else placementFinish(lvlIdx);
      }
    };
    toast("teach", "Niveau " + lv.order + " : " + lv.name, lv.nameHe);
    renderExercise(session);
  }
  function placementFinish(lvlIdx) {
    const startIdx = Math.min(lvlIdx, LEVELS.length - 1);
    skipLevelsBefore(startIdx, "test");
    const lv = LEVELS[startIdx];
    confetti(80);
    $screen.innerHTML =
      '<div class="screen results">' +
      '<div class="mascot-wrap mascot-dance">' + mascotSVG("cheer") + "</div>" +
      "<h2>Ton niveau de départ ! 🧙</h2>" +
      '<div class="score-line" style="font-size:1.2rem;font-weight:700;color:' + lv.color + '">' +
      lv.emoji + " Niveau " + lv.order + " — " + esc(lv.name) + he(lv.nameHe) + "</div>" +
      '<div class="score-line">' + (startIdx > 0 ? "Tout ce qui est avant est déjà débloqué pour toi. Mazal Tov !" : "On commence tranquillement au début, c'est parfait comme ça !") +
      he(startIdx > 0 ? "כָּל מָה שֶׁלִּפְנֵי כְּבָר פָּתוּחַ בִּשְׁבִילְכֶם. מַזָּל טוֹב!" : "מַתְחִילִים בְּרֹגַע מֵהַהַתְחָלָה, זֶה מֻשְׁלָם כָּךְ!") + "</div>" +
      '<button class="btn btn-good" id="pl-done">Jouer ! 🚀</button>' +
      "</div>";
    speak(startIdx > 0 ? "Mazal Tov ! Tu commences au niveau " + lv.order + " !" : "On commence au début, c'est parti !");
    document.getElementById("pl-done").addEventListener("click", screenMap);
  }

  /* ============================================================
     ÉCRANS
     ============================================================ */

  /* ---------- Écran profils ---------- */
  // personnages : un enfant qui ne lit pas encore choisit son animal (pas besoin d'écrire)
  // animaux cachère (à sabots fendus + ruminants, volailles cachère, poisson à écailles)
  const AVATARS = [
    ["🐑", "Mouton"], ["🐐", "Chèvre"], ["🐄", "Vache"], ["🦌", "Biche"],
    ["🦒", "Girafe"], ["🐔", "Poule"], ["🦆", "Canard"], ["🐟", "Poisson"]
  ];
  function createProfile(name, avatar) {
    let key = name, i = 2;
    while (store.profiles[key]) { key = name + " " + i; i++; }
    store.profiles[key] = { done: {}, skipped: {}, created: new Date().toISOString(), avatar: avatar || "🧒" };
    store.current = key; save();
    screenPlacementIntro();
  }
  function screenSplash() {
    stopAudio();
    const names = Object.keys(store.profiles);
    let rows = names.map(n => {
      const p = store.profiles[n];
      const st = Object.values(p.done || {}).reduce((s, v) => s + (v || 0), 0);
      return '<div class="profile-row" data-name="' + esc(n) + '">' +
        '<span class="avatar">' + (p.avatar || "🧒") + '</span><span class="pname">' + esc(n) + "</span>" +
        '<span class="stars">⭐ ' + st + "</span>" +
        '<button class="del" data-del="' + esc(n) + '" aria-label="supprimer">✕</button>' +
        "</div>";
    }).join("");

    $screen.innerHTML =
      '<div class="screen splash" style="padding:24px 20px">' +
      '<div class="mascot-wrap">' + mascotSVG("wave") + "</div>" +
      "<h1>On apprend avec <span class=\"fr\">Levy</span> !</h1>" +
      '<div class="subtitle">Le français, c\'est facile et rigolo 🇫🇷' + he("לוֹמְדִים צָרְפָתִית עִם לֵוִי! קַל וְכֵיף") + "</div>" +
      '<div class="profiles-list">' + rows + "</div>" +
      '<div class="new-title">Choisis ton personnage' + he("בַּחֲרוּ דְּמוּת") + "</div>" +
      '<div class="avatar-grid">' +
      AVATARS.map(a => '<button class="avatar-pick" data-av="' + a[0] + '" data-nm="' + a[1] + '" aria-label="' + a[1] + '">' + a[0] + "</button>").join("") +
      "</div>" +
      '<div class="newplayer-form">' +
      '<input id="newname" maxlength="14" placeholder="ou écris ton prénom..." autocomplete="off">' +
      '<button class="btn btn-accent" id="addplayer">OK</button>' +
      "</div>" +
      '<div class="splash-tools">' +
      '<button class="chip" id="he-toggle" style="border:none;box-shadow:var(--shadow);padding:9px 16px;border-radius:14px;background:' + (store.heOn ? "var(--primary);color:#fff" : "#fff") + '">עִבְרִית ' + (store.heOn ? "✓" : "") + "</button>" +
      '<button class="chip" id="backup-btn" style="border:none;box-shadow:var(--shadow);padding:9px 16px;border-radius:14px;background:#fff">💾 Sauvegarde</button>' +
      "</div>" +
      "</div>";

    $screen.querySelectorAll(".profile-row").forEach(row => {
      row.addEventListener("click", e => {
        if (e.target.closest(".del")) return;
        store.current = row.dataset.name; save();
        screenMap();
      });
    });
    $screen.querySelectorAll(".del").forEach(b => {
      b.addEventListener("click", () => {
        confirmDialog({
          expr: "oops",
          title: "Supprimer " + b.dataset.del + " ?",
          titleHe: "לִמְחֹק אֶת " + b.dataset.del + "?",
          body: "Toute la progression de ce joueur sera perdue.",
          bodyHe: "כָּל הַהִתְקַדְּמוּת שֶׁל הַשַּׂחְקָן תֹּאבַד.",
          yes: "Supprimer", yesHe: "לִמְחֹק", no: "Garder", noHe: "לְהַשְׁאִיר"
        }, () => {
          delete store.profiles[b.dataset.del];
          if (store.current === b.dataset.del) store.current = null;
          save(); screenSplash();
        });
      });
    });
    $screen.querySelectorAll(".avatar-pick").forEach(b => b.addEventListener("click", () => createProfile(b.dataset.nm, b.dataset.av)));
    document.getElementById("addplayer").addEventListener("click", addPlayer);
    document.getElementById("newname").addEventListener("keydown", e => { if (e.key === "Enter") addPlayer(); });
    document.getElementById("he-toggle").addEventListener("click", () => {
      store.heOn = !store.heOn; save(); screenSplash();
    });
    document.getElementById("backup-btn").addEventListener("click", screenBackup);

    function addPlayer() {
      const name = document.getElementById("newname").value.trim();
      if (!name) return;
      if (store.profiles[name]) { store.current = name; save(); screenMap(); }
      else createProfile(name, "🧒");
    }
  }

  /* ---------- Carte des niveaux ---------- */
  function screenMap() {
    stopAudio();
    if (!profile()) return screenSplash();
    const cards = LEVELS.map((lv, i) => {
      const unlocked = isLevelUnlocked(i);
      const doneCount = lv.sublevels.filter(s => isSubDone(s.id)).length;
      const starSum = lv.sublevels.reduce((s, sub) => s + (subStars(sub.id) || 0), 0);
      return '<button class="level-card' + (unlocked ? "" : " locked") + '" data-lvl="' + i + '" style="--lvl:' + lv.color + '">' +
        '<span class="lvl-emoji">' + lv.emoji + "</span>" +
        '<span class="lvl-info">' +
        '<span class="lvl-num">Niveau ' + lv.order + "</span>" +
        '<span class="lvl-name">' + esc(lv.name) + he(lv.nameHe) + "</span>" +
        '<span class="lvl-tag">' + esc(lv.tagline || "") + "</span>" +
        "</span>" +
        (unlocked
          ? '<span class="lvl-progress">' + doneCount + "/" + lv.sublevels.length + "<br>⭐" + starSum + "</span>"
          : '<span class="lvl-progress">🔒</span>') +
        "</button>";
    }).join("");

    // bouton "reprendre" : dernière étape non terminée où l'enfant s'était arrêté
    const p = profile();
    let resumeHTML = "";
    if (p && p.lastPos && LEVELS[p.lastPos.lvlIdx]) {
      const rlv = LEVELS[p.lastPos.lvlIdx];
      const rsub = rlv.sublevels[p.lastPos.subIdx];
      if (rsub && isLevelUnlocked(p.lastPos.lvlIdx) && !isSubDone(rsub.id)) {
        resumeHTML = '<button class="btn btn-accent resume-btn" id="resume">▶️ Reprendre : ' +
          esc(rlv.name) + " · " + esc(rsub.name) + he("לְהַמְשִׁיךְ") + "</button>";
      }
    }
    const streak = currentStreak();

    $screen.innerHTML =
      '<div class="screen">' +
      '<div class="topbar">' +
      '<button class="chip" id="switch">🧒 ' + esc(store.current) + "</button>" +
      '<span class="chip">⭐ ' + totalStars() + "</span>" +
      (streak > 0 ? '<span class="chip streak-chip">🔥 ' + streak + "</span>" : "") +
      '<span style="flex:1"></span>' +
      '<button class="chip" id="album" aria-label="Mon album">🗂️</button>' +
      '<button class="chip" id="badges" aria-label="Mes badges">🏆</button>' +
      '<button class="chip' + (store.soundOn ? " active" : "") + '" id="snd" aria-label="' + (store.soundOn ? "Couper le son" : "Activer le son") + '">' + (store.soundOn ? "🔊" : "🔇") + "</button>" +
      '<button class="chip' + (store.heOn ? " active" : "") + '" id="hebtn" aria-label="Afficher/masquer l\'hébreu">ע</button>' +
      "</div>" +
      resumeHTML +
      (gameFinished() ? '<button class="btn btn-accent" id="dipbtn" style="margin-bottom:12px">🎓 Mon diplôme !</button>' : "") +
      (LEVELS.length === 0 ? '<p style="text-align:center;margin-top:40px">Contenu en cours de chargement...</p>' : cards) +
      '<button class="parents-btn" id="parents">👨‍👩‍👧 Coin des parents' + he("פִּנַּת הַהוֹרִים") + "</button>" +
      "</div>";

    document.getElementById("switch").addEventListener("click", () => { screenSplash(); });
    document.getElementById("snd").addEventListener("click", () => { store.soundOn = !store.soundOn; save(); screenMap(); });
    document.getElementById("hebtn").addEventListener("click", () => { store.heOn = !store.heOn; save(); screenMap(); });
    document.getElementById("badges").addEventListener("click", screenBadges);
    document.getElementById("album").addEventListener("click", screenStickers);
    document.getElementById("parents").addEventListener("click", screenResources);
    const rb = document.getElementById("resume");
    if (rb) rb.addEventListener("click", () => {
      const lp = profile().lastPos;
      startLesson(lp.lvlIdx, lp.subIdx);
    });
    const dip = document.getElementById("dipbtn");
    if (dip) dip.addEventListener("click", screenDiploma);
    $screen.querySelectorAll(".level-card").forEach(c => {
      c.addEventListener("click", () => {
        const i = +c.dataset.lvl;
        if (!isLevelUnlocked(i)) {
          adultGate(i);
          return;
        }
        screenSublevels(i);
      });
    });
  }

  /* ---------- Sous-niveaux ---------- */
  function screenSublevels(lvlIdx) {
    stopAudio();
    const lv = LEVELS[lvlIdx];
    const subs = lv.sublevels.map((sub, j) => {
      const unlocked = isSubUnlocked(lv, j);
      const st = subStars(sub.id);
      const total = sub.exercises.length;
      const skipped = isSkipped(sub.id);
      return '<button class="sub-card' + (unlocked ? "" : " locked") + (st !== null ? " done" : "") + '" data-sub="' + j + '" style="--lvl:' + lv.color + '">' +
        '<span class="sub-emoji">' + (skipped && !st ? "🔓" : st !== null ? "✅" : unlocked ? sub.emoji || "▶️" : "🔒") + "</span>" +
        '<span class="sub-info">' +
        '<span class="sub-name">' + esc(sub.name) + he(sub.nameHe) + "</span>" +
        (skipped && !st ? '<span class="sub-stars">🔓 validé — tu peux le jouer quand même !</span>'
          : st !== null ? '<span class="sub-stars">' + stars3HTML(starRating(st, total)) + (starRating(st, total) < 3 ? ' <span class="sub-hint">rejoue pour 3 ⭐</span>' : "") + "</span>" : "") +
        "</span>" +
        "</button>";
    }).join("");

    $screen.innerHTML =
      '<div class="screen">' +
      '<div class="topbar">' +
      '<button class="back" id="back" aria-label="Retour">←</button>' +
      '<span class="title" style="color:' + lv.color + '">' + lv.emoji + " " + esc(lv.name) + he(lv.nameHe) + "</span>" +
      '<span class="chip">⭐ ' + totalStars() + "</span>" +
      "</div>" +
      '<div class="sub-list">' + subs + "</div>" +
      "</div>";

    document.getElementById("back").addEventListener("click", screenMap);
    $screen.querySelectorAll(".sub-card").forEach(c => {
      c.addEventListener("click", () => {
        const j = +c.dataset.sub;
        if (!isSubUnlocked(lv, j)) {
          toast("teach", "Termine d'abord l'étape d'avant !", "קֹדֶם סִיְּמוּ אֶת הַשָּׁלָב הַקּוֹדֵם!");
          return;
        }
        startLesson(lvlIdx, j);
      });
    });
  }

  /* ---------- Leçon ---------- */
  function startLesson(lvlIdx, subIdx) {
    const pp = profile();
    if (pp) { pp.lastPos = { lvlIdx, subIdx }; save(); }
    const lv = LEVELS[lvlIdx];
    const sub = lv.sublevels[subIdx];
    const cards = (sub.lesson && sub.lesson.cards) || [];
    let ci = 0;
    if (cards.length === 0) return startExercises(lvlIdx, subIdx);
    renderCard();

    function renderCard() {
      const c = cards[ci];
      const dots = cards.map((_, k) => '<span class="dot' + (k === ci ? " on" : "") + '"></span>').join("");
      $screen.innerHTML =
        '<div class="screen" style="--lvl:' + lv.color + '">' +
        '<div class="topbar">' +
        '<button class="back" id="back" aria-label="Quitter la leçon">✕</button>' +
        '<span class="title">' + esc(sub.name) + "</span>" +
        "</div>" +
        '<div class="lesson-dots">' + dots + "</div>" +
        '<div class="lesson-card">' +
        "<h2>" + esc(c.title) + he(c.titleHe) + "</h2>" +
        (c.big ? '<div class="big">' + esc(c.big) + "</div>" : "") +
        '<div class="body">' + formatBody(c.body) +
        (store.heOn && c.bodyHe ? '<span class="he" dir="rtl">' + formatBody(c.bodyHe) + "</span>" : "") + "</div>" +
        (c.say ? '<button class="say-btn" id="sayb">🔊 Écoute !</button>' : "") +
        "</div>" +
        '<button class="btn btn-good" id="next">' +
        (ci < cards.length - 1 ? "Suite →" : "C'est parti ! 🚀") +
        he(ci < cards.length - 1 ? "הָלְאָה" : "יַאלְלָה מַתְחִילִים!") +
        "</button>" +
        "</div>";
      document.getElementById("back").addEventListener("click", () => screenSublevels(lvlIdx));
      const sb = document.getElementById("sayb");
      if (sb) sb.addEventListener("click", () => speak(c.say));
      document.getElementById("next").addEventListener("click", () => {
        ci++;
        if (ci < cards.length) renderCard();
        else startExercises(lvlIdx, subIdx);
      });
      if (c.say) setTimeout(() => speak(c.say, null, null, true), 500);
    }
  }

  /* ---------- Session d'exercices ---------- */
  // Réordonne pour éviter d'enchaîner 2 fois le même type d'exercice (casse la monotonie).
  // Tri glouton stable : on garde l'ordre autant que possible, on décale juste pour varier.
  function orderExercises(list) {
    if (list.length < 3) return list.slice();
    const rest = list.slice();
    const out = [rest.shift()];
    while (rest.length) {
      let idx = rest.findIndex(e => e.type !== out[out.length - 1].type);
      if (idx < 0) idx = 0;
      out.push(rest.splice(idx, 1)[0]);
    }
    return out;
  }
  function startExercises(lvlIdx, subIdx) {
    const lv = LEVELS[lvlIdx];
    const sub = lv.sublevels[subIdx];
    const session = {
      lvlIdx, subIdx,
      list: orderExercises(sub.exercises),
      i: 0,
      stars: 0,          // bonnes réponses du premier coup
      failedThis: false, // erreur déjà faite sur l'exercice courant
      missedQueue: []    // exercices ratés du premier coup, reposés en fin de session
    };
    renderExercise(session);
  }

  function exHeader(session) {
    const lv = LEVELS[session.lvlIdx];
    const pct = Math.round((session.i / session.list.length) * 100);
    return '<div class="topbar">' +
      '<button class="back" id="ex-quit" aria-label="Quitter l\'exercice">✕</button>' +
      '<div class="progress-track"><div class="progress-fill" style="width:' + pct + '%"></div></div>' +
      '<span class="chip">⭐ ' + session.stars + "</span>" +
      "</div>";
  }

  function renderExercise(session) {
    const lv = LEVELS[session.lvlIdx];
    if (session.i >= session.list.length) {
      // renforcement differe : on repose 1 a 3 questions ratees avant de cloturer la session
      if (!session.placement && session.missedQueue && session.missedQueue.length && !session.reviewDone) {
        session.list = session.list.concat(session.missedQueue.splice(0, 3));
        session.reviewDone = true;
      } else if (session.onDone) {
        return session.onDone(session);
      } else {
        return screenResults(session);
      }
    }
    const ex = session.list[session.i];
    session.failedThis = false;

    // petit encouragement a mi-parcours sur les sessions longues (ex. le grand defi, 12 exercices)
    if (!session.placement && !session.halfwayShown && session.list.length >= 8 && session.i === Math.floor(session.list.length / 2)) {
      session.halfwayShown = true;
      toast("cheer", "Tu es à mi-chemin, champion ! 💪", "אַתֶּם בַּחֲצִי הַדֶּרֶךְ, אַלּוּפִים!");
    } else if (!session.placement && session.i > 0 && Math.random() < 0.12) {
      // petite remarque rigolote occasionnelle, casse la previsibilite (1 exercice sur ~8)
      const q = rand(QUIPS);
      toast("wave", q[0], q[1]);
    }

    const prompt =
      '<div class="ex-prompt"><span class="fr">' + esc(ex.prompt) + "</span>" + he(ex.promptHe) + "</div>";

    let body = "";
    switch (ex.type) {
      case "pick":
      case "riddle": {
        const q = ex.question
          ? '<div class="ex-question' + (String(ex.question).length > 24 || String(ex.question).indexOf("\n") >= 0 ? " small" : "") + '">' + esc(ex.question) + "</div>"
          : "";
        const say = ex.say ? '<button class="say-btn" id="sayb">🔊 Écoute</button>' : "";
        body = q + say + choicesHTML(ex.choices, ex.type === "riddle");
        break;
      }
      case "listen": {
        body =
          '<button class="say-btn big" id="sayb">🔊 Écoute bien !</button>' +
          choicesHTML(ex.choices, false);
        break;
      }
      case "blend": {
        // fusion : la consonne et la voyelle se rapprochent et forment la syllabe (méthode syllabique)
        body =
          '<div class="blend-visual">' +
          '<span class="blend-c">' + esc((ex.c || "").toUpperCase()) + "</span>" +
          '<span class="blend-op">+</span>' +
          '<span class="blend-v">' + esc((ex.v || "").toUpperCase()) + "</span>" +
          '<span class="blend-eq">=</span>' +
          '<span class="blend-syll">' + esc((ex.syll || "").toUpperCase()) + "</span>" +
          "</div>" +
          '<button class="say-btn big" id="sayb">🔊 Écoute la syllabe</button>' +
          choicesHTML(ex.choices, false);
        break;
      }
      case "build": {
        body =
          (ex.say ? '<button class="say-btn" id="sayb">🔊 Écoute</button>' : "") +
          '<div class="build-target" id="btarget"></div>' +
          '<div class="build-tiles" id="btiles">' +
          shuffle(ex.tiles.map((t, k) => ({ t, k })))
            .map(o => '<button class="tile" data-k="' + o.k + '">' + esc(o.t) + "</button>").join("") +
          "</div>";
        break;
      }
      case "fill": {
        const parts = ex.sentence.split("␣");
        body =
          '<div class="fill-sentence">' + esc(parts[0]) +
          '<span class="fill-blank" id="blank">&nbsp;?&nbsp;</span>' +
          esc(parts[1] || "") + "</div>" +
          (ex.say ? '<button class="say-btn" id="sayb">🔊 Écoute</button>' : "") +
          choicesHTML(ex.choices, false);
        break;
      }
      case "type": {
        body =
          '<button class="say-btn big" id="sayb">🔊 Écoute le mot</button>' +
          '<input class="type-input" id="tinput" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Écris ici...">' +
          '<button class="btn btn-good" id="tcheck" style="margin-top:auto">Vérifier ✓' + he("לִבְדֹּק") + "</button>";
        break;
      }
      case "match": {
        const left = shuffle(ex.pairs.map((p, k) => ({ v: p[0], k })));
        const right = shuffle(ex.pairs.map((p, k) => ({ v: p[1], k })));
        body =
          '<div class="match-grid">' +
          '<div class="match-col">' + left.map(o => '<button class="match-item" data-side="L" data-k="' + o.k + '">' + esc(o.v) + "</button>").join("") + "</div>" +
          '<div class="match-col">' + right.map(o => '<button class="match-item" data-side="R" data-k="' + o.k + '">' + esc(o.v) + "</button>").join("") + "</div>" +
          "</div>";
        break;
      }
      case "read": {
        body =
          '<div class="read-text">' + esc(ex.text) + "</div>" +
          (ex.say ? '<button class="say-btn" id="sayb">🔊 Écoute la lecture</button>' : "") +
          '<button class="btn btn-good" id="readdone" style="margin-top:auto">Je l\'ai lu ! ✅' + he("קָרָאתִי!") + "</button>";
        break;
      }
      default:
        body = "<p>Type inconnu : " + esc(ex.type) + "</p>" +
          '<button class="btn" id="skipex">Passer</button>';
    }

    $screen.innerHTML =
      '<div class="screen" style="--lvl:' + lv.color + '">' +
      exHeader(session) +
      '<div class="ex-wrap">' + prompt + body + "</div>" +
      "</div>";

    document.getElementById("ex-quit").addEventListener("click", () => {
      confirmDialog({
        expr: "think",
        title: "Quitter l'exercice ?",
        titleHe: "לָצֵאת מֵהַתַּרְגִּיל?",
        body: "La progression de cette étape sera perdue.",
        bodyHe: "הַהִתְקַדְּמוּת בַּשָּׁלָב הַזֶּה תֹּאבַד.",
        yes: "Quitter", yesHe: "לָצֵאת", no: "Continuer", noHe: "לְהַמְשִׁיךְ"
      }, () => {
        if (session.placement) screenMap();
        else screenSublevels(session.lvlIdx);
      });
    });

    const sayText = ex.say || ex.syll; // blend : on lit la syllabe
    const sayb = document.getElementById("sayb");
    if (sayb) sayb.addEventListener("click", () => { sayb.classList.remove("hint"); speak(sayText); });
    // Levy dit automatiquement le son/mot cible sur TOUS les exercices (l'enfant qui
    // ne lit pas encore entend le modèle sans avoir à chercher un bouton). Si le mp3
    // est bloqué (auto sur mobile), le gros bouton 🔊 le rejoue au toucher.
    if (sayText) setTimeout(() => speak(sayText), 450);
    if (sayb && sayText) sayb.classList.add("hint");

    /* ----- branchements par type ----- */
    if (["pick", "riddle", "listen", "fill", "blend"].includes(ex.type)) {
      let wrongs = 0;
      const fillBlank = () => {
        if (ex.type === "fill") {
          const blank = document.getElementById("blank");
          if (blank) { blank.textContent = ex.choices[ex.answer]; blank.style.color = "var(--good)"; }
        }
      };
      // après 2 essais ratés : on guide vers la bonne réponse (elle s'illumine, l'enfant
      // la touche) pour toujours finir sur une réussite plutôt que sur une énième erreur
      const guideToAnswer = () => {
        $screen.querySelectorAll(".choice").forEach(b => {
          if (+b.dataset.idx === ex.answer) { b.disabled = false; b.classList.add("correct", "reveal"); }
          else b.disabled = true;
        });
      };
      $screen.querySelectorAll(".choice").forEach(btn => {
        btn.addEventListener("click", () => {
          const idx = +btn.dataset.idx;
          if (idx === ex.answer) {
            btn.classList.add("correct");
            fillBlank();
            if (btn.classList.contains("reveal")) {
              // réussite guidée : on félicite doucement et on avance (l'étoile est déjà perdue)
              dingGood(); toast("happy", "Voilà, c'est celle-là ! 👏", "הִנֵּה, זֶה זֶה!");
              lockChoices();
              setTimeout(() => { session.i++; renderExercise(session); }, 900);
            } else {
              onCorrect(session, ex);
            }
          } else {
            btn.classList.add("wrong");
            btn.disabled = true;
            wrongs++;
            onWrong(session, ex, ex.choices[ex.answer], null, wrongs >= 2 ? guideToAnswer : null);
          }
        });
      });
    }

    if (ex.type === "build") {
      const chosen = [];
      const target = document.getElementById("btarget");
      const tilesEl = document.getElementById("btiles");
      renderTarget();
      tilesEl.querySelectorAll(".tile").forEach(t => {
        t.addEventListener("click", () => {
          if (t.classList.contains("used")) return;
          t.classList.add("used");
          chosen.push({ k: +t.dataset.k, el: t });
          renderTarget();
          if (chosen.length === ex.answer.length) check();
        });
      });
      function renderTarget() {
        target.innerHTML = chosen.length
          ? chosen.map((c, i2) => '<button class="build-slot" data-i="' + i2 + '">' + esc(ex.tiles[c.k]) + "</button>").join("")
          : '<span style="color:#B9AF9E">Touche les étiquettes !' + (store.heOn ? " · לָחֲצוּ עַל הַכַּרְטִיסִיּוֹת" : "") + "</span>";
        target.querySelectorAll(".build-slot").forEach(s => {
          s.addEventListener("click", () => {
            const rm = chosen.splice(+s.dataset.i, 1)[0];
            rm.el.classList.remove("used");
            renderTarget();
          });
        });
      }
      function check() {
        const got = chosen.map(c => ex.tiles[c.k]);
        const ok = got.length === ex.answer.length && got.every((v, i2) => v === ex.answer[i2]);
        if (ok) onCorrect(session, ex);
        else {
          onWrong(session, ex, ex.answer.join(" "));
          chosen.forEach(c => c.el.classList.remove("used"));
          chosen.length = 0;
          renderTarget();
        }
      }
    }

    if (ex.type === "type") {
      const input = document.getElementById("tinput");
      const checkBtn = document.getElementById("tcheck");
      const doCheck = () => {
        const val = input.value;
        if (!val.trim()) { input.focus(); return; }
        if (normalize(val, ex.strict) === normalize(ex.answer, ex.strict)) {
          input.style.borderColor = "var(--good)";
          onCorrect(session, ex);
        } else {
          input.style.borderColor = "var(--bad)";
          onWrong(session, ex, ex.answer, function retry() {
            input.value = ""; input.style.borderColor = ""; input.focus();
          });
        }
      };
      checkBtn.addEventListener("click", doCheck);
      input.addEventListener("keydown", e => { if (e.key === "Enter") doCheck(); });
    }

    if (ex.type === "match") {
      let sel = { L: null, R: null };
      let matched = 0;
      $screen.querySelectorAll(".match-item").forEach(item => {
        item.addEventListener("click", () => {
          const side = item.dataset.side;
          if (sel[side]) sel[side].classList.remove("selected");
          sel[side] = item;
          item.classList.add("selected");
          if (sel.L && sel.R) {
            if (sel.L.dataset.k === sel.R.dataset.k) {
              sel.L.classList.remove("selected"); sel.R.classList.remove("selected");
              sel.L.classList.add("matched"); sel.R.classList.add("matched");
              dingGood();
              matched++;
              sel = { L: null, R: null };
              if (matched === ex.pairs.length) onCorrect(session, ex);
            } else {
              const l = sel.L, r = sel.R;
              l.classList.remove("selected"); r.classList.remove("selected");
              l.classList.add("flash"); r.classList.add("flash");
              if (!session.placement) dingBad();
              session.failedThis = true;
              if (!session.placement) {
                session.missedQueue = session.missedQueue || [];
                if (!session.missedQueue.includes(ex)) session.missedQueue.push(ex);
              }
              setTimeout(() => { l.classList.remove("flash"); r.classList.remove("flash"); }, 450);
              sel = { L: null, R: null };
            }
          }
        });
      });
    }

    if (ex.type === "read") {
      document.getElementById("readdone").addEventListener("click", () => onCorrect(session, ex));
    }
    const skipBtn = document.getElementById("skipex");
    if (skipBtn) skipBtn.addEventListener("click", () => { session.i++; renderExercise(session); });
  }

  function choicesHTML(choices, singleCol) {
    const anyLong = choices.some(c => String(c).length > 10);
    const allEmoji = choices.every(isEmoji);
    // affichage mélangé ; data-idx garde l'index d'origine, donc ex.answer et
    // ex.choices[idx] (remplissage du trou des fill) restent valables
    const order = shuffle(choices.map((c, i) => i));
    return '<div class="choices' + (singleCol || anyLong ? " single-col" : "") + '">' +
      order.map(i =>
        '<button class="choice' + (isEmoji(choices[i]) && allEmoji ? " emoji" : "") + '" data-idx="' + i + '">' + esc(choices[i]) + "</button>"
      ).join("") +
      "</div>";
  }

  /* ---------- Réactions ---------- */
  function onCorrect(session, ex) {
    dingGood();
    if (!session.failedThis) session.stars++;
    confetti(14);
    const p = rand(PRAISE);
    // animation adaptée à la phrase : Levy applaudit sur les félicitations (Mazal Tov,
    // Félicitations, champion, bravo...), et saute de joie sur les autres
    const expr = /mazal|félicit|champion|bravo|pro|talent/i.test(p[0]) ? "clap" : rand(["cheer", "happy"]);
    speak(p[0], 1.0);
    lockChoices();
    if (session.placement) {
      // test de placement : enchaînement rapide (pas de bouton)
      toast(expr, p[0], p[1]);
      setTimeout(() => { session.i++; renderExercise(session); }, 1050);
      return;
    }
    // barre de félicitation : Levy reste affiché, l'enfant clique "Suivant" quand il
    // veut (le temps de relire l'exercice et de profiter du petit moment avec Levy)
    const bar = document.createElement("div");
    bar.className = "correct-bar";
    bar.innerHTML =
      '<div class="correct-levy">' + comicBubbleHTML(expr, p[0], p[1]) + "</div>" +
      '<button class="btn btn-good next-btn" id="next-ex">Suivant →' + he("הַבָּא") + "</button>";
    document.body.appendChild(bar);
    const go = () => { bar.remove(); session.i++; renderExercise(session); };
    document.getElementById("next-ex").addEventListener("click", go);
  }

  function onWrong(session, ex, correctAnswer, onClose, onGuide) {
    const first = !session.failedThis;
    // pas de buzzer pendant le placement, NI quand on va guider vers la réponse (2e échec) :
    // on ne veut pas empiler les sons négatifs, l'enfant va finir sur une réussite
    if (!session.placement && !onGuide) dingBad();
    session.failedThis = true;
    if (first && !session.placement) {
      session.missedQueue = session.missedQueue || [];
      session.missedQueue.push(ex);
    }
    const o = rand(OOPS);
    const showAnswer = !onClose; // pour la dictée on laisse réessayer sans donner la réponse au 1er échec
    const answerLine = (showAnswer || !first)
      ? '<div style="margin-top:8px;font-weight:700">La bonne réponse : <span style="color:var(--good)">' + esc(correctAnswer) + "</span></div>"
      : "";
    $overlay.innerHTML =
      '<div class="mascot-panel bad">' +
      '<div class="mascot-wrap">' + mascotSVG(session.placement ? "think" : (first ? "oops" : "teach")) + "</div>" +
      "<h3>" + esc(o[0]) + he(o[1]) + "</h3>" +
      '<div class="explain">' + esc(ex.explain || "") + he(ex.explainHe) + answerLine + "</div>" +
      '<button class="say-btn" id="explain-say">🔊 Réécouter</button>' +
      '<button class="btn btn-accent" id="ok-btn">J\'ai compris !' + he("הֵבַנְתִּי!") + "</button>" +
      "</div>";
    $overlay.classList.remove("hidden");
    var expSay = document.getElementById("explain-say");
    // Levy lit son explication à voix haute
    speak(ex.explain || ex.say || "", null, expSay);
    if (expSay) expSay.addEventListener("click", function () { speak(ex.explain || ex.say || "", null, expSay); });
    document.getElementById("ok-btn").addEventListener("click", () => {
      $overlay.classList.add("hidden");
      if (onGuide) {
        onGuide(); // choix, 2e échec : on illumine la bonne réponse, l'enfant la touche
      } else if (onClose && first) {
        onClose(); // dictée : nouvel essai
      } else if (onClose && !first) {
        session.i++; renderExercise(session);
      } else {
        // choix : on laisse retenter (la mauvaise réponse est désactivée)
      }
    });
  }

  function lockChoices() {
    $screen.querySelectorAll(".choice,.tile,.match-item").forEach(b => (b.disabled = true));
  }

  /* ---------- Bulle de BD mascotte (non bloquant) ---------- */
  // Levy réagit en bulle de bande dessinée + animation selon l'humeur.
  // clap = applaudissements (mains animées via la classe mascot-clap du SVG lui-même).
  function comicBubbleHTML(expr, txt, txtHe) {
    const anim = { cheer: "mascot-jump", happy: "mascot-jump", wave: "mascot-fun",
                   think: "", teach: "mascot-dance", clap: "", oops: "" }[expr] || "mascot-jump";
    return '<div class="comic-mascot ' + anim + '">' + mascotSVG(expr) + "</div>" +
      '<div class="comic-bubble"><span class="comic-txt">' + esc(txt) + "</span>" +
      (store.heOn && txtHe ? '<span class="he" dir="rtl">' + esc(txtHe) + "</span>" : "") + "</div>";
  }
  function toast(expr, txt, txtHe) {
    const d = document.createElement("div");
    d.className = "comic-toast";
    d.innerHTML = comicBubbleHTML(expr, txt, txtHe);
    document.body.appendChild(d);
    setTimeout(() => d.classList.add("out"), 1150);
    setTimeout(() => d.remove(), 1500);
  }

  /* ---------- Résultats ---------- */
  function screenResults(session) {
    const lv = LEVELS[session.lvlIdx];
    const sub = lv.sublevels[session.subIdx];
    const total = session.list.length;
    const stars = session.stars;
    const prev = subStars(sub.id);
    const p = profile();
    p.done = p.done || {};
    if (prev === null || stars > prev) p.done[sub.id] = stars;
    // étape terminée : on quitte la position de reprise, on met à jour la série et les badges
    if (p.lastPos && p.lastPos.lvlIdx === session.lvlIdx && p.lastPos.subIdx === session.subIdx) p.lastPos = null;
    save();
    touchStreak();
    checkNewBadges();
    // 1re fois qu'on termine cette étape : on gagne un autocollant pour l'album
    if (prev === null) {
      const st = STICKERS[stickersUnlocked() - 1];
      if (st) setTimeout(() => { confetti(30); toast("clap", "Nouvel autocollant ! " + st, "מַדְבֵּקָה חֲדָשָׁה!"); }, 500);
    }

    const rating = starRating(stars, sub.exercises.length);
    confetti(rating === 3 ? 110 : 55);
    const isLastOfLevel = session.subIdx === lv.sublevels.length - 1;
    const finished = gameFinished();
    const bigMsg = rating === 3 ? "PARFAIT !" : rating === 2 ? "Bravo !" : "C'est fait !";
    // son ascendant : une note par étoile gagnée (do-mi-sol)
    [523, 659, 784].slice(0, rating).forEach((f, i) => setTimeout(() => beep([f], 0.18), 300 + i * 300));

    $screen.innerHTML =
      '<div class="screen results" style="--lvl:' + lv.color + '">' +
      '<div class="mascot-wrap mascot-dance">' + mascotSVG(rating === 3 ? "clap" : "cheer") + "</div>" +
      "<h2>" + bigMsg + "</h2>" +
      stars3HTML(rating) +
      '<div class="score-line">' + (rating < 3 ? "Rejoue cette étape pour gagner les 3 étoiles ⭐" : "Trois étoiles, incroyable ! 🌟") +
      he(rating < 3 ? "שַׂחֲקוּ שׁוּב כְּדֵי לְקַבֵּל 3 כּוֹכָבִים" : "שְׁלוֹשָׁה כּוֹכָבִים, מַדְהִים!") + "</div>" +
      (isLastOfLevel ? '<div class="score-line" style="font-weight:700;color:' + lv.color + '">🏅 Niveau ' + lv.order + " terminé ! Mazal Tov !</div>" : "") +
      '<div class="joke-card">' +
      '<div class="joke-label">🎁 Ta blague récompense !</div>' +
      '<div class="joke-q">' + esc(sub.joke.q) + he(sub.joke.qHe) + "</div>" +
      '<button class="btn btn-accent" id="joke-btn">La réponse ? 😄' + he("?הַתְּשׁוּבָה") + "</button>" +
      '<div class="joke-a hidden" id="joke-a">' + esc(sub.joke.a) + he(sub.joke.aHe) + "</div>" +
      "</div>" +
      (finished
        ? '<button class="btn btn-accent" id="dip-btn">🎓 Mon diplôme !</button>'
        : '<button class="btn btn-good" id="cont-btn">Continuer →' + he("לְהַמְשִׁיךְ") + "</button>") +
      '<button class="btn btn-ghost" id="redo-btn">Rejouer cette étape 🔄</button>' +
      "</div>";

    document.getElementById("joke-btn").addEventListener("click", function () {
      document.getElementById("joke-a").classList.remove("hidden");
      this.classList.add("hidden");
      speak(sub.joke.q + " ... " + sub.joke.a, 0.95);
    });
    const cont = document.getElementById("cont-btn");
    if (cont) cont.addEventListener("click", () => screenSublevels(session.lvlIdx));
    const dip = document.getElementById("dip-btn");
    if (dip) dip.addEventListener("click", screenDiploma);
    document.getElementById("redo-btn").addEventListener("click", () => startLesson(session.lvlIdx, session.subIdx));
  }

  /* ---------- Diplôme ---------- */
  function screenDiploma() {
    stopAudio();
    confetti(120);
    const date = new Date().toLocaleDateString("fr-FR");
    $screen.innerHTML =
      '<div class="screen results">' +
      '<div class="mascot-wrap mascot-dance">' + mascotSVG("cheer") + "</div>" +
      '<div class="diploma">' +
      '<div class="dip-title">DIPLÔME OFFICIEL</div>' +
      "<h2>🎓 Super-champion du français !</h2>" +
      '<div class="dip-name">' + esc(store.current) + "</div>" +
      '<div class="dip-text">a terminé les 10 niveaux du jeu<br><b>On apprend avec Levy</b><br>avec ' + totalStars() + " ⭐<br><br>Mazal Tov ! 🎉<br>" + date + "</div>" +
      he("סִיֵּם/ה אֶת כָּל 10 הַשְּׁלַבִּים שֶׁל הַמִּשְׂחָק! מַזָּל טוֹב!") +
      "</div>" +
      '<button class="btn" id="backmap">← Retour au jeu</button>' +
      "</div>";
    document.getElementById("backmap").addEventListener("click", screenMap);
    speak("Mazal Tov " + store.current + " ! Tu es un super champion du français !");
  }

  /* ============================================================
     Boîte de dialogue mascotte (remplace les confirm() du navigateur)
     ============================================================ */
  function confirmDialog(opts, onYes) {
    $overlay.innerHTML =
      '<div class="mascot-panel">' +
      '<div class="mascot-wrap">' + mascotSVG(opts.expr || "think") + "</div>" +
      "<h3>" + esc(opts.title) + he(opts.titleHe) + "</h3>" +
      (opts.body ? '<div class="explain">' + esc(opts.body) + he(opts.bodyHe) + "</div>" : "") +
      '<button class="btn btn-good" id="cd-yes">' + esc(opts.yes || "Oui") + he(opts.yesHe) + "</button>" +
      '<button class="btn btn-ghost" id="cd-no">' + esc(opts.no || "Annuler") + he(opts.noHe) + "</button>" +
      "</div>";
    $overlay.classList.remove("hidden");
    document.getElementById("cd-yes").addEventListener("click", () => { $overlay.classList.add("hidden"); onYes(); });
    document.getElementById("cd-no").addEventListener("click", () => $overlay.classList.add("hidden"));
  }

  /* ============================================================
     Séries (jours consécutifs) + badges
     ============================================================ */
  function dayStr(d) { return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate(); }
  function touchStreak() {
    const p = profile(); if (!p) return;
    const today = dayStr(new Date());
    if (p.lastPlayed === today) return;
    const y = new Date(); y.setDate(y.getDate() - 1);
    p.streak = (p.lastPlayed === dayStr(y)) ? (p.streak || 0) + 1 : 1;
    p.lastPlayed = today;
    save();
  }
  function currentStreak() {
    const p = profile(); if (!p || !p.lastPlayed) return 0;
    const today = dayStr(new Date());
    const y = new Date(); y.setDate(y.getDate() - 1);
    // la série n'est "vivante" que si le dernier jeu date d'aujourd'hui ou d'hier
    return (p.lastPlayed === today || p.lastPlayed === dayStr(y)) ? (p.streak || 0) : 0;
  }
  function badgeDefs() {
    const stars = totalStars();
    const lvls = LEVELS.filter(levelDone).length;
    const streak = currentStreak();
    return [
      { id: "first", emoji: "🌱", name: "Premier pas", nameHe: "צַעַד רִאשׁוֹן", got: stars >= 1 },
      { id: "l3", emoji: "🚀", name: "3 niveaux finis", nameHe: "3 שְׁלַבִּים", got: lvls >= 3 },
      { id: "stars25", emoji: "✨", name: "25 étoiles", nameHe: "25 כּוֹכָבִים", got: stars >= 25 },
      { id: "l5", emoji: "🏅", name: "La moitié du jeu", nameHe: "חֲצִי מֵהַמִּשְׂחָק", got: lvls >= 5 },
      { id: "streak3", emoji: "🔥", name: "3 jours de suite", nameHe: "3 יָמִים בָּרֶצֶף", got: streak >= 3 },
      { id: "stars50", emoji: "💎", name: "50 étoiles", nameHe: "50 כּוֹכָבִים", got: stars >= 50 },
      { id: "streak7", emoji: "🌟", name: "7 jours de suite", nameHe: "7 יָמִים בָּרֶצֶף", got: streak >= 7 },
      { id: "l10", emoji: "👑", name: "Tout le jeu !", nameHe: "כָּל הַמִּשְׂחָק!", got: lvls >= 10 }
    ];
  }
  // détecte les badges nouvellement gagnés, les fête et les mémorise
  function checkNewBadges() {
    const p = profile(); if (!p) return;
    p.badgesSeen = p.badgesSeen || [];
    const fresh = badgeDefs().filter(b => b.got && p.badgesSeen.indexOf(b.id) < 0);
    if (!fresh.length) return;
    fresh.forEach(b => p.badgesSeen.push(b.id));
    save();
    let d = 600;
    fresh.forEach(b => {
      setTimeout(() => {
        confetti(50);
        toast("clap", "Nouveau badge ! " + b.emoji + " " + b.name, "תַּג חָדָשׁ! " + b.name);
        speak("Bravo ! Tu as gagné un nouveau badge !", 1.0);
      }, d);
      d += 1700;
    });
  }
  function screenBadges() {
    stopAudio();
    const defs = badgeDefs();
    const got = defs.filter(b => b.got).length;
    const grid = defs.map(b =>
      '<div class="badge-item' + (b.got ? " got" : "") + '">' +
      '<span class="badge-emoji">' + (b.got ? b.emoji : "🔒") + "</span>" +
      '<span class="badge-name">' + esc(b.name) + he(b.nameHe) + "</span>" +
      "</div>").join("");
    $screen.innerHTML =
      '<div class="screen">' +
      '<div class="topbar">' +
      '<button class="back" id="back" aria-label="Retour">←</button>' +
      '<span class="title">🏆 Mes badges' + he("הַתָּגִים שֶׁלִּי") + "</span>" +
      "</div>" +
      '<div class="streak-banner">🔥 ' + currentStreak() + ' jour(s) de suite&nbsp;·&nbsp;⭐ ' + totalStars() +
      he("יָמִים בָּרֶצֶף") + "</div>" +
      '<div class="subtitle" style="margin:2px 0 10px">' + got + " / " + defs.length + " badges gagnés" +
      he(got + " מִתּוֹךְ " + defs.length + " תָּגִים") + "</div>" +
      '<div class="badges-grid">' + grid + "</div>" +
      "</div>";
    document.getElementById("back").addEventListener("click", screenMap);
  }

  /* ============================================================
     Album d'autocollants : chaque étape terminée en débloque un (collection)
     ============================================================ */
  // autocollants : animaux cachère + éléments neutres (nature, objets, fêtes)
  const STICKERS = ("🌟 🐑 🐐 🐄 🦌 🦒 🐔 🦆 🕊️ 🐣 🐟 🐠 🦃 🌺 🌸 🌻 🌈 🌳 ☀️ 🌙 🎈 🎨 🚀 🚗 🚲 🏰 🍎 🍕 🍦 🎁 🏆 👑 🎂 🪁 ⚽ 🎪 🌍 🍀 🎵 ⭐").split(" ");
  function stickersUnlocked() {
    const p = profile();
    const n = p && p.done ? Object.keys(p.done).length : 0;
    return Math.min(STICKERS.length, n);
  }
  function screenStickers() {
    stopAudio();
    const n = stickersUnlocked();
    const grid = STICKERS.map((s, i) =>
      '<div class="sticker' + (i < n ? " got" : "") + '">' + (i < n ? s : "❔") + "</div>"
    ).join("");
    $screen.innerHTML =
      '<div class="screen">' +
      '<div class="topbar">' +
      '<button class="back" id="back" aria-label="Retour">←</button>' +
      '<span class="title">🗂️ Mon album' + he("הָאַלְבּוֹם שֶׁלִּי") + "</span>" +
      "</div>" +
      '<div class="streak-banner">' + n + " / " + STICKERS.length + " autocollants" +
      he("מַדְבֵּקוֹת") + "</div>" +
      '<p class="subtitle" style="margin:2px 0 10px">Finis une étape pour gagner un autocollant !' +
      he("סַיְּמוּ שָׁלָב כְּדֵי לְקַבֵּל מַדְבֵּקָה!") + "</p>" +
      '<div class="stickers-grid">' + grid + "</div>" +
      "</div>";
    document.getElementById("back").addEventListener("click", screenMap);
  }

  /* ============================================================
     Sauvegarde / restauration de la progression (anti-perte localStorage)
     ============================================================ */
  function encodeBackup() {
    const data = JSON.stringify({ v: 1, profiles: store.profiles });
    try { return btoa(unescape(encodeURIComponent(data))); } catch (e) { return ""; }
  }
  function applyBackup(text, done) {
    let obj = null;
    text = String(text || "").trim();
    try {
      // accepte soit le code (base64), soit le JSON brut d'un fichier
      obj = JSON.parse(text[0] === "{" ? text : decodeURIComponent(escape(atob(text))));
    } catch (e) { done(false, "Code illisible"); return; }
    if (!obj || typeof obj.profiles !== "object") { done(false, "Sauvegarde invalide"); return; }
    let n = 0;
    Object.keys(obj.profiles).forEach(name => { store.profiles[name] = obj.profiles[name]; n++; });
    save();
    done(true, n + " profil(s) restauré(s)");
  }
  function screenBackup() {
    stopAudio();
    const nProfiles = Object.keys(store.profiles).length;
    $screen.innerHTML =
      '<div class="screen">' +
      '<div class="topbar">' +
      '<button class="back" id="back" aria-label="Retour">←</button>' +
      '<span class="title">💾 Sauvegarde' + he("גִּבּוּי") + "</span>" +
      "</div>" +
      '<div class="backup-box" style="text-align:center">' +
      '<div class="mascot-wrap" style="width:96px;margin:0 auto 8px">' + mascotSVG("teach") + "</div>" +
      '<p class="backup-p">Enregistre la progression dans un petit fichier. Si le téléphone efface les données, tu la retrouves en un clic.' +
      he("שְׁמֹר אֶת הַהִתְקַדְּמוּת בְּקֹבֶץ קָטָן. אִם הַטֵּלֵפוֹן מוֹחֵק, מְשַׁחְזְרִים בִּלְחִיצָה אַחַת.") + "</p>" +
      '<button class="btn btn-good" id="bk-download" ' + (nProfiles ? "" : "disabled") + '>📥 Enregistrer ma progression' + he("לִשְׁמֹר") + "</button>" +
      '<label class="btn btn-ghost" for="bk-file" style="display:block;margin-top:10px">📂 Restaurer une sauvegarde' + he("לְשַׁחְזֵר") + "</label>" +
      '<input type="file" id="bk-file" accept=".json,application/json" style="display:none">' +
      "</div>" +
      '<div class="backup-tip">💡 Astuce : ajoute le jeu à ton écran d\'accueil (menu Partager du téléphone). Comme ça la progression ne s\'efface jamais toute seule !' +
      he("טִיפּ: הוֹסֵף אֶת הַמִּשְׂחָק לְמָסַךְ הַבַּיִת — כָּךְ הַהִתְקַדְּמוּת לֹא נִמְחֶקֶת לְבַד.") + "</div>" +
      "</div>";
    document.getElementById("back").addEventListener("click", screenSplash);

    const dl = document.getElementById("bk-download");
    if (dl) dl.addEventListener("click", () => {
      try {
        const name = (store.current || "levy").replace(/[^a-z0-9]/gi, "-");
        const blob = new Blob([JSON.stringify({ v: 1, profiles: store.profiles })], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url; a.download = "sauvegarde-levy-" + name + ".json";
        document.body.appendChild(a); a.click(); a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 2000);
        toast("happy", "C'est enregistré ! 💾", "נִשְׁמַר!");
      } catch (e) { toast("oops", "Impossible d'enregistrer ici", "לֹא הִצְלַחְנוּ"); }
    });
    document.getElementById("bk-file").addEventListener("change", e => {
      const f = e.target.files && e.target.files[0];
      if (!f) return;
      const r = new FileReader();
      r.onload = () => applyBackup(r.result, (ok, msg) => {
        toast(ok ? "cheer" : "oops", ok ? "Progression restaurée ! 🎉" : msg, "");
        if (ok) { confetti(40); setTimeout(screenSplash, 900); }
      });
      r.readAsText(f);
    });
  }

  /* ============================================================
     Coin des parents : fiches à imprimer, règles & astuces, coloriages
     ============================================================ */
  const RES_WORDS = [
    ["moto", "🏍️", "M"], ["pizza", "🍕", "P"], ["tortue", "🐢", "T"], ["vélo", "🚲", "V"],
    ["chat", "🐱", "C"], ["soleil", "☀️", "S"], ["lune", "🌙", "L"], ["banane", "🍌", "B"],
    ["fleur", "🌸", "F"], ["poisson", "🐟", "P"], ["maison", "🏠", "M"], ["ballon", "🎈", "B"]
  ];
  const RES_COPY = ["papa", "maman", "moto", "chat", "vélo", "lune", "école", "ami", "bravo", "merci"];

  const RES_RULES = [
    {
      t: "Les voyelles et les consonnes", e: "🔤",
      html:
        "<p>En français, il y a <b>6 voyelles</b> : <b>a, e, i, o, u, y</b>. Toutes les autres lettres sont des <b>consonnes</b>.</p>" +
        "<p><b>L'astuce :</b> une syllabe a presque toujours une voyelle. Pour lire, on accroche une consonne à une voyelle : <b>m + a = ma</b>, <b>p + i = pi</b>.</p>" +
        "<p>Entraînez votre enfant à « chanter » la syllabe : <i>mmmm-a &#8594; ma</i>.</p>"
    },
    {
      t: "Les sons à deux lettres", e: "✨",
      html:
        "<p>Certaines lettres se mettent ensemble pour faire <b>un seul son</b> :</p>" +
        "<ul><li><b>ch</b> comme dans <i>chat</i></li><li><b>ou</b> comme dans <i>poule</i></li>" +
        "<li><b>on</b> comme dans <i>bonbon</i></li><li><b>an</b> comme dans <i>grand</i></li>" +
        "<li><b>au / eau</b> comme dans <i>bateau</i></li><li><b>oi</b> comme dans <i>roi</i></li></ul>" +
        "<p><b>L'astuce :</b> quand on voit deux lettres qui font un son, on ne les lit pas séparément. On montre le groupe avec le doigt et on dit le son en entier.</p>"
    },
    {
      t: "Aider mon enfant à lire à la maison", e: "🏠",
      html:
        "<p>Quelques idées simples, 10 minutes par jour suffisent :</p>" +
        "<ul><li>Lire à voix haute <b>avec</b> lui, en suivant les mots du doigt.</li>" +
        "<li>Chercher des lettres ou des sons <b>autour de vous</b> (panneaux, boîtes, livres).</li>" +
        "<li>Féliciter chaque effort, même petit. On apprend mieux en confiance.</li>" +
        "<li>Faire de courtes séances régulières plutôt qu'une longue.</li>" +
        "<li>Relire plusieurs fois le même mot : la répétition, c'est la clé.</li></ul>"
    },
    {
      t: "Le présent des verbes (CE1)", e: "📝",
      html:
        "<p>Au <b>présent</b>, on parle de <b>maintenant</b>. Exemple avec <b>jouer</b> :</p>" +
        "<ul><li>je jou<b>e</b></li><li>tu jou<b>es</b></li><li>il/elle jou<b>e</b></li>" +
        "<li>nous jou<b>ons</b></li><li>vous jou<b>ez</b></li><li>ils/elles jou<b>ent</b></li></ul>" +
        "<p><b>L'astuce :</b> pour les verbes en -er, les terminaisons sont presque toujours <b>-e, -es, -e, -ons, -ez, -ent</b>.</p>"
    }
  ];

  // coloriages : dessins au trait (contour noir, à remplir), libres de droit (créés ici)
  function colorSun() {
    let rays = "";
    for (let i = 0; i < 12; i++) {
      const a = (i * Math.PI) / 6;
      const x1 = 100 + 55 * Math.cos(a), y1 = 100 + 55 * Math.sin(a);
      const x2 = 100 + 80 * Math.cos(a), y2 = 100 + 80 * Math.sin(a);
      rays += '<line x1="' + x1.toFixed(0) + '" y1="' + y1.toFixed(0) + '" x2="' + x2.toFixed(0) + '" y2="' + y2.toFixed(0) + '"/>';
    }
    return '<svg viewBox="0 0 200 200">' + rays +
      '<circle cx="100" cy="100" r="45"/>' +
      '<circle cx="85" cy="92" r="4"/><circle cx="115" cy="92" r="4"/>' +
      '<path d="M82 112 Q100 128 118 112"/></svg>';
  }
  function colorHouse() {
    return '<svg viewBox="0 0 200 200">' +
      '<rect x="55" y="95" width="90" height="80"/>' +
      '<path d="M45 95 L100 45 L155 95 Z"/>' +
      '<rect x="88" y="130" width="24" height="45"/>' +
      '<rect x="66" y="110" width="22" height="22"/><rect x="112" y="110" width="22" height="22"/>' +
      '<line x1="77" y1="110" x2="77" y2="132"/><line x1="66" y1="121" x2="88" y2="121"/></svg>';
  }
  function colorFish() {
    return '<svg viewBox="0 0 200 200">' +
      '<path d="M40 100 Q90 55 140 100 Q90 145 40 100 Z"/>' +
      '<path d="M140 100 L175 75 L175 125 Z"/>' +
      '<circle cx="70" cy="92" r="5"/>' +
      '<path d="M95 80 Q105 100 95 120"/><path d="M112 82 Q122 100 112 118"/></svg>';
  }
  function colorFlower() {
    let pet = "";
    for (let i = 0; i < 6; i++) {
      const a = (i * Math.PI) / 3;
      const cx = 100 + 34 * Math.cos(a), cy = 80 + 34 * Math.sin(a);
      pet += '<ellipse cx="' + cx.toFixed(0) + '" cy="' + cy.toFixed(0) + '" rx="16" ry="24" transform="rotate(' + ((i * 60)) + ' ' + cx.toFixed(0) + ' ' + cy.toFixed(0) + ')"/>';
    }
    return '<svg viewBox="0 0 200 200">' + pet +
      '<circle cx="100" cy="80" r="18"/>' +
      '<path d="M100 98 L100 175"/><path d="M100 140 Q75 125 70 150"/><path d="M100 155 Q128 140 132 165"/></svg>';
  }
  function colorLevy() {
    return '<svg viewBox="0 0 200 245">' +
      '<path d="M60 240 L60 150 Q60 120 100 120 Q140 120 140 150 L140 240"/>' +
      '<path d="M62 155 Q38 166 30 192"/><path d="M138 155 Q162 166 170 192"/>' +
      '<rect x="88" y="107" width="24" height="20" rx="9"/>' +
      '<circle cx="100" cy="72" r="46"/>' +
      '<circle cx="52" cy="72" r="7"/><circle cx="148" cy="72" r="7"/>' +
      '<path d="M56 66 Q58 38 100 36 Q142 38 144 66"/>' +
      '<path d="M74 40 Q100 25 126 40"/>' +
      '<circle cx="82" cy="70" r="15"/><circle cx="118" cy="70" r="15"/><line x1="97" y1="70" x2="103" y2="70"/>' +
      '<path d="M84 93 Q100 108 116 93"/></svg>';
  }
  function colorStar() {
    const pts = [];
    for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + (i * Math.PI) / 5; const r = i % 2 === 0 ? 75 : 32; pts.push((100 + r * Math.cos(a)).toFixed(0) + "," + (100 + r * Math.sin(a)).toFixed(0)); }
    return '<svg viewBox="0 0 200 200"><polygon points="' + pts.join(" ") + '"/></svg>';
  }
  function colorTree() {
    return '<svg viewBox="0 0 200 200"><rect x="88" y="130" width="24" height="45"/>' +
      '<circle cx="100" cy="80" r="42"/><circle cx="66" cy="105" r="30"/><circle cx="134" cy="105" r="30"/>' +
      '<circle cx="90" cy="70" r="4"/><circle cx="115" cy="90" r="4"/><circle cx="80" cy="100" r="4"/></svg>';
  }
  function colorBalloon() {
    return '<svg viewBox="0 0 200 200"><ellipse cx="100" cy="80" rx="46" ry="54"/>' +
      '<path d="M94 133 L106 133 L100 145 Z"/><path d="M100 145 Q112 165 96 190"/></svg>';
  }
  function colorBird() {
    return '<svg viewBox="0 0 200 200">' +
      '<ellipse cx="96" cy="118" rx="50" ry="40"/>' +
      '<circle cx="140" cy="80" r="27"/>' +
      '<path d="M165 76 L188 83 L165 92 Z"/>' +
      '<circle cx="149" cy="75" r="4"/>' +
      '<path d="M66 104 Q94 138 122 108"/>' +
      '<path d="M48 122 Q22 112 24 140"/>' +
      '<line x1="88" y1="155" x2="88" y2="176"/><line x1="108" y1="155" x2="108" y2="176"/>' +
      '<path d="M80 176 L96 176"/><path d="M100 176 L116 176"/></svg>';
  }
  const RES_COLOR = [
    { t: "Levy", sub: "Colorie la mascotte !", svg: colorLevy },
    { t: "Le soleil", sub: "S comme soleil", svg: colorSun },
    { t: "La maison", sub: "M comme maison", svg: colorHouse },
    { t: "Le poisson", sub: "P comme poisson", svg: colorFish },
    { t: "La fleur", sub: "F comme fleur", svg: colorFlower },
    { t: "L'étoile", sub: "É comme étoile", svg: colorStar },
    { t: "L'arbre", sub: "A comme arbre", svg: colorTree },
    { t: "Le ballon", sub: "B comme ballon", svg: colorBalloon },
    { t: "L'oiseau", sub: "O comme oiseau", svg: colorBird }
  ];
  // coloriages-jeux : on ne colorie QUE ce qui est demandé (lettres ou images)
  const COLOR_EX = [
    { t: "Colorie les M", instr: "Colorie seulement les lettres M.", type: "let", pool: "MPMTVMLSMPMVMTMPMNMRMFM".split("") },
    { t: "Colorie les voyelles", instr: "Colorie les voyelles : a e i o u y.", type: "let", pool: "AEBIMOUPYELIROATUSY".split("") },
    { t: "Le son [p]", instr: "Colorie ce qui commence par le son « p ».", type: "img", pool: ["🍕", "🐱", "🐟", "🍎", "🌙", "🎈", "🦋", "🚲"] }
  ];

  function resHeader(title, backFn) {
    return '<div class="topbar noprint">' +
      '<button class="back" id="res-back" aria-label="Retour">←</button>' +
      '<span class="title">' + esc(title) + "</span></div>";
  }

  function screenResources() {
    stopAudio();
    $screen.innerHTML =
      '<div class="screen">' +
      resHeader("👨‍👩‍👧 Coin des parents", screenMap) +
      '<p class="res-intro">Des ressources pour accompagner votre enfant à la maison.</p>' +
      '<div class="res-cards">' +
      '<button class="res-card" id="rc-sheets"><span class="rc-emoji">📝</span><span class="rc-t">Fiches à imprimer</span><span class="rc-d">Tracer, relier, recopier</span></button>' +
      '<button class="res-card" id="rc-rules"><span class="rc-emoji">📖</span><span class="rc-t">Règles &amp; astuces</span><span class="rc-d">Pour aider à apprendre</span></button>' +
      '<button class="res-card" id="rc-color"><span class="rc-emoji">🎨</span><span class="rc-t">Coloriages</span><span class="rc-d">À imprimer et colorier</span></button>' +
      "</div></div>";
    document.getElementById("res-back").addEventListener("click", screenMap);
    document.getElementById("rc-sheets").addEventListener("click", screenSheets);
    document.getElementById("rc-rules").addEventListener("click", screenRules);
    document.getElementById("rc-color").addEventListener("click", screenColoring);
  }

  const RES_SYLL = ["ma", "me", "mi", "mo", "mu", "la", "le", "li", "lo", "lu", "pa", "pe", "pi", "po", "pu", "ra", "re", "ri", "ro", "ru", "ta", "te", "ti", "to", "tu"];
  const RES_COMPLETE = [["🏍️", "m_t_", "moto"], ["🐱", "ch_t", "chat"], ["🚲", "v_lo", "vélo"], ["🌸", "fl__r", "fleur"], ["🌙", "l_ne", "lune"], ["🎈", "ba__on", "ballon"], ["🍕", "p_zza", "pizza"], ["🏠", "ma_s_n", "maison"]];
  const RES_SON = { son: "ch", mots: [["chat", 1], ["chien", 1], ["moto", 0], ["chapeau", 1], ["papa", 0], ["bouche", 1], ["vélo", 0], ["niche", 1], ["lune", 0]] };
  const RES_ORDRE = [["Le", "chat", "dort"], ["Papa", "lit", "un", "livre"], ["La", "lune", "brille"], ["Je", "vais", "à", "l'école"]];
  const RES_PLURIEL = [["un chat", "des chats"], ["une fleur", "des fleurs"], ["un ami", "des amis"], ["une école", "des écoles"], ["un ballon", "des ballons"]];
  const RES_CONJUG = { verbe: "jouer", pronoms: ["je", "tu", "il / elle", "nous", "vous", "ils / elles"] };

  const SHEETS = [
    { id: "trace", t: "Je trace les lettres", e: "✏️", g: "Débuter : lettres & syllabes" },
    { id: "relie", t: "Je relie la lettre à l'image", e: "🔗", g: "Débuter : lettres & syllabes" },
    { id: "syll", t: "J'écris les syllabes", e: "🔡", g: "Débuter : lettres & syllabes" },
    { id: "copie", t: "Je recopie les mots", e: "📖", g: "Lire les mots" },
    { id: "complete", t: "Je complète le mot", e: "🧩", g: "Lire les mots" },
    { id: "son", t: "J'entoure le bon son", e: "👂", g: "Lire les mots" },
    { id: "ordre", t: "Je remets la phrase en ordre", e: "🔀", g: "Lire les phrases" },
    { id: "pluriel", t: "Un ou plusieurs ? (le pluriel)", e: "➕", g: "Grammaire (CE1-CE2)" },
    { id: "conjug", t: "Je conjugue au présent", e: "📝", g: "Grammaire (CE1-CE2)" }
  ];
  function screenSheets() {
    stopAudio();
    const groups = [];
    SHEETS.forEach(s => { const g = groups.find(x => x.g === s.g); if (g) g.items.push(s); else groups.push({ g: s.g, items: [s] }); });
    $screen.innerHTML =
      '<div class="screen">' + resHeader("📝 Fiches à imprimer", screenResources) +
      '<p class="res-intro">Des fiches pour tous les niveaux, du tout début au CE2.</p>' +
      groups.map(gr =>
        '<div class="res-group">' + esc(gr.g) + "</div>" +
        '<div class="res-list">' +
        gr.items.map(s => '<button class="res-item" data-s="' + s.id + '"><span class="ri-emoji">' + s.e + "</span><span>" + esc(s.t) + "</span><span class=\"ri-go\">🖨️</span></button>").join("") +
        "</div>"
      ).join("") +
      "</div>";
    document.getElementById("res-back").addEventListener("click", screenResources);
    $screen.querySelectorAll(".res-item").forEach(b => b.addEventListener("click", () => buildSheet(b.dataset.s)));
  }

  function buildSheet(id) {
    let title, sub, body;
    if (id === "trace") {
      title = "Je trace les lettres"; sub = "Repasse sur la lettre, puis écris-la toi-même.";
      body = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(L => '<div class="trace-row"><span class="trace-big">' + L + '</span><span class="trace-line"></span></div>').join("");
    } else if (id === "relie") {
      title = "Je relie la lettre à l'image"; sub = "Trace un trait entre chaque lettre et l'image qui commence par cette lettre.";
      const set = shuffle(RES_WORDS).slice(0, 6);
      const left = set.map(w => '<div class="relie-cell"><span class="relie-letter">' + w[2] + '</span><span class="relie-dot"></span></div>').join("");
      const right = shuffle(set).map(w => '<div class="relie-cell"><span class="relie-dot"></span><span class="relie-img">' + w[1] + '</span></div>').join("");
      body = '<div class="relie-grid"><div class="relie-col">' + left + '</div><div class="relie-col">' + right + "</div></div>";
    } else if (id === "syll") {
      title = "J'écris les syllabes"; sub = "Lis la syllabe à voix haute, puis recopie-la.";
      body = '<div class="syll-grid">' + shuffle(RES_SYLL).slice(0, 16).map(s => '<div class="syll-cell"><span class="syll-w">' + s + '</span><span class="syll-line"></span></div>').join("") + "</div>";
    } else if (id === "copie") {
      title = "Je recopie les mots"; sub = "Lis le mot, puis recopie-le sur la ligne.";
      body = RES_COPY.map(w => '<div class="copie-row"><span class="copie-word">' + esc(w) + '</span><span class="copie-line"></span></div>').join("");
    } else if (id === "complete") {
      title = "Je complète le mot"; sub = "Regarde l'image et écris les lettres qui manquent.";
      body = RES_COMPLETE.map(w => '<div class="complete-row"><span class="complete-img">' + w[0] + '</span><span class="complete-word">' + esc(w[1]) + "</span></div>").join("");
    } else if (id === "son") {
      title = "J'entoure le bon son"; sub = "Entoure tous les mots où tu entends le son « " + RES_SON.son + " ».";
      body = '<div class="son-grid">' + shuffle(RES_SON.mots).map(m => '<span class="son-word">' + esc(m[0]) + "</span>").join("") + "</div>";
    } else if (id === "ordre") {
      title = "Je remets la phrase en ordre"; sub = "Les mots sont mélangés. Écris la phrase dans le bon ordre sur la ligne.";
      body = RES_ORDRE.map(ph => '<div class="ordre-block"><div class="ordre-words">' + shuffle(ph).map(w => '<span class="ordre-word">' + esc(w) + "</span>").join("") + '</div><span class="copie-line"></span></div>').join("");
    } else if (id === "pluriel") {
      title = "Un ou plusieurs ? (le pluriel)"; sub = "Écris le pluriel. Astuce : au pluriel, on ajoute souvent un -s.";
      body = RES_PLURIEL.map(p => '<div class="pluriel-row"><span class="pluriel-sing">' + esc(p[0]) + '</span><span class="pluriel-arrow">→</span><span class="copie-line"></span></div>').join("");
    } else {
      title = "Je conjugue au présent"; sub = "Conjugue le verbe « " + RES_CONJUG.verbe + " ». Écris la bonne terminaison : -e, -es, -e, -ons, -ez, -ent.";
      body = '<div class="conjug-grid">' + RES_CONJUG.pronoms.map(p => '<div class="conjug-row"><span class="conjug-pro">' + esc(p) + '</span><span class="conjug-stem">jou</span><span class="conjug-blank"></span></div>').join("") + "</div>";
    }
    showPrintable(title, '<div class="sheet"><h1 class="sheet-title">' + esc(title) + '</h1>' +
      '<div class="sheet-sub">' + esc(sub) + "</div>" + body +
      '<div class="sheet-foot">On apprend avec Levy 🇫🇷</div></div>', screenSheets);
  }

  function screenRules() {
    stopAudio();
    $screen.innerHTML =
      '<div class="screen">' + resHeader("📖 Règles & astuces", screenResources) +
      '<div class="res-list">' +
      RES_RULES.map((r, i) => '<button class="res-item" data-r="' + i + '"><span class="ri-emoji">' + r.e + "</span><span>" + esc(r.t) + "</span><span class=\"ri-go\">›</span></button>").join("") +
      "</div></div>";
    document.getElementById("res-back").addEventListener("click", screenResources);
    $screen.querySelectorAll(".res-item").forEach(b => b.addEventListener("click", () => {
      const r = RES_RULES[+b.dataset.r];
      showPrintable(r.t, '<div class="sheet rule-sheet"><h1 class="sheet-title">' + r.e + " " + esc(r.t) + "</h1>" + r.html +
        '<div class="sheet-foot">On apprend avec Levy 🇫🇷</div></div>', screenRules);
    }));
  }

  function screenColoring() {
    stopAudio();
    $screen.innerHTML =
      '<div class="screen">' + resHeader("🎨 Coloriages", screenResources) +
      '<div class="res-group">🖍️ Dessins à colorier</div>' +
      '<div class="color-grid">' +
      RES_COLOR.map((c, i) => '<button class="color-thumb" data-c="' + i + '"><div class="color-svg">' + c.svg() + "</div><span>" + esc(c.t) + "</span></button>").join("") +
      "</div>" +
      '<div class="res-group">🎯 Coloriages-jeux</div>' +
      '<p class="res-intro" style="margin:0 0 10px">On ne colorie que ce qui est demandé !</p>' +
      '<div class="res-list">' +
      COLOR_EX.map((c, i) => '<button class="res-item" data-x="' + i + '"><span class="ri-emoji">🖍️</span><span>' + esc(c.t) + "</span><span class=\"ri-go\">🖨️</span></button>").join("") +
      "</div></div>";
    document.getElementById("res-back").addEventListener("click", screenResources);
    $screen.querySelectorAll(".color-thumb").forEach(b => b.addEventListener("click", () => {
      const c = RES_COLOR[+b.dataset.c];
      showPrintable(c.t, '<div class="sheet color-sheet"><h1 class="sheet-title">' + esc(c.t) + '</h1>' +
        '<div class="color-sub">' + esc(c.sub) + '</div><div class="color-big">' + c.svg() + "</div>" +
        '<div class="sheet-foot">On apprend avec Levy 🇫🇷</div></div>', screenColoring);
    }));
    $screen.querySelectorAll(".res-item[data-x]").forEach(b => b.addEventListener("click", () => {
      const c = COLOR_EX[+b.dataset.x];
      const cells = shuffle(c.pool).map(v =>
        c.type === "let" ? '<span class="cx-cell cx-let">' + esc(v) + "</span>" : '<span class="cx-cell cx-img">' + v + "</span>"
      ).join("");
      showPrintable(c.t, '<div class="sheet"><h1 class="sheet-title">' + esc(c.t) + '</h1>' +
        '<div class="sheet-sub">' + esc(c.instr) + '</div><div class="cx-grid">' + cells + "</div>" +
        '<div class="sheet-foot">On apprend avec Levy 🇫🇷</div></div>', screenColoring);
    }));
  }

  // vue imprimable : bouton Imprimer + zone .print-area (seule visible à l'impression)
  function showPrintable(title, bodyHTML, backFn) {
    stopAudio();
    $screen.innerHTML =
      '<div class="screen print-screen">' +
      '<div class="topbar noprint">' +
      '<button class="back" id="p-back" aria-label="Retour">←</button>' +
      '<span class="title">' + esc(title) + "</span>" +
      '<button class="chip print-chip" id="p-print">🖨️ Imprimer</button>' +
      "</div>" +
      '<div class="print-hint noprint">Touche 🖨️ Imprimer (ou enregistre en PDF) pour l\'avoir sur papier.</div>' +
      '<div class="print-area">' + bodyHTML + "</div></div>";
    document.getElementById("p-back").addEventListener("click", backFn);
    document.getElementById("p-print").addEventListener("click", () => { try { window.print(); } catch (e) {} });
  }

  /* ---------- Démarrage ---------- */
  // Service Worker : cache hors-ligne (2e visite instantanée, jeu jouable sans réseau)
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js").catch(() => {});
    });
  }
  if (store.current && store.profiles[store.current]) screenMap();
  else screenSplash();
})();
