window.LEVELS = window.LEVELS || [];
window.LEVELS.push({
  id: "n10",
  order: 10,
  name: "Super-champion",
  nameHe: "סופר-אלוף",
  emoji: "👑",
  color: "#B71C1C",
  tagline: "Je deviens un super-champion du français !",
  taglineHe: "אני הופך לסופר-אלוף בצרפתית!",
  sublevels: [
    {
      id: "n10-s1",
      name: "Le futur",
      nameHe: "העתיד",
      emoji: "🚀",
      lesson: {
        cards: [
          {
            title: "Le futur proche",
            titleHe: "העתיד הקרוב",
            body: "Pour dire ce qui va bientôt arriver, on utilise aller + verbe : je vais jouer, tu vas manger, il va lire.",
            bodyHe: "כדי להגיד מה שיקרה בקרוב, משתמשים ב-aller + פועל: je vais jouer (אני הולך לשחק), tu vas manger, il va lire.",
            big: "je vais jouer",
            say: "je vais jouer. tu vas manger. il va lire."
          },
          {
            title: "Le futur simple",
            titleHe: "העתיד הפשוט",
            body: "Pour dire ce qui arrivera plus tard, le verbe se termine par -rai, -ras, -ra : je jouerai, tu joueras, il jouera.",
            bodyHe: "כדי להגיד מה שיקרה מאוחר יותר, הפועל מסתיים ב-rai, -ras, -ra: je jouerai (אני אשחק), tu joueras, il jouera.",
            big: "je jouerai",
            say: "je jouerai. tu joueras. il jouera."
          },
          {
            title: "Deux façons de parler de demain",
            titleHe: "שתי דרכים לדבר על מחר",
            body: "Demain, je vais jouer = futur proche. Demain, je jouerai = futur simple. Les deux parlent de demain !",
            bodyHe: "Demain, je vais jouer = עתיד קרוב. Demain, je jouerai = עתיד פשוט. שני המשפטים מדברים על מחר!",
            big: "demain",
            say: "demain, je vais jouer. demain, je jouerai."
          }
        ]
      },
      exercises: [
        {
          type: "pick",
          prompt: "Quelle phrase parle du futur ?",
          promptHe: "איזה משפט מדבר על העתיד?",
          choices: ["Hier, j'ai nagé.", "Aujourd'hui, je nage.", "Demain, je vais nager."],
          answer: 2,
          say: "demain, je vais nager",
          explain: "« Je vais nager » = futur proche : ça va arriver bientôt !",
          explainHe: "«Je vais nager» = עתיד קרוב: זה יקרה בקרוב!"
        },
        {
          type: "pick",
          prompt: "C'est quel temps ?",
          promptHe: "איזה זמן זה?",
          question: "il va lire",
          choices: ["le présent", "le futur proche", "le passé"],
          answer: 1,
          say: "il va lire",
          explain: "va + verbe = futur proche. Il va lire : bientôt, il lira !",
          explainHe: "va + פועל = עתיד קרוב. Il va lire: בקרוב הוא יקרא!"
        },
        {
          type: "pick",
          prompt: "Trouve le verbe au futur simple !",
          promptHe: "מצאו את הפועל בעתיד הפשוט!",
          choices: ["je chante", "je vais chanter", "je chanterai"],
          answer: 2,
          say: "je chanterai",
          explain: "-rai à la fin = futur simple : je chanterai.",
          explainHe: "-rai בסוף = עתיד פשוט: je chanterai."
        },
        {
          type: "listen",
          prompt: "Écoute : présent ou futur ?",
          promptHe: "הקשיבו: הווה או עתיד?",
          say: "demain, nous irons à la piscine",
          choices: ["le présent", "le futur"],
          answer: 1,
          explain: "« Demain, nous irons » : c'est le futur !",
          explainHe: "«Demain, nous irons» (מחר נלך לבריכה): זה עתיד!"
        },
        {
          type: "match",
          prompt: "Relie chaque phrase à son temps !",
          promptHe: "חברו כל משפט לזמן שלו!",
          pairs: [["je vais lire", "futur proche"], ["je lirai", "futur simple"], ["je lis", "présent"]],
          explain: "vais + verbe = futur proche, -rai = futur simple, sinon présent.",
          explainHe: "vais + פועל = עתיד קרוב, -rai = עתיד פשוט, אחרת זה הווה."
        },
        {
          type: "pick",
          prompt: "« Je jouerai au parc. » C'est demain ou hier ?",
          promptHe: "«Je jouerai au parc.» זה מחר או אתמול?",
          choices: ["demain", "hier"],
          answer: 0,
          say: "je jouerai au parc",
          explain: "Jouerai = futur simple, donc c'est pour demain !",
          explainHe: "Jouerai = עתיד פשוט, אז זה יקרה מחר!"
        },
        {
          type: "pick",
          prompt: "Quelle phrase est au futur proche ?",
          promptHe: "איזה משפט הוא בעתיד קרוב?",
          choices: ["Levy fait du vélo.", "Levy va faire du vélo.", "Levy fera du vélo."],
          answer: 1,
          say: "Levy va faire du vélo",
          explain: "va faire = futur proche. « Fera » est le futur simple.",
          explainHe: "va faire = עתיד קרוב. «Fera» זה עתיד פשוט."
        },
        {
          type: "pick",
          prompt: "Quelle phrase est au futur simple ?",
          promptHe: "איזה משפט הוא בעתיד פשוט?",
          choices: ["La maîtresse va chanter.", "La maîtresse chante bien.", "La maîtresse chantera demain."],
          answer: 2,
          say: "la maîtresse chantera demain",
          explain: "chantera = futur simple : -ra à la fin du verbe.",
          explainHe: "chantera = עתיד פשוט: -ra בסוף הפועל."
        },
        {
          type: "read",
          prompt: "Lis ces phrases du futur à voix haute !",
          promptHe: "קראו את משפטי העתיד בקול רם!",
          text: "Demain, je vais ranger ma chambre.\nSamedi, nous fêterons Shabbat.\nPlus tard, je serai grand.",
          say: "demain, je vais ranger ma chambre. samedi, nous fêterons chabbat. plus tard, je serai grand.",
          explain: "Bravo ! Tu lis le futur comme un champion !",
          explainHe: "כל הכבוד! אתם קוראים את העתיד כמו אלופים!"
        },
        {
          type: "pick",
          prompt: "Vrai ou faux ?",
          promptHe: "נכון או לא נכון?",
          question: "« Il va pleuvoir » parle du futur.",
          choices: ["Vrai", "Faux"],
          answer: 0,
          say: "il va pleuvoir",
          explain: "va pleuvoir = futur proche : la pluie arrive bientôt !",
          explainHe: "va pleuvoir = עתיד קרוב: הגשם יגיע בקרוב!"
        }
      ],
      joke: {
        q: "Pourquoi les squelettes ne se battent-ils jamais entre eux ?",
        a: "Parce qu'ils n'ont pas les tripes !",
        qHe: "למה שלדים אף פעם לא רבים זה עם זה?",
        aHe: "כי אין להם tripes! (בצרפתית tripes זה גם 'מעיים' וגם 'אומץ' – ולשלדים אין מעיים!)"
      }
    },
    {
      id: "n10-s2",
      name: "Le passé composé",
      nameHe: "זמן עבר",
      emoji: "🕰️",
      lesson: {
        cards: [
          {
            title: "Raconter ce qui est passé",
            titleHe: "לספר מה שכבר קרה",
            body: "Pour raconter ce qui est déjà arrivé, on utilise avoir + verbe : j'ai mangé, tu as joué, il a fini. C'est le passé composé !",
            bodyHe: "כדי לספר מה שכבר קרה, משתמשים ב-avoir + פועל: j'ai mangé (אכלתי), tu as joué, il a fini. זה נקרא passé composé!",
            big: "j'ai mangé",
            say: "j'ai mangé. tu as joué. il a fini."
          },
          {
            title: "La terminaison -é",
            titleHe: "הסיומת é",
            body: "Avec les verbes en -er, on écrit -é à la fin : j'ai mangé, elle a dansé, nous avons joué.",
            bodyHe: "עם פעלים שמסתיימים ב-er, כותבים é בסוף: j'ai mangé, elle a dansé, nous avons joué.",
            big: "-é",
            say: "é. j'ai mangé. elle a dansé. nous avons joué."
          },
          {
            title: "Hier, aujourd'hui, demain",
            titleHe: "אתמול, היום, מחר",
            body: "Hier, j'ai joué (passé). Aujourd'hui, je joue (présent). Demain, je jouerai (futur). Tu connais les trois temps !",
            bodyHe: "אתמול: j'ai joué (עבר). היום: je joue (הווה). מחר: je jouerai (עתיד). אתם מכירים את שלושת הזמנים!",
            big: "hier → aujourd'hui → demain",
            say: "hier, j'ai joué. aujourd'hui, je joue. demain, je jouerai."
          }
        ]
      },
      exercises: [
        {
          type: "pick",
          prompt: "Quelle phrase parle d'hier ?",
          promptHe: "איזה משפט מדבר על אתמול?",
          choices: ["Je mange une pomme.", "J'ai mangé une pomme.", "Je mangerai une pomme."],
          answer: 1,
          say: "j'ai mangé une pomme",
          explain: "j'ai mangé = passé composé : c'est déjà arrivé !",
          explainHe: "j'ai mangé = זמן עבר: זה כבר קרה!"
        },
        {
          type: "pick",
          prompt: "C'est quel temps ?",
          promptHe: "איזה זמן זה?",
          question: "il a joué",
          choices: ["le présent", "le passé composé", "le futur"],
          answer: 1,
          say: "il a joué",
          explain: "a + verbe avec -é = passé composé : il a joué.",
          explainHe: "a + פועל עם é = זמן עבר: il a joué."
        },
        {
          type: "fill",
          prompt: "Complète au passé composé !",
          promptHe: "השלימו בזמן עבר!",
          sentence: "Hier, Levy a mang␣ une pizza.",
          choices: ["er", "e", "é"],
          answer: 2,
          say: "hier, Levy a mangé une pizza",
          explain: "Après « a », le verbe en -er s'écrit avec -é : a mangé.",
          explainHe: "אחרי «a», פועל שמסתיים ב-er נכתב עם é: a mangé."
        },
        {
          type: "fill",
          prompt: "Choisis le bon mot !",
          promptHe: "בחרו את המילה הנכונה!",
          sentence: "Levy ␣ trouvé son ballon.",
          choices: ["à", "a", "as"],
          answer: 1,
          say: "Levy a trouvé son ballon",
          explain: "« a » = le verbe avoir : Levy a trouvé son ballon.",
          explainHe: "«a» = הפועל avoir (יש): Levy a trouvé son ballon."
        },
        {
          type: "pick",
          prompt: "Trouve le verbe au passé composé !",
          promptHe: "מצאו את הפועל בזמן עבר!",
          choices: ["nous chantons", "nous chanterons", "nous avons chanté"],
          answer: 2,
          say: "nous avons chanté",
          explain: "avons chanté = passé composé : c'est déjà chanté !",
          explainHe: "avons chanté = זמן עבר: כבר שרנו!"
        },
        {
          type: "listen",
          prompt: "Écoute : passé ou futur ?",
          promptHe: "הקשיבו: עבר או עתיד?",
          say: "Levy a dessiné un chat",
          choices: ["le passé", "le futur"],
          answer: 0,
          explain: "a dessiné = passé composé : le dessin est déjà fait !",
          explainHe: "a dessiné = זמן עבר: הציור כבר מוכן!"
        },
        {
          type: "match",
          prompt: "Relie chaque moment à sa phrase !",
          promptHe: "חברו כל רגע למשפט שלו!",
          pairs: [["hier", "j'ai joué"], ["aujourd'hui", "je joue"], ["demain", "je jouerai"]],
          explain: "Hier = passé, aujourd'hui = présent, demain = futur !",
          explainHe: "אתמול = עבר, היום = הווה, מחר = עתיד!"
        },
        {
          type: "fill",
          prompt: "Complète la phrase !",
          promptHe: "השלימו את המשפט!",
          sentence: "Nous ␣ fêté Hanouka.",
          choices: ["avez", "avons", "ont"],
          answer: 1,
          say: "nous avons fêté hanouka",
          explain: "Avec « nous », on dit avons : nous avons fêté.",
          explainHe: "עם «nous» אומרים avons: nous avons fêté."
        },
        {
          type: "build",
          prompt: "Remets la phrase dans l'ordre !",
          promptHe: "סדרו את המשפט לפי הסדר!",
          tiles: ["mangé", "J'ai", "une", "glace."],
          answer: ["J'ai", "mangé", "une", "glace."],
          say: "j'ai mangé une glace",
          explain: "J'ai + mangé : le passé composé s'écrit en deux mots !",
          explainHe: "J'ai + mangé: זמן העבר נכתב בשתי מילים!"
        },
        {
          type: "pick",
          prompt: "Vrai ou faux ?",
          promptHe: "נכון או לא נכון?",
          question: "« Le chat a dormi » parle du passé.",
          choices: ["Vrai", "Faux"],
          answer: 0,
          say: "le chat a dormi",
          explain: "a dormi = passé composé : le chat a déjà dormi.",
          explainHe: "a dormi = זמן עבר: החתול כבר ישן."
        }
      ],
      joke: {
        q: "Pourquoi les livres n'ont-ils jamais froid ?",
        a: "Parce qu'ils ont une couverture !",
        qHe: "למה לספרים אף פעם לא קר?",
        aHe: "כי יש להם couverture! (בצרפתית זו גם כריכה של ספר וגם שמיכה – משחק מילים!)"
      }
    },
    {
      id: "n10-s3",
      name: "Dictées et histoires",
      nameHe: "הכתבות וסיפורים",
      emoji: "📖",
      lesson: {
        cards: [
          {
            title: "Les grands mots",
            titleHe: "המילים הגדולות",
            body: "Tu sais écrire de grands mots maintenant ! Découpe-les en syllabes : an-ni-ver-saire, mon-ta-gne, té-lé-phone.",
            bodyHe: "אתם כבר יודעים לכתוב מילים גדולות! חלקו אותן להברות: an-ni-ver-saire, mon-ta-gne, té-lé-phone.",
            big: "anniversaire",
            say: "anniversaire. montagne. téléphone."
          },
          {
            title: "L'astuce de la dictée",
            titleHe: "הטריק של ההכתבה",
            body: "Écoute le mot, découpe-le en syllabes dans ta tête, puis écris syllabe par syllabe. Facile !",
            bodyHe: "הקשיבו למילה, חלקו אותה להברות בראש, ואז כתבו הברה אחרי הברה. קל!",
            say: "an. ni. ver. saire. anniversaire !"
          },
          {
            title: "Lire comme un détective",
            titleHe: "לקרוא כמו בלש",
            body: "Quand tu lis une histoire, cherche les indices : qui ? où ? pourquoi ? comment ? Les réponses se cachent dans le texte !",
            bodyHe: "כשקוראים סיפור, מחפשים רמזים: מי? איפה? למה? איך? התשובות מתחבאות בטקסט!",
            big: "🔍"
          }
        ]
      },
      exercises: [
        {
          type: "type",
          prompt: "Écoute et écris ce grand mot !",
          promptHe: "הקשיבו וכתבו את המילה הגדולה!",
          say: "anniversaire",
          answer: "anniversaire",
          strict: false,
          explain: "an-ni-ver-saire : 4 syllabes, avec deux N !",
          explainHe: "an-ni-ver-saire: 4 הברות, עם שתי N!"
        },
        {
          type: "type",
          prompt: "Écoute et écris le mot !",
          promptHe: "הקשיבו וכתבו את המילה!",
          say: "montagne",
          answer: "montagne",
          strict: false,
          explain: "mon-ta-gne : le son GN comme dans ligne !",
          explainHe: "mon-ta-gne: הצליל GN כמו במילה ligne!"
        },
        {
          type: "read",
          prompt: "Lis cette histoire à voix haute !",
          promptHe: "קראו את הסיפור בקול רם!",
          text: "C'est l'anniversaire de Levy. Ses amis ont préparé un gâteau au chocolat.\nLa maîtresse a décoré la classe. Un ami a caché les cadeaux pour faire une surprise.\nQuand Levy entre, tout le monde crie : « Mazal Tov ! »\nLevy saute de joie et ouvre son cadeau : un vélo rouge !",
          say: "c'est l'anniversaire de Levy. ses amis ont préparé un gâteau au chocolat. la maîtresse a décoré la classe. un ami a caché les cadeaux pour faire une surprise. quand Levy entre, tout le monde crie : mazal tov ! levy saute de joie et ouvre son cadeau : un vélo rouge !",
          explain: "Quelle belle fête d'anniversaire ! Tu as lu une grande histoire !",
          explainHe: "איזו מסיבת יום הולדת יפה! קראתם סיפור גדול!"
        },
        {
          type: "pick",
          prompt: "Pourquoi l'ami a-t-il caché les cadeaux ?",
          promptHe: "למה החבר החביא את המתנות?",
          question: "Un ami a caché les cadeaux pour faire une surprise.",
          choices: ["parce qu'il est fâché", "pour faire une surprise", "pour jouer à cache-cache"],
          answer: 1,
          explain: "Le texte le dit : pour faire une surprise à Levy !",
          explainHe: "הטקסט אומר: כדי לעשות הפתעה ל-Levy!"
        },
        {
          type: "pick",
          prompt: "Comment Levy montre-t-il sa joie ?",
          promptHe: "איך Levy מראה את השמחה שלו?",
          question: "Levy saute de joie et ouvre son cadeau.",
          choices: ["il pleure", "il va dormir", "il saute de joie"],
          answer: 2,
          explain: "Levy saute de joie : il est très content !",
          explainHe: "Levy קופץ משמחה: הוא מאוד שמח!"
        },
        {
          type: "type",
          prompt: "Écoute et écris le mot !",
          promptHe: "הקשיבו וכתבו את המילה!",
          say: "téléphone",
          answer: "téléphone",
          strict: false,
          explain: "té-lé-phone : le son F s'écrit PH !",
          explainHe: "té-lé-phone: הצליל F נכתב PH!"
        },
        {
          type: "read",
          prompt: "Lis cette histoire à voix haute !",
          promptHe: "קראו את הסיפור בקול רם!",
          text: "Dimanche, la classe est allée à la montagne. Un ami a marché doucement parce qu'il est fatigué.\nEn haut, la maîtresse a montré la vallée. Levy a pris une photo avec son téléphone.\nUne amie a trouvé une fleur violette. Quelle belle journée !",
          say: "dimanche, la classe est allée à la montagne. un ami a marché doucement parce qu'il est fatigué. en haut, la maîtresse a montré la vallée. levy a pris une photo avec son téléphone. une amie a trouvé une fleur violette. quelle belle journée !",
          explain: "Bravo ! Une grande histoire lue comme un champion !",
          explainHe: "כל הכבוד! קראתם סיפור גדול כמו אלופים!"
        },
        {
          type: "pick",
          prompt: "Pourquoi l'ami a-t-il marché doucement ?",
          promptHe: "למה החבר הלך לאט?",
          question: "Un ami a marché doucement parce qu'il est fatigué.",
          choices: ["parce qu'il est fatigué", "parce qu'il a peur", "parce qu'il a perdu ses chaussures"],
          answer: 0,
          explain: "Le texte le dit : il est fatigué !",
          explainHe: "הטקסט אומר: הוא עייף!"
        },
        {
          type: "pick",
          prompt: "Comment Levy a-t-il pris la photo ?",
          promptHe: "איך Levy צילם את התמונה?",
          question: "Levy a pris une photo avec son téléphone.",
          choices: ["avec son appareil photo", "avec son téléphone", "avec le téléphone de la maîtresse"],
          answer: 1,
          explain: "Le texte dit : avec son téléphone !",
          explainHe: "הטקסט אומר: עם הטלפון שלו!"
        },
        {
          type: "type",
          prompt: "Écoute et écris le mot !",
          promptHe: "הקשיבו וכתבו את המילה!",
          say: "chapeau",
          answer: "chapeau",
          strict: false,
          explain: "cha-peau : le son O de la fin s'écrit E-A-U !",
          explainHe: "cha-peau: הצליל O בסוף נכתב E-A-U!"
        }
      ],
      joke: {
        q: "Quelle est la lettre la plus coupante de l'alphabet ?",
        a: "Le H, parce qu'il se prononce comme « hache » !",
        qHe: "מהי האות הכי חדה באלף-בית?",
        aHe: "האות H! (בצרפתית קוראים לה 'ache', בדיוק כמו hache – גרזן!)"
      }
    },
    {
      id: "n10-s4",
      name: "Le grand défi final",
      nameHe: "האתגר הגדול האחרון",
      emoji: "🏆",
      lesson: {
        cards: [
          {
            title: "Le défi des super-champions !",
            titleHe: "האתגר של הסופר-אלופים!",
            body: "C'est le moment, champion ! Le tout dernier défi : des lettres, des syllabes, des sons, des mots, des phrases et des verbes... tout ce que tu as appris depuis le début ! Levy croit en toi. À toi de jouer !",
            bodyHe: "הגיע הרגע, אלוף! האתגר האחרון: אותיות, הברות, צלילים, מילים, משפטים ופעלים... כל מה שלמדתם מההתחלה! Levy מאמין בכם. קדימה!",
            big: "👑",
            say: "c'est le grand défi final ! bonne chance, champion !"
          }
        ]
      },
      exercises: [
        {
          type: "pick",
          prompt: "Quelle lettre vient juste après le P ?",
          promptHe: "איזו אות באה מיד אחרי P?",
          choices: ["O", "Q", "R"],
          answer: 1,
          say: "pé",
          explain: "Dans l'alphabet : N, O, P, Q, R !",
          explainHe: "באלף-בית: N, O, P, Q, R!"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis la syllabe !",
          promptHe: "הקשיבו ובחרו את ההברה!",
          say: "mo",
          choices: ["ma", "mo", "mi"],
          answer: 1,
          explain: "M + O = mo, comme dans moto !",
          explainHe: "M + O = mo, כמו במילה moto!"
        },
        {
          type: "build",
          prompt: "Assemble le mot chocolat !",
          promptHe: "הרכיבו את המילה chocolat!",
          tiles: ["co", "cho", "lat", "cha"],
          answer: ["cho", "co", "lat"],
          say: "chocolat",
          explain: "cho-co-lat : trois syllabes délicieuses !",
          explainHe: "cho-co-lat: שלוש הברות טעימות!"
        },
        {
          type: "pick",
          prompt: "Dans quel mot entends-tu le son ON ?",
          promptHe: "באיזו מילה שומעים את הצליל ON?",
          choices: ["mardi", "matin", "maison"],
          answer: 2,
          say: "maison. matin. mardi.",
          explain: "mai-son : on entend ON à la fin !",
          explainHe: "mai-son: שומעים ON בסוף!"
        },
        {
          type: "fill",
          prompt: "Complète le mot !",
          promptHe: "השלימו את המילה!",
          sentence: "Levy boit un verre d'␣.",
          choices: ["o", "eau", "ho"],
          answer: 1,
          say: "un verre d'eau",
          explain: "Le son O de l'eau s'écrit E-A-U !",
          explainHe: "הצליל O במילה eau נכתב E-A-U!"
        },
        {
          type: "pick",
          prompt: "Quelle phrase est bien écrite ?",
          promptHe: "איזה משפט כתוב נכון?",
          choices: ["levy joue au parc.", "Levy joue au parc.", "Levy joue au parc"],
          answer: 1,
          say: "Levy joue au parc",
          explain: "Une phrase commence par une majuscule et finit par un point !",
          explainHe: "משפט מתחיל באות גדולה ומסתיים בנקודה!"
        },
        {
          type: "type",
          prompt: "Dictée ! Écoute et écris le mot.",
          promptHe: "הכתבה! הקשיבו וכתבו את המילה.",
          say: "dimanche",
          answer: "dimanche",
          strict: false,
          explain: "di-manche : le son AN s'écrit A-N !",
          explainHe: "di-manche: הצליל AN נכתב A-N!"
        },
        {
          type: "fill",
          prompt: "Complète la phrase !",
          promptHe: "השלימו את המשפט!",
          sentence: "Il y a deux chat␣ dans le jardin.",
          choices: ["x", "t", "s"],
          answer: 2,
          say: "deux chats",
          explain: "Deux chats : au pluriel, on ajoute un S !",
          explainHe: "שני חתולים: ברבים מוסיפים S!"
        },
        {
          type: "fill",
          prompt: "Choisis le bon mot !",
          promptHe: "בחרו את המילה הנכונה!",
          sentence: "Levy ␣ à l'école.",
          choices: ["et", "es", "est"],
          answer: 2,
          say: "Levy est à l'école",
          explain: "est = le verbe être : Levy est à l'école.",
          explainHe: "est = הפועל être (להיות): Levy est à l'école."
        },
        {
          type: "match",
          prompt: "Relie chaque moment à son verbe !",
          promptHe: "חברו כל רגע לפועל שלו!",
          pairs: [["hier", "j'ai chanté"], ["aujourd'hui", "je chante"], ["demain", "je chanterai"]],
          explain: "Passé, présent, futur : tu connais les trois temps !",
          explainHe: "עבר, הווה, עתיד: אתם מכירים את שלושת הזמנים!"
        },
        {
          type: "riddle",
          prompt: "Devinette de champion !",
          promptHe: "חידת אלופים!",
          question: "Mon premier est le contraire de froid.\nMon second est le contraire de tard.\nMon tout est la maison d'un roi.",
          choices: ["chapeau", "gâteau", "château"],
          answer: 2,
          say: "mon premier est le contraire de froid. mon second est le contraire de tard. mon tout est la maison d'un roi.",
          explain: "CHAUD + TÔT = CHÂTEAU ! La maison du roi ! 🏰",
          explainHe: "CHAUD (חם) + TÔT (מוקדם) = CHÂTEAU (טירה)! הבית של המלך! 🏰"
        },
        {
          type: "read",
          prompt: "Lis le message de Levy à voix haute !",
          promptHe: "קראו את ההודעה של Levy בקול רם!",
          text: "Bravo, champion !\nTu as appris les lettres, les sons, les mots et les phrases.\nTu sais lire le passé, le présent et le futur.\nTu es un super-champion du français !",
          say: "bravo, champion ! tu as appris les lettres, les sons, les mots et les phrases. tu sais lire le passé, le présent et le futur. tu es un super-champion du français !",
          explain: "Tu l'as fait ! Levy est très fier de toi ! 👑",
          explainHe: "עשיתם את זה! Levy כל כך גאה בכם! 👑"
        }
      ],
      joke: {
        q: "Monsieur et Madame Térieur ont deux fils. Comment s'appellent-ils ?",
        a: "Alain et Alex ! (Alain Térieur et Alex Térieur !)",
        qHe: "לאדון ולגברת Térieur יש שני בנים. איך קוראים להם?",
        aHe: "Alain ו-Alex! (בצרפתית Alain Térieur נשמע כמו à l'intérieur – בפנים, ו-Alex Térieur כמו à l'extérieur – בחוץ!)"
      }
    }
  ]
});
