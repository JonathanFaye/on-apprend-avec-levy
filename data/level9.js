window.LEVELS = window.LEVELS || [];
window.LEVELS.push({
  id: "n9",
  order: 9,
  name: "Presque champion",
  nameHe: "כמעט אלוף",
  emoji: "🏆",
  color: "#00695C",
  tagline: "Je conjugue et j'écris comme un champion !",
  taglineHe: "אני מטה פעלים וכותב כמו אלוף!",
  sublevels: [
    {
      id: "n9-s1",
      name: "Les verbes en -ER",
      nameHe: "פעלים שנגמרים ב-ER",
      emoji: "🏊",
      lesson: {
        cards: [
          {
            title: "Les verbes en -ER",
            titleHe: "הפעלים שנגמרים ב-ER",
            body: "Un verbe, c'est un mot d'action : jouer, manger, nager, chanter. Ils finissent tous par -ER !",
            bodyHe: "פועל הוא מילה של פעולה: jouer (לשחק), manger (לאכול), nager (לשחות), chanter (לשיר). כולם נגמרים ב-ER!",
            big: "jouer manger nager chanter",
            say: "jouer. manger. nager. chanter."
          },
          {
            title: "je, tu, il, elle",
            titleHe: "je, tu, il, elle",
            body: "Au présent : je joue, tu joues, il joue. On entend pareil, mais avec TU il y a toujours un S !",
            bodyHe: "בהווה: je joue, tu joues, il joue. שומעים אותו דבר, אבל עם TU תמיד יש S!",
            big: "je joue, tu joues, il joue",
            say: "je joue. tu joues. il joue."
          },
          {
            title: "nous, vous, ils",
            titleHe: "nous, vous, ils",
            body: "Nous jouons, vous jouez, ils jouent. Attention : nous mangeons, nous nageons, avec un E après le G !",
            bodyHe: "Nous jouons, vous jouez, ils jouent. שימו לב: nous mangeons, nous nageons, עם E אחרי ה-G!",
            big: "nous jouons, vous jouez, ils jouent",
            say: "nous jouons. vous jouez. ils jouent."
          }
        ]
      },
      exercises: [
        {
          type: "pick",
          prompt: "Choisis la bonne forme du verbe !",
          promptHe: "בחרו את הצורה הנכונה של הפועל!",
          question: "Je ___ au ballon.",
          choices: ["joue", "joues", "jouons"],
          answer: 0,
          say: "je joue au ballon.",
          explain: "Avec JE, le verbe finit par -E : je joue.",
          explainHe: "עם JE הפועל נגמר ב-E: je joue."
        },
        {
          type: "fill",
          prompt: "Complète la phrase !",
          promptHe: "השלימו את המשפט!",
          sentence: "Tu jou␣ avec ton ami.",
          choices: ["es", "e", "ons"],
          answer: 0,
          say: "tu joues avec ton ami.",
          explain: "Avec TU, le verbe en -ER finit par -ES : tu joues.",
          explainHe: "עם TU, פועל ב-ER נגמר ב-ES: tu joues."
        },
        {
          type: "pick",
          prompt: "Choisis la bonne forme du verbe !",
          promptHe: "בחרו את הצורה הנכונה של הפועל!",
          question: "La maîtresse ___ une jolie chanson.",
          choices: ["chante", "chantes", "chantent"],
          answer: 0,
          say: "la maîtresse chante une jolie chanson.",
          explain: "La maîtresse = elle. Avec IL ou ELLE, le verbe finit par -E : elle chante.",
          explainHe: "La maîtresse = elle (היא). עם IL או ELLE הפועל נגמר ב-E: elle chante."
        },
        {
          type: "fill",
          prompt: "Complète la phrase !",
          promptHe: "השלימו את המשפט!",
          sentence: "Nous man␣ une pizza.",
          choices: ["geons", "gons", "ge"],
          answer: 0,
          say: "nous mangeons une pizza.",
          explain: "Après le G, on ajoute un E pour garder le son doux : nous mangeons.",
          explainHe: "אחרי G מוסיפים E כדי לשמור על הצליל הרך: nous mangeons."
        },
        {
          type: "build",
          prompt: "Mets la phrase dans l'ordre !",
          promptHe: "סדרו את המשפט לפי הסדר!",
          tiles: ["Ils", "chantent", "une", "chanson", "chante"],
          answer: ["Ils", "chantent", "une", "chanson"],
          say: "ils chantent une chanson.",
          explain: "Avec ILS, le verbe prend -ENT : ils chantent. Le -ENT ne s'entend pas !",
          explainHe: "עם ILS הפועל מקבל ENT- בסוף: ils chantent. את ה-ENT לא שומעים!"
        },
        {
          type: "listen",
          prompt: "Écoute bien et choisis ce que tu entends !",
          promptHe: "הקשיבו טוב ובחרו מה שמעתם!",
          say: "nous nageons",
          choices: ["nous nageons", "vous nagez", "ils nagent"],
          answer: 0,
          explain: "Tu as entendu 'nous' : nous nageons, avec -ONS.",
          explainHe: "שמעתם 'nous': nous nageons, עם ONS- בסוף."
        },
        {
          type: "match",
          prompt: "Relie chaque personne à son verbe !",
          promptHe: "חברו כל גוף לפועל שלו!",
          pairs: [["je", "joue"], ["nous", "jouons"], ["vous", "jouez"], ["ils", "jouent"]],
          explain: "je joue, nous jouons, vous jouez, ils jouent : chaque personne a sa terminaison.",
          explainHe: "je joue, nous jouons, vous jouez, ils jouent: לכל גוף יש סיומת משלו."
        },
        {
          type: "pick",
          prompt: "Quelle phrase est bien écrite ?",
          promptHe: "איזה משפט כתוב נכון?",
          choices: ["Tu manges une pomme.", "Tu mange une pomme.", "Tu mangent une pomme."],
          answer: 0,
          say: "tu manges une pomme.",
          explain: "Avec TU, il faut un S : tu manges.",
          explainHe: "עם TU חייבים S בסוף: tu manges."
        },
        {
          type: "type",
          prompt: "Dictée ! Écoute et écris.",
          promptHe: "הכתבה! הקשיבו וכתבו.",
          say: "je nage",
          answer: "je nage",
          strict: false,
          explain: "je nage : avec JE, le verbe finit par -E.",
          explainHe: "je nage: עם JE הפועל נגמר ב-E."
        },
        {
          type: "read",
          prompt: "Lis cette phrase à voix haute !",
          promptHe: "קראו את המשפט בקול רם!",
          text: "Levy chante, son amie danse\net nous jouons tous ensemble.",
          say: "levy chante, son amie danse et nous jouons tous ensemble.",
          explain: "Bravo ! chante avec -E, jouons avec -ONS.",
          explainHe: "כל הכבוד! chante עם E, jouons עם ONS."
        }
      ],
      joke: {
        q: "Charade ! Mon premier est une note de musique (do, ré, mi...). Mon deuxième : il ... à l'école. Mon troisième veut dire joli. Mon tout est dans la salle de bain !",
        a: "Un LAVABO ! LA + VA + BEAU. C'est là qu'on se lave les mains !",
        qHe: "חידת הברות! הראשון הוא תו במוזיקה (LA). השני: il ... à l'école (VA). השלישי אומר 'יפה' (BEAU). הכול ביחד נמצא בחדר האמבטיה!",
        aHe: "LAVABO (כיור)! LA + VA + BEAU נשמע ביחד כמו lavabo, 'כיור' בצרפתית!"
      }
    },
    {
      id: "n9-s2",
      name: "a ou à, est ou et",
      nameHe: "a או à, est או et",
      emoji: "✏️",
      lesson: {
        cards: [
          {
            title: "a ou à ?",
            titleHe: "a או à?",
            body: "a = le verbe avoir : Levy a un vélo. à = un petit mot de lieu : il va à l'école. Astuce : si tu peux dire 'avait', écris a sans accent !",
            bodyHe: "a = הפועל avoir: Levy a un vélo. à = מילה קטנה של מקום: il va à l'école. טריק: אם אפשר להגיד 'avait', כותבים a בלי אקסנט!",
            big: "Levy a un vélo. Il va à l'école.",
            say: "levy a un vélo. il va à l'école."
          },
          {
            title: "est ou et ?",
            titleHe: "est או et?",
            body: "est = le verbe être : Levy est content. et = ça veut dire 'plus' : le chat et le chien. Astuce : si tu peux dire 'était', écris est !",
            bodyHe: "est = הפועל être: Levy est content. et = זה אומר 'ועוד': le chat et le chien. טריק: אם אפשר להגיד 'était', כותבים est!",
            big: "Levy est content. Le chat et le chien jouent.",
            say: "levy est content. le chat et le chien jouent."
          }
        ]
      },
      exercises: [
        {
          type: "fill",
          prompt: "a ou à ? Complète !",
          promptHe: "a או à? השלימו!",
          sentence: "Levy ␣ un vélo rouge.",
          choices: ["a", "à"],
          answer: 0,
          say: "levy a un vélo rouge.",
          explain: "On peut dire 'Levy AVAIT un vélo' : c'est le verbe avoir, a sans accent.",
          explainHe: "אפשר להגיד 'Levy avait un vélo': זה הפועל avoir, כותבים a בלי אקסנט."
        },
        {
          type: "fill",
          prompt: "a ou à ? Complète !",
          promptHe: "a או à? השלימו!",
          sentence: "Il va ␣ la piscine.",
          choices: ["à", "a"],
          answer: 0,
          say: "il va à la piscine.",
          explain: "On ne peut pas dire 'il va AVAIT la piscine' ! Ici c'est à avec un accent.",
          explainHe: "אי אפשר להגיד 'il va avait la piscine'! כאן זה à עם אקסנט."
        },
        {
          type: "pick",
          prompt: "Quelle phrase est bien écrite ?",
          promptHe: "איזה משפט כתוב נכון?",
          choices: ["La maîtresse a une voiture bleue.", "La maîtresse à une voiture bleue."],
          answer: 0,
          say: "la maîtresse a une voiture bleue.",
          explain: "La maîtresse AVAIT une voiture : ça marche ! Donc a sans accent.",
          explainHe: "'La maîtresse avait une voiture' עובד! לכן a בלי אקסנט."
        },
        {
          type: "fill",
          prompt: "est ou et ? Complète !",
          promptHe: "est או et? השלימו!",
          sentence: "Levy ␣ un garçon gentil.",
          choices: ["est", "et"],
          answer: 0,
          say: "levy est un garçon gentil.",
          explain: "On peut dire 'Levy ÉTAIT gentil' : c'est le verbe être, est.",
          explainHe: "אפשר להגיד 'Levy était gentil': זה הפועל être, כותבים est."
        },
        {
          type: "fill",
          prompt: "est ou et ? Complète !",
          promptHe: "est או et? השלימו!",
          sentence: "Le chat ␣ le chien mangent une glace.",
          choices: ["et", "est"],
          answer: 0,
          say: "le chat et le chien mangent une glace.",
          explain: "et veut dire 'plus' : le chat + le chien. On ne peut pas dire 'le chat était le chien' !",
          explainHe: "et אומר 'ועוד': le chat + le chien. אי אפשר להגיד 'le chat était le chien'!"
        },
        {
          type: "match",
          prompt: "Relie chaque mot à son astuce !",
          promptHe: "חברו כל מילה לטריק שלה!",
          pairs: [["a", "avait"], ["à", "un lieu 📍"], ["est", "était"], ["et", "➕ plus"]],
          explain: "a devient avait, est devient était. à et et ne changent jamais.",
          explainHe: "a הופך ל-avait, est הופך ל-était. à ו-et לא משתנים אף פעם."
        },
        {
          type: "build",
          prompt: "Mets la phrase dans l'ordre !",
          promptHe: "סדרו את המשפט לפי הסדר!",
          tiles: ["Levy", "va", "à", "l'école", "a"],
          answer: ["Levy", "va", "à", "l'école"],
          say: "levy va à l'école.",
          explain: "Il va À l'école : à avec accent, c'est la direction.",
          explainHe: "הוא הולך À l'école: à עם אקסנט, זה הכיוון."
        },
        {
          type: "pick",
          prompt: "Quelle phrase est bien écrite ?",
          promptHe: "איזה משפט כתוב נכון?",
          choices: ["Levy est à la maison.", "Levy et à la maison.", "Levy est a la maison."],
          answer: 0,
          say: "levy est à la maison.",
          explain: "Levy ÉTAIT à la maison : est. Et 'à la maison' = un lieu : à avec accent.",
          explainHe: "'Levy était à la maison': לכן est. ו'à la maison' = מקום: à עם אקסנט."
        },
        {
          type: "fill",
          prompt: "Complète la phrase !",
          promptHe: "השלימו את המשפט!",
          sentence: "Le chaton ␣ deux ans.",
          choices: ["a", "à", "et"],
          answer: 0,
          say: "le chaton a deux ans.",
          explain: "Le chaton AVAIT deux ans : ça marche, donc verbe avoir, a.",
          explainHe: "'Le chaton avait deux ans' עובד: לכן זה הפועל avoir, כותבים a."
        },
        {
          type: "read",
          prompt: "Lis cette phrase à voix haute !",
          promptHe: "קראו את המשפט בקול רם!",
          text: "Levy est à la piscine\net il a un ballon bleu.",
          say: "levy est à la piscine et il a un ballon bleu.",
          explain: "est, à, et, a : les quatre dans une seule phrase, bravo !",
          explainHe: "est, à, et, a: כל הארבעה במשפט אחד, כל הכבוד!"
        }
      ],
      joke: {
        q: "Charade ! Mon premier, on le fait avec les pieds en marchant. Mon deuxième est un petit animal gris à longue queue. Mon troisième tombe des nuages. Mon tout te protège... de mon troisième !",
        a: "Un PARAPLUIE ! PAS + RAT + PLUIE. ☔",
        qHe: "חידת הברות! את הראשון עושים עם הרגליים כשהולכים (PAS - צעד). השני הוא חיה קטנה ואפורה עם זנב ארוך (RAT - עכברוש). השלישי יורד מהעננים (PLUIE - גשם). הכול ביחד מגן עליכם... מהשלישי!",
        aHe: "PARAPLUIE (מטרייה)! PAS + RAT + PLUIE נשמע ביחד כמו 'מטרייה' בצרפתית! ☔"
      }
    },
    {
      id: "n9-s3",
      name: "on, ont, son, sont",
      nameHe: "on, ont, son, sont",
      emoji: "🎨",
      lesson: {
        cards: [
          {
            title: "on ou ont ?",
            titleHe: "on או ont?",
            body: "ont = le verbe avoir avec ils : ils ont un chien (ils avaient). on = quelqu'un, comme il : on joue.",
            bodyHe: "ont = הפועל avoir עם ils: ils ont un chien (אפשר להגיד avaient). on = מישהו, כמו il: on joue.",
            big: "Ils ont un chien. On joue ensemble.",
            say: "ils ont un chien. on joue ensemble."
          },
          {
            title: "son ou sont ?",
            titleHe: "son או sont?",
            body: "sont = le verbe être avec ils : ils sont contents (ils étaient). son = à lui : Levy prend son vélo.",
            bodyHe: "sont = הפועל être עם ils: ils sont contents (אפשר להגיד étaient). son = שלו: Levy prend son vélo.",
            big: "Ils sont grands. Levy aime son vélo.",
            say: "ils sont grands. levy aime son vélo."
          },
          {
            title: "L'adjectif s'accorde",
            titleHe: "שם התואר מתאים את עצמו",
            body: "L'adjectif change avec le mot : un vélo bleu, une trottinette bleue. Au féminin, on ajoute souvent un E.",
            bodyHe: "שם התואר משתנה עם המילה: un vélo bleu, une trottinette bleue. בנקבה מוסיפים בדרך כלל E.",
            big: "un vélo bleu 🚲 une trottinette bleue 🛴",
            say: "un vélo bleu. une trottinette bleue."
          }
        ]
      },
      exercises: [
        {
          type: "fill",
          prompt: "on ou ont ? Complète !",
          promptHe: "on או ont? השלימו!",
          sentence: "Levy et son ami ␣ un chien.",
          choices: ["ont", "on"],
          answer: 0,
          say: "levy et son ami ont un chien.",
          explain: "Ils AVAIENT un chien : ça marche ! C'est le verbe avoir, ont.",
          explainHe: "'Ils avaient un chien' עובד! זה הפועל avoir, כותבים ont."
        },
        {
          type: "fill",
          prompt: "On ou Ont ? Complète !",
          promptHe: "On או Ont? השלימו!",
          sentence: "␣ joue au ballon dans le jardin.",
          choices: ["On", "Ont"],
          answer: 0,
          say: "on joue au ballon dans le jardin.",
          explain: "'IL joue au ballon' marche aussi : on = quelqu'un, comme il.",
          explainHe: "'Il joue au ballon' עובד גם: on = מישהו, כמו il."
        },
        {
          type: "fill",
          prompt: "son ou sont ? Complète !",
          promptHe: "son או sont? השלימו!",
          sentence: "Levy prend ␣ cartable.",
          choices: ["son", "sont"],
          answer: 0,
          say: "levy prend son cartable.",
          explain: "Le cartable est à lui : son cartable. On ne peut pas dire 'étaient' ici.",
          explainHe: "התיק שלו: son cartable. אי אפשר להגיד 'étaient' כאן."
        },
        {
          type: "fill",
          prompt: "son ou sont ? Complète !",
          promptHe: "son או sont? השלימו!",
          sentence: "Les enfants ␣ dans le jardin.",
          choices: ["sont", "son"],
          answer: 0,
          say: "les enfants sont dans le jardin.",
          explain: "Ils ÉTAIENT dans le jardin : c'est le verbe être, sont.",
          explainHe: "'Ils étaient dans le jardin' עובד: זה הפועל être, כותבים sont."
        },
        {
          type: "pick",
          prompt: "Quelle phrase est bien écrite ?",
          promptHe: "איזה משפט כתוב נכון?",
          choices: ["Ils sont très contents.", "Ils son très contents.", "Ils sons très contents."],
          answer: 0,
          say: "ils sont très contents.",
          explain: "Ils ÉTAIENT contents : sont avec un T à la fin.",
          explainHe: "'Ils étaient contents': לכן sont עם T בסוף."
        },
        {
          type: "pick",
          prompt: "Choisis le bon adjectif !",
          promptHe: "בחרו את שם התואר הנכון!",
          question: "une trottinette ___",
          choices: ["bleue", "bleu"],
          answer: 0,
          say: "une trottinette bleue.",
          explain: "Trottinette est féminin : on ajoute un E, bleue.",
          explainHe: "trottinette היא נקבה: מוסיפים E, bleue."
        },
        {
          type: "fill",
          prompt: "Choisis le bon adjectif !",
          promptHe: "בחרו את שם התואר הנכון!",
          sentence: "Levy a un vélo ␣.",
          choices: ["vert", "verte"],
          answer: 0,
          say: "levy a un vélo vert.",
          explain: "Vélo est masculin : vert sans E.",
          explainHe: "vélo הוא זכר: vert בלי E."
        },
        {
          type: "match",
          prompt: "Relie chaque mot à son astuce !",
          promptHe: "חברו כל מילה לטריק שלה!",
          pairs: [["ont", "ils avaient"], ["on", "quelqu'un"], ["sont", "ils étaient"], ["son", "à lui 👦"]],
          explain: "ont devient avaient, sont devient étaient. on = quelqu'un, son = à lui.",
          explainHe: "ont הופך ל-avaient, sont הופך ל-étaient. on = מישהו, son = שלו."
        },
        {
          type: "build",
          prompt: "Assemble : une trottinette bleue !",
          promptHe: "הרכיבו: une trottinette bleue!",
          tiles: ["une", "trottinette", "bleue", "bleu"],
          answer: ["une", "trottinette", "bleue"],
          say: "une trottinette bleue.",
          explain: "Féminin : bleue avec un E à la fin.",
          explainHe: "נקבה: bleue עם E בסוף."
        },
        {
          type: "type",
          prompt: "Dictée ! Écoute et écris.",
          promptHe: "הכתבה! הקשיבו וכתבו.",
          say: "une pomme verte",
          answer: "une pomme verte",
          strict: false,
          explain: "Pomme est féminin : verte avec un E.",
          explainHe: "pomme היא נקבה: verte עם E."
        }
      ],
      joke: {
        q: "Charade ! Mon premier est une barrière de petits buissons. Mon deuxième se mange beaucoup en Chine. Mon troisième, on l'entend avec les oreilles. Mon tout est plein de piquants !",
        a: "Un HÉRISSON ! HAIE + RIZ + SON. Et en plus, SON, tu viens de l'apprendre !",
        qHe: "חידת הברות! הראשון הוא גדר של שיחים קטנים (HAIE). את השני אוכלים הרבה בסין (RIZ - אורז). את השלישי שומעים באוזניים (SON - צליל). הכול ביחד מלא קוצים!",
        aHe: "HÉRISSON (קיפוד)! HAIE + RIZ + SON נשמע ביחד כמו 'קיפוד' בצרפתית! ובנוסף, את SON בדיוק למדתם!"
      }
    },
    {
      id: "n9-s4",
      name: "Le grand défi",
      nameHe: "האתגר הגדול",
      emoji: "💪",
      lesson: {
        cards: [
          {
            title: "Le grand défi !",
            titleHe: "האתגר הגדול!",
            body: "Tu es presque champion ! Verbes, homophones, accords : montre tout ce que tu sais. Levy croit en toi !",
            bodyHe: "אתם כמעט אלופים! פעלים, מילים דומות, התאמות: תראו כל מה שאתם יודעים. Levy מאמין בכם!",
            big: "🏆"
          }
        ]
      },
      exercises: [
        {
          type: "pick",
          prompt: "Choisis la bonne forme du verbe !",
          promptHe: "בחרו את הצורה הנכונה של הפועל!",
          question: "Nous ___ à la piscine.",
          choices: ["nageons", "nagons", "nagez"],
          answer: 0,
          say: "nous nageons à la piscine.",
          explain: "Nous nageons : avec un E après le G pour garder le son doux.",
          explainHe: "nous nageons: עם E אחרי G כדי לשמור על הצליל הרך."
        },
        {
          type: "fill",
          prompt: "a ou à ? Complète !",
          promptHe: "a או à? השלימו!",
          sentence: "Levy ␣ une kippa neuve.",
          choices: ["a", "à"],
          answer: 0,
          say: "levy a une kippa neuve.",
          explain: "Levy AVAIT une kippa : verbe avoir, a sans accent.",
          explainHe: "'Levy avait une kippa': הפועל avoir, כותבים a בלי אקסנט."
        },
        {
          type: "fill",
          prompt: "est ou et ? Complète !",
          promptHe: "est או et? השלימו!",
          sentence: "Le chat ␣ sur le lit.",
          choices: ["est", "et"],
          answer: 0,
          say: "le chat est sur le lit.",
          explain: "Le chat ÉTAIT sur le lit : verbe être, est.",
          explainHe: "'Le chat était sur le lit': הפועל être, כותבים est."
        },
        {
          type: "fill",
          prompt: "on ou ont ? Complète !",
          promptHe: "on או ont? השלימו!",
          sentence: "Les enfants ␣ des cadeaux de Hanouka.",
          choices: ["ont", "on"],
          answer: 0,
          say: "les enfants ont des cadeaux de hanouka.",
          explain: "Ils AVAIENT des cadeaux : verbe avoir, ont.",
          explainHe: "'Ils avaient des cadeaux': הפועל avoir, כותבים ont."
        },
        {
          type: "fill",
          prompt: "son ou sont ? Complète !",
          promptHe: "son או sont? השלימו!",
          sentence: "La maîtresse prête ␣ stylo à Levy.",
          choices: ["son", "sont"],
          answer: 0,
          say: "la maîtresse prête son stylo à levy.",
          explain: "Le stylo est à elle : son stylo.",
          explainHe: "העט שלה: son stylo."
        },
        {
          type: "pick",
          prompt: "Choisis le bon adjectif !",
          promptHe: "בחרו את שם התואר הנכון!",
          question: "un ballon ___",
          choices: ["bleu", "bleue"],
          answer: 0,
          say: "un ballon bleu.",
          explain: "Ballon est masculin : bleu sans E.",
          explainHe: "ballon הוא זכר: bleu בלי E."
        },
        {
          type: "build",
          prompt: "Mets la phrase dans l'ordre !",
          promptHe: "סדרו את המשפט לפי הסדר!",
          tiles: ["On", "chante", "et", "on", "danse", "ont"],
          answer: ["On", "chante", "et", "on", "danse"],
          say: "on chante et on danse.",
          explain: "on = quelqu'un. La tuile 'ont' était un piège !",
          explainHe: "on = מישהו. האריח 'ont' היה מלכודת!"
        },
        {
          type: "listen",
          prompt: "Écoute bien et choisis ce que tu entends !",
          promptHe: "הקשיבו טוב ובחרו מה שמעתם!",
          say: "vous chantez",
          choices: ["vous chantez", "tu chantes", "ils chantent"],
          answer: 0,
          explain: "Tu as entendu 'vous' : vous chantez, avec -EZ.",
          explainHe: "שמעתם 'vous': vous chantez, עם EZ- בסוף."
        },
        {
          type: "type",
          prompt: "Dictée ! Écris la phrase exactement.",
          promptHe: "הכתבה! כתבו את המשפט בדיוק.",
          say: "ils chantent",
          answer: "ils chantent",
          strict: true,
          explain: "Avec ILS, le verbe prend -ENT à la fin, même si on ne l'entend pas : ils chantent.",
          explainHe: "עם ILS הפועל מקבל ENT- בסוף, גם אם לא שומעים: ils chantent."
        },
        {
          type: "riddle",
          prompt: "Devinette !",
          promptHe: "חידה!",
          question: "Mon premier est un animal qui miaule.\nMon second recouvre tout ton corps.\nMon tout se porte sur la tête.",
          choices: ["un chapeau", "un château", "un chameau"],
          answer: 0,
          say: "mon premier est un animal qui miaule. mon second recouvre tout ton corps. mon tout se porte sur la tête.",
          explain: "CHAT + PEAU = CHAPEAU ! 🎩",
          explainHe: "CHAT (חתול) + PEAU (עור) = CHAPEAU (כובע)! 🎩"
        },
        {
          type: "match",
          prompt: "Relie chaque personne à son verbe !",
          promptHe: "חברו כל גוף לפועל שלו!",
          pairs: [["je", "mange"], ["nous", "mangeons"], ["vous", "mangez"], ["ils", "mangent"]],
          explain: "je mange, nous mangeons, vous mangez, ils mangent.",
          explainHe: "je mange, nous mangeons, vous mangez, ils mangent: לכל גוף הסיומת שלו."
        },
        {
          type: "read",
          prompt: "Lis ce petit texte à voix haute !",
          promptHe: "קראו את הקטע הקצר בקול רם!",
          text: "On est presque à la fin !\nLevy et la maîtresse sont fiers de toi.\nTu as travaillé comme un champion.\nBravo, on continue ensemble !",
          say: "on est presque à la fin ! levy et la maîtresse sont fiers de toi. tu as travaillé comme un champion. bravo, on continue ensemble !",
          explain: "Quatre phrases avec on, sont, et, as : champion !",
          explainHe: "ארבעה משפטים עם on, sont, et, as: אלופים!"
        }
      ],
      joke: {
        q: "Charade ! Mon premier sort de la bouche quand on fait de la musique. Mon deuxième est un oiseau noir et blanc qui adore ce qui brille. Mon troisième est un petit mot qui veut dire 'quelqu'un'. Mon tout... c'est TOI à la fin de ce niveau !",
        a: "Un CHAMPION ! CHANT + PIE + ON. Bravo, champion ! 🏆",
        qHe: "חידת הברות! הראשון יוצא מהפה כששרים (CHANT - שירה). השני הוא ציפור שחורה-לבנה שאוהבת דברים נוצצים (PIE - עקעק). השלישי הוא מילה קטנה שאומרת 'מישהו' (ON). הכול ביחד... זה אתם בסוף השלב הזה!",
        aHe: "CHAMPION (אלוף)! CHANT + PIE + ON נשמע ביחד כמו 'אלוף' בצרפתית. כל הכבוד, אלופים! 🏆"
      }
    }
  ]
});
