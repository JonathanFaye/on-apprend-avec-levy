window.LEVELS = window.LEVELS || [];
window.LEVELS.push({
  id: "n6",
  order: 6,
  name: "Je lis des phrases",
  nameHe: "אני קורא משפטים",
  emoji: "📖",
  color: "#6A1B9A",
  tagline: "Je lis des phrases entières !",
  taglineHe: "אני קורא משפטים שלמים!",
  sublevels: [
    {
      id: "n6-s1",
      name: "Les minuscules",
      nameHe: "האותיות הקטנות",
      emoji: "🔡",
      lesson: {
        cards: [
          {
            title: "Les lettres se déguisent !",
            titleHe: "האותיות מתחפשות!",
            body: "Chaque grande lettre a une petite sœur : A devient a, B devient b, C devient c. On les appelle les minuscules !",
            bodyHe: "לכל אות גדולה יש אחות קטנה: A הופכת ל-a, B הופכת ל-b, C הופכת ל-c. קוראים להן אותיות קטנות!",
            big: "A a  B b  C c",
            say: "a. bé. cé."
          },
          {
            title: "C'est le même mot !",
            titleHe: "זו אותה מילה!",
            body: "CHAT et chat, c'est exactement le même mot ! Dans les livres, presque tout est écrit en minuscules, avec une majuscule au début de la phrase.",
            bodyHe: "CHAT ו-chat זו בדיוק אותה מילה! בספרים כמעט הכול כתוב באותיות קטנות, עם אות גדולה בתחילת המשפט.",
            big: "CHAT = chat",
            say: "chat."
          },
          {
            title: "Attention aux jumelles !",
            titleHe: "זהירות, תאומות!",
            body: "Certaines minuscules se ressemblent beaucoup : b et d, p et q. Regarde bien de quel côté est le ventre de la lettre !",
            bodyHe: "יש אותיות קטנות שדומות מאוד: b ו-d, p ו-q. הסתכלו טוב באיזה צד נמצאת הבטן של האות!",
            big: "b d  p q",
            say: "bé. dé. pé. ku."
          }
        ]
      },
      exercises: [
        {
          type: "match",
          prompt: "Relie chaque grande lettre à sa petite sœur !",
          promptHe: "חברו כל אות גדולה לאחות הקטנה שלה!",
          pairs: [["A", "a"], ["B", "b"], ["E", "e"], ["R", "r"]],
          explain: "A devient a, B devient b, E devient e et R devient r.",
          explainHe: "A הופכת ל-a, B ל-b, E ל-e ו-R ל-r."
        },
        {
          type: "pick",
          prompt: "Quelle est la minuscule de M ?",
          promptHe: "מהי האות הקטנה של M?",
          question: "M",
          choices: ["m", "n", "w"],
          answer: 0,
          say: "aime",
          explain: "M devient m : deux petits ponts, comme la grande !",
          explainHe: "M הופכת ל-m: שני גשרים קטנים, כמו הגדולה!"
        },
        {
          type: "pick",
          prompt: "Quelle est la minuscule de B ?",
          promptHe: "מהי האות הקטנה של B?",
          question: "B",
          choices: ["d", "p", "b"],
          answer: 2,
          say: "bé",
          explain: "B devient b : un grand dos et un ventre en avant !",
          explainHe: "B הופכת ל-b: גב גבוה ובטן קדימה!"
        },
        {
          type: "match",
          prompt: "Relie les grandes lettres aux petites !",
          promptHe: "חברו את האותיות הגדולות לקטנות!",
          pairs: [["D", "d"], ["G", "g"], ["Q", "q"], ["N", "n"]],
          explain: "D devient d, G devient g, Q devient q et N devient n.",
          explainHe: "D הופכת ל-d, G ל-g, Q ל-q ו-N ל-n."
        },
        {
          type: "pick",
          prompt: "Quel mot veut dire 🐱 ?",
          promptHe: "איזו מילה אומרת 🐱?",
          question: "🐱",
          choices: ["chaud", "chat", "chou"],
          answer: 1,
          say: "chat",
          explain: "chat s'écrit c-h-a-t. En minuscules aussi, tu sais le lire !",
          explainHe: "chat נכתבת c-h-a-t. גם באותיות קטנות אתם יודעים לקרוא אותה!"
        },
        {
          type: "pick",
          prompt: "Trouve le mot MAISON écrit en minuscules !",
          promptHe: "מצאו את המילה MAISON כתובה באותיות קטנות!",
          question: "MAISON",
          choices: ["raison", "saison", "maison"],
          answer: 2,
          say: "maison",
          explain: "maison : m-a-i-s-o-n, les mêmes lettres en petit ! 🏠",
          explainHe: "maison: בדיוק אותן אותיות, רק קטנות! 🏠"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הקשיבו ובחרו מה שמעתם!",
          say: "bonjour",
          choices: ["bonsoir", "bonjour", "toujours"],
          answer: 1,
          explain: "Tu as entendu bonjour, comme quand Levy dit bonjour le matin !",
          explainHe: "שמעתם bonjour, כמו כשלוי אומר בוקר טוב!"
        },
        {
          type: "fill",
          prompt: "Complète le mot !",
          promptHe: "השלימו את המילה!",
          sentence: "Levy a un vél␣ bleu.",
          choices: ["o", "a", "e"],
          answer: 0,
          say: "vélo",
          explain: "vélo s'écrit v-é-l-o. Levy adore son vélo bleu ! 🚲",
          explainHe: "vélo נכתבת v-é-l-o. לוי אוהב את האופניים הכחולים שלו! 🚲"
        },
        {
          type: "build",
          prompt: "Assemble le mot lapin !",
          promptHe: "הרכיבו את המילה lapin!",
          tiles: ["pin", "la", "lo"],
          answer: ["la", "pin"],
          say: "lapin",
          explain: "la + pin = lapin ! 🐰",
          explainHe: "la + pin = lapin! 🐰"
        },
        {
          type: "read",
          prompt: "Lis ces mots en minuscules à voix haute !",
          promptHe: "קראו בקול רם את המילים באותיות קטנות!",
          text: "chat\nmaison\nvélo",
          say: "chat. maison. vélo.",
          explain: "Bravo ! Tu lis les minuscules comme un grand !",
          explainHe: "כל הכבוד! אתם קוראים אותיות קטנות כמו גדולים!"
        }
      ],
      joke: {
        q: "Charade ! Mon premier miaule. Mon second recouvre ton corps. Mon tout se porte sur la tête !",
        a: "Un chapeau ! CHAT + PEAU = CHAPEAU ! 🎩",
        qHe: "חידה! החלק הראשון הוא חיה שעושה מיאו (CHAT). החלק השני מכסה את הגוף (PEAU). והכול ביחד? משהו ששמים על הראש!",
        aHe: "כובע! CHAT + PEAU = CHAPEAU! 🎩"
      }
    },
    {
      id: "n6-s2",
      name: "Les sons gn, ph, qu",
      nameHe: "הצלילים gn, ph, qu",
      emoji: "🎵",
      lesson: {
        cards: [
          {
            title: "Le son gn",
            titleHe: "הצליל gn",
            body: "Les lettres g et n ensemble font le son 'gne', comme dans montagne, ligne et signe.",
            bodyHe: "האותיות g ו-n ביחד עושות את הצליל 'נְיֶה', כמו במילים montagne, ligne ו-signe.",
            big: "gn → montagne",
            say: "gne. montagne. ligne. signe."
          },
          {
            title: "Le son ph",
            titleHe: "הצליל ph",
            body: "Les lettres p et h ensemble font le son 'f', comme dans photo, téléphone et phoque !",
            bodyHe: "האותיות p ו-h ביחד עושות את הצליל f, כמו במילים photo, téléphone ו-phoque!",
            big: "ph → photo",
            say: "fe. photo. téléphone. phoque."
          },
          {
            title: "Le son qu",
            titleHe: "הצליל qu",
            body: "Les lettres q et u ensemble font le son 'k', comme dans qui, quatre et musique. Le u ne se prononce pas !",
            bodyHe: "האותיות q ו-u ביחד עושות את הצליל k, כמו במילים qui, quatre ו-musique. את ה-u לא מבטאים!",
            big: "qu → quatre",
            say: "ke. qui. quatre. musique."
          }
        ]
      },
      exercises: [
        {
          type: "pick",
          prompt: "Quel son font les lettres ph ?",
          promptHe: "איזה צליל עושות האותיות ph?",
          question: "ph",
          choices: ["p", "f", "v"],
          answer: 1,
          say: "fe",
          explain: "ph fait le son 'f' : photo se dit foto ! 📷",
          explainHe: "ph עושה את הצליל f: את photo מבטאים 'פוֹטוֹ'! 📷"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הקשיבו ובחרו מה שמעתם!",
          say: "photo",
          choices: ["moto", "auto", "photo"],
          answer: 2,
          explain: "photo commence par le son 'f', écrit ph ! 📷",
          explainHe: "photo מתחילה בצליל f שנכתב ph! 📷"
        },
        {
          type: "fill",
          prompt: "Complète le mot !",
          promptHe: "השלימו את המילה!",
          sentence: "Levy monte sur la monta␣ne.",
          choices: ["g", "n", "p"],
          answer: 0,
          say: "montagne",
          explain: "montagne s'écrit avec gn : mon-ta-gne ! ⛰️",
          explainHe: "montagne נכתבת עם gn: mon-ta-gne! ⛰️"
        },
        {
          type: "pick",
          prompt: "Quel mot a le son 'gne' ?",
          promptHe: "באיזו מילה יש את הצליל 'נְיֶה' (gn)?",
          choices: ["lune", "lame", "ligne"],
          answer: 2,
          say: "ligne",
          explain: "Dans ligne, on entend 'gne' à la fin : li-gne !",
          explainHe: "במילה ligne שומעים 'נְיֶה' בסוף: li-gne!"
        },
        {
          type: "build",
          prompt: "Assemble le mot musique !",
          promptHe: "הרכיבו את המילה musique!",
          tiles: ["si", "que", "mu", "co"],
          answer: ["mu", "si", "que"],
          say: "musique",
          explain: "mu + si + que = musique ! 🎵",
          explainHe: "mu + si + que = musique! 🎵"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הקשיבו ובחרו מה שמעתם!",
          say: "quatre",
          choices: ["carte", "quatre", "patte"],
          answer: 1,
          explain: "quatre commence par qu, qui fait le son 'k' !",
          explainHe: "quatre מתחילה ב-qu שעושה את הצליל k!"
        },
        {
          type: "type",
          prompt: "Écoute et écris le mot !",
          promptHe: "הקשיבו וכתבו את המילה!",
          say: "photo",
          answer: "photo",
          strict: false,
          explain: "photo s'écrit p-h-o-t-o : le son 'f' s'écrit ph !",
          explainHe: "photo נכתבת p-h-o-t-o: הצליל f נכתב ph!"
        },
        {
          type: "match",
          prompt: "Relie chaque mot à son image !",
          promptHe: "חברו כל מילה לתמונה שלה!",
          pairs: [["photo", "📷"], ["téléphone", "📞"], ["quatre", "4️⃣"], ["montagne", "⛰️"]],
          explain: "photo 📷, téléphone 📞, quatre 4️⃣ et montagne ⛰️ !",
          explainHe: "photo 📷, téléphone 📞, quatre 4️⃣ ו-montagne ⛰️!"
        },
        {
          type: "fill",
          prompt: "Complète le mot !",
          promptHe: "השלימו את המילה!",
          sentence: "Levy écoute de la musi␣ue.",
          choices: ["c", "g", "q"],
          answer: 2,
          say: "musique",
          explain: "musique s'écrit avec qu : mu-si-que ! 🎵",
          explainHe: "musique נכתבת עם qu: mu-si-que! 🎵"
        },
        {
          type: "read",
          prompt: "Lis cette phrase à voix haute !",
          promptHe: "קראו את המשפט בקול רם!",
          text: "Le phoque fait un signe sur la montagne.",
          say: "Le phoque fait un signe sur la montagne.",
          explain: "Quelle drôle de phrase ! Bravo, tu as lu ph et gn !",
          explainHe: "איזה משפט מצחיק! כל הכבוד, קראתם ph וגם gn!"
        }
      ],
      joke: {
        q: "Charade ! Mon premier est le contraire de haut. Mon second est le contraire de tard. Mon tout flotte sur l'eau !",
        a: "Un bateau ! BAS + TÔT = BATEAU ! ⛵",
        qHe: "חידה! החלק הראשון הוא ההפך מגבוה (BAS). החלק השני הוא ההפך ממאוחר (TÔT). והכול ביחד? משהו שצף על המים!",
        aHe: "סירה! BAS + TÔT = BATEAU! ⛵"
      }
    },
    {
      id: "n6-s3",
      name: "Les petits mots et les phrases",
      nameHe: "מילים קטנות ומשפטים",
      emoji: "💬",
      lesson: {
        cards: [
          {
            title: "Les petits mots partout",
            titleHe: "מילים קטנות בכל מקום",
            body: "Ces petits mots sont dans toutes les phrases : il, elle, est, et, dans, avec, sur, sous, je, tu. Apprends-les par cœur !",
            bodyHe: "המילים הקטנות האלה נמצאות בכל המשפטים: il, elle, est, et, dans, avec, sur, sous, je, tu. למדו אותן בעל פה!",
            big: "il  elle  est  et",
            say: "il. elle. est. et. dans. avec. sur. sous. je. tu."
          },
          {
            title: "La phrase",
            titleHe: "המשפט",
            body: "Une phrase commence par une MAJUSCULE et finit par un point. Regarde : Levy va à la piscine.",
            bodyHe: "משפט מתחיל באות גדולה ומסתיים בנקודה. הסתכלו: Levy va à la piscine.",
            big: "Levy va à la piscine.",
            say: "Levy va à la piscine."
          },
          {
            title: "? et !",
            titleHe: "? ו-!",
            body: "Le point d'interrogation ? sert à poser une question. Le point d'exclamation ! sert à crier ou à s'étonner !",
            bodyHe: "סימן שאלה ? משמש לשאול שאלה. סימן קריאה ! משמש לצעוק או להתפלא!",
            big: ". ? !",
            say: "point. point d'interrogation. point d'exclamation."
          }
        ]
      },
      exercises: [
        {
          type: "fill",
          prompt: "Complète la phrase !",
          promptHe: "השלימו את המשפט!",
          sentence: "Le chat est ␣ la table.",
          choices: ["et", "sur", "je"],
          answer: 1,
          say: "Le chat est sur la table.",
          explain: "Le chat est SUR la table : il est dessus ! 🐱",
          explainHe: "החתול נמצא sur (על) השולחן: הוא למעלה! 🐱"
        },
        {
          type: "build",
          prompt: "Assemble la phrase !",
          promptHe: "הרכיבו את המשפט!",
          tiles: ["va", "Levy", "à", "piscine.", "la"],
          answer: ["Levy", "va", "à", "la", "piscine."],
          say: "Levy va à la piscine.",
          explain: "La phrase commence par une majuscule : Levy va à la piscine. 🏊",
          explainHe: "המשפט מתחיל באות גדולה: Levy va à la piscine. 🏊"
        },
        {
          type: "pick",
          prompt: "Quel signe finit une question ?",
          promptHe: "איזה סימן מסיים שאלה?",
          choices: ["!", ".", "?"],
          answer: 2,
          explain: "Le point d'interrogation ? finit toutes les questions !",
          explainHe: "סימן השאלה ? מסיים כל שאלה!"
        },
        {
          type: "fill",
          prompt: "Complète le début de la phrase !",
          promptHe: "השלימו את תחילת המשפט!",
          sentence: "␣e chat dort.",
          choices: ["L", "l", "d"],
          answer: 0,
          say: "Le chat dort.",
          explain: "Une phrase commence toujours par une MAJUSCULE : Le chat dort.",
          explainHe: "משפט תמיד מתחיל באות גדולה: Le chat dort."
        },
        {
          type: "pick",
          prompt: "Choisis la phrase bien écrite !",
          promptHe: "בחרו את המשפט הכתוב נכון!",
          choices: ["le chat est sur la table.", "Le chat est sur la table.", "Le chat est sur la table"],
          answer: 1,
          explain: "Majuscule au début ET point à la fin : Le chat est sur la table.",
          explainHe: "אות גדולה בהתחלה וגם נקודה בסוף: Le chat est sur la table."
        },
        {
          type: "pick",
          prompt: "Il ou elle ? Choisis pour la maîtresse !",
          promptHe: "il או elle? בחרו בשביל המורה!",
          question: "la maîtresse 👩‍🏫",
          choices: ["il", "elle"],
          answer: 1,
          say: "elle",
          explain: "La maîtresse est une femme, on dit ELLE. Pour Levy, on dit IL !",
          explainHe: "המורה היא אישה, אומרים elle. על לוי אומרים il!"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis la phrase que tu entends !",
          promptHe: "הקשיבו ובחרו את המשפט ששמעתם!",
          say: "Levy est avec son ami.",
          choices: ["Levy est avec le chat.", "Levy est sur le vélo.", "Levy est avec son ami."],
          answer: 2,
          explain: "Levy est AVEC son ami : ils jouent ensemble !",
          explainHe: "לוי נמצא avec (עם) חבר שלו: הם משחקים ביחד!"
        },
        {
          type: "fill",
          prompt: "Quelle ponctuation à la fin ?",
          promptHe: "איזה סימן פיסוק בסוף?",
          sentence: "Qui est dans la piscine ␣",
          choices: [".", "?", "!"],
          answer: 1,
          say: "Qui est dans la piscine ?",
          explain: "C'est une question, alors on met un point d'interrogation ?",
          explainHe: "זו שאלה, אז שמים סימן שאלה ?"
        },
        {
          type: "read",
          prompt: "Lis ces phrases à voix haute !",
          promptHe: "קראו את המשפטים בקול רם!",
          text: "Levy va à la piscine.\nLe chat est sur la table.",
          say: "Levy va à la piscine. Le chat est sur la table.",
          explain: "Bravo ! Tu lis de vraies phrases maintenant !",
          explainHe: "כל הכבוד! עכשיו אתם קוראים משפטים אמיתיים!"
        },
        {
          type: "type",
          prompt: "Écoute et écris le mot !",
          promptHe: "הקשיבו וכתבו את המילה!",
          say: "avec",
          answer: "avec",
          strict: false,
          explain: "avec s'écrit a-v-e-c. Levy joue avec son ami !",
          explainHe: "avec נכתבת a-v-e-c. לוי משחק עם חבר שלו!"
        }
      ],
      joke: {
        q: "Charade ! Mon premier est une note de musique. Mon second est un arbre toujours vert. Mon tout a de grandes oreilles !",
        a: "Un lapin ! LA + PIN = LAPIN ! 🐰",
        qHe: "חידה! החלק הראשון הוא תו מוזיקלי (LA). החלק השני הוא עץ ירוק (PIN). והכול ביחד? חיה עם אוזניים גדולות!",
        aHe: "ארנב! LA + PIN = LAPIN! 🐰"
      }
    },
    {
      id: "n6-s4",
      name: "Le grand défi",
      nameHe: "האתגר הגדול",
      emoji: "🏆",
      lesson: {
        cards: [
          {
            title: "Le grand défi !",
            titleHe: "האתגר הגדול!",
            body: "Bravo ! Tu sais lire des phrases en minuscules, avec gn, ph, qu et la ponctuation. Levy est super fier de toi. À toi de jouer !",
            bodyHe: "כל הכבוד! אתם יודעים לקרוא משפטים באותיות קטנות, עם gn, ph, qu וסימני פיסוק. לוי ממש גאה בכם. עכשיו תורכם!",
            big: "📖 ✨",
            say: "Le grand défi ! À toi de jouer !"
          }
        ]
      },
      exercises: [
        {
          type: "match",
          prompt: "Relie chaque grande lettre à sa minuscule !",
          promptHe: "חברו כל אות גדולה לאות הקטנה שלה!",
          pairs: [["G", "g"], ["Q", "q"], ["E", "e"], ["R", "r"]],
          explain: "G devient g, Q devient q, E devient e et R devient r !",
          explainHe: "G הופכת ל-g, Q ל-q, E ל-e ו-R ל-r!"
        },
        {
          type: "pick",
          prompt: "Trouve le mot MUSIQUE en minuscules !",
          promptHe: "מצאו את המילה MUSIQUE באותיות קטנות!",
          question: "MUSIQUE",
          choices: ["musigue", "musique", "nusique"],
          answer: 1,
          say: "musique",
          explain: "musique : m-u-s-i-q-u-e, avec qu ! 🎵",
          explainHe: "musique: m-u-s-i-q-u-e, עם qu! 🎵"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הקשיבו ובחרו מה שמעתם!",
          say: "montagne",
          choices: ["montagne", "montre", "maman"],
          answer: 0,
          explain: "montagne finit par le son 'gne' : mon-ta-gne ! ⛰️",
          explainHe: "montagne מסתיימת בצליל 'נְיֶה': mon-ta-gne! ⛰️"
        },
        {
          type: "fill",
          prompt: "Complète le mot !",
          promptHe: "השלימו את המילה!",
          sentence: "Levy a ␣uatre Pokémon.",
          choices: ["g", "d", "q"],
          answer: 2,
          say: "quatre",
          explain: "quatre s'écrit avec qu : q-u-a-t-r-e !",
          explainHe: "quatre נכתבת עם qu: q-u-a-t-r-e!"
        },
        {
          type: "build",
          prompt: "Assemble la phrase !",
          promptHe: "הרכיבו את המשפט!",
          tiles: ["chat", "Le", "sous", "dort", "la", "table."],
          answer: ["Le", "chat", "dort", "sous", "la", "table."],
          say: "Le chat dort sous la table.",
          explain: "Majuscule au début, point à la fin : Le chat dort sous la table. 🐱",
          explainHe: "אות גדולה בהתחלה ונקודה בסוף: Le chat dort sous la table. 🐱"
        },
        {
          type: "pick",
          prompt: "Choisis la phrase bien écrite !",
          promptHe: "בחרו את המשפט הכתוב נכון!",
          choices: ["elle joue avec le chat.", "Elle joue avec le chat", "Elle joue avec le chat."],
          answer: 2,
          explain: "Majuscule au début et point à la fin : Elle joue avec le chat.",
          explainHe: "אות גדולה בהתחלה ונקודה בסוף: Elle joue avec le chat."
        },
        {
          type: "type",
          prompt: "Écoute et écris le mot !",
          promptHe: "הקשיבו וכתבו את המילה!",
          say: "ligne",
          answer: "ligne",
          strict: false,
          explain: "ligne s'écrit l-i-g-n-e, avec gn !",
          explainHe: "ligne נכתבת l-i-g-n-e, עם gn!"
        },
        {
          type: "pick",
          prompt: "Lis la phrase : où est Levy ?",
          promptHe: "קראו את המשפט: איפה לוי?",
          question: "Levy est dans la piscine.",
          choices: ["dans la piscine", "sur le vélo", "sous la table"],
          answer: 0,
          explain: "La phrase dit : Levy est DANS la piscine ! 🏊",
          explainHe: "המשפט אומר: לוי נמצא dans (בתוך) הבריכה! 🏊"
        },
        {
          type: "fill",
          prompt: "Quelle ponctuation à la fin ?",
          promptHe: "איזה סימן פיסוק בסוף?",
          sentence: "Qui a mon chapeau ␣",
          choices: ["!", "?", "."],
          answer: 1,
          say: "Qui a mon chapeau ?",
          explain: "C'est une question : on met un point d'interrogation ?",
          explainHe: "זו שאלה: שמים סימן שאלה ?"
        },
        {
          type: "match",
          prompt: "Relie chaque mot à son image !",
          promptHe: "חברו כל מילה לתמונה שלה!",
          pairs: [["téléphone", "📞"], ["montagne", "⛰️"], ["piscine", "🏊"], ["chat", "🐱"]],
          explain: "téléphone 📞, montagne ⛰️, piscine 🏊 et chat 🐱 !",
          explainHe: "téléphone 📞, montagne ⛰️, piscine 🏊 ו-chat 🐱!"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis la phrase que tu entends !",
          promptHe: "הקשיבו ובחרו את המשפט ששמעתם!",
          say: "Elle est avec la maîtresse.",
          choices: ["Il est avec la maîtresse.", "Elle est avec la maîtresse.", "Elle est avec son amie."],
          answer: 1,
          explain: "ELLE est avec la maîtresse : on entend bien ELLE !",
          explainHe: "elle (היא) נמצאת עם המורה: שומעים היטב elle!"
        },
        {
          type: "riddle",
          prompt: "Charade !",
          promptHe: "חידה!",
          question: "Mon premier est le contraire de dur.\nMon second, c'est 'ton', comme dans 'ton vélo'.\nMon tout dit bêêê dans le pré.",
          choices: ["un bouton", "un menton", "un mouton"],
          answer: 2,
          say: "Mon premier est le contraire de dur. Mon second, c'est ton, comme dans ton vélo. Mon tout dit bêêê dans le pré.",
          explain: "MOU + TON = MOUTON ! Le mouton dit bêêê ! 🐑",
          explainHe: "MOU (רך, ההפך מקשה) + TON (שלך) = MOUTON, כבש! הכבש עושה מֶה! 🐑"
        }
      ],
      joke: {
        q: "Charade ! Mon premier est le contraire de 'sur'. Mon second est blanc et on le mange. Mon tout adore le fromage !",
        a: "Une souris ! SOUS + RIZ = SOURIS ! 🐭",
        qHe: "חידה! החלק הראשון הוא ההפך מ-sur (SOUS, מתחת). החלק השני לבן ואוכלים אותו (RIZ, אורז). והכול ביחד? חיה קטנה שאוהבת גבינה!",
        aHe: "עכבר! SOUS + RIZ = SOURIS! 🐭"
      }
    }
  ]
});
