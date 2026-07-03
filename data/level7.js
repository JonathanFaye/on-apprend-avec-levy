window.LEVELS = window.LEVELS || [];
window.LEVELS.push({
  id: "n7",
  order: 7,
  name: "Je lis des histoires",
  nameHe: "אני קורא סיפורים",
  emoji: "📜",
  color: "#AD1457",
  tagline: "Je lis des histoires en entier !",
  taglineHe: "אני קורא סיפורים שלמים!",
  sublevels: [
    {
      id: "n7-s1",
      name: "Levy à la piscine",
      nameHe: "Levy בבריכה",
      emoji: "🏊",
      lesson: {
        cards: [
          {
            title: "On lit une vraie histoire !",
            titleHe: "קוראים סיפור אמיתי!",
            body: "Aujourd'hui, tu lis une histoire entière ! Lis doucement, phrase par phrase, de gauche à droite. Ensuite, tu réponds à des questions.",
            bodyHe: "היום קוראים סיפור שלם! קראו לאט, משפט אחרי משפט, משמאל לימין. אחר כך עונים על שאלות.",
            big: "📖"
          },
          {
            title: "Levy à la piscine",
            titleHe: "Levy בבריכה",
            body: "Levy va à la piscine avec son ami. Il fait très chaud. Levy saute dans l'eau bleue. Son ami nage avec une bouée. Après, ils mangent une glace.",
            bodyHe: "Levy הולך לבריכה עם החבר שלו. חם מאוד. Levy קופץ למים הכחולים. החבר שלו שוחה עם גלגל ים. אחר כך הם אוכלים גלידה.",
            say: "Levy va à la piscine avec son ami. Il fait très chaud. Levy saute dans l'eau bleue. Son ami nage avec une bouée. Après, ils mangent une glace."
          },
          {
            title: "Qui ? Où ? Quoi ?",
            titleHe: "מי? איפה? מה?",
            body: "Après l'histoire, Levy te pose des questions : qui ? où ? quoi ? La réponse est toujours dans l'histoire !",
            bodyHe: "אחרי הסיפור Levy שואל שאלות: מי? איפה? מה? התשובה תמיד נמצאת בתוך הסיפור!"
          }
        ]
      },
      exercises: [
        {
          type: "read",
          prompt: "Lis l'histoire à voix haute !",
          promptHe: "קראו את הסיפור בקול רם!",
          text: "Levy va à la piscine avec son ami.\nIl fait très chaud.\nLevy saute dans l'eau bleue. Son ami nage avec une bouée.\nAprès, ils mangent une glace.",
          say: "Levy va à la piscine avec son ami. Il fait très chaud. Levy saute dans l'eau bleue. Son ami nage avec une bouée. Après, ils mangent une glace.",
          explain: "Bravo ! Tu as lu une histoire entière, comme un grand !",
          explainHe: "כל הכבוד! קראתם סיפור שלם, כמו גדולים!"
        },
        {
          type: "pick",
          prompt: "Qui va à la piscine avec Levy ?",
          promptHe: "מי הולך לבריכה עם Levy?",
          say: "qui va à la piscine avec Levy ?",
          choices: ["la maîtresse", "son ami", "le chat"],
          answer: 1,
          explain: "C'est son ami qui va à la piscine avec Levy.",
          explainHe: "זה החבר של Levy שהולך איתו לבריכה."
        },
        {
          type: "pick",
          prompt: "Où vont Levy et son ami ?",
          promptHe: "לאן הולכים Levy והחבר שלו?",
          say: "où vont Levy et son ami ?",
          choices: ["à l'école", "au parc", "à la piscine"],
          answer: 2,
          explain: "Ils vont à la piscine, pour nager et sauter dans l'eau !",
          explainHe: "הם הולכים לבריכה, לשחות ולקפוץ למים!"
        },
        {
          type: "pick",
          prompt: "Quel temps fait-il dans l'histoire ?",
          promptHe: "איזה מזג אוויר יש בסיפור?",
          say: "quel temps fait-il dans l'histoire ?",
          choices: ["Il pleut.", "Il fait très chaud.", "Il neige."],
          answer: 1,
          explain: "L'histoire dit : il fait très chaud. C'est pour ça qu'ils vont nager !",
          explainHe: "בסיפור כתוב: חם מאוד. בגלל זה הם הולכים לשחות!"
        },
        {
          type: "pick",
          prompt: "Que fait Levy à la piscine ?",
          promptHe: "מה עושה Levy בבריכה?",
          say: "que fait Levy à la piscine ?",
          choices: ["Il dort.", "Il lit un livre.", "Il saute dans l'eau."],
          answer: 2,
          explain: "Levy saute dans l'eau bleue. Splash !",
          explainHe: "Levy קופץ למים הכחולים. ספלאש!"
        },
        {
          type: "fill",
          prompt: "Complète la phrase de l'histoire !",
          promptHe: "השלימו את המשפט מהסיפור!",
          sentence: "Son ami nage avec une ␣.",
          choices: ["moto", "bouée", "table"],
          answer: 1,
          say: "bouée",
          explain: "Dans l'histoire, son ami nage avec une bouée.",
          explainHe: "בסיפור החבר שלו שוחה עם גלגל ים."
        },
        {
          type: "pick",
          prompt: "Que mangent-ils après la piscine ?",
          promptHe: "מה הם אוכלים אחרי הבריכה?",
          say: "que mangent-ils après la piscine ?",
          choices: ["une pomme", "du pain", "une glace"],
          answer: 2,
          explain: "Après la piscine, ils mangent une glace. Miam !",
          explainHe: "אחרי הבריכה הם אוכלים גלידה. טעים!"
        },
        {
          type: "build",
          prompt: "Remets les mots dans l'ordre !",
          promptHe: "סדרו את המילים בסדר הנכון!",
          tiles: ["dans", "Levy", "l'eau.", "saute"],
          answer: ["Levy", "saute", "dans", "l'eau."],
          say: "levy saute dans l'eau.",
          explain: "La phrase commence par Levy avec une majuscule et finit par un point.",
          explainHe: "המשפט מתחיל ב-Levy עם אות גדולה ונגמר בנקודה."
        },
        {
          type: "match",
          prompt: "Relie chaque mot à son image !",
          promptHe: "חברו כל מילה לתמונה שלה!",
          pairs: [["piscine", "🏊"], ["glace", "🍦"], ["eau", "💧"]],
          explain: "piscine = 🏊, glace = 🍦, eau = 💧.",
          explainHe: "piscine = בריכה, glace = גלידה, eau = מים."
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הקשיבו ובחרו מה שמעתם!",
          say: "piscine",
          choices: ["cuisine", "piscine", "poussin"],
          answer: 1,
          explain: "Tu as entendu : piscine, avec PI au début.",
          explainHe: "שמעתם: piscine, עם PI בהתחלה."
        }
      ],
      joke: {
        q: "Quel est le sport le plus fruité ?",
        a: "La boxe, parce qu'on se prend des pêches !",
        qHe: "מהו הספורט הכי פירותי?",
        aHe: "האיגרוף! כי בצרפתית pêche זה גם אפרסק וגם מכת אגרוף!"
      }
    },
    {
      id: "n7-s2",
      name: "Le Shabbat chez Levy",
      nameHe: "שבת אצל Levy",
      emoji: "🕯️",
      lesson: {
        cards: [
          {
            title: "Vendredi soir",
            titleHe: "ערב שישי",
            body: "Le vendredi soir, le Shabbat commence. On allume les bougies, on chante, et il y a deux pains dorés sur la table.",
            bodyHe: "בערב שישי מתחילה השבת. מדליקים נרות, שרים, ויש שתי חלות זהובות על השולחן.",
            big: "🕯️🍞"
          },
          {
            title: "Le Shabbat chez Levy",
            titleHe: "שבת אצל Levy",
            body: "C'est vendredi soir. Levy allume les bougies. Sur la table, il y a deux pains dorés. Levy chante une belle chanson. Toute la famille dit : Chabbat Chalom !",
            bodyHe: "ערב שישי. Levy מדליק את הנרות. על השולחן יש שתי חלות זהובות. Levy שר שיר יפה. כל המשפחה אומרת: שבת שלום!",
            say: "C'est vendredi soir. Levy allume les bougies. Sur la table, il y a deux pains dorés. Levy chante une belle chanson. Toute la famille dit : chabbat chalom !"
          },
          {
            title: "Vrai ou faux ?",
            titleHe: "נכון או לא נכון?",
            body: "Levy va te dire des phrases. Si la phrase est comme dans l'histoire, c'est VRAI. Sinon, c'est FAUX !",
            bodyHe: "Levy יגיד לכם משפטים. אם המשפט כמו בסיפור — זה VRAI (נכון). אם לא — זה FAUX (לא נכון)!"
          }
        ]
      },
      exercises: [
        {
          type: "read",
          prompt: "Lis l'histoire à voix haute !",
          promptHe: "קראו את הסיפור בקול רם!",
          text: "C'est vendredi soir. Levy allume les bougies.\nSur la table, il y a deux pains dorés.\nLevy chante une belle chanson.\nToute la famille dit : Chabbat Chalom !",
          say: "C'est vendredi soir. Levy allume les bougies. Sur la table, il y a deux pains dorés. Levy chante une belle chanson. Toute la famille dit : chabbat chalom !",
          explain: "Bravo ! Quelle belle histoire de Shabbat !",
          explainHe: "כל הכבוד! איזה סיפור שבת יפה!"
        },
        {
          type: "pick",
          prompt: "Quel soir commence le Shabbat ?",
          promptHe: "באיזה ערב מתחילה השבת?",
          say: "quel soir commence le shabbat ?",
          choices: ["lundi soir", "vendredi soir", "mardi soir"],
          answer: 1,
          explain: "Le Shabbat commence le vendredi soir, quand on allume les bougies.",
          explainHe: "השבת מתחילה בערב שישי, כשמדליקים את הנרות."
        },
        {
          type: "pick",
          prompt: "Qui allume les bougies ?",
          promptHe: "מי מדליק את הנרות?",
          say: "qui allume les bougies ?",
          choices: ["la maîtresse", "le chat", "Levy"],
          answer: 2,
          explain: "C'est Levy qui allume les bougies de Shabbat.",
          explainHe: "Levy הוא שמדליק את נרות השבת."
        },
        {
          type: "pick",
          prompt: "Qu'y a-t-il sur la table ?",
          promptHe: "מה יש על השולחן?",
          say: "qu'y a-t-il sur la table ?",
          choices: ["trois pizzas", "deux pains dorés", "des crayons"],
          answer: 1,
          explain: "Sur la table, il y a deux pains dorés pour le Shabbat.",
          explainHe: "על השולחן יש שתי חלות זהובות לשבת."
        },
        {
          type: "pick",
          prompt: "Vrai ou faux ?",
          promptHe: "נכון או לא נכון?",
          question: "Levy allume les bougies.",
          say: "levy allume les bougies. vrai ou faux ?",
          choices: ["VRAI", "FAUX"],
          answer: 0,
          explain: "C'est vrai ! Dans l'histoire, Levy allume les bougies.",
          explainHe: "נכון! בסיפור Levy מדליק את הנרות."
        },
        {
          type: "pick",
          prompt: "Vrai ou faux ?",
          promptHe: "נכון או לא נכון?",
          question: "Sur la table, il y a une pizza.",
          say: "sur la table, il y a une pizza. vrai ou faux ?",
          choices: ["VRAI", "FAUX"],
          answer: 1,
          explain: "C'est faux ! Sur la table, il y a deux pains dorés, pas de pizza.",
          explainHe: "לא נכון! על השולחן יש שתי חלות זהובות, לא פיצה."
        },
        {
          type: "pick",
          prompt: "Vrai ou faux ?",
          promptHe: "נכון או לא נכון?",
          question: "Toute la famille dit : Chabbat Chalom !",
          say: "toute la famille dit : chabbat chalom. vrai ou faux ?",
          choices: ["VRAI", "FAUX"],
          answer: 0,
          explain: "C'est vrai ! Toute la famille dit : Chabbat Chalom !",
          explainHe: "נכון! כל המשפחה אומרת: שבת שלום!"
        },
        {
          type: "fill",
          prompt: "Complète la phrase de l'histoire !",
          promptHe: "השלימו את המשפט מהסיפור!",
          sentence: "Levy allume les ␣.",
          choices: ["fenêtres", "voitures", "bougies"],
          answer: 2,
          say: "bougies",
          explain: "Levy allume les bougies de Shabbat.",
          explainHe: "Levy מדליק את נרות השבת."
        },
        {
          type: "match",
          prompt: "Relie chaque mot à son image !",
          promptHe: "חברו כל מילה לתמונה שלה!",
          pairs: [["bougie", "🕯️"], ["pain", "🍞"], ["famille", "👨‍👩‍👧‍👦"]],
          explain: "bougie = 🕯️, pain = 🍞, famille = 👨‍👩‍👧‍👦.",
          explainHe: "bougie = נר, pain = לחם, famille = משפחה."
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הקשיבו ובחרו מה שמעתם!",
          say: "pain",
          choices: ["main", "pain", "bain"],
          answer: 1,
          explain: "Tu as entendu : pain, avec le son P au début.",
          explainHe: "שמעתם: pain, עם הצליל P בהתחלה."
        }
      ],
      joke: {
        q: "Quel est le comble pour un boulanger ?",
        a: "C'est d'être dans le pétrin !",
        qHe: "מה הכי מצחיק שיכול לקרות לאופה?",
        aHe: "להיות בתוך ה-pétrin! בצרפתית pétrin זה גם הכלי שלשים בו בצק וגם 'צרה גדולה'!"
      }
    },
    {
      id: "n7-s3",
      name: "La dictée des champions",
      nameHe: "ההכתבה של האלופים",
      emoji: "✏️",
      lesson: {
        cards: [
          {
            title: "La dictée",
            titleHe: "הכתבה",
            body: "Écoute bien le mot, répète-le dans ta tête, puis écris-le lettre par lettre. Tu peux réécouter autant que tu veux !",
            bodyHe: "הקשיבו טוב למילה, חזרו עליה בראש, ואז כתבו אותה אות אחרי אות. אפשר להקשיב שוב כמה שרוצים!",
            big: "✏️"
          },
          {
            title: "Les mots de tous les jours",
            titleHe: "מילים של כל יום",
            body: "Voici des mots qu'on voit partout : maison, école, gâteau, bonjour. Regarde-les bien avant la dictée !",
            bodyHe: "הנה מילים שרואים בכל מקום: maison, école, gâteau, bonjour. הסתכלו עליהן טוב לפני ההכתבה!",
            big: "maison école gâteau bonjour",
            say: "maison. école. gâteau. bonjour."
          },
          {
            title: "La phrase en ordre",
            titleHe: "משפט לפי הסדר",
            body: "Une phrase commence par une majuscule et finit par un point. Remets les mots dans le bon ordre, de gauche à droite !",
            bodyHe: "משפט מתחיל באות גדולה ונגמר בנקודה. סדרו את המילים בסדר הנכון, משמאל לימין!"
          }
        ]
      },
      exercises: [
        {
          type: "type",
          prompt: "Écoute et écris le mot !",
          promptHe: "הקשיבו וכתבו את המילה!",
          say: "maison",
          answer: "maison",
          strict: false,
          explain: "On écrit : maison. Le son AI est au milieu, et le son ON à la fin.",
          explainHe: "כותבים maison. הצליל AI באמצע, והצליל ON בסוף."
        },
        {
          type: "type",
          prompt: "Écoute et écris le mot !",
          promptHe: "הקשיבו וכתבו את המילה!",
          say: "école",
          answer: "école",
          strict: false,
          explain: "On écrit : école, avec un é accent aigu au début.",
          explainHe: "כותבים école, עם é עם אקסנט בהתחלה."
        },
        {
          type: "build",
          prompt: "Remets les mots dans l'ordre !",
          promptHe: "סדרו את המילים בסדר הנכון!",
          tiles: ["un", "gâteau.", "Levy", "mange"],
          answer: ["Levy", "mange", "un", "gâteau."],
          say: "levy mange un gâteau.",
          explain: "La phrase est : Levy mange un gâteau. On commence par Levy, avec une majuscule.",
          explainHe: "המשפט הוא: Levy mange un gâteau. מתחילים ב-Levy, עם אות גדולה."
        },
        {
          type: "type",
          prompt: "Écoute et écris le mot !",
          promptHe: "הקשיבו וכתבו את המילה!",
          say: "bonjour",
          answer: "bonjour",
          strict: false,
          explain: "On écrit : bonjour. Le son ON, puis le son OU.",
          explainHe: "כותבים bonjour: הצליל ON ואז הצליל OU."
        },
        {
          type: "build",
          prompt: "Remets les mots dans l'ordre !",
          promptHe: "סדרו את המילים בסדר הנכון!",
          tiles: ["dans", "Levy", "la", "maison.", "est"],
          answer: ["Levy", "est", "dans", "la", "maison."],
          say: "levy est dans la maison.",
          explain: "La phrase est : Levy est dans la maison.",
          explainHe: "המשפט הוא: Levy est dans la maison."
        },
        {
          type: "type",
          prompt: "Écoute et écris le mot !",
          promptHe: "הקשיבו וכתבו את המילה!",
          say: "gâteau",
          answer: "gâteau",
          strict: false,
          explain: "On écrit : gâteau, avec un â chapeau et EAU à la fin.",
          explainHe: "כותבים gâteau, עם â עם כובע ו-EAU בסוף."
        },
        {
          type: "build",
          prompt: "Remets les mots dans l'ordre !",
          promptHe: "סדרו את המילים בסדר הנכון!",
          tiles: ["ballon.", "Levy", "au", "joue"],
          answer: ["Levy", "joue", "au", "ballon."],
          say: "levy joue au ballon.",
          explain: "La phrase est : Levy joue au ballon.",
          explainHe: "המשפט הוא: Levy joue au ballon."
        },
        {
          type: "fill",
          prompt: "Complète le mot !",
          promptHe: "השלימו את המילה!",
          sentence: "Levy va à l'␣cole.",
          choices: ["a", "é", "o"],
          answer: 1,
          say: "école",
          explain: "C'est l'école, avec un é accent aigu au début.",
          explainHe: "זו המילה école, עם é עם אקסנט בהתחלה."
        },
        {
          type: "type",
          prompt: "Écoute et écris le mot !",
          promptHe: "הקשיבו וכתבו את המילה!",
          say: "vélo",
          answer: "vélo",
          strict: false,
          explain: "On écrit : vélo, avec un é accent aigu.",
          explainHe: "כותבים vélo, עם é עם אקסנט."
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הקשיבו ובחרו מה שמעתם!",
          say: "gâteau",
          choices: ["château", "chapeau", "gâteau"],
          answer: 2,
          explain: "Tu as entendu : gâteau, avec GA au début.",
          explainHe: "שמעתם: gâteau, עם GA בהתחלה."
        }
      ],
      joke: {
        q: "Quel est le comble pour un électricien ?",
        a: "C'est de ne pas être au courant !",
        qHe: "מה הכי מצחיק שיכול לקרות לחשמלאי?",
        aHe: "לא להיות au courant! בצרפתית courant זה גם זרם חשמלי, ו-être au courant זה 'לדעת מה קורה'!"
      }
    },
    {
      id: "n7-s4",
      name: "Le grand défi",
      nameHe: "האתגר הגדול",
      emoji: "🏆",
      lesson: {
        cards: [
          {
            title: "Le grand défi !",
            titleHe: "האתגר הגדול!",
            body: "Voici une grande histoire de Pokémon en deux parties ! Lis bien, réponds aux questions et deviens un champion de la lecture !",
            bodyHe: "הנה סיפור Pokémon גדול בשני חלקים! קראו טוב, ענו על השאלות והפכו לאלופי קריאה!",
            big: "🏆"
          }
        ]
      },
      exercises: [
        {
          type: "read",
          prompt: "Lis la première partie de l'histoire !",
          promptHe: "קראו את החלק הראשון של הסיפור!",
          text: "Levy joue dans le jardin.\nIl trouve un petit Pokémon perdu.\nLe Pokémon pleure : il a perdu son dresseur.\nLevy lui donne de l'eau et un gâteau.",
          say: "Levy joue dans le jardin. Il trouve un petit pokémon perdu. Le pokémon pleure : il a perdu son dresseur. Levy lui donne de l'eau et un gâteau.",
          explain: "Bravo ! Tu as lu la première partie de l'histoire !",
          explainHe: "כל הכבוד! קראתם את החלק הראשון של הסיפור!"
        },
        {
          type: "pick",
          prompt: "Où Levy trouve-t-il le Pokémon ?",
          promptHe: "איפה Levy מוצא את ה-Pokémon?",
          say: "où Levy trouve-t-il le pokémon ?",
          choices: ["à l'école", "dans le jardin", "à la piscine"],
          answer: 1,
          explain: "Levy joue dans le jardin quand il trouve le petit Pokémon.",
          explainHe: "Levy משחק בגינה כשהוא מוצא את ה-Pokémon הקטן."
        },
        {
          type: "pick",
          prompt: "Pourquoi le Pokémon pleure-t-il ?",
          promptHe: "למה ה-Pokémon בוכה?",
          say: "pourquoi le pokémon pleure-t-il ?",
          choices: ["Il est tombé du lit.", "Il a perdu son dresseur.", "Il n'aime pas les gâteaux."],
          answer: 1,
          explain: "Le Pokémon pleure parce qu'il a perdu son dresseur.",
          explainHe: "ה-Pokémon בוכה כי הוא איבד את המאלף שלו."
        },
        {
          type: "pick",
          prompt: "Que donne Levy au Pokémon ?",
          promptHe: "מה Levy נותן ל-Pokémon?",
          say: "que donne Levy au pokémon ?",
          choices: ["une moto", "un cartable", "de l'eau et un gâteau"],
          answer: 2,
          explain: "Levy est gentil : il donne de l'eau et un gâteau au Pokémon.",
          explainHe: "Levy נחמד: הוא נותן ל-Pokémon מים ועוגה."
        },
        {
          type: "fill",
          prompt: "Complète la phrase de l'histoire !",
          promptHe: "השלימו את המשפט מהסיפור!",
          sentence: "Levy trouve un Pokémon ␣.",
          choices: ["géant", "perdu", "méchant"],
          answer: 1,
          say: "perdu",
          explain: "Le Pokémon est perdu : il ne trouve plus son dresseur.",
          explainHe: "ה-Pokémon אבוד: הוא לא מוצא את המאלף שלו."
        },
        {
          type: "pick",
          prompt: "Vrai ou faux ?",
          promptHe: "נכון או לא נכון?",
          question: "Le Pokémon pleure.",
          say: "le pokémon pleure. vrai ou faux ?",
          choices: ["VRAI", "FAUX"],
          answer: 0,
          explain: "C'est vrai, le pauvre Pokémon pleure parce qu'il est perdu.",
          explainHe: "נכון, ה-Pokémon המסכן בוכה כי הוא אבוד."
        },
        {
          type: "read",
          prompt: "Lis la suite de l'histoire !",
          promptHe: "קראו את המשך הסיפור!",
          text: "Levy et le Pokémon cherchent dans toute la rue.\nLe soir, le dresseur arrive enfin.\nIl dit : merci Levy, tu es un champion !\nLe Pokémon saute de joie.",
          say: "Levy et le pokémon cherchent dans toute la rue. Le soir, le dresseur arrive enfin. Il dit : merci Levy, tu es un champion ! Le pokémon saute de joie.",
          explain: "Bravo ! Tu as lu toute l'histoire du Pokémon perdu !",
          explainHe: "כל הכבוד! קראתם את כל הסיפור על ה-Pokémon האבוד!"
        },
        {
          type: "pick",
          prompt: "Qui arrive le soir ?",
          promptHe: "מי מגיע בערב?",
          say: "qui arrive le soir ?",
          choices: ["la maîtresse", "le dresseur", "un ami"],
          answer: 1,
          explain: "Le soir, le dresseur du Pokémon arrive enfin.",
          explainHe: "בערב סוף סוף מגיע המאלף של ה-Pokémon."
        },
        {
          type: "build",
          prompt: "Remets les mots dans l'ordre !",
          promptHe: "סדרו את המילים בסדר הנכון!",
          tiles: ["saute", "Le", "de", "Pokémon", "joie."],
          answer: ["Le", "Pokémon", "saute", "de", "joie."],
          say: "le pokémon saute de joie.",
          explain: "La phrase est : Le Pokémon saute de joie.",
          explainHe: "המשפט הוא: Le Pokémon saute de joie."
        },
        {
          type: "match",
          prompt: "Relie chaque mot à son image !",
          promptHe: "חברו כל מילה לתמונה שלה!",
          pairs: [["jardin", "🌳"], ["gâteau", "🍰"], ["soir", "🌙"], ["champion", "🏆"]],
          explain: "jardin = 🌳, gâteau = 🍰, soir = 🌙, champion = 🏆.",
          explainHe: "jardin = גינה, gâteau = עוגה, soir = ערב, champion = אלוף."
        },
        {
          type: "type",
          prompt: "Écoute et écris le mot !",
          promptHe: "הקשיבו וכתבו את המילה!",
          say: "merci",
          answer: "merci",
          strict: false,
          explain: "On écrit : merci. M-E-R-C-I, comme le dresseur dit à Levy !",
          explainHe: "כותבים merci: M-E-R-C-I, כמו שהמאלף אומר ל-Levy!"
        },
        {
          type: "pick",
          prompt: "Comment est le Pokémon à la fin ?",
          promptHe: "איך מרגיש ה-Pokémon בסוף?",
          say: "comment est le pokémon à la fin ?",
          choices: ["triste", "content", "fâché"],
          answer: 1,
          explain: "À la fin, le Pokémon saute de joie : il est très content !",
          explainHe: "בסוף ה-Pokémon קופץ משמחה: הוא מאוד שמח!"
        }
      ],
      joke: {
        q: "Quel est le sport le plus silencieux ?",
        a: "Le parachutisme, parce qu'il faut dire CHUT !",
        qHe: "מהו הספורט הכי שקט?",
        aHe: "הצניחה! כי בתוך המילה parachute מתחבאת המילה chut — 'שששש!'"
      }
    }
  ]
});
