/* Mascotte "Levy" — SVG vectoriel avec expressions.
   Garçon souriant : cheveux bruns courts, kippa bleu marine, lunettes rondes, polo bleu.
   Expressions : happy, cheer, oops, think, teach, wave */

window.mascotSVG = function (expr) {
  expr = expr || "happy";

  // --- yeux ---
  let eyes = "";
  if (expr === "cheer") {
    // étoiles dans les yeux
    eyes =
      star(38, 46, 5, "#F5A623") +
      star(62, 46, 5, "#F5A623");
  } else if (expr === "think") {
    eyes =
      '<circle cx="38" cy="44" r="3.2" fill="#3B2A1A"/>' +
      '<circle cx="62" cy="44" r="3.2" fill="#3B2A1A"/>';
  } else if (expr === "oops") {
    eyes =
      '<circle cx="38" cy="46" r="3.6" fill="#3B2A1A"/>' +
      '<circle cx="62" cy="46" r="3.6" fill="#3B2A1A"/>' +
      '<path d="M30 38 Q38 34 44 38" stroke="#3B2A1A" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      '<path d="M56 38 Q62 34 70 38" stroke="#3B2A1A" stroke-width="2" fill="none" stroke-linecap="round"/>';
  } else {
    eyes =
      '<circle cx="38" cy="46" r="3.4" fill="#3B2A1A"/>' +
      '<circle cx="62" cy="46" r="3.4" fill="#3B2A1A"/>' +
      '<circle cx="39.2" cy="44.8" r="1.1" fill="#fff"/>' +
      '<circle cx="63.2" cy="44.8" r="1.1" fill="#fff"/>';
  }

  // --- bouche ---
  let mouth = "";
  if (expr === "cheer" || expr === "wave") {
    mouth = '<path d="M40 60 Q50 72 60 60 Z" fill="#8C3B2E"/><path d="M43 62 Q50 68 57 62 Z" fill="#E8837A"/>';
  } else if (expr === "oops") {
    mouth = '<ellipse cx="50" cy="63" rx="5" ry="6" fill="#8C3B2E"/>';
  } else if (expr === "think") {
    mouth = '<path d="M43 63 Q50 66 57 62" stroke="#8C3B2E" stroke-width="2.5" fill="none" stroke-linecap="round"/>';
  } else if (expr === "teach") {
    mouth = '<path d="M41 61 Q50 69 59 61" stroke="#8C3B2E" stroke-width="3" fill="none" stroke-linecap="round"/>';
  } else {
    mouth = '<path d="M40 59 Q50 70 60 59" stroke="#8C3B2E" stroke-width="3" fill="none" stroke-linecap="round"/>';
  }

  // --- bras ---
  let arms = "";
  if (expr === "cheer") {
    arms =
      '<path d="M28 96 Q14 84 12 68" stroke="#4A90D9" stroke-width="11" fill="none" stroke-linecap="round"/>' +
      '<circle cx="12" cy="66" r="6.5" fill="#F2C49B"/>' +
      '<path d="M72 96 Q86 84 88 68" stroke="#4A90D9" stroke-width="11" fill="none" stroke-linecap="round"/>' +
      '<circle cx="88" cy="66" r="6.5" fill="#F2C49B"/>';
  } else if (expr === "wave") {
    arms =
      '<path d="M28 98 Q18 104 12 112" stroke="#4A90D9" stroke-width="11" fill="none" stroke-linecap="round"/>' +
      '<circle cx="11" cy="114" r="6.5" fill="#F2C49B"/>' +
      '<path d="M72 96 Q85 86 87 72" stroke="#4A90D9" stroke-width="11" fill="none" stroke-linecap="round"/>' +
      '<circle cx="87" cy="70" r="6.5" fill="#F2C49B"/>';
  } else if (expr === "teach") {
    arms =
      '<path d="M28 98 Q18 104 12 112" stroke="#4A90D9" stroke-width="11" fill="none" stroke-linecap="round"/>' +
      '<circle cx="11" cy="114" r="6.5" fill="#F2C49B"/>' +
      '<path d="M72 96 Q88 92 94 82" stroke="#4A90D9" stroke-width="11" fill="none" stroke-linecap="round"/>' +
      '<circle cx="95" cy="80" r="6.5" fill="#F2C49B"/>';
  } else if (expr === "think") {
    arms =
      '<path d="M28 98 Q18 104 12 112" stroke="#4A90D9" stroke-width="11" fill="none" stroke-linecap="round"/>' +
      '<circle cx="11" cy="114" r="6.5" fill="#F2C49B"/>' +
      '<path d="M72 96 Q80 84 70 74" stroke="#4A90D9" stroke-width="11" fill="none" stroke-linecap="round"/>' +
      '<circle cx="68" cy="72" r="6.5" fill="#F2C49B"/>';
  } else if (expr === "oops") {
    arms =
      '<path d="M28 96 Q16 88 14 76" stroke="#4A90D9" stroke-width="11" fill="none" stroke-linecap="round"/>' +
      '<circle cx="14" cy="74" r="6.5" fill="#F2C49B"/>' +
      '<path d="M72 96 Q84 88 84 40 Q80 32 70 30" stroke="#4A90D9" stroke-width="11" fill="none" stroke-linecap="round"/>' +
      '<circle cx="68" cy="29" r="6.5" fill="#F2C49B"/>';
  } else {
    arms =
      '<path d="M28 98 Q18 104 12 112" stroke="#4A90D9" stroke-width="11" fill="none" stroke-linecap="round"/>' +
      '<circle cx="11" cy="114" r="6.5" fill="#F2C49B"/>' +
      '<path d="M72 98 Q82 104 88 112" stroke="#4A90D9" stroke-width="11" fill="none" stroke-linecap="round"/>' +
      '<circle cx="89" cy="114" r="6.5" fill="#F2C49B"/>';
  }

  return (
    '<svg viewBox="0 0 100 130" xmlns="http://www.w3.org/2000/svg" class="mascot mascot-' + expr + '">' +
    // corps (polo bleu)
    '<path d="M30 128 L30 100 Q30 88 50 88 Q70 88 70 100 L70 128 Z" fill="#4A90D9"/>' +
    '<path d="M42 88 L50 100 L58 88 Q50 92 42 88" fill="#3877B8"/>' +
    '<circle cx="50" cy="104" r="1.8" fill="#2C5E93"/>' +
    '<circle cx="50" cy="112" r="1.8" fill="#2C5E93"/>' +
    arms +
    // cou
    '<rect x="44" y="78" width="12" height="12" rx="5" fill="#F2C49B"/>' +
    // tête
    '<circle cx="50" cy="50" r="32" fill="#F7D0A8"/>' +
    // oreilles
    '<circle cx="18.5" cy="50" r="5.5" fill="#F7D0A8"/>' +
    '<circle cx="81.5" cy="50" r="5.5" fill="#F7D0A8"/>' +
    // cheveux bruns courts
    '<path d="M18 48 Q16 20 50 18 Q84 20 82 48 Q82 34 72 32 Q76 28 68 26 Q58 22 48 26 Q34 24 30 32 Q20 34 18 48 Z" fill="#5B3A21"/>' +
    // kippa bleu marine
    '<ellipse cx="50" cy="19" rx="14" ry="5.5" fill="#1E3A6E"/>' +
    '<ellipse cx="50" cy="18" rx="14" ry="5" fill="#27498A"/>' +
    // lunettes rondes
    '<circle cx="38" cy="46" r="10" fill="rgba(255,255,255,0.25)" stroke="#2B2B2B" stroke-width="2.6"/>' +
    '<circle cx="62" cy="46" r="10" fill="rgba(255,255,255,0.25)" stroke="#2B2B2B" stroke-width="2.6"/>' +
    '<path d="M48 46 L52 46" stroke="#2B2B2B" stroke-width="2.6" stroke-linecap="round"/>' +
    '<path d="M28 45 L20 42" stroke="#2B2B2B" stroke-width="2.4" stroke-linecap="round"/>' +
    '<path d="M72 45 L80 42" stroke="#2B2B2B" stroke-width="2.4" stroke-linecap="round"/>' +
    eyes +
    // joues
    '<circle cx="31" cy="57" r="4" fill="#F0A88C" opacity="0.55"/>' +
    '<circle cx="69" cy="57" r="4" fill="#F0A88C" opacity="0.55"/>' +
    // nez
    '<path d="M49 51 Q47 56 50 57" stroke="#D9A06B" stroke-width="2" fill="none" stroke-linecap="round"/>' +
    mouth +
    "</svg>"
  );

  function star(cx, cy, r, color) {
    let pts = [];
    for (let i = 0; i < 10; i++) {
      const ang = -Math.PI / 2 + (i * Math.PI) / 5;
      const rr = i % 2 === 0 ? r : r * 0.45;
      pts.push((cx + rr * Math.cos(ang)).toFixed(1) + "," + (cy + rr * Math.sin(ang)).toFixed(1));
    }
    return '<polygon points="' + pts.join(" ") + '" fill="' + color + '"/>';
  }
};
