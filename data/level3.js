window.LEVELS = window.LEVELS || [];
window.LEVELS.push({
  id: "n3",
  order: 3,
  name: "Premiers mots",
  nameHe: "מילים ראשונות",
  emoji: "📚",
  color: "#E65100",
  tagline: "Je lis mes premiers mots !",
  taglineHe: "אני קורא את המילים הראשונות שלי!",
  sublevels: [
    {
      id: "n3-s1",
      name: "V et N",
      nameHe: "V ו-N",
      emoji: "🚢",
      lesson: {
        cards: [
          {
            title: "La lettre V",
            titleHe: "האות V",
            body: "La lettre V fait le son 'vvv' comme dans NAVIRE. Lis de gauche à droite : VA VE VI VO VU.",
            bodyHe: "האות V עושה את הצליל 'ווו' כמו במילה NAVIRE. קראו משמאל לימין: VA VE VI VO VU.",
            big: "VA VE VI VO VU",
            say: "va. ve. vi. vo. vu."
          },
          {
            title: "La lettre N",
            titleHe: "האות N",
            body: "La lettre N fait le son 'nnn' comme dans LUNE. Lis : NA NE NI NO NU.",
            bodyHe: "האות N עושה את הצליל 'ננן' כמו במילה LUNE. קראו: NA NE NI NO NU.",
            big: "NA NE NI NO NU",
            say: "na. ne. ni. no. nu."
          },
          {
            title: "Des syllabes aux mots",
            titleHe: "מהברות למילים",
            body: "On colle les syllabes pour lire des mots entiers : NA + VI + RE = NAVIRE !",
            bodyHe: "מחברים את ההברות כדי לקרוא מילים שלמות: NA + VI + RE = NAVIRE!",
            big: "NA-VI-RE 🚢",
            say: "na. vi. re. navire !"
          }
        ]
      },
      exercises: [
        {
          type: "pick",
          prompt: "Trouve la lettre V !",
          promptHe: "מצאו את האות V!",
          choices: ["U", "V", "N"],
          answer: 1,
          say: "vé",
          explain: "V est pointue en bas. U est arrondie en bas.",
          explainHe: "V מחודדת למטה. U מעוגלת למטה."
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הקשיבו ובחרו מה שמעתם!",
          say: "va",
          choices: ["NA", "VA", "MA"],
          answer: 1,
          explain: "On entend 'vvv' au début : c'est VA.",
          explainHe: "שומעים 'ווו' בהתחלה: זה VA."
        },
        {
          type: "listen",
          prompt: "Écoute bien et choisis la syllabe !",
          promptHe: "הקשיבו טוב ובחרו את ההברה!",
          say: "ni",
          choices: ["NU", "VI", "NI"],
          answer: 2,
          explain: "'nnn' + 'i' = NI.",
          explainHe: "'ננן' ועוד 'אִי' = NI."
        },
        {
          type: "pick",
          prompt: "Quelle syllabe commence le mot NAVIRE ?",
          promptHe: "באיזו הברה מתחילה המילה NAVIRE?",
          question: "NAVIRE 🚢",
          choices: ["NA", "VA", "MA"],
          answer: 0,
          say: "navire",
          explain: "NA-VI-RE : on entend NA en premier.",
          explainHe: "NA-VI-RE: שומעים NA בהתחלה."
        },
        {
          type: "build",
          prompt: "Assemble le mot NAVIRE !",
          promptHe: "הרכיבו את המילה NAVIRE!",
          tiles: ["VI", "NA", "RE", "MO"],
          answer: ["NA", "VI", "RE"],
          say: "navire",
          explain: "NA + VI + RE = NAVIRE, le grand bateau ! 🚢",
          explainHe: "NA + VI + RE = NAVIRE, האונייה הגדולה! 🚢"
        },
        {
          type: "fill",
          prompt: "Complète le mot !",
          promptHe: "השלימו את המילה!",
          sentence: "LU␣E 🌙",
          choices: ["M", "N", "V"],
          answer: 1,
          say: "lune",
          explain: "On entend 'nnn' au milieu : LUNE.",
          explainHe: "שומעים 'ננן' באמצע: LUNE."
        },
        {
          type: "match",
          prompt: "Relie chaque mot à son image !",
          promptHe: "חברו כל מילה לתמונה שלה!",
          pairs: [["LUNE", "🌙"], ["NAVIRE", "🚢"], ["TULIPE", "🌷"]],
          explain: "LUNE 🌙, NAVIRE 🚢, TULIPE 🌷. Bien lu !",
          explainHe: "LUNE 🌙, NAVIRE 🚢, TULIPE 🌷. קראתם יפה!"
        },
        {
          type: "pick",
          prompt: "Lis le mot et trouve son image !",
          promptHe: "קראו את המילה ומצאו את התמונה!",
          question: "TULIPE",
          choices: ["🌙", "🚢", "🌷"],
          answer: 2,
          say: "tulipe",
          explain: "TU-LI-PE, c'est la fleur : 🌷.",
          explainHe: "TU-LI-PE זה הפרח: 🌷."
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הקשיבו ובחרו מה שמעתם!",
          say: "vu",
          choices: ["VU", "VO", "NU"],
          answer: 0,
          explain: "'vvv' + 'u' = VU.",
          explainHe: "'ווו' ועוד U = VU."
        },
        {
          type: "build",
          prompt: "Assemble le mot TULIPE !",
          promptHe: "הרכיבו את המילה TULIPE!",
          tiles: ["LI", "TU", "PE", "VA"],
          answer: ["TU", "LI", "PE"],
          say: "tulipe",
          explain: "TU + LI + PE = TULIPE 🌷.",
          explainHe: "TU + LI + PE = TULIPE 🌷."
        }
      ],
      joke: {
        q: "Un ami demande à Toto : 'Pourquoi fermes-tu les yeux devant le miroir ?'",
        a: "'Pour voir comment je suis quand je dors !'",
        qHe: "חבר שואל את טוטו: 'למה אתה עוצם עיניים מול המראה?'",
        aHe: "'כדי לראות איך אני נראה כשאני ישן!'"
      }
    },
    {
      id: "n3-s2",
      name: "F, D, B et les petits mots",
      nameHe: "F, D, B והמילים הקטנות",
      emoji: "🍌",
      lesson: {
        cards: [
          {
            title: "La lettre F",
            titleHe: "האות F",
            body: "La lettre F fait le son 'fff'. Lis : FA FE FI FO FU.",
            bodyHe: "האות F עושה את הצליל 'פְֿפְֿפְֿ', כמו פ במילה פלאפל. קראו: FA FE FI FO FU.",
            big: "FA FE FI FO FU",
            say: "fa. fe. fi. fo. fu."
          },
          {
            title: "La lettre D",
            titleHe: "האות D",
            body: "La lettre D fait le son 'ddd' comme dans DOMINO. Lis : DA DE DI DO DU.",
            bodyHe: "האות D עושה את הצליל 'דדד', כמו ד במילה DOMINO. קראו: DA DE DI DO DU.",
            big: "DA DE DI DO DU",
            say: "da. de. di. do. du."
          },
          {
            title: "La lettre B",
            titleHe: "האות B",
            body: "La lettre B fait le son 'bbb' comme dans BANANE. Attention : B et D se ressemblent ! Lis : BA BE BI BO BU.",
            bodyHe: "האות B עושה את הצליל 'בּבּבּ', כמו במילה BANANE. שימו לב: B ו-D דומות! קראו: BA BE BI BO BU.",
            big: "BA BE BI BO BU",
            say: "ba. be. bi. bo. bu."
          },
          {
            title: "Les petits mots magiques",
            titleHe: "המילים הקטנות הקסומות",
            body: "Des petits mots à connaître par cœur, on les voit partout : LE, LA, UN, UNE, ET.",
            bodyHe: "מילים קטנות שצריך לדעת בעל פה, רואים אותן בכל מקום: LE, LA, UN, UNE, ET.",
            big: "LE LA UN UNE ET",
            say: "le. la. un. une. et."
          }
        ]
      },
      exercises: [
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הקשיבו ובחרו מה שמעתם!",
          say: "fa",
          choices: ["VA", "FA", "BA"],
          answer: 1,
          explain: "On entend 'fff' : FA. V fait 'vvv', c'est différent !",
          explainHe: "שומעים 'פֿ': FA. ‏V עושה 'ווו', זה שונה!"
        },
        {
          type: "listen",
          prompt: "Écoute bien et choisis la syllabe !",
          promptHe: "הקשיבו טוב ובחרו את ההברה!",
          say: "ba",
          choices: ["BA", "DA", "PA"],
          answer: 0,
          explain: "B fait 'bbb' : BA. Attention, B et D se ressemblent !",
          explainHe: "B עושה 'בּ': BA. שימו לב, B ו-D דומות!"
        },
        {
          type: "pick",
          prompt: "Quelle syllabe commence le mot BANANE ?",
          promptHe: "באיזו הברה מתחילה המילה BANANE?",
          question: "BANANE 🍌",
          choices: ["DA", "NA", "BA"],
          answer: 2,
          say: "banane",
          explain: "BA-NA-NE : on entend BA en premier.",
          explainHe: "BA-NA-NE: שומעים BA בהתחלה."
        },
        {
          type: "build",
          prompt: "Assemble le mot BANANE !",
          promptHe: "הרכיבו את המילה BANANE!",
          tiles: ["NA", "BA", "NE", "DO"],
          answer: ["BA", "NA", "NE"],
          say: "banane",
          explain: "BA + NA + NE = BANANE 🍌.",
          explainHe: "BA + NA + NE = BANANE 🍌."
        },
        {
          type: "fill",
          prompt: "Complète le mot !",
          promptHe: "השלימו את המילה!",
          sentence: "SALA␣E 🥗",
          choices: ["B", "D", "T"],
          answer: 1,
          say: "salade",
          explain: "On entend 'ddd' : SALADE.",
          explainHe: "שומעים 'דדד': SALADE."
        },
        {
          type: "pick",
          prompt: "Trouve le petit mot UNE !",
          promptHe: "מצאו את המילה הקטנה UNE!",
          choices: ["UN", "UNE", "NU"],
          answer: 1,
          say: "une",
          explain: "UNE a trois lettres : U-N-E.",
          explainHe: "ל-UNE יש שלוש אותיות: U-N-E."
        },
        {
          type: "listen",
          prompt: "Écoute : quel petit mot entends-tu ?",
          promptHe: "הקשיבו: איזו מילה קטנה שמעתם?",
          say: "et",
          choices: ["LE", "LA", "ET"],
          answer: 2,
          explain: "ET se dit 'é'. Il sert à ajouter : PAPA ET MAMAN.",
          explainHe: "ET נשמעת 'אֵה'. היא מחברת דברים: PAPA ET MAMAN."
        },
        {
          type: "build",
          prompt: "Assemble : UN PANDA !",
          promptHe: "הרכיבו: UN PANDA!",
          tiles: ["PANDA", "UN", "LA"],
          answer: ["UN", "PANDA"],
          say: "un panda",
          explain: "UN PANDA 🐼. Le petit mot UN vient avant.",
          explainHe: "UN PANDA 🐼. המילה הקטנה UN באה קודם."
        },
        {
          type: "match",
          prompt: "Relie chaque mot à son image !",
          promptHe: "חברו כל מילה לתמונה שלה!",
          pairs: [["BANANE", "🍌"], ["SALADE", "🥗"], ["PANDA", "🐼"]],
          explain: "BANANE 🍌, SALADE 🥗, PANDA 🐼. Super !",
          explainHe: "BANANE 🍌, SALADE 🥗, PANDA 🐼. מעולה!"
        },
        {
          type: "fill",
          prompt: "Complète la phrase !",
          promptHe: "השלימו את המשפט!",
          sentence: "UN DOMINO ET U␣E BANANE.",
          choices: ["N", "M", "V"],
          answer: 0,
          say: "un domino et une banane",
          explain: "UNE : U-N-E. On écrit UNE BANANE.",
          explainHe: "UNE: U-N-E. כותבים UNE BANANE."
        }
      ],
      joke: {
        q: "La maîtresse : 'Toto, épelle le mot BANANE.'",
        a: "'B-A, puis N-A, N-A... le plus dur, c'est de savoir quand s'arrêter !'",
        qHe: "המורה: 'טוטו, אַיֵּת את המילה BANANE.'",
        aHe: "'B-A, ואז N-A, N-A... הכי קשה זה לדעת מתי לעצור!'"
      }
    },
    {
      id: "n3-s3",
      name: "PAPA, MAMAN et la lettre É",
      nameHe: "PAPA, MAMAN והאות É",
      emoji: "🚲",
      lesson: {
        cards: [
          {
            title: "Les mots PAPA et MAMAN",
            titleHe: "המילים PAPA ו-MAMAN",
            body: "Tu sais déjà les lire : PAPA et MAMAN, les premiers mots du français. Lis-les bien !",
            bodyHe: "אתם כבר יודעים לקרוא אותן: PAPA ו-MAMAN, המילים הראשונות בצרפתית. קראו אותן יפה!",
            big: "PAPA MAMAN",
            say: "papa. maman."
          },
          {
            title: "LEVY, notre héros",
            titleHe: "LEVY, הגיבור שלנו",
            body: "Le prénom LEVY est spécial : il se lit 'Lévi'. Le Y à la fin fait le son 'i'. Regarde-le bien pour le reconnaître !",
            bodyHe: "השם LEVY מיוחד: קוראים אותו 'לֵוִי'. ה-Y בסוף עושה את הצליל 'אִי'. הסתכלו עליו טוב כדי לזהות אותו!",
            big: "LEVY 👦",
            say: "lévy"
          },
          {
            title: "La lettre É",
            titleHe: "האות É",
            body: "La lettre É porte un petit accent. Elle se dit 'é' comme dans VÉLO. Levy adore son vélo !",
            bodyHe: "לאות É יש קו קטן למעלה. היא נשמעת 'אֵה' כמו במילה VÉLO. ‏Levy מת על האופניים שלו!",
            big: "É → VÉLO 🚲",
            say: "é ! vélo !"
          }
        ]
      },
      exercises: [
        {
          type: "listen",
          prompt: "Écoute : quel prénom entends-tu ?",
          promptHe: "הקשיבו: איזה שם שמעתם?",
          say: "lévy",
          choices: ["LUNE", "LEVY", "VÉLO"],
          answer: 1,
          explain: "LEVY, c'est notre héros ! 👦",
          explainHe: "LEVY הוא הגיבור שלנו! 👦"
        },
        {
          type: "listen",
          prompt: "Écoute : quel mot entends-tu ?",
          promptHe: "הקשיבו: איזו מילה שמעתם?",
          say: "papa",
          choices: ["PAPA", "PAPI", "PAPE"],
          answer: 0,
          explain: "PA + PA = PAPA, deux fois la syllabe PA.",
          explainHe: "PA ועוד PA = PAPA, פעמיים ההברה PA."
        },
        {
          type: "pick",
          prompt: "Lis le mot et trouve son image !",
          promptHe: "קראו את המילה ומצאו את התמונה!",
          question: "MAMAN",
          choices: ["👨", "👶", "👩"],
          answer: 2,
          say: "maman",
          explain: "MA-MAN, c'est 👩.",
          explainHe: "MA-MAN זו 👩."
        },
        {
          type: "match",
          prompt: "Relie chaque prénom à son image !",
          promptHe: "חברו כל שם לתמונה שלו!",
          pairs: [["PAPA", "👨"], ["MAMAN", "👩"], ["LEVY", "👦"]],
          explain: "PAPA 👨, MAMAN 👩 et LEVY 👦 !",
          explainHe: "PAPA 👨, ‏MAMAN 👩 ו-LEVY 👦!"
        },
        {
          type: "fill",
          prompt: "Complète le mot !",
          promptHe: "השלימו את המילה!",
          sentence: "V␣LO 🚲",
          choices: ["E", "É", "A"],
          answer: 1,
          say: "vélo",
          explain: "É avec son accent se dit 'é' : VÉLO.",
          explainHe: "É עם הקו הקטן למעלה נשמעת 'אֵה': VÉLO."
        },
        {
          type: "listen",
          prompt: "Écoute et choisis le mot !",
          promptHe: "הקשיבו ובחרו את המילה!",
          say: "vélo",
          choices: ["VALO", "VÉLO", "VOLO"],
          answer: 1,
          explain: "On entend 'é' : VÉLO, avec la lettre É.",
          explainHe: "שומעים 'אֵה': VÉLO, עם האות É."
        },
        {
          type: "build",
          prompt: "Assemble le mot VÉLO !",
          promptHe: "הרכיבו את המילה VÉLO!",
          tiles: ["LO", "VÉ", "VO"],
          answer: ["VÉ", "LO"],
          say: "vélo",
          explain: "VÉ + LO = VÉLO 🚲.",
          explainHe: "VÉ + LO = VÉLO 🚲."
        },
        {
          type: "build",
          prompt: "Assemble : PAPA ET MAMAN !",
          promptHe: "הרכיבו: PAPA ET MAMAN!",
          tiles: ["ET", "PAPA", "MAMAN", "LA"],
          answer: ["PAPA", "ET", "MAMAN"],
          say: "papa et maman",
          explain: "Le petit mot ET colle les deux mots.",
          explainHe: "המילה הקטנה ET מחברת בין שתי המילים."
        },
        {
          type: "pick",
          prompt: "Lis ce prénom. Qui est-ce ?",
          promptHe: "קראו את השם. מי זה?",
          question: "LEVY",
          choices: ["👨", "👶", "👦"],
          answer: 2,
          say: "lévy",
          explain: "LEVY, c'est notre héros : 👦.",
          explainHe: "LEVY הוא הגיבור שלנו: 👦."
        },
        {
          type: "fill",
          prompt: "Complète la phrase !",
          promptHe: "השלימו את המשפט!",
          sentence: "MAMAN ␣T PAPA.",
          choices: ["E", "A", "O"],
          answer: 0,
          say: "maman et papa",
          explain: "Le petit mot ET s'écrit E-T.",
          explainHe: "המילה הקטנה ET נכתבת E-T."
        }
      ],
      joke: {
        q: "La maîtresse : 'Toto, je te donne 2 lapins, puis encore 2 lapins. Combien en as-tu ?'",
        a: "'5, maîtresse ! J'en ai déjà un à la maison !'",
        qHe: "המורה: 'טוטו, אני נותנת לך 2 ארנבים ועוד 2 ארנבים. כמה יש לך?'",
        aHe: "'5, המורה! יש לי כבר ארנב אחד בבית!'"
      }
    },
    {
      id: "n3-s4",
      name: "Le grand défi",
      nameHe: "האתגר הגדול",
      emoji: "🏆",
      lesson: {
        cards: [
          {
            title: "Le grand défi !",
            titleHe: "האתגר הגדול!",
            body: "Bravo ! Tu connais V, N, F, D, B, la lettre É et plein de mots. Montre tout ce que tu sais !",
            bodyHe: "כל הכבוד! אתם מכירים את V, N, F, D, B, את האות É והמון מילים. הראו כל מה שאתם יודעים!",
            big: "💪",
            say: "à toi de jouer !"
          }
        ]
      },
      exercises: [
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הקשיבו ובחרו מה שמעתם!",
          say: "da",
          choices: ["BA", "DA", "VA"],
          answer: 1,
          explain: "'ddd' + 'a' = DA.",
          explainHe: "'דדד' ועוד 'אָה' = DA."
        },
        {
          type: "pick",
          prompt: "Quel mot veut dire 🍌 ?",
          promptHe: "איזו מילה אומרת 🍌?",
          question: "🍌",
          choices: ["SALADE", "BANANE", "DOMINO"],
          answer: 1,
          say: "banane",
          explain: "BA-NA-NE, le fruit jaune : 🍌.",
          explainHe: "BA-NA-NE, הפרי הצהוב: 🍌."
        },
        {
          type: "fill",
          prompt: "Complète le mot !",
          promptHe: "השלימו את המילה!",
          sentence: "␣ANANE 🍌",
          choices: ["D", "P", "B"],
          answer: 2,
          say: "banane",
          explain: "On entend 'bbb' au début : BANANE.",
          explainHe: "שומעים 'בּ' בהתחלה: BANANE."
        },
        {
          type: "build",
          prompt: "Assemble le mot DOMINO !",
          promptHe: "הרכיבו את המילה DOMINO!",
          tiles: ["MI", "DO", "NO", "BA"],
          answer: ["DO", "MI", "NO"],
          say: "domino",
          explain: "DO + MI + NO = DOMINO !",
          explainHe: "DO + MI + NO = DOMINO!"
        },
        {
          type: "match",
          prompt: "Relie chaque mot à son image !",
          promptHe: "חברו כל מילה לתמונה שלה!",
          pairs: [["VÉLO", "🚲"], ["BANANE", "🍌"], ["LUNE", "🌙"], ["PANDA", "🐼"]],
          explain: "VÉLO 🚲, BANANE 🍌, LUNE 🌙, PANDA 🐼. Champion !",
          explainHe: "VÉLO 🚲, BANANE 🍌, LUNE 🌙, PANDA 🐼. אלופים!"
        },
        {
          type: "listen",
          prompt: "Écoute : quel petit mot entends-tu ?",
          promptHe: "הקשיבו: איזו מילה קטנה שמעתם?",
          say: "une",
          choices: ["UN", "NU", "UNE"],
          answer: 2,
          explain: "On entend le 'nnn' à la fin : c'est UNE, U-N-E.",
          explainHe: "שומעים 'ננן' בסוף: זו UNE, ‏U-N-E."
        },
        {
          type: "fill",
          prompt: "Complète la phrase !",
          promptHe: "השלימו את המשפט!",
          sentence: "␣N NAVIRE 🚢",
          choices: ["U", "O", "I"],
          answer: 0,
          say: "un navire",
          explain: "Le petit mot UN s'écrit U-N.",
          explainHe: "המילה הקטנה UN נכתבת U-N."
        },
        {
          type: "build",
          prompt: "Assemble : UN VÉLO ET UNE BANANE !",
          promptHe: "הרכיבו: UN VÉLO ET UNE BANANE!",
          tiles: ["ET", "UN", "BANANE", "UNE", "VÉLO"],
          answer: ["UN", "VÉLO", "ET", "UNE", "BANANE"],
          say: "un vélo et une banane",
          explain: "UN VÉLO 🚲 ET UNE BANANE 🍌. Bien joué !",
          explainHe: "UN VÉLO 🚲 ET UNE BANANE 🍌. כל הכבוד!"
        },
        {
          type: "listen",
          prompt: "Écoute : quel mot entends-tu ?",
          promptHe: "הקשיבו: איזו מילה שמעתם?",
          say: "salade",
          choices: ["MALADE", "SALADE", "BALADE"],
          answer: 1,
          explain: "On entend 'sss' au début : SALADE 🥗.",
          explainHe: "שומעים 'סס' בהתחלה: SALADE 🥗."
        },
        {
          type: "pick",
          prompt: "Quelle syllabe commence le mot VÉLO ?",
          promptHe: "באיזו הברה מתחילה המילה VÉLO?",
          question: "VÉLO 🚲",
          choices: ["VO", "FÉ", "VÉ"],
          answer: 2,
          say: "vélo",
          explain: "VÉ-LO : on entend VÉ en premier, avec É.",
          explainHe: "VÉ-LO: שומעים VÉ בהתחלה, עם É."
        },
        {
          type: "fill",
          prompt: "Complète le mot !",
          promptHe: "השלימו את המילה!",
          sentence: "MALA␣E 🤒",
          choices: ["D", "B", "T"],
          answer: 0,
          say: "malade",
          explain: "On entend 'ddd' : MALADE.",
          explainHe: "שומעים 'דדד': MALADE."
        },
        {
          type: "pick",
          prompt: "Quel mot n'est PAS de la nourriture ?",
          promptHe: "איזו מילה היא לא אוכל?",
          choices: ["BANANE", "DOMINO", "SALADE"],
          answer: 1,
          say: "quel mot n'est pas de la nourriture ?",
          explain: "DOMINO, c'est un jeu, ça ne se mange pas !",
          explainHe: "DOMINO זה משחק, את זה לא אוכלים!"
        }
      ],
      joke: {
        q: "La maîtresse : 'Toto, pourquoi arrives-tu en retard ?'",
        a: "'À cause du panneau devant l'école : ÉCOLE, RALENTIR ! Alors j'ai marché tout doucement...'",
        qHe: "המורה: 'טוטו, למה איחרת?'",
        aHe: "'בגלל השלט ליד בית הספר: בית ספר, האטו! אז הלכתי ממש לאט...'"
      }
    }
  ]
});
