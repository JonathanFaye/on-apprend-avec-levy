window.LEVELS = window.LEVELS || [];
window.LEVELS.push({
  id: "n5",
  order: 5,
  name: "Encore des sons",
  nameHe: "עוד צלילים",
  emoji: "🎵",
  color: "#00838F",
  tagline: "Je découvre de nouveaux sons !",
  taglineHe: "אני מגלה צלילים חדשים!",
  sublevels: [
    {
      id: "n5-s1",
      name: "OI et EU",
      nameHe: "OI ו-EU",
      emoji: "👑",
      lesson: {
        cards: [
          {
            title: "Le son OI",
            titleHe: "הצליל OI",
            body: "O et I ensemble font le son 'oi', comme dans MOI, TOI et ROI !",
            bodyHe: "O ו-I ביחד עושות את הצליל 'וַא', כמו במילים MOI, TOI ו-ROI!",
            big: "OI 👑",
            say: "oi. moi. toi. roi."
          },
          {
            title: "Des mots avec OI",
            titleHe: "מילים עם OI",
            body: "On retrouve OI dans POISSON et VOITURE. Tu l'entends ?",
            bodyHe: "הצליל OI נמצא גם במילים POISSON ו-VOITURE. שומעים אותו?",
            big: "POISSON 🐟 VOITURE 🚗",
            say: "poisson. voiture."
          },
          {
            title: "Le son EU",
            titleHe: "הצליל EU",
            body: "E et U ensemble font le son 'eu', comme dans FEU, BLEU et JEUDI.",
            bodyHe: "E ו-U ביחד עושות צליל מיוחד, כמו במילים FEU, BLEU ו-JEUDI. הקשיבו טוב!",
            big: "EU 🔥",
            say: "eu. feu. bleu. jeudi."
          },
          {
            title: "Le X muet de DEUX",
            titleHe: "ה-X השקטה של DEUX",
            body: "Dans DEUX, le X de la fin est muet : on dit 'deu' !",
            bodyHe: "במילה DEUX לא שומעים את ה-X שבסוף: אומרים 'דֶה'!",
            big: "DEUX = 2",
            say: "deux."
          }
        ]
      },
      exercises: [
        {
          type: "pick",
          prompt: "Quelles lettres font le son 'oi' ?",
          promptHe: "אילו אותיות עושות את הצליל 'oi'?",
          choices: ["OU", "OI", "ON"],
          answer: 1,
          say: "oi",
          explain: "O et I ensemble font le son 'oi', comme dans ROI. 👑",
          explainHe: "O ו-I ביחד עושות את הצליל 'וַא', כמו במילה ROI. 👑"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הקשיבו ובחרו מה שמעתם!",
          say: "roi",
          choices: ["RAT", "ROUE", "ROI"],
          answer: 2,
          explain: "ROI s'écrit R-O-I. On entend 'oi' à la fin ! 👑",
          explainHe: "ROI נכתב R-O-I. שומעים 'וַא' בסוף! 👑"
        },
        {
          type: "build",
          prompt: "Assemble le mot VOITURE !",
          promptHe: "הרכיבו את המילה VOITURE!",
          tiles: ["TURE", "VOI", "VA"],
          answer: ["VOI", "TURE"],
          say: "voiture",
          explain: "VOI + TURE = VOITURE ! 🚗",
          explainHe: "VOI + TURE = VOITURE! 🚗"
        },
        {
          type: "fill",
          prompt: "Complète le mot !",
          promptHe: "השלימו את המילה!",
          sentence: "MOI, TOI ET LE R␣I.",
          choices: ["ON", "OI", "OU"],
          answer: 1,
          say: "moi, toi et le roi",
          explain: "ROI s'écrit avec OI : R-O-I. 👑",
          explainHe: "ROI נכתב עם OI: R-O-I. 👑"
        },
        {
          type: "pick",
          prompt: "Quel mot veut dire 🐟 ?",
          promptHe: "איזו מילה אומרת 🐟?",
          question: "🐟",
          choices: ["POISSON", "POUSSIN", "MAISON"],
          answer: 0,
          say: "poisson",
          explain: "POISSON commence par POI : on entend 'oi' ! 🐟",
          explainHe: "POISSON זה דג! המילה מתחילה ב-POI, שומעים 'וַא'. 🐟"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הקשיבו ובחרו מה שמעתם!",
          say: "feu",
          choices: ["FOU", "FEU", "FA"],
          answer: 1,
          explain: "FEU s'écrit F-E-U. E et U font le son 'eu'. 🔥",
          explainHe: "FEU (אש) נכתב F-E-U. E ו-U עושות את הצליל 'eu'. 🔥"
        },
        {
          type: "fill",
          prompt: "Complète le mot !",
          promptHe: "השלימו את המילה!",
          sentence: "LEVY A UN BALLON BL␣.",
          choices: ["OU", "O", "EU"],
          answer: 2,
          say: "bleu",
          explain: "BLEU se termine par EU : B-L-E-U. 💙",
          explainHe: "BLEU (כחול) נגמר ב-EU: B-L-E-U. 💙"
        },
        {
          type: "type",
          prompt: "Écoute et écris le mot !",
          promptHe: "הקשיבו וכתבו את המילה!",
          say: "feu",
          answer: "feu",
          strict: false,
          explain: "FEU : F, E, U. Le son 'eu' s'écrit E-U. 🔥",
          explainHe: "FEU: F, E, U. הצליל 'eu' נכתב E-U. 🔥"
        },
        {
          type: "match",
          prompt: "Relie chaque mot à son image !",
          promptHe: "חברו כל מילה לתמונה שלה!",
          pairs: [["ROI", "👑"], ["POISSON", "🐟"], ["FEU", "🔥"], ["VOITURE", "🚗"]],
          say: "roi. poisson. feu. voiture.",
          explain: "ROI 👑, POISSON 🐟, FEU 🔥, VOITURE 🚗. Bravo !",
          explainHe: "ROI 👑, POISSON 🐟, FEU 🔥, VOITURE 🚗. כל הכבוד!"
        },
        {
          type: "pick",
          prompt: "Vrai ou faux ? Dans DEUX, le X est muet.",
          promptHe: "נכון או לא? במילה DEUX ה-X שקטה.",
          question: "DEUX",
          choices: ["VRAI", "FAUX"],
          answer: 0,
          say: "deux",
          explain: "VRAI ! On dit 'deu' : le X de DEUX ne se prononce pas. ✌️",
          explainHe: "נכון! אומרים 'דֶה': את ה-X של DEUX לא שומעים. ✌️"
        }
      ],
      joke: {
        q: "Qu'est-ce qui a des dents mais ne mange jamais ?",
        a: "Un peigne !",
        qHe: "מה יש לו שיניים אבל הוא אף פעם לא אוכל?",
        aHe: "מסרק! גם בעברית לשיניים של מסרק קוראים שיניים! 😁"
      }
    },
    {
      id: "n5-s2",
      name: "AU, EAU et les accents",
      nameHe: "AU, EAU והסימנים",
      emoji: "⛵",
      lesson: {
        cards: [
          {
            title: "Le son AU",
            titleHe: "הצליל AU",
            body: "Les lettres AU font le son 'o', comme dans CHAUD et JAUNE.",
            bodyHe: "האותיות AU עושות את הצליל 'אוֹ', כמו במילים CHAUD ו-JAUNE.",
            big: "AU ☀️",
            say: "o. chaud. jaune."
          },
          {
            title: "Le son EAU",
            titleHe: "הצליל EAU",
            body: "EAU fait aussi 'o', avec trois lettres ! GÂTEAU, BATEAU, et même le mot EAU tout seul.",
            bodyHe: "גם EAU נשמע 'אוֹ', עם שלוש אותיות! GÂTEAU, BATEAU, וגם המילה EAU לבד (מים).",
            big: "EAU 💧",
            say: "o. gâteau. bateau. eau."
          },
          {
            title: "Les accents É È Ê",
            titleHe: "הסימנים É È Ê",
            body: "É se dit 'é' comme ÉTÉ et ÉCOLE. È et Ê se disent 'è' comme dans FÊTE.",
            bodyHe: "É נשמע כמו 'אֵה', כמו במילים ÉTÉ ו-ÉCOLE. È ו-Ê נשמעים 'אֶה', כמו במילה FÊTE.",
            big: "É È Ê",
            say: "é. è. été. fête."
          },
          {
            title: "Le petit chapeau et le À",
            titleHe: "הכובע הקטן ו-À",
            body: "Le petit chapeau peut aussi se poser sur A : GÂTEAU ! Et le petit accent sur le A de LÀ montre un endroit : là !",
            bodyHe: "הכובע הקטן יכול לשבת גם על A: GÂTEAU! והסימן הקטן על ה-A של המילה LÀ מראה מקום: שם!",
            big: "Â À",
            say: "gâteau. là."
          }
        ]
      },
      exercises: [
        {
          type: "pick",
          prompt: "Quelles lettres font le son 'o' dans CHAUD ?",
          promptHe: "אילו אותיות עושות את הצליל 'אוֹ' במילה CHAUD?",
          question: "CHAUD",
          choices: ["OU", "AN", "AU"],
          answer: 2,
          say: "chaud",
          explain: "Dans CHAUD, le son 'o' s'écrit AU. ☀️",
          explainHe: "במילה CHAUD (חם) הצליל 'אוֹ' נכתב AU. ☀️"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הקשיבו ובחרו מה שמעתם!",
          say: "jaune",
          choices: ["JEUNE", "JAUNE", "JOUE"],
          answer: 1,
          explain: "JAUNE s'écrit avec AU : J-A-U-N-E. 🟡",
          explainHe: "JAUNE (צהוב) נכתב עם AU: J-A-U-N-E. 🟡"
        },
        {
          type: "build",
          prompt: "Assemble le mot GÂTEAU !",
          promptHe: "הרכיבו את המילה GÂTEAU!",
          tiles: ["TEAU", "GÂ", "TO"],
          answer: ["GÂ", "TEAU"],
          say: "gâteau",
          explain: "GÂ + TEAU = GÂTEAU ! Avec un chapeau sur le Â et EAU à la fin. 🎂",
          explainHe: "GÂ + TEAU = GÂTEAU (עוגה)! עם כובע על ה-Â ו-EAU בסוף. 🎂"
        },
        {
          type: "fill",
          prompt: "Complète le mot !",
          promptHe: "השלימו את המילה!",
          sentence: "LE BAT␣ EST SUR LA MER.",
          choices: ["EAU", "AU", "O"],
          answer: 0,
          say: "bateau",
          explain: "BATEAU s'écrit avec EAU, trois lettres pour le son 'o' ! ⛵",
          explainHe: "BATEAU (סירה) נכתב עם EAU: שלוש אותיות לצליל 'אוֹ'! ⛵"
        },
        {
          type: "pick",
          prompt: "Quel mot veut dire 💧 ?",
          promptHe: "איזו מילה אומרת 💧?",
          question: "💧",
          choices: ["AU", "EAU", "OU"],
          answer: 1,
          say: "eau",
          explain: "EAU : trois lettres, un seul son 'o' ! C'est ce qu'on boit. 💧",
          explainHe: "EAU זה מים! שלוש אותיות, צליל אחד: 'אוֹ'. 💧"
        },
        {
          type: "fill",
          prompt: "Complète le mot !",
          promptHe: "השלימו את המילה!",
          sentence: "LEVY VA À L'␣COLE.",
          choices: ["E", "È", "É"],
          answer: 2,
          say: "école",
          explain: "ÉCOLE commence par É avec un accent aigu. 🏫",
          explainHe: "ÉCOLE (בית ספר) מתחילה ב-É עם סימן קטן מעליה. 🏫"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הקשיבו ובחרו מה שמעתם!",
          say: "fête",
          choices: ["TÊTE", "FÊTE", "FAUTE"],
          answer: 1,
          explain: "FÊTE commence par F ! Le Ê porte un petit chapeau. 🎉",
          explainHe: "FÊTE (חג) מתחילה ב-F! על ה-Ê יש כובע קטן. 🎉"
        },
        {
          type: "type",
          prompt: "Écoute et écris le mot !",
          promptHe: "הקשיבו וכתבו את המילה!",
          say: "été",
          answer: "été",
          strict: false,
          explain: "ÉTÉ : É, T, É. Deux accents aigus ! ☀️",
          explainHe: "ÉTÉ (קיץ): É, T, É. שני סימנים! ☀️"
        },
        {
          type: "match",
          prompt: "Relie chaque mot à son image !",
          promptHe: "חברו כל מילה לתמונה שלה!",
          pairs: [["GÂTEAU", "🎂"], ["BATEAU", "⛵"], ["EAU", "💧"], ["VÉLO", "🚲"]],
          say: "gâteau. bateau. eau. vélo.",
          explain: "GÂTEAU 🎂, BATEAU ⛵, EAU 💧, VÉLO 🚲. Super !",
          explainHe: "GÂTEAU 🎂, BATEAU ⛵, EAU 💧, VÉLO 🚲. מעולה!"
        },
        {
          type: "read",
          prompt: "Lis cette phrase à voix haute !",
          promptHe: "קראו את המשפט בקול רם!",
          text: "C'EST L'ÉTÉ.\nLA FÊTE EST LÀ !",
          say: "c'est l'été. la fête est là !",
          explain: "Tu as lu É, Ê et À comme un champion ! 🌟",
          explainHe: "קראתם É, Ê ו-À כמו אלופים! 🌟"
        }
      ],
      joke: {
        q: "Qu'est-ce qui est plein de trous mais qui garde l'eau ?",
        a: "Une éponge !",
        qHe: "מה מלא חורים אבל שומר על המים?",
        aHe: "ספוג! 🧽"
      }
    },
    {
      id: "n5-s3",
      name: "Les lettres muettes",
      nameHe: "האותיות השקטות",
      emoji: "🤫",
      lesson: {
        cards: [
          {
            title: "Les lettres muettes",
            titleHe: "האותיות השקטות",
            body: "Parfois, la dernière lettre d'un mot ne se prononce pas : elle est muette ! Chut... 🤫",
            bodyHe: "לפעמים את האות האחרונה של מילה לא שומעים בכלל: היא שקטה! שששש... 🤫",
            big: "LAIT 🥛",
            say: "lait."
          },
          {
            title: "AI et AIN",
            titleHe: "AI ו-AIN",
            body: "AI se dit 'è' comme dans LAIT. AIN se dit 'in' comme dans PAIN.",
            bodyHe: "AI נשמע 'אֶה', כמו במילה LAIT (חלב). AIN נשמע כמו בסוף המילה PAIN (לחם): 'פֶּן'.",
            big: "AI • AIN",
            say: "è. lait. in. pain."
          },
          {
            title: "Cherche la lettre muette !",
            titleHe: "מצאו את האות השקטה!",
            body: "GRAND : D muet. TAPIS : S muet. LOUP : P muet. DEUX : X muet !",
            bodyHe: "GRAND: ה-D שקטה. TAPIS: ה-S שקטה. LOUP: ה-P שקטה. DEUX: ה-X שקטה!",
            big: "GRAND • TAPIS • LOUP",
            say: "grand. tapis. loup. deux."
          }
        ]
      },
      exercises: [
        {
          type: "pick",
          prompt: "Quelle lettre est muette dans LAIT ?",
          promptHe: "איזו אות שקטה במילה LAIT?",
          question: "LAIT",
          choices: ["L", "A", "T"],
          answer: 2,
          say: "lait",
          explain: "On dit 'lè' : le T de LAIT est muet ! 🥛",
          explainHe: "אומרים 'לֶה': את ה-T של LAIT (חלב) לא שומעים! 🥛"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הקשיבו ובחרו מה שמעתם!",
          say: "pain",
          choices: ["BAIN", "PAIN", "MAIN"],
          answer: 1,
          explain: "PAIN commence par P. AIN fait le son 'in'. 🍞",
          explainHe: "PAIN (לחם) מתחיל ב-P. שומעים 'פֶּן'. 🍞"
        },
        {
          type: "pick",
          prompt: "Quelle lettre est muette dans GRAND ?",
          promptHe: "איזו אות שקטה במילה GRAND?",
          question: "GRAND",
          choices: ["G", "D", "R"],
          answer: 1,
          say: "grand",
          explain: "On dit 'gran' : le D de GRAND est muet ! 💪",
          explainHe: "אומרים 'גְרַאן': את ה-D של GRAND (גדול) לא שומעים! 💪"
        },
        {
          type: "fill",
          prompt: "Complète le mot !",
          promptHe: "השלימו את המילה!",
          sentence: "LEVY BOIT DU L␣T.",
          choices: ["A", "AI", "È"],
          answer: 1,
          say: "levy boit du lait",
          explain: "Le son 'è' de LAIT s'écrit AI : L-A-I-T. 🥛",
          explainHe: "הצליל 'אֶה' של LAIT נכתב AI: L-A-I-T. 🥛"
        },
        {
          type: "build",
          prompt: "Assemble le mot TAPIS !",
          promptHe: "הרכיבו את המילה TAPIS!",
          tiles: ["PIS", "TA", "PI"],
          answer: ["TA", "PIS"],
          say: "tapis",
          explain: "TA + PIS = TAPIS. Le S de la fin est muet !",
          explainHe: "TA + PIS = TAPIS (שטיח). ה-S שבסוף שקטה!"
        },
        {
          type: "match",
          prompt: "Relie chaque mot à son image !",
          promptHe: "חברו כל מילה לתמונה שלה!",
          pairs: [["PAIN", "🍞"], ["LAIT", "🥛"], ["LOUP", "🐺"], ["MAIN", "✋"]],
          say: "pain. lait. loup. main.",
          explain: "PAIN 🍞, LAIT 🥛, LOUP 🐺, MAIN ✋. Bravo !",
          explainHe: "PAIN 🍞, LAIT 🥛, LOUP 🐺, MAIN ✋. כל הכבוד!"
        },
        {
          type: "type",
          prompt: "Écoute et écris le mot !",
          promptHe: "הקשיבו וכתבו את המילה!",
          say: "lait",
          answer: "lait",
          strict: false,
          explain: "LAIT : L, A, I, T. N'oublie pas le T muet de la fin ! 🥛",
          explainHe: "LAIT: L, A, I, T. אל תשכחו את ה-T השקטה בסוף! 🥛"
        },
        {
          type: "pick",
          prompt: "Entend-on le P à la fin de LOUP ?",
          promptHe: "האם שומעים את ה-P בסוף המילה LOUP?",
          question: "LOUP 🐺",
          choices: ["OUI", "NON"],
          answer: 1,
          say: "loup",
          explain: "On dit 'lou' : le P de LOUP est muet ! 🐺",
          explainHe: "אומרים 'לוּ': ה-P של LOUP (זאב) שקטה! 🐺"
        },
        {
          type: "pick",
          prompt: "Quel mot a une lettre muette à la fin ?",
          promptHe: "לאיזו מילה יש אות שקטה בסוף?",
          choices: ["SAC", "TAPIS", "BOL"],
          answer: 1,
          say: "tapis. sac. bol.",
          explain: "Dans TAPIS, le S est muet. Dans SAC et BOL, on entend tout !",
          explainHe: "ב-TAPIS ה-S שקטה. ב-SAC וב-BOL שומעים הכול!"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הקשיבו ובחרו מה שמעתם!",
          say: "deux",
          choices: ["DOUX", "DIX", "DEUX"],
          answer: 2,
          explain: "DEUX : on entend 'deu'. Le X est muet ! ✌️",
          explainHe: "DEUX (שתיים) נשמע 'דֶה': ה-X שקטה! ✌️"
        }
      ],
      joke: {
        q: "Qu'est-ce qui a un chapeau mais pas de tête ?",
        a: "Un champignon !",
        qHe: "למי יש כובע אבל אין לו ראש?",
        aHe: "פטרייה! גם בעברית קוראים לחלק העליון שלה 'כובע הפטרייה'! 🍄"
      }
    },
    {
      id: "n5-s4",
      name: "Le grand défi",
      nameHe: "האתגר הגדול",
      emoji: "🏆",
      lesson: {
        cards: [
          {
            title: "Le grand défi !",
            titleHe: "האתגר הגדול!",
            body: "Bravo ! Tu connais OI, EU, AU, EAU, les accents et les lettres muettes. Montre tout ce que tu sais !",
            bodyHe: "כל הכבוד! אתם כבר מכירים את OI, EU, AU, EAU, את הסימנים ואת האותיות השקטות. עכשיו תראו לי הכול! 🏆",
            big: "🏆",
            say: "Bonne chance, champion !"
          }
        ]
      },
      exercises: [
        {
          type: "pick",
          prompt: "Quel mot a le son 'oi' ?",
          promptHe: "באיזו מילה יש את הצליל 'oi'?",
          choices: ["MAISON", "POISSON", "BALLON"],
          answer: 1,
          say: "poisson. maison. ballon.",
          explain: "POISSON a le son 'oi' : POI ! MAISON a 'ai', BALLON a 'on'. 🐟",
          explainHe: "ב-POISSON שומעים 'וַא': POI! ב-MAISON יש 'אֶה', ב-BALLON יש 'אוֹן'. 🐟"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הקשיבו ובחרו מה שמעתם!",
          say: "bateau",
          choices: ["GÂTEAU", "CADEAU", "BATEAU"],
          answer: 2,
          explain: "BATEAU commence par BA ! ⛵",
          explainHe: "BATEAU מתחיל ב-BA! ⛵"
        },
        {
          type: "fill",
          prompt: "Complète le mot !",
          promptHe: "השלימו את המילה!",
          sentence: "LE ROI A UN GÂT␣.",
          choices: ["EAU", "O", "EU"],
          answer: 0,
          say: "le roi a un gâteau",
          explain: "GÂTEAU se termine par EAU, comme BATEAU ! 🎂",
          explainHe: "GÂTEAU נגמר ב-EAU, בדיוק כמו BATEAU! 🎂"
        },
        {
          type: "build",
          prompt: "Assemble le mot JEUDI !",
          promptHe: "הרכיבו את המילה JEUDI!",
          tiles: ["DI", "JEU", "DA"],
          answer: ["JEU", "DI"],
          say: "jeudi",
          explain: "JEU + DI = JEUDI, le jour de la semaine ! 📅",
          explainHe: "JEU + DI = JEUDI (יום חמישי)! 📅"
        },
        {
          type: "type",
          prompt: "Écoute et écris le mot !",
          promptHe: "הקשיבו וכתבו את המילה!",
          say: "roi",
          answer: "roi",
          strict: false,
          explain: "ROI : R, O, I. Le son 'oi' s'écrit O-I. 👑",
          explainHe: "ROI (מלך): R, O, I. הצליל 'וַא' נכתב O-I. 👑"
        },
        {
          type: "pick",
          prompt: "Quel mot porte un accent circonflexe (chapeau) ?",
          promptHe: "לאיזו מילה יש כובע קטן (אקסנט סירקונפלקס)?",
          choices: ["ÉTÉ", "TÊTE", "LÀ"],
          answer: 1,
          say: "tête. été. là.",
          explain: "TÊTE a un chapeau sur le E : Ê ! ÉTÉ a des accents aigus, LÀ un accent grave.",
          explainHe: "ל-TÊTE יש כובע על ה-E: Ê! ל-ÉTÉ ול-LÀ יש סימנים אחרים."
        },
        {
          type: "match",
          prompt: "Relie chaque mot à son image !",
          promptHe: "חברו כל מילה לתמונה שלה!",
          pairs: [["FEU", "🔥"], ["EAU", "💧"], ["JAUNE", "🟡"], ["BLEU", "🔵"]],
          say: "feu. eau. jaune. bleu.",
          explain: "FEU 🔥, EAU 💧, JAUNE 🟡, BLEU 🔵. Champion !",
          explainHe: "FEU 🔥, EAU 💧, JAUNE 🟡, BLEU 🔵. אלופים!"
        },
        {
          type: "pick",
          prompt: "Quelle lettre est muette dans DEUX ?",
          promptHe: "איזו אות שקטה במילה DEUX?",
          question: "DEUX",
          choices: ["D", "E", "X"],
          answer: 2,
          say: "deux",
          explain: "Le X de DEUX est muet : on dit 'deu' ! ✌️",
          explainHe: "את ה-X של DEUX לא שומעים: אומרים 'דֶה'! ✌️"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הקשיבו ובחרו מה שמעתם!",
          say: "moi",
          choices: ["MAI", "MOI", "MOU"],
          answer: 1,
          explain: "MOI s'écrit M-O-I : c'est le son 'oi' ! 😄",
          explainHe: "MOI (אני) נכתב M-O-I: זה הצליל 'וַא'! 😄"
        },
        {
          type: "fill",
          prompt: "Complète le mot !",
          promptHe: "השלימו את המילה!",
          sentence: "LA F␣TE DE HANOUKA ARRIVE !",
          choices: ["É", "Ê", "E"],
          answer: 1,
          say: "la fête de hanouka arrive",
          explain: "FÊTE s'écrit avec Ê, le petit chapeau ! 🕎",
          explainHe: "FÊTE נכתבת עם Ê, הכובע הקטן! 🕎"
        },
        {
          type: "riddle",
          prompt: "Devinette !",
          promptHe: "חידה!",
          question: "Mon premier est un animal qui miaule.\nMon second recouvre tout ton corps.\nMon tout se porte sur la tête.",
          choices: ["BATEAU", "CHAPEAU", "MANTEAU"],
          answer: 1,
          say: "Mon premier est un animal qui miaule. Mon second recouvre tout ton corps. Mon tout se porte sur la tête.",
          explain: "CHAT + PEAU = CHAPEAU ! Et il se termine par EAU. 🎩",
          explainHe: "CHAT (חתול) + PEAU (עור) = CHAPEAU (כובע)! והוא נגמר ב-EAU. 🎩"
        },
        {
          type: "read",
          prompt: "Lis ces phrases à voix haute !",
          promptHe: "קראו את המשפטים בקול רם!",
          text: "MOI, JE LIS !\nLE ROI A UN BATEAU JAUNE.\nMAZAL TOV, CHAMPION !",
          say: "moi, je lis ! le roi a un bateau jaune. mazal tov, champion !",
          explain: "Tu as tout lu : OI, AU, EAU ! Mazal Tov ! 🏆",
          explainHe: "קראתם הכול: OI, AU, EAU! מזל טוב! 🏆"
        }
      ],
      joke: {
        q: "Qu'est-ce qui a des aiguilles mais ne pique jamais ?",
        a: "Une horloge !",
        qHe: "למי יש מחטים אבל הוא אף פעם לא דוקר?",
        aHe: "שעון! בצרפתית למחוגים של השעון קוראים 'aiguilles', כלומר מחטים! ⏰"
      }
    }
  ]
});
