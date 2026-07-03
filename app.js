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
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) {}
  }
  function profile() { return store.current ? store.profiles[store.current] : null; }

  /* ---------- Utilitaires ---------- */
  const $screen = document.getElementById("screen");
  const $overlay = document.getElementById("mascot-overlay");
  const $confetti = document.getElementById("confetti-layer");

  function esc(s) {
    return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
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

  /* ---------- Audio : voix française ---------- */
  let frVoice = null;
  function pickVoice() {
    const vs = window.speechSynthesis ? speechSynthesis.getVoices() : [];
    frVoice = vs.find(v => /^fr[-_]FR/i.test(v.lang)) || vs.find(v => /^fr/i.test(v.lang)) || null;
  }
  if (window.speechSynthesis) {
    pickVoice();
    speechSynthesis.onvoiceschanged = pickVoice;
  }
  function speak(text, rate) {
    if (!store.soundOn || !window.speechSynthesis || !text) return;
    try {
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "fr-FR";
      if (frVoice) u.voice = frVoice;
      u.rate = rate || 0.85;
      speechSynthesis.speak(u);
    } catch (e) {}
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
    ["Bravo !", "כל הכבוד!"], ["Super !", "מעולה!"], ["Mazal Tov !", "מזל טוב!"],
    ["Génial !", "גאוני!"], ["Champion !", "אלוף!"], ["Parfait !", "מושלם!"],
    ["Incroyable !", "מדהים!"], ["Quel talent !", "איזה כישרון!"]
  ];
  const OOPS = [
    ["Presque !", "כמעט!"], ["Pas grave, on apprend !", "לא נורא, ככה לומדים!"],
    ["Hop, je t'explique !", "בוא נבין יחד!"], ["Courage, tu y es presque !", "עוד קצת, אתה כמעט שם!"]
  ];
  function rand(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

  /* ---------- Progression ---------- */
  function subStars(subId) {
    const p = profile();
    return p && p.done && typeof p.done[subId] === "number" ? p.done[subId] : null;
  }
  function isSubDone(subId) { return subStars(subId) !== null; }
  function levelDone(level) { return isSubDone(level.sublevels[level.sublevels.length - 1].id); }
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

  /* ============================================================
     ÉCRANS
     ============================================================ */

  /* ---------- Écran profils ---------- */
  function screenSplash() {
    const names = Object.keys(store.profiles);
    let rows = names.map(n => {
      const p = store.profiles[n];
      const st = Object.values(p.done || {}).reduce((s, v) => s + (v || 0), 0);
      return '<div class="profile-row" data-name="' + esc(n) + '">' +
        '<span class="avatar">🧒</span><span class="pname">' + esc(n) + "</span>" +
        '<span class="stars">⭐ ' + st + "</span>" +
        '<button class="del" data-del="' + esc(n) + '" aria-label="supprimer">✕</button>' +
        "</div>";
    }).join("");

    $screen.innerHTML =
      '<div class="screen splash" style="padding:24px 20px">' +
      '<div class="mascot-wrap">' + mascotSVG("wave") + "</div>" +
      "<h1>On apprend avec <span class=\"fr\">Levy</span> !</h1>" +
      '<div class="subtitle">Le français, c\'est facile et rigolo 🇫🇷' + he("לומדים צרפתית עם לוי! קל וכיף") + "</div>" +
      '<div class="profiles-list">' + rows + "</div>" +
      '<div class="newplayer-form">' +
      '<input id="newname" maxlength="14" placeholder="Ton prénom..." autocomplete="off">' +
      '<button class="btn btn-accent" id="addplayer">Jouer !</button>' +
      "</div>" +
      (names.length === 0 ? '<div class="subtitle" style="margin-top:6px">Écris ton prénom pour commencer' + he("כתבו את השם שלכם כדי להתחיל") + "</div>" : "") +
      '<button class="chip" id="he-toggle" style="margin:14px auto 0;border:none;box-shadow:var(--shadow);padding:9px 16px;border-radius:14px;background:' + (store.heOn ? "var(--primary);color:#fff" : "#fff") + '">עברית ' + (store.heOn ? "✓" : "") + "</button>" +
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
        if (confirm("Supprimer le joueur " + b.dataset.del + " et toute sa progression ?")) {
          delete store.profiles[b.dataset.del];
          if (store.current === b.dataset.del) store.current = null;
          save(); screenSplash();
        }
      });
    });
    document.getElementById("addplayer").addEventListener("click", addPlayer);
    document.getElementById("newname").addEventListener("keydown", e => { if (e.key === "Enter") addPlayer(); });
    document.getElementById("he-toggle").addEventListener("click", () => {
      store.heOn = !store.heOn; save(); screenSplash();
    });

    function addPlayer() {
      const name = document.getElementById("newname").value.trim();
      if (!name) return;
      if (!store.profiles[name]) store.profiles[name] = { done: {}, created: new Date().toISOString() };
      store.current = name; save();
      screenMap();
    }
  }

  /* ---------- Carte des niveaux ---------- */
  function screenMap() {
    if (!profile()) return screenSplash();
    const cards = LEVELS.map((lv, i) => {
      const unlocked = isLevelUnlocked(i);
      const doneCount = lv.sublevels.filter(s => isSubDone(s.id)).length;
      const starSum = lv.sublevels.reduce((s, sub) => s + (subStars(sub.id) || 0), 0);
      return '<button class="level-card' + (unlocked ? "" : " locked") + '" data-lvl="' + i + '" style="--lvl:' + lv.color + '">' +
        '<span class="lvl-emoji">' + lv.emoji + "</span>" +
        '<span class="lvl-info">' +
        '<span class="lvl-num">Niveau ' + lv.order + "</span>" +
        '<span class="lvl-name">' + esc(lv.name) + (store.heOn ? ' <span class="he-inline" dir="rtl">' + esc(lv.nameHe || "") + "</span>" : "") + "</span>" +
        '<span class="lvl-tag">' + esc(lv.tagline || "") + "</span>" +
        "</span>" +
        (unlocked
          ? '<span class="lvl-progress">' + doneCount + "/4<br>⭐" + starSum + "</span>"
          : '<span class="lvl-lock">🔒</span>') +
        "</button>";
    }).join("");

    $screen.innerHTML =
      '<div class="screen">' +
      '<div class="topbar">' +
      '<button class="chip" id="switch">🧒 ' + esc(store.current) + "</button>" +
      '<span class="chip">⭐ ' + totalStars() + "</span>" +
      '<span style="flex:1"></span>' +
      '<button class="chip' + (store.soundOn ? " active" : "") + '" id="snd">' + (store.soundOn ? "🔊" : "🔇") + "</button>" +
      '<button class="chip' + (store.heOn ? " active" : "") + '" id="hebtn">ע</button>' +
      "</div>" +
      (gameFinished() ? '<button class="btn btn-accent" id="dipbtn" style="margin-bottom:12px">🎓 Mon diplôme !</button>' : "") +
      (LEVELS.length === 0 ? '<p style="text-align:center;margin-top:40px">Contenu en cours de chargement...</p>' : cards) +
      "</div>";

    document.getElementById("switch").addEventListener("click", () => { screenSplash(); });
    document.getElementById("snd").addEventListener("click", () => { store.soundOn = !store.soundOn; save(); screenMap(); });
    document.getElementById("hebtn").addEventListener("click", () => { store.heOn = !store.heOn; save(); screenMap(); });
    const dip = document.getElementById("dipbtn");
    if (dip) dip.addEventListener("click", screenDiploma);
    $screen.querySelectorAll(".level-card").forEach(c => {
      c.addEventListener("click", () => {
        const i = +c.dataset.lvl;
        if (!isLevelUnlocked(i)) {
          toast("teach", "Termine d'abord le niveau " + LEVELS[i - 1].order + " !", "קודם סיימו את שלב " + LEVELS[i - 1].order + "!");
          return;
        }
        screenSublevels(i);
      });
    });
  }

  /* ---------- Sous-niveaux ---------- */
  function screenSublevels(lvlIdx) {
    const lv = LEVELS[lvlIdx];
    const subs = lv.sublevels.map((sub, j) => {
      const unlocked = isSubUnlocked(lv, j);
      const st = subStars(sub.id);
      const total = sub.exercises.length;
      return '<button class="sub-card' + (unlocked ? "" : " locked") + (st !== null ? " done" : "") + '" data-sub="' + j + '" style="--lvl:' + lv.color + '">' +
        '<span class="sub-emoji">' + (st !== null ? "✅" : unlocked ? sub.emoji || "▶️" : "🔒") + "</span>" +
        '<span class="sub-info">' +
        '<span class="sub-name">' + esc(sub.name) + (store.heOn ? ' <span class="he-inline" dir="rtl">' + esc(sub.nameHe || "") + "</span>" : "") + "</span>" +
        (st !== null ? '<span class="sub-stars">⭐ ' + st + "/" + total + (st < total ? " — tu peux faire mieux !" : " — parfait !") + "</span>" : "") +
        "</span>" +
        "</button>";
    }).join("");

    $screen.innerHTML =
      '<div class="screen">' +
      '<div class="topbar">' +
      '<button class="back" id="back">←</button>' +
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
          toast("teach", "Termine d'abord l'étape d'avant !", "קודם סיימו את השלב הקודם!");
          return;
        }
        startLesson(lvlIdx, j);
      });
    });
  }

  /* ---------- Leçon ---------- */
  function startLesson(lvlIdx, subIdx) {
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
        '<button class="back" id="back">✕</button>' +
        '<span class="title">' + esc(sub.name) + "</span>" +
        "</div>" +
        '<div class="lesson-dots">' + dots + "</div>" +
        '<div class="lesson-card">' +
        "<h2>" + esc(c.title) + he(c.titleHe) + "</h2>" +
        (c.big ? '<div class="big">' + esc(c.big) + "</div>" : "") +
        '<div class="body">' + esc(c.body) + he(c.bodyHe) + "</div>" +
        (c.say ? '<button class="say-btn" id="sayb">🔊 Écoute !</button>' : "") +
        "</div>" +
        '<button class="btn btn-good" id="next">' +
        (ci < cards.length - 1 ? "Suite →" : "C'est parti ! 🚀") +
        he(ci < cards.length - 1 ? "הלאה" : "יאללה מתחילים!") +
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
      if (c.say) setTimeout(() => speak(c.say), 500);
    }
  }

  /* ---------- Session d'exercices ---------- */
  function startExercises(lvlIdx, subIdx) {
    const lv = LEVELS[lvlIdx];
    const sub = lv.sublevels[subIdx];
    const session = {
      lvlIdx, subIdx,
      list: sub.exercises,
      i: 0,
      stars: 0,          // bonnes réponses du premier coup
      failedThis: false  // erreur déjà faite sur l'exercice courant
    };
    renderExercise(session);
  }

  function exHeader(session) {
    const lv = LEVELS[session.lvlIdx];
    const pct = Math.round((session.i / session.list.length) * 100);
    return '<div class="topbar">' +
      '<button class="back" id="ex-quit">✕</button>' +
      '<div class="progress-track"><div class="progress-fill" style="width:' + pct + '%"></div></div>' +
      '<span class="chip">⭐ ' + session.stars + "</span>" +
      "</div>";
  }

  function renderExercise(session) {
    const lv = LEVELS[session.lvlIdx];
    if (session.i >= session.list.length) return screenResults(session);
    const ex = session.list[session.i];
    session.failedThis = false;

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
          '<button class="btn btn-good" id="tcheck" style="margin-top:auto">Vérifier ✓' + he("לבדוק") + "</button>";
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
          (ex.say ? '<button class="say-btn" id="sayb">🔊 Écoute Levy lire</button>' : "") +
          '<button class="btn btn-good" id="readdone" style="margin-top:auto">Je l\'ai lu ! ✅' + he("קראתי!") + "</button>";
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
      if (confirm("Quitter l'exercice ? La progression de cette étape sera perdue.")) {
        screenSublevels(session.lvlIdx);
      }
    });

    const sayb = document.getElementById("sayb");
    if (sayb) sayb.addEventListener("click", () => speak(ex.say));
    if (ex.type === "listen" || ex.type === "type") setTimeout(() => speak(ex.say), 450);

    /* ----- branchements par type ----- */
    if (["pick", "riddle", "listen", "fill"].includes(ex.type)) {
      $screen.querySelectorAll(".choice").forEach(btn => {
        btn.addEventListener("click", () => {
          const idx = +btn.dataset.idx;
          if (idx === ex.answer) {
            btn.classList.add("correct");
            if (ex.type === "fill") {
              const blank = document.getElementById("blank");
              if (blank) { blank.textContent = ex.choices[idx]; blank.style.color = "var(--good)"; }
            }
            onCorrect(session, ex);
          } else {
            btn.classList.add("wrong");
            btn.disabled = true;
            onWrong(session, ex, ex.choices[ex.answer]);
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
          : '<span style="color:#B9AF9E">Touche les étiquettes !' + (store.heOn ? " · לחצו על הכרטיסיות" : "") + "</span>";
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
              dingBad();
              session.failedThis = true;
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
    toast(Math.random() > 0.5 ? "cheer" : "happy", p[0], p[1]);
    lockChoices();
    setTimeout(() => { session.i++; renderExercise(session); }, 1050);
  }

  function onWrong(session, ex, correctAnswer, onClose) {
    dingBad();
    const first = !session.failedThis;
    session.failedThis = true;
    const o = rand(OOPS);
    const showAnswer = !onClose; // pour la dictée on laisse réessayer sans donner la réponse au 1er échec
    const answerLine = (showAnswer || !first)
      ? '<div style="margin-top:8px;font-weight:700">La bonne réponse : <span style="color:var(--good)">' + esc(correctAnswer) + "</span></div>"
      : "";
    $overlay.innerHTML =
      '<div class="mascot-panel bad">' +
      '<div class="mascot-wrap">' + mascotSVG(first ? "oops" : "teach") + "</div>" +
      "<h3>" + esc(o[0]) + (store.heOn ? ' <span dir="rtl" style="font-size:0.8em">' + esc(o[1]) + "</span>" : "") + "</h3>" +
      '<div class="explain">' + esc(ex.explain || "") + he(ex.explainHe) + answerLine + "</div>" +
      '<button class="btn btn-accent" id="ok-btn">J\'ai compris !' + he("הבנתי!") + "</button>" +
      "</div>";
    $overlay.classList.remove("hidden");
    if (ex.say) speak(ex.say);
    document.getElementById("ok-btn").addEventListener("click", () => {
      $overlay.classList.add("hidden");
      if (onClose && first) {
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

  /* ---------- Toast mascotte (non bloquant) ---------- */
  function toast(expr, txt, txtHe) {
    const d = document.createElement("div");
    d.style.cssText = "position:fixed;bottom:18px;left:50%;transform:translateX(-50%);background:#fff;border-radius:20px;box-shadow:0 6px 24px rgba(0,0,0,0.22);padding:10px 20px 10px 12px;display:flex;align-items:center;gap:10px;z-index:70;animation:slideUp 0.25s ease;max-width:90vw;";
    d.innerHTML =
      '<div style="width:54px;flex-shrink:0">' + mascotSVG(expr) + "</div>" +
      '<div style="font-weight:700;font-size:1.1rem">' + esc(txt) +
      (store.heOn && txtHe ? '<span class="he" dir="rtl">' + esc(txtHe) + "</span>" : "") + "</div>";
    document.body.appendChild(d);
    setTimeout(() => { d.style.opacity = "0"; d.style.transition = "opacity 0.3s"; }, 950);
    setTimeout(() => d.remove(), 1300);
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
    save();

    confetti(60);
    dingGood();
    const pct = stars / total;
    const bigMsg = pct === 1 ? "PARFAIT !" : pct >= 0.7 ? "Bravo !" : "C'est fait !";
    const isLastOfLevel = session.subIdx === lv.sublevels.length - 1;
    const finished = gameFinished();

    $screen.innerHTML =
      '<div class="screen results" style="--lvl:' + lv.color + '">' +
      '<div class="mascot-wrap mascot-cheer">' + mascotSVG("cheer") + "</div>" +
      "<h2>" + bigMsg + "</h2>" +
      '<div class="stars-big">' + "⭐".repeat(Math.max(1, stars)) + "</div>" +
      '<div class="score-line">' + stars + " / " + total + " du premier coup" + he(stars + " מתוך " + total + " בניסיון ראשון") + "</div>" +
      (isLastOfLevel ? '<div class="score-line" style="font-weight:700;color:' + lv.color + '">🏅 Niveau ' + lv.order + " terminé ! Mazal Tov !</div>" : "") +
      '<div class="joke-card">' +
      '<div class="joke-label">🎁 Ta blague récompense !</div>' +
      '<div class="joke-q">' + esc(sub.joke.q) + he(sub.joke.qHe) + "</div>" +
      '<button class="btn btn-accent" id="joke-btn">La réponse ? 😄' + he("?התשובה") + "</button>" +
      '<div class="joke-a hidden" id="joke-a">' + esc(sub.joke.a) + he(sub.joke.aHe) + "</div>" +
      "</div>" +
      (finished
        ? '<button class="btn btn-accent" id="dip-btn">🎓 Mon diplôme !</button>'
        : '<button class="btn btn-good" id="cont-btn">Continuer →' + he("להמשיך") + "</button>") +
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
    confetti(120);
    const date = new Date().toLocaleDateString("fr-FR");
    $screen.innerHTML =
      '<div class="screen results">' +
      '<div class="mascot-wrap mascot-cheer">' + mascotSVG("cheer") + "</div>" +
      '<div class="diploma">' +
      '<div class="dip-title">DIPLÔME OFFICIEL</div>' +
      "<h2>🎓 Super-champion du français !</h2>" +
      '<div class="dip-name">' + esc(store.current) + "</div>" +
      '<div class="dip-text">a terminé les 10 niveaux du jeu<br><b>On apprend avec Levy</b><br>avec ' + totalStars() + " ⭐<br><br>Mazal Tov ! 🎉<br>" + date + "</div>" +
      he("סיים/ה את כל 10 השלבים של המשחק! מזל טוב!") +
      "</div>" +
      '<button class="btn" id="backmap">← Retour au jeu</button>' +
      "</div>";
    document.getElementById("backmap").addEventListener("click", screenMap);
    speak("Mazal Tov " + store.current + " ! Tu es un super champion du français !");
  }

  /* ---------- Démarrage ---------- */
  if (store.current && store.profiles[store.current]) screenMap();
  else screenSplash();
})();
