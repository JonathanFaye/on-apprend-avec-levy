/* Validation déterministe des fichiers data/levelN.js — usage: node validate.js */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const DATA = path.join(__dirname, "data");
const TYPES = ["pick", "listen", "build", "fill", "type", "match", "read", "riddle", "blend"];
let errors = [], warnings = [];

function err(f, m) { errors.push(f + " — " + m); }
function warn(f, m) { warnings.push(f + " — " + m); }

const files = fs.readdirSync(DATA).filter(f => /^level\d+\.js$/.test(f))
  .sort((a, b) => parseInt(a.match(/\d+/)[0]) - parseInt(b.match(/\d+/)[0]));

const ctx = { window: {} };
vm.createContext(ctx);
const allJokes = [];

for (const f of files) {
  const src = fs.readFileSync(path.join(DATA, f), "utf8");
  ctx.window.LEVELS = [];
  try {
    vm.runInContext(src, ctx, { filename: f });
  } catch (e) {
    err(f, "ERREUR JS : " + e.message);
    continue;
  }
  if (ctx.window.LEVELS.length !== 1) { err(f, "doit pousser exactement 1 niveau (trouvé " + ctx.window.LEVELS.length + ")"); continue; }
  const lv = ctx.window.LEVELS[0];
  const n = parseInt(f.match(/\d+/)[0]);

  if (lv.id !== "n" + n) err(f, "id attendu n" + n + ", trouvé " + lv.id);
  if (lv.order !== n) err(f, "order attendu " + n + ", trouvé " + lv.order);
  for (const k of ["name", "nameHe", "emoji", "color", "tagline", "taglineHe"])
    if (!lv[k]) err(f, "champ niveau manquant : " + k);
  if (!Array.isArray(lv.sublevels) || lv.sublevels.length < 3 || lv.sublevels.length > 6)
    { err(f, "3 à 6 sous-niveaux attendus, trouvé " + (lv.sublevels || []).length); continue; }

  const subIds = new Set();
  lv.sublevels.forEach((sub, si) => {
    // Les ids ne sont plus forcément séquentiels (ex. n2-s0-fusion inséré en tête) :
    // on exige juste un id non vide, préfixé par l'id du niveau, et unique.
    const tag = f + ":" + (sub.id || ("sub" + si));
    if (!sub.id || typeof sub.id !== "string") err(tag, "id sous-niveau manquant");
    else {
      if (sub.id.indexOf(lv.id + "-") !== 0) err(tag, "id sous-niveau doit commencer par " + lv.id + "-");
      if (subIds.has(sub.id)) err(tag, "id sous-niveau en double : " + sub.id);
      subIds.add(sub.id);
    }
    for (const k of ["name", "nameHe"]) if (!sub[k]) err(tag, "champ manquant : " + k);
    if (!sub.lesson || !Array.isArray(sub.lesson.cards) || sub.lesson.cards.length < 1)
      err(tag, "leçon manquante ou vide");
    else sub.lesson.cards.forEach((c, ci) => {
      for (const k of ["title", "titleHe", "body", "bodyHe"])
        if (!c[k]) err(tag, "carte " + (ci + 1) + " : champ manquant " + k);
    });
    if (!sub.joke || !sub.joke.q || !sub.joke.a || !sub.joke.qHe || !sub.joke.aHe)
      err(tag, "blague incomplète");
    else allJokes.push({ tag, q: sub.joke.q.toLowerCase().replace(/\W+/g, " ").trim() });

    const exs = sub.exercises || [];
    if (exs.length < 8 || exs.length > 12)
      warn(tag, exs.length + " exercices (attendu 8 à 12)");

    exs.forEach((ex, ei) => {
      const et = tag + " ex" + (ei + 1) + " (" + ex.type + ")";
      if (!TYPES.includes(ex.type)) { err(et, "type inconnu"); return; }
      for (const k of ["prompt", "promptHe", "explain", "explainHe"])
        if (!ex[k]) err(et, "champ manquant : " + k);

      if (["pick", "riddle", "listen", "fill", "blend"].includes(ex.type)) {
        if (!Array.isArray(ex.choices) || ex.choices.length < 2 || ex.choices.length > 4)
          err(et, "choices doit avoir 2-4 éléments");
        else {
          if (typeof ex.answer !== "number" || ex.answer < 0 || ex.answer >= ex.choices.length)
            err(et, "answer doit être un index valide de choices (trouvé " + ex.answer + ")");
          const uniq = new Set(ex.choices.map(String));
          if (uniq.size !== ex.choices.length) err(et, "choix en double : " + ex.choices.join(" | "));
        }
      }
      if (ex.type === "listen" && !ex.say) err(et, "say obligatoire pour listen");
      if (ex.type === "blend") {
        for (const k of ["c", "v", "syll", "say"]) if (!ex[k]) err(et, "champ manquant pour blend : " + k);
      }
      if (ex.type === "fill") {
        const cnt = (String(ex.sentence || "").match(/␣/g) || []).length;
        if (cnt !== 1) err(et, "sentence doit contenir exactement un ␣ (trouvé " + cnt + ")");
      }
      if (ex.type === "build") {
        if (!Array.isArray(ex.tiles) || !Array.isArray(ex.answer)) err(et, "tiles/answer manquants");
        else {
          if (ex.tiles.length > 6) warn(et, ex.tiles.length + " tuiles (max 6)");
          const pool = ex.tiles.slice();
          for (const a of ex.answer) {
            const i = pool.indexOf(a);
            if (i === -1) { err(et, "answer '" + a + "' absent des tiles (ou en quantité insuffisante)"); break; }
            pool.splice(i, 1);
          }
          if (ex.answer.length < 2) warn(et, "answer d'une seule tuile");
        }
      }
      if (ex.type === "type") {
        if (!ex.say) err(et, "say obligatoire pour type (dictée)");
        if (!ex.answer || typeof ex.answer !== "string") err(et, "answer (string) obligatoire");
      }
      if (ex.type === "match") {
        if (!Array.isArray(ex.pairs) || ex.pairs.length < 3 || ex.pairs.length > 4)
          err(et, "pairs doit avoir 3-4 paires");
        else {
          const ls = new Set(ex.pairs.map(p => String(p[0])));
          const rs = new Set(ex.pairs.map(p => String(p[1])));
          if (ls.size !== ex.pairs.length || rs.size !== ex.pairs.length)
            err(et, "doublons dans les paires (ambigu)");
        }
      }
      if (ex.type === "read" && !ex.text) err(et, "text obligatoire pour read");
      if (ex.type === "riddle" && !ex.question) err(et, "question obligatoire pour riddle");
    });

    const readCount = exs.filter(e => e.type === "read").length;
    if (readCount > 2) warn(tag, readCount + " exercices read (max 2)");
  });
}

// blagues en double entre niveaux
const seen = {};
for (const j of allJokes) {
  if (seen[j.q]) err(j.tag, "BLAGUE EN DOUBLE avec " + seen[j.q]);
  else seen[j.q] = j.tag;
}

console.log("Fichiers analysés : " + files.join(", "));
console.log("\n=== ERREURS (" + errors.length + ") ===");
errors.forEach(e => console.log("  ✗ " + e));
console.log("\n=== AVERTISSEMENTS (" + warnings.length + ") ===");
warnings.forEach(w => console.log("  ! " + w));
process.exit(errors.length ? 1 : 0);
