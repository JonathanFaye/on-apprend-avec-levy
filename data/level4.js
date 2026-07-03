window.LEVELS = window.LEVELS || [];
window.LEVELS.push({
  id: "n4",
  order: 4,
  name: "Les sons magiques",
  nameHe: "הצלילים הקסומים",
  emoji: "✨",
  color: "#2E7D32",
  tagline: "Deux lettres, un seul son !",
  taglineHe: "שתי אותיות, צליל אחד!",
  sublevels: [
    {
      id: "n4-s1",
      name: "CH et OU",
      nameHe: "CH ו-OU",
      emoji: "🐱",
      lesson: {
        cards: [
          {
            title: "Le son CH",
            titleHe: "הצליל CH",
            body: "C et H ensemble font un seul son : 'ch', comme dans CHAT. Deux lettres = un son magique !",
            bodyHe: "C ו-H ביחד עושות צליל אחד: 'שְׁ', כמו במילה CHAT (חתול). שתי אותיות = צליל אחד קסום!",
            big: "CH",
            say: "che. chat. chalom."
          },
          {
            title: "Des mots avec CH",
            titleHe: "מילים עם CH",
            body: "CHAT, CHALOM, CHAPEAU, CHOU. Tu entends 'ch' au début de chaque mot !",
            bodyHe: "CHAT (חתול), CHALOM (שלום), CHAPEAU (כובע), CHOU (כרוב). שומעים 'שְׁ' בתחילת כל מילה!",
            big: "CHAT",
            say: "chat. chalom. chapeau. chou."
          },
          {
            title: "Le son OU",
            titleHe: "הצליל OU",
            body: "O et U ensemble font le son 'ou', comme dans CHOU et POULE !",
            bodyHe: "O ו-U ביחד עושות את הצליל 'אוּ', כמו במילים CHOU (כרוב) ו-POULE (תרנגולת)!",
            big: "OU",
            say: "ou. chou. poule. roue."
          }
        ]
      },
      exercises: [
        {
          type: "pick",
          prompt: "Quelles lettres font le son 'ch' de CHAT ?",
          promptHe: "אילו אותיות עושות את הצליל 'ch' של CHAT?",
          question: "CHAT 🐱",
          choices: ["CH", "CA", "AT"],
          answer: 0,
          say: "che. chat.",
          explain: "C et H ensemble font le son 'ch', comme dans CHAT !",
          explainHe: "C ו-H ביחד עושות את הצליל 'שְׁ', כמו במילה CHAT!"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הקשיבו ובחרו מה שמעתם!",
          say: "chat",
          choices: ["CHAT", "RAT", "CHOU"],
          answer: 0,
          explain: "Tu as entendu CHAT : ça commence par le son 'ch' ! 🐱",
          explainHe: "שמעתם CHAT (חתול): המילה מתחילה בצליל 'שְׁ'! 🐱"
        },
        {
          type: "pick",
          prompt: "Quel mot veut dire 🐱 ?",
          promptHe: "איזו מילה אומרת 🐱?",
          question: "🐱",
          choices: ["CHAT", "CHOU", "SAC"],
          answer: 0,
          say: "chat",
          explain: "🐱 c'est le CHAT : CH + A + T. Le T de la fin est muet !",
          explainHe: "🐱 זה CHAT (חתול): CH + A + T. את ה-T שבסוף לא שומעים!"
        },
        {
          type: "build",
          prompt: "Assemble le mot CHOU !",
          promptHe: "הרכיבו את המילה CHOU!",
          tiles: ["OU", "CH", "AT"],
          answer: ["CH", "OU"],
          say: "chou",
          explain: "CH + OU = CHOU ! Deux sons magiques dans un petit mot. 🥬",
          explainHe: "CH + OU = CHOU (כרוב)! שני צלילים קסומים במילה קטנה אחת. 🥬"
        },
        {
          type: "fill",
          prompt: "Complète le mot !",
          promptHe: "השלימו את המילה!",
          sentence: "LEVY A UNE P␣LE.",
          choices: ["OU", "ON", "OI"],
          answer: 0,
          say: "poule",
          explain: "P + OU + LE = POULE ! 🐔",
          explainHe: "P + OU + LE = POULE (תרנגולת)! 🐔"
        },
        {
          type: "match",
          prompt: "Relie chaque mot à son image !",
          promptHe: "חברו כל מילה לתמונה שלה!",
          pairs: [["CHAT", "🐱"], ["POULE", "🐔"], ["CHOU", "🥬"]],
          explain: "CHAT 🐱, POULE 🐔, CHOU 🥬 : on entend 'ch' et 'ou' !",
          explainHe: "CHAT זה חתול 🐱, POULE זה תרנגולת 🐔, CHOU זה כרוב 🥬!"
        },
        {
          type: "listen",
          prompt: "Écoute ! Quelles lettres font ce son ?",
          promptHe: "הקשיבו! אילו אותיות עושות את הצליל הזה?",
          say: "ou",
          choices: ["OU", "O", "U"],
          answer: 0,
          explain: "Le son 'ou' s'écrit avec deux lettres : O et U ensemble !",
          explainHe: "את הצליל 'אוּ' כותבים עם שתי אותיות: O ו-U ביחד!"
        },
        {
          type: "read",
          prompt: "Lis cette phrase à voix haute !",
          promptHe: "קראו את המשפט בקול רם!",
          text: "LE CHAT A VU LA POULE.",
          say: "le chat a vu la poule.",
          explain: "Bravo ! CHAT avec le son 'ch', POULE avec le son 'ou'.",
          explainHe: "כל הכבוד! CHAT עם הצליל 'שְׁ', POULE עם הצליל 'אוּ'."
        },
        {
          type: "pick",
          prompt: "Dans CHOU, on entend le son 'ou'. Vrai ou faux ?",
          promptHe: "במילה CHOU שומעים את הצליל 'אוּ'. נכון (VRAI) או לא (FAUX)?",
          question: "CHOU 🥬",
          choices: ["VRAI", "FAUX"],
          answer: 0,
          say: "chou",
          explain: "Vrai ! CHOU = CH + OU. On entend bien 'ou' !",
          explainHe: "נכון! CHOU = CH + OU. שומעים היטב 'אוּ'!"
        }
      ],
      joke: {
        q: "Quel fruit les poissons n'aiment-ils pas ?",
        a: "La pêche !",
        qHe: "איזה פרי הדגים לא אוהבים?",
        aHe: "האפרסק! בצרפתית 'pêche' זה גם אפרסק וגם דיג, והדגים מפחדים מדיג!"
      }
    },
    {
      id: "n4-s2",
      name: "ON et AN",
      nameHe: "ON ו-AN",
      emoji: "🍬",
      lesson: {
        cards: [
          {
            title: "Le son ON",
            titleHe: "הצליל ON",
            body: "O et N ensemble font le son 'on', comme dans BONBON ! On le dit un peu avec le nez.",
            bodyHe: "O ו-N ביחד עושות את הצליל 'ON', כמו במילה BONBON (סוכריה)! אומרים אותו קצת עם האף.",
            big: "ON",
            say: "on. bonbon."
          },
          {
            title: "Des mots avec ON",
            titleHe: "מילים עם ON",
            body: "BONBON, PONT, ROND, MOUTON. Le son 'on' se cache partout !",
            bodyHe: "BONBON (סוכריה), PONT (גשר), ROND (עגול), MOUTON (כבשה). הצליל 'ON' מתחבא בכל מקום!",
            big: "BONBON",
            say: "bonbon. pont. rond. mouton."
          },
          {
            title: "Le son AN",
            titleHe: "הצליל AN",
            body: "A et N ensemble font le son 'an', comme dans GRAND. Attention : le D à la fin de GRAND est muet, on ne l'entend pas !",
            bodyHe: "A ו-N ביחד עושות את הצליל 'AN', כמו במילה GRAND (גדול). שימו לב: ה-D בסוף המילה GRAND שקטה, לא שומעים אותה!",
            big: "AN",
            say: "an. grand. plante. chant."
          }
        ]
      },
      exercises: [
        {
          type: "pick",
          prompt: "Quelles lettres font le son 'on' de BONBON ?",
          promptHe: "אילו אותיות עושות את הצליל 'on' של BONBON?",
          question: "BONBON 🍬",
          choices: ["ON", "AN", "OU"],
          answer: 0,
          say: "on. bonbon.",
          explain: "O et N ensemble font le son 'on', comme dans BONBON !",
          explainHe: "O ו-N ביחד עושות את הצליל 'ON', כמו במילה BONBON!"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הקשיבו ובחרו מה שמעתם!",
          say: "bonbon",
          choices: ["BONBON", "BALLON", "BANANE"],
          answer: 0,
          explain: "Tu as entendu BONBON : deux fois le son 'on' ! 🍬",
          explainHe: "שמעתם BONBON (סוכריה): פעמיים הצליל 'ON'! 🍬"
        },
        {
          type: "build",
          prompt: "Assemble le mot MOUTON !",
          promptHe: "הרכיבו את המילה MOUTON!",
          tiles: ["TON", "MOU", "MON"],
          answer: ["MOU", "TON"],
          say: "mouton",
          explain: "MOU + TON = MOUTON ! On entend 'ou' puis 'on'. 🐑",
          explainHe: "MOU + TON = MOUTON (כבשה)! שומעים 'אוּ' ואז 'ON'. 🐑"
        },
        {
          type: "fill",
          prompt: "Complète le mot !",
          promptHe: "השלימו את המילה!",
          sentence: "LEVY A UN B␣BON.",
          choices: ["ON", "AN", "OU"],
          answer: 0,
          say: "bonbon",
          explain: "B + ON + BON = BONBON ! 🍬",
          explainHe: "B + ON + BON = BONBON (סוכריה)! 🍬"
        },
        {
          type: "pick",
          prompt: "Quel mot veut dire 🐑 ?",
          promptHe: "איזו מילה אומרת 🐑?",
          question: "🐑",
          choices: ["MOUTON", "BOUTON", "MENTON"],
          answer: 0,
          say: "mouton",
          explain: "🐑 c'est le MOUTON ! BOUTON et MENTON se ressemblent, mais ce n'est pas pareil.",
          explainHe: "🐑 זה MOUTON (כבשה)! BOUTON (כפתור) ו-MENTON (סנטר) דומות, אבל זה לא אותו דבר."
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הקשיבו ובחרו מה שמעתם!",
          say: "grand",
          choices: ["GRAND", "ROND", "GRIS"],
          answer: 0,
          explain: "Tu as entendu GRAND, avec le son 'an'. Le D de la fin est muet !",
          explainHe: "שמעתם GRAND (גדול), עם הצליל 'AN'. את ה-D שבסוף לא שומעים!"
        },
        {
          type: "fill",
          prompt: "Complète le mot !",
          promptHe: "השלימו את המילה!",
          sentence: "LEVY A UNE PL␣TE VERTE.",
          choices: ["AN", "ON", "IN"],
          answer: 0,
          say: "plante",
          explain: "PL + AN + TE = PLANTE ! 🌱",
          explainHe: "PL + AN + TE = PLANTE (צמח)! 🌱"
        },
        {
          type: "pick",
          prompt: "Le D à la fin de GRAND est muet. Vrai ou faux ?",
          promptHe: "ה-D בסוף המילה GRAND שקטה. נכון (VRAI) או לא (FAUX)?",
          question: "GRAND",
          choices: ["VRAI", "FAUX"],
          answer: 0,
          say: "grand",
          explain: "Vrai ! On dit 'gran' : le D de la fin ne se prononce pas.",
          explainHe: "נכון! אומרים 'גְרַאן': את ה-D שבסוף לא מבטאים."
        },
        {
          type: "match",
          prompt: "Relie chaque mot à son image !",
          promptHe: "חברו כל מילה לתמונה שלה!",
          pairs: [["BONBON", "🍬"], ["MOUTON", "🐑"], ["PONT", "🌉"], ["PLANTE", "🌱"]],
          explain: "BONBON 🍬, MOUTON 🐑, PONT 🌉, PLANTE 🌱 : partout des sons magiques !",
          explainHe: "BONBON סוכריה 🍬, MOUTON כבשה 🐑, PONT גשר 🌉, PLANTE צמח 🌱: צלילים קסומים בכל מקום!"
        },
        {
          type: "read",
          prompt: "Lis cette phrase à voix haute !",
          promptHe: "קראו את המשפט בקול רם!",
          text: "LE GRAND MOUTON DANSE.",
          say: "le grand mouton danse.",
          explain: "Bravo ! GRAND avec 'an', MOUTON avec 'ou' et 'on', DANSE avec 'an'.",
          explainHe: "כל הכבוד! GRAND עם 'AN', MOUTON עם 'OU' ו-'ON', DANSE עם 'AN'."
        }
      ],
      joke: {
        q: "Pourquoi le citron traverse-t-il la rue en courant ?",
        a: "Parce qu'il est pressé !",
        qHe: "למה הלימון חוצה את הכביש בריצה?",
        aHe: "כי הוא 'pressé'! בצרפתית זה גם 'ממהר' וגם 'סחוט', לימון סחוט שממהר!"
      }
    },
    {
      id: "n4-s3",
      name: "IN et nos mots",
      nameHe: "IN והמילים שלנו",
      emoji: "🐰",
      lesson: {
        cards: [
          {
            title: "Le son IN",
            titleHe: "הצליל IN",
            body: "I et N ensemble font le son 'in', comme dans LAPIN ! Encore un son qu'on dit avec le nez.",
            bodyHe: "I ו-N ביחד עושות את הצליל 'IN', כמו במילה LAPIN (ארנב)! עוד צליל שאומרים קצת עם האף.",
            big: "IN",
            say: "hein. lapin."
          },
          {
            title: "Des mots avec IN",
            titleHe: "מילים עם IN",
            body: "LAPIN, MATIN, SAPIN, MOULIN. Tu entends 'in' à la fin de chaque mot !",
            bodyHe: "LAPIN (ארנב), MATIN (בוקר), SAPIN (אשוח), MOULIN (טחנה). שומעים 'IN' בסוף כל מילה!",
            big: "LAPIN",
            say: "lapin. matin. sapin. moulin."
          },
          {
            title: "Des mots qu'on connaît déjà !",
            titleHe: "מילים שאנחנו כבר מכירים!",
            body: "CHALOM, BONJOUR, MAZAL TOV ! Tu les dis déjà à la maison. Regarde : CH, ON, OU... les sons magiques sont partout !",
            bodyHe: "CHALOM, BONJOUR, MAZAL TOV! אתם כבר אומרים אותן בבית. תראו: CH, ON, OU... הצלילים הקסומים נמצאים בכל מקום!",
            big: "CHALOM",
            say: "chalom. bonjour. mazal tov."
          }
        ]
      },
      exercises: [
        {
          type: "pick",
          prompt: "Quelles lettres font le son 'in' de LAPIN ?",
          promptHe: "אילו אותיות עושות את הצליל 'in' של LAPIN?",
          question: "LAPIN 🐰",
          choices: ["IN", "ON", "AN"],
          answer: 0,
          say: "hein. lapin.",
          explain: "I et N ensemble font le son 'in', comme à la fin de LAPIN !",
          explainHe: "I ו-N ביחד עושות את הצליל 'IN', כמו בסוף המילה LAPIN!"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הקשיבו ובחרו מה שמעתם!",
          say: "lapin",
          choices: ["LAPIN", "SAPIN", "MATIN"],
          answer: 0,
          explain: "Tu as entendu LAPIN ! Les trois mots finissent par 'in', écoute bien le début. 🐰",
          explainHe: "שמעתם LAPIN (ארנב)! שלוש המילים נגמרות ב-'IN', מקשיבים טוב להתחלה. 🐰"
        },
        {
          type: "build",
          prompt: "Assemble le mot MATIN !",
          promptHe: "הרכיבו את המילה MATIN!",
          tiles: ["TIN", "MA", "MOU"],
          answer: ["MA", "TIN"],
          say: "matin",
          explain: "MA + TIN = MATIN ! C'est le début de la journée. ☀️",
          explainHe: "MA + TIN = MATIN (בוקר)! זו תחילת היום. ☀️"
        },
        {
          type: "fill",
          prompt: "Complète le mot !",
          promptHe: "השלימו את המילה!",
          sentence: "LEVY A UN GRAND SAP␣.",
          choices: ["IN", "ON", "OU"],
          answer: 0,
          say: "sapin",
          explain: "SAP + IN = SAPIN ! Un grand arbre vert. 🌲",
          explainHe: "SAP + IN = SAPIN (אשוח)! עץ ירוק וגדול. 🌲"
        },
        {
          type: "type",
          prompt: "Écoute et écris le mot !",
          promptHe: "הקשיבו וכתבו את המילה!",
          say: "chou",
          answer: "chou",
          strict: false,
          explain: "CHOU s'écrit CH + OU : deux sons magiques, quatre lettres ! 🥬",
          explainHe: "CHOU (כרוב) נכתב CH + OU: שני צלילים קסומים, ארבע אותיות! 🥬"
        },
        {
          type: "match",
          prompt: "Relie chaque mot à son image !",
          promptHe: "חברו כל מילה לתמונה שלה!",
          pairs: [["LAPIN", "🐰"], ["CHAT", "🐱"], ["MOUTON", "🐑"], ["POULE", "🐔"]],
          explain: "LAPIN 🐰, CHAT 🐱, MOUTON 🐑, POULE 🐔 : tous nos animaux avec des sons magiques !",
          explainHe: "LAPIN ארנב 🐰, CHAT חתול 🐱, MOUTON כבשה 🐑, POULE תרנגולת 🐔: כל החיות שלנו עם צלילים קסומים!"
        },
        {
          type: "pick",
          prompt: "Trouve le mot CHALOM !",
          promptHe: "מצאו את המילה CHALOM!",
          question: "שלום",
          choices: ["CHALOM", "CHALON", "CHAMOL"],
          answer: 0,
          say: "chalom",
          explain: "CHALOM = CH + A + L + O + M. Le mot qu'on dit tous les jours !",
          explainHe: "CHALOM = CH + A + L + O + M. המילה שאנחנו אומרים כל יום!"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הקשיבו ובחרו מה שמעתם!",
          say: "bonjour",
          choices: ["BONJOUR", "BONBON", "TOUJOURS"],
          answer: 0,
          explain: "Tu as entendu BONJOUR : le son 'on' puis le son 'ou' ! 👋",
          explainHe: "שמעתם BONJOUR (שלום, בוקר טוב): הצליל 'ON' ואז הצליל 'OU'! 👋"
        },
        {
          type: "pick",
          prompt: "Ton ami gagne au foot. Que dis-tu ?",
          promptHe: "חבר שלכם ניצח בכדורגל. מה תגידו?",
          choices: ["MAZAL TOV !", "BONBON !", "MOUTON !"],
          answer: 0,
          say: "mazal tov",
          explain: "MAZAL TOV ! C'est ce qu'on dit pour féliciter. 🎉",
          explainHe: "MAZAL TOV! זה מה שאומרים כדי לברך. 🎉"
        },
        {
          type: "read",
          prompt: "Lis cette phrase à voix haute !",
          promptHe: "קראו את המשפט בקול רם!",
          text: "CHALOM ! LE MATIN, LE LAPIN DIT BONJOUR.",
          say: "chalom ! le matin, le lapin dit bonjour.",
          explain: "Bravo ! Tu as lu CHALOM, MATIN, LAPIN et BONJOUR : quatre mots avec des sons magiques !",
          explainHe: "כל הכבוד! קראתם CHALOM, MATIN, LAPIN ו-BONJOUR: ארבע מילים עם צלילים קסומים!"
        }
      ],
      joke: {
        q: "Pourquoi la banane met-elle de la crème solaire ?",
        a: "Pour ne pas peler !",
        qHe: "למה הבננה מורחת קרם הגנה?",
        aHe: "כדי לא להתקלף!"
      }
    },
    {
      id: "n4-s4",
      name: "Le grand défi",
      nameHe: "האתגר הגדול",
      emoji: "🏆",
      lesson: {
        cards: [
          {
            title: "Le grand défi !",
            titleHe: "האתגר הגדול!",
            body: "Bravo ! Tu connais les 5 sons magiques : CH, OU, ON, AN, IN. Levy est fier de toi. À toi de jouer !",
            bodyHe: "כל הכבוד! אתם מכירים את 5 הצלילים הקסומים: CH, OU, ON, AN, IN. Levy גאה בכם. עכשיו תורכם לשחק!",
            big: "CH OU ON AN IN",
            say: "che. ou. on. an. hein."
          }
        ]
      },
      exercises: [
        {
          type: "match",
          prompt: "Relie chaque son au mot où on l'entend !",
          promptHe: "חברו כל צליל למילה שבה שומעים אותו!",
          pairs: [["CH", "CHAT"], ["OU", "POULE"], ["ON", "PONT"], ["AN", "PLANTE"]],
          explain: "CH dans CHAT, OU dans POULE, ON dans PONT, AN dans PLANTE !",
          explainHe: "CH במילה CHAT, OU במילה POULE, ON במילה PONT, AN במילה PLANTE!"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הקשיבו ובחרו מה שמעתם!",
          say: "chanson",
          choices: ["CHANSON", "CHALOM", "BONBON"],
          answer: 0,
          explain: "Tu as entendu CHANSON : CH + AN + SON, trois sons magiques dans un mot ! 🎵",
          explainHe: "שמעתם CHANSON (שיר): CH + AN + SON, שלושה צלילים קסומים במילה אחת! 🎵"
        },
        {
          type: "pick",
          prompt: "Trouve le mot avec le son 'in' !",
          promptHe: "מצאו את המילה עם הצליל 'in'!",
          choices: ["MOULIN", "MOUTON", "CHALOM"],
          answer: 0,
          say: "moulin",
          explain: "MOULIN finit par 'in' : MOU + LIN ! MOUTON finit par 'on'.",
          explainHe: "MOULIN (טחנה) נגמרת ב-'IN': MOU + LIN! MOUTON נגמרת ב-'ON'."
        },
        {
          type: "build",
          prompt: "Assemble le mot BONJOUR !",
          promptHe: "הרכיבו את המילה BONJOUR!",
          tiles: ["JOUR", "BON", "BAN"],
          answer: ["BON", "JOUR"],
          say: "bonjour",
          explain: "BON + JOUR = BONJOUR ! Le son 'on' puis le son 'ou'. 👋",
          explainHe: "BON + JOUR = BONJOUR! הצליל 'ON' ואז הצליל 'OU'. 👋"
        },
        {
          type: "fill",
          prompt: "Complète le mot !",
          promptHe: "השלימו את המילה!",
          sentence: "LE LAP␣ MANGE UNE CAROTTE.",
          choices: ["IN", "OU", "AN"],
          answer: 0,
          say: "lapin",
          explain: "LAP + IN = LAPIN ! Il adore les carottes. 🐰🥕",
          explainHe: "LAP + IN = LAPIN (ארנב)! הוא מת על גזר. 🐰🥕"
        },
        {
          type: "pick",
          prompt: "Dans MOUTON, on entend 'ou' et 'on'. Vrai ou faux ?",
          promptHe: "במילה MOUTON שומעים 'ou' וגם 'on'. נכון (VRAI) או לא (FAUX)?",
          question: "MOUTON 🐑",
          choices: ["VRAI", "FAUX"],
          answer: 0,
          say: "mouton",
          explain: "Vrai ! MOU + TON : d'abord 'ou', puis 'on'. Deux sons magiques !",
          explainHe: "נכון! MOU + TON: קודם 'OU', אחר כך 'ON'. שני צלילים קסומים!"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הקשיבו ובחרו מה שמעתם!",
          say: "rond",
          choices: ["ROND", "GRAND", "ROUE"],
          answer: 0,
          explain: "Tu as entendu ROND, avec le son 'on'. GRAND a le son 'an' : écoute la différence !",
          explainHe: "שמעתם ROND (עגול), עם הצליל 'ON'. ב-GRAND יש את הצליל 'AN': מקשיבים להבדל!"
        },
        {
          type: "riddle",
          prompt: "Devinette !",
          promptHe: "חידה!",
          question: "Mon premier est le contraire de MAUVAIS.\nMon second est pareil que mon premier.\nMon tout est sucré et se mange.",
          choices: ["BONBON", "MOUTON", "BONJOUR"],
          answer: 0,
          say: "mon premier est le contraire de mauvais. mon second est pareil que mon premier. mon tout est sucré et se mange.",
          explain: "BON + BON = BONBON ! Deux fois le son 'on'. 🍬",
          explainHe: "BON (טוב) + BON = BONBON (סוכריה)! פעמיים הצליל 'ON'. 🍬"
        },
        {
          type: "match",
          prompt: "Relie chaque mot à son image !",
          promptHe: "חברו כל מילה לתמונה שלה!",
          pairs: [["CHALOM", "👋"], ["BONBON", "🍬"], ["SAPIN", "🌲"], ["LAPIN", "🐰"]],
          explain: "CHALOM 👋, BONBON 🍬, SAPIN 🌲, LAPIN 🐰 : tu as tout relié !",
          explainHe: "CHALOM שלום 👋, BONBON סוכריה 🍬, SAPIN אשוח 🌲, LAPIN ארנב 🐰: חיברתם הכול!"
        },
        {
          type: "fill",
          prompt: "Complète le mot !",
          promptHe: "השלימו את המילה!",
          sentence: "LE GR␣D CHAT DANSE.",
          choices: ["AN", "ON", "IN"],
          answer: 0,
          say: "grand",
          explain: "GR + AN + D = GRAND ! Et le D de la fin est muet.",
          explainHe: "GR + AN + D = GRAND (גדול)! ואת ה-D שבסוף לא שומעים."
        },
        {
          type: "pick",
          prompt: "Trouve le mot avec le son 'an' !",
          promptHe: "מצאו את המילה עם הצליל 'an'!",
          choices: ["CHANT", "CHAT", "CHOU"],
          answer: 0,
          say: "chant",
          explain: "CHANT = CH + AN + T muet : on dit 'chan' ! CHAT et CHOU n'ont pas de 'an'.",
          explainHe: "CHANT (שירה) = CH + AN + T שקטה: אומרים 'שָׁאן'! ב-CHAT וב-CHOU אין 'AN'."
        },
        {
          type: "read",
          prompt: "Lis cette phrase à voix haute !",
          promptHe: "קראו את המשפט בקול רם!",
          text: "LE MATIN, LE GRAND MOUTON CHANTE UNE CHANSON.",
          say: "le matin, le grand mouton chante une chanson.",
          explain: "Bravo, champion ! Tu as lu les 5 sons magiques dans une seule phrase !",
          explainHe: "כל הכבוד, אלופים! קראתם את חמשת הצלילים הקסומים במשפט אחד!"
        }
      ],
      joke: {
        q: "Quel fromage est fort comme un rocher ?",
        a: "Le roquefort ! (ROC-FORT : un roc très fort !)",
        qHe: "איזו גבינה חזקה כמו סלע?",
        aHe: "רוקפור! בצרפתית ROC זה סלע ו-FORT זה חזק: ROC-FORT!"
      }
    }
  ]
});
