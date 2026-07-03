window.LEVELS = window.LEVELS || [];
window.LEVELS.push({
  id: "n1",
  order: 1,
  name: "Les lettres",
  nameHe: "האותיות",
  emoji: "🔤",
  color: "#1A56A0",
  tagline: "Je découvre l'alphabet !",
  taglineHe: "אני מגלה את האלף-בית!",
  sublevels: [
    {
      id: "n1-s1",
      name: "Les voyelles",
      nameHe: "התנועות",
      emoji: "🌟",
      lesson: {
        cards: [
          {
            title: "Les voyelles magiques",
            titleHe: "התנועות הקסומות",
            body: "Les voyelles sont les reines des lettres : A E I O U Y. On les entend dans presque tous les mots !",
            bodyHe: "התנועות הן מלכות האותיות: A E I O U Y. שומעים אותן כמעט בכל מילה!",
            big: "A E I O U Y",
            say: "a. euh. i. o. u. i grec."
          },
          {
            title: "Chaque voyelle chante son nom",
            titleHe: "כל תנועה שרה את השם שלה",
            body: "A dit 'a', E dit 'euh', I dit 'i', O dit 'o', U dit 'u'. Et Y a un nom rigolo : 'i grec' !",
            bodyHe: "A אומרת 'אָה', E אומרת 'אֶה', I אומרת 'אִי', O אומרת 'אוֹ', U אומרת 'אוּ'. ול-Y יש שם מצחיק: 'אִי גְרֶק'!",
            big: "A E I O U Y",
            say: "a. euh. i. o. u. i grec."
          },
          {
            title: "On lit de gauche à droite !",
            titleHe: "קוראים משמאל לימין!",
            body: "En hébreu, on lit de droite à gauche. En français, c'est le contraire : on lit de GAUCHE à DROITE !",
            bodyHe: "בעברית קוראים מימין לשמאל. בצרפתית זה הפוך: קוראים משמאל לימין!",
            big: "➡️ ➡️ ➡️",
            say: "En français, on lit de gauche à droite !"
          }
        ]
      },
      exercises: [
        {
          type: "pick",
          prompt: "Trouve la lettre A !",
          promptHe: "מצאו את האות A!",
          choices: ["A", "E", "O"],
          answer: 0,
          say: "a",
          explain: "Voici A ! C'est la première lettre de l'alphabet.",
          explainHe: "הנה A! זו האות הראשונה באלף-בית."
        },
        {
          type: "listen",
          prompt: "Écoute et choisis la lettre que tu entends !",
          promptHe: "הקשיבו ובחרו את האות ששמעתם!",
          say: "i",
          choices: ["I", "E", "A"],
          answer: 0,
          explain: "C'était la lettre I ! On dit : i.",
          explainHe: "זו הייתה האות I! אומרים: אִי."
        },
        {
          type: "pick",
          prompt: "Trouve la lettre E !",
          promptHe: "מצאו את האות E!",
          choices: ["E", "F", "B"],
          answer: 0,
          say: "euh",
          explain: "Voici E ! Son nom se dit 'euh'.",
          explainHe: "הנה E! את השם שלה אומרים 'אֶה'."
        },
        {
          type: "match",
          prompt: "Relie les lettres identiques !",
          promptHe: "חברו את האותיות הזהות!",
          pairs: [["A", "A"], ["E", "E"], ["I", "I"], ["O", "O"]],
          say: "a. euh. i. o.",
          explain: "Regarde bien la forme de chaque lettre !",
          explainHe: "הסתכלו טוב על הצורה של כל אות!"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis la lettre que tu entends !",
          promptHe: "הקשיבו ובחרו את האות ששמעתם!",
          say: "o",
          choices: ["O", "U", "A"],
          answer: 0,
          explain: "C'était O ! La lettre O est toute ronde, comme un ballon.",
          explainHe: "זו הייתה O! האות O עגולה לגמרי, כמו כדור."
        },
        {
          type: "pick",
          prompt: "Trouve la lettre U !",
          promptHe: "מצאו את האות U!",
          choices: ["U", "V", "O"],
          answer: 0,
          say: "u",
          explain: "Voici U ! Attention : V est pointu en bas, U est arrondi.",
          explainHe: "הנה U! שימו לב: V מחודדת למטה, U מעוגלת."
        },
        {
          type: "listen",
          prompt: "Écoute et choisis la lettre que tu entends !",
          promptHe: "הקשיבו ובחרו את האות ששמעתם!",
          say: "i grec",
          choices: ["Y", "I", "U"],
          answer: 0,
          explain: "C'est Y ! Son nom est rigolo : 'i grec'.",
          explainHe: "זו Y! יש לה שם מצחיק: 'אִי גְרֶק'."
        },
        {
          type: "pick",
          prompt: "Trouve la voyelle !",
          promptHe: "מצאו את התנועה!",
          choices: ["M", "A", "T"],
          answer: 1,
          say: "a",
          explain: "A est une voyelle ! M et T sont des consonnes.",
          explainHe: "A היא תנועה! M ו-T הם עיצורים."
        },
        {
          type: "read",
          prompt: "Lis les voyelles à voix haute !",
          promptHe: "קראו את התנועות בקול רם!",
          text: "A E I O U Y",
          say: "a. euh. i. o. u. i grec.",
          explain: "Bravo ! Tu connais les six voyelles !",
          explainHe: "כל הכבוד! אתם מכירים את שש התנועות!"
        }
      ],
      joke: {
        q: "Pourquoi les poissons n'aiment pas jouer au tennis ?",
        a: "Parce qu'ils ont peur du filet !",
        qHe: "למה דגים לא אוהבים לשחק טניס?",
        aHe: "כי הם מפחדים מהרשת!"
      }
    },
    {
      id: "n1-s2",
      name: "Les consonnes",
      nameHe: "העיצורים",
      emoji: "💪",
      lesson: {
        cards: [
          {
            title: "Les consonnes costaudes",
            titleHe: "העיצורים החזקים",
            body: "Voici des consonnes très utiles : M L S R P T V N. Avec les voyelles, elles fabriquent des mots !",
            bodyHe: "הנה עיצורים מאוד שימושיים: M L S R P T V N. יחד עם התנועות הם בונים מילים!",
            big: "M L S R P T V N",
            say: "èm. èl. èss. èr. pé. té. vé. èn."
          },
          {
            title: "Chaque lettre a un nom",
            titleHe: "לכל אות יש שם",
            body: "Comme toi, chaque lettre a un nom ! M s'appelle 'èm', P s'appelle 'pé', V s'appelle 'vé'.",
            bodyHe: "כמוכם, לכל אות יש שם! ל-M קוראים 'אֶם', ל-P קוראים 'פֶּה', ל-V קוראים 'וֶה'.",
            big: "M P V",
            say: "èm. pé. vé."
          },
          {
            title: "Des lettres autour de toi",
            titleHe: "אותיות סביבך",
            body: "M comme MOTO 🏍️, P comme PIZZA 🍕, T comme TORTUE 🐢, V comme VÉLO 🚲 !",
            bodyHe: "M כמו MOTO 🏍️, P כמו PIZZA 🍕, T כמו TORTUE 🐢, V כמו VÉLO 🚲!",
            big: "M P T V",
            say: "moto. pizza. tortue. vélo."
          }
        ]
      },
      exercises: [
        {
          type: "pick",
          prompt: "Trouve la lettre M !",
          promptHe: "מצאו את האות M!",
          choices: ["M", "N", "W"],
          answer: 0,
          say: "èm",
          explain: "Voici M ! Elle s'appelle 'èm', comme dans MAMAN.",
          explainHe: "הנה M! קוראים לה 'אֶם', כמו במילה MAMAN."
        },
        {
          type: "listen",
          prompt: "Écoute et choisis la lettre que tu entends !",
          promptHe: "הקשיבו ובחרו את האות ששמעתם!",
          say: "èl",
          choices: ["L", "R", "N"],
          answer: 0,
          explain: "C'était L ! Son nom est 'èl'.",
          explainHe: "זו הייתה L! השם שלה 'אֶל'."
        },
        {
          type: "pick",
          prompt: "Trouve la lettre S !",
          promptHe: "מצאו את האות S!",
          choices: ["S", "Z", "C"],
          answer: 0,
          say: "èss",
          explain: "Voici S ! La lettre S ressemble à un serpent. 🐍",
          explainHe: "הנה S! האות S נראית כמו נחש. 🐍"
        },
        {
          type: "match",
          prompt: "Relie la lettre au dessin qui commence par elle !",
          promptHe: "חברו כל אות לציור שמתחיל בה!",
          pairs: [["M", "🏍️"], ["P", "🍕"], ["T", "🐢"], ["V", "🚲"]],
          say: "èm, moto. pé, pizza. té, tortue. vé, vélo.",
          explain: "M comme MOTO, P comme PIZZA, T comme TORTUE, V comme VÉLO !",
          explainHe: "M כמו MOTO, P כמו PIZZA, T כמו TORTUE, V כמו VÉLO!"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis la lettre que tu entends !",
          promptHe: "הקשיבו ובחרו את האות ששמעתם!",
          say: "èr",
          choices: ["R", "L", "N"],
          answer: 0,
          explain: "C'était R ! Son nom est 'èr'.",
          explainHe: "זו הייתה R! השם שלה 'אֶר'."
        },
        {
          type: "pick",
          prompt: "Trouve la lettre P !",
          promptHe: "מצאו את האות P!",
          choices: ["P", "B", "R"],
          answer: 0,
          say: "pé",
          explain: "Voici P ! Elle s'appelle 'pé', comme dans PAPA.",
          explainHe: "הנה P! קוראים לה 'פֶּה', כמו במילה PAPA."
        },
        {
          type: "listen",
          prompt: "Écoute et choisis la lettre que tu entends !",
          promptHe: "הקשיבו ובחרו את האות ששמעתם!",
          say: "té",
          choices: ["T", "P", "V"],
          answer: 0,
          explain: "C'était T ! 'té' comme TORTUE.",
          explainHe: "זו הייתה T! 'טֶה' כמו TORTUE."
        },
        {
          type: "pick",
          prompt: "Trouve la lettre N !",
          promptHe: "מצאו את האות N!",
          choices: ["N", "M", "H"],
          answer: 0,
          say: "èn",
          explain: "Voici N ! Elle s'appelle 'èn'. M a deux ponts, N un seul.",
          explainHe: "הנה N! קוראים לה 'אֶן'. ל-M יש שני גשרים, ל-N רק אחד."
        },
        {
          type: "listen",
          prompt: "Écoute et choisis la lettre que tu entends !",
          promptHe: "הקשיבו ובחרו את האות ששמעתם!",
          say: "vé",
          choices: ["V", "B", "F"],
          answer: 0,
          explain: "C'était V ! 'vé' comme VÉLO.",
          explainHe: "זו הייתה V! 'וֶה' כמו VÉLO."
        }
      ],
      joke: {
        q: "Que fait une vache quand elle ferme les yeux ?",
        a: "Du lait concentré !",
        qHe: "מה עושה פרה כשהיא עוצמת עיניים?",
        aHe: "חלב מרוכז! (כי היא מתרכזת!)"
      }
    },
    {
      id: "n1-s3",
      name: "Tout l'alphabet",
      nameHe: "כל האלף-בית",
      emoji: "📖",
      lesson: {
        cards: [
          {
            title: "L'alphabet tout entier !",
            titleHe: "כל האלף-בית!",
            body: "L'alphabet français a 26 lettres, de A à Z. Écoute leurs noms !",
            bodyHe: "באלף-בית הצרפתי יש 26 אותיות, מ-A עד Z. הקשיבו לשמות שלהן!",
            big: "A B C D E F G H I J K L M\nN O P Q R S T U V W X Y Z",
            say: "a. bé. cé. dé. euh. èf. jé. ache. i. ji. ka. èl. èm. èn. o. pé. ku. èr. èss. té. u. vé. double vé. iks. i grec. zèd."
          },
          {
            title: "L'ordre alphabétique",
            titleHe: "הסדר האלפביתי",
            body: "Les lettres ont un ordre : A, puis B, puis C... Comme une file d'attente bien rangée !",
            bodyHe: "לאותיות יש סדר: A, אחר כך B, אחר כך C... כמו תור מסודר!",
            big: "A B C D E",
            say: "a, puis bé, puis cé, puis dé, puis euh."
          },
          {
            title: "Rappel : on lit de gauche à droite !",
            titleHe: "תזכורת: קוראים משמאל לימין!",
            body: "En français, tes yeux partent de la GAUCHE et vont vers la DROITE. C'est le contraire de l'hébreu !",
            bodyHe: "בצרפתית העיניים מתחילות משמאל והולכות ימינה. זה הפוך מעברית!",
            big: "➡️ ➡️ ➡️",
            say: "On lit de gauche à droite !"
          }
        ]
      },
      exercises: [
        {
          type: "pick",
          prompt: "Quelle lettre vient juste après A ?",
          promptHe: "איזו אות באה מיד אחרי A?",
          choices: ["B", "C", "D"],
          answer: 0,
          say: "bé",
          explain: "A, B, C... Après A vient B !",
          explainHe: "A, B, C... אחרי A באה B!"
        },
        {
          type: "pick",
          prompt: "Quelle lettre vient juste après C ?",
          promptHe: "איזו אות באה מיד אחרי C?",
          choices: ["D", "B", "E"],
          answer: 0,
          say: "dé",
          explain: "A, B, C, D... Après C vient D !",
          explainHe: "A, B, C, D... אחרי C באה D!"
        },
        {
          type: "pick",
          prompt: "Quelle lettre lis-tu en premier ?",
          promptHe: "איזו אות קוראים ראשונה?",
          question: "M O T O",
          choices: ["M", "O", "T"],
          answer: 0,
          explain: "On lit de gauche à droite : on commence par M !",
          explainHe: "קוראים משמאל לימין: מתחילים ב-M!"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis la lettre que tu entends !",
          promptHe: "הקשיבו ובחרו את האות ששמעתם!",
          say: "double vé",
          choices: ["W", "V", "M"],
          answer: 0,
          explain: "C'est W : 'double vé', comme deux V collés !",
          explainHe: "זו W: 'דוּבְּל וֶה', כמו שתי V מחוברות!"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis la lettre que tu entends !",
          promptHe: "הקשיבו ובחרו את האות ששמעתם!",
          say: "ache",
          choices: ["H", "A", "K"],
          answer: 0,
          explain: "C'est H ! Son nom est 'ache'.",
          explainHe: "זו H! השם שלה 'אַש'."
        },
        {
          type: "match",
          prompt: "Relie la lettre au dessin qui commence par elle !",
          promptHe: "חברו כל אות לציור שמתחיל בה!",
          pairs: [["A", "✈️"], ["B", "🍌"], ["C", "🐱"], ["O", "🍊"]],
          say: "a, avion. bé, banane. cé, chat. o, orange.",
          explain: "A comme AVION, B comme BANANE, C comme CHAT, O comme ORANGE !",
          explainHe: "A כמו AVION, B כמו BANANE, C כמו CHAT, O כמו ORANGE!"
        },
        {
          type: "pick",
          prompt: "Quelle lettre vient juste après L ?",
          promptHe: "איזו אות באה מיד אחרי L?",
          choices: ["M", "N", "K"],
          answer: 0,
          say: "èm",
          explain: "K, L, M... Après L vient M !",
          explainHe: "K, L, M... אחרי L באה M!"
        },
        {
          type: "pick",
          prompt: "Quelle lettre lis-tu en dernier ?",
          promptHe: "איזו אות קוראים אחרונה?",
          question: "P A P A",
          choices: ["A", "P"],
          answer: 0,
          explain: "On lit de gauche à droite : la dernière lettre est tout à droite. C'est A !",
          explainHe: "קוראים משמאל לימין: האות האחרונה היא הכי ימנית. זו A!"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis la lettre que tu entends !",
          promptHe: "הקשיבו ובחרו את האות ששמעתם!",
          say: "zèd",
          choices: ["Z", "S", "J"],
          answer: 0,
          explain: "C'est Z, la toute dernière lettre de l'alphabet !",
          explainHe: "זו Z, האות הכי אחרונה באלף-בית!"
        },
        {
          type: "read",
          prompt: "Lis ces lettres, de gauche à droite !",
          promptHe: "קראו את האותיות, משמאל לימין!",
          text: "A B C D E F",
          say: "a. bé. cé. dé. euh. èf.",
          explain: "Bravo ! Tu lis de gauche à droite, comme un champion !",
          explainHe: "כל הכבוד! אתם קוראים משמאל לימין, כמו אלופים!"
        }
      ],
      joke: {
        q: "Qu'est-ce qui fait 999 fois 'tic' et une fois 'toc' ?",
        a: "Un mille-pattes avec une jambe de bois !",
        qHe: "מה עושה 999 פעמים 'טיק' ופעם אחת 'טוק'?",
        aHe: "מרבה-רגליים עם רגל עץ!"
      }
    },
    {
      id: "n1-s4",
      name: "Le grand défi",
      nameHe: "האתגר הגדול",
      emoji: "🏆",
      lesson: {
        cards: [
          {
            title: "Le grand défi !",
            titleHe: "האתגר הגדול!",
            body: "Bravo ! Tu connais les voyelles, les consonnes et tout l'alphabet. Levy est fier de toi. Montre tout ce que tu sais !",
            bodyHe: "כל הכבוד! אתם מכירים את התנועות, את העיצורים ואת כל האלף-בית. Levy גאה בכם. הראו כל מה שאתם יודעים!",
            big: "🏆",
            say: "C'est parti, champion !"
          }
        ]
      },
      exercises: [
        {
          type: "pick",
          prompt: "Trouve la voyelle !",
          promptHe: "מצאו את התנועה!",
          choices: ["R", "O", "T"],
          answer: 1,
          say: "o",
          explain: "O est une voyelle ! R et T sont des consonnes.",
          explainHe: "O היא תנועה! R ו-T הם עיצורים."
        },
        {
          type: "listen",
          prompt: "Écoute et choisis la lettre que tu entends !",
          promptHe: "הקשיבו ובחרו את האות ששמעתם!",
          say: "u",
          choices: ["U", "O", "I"],
          answer: 0,
          explain: "C'était U ! On dit : u.",
          explainHe: "זו הייתה U! אומרים: אוּ."
        },
        {
          type: "pick",
          prompt: "Quelle lettre vient juste après B ?",
          promptHe: "איזו אות באה מיד אחרי B?",
          choices: ["C", "D", "A"],
          answer: 0,
          say: "cé",
          explain: "A, B, C... Après B vient C !",
          explainHe: "A, B, C... אחרי B באה C!"
        },
        {
          type: "match",
          prompt: "Relie la lettre au dessin qui commence par elle !",
          promptHe: "חברו כל אות לציור שמתחיל בה!",
          pairs: [["S", "☀️"], ["L", "🦁"], ["T", "🐢"], ["P", "🍕"]],
          say: "èss, soleil. èl, lion. té, tortue. pé, pizza.",
          explain: "S comme SOLEIL, L comme LION, T comme TORTUE, P comme PIZZA !",
          explainHe: "S כמו SOLEIL, L כמו LION, T כמו TORTUE, P כמו PIZZA!"
        },
        {
          type: "pick",
          prompt: "Trouve la lettre R !",
          promptHe: "מצאו את האות R!",
          choices: ["R", "B", "P"],
          answer: 0,
          say: "èr",
          explain: "Voici R ! Les lettres B et P lui ressemblent, regarde bien.",
          explainHe: "הנה R! האותיות B ו-P דומות לה, הסתכלו טוב."
        },
        {
          type: "listen",
          prompt: "Écoute et choisis la lettre que tu entends !",
          promptHe: "הקשיבו ובחרו את האות ששמעתם!",
          say: "i grec",
          choices: ["Y", "I", "J"],
          answer: 0,
          explain: "C'est Y, le fameux 'i grec' !",
          explainHe: "זו Y, ה'אִי גְרֶק' המפורסמת!"
        },
        {
          type: "pick",
          prompt: "Quelle lettre lis-tu en premier ?",
          promptHe: "איזו אות קוראים ראשונה?",
          question: "L U N E",
          choices: ["L", "E", "U"],
          answer: 0,
          explain: "On lit de gauche à droite : on commence par L !",
          explainHe: "קוראים משמאל לימין: מתחילים ב-L!"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis la lettre que tu entends !",
          promptHe: "הקשיבו ובחרו את האות ששמעתם!",
          say: "èm",
          choices: ["M", "N", "L"],
          answer: 0,
          explain: "C'était M ! 'èm' comme MAMAN.",
          explainHe: "זו הייתה M! 'אֶם' כמו MAMAN."
        },
        {
          type: "pick",
          prompt: "Quelle lettre vient juste après O ?",
          promptHe: "איזו אות באה מיד אחרי O?",
          choices: ["P", "Q", "N"],
          answer: 0,
          say: "pé",
          explain: "N, O, P... Après O vient P !",
          explainHe: "N, O, P... אחרי O באה P!"
        },
        {
          type: "match",
          prompt: "Relie les lettres identiques !",
          promptHe: "חברו את האותיות הזהות!",
          pairs: [["O", "O"], ["Q", "Q"], ["C", "C"], ["G", "G"]],
          explain: "Les lettres O, Q, C et G se ressemblent : regarde bien leur forme !",
          explainHe: "האותיות O, Q, C ו-G דומות: הסתכלו טוב על הצורה שלהן!"
        },
        {
          type: "pick",
          prompt: "Trouve la consonne !",
          promptHe: "מצאו את העיצור!",
          choices: ["A", "T", "E"],
          answer: 1,
          say: "té",
          explain: "T est une consonne ! A et E sont des voyelles.",
          explainHe: "T הוא עיצור! A ו-E הן תנועות."
        },
        {
          type: "read",
          prompt: "Lis tout l'alphabet à voix haute !",
          promptHe: "קראו את כל האלף-בית בקול רם!",
          text: "A B C D E F G H I\nJ K L M N O P Q R\nS T U V W X Y Z",
          say: "a. bé. cé. dé. euh. èf. jé. ache. i. ji. ka. èl. èm. èn. o. pé. ku. èr. èss. té. u. vé. double vé. iks. i grec. zèd.",
          explain: "Incroyable ! Tu connais les 26 lettres de l'alphabet !",
          explainHe: "מדהים! אתם מכירים את כל 26 האותיות של האלף-בית!"
        }
      ],
      joke: {
        q: "Pourquoi les éléphants n'ont-ils pas d'ordinateur ?",
        a: "Parce qu'ils ont peur de la souris !",
        qHe: "למה לפילים אין מחשב?",
        aHe: "כי הם מפחדים מהעכבר!"
      }
    }
  ]
});
