window.LEVELS = window.LEVELS || [];
window.LEVELS.push({
  id: "n10",
  order: 10,
  name: "Super-champion",
  nameHe: "סוּפֶּר-אַלּוּף",
  emoji: "👑",
  color: "#B71C1C",
  tagline: "Je deviens un super-champion du français !",
  taglineHe: "אֲנִי הוֹפֵךְ לְסוּפֶּר-אַלּוּף בְּצָרְפָתִית!",
  sublevels: [
    {
      id: "n10-s1",
      name: "Le futur",
      nameHe: "הֶעָתִיד",
      emoji: "🚀",
      lesson: {
        cards: [
          {
            title: "Le futur proche ⏩",
            titleHe: "הֶעָתִיד הַקָּרוֹב",
            body: "Pour dire ce qui va bientôt arriver, on utilise aller + verbe : je vais jouer, tu vas manger, il va lire.",
            bodyHe: "כְּדֵי לְהַגִּיד מָה שֶׁיִּקְרֶה בְּקָרוֹב, מִשְׁתַּמְּשִׁים בְּ-aller + פֹּעַל: je vais jouer (אֲנִי הוֹלֵךְ לְשַׂחֵק), tu vas manger, il va lire.",
            big: "je vais jouer",
            say: "je vais jouer. tu vas manger. il va lire."
          },
          {
            title: "Le futur simple 🔮",
            titleHe: "הֶעָתִיד הַפָּשׁוּט",
            body: "Pour dire ce qui arrivera plus tard, le verbe se termine par -rai, -ras, -ra : je jouerai, tu joueras, il jouera.",
            bodyHe: "כְּדֵי לְהַגִּיד מָה שֶׁיִּקְרֶה מְאֻחָר יוֹתֵר, הַפּוֹעַל מִסְתַּיֵּם בְּ-rai, -ras, -ra: je jouerai (אֲנִי אֲשַׂחֵק), tu joueras, il jouera.",
            big: "je jouerai",
            say: "je jouerai. tu joueras. il jouera."
          },
          {
            title: "Deux façons de parler de demain 🌅",
            titleHe: "שְׁתֵּי דְּרָכִים לְדַבֵּר עַל מָחָר",
            body: "Demain, je vais jouer = futur proche. Demain, je jouerai = futur simple. Les deux parlent de demain !",
            bodyHe: "Demain, je vais jouer = עָתִיד קָרוֹב. Demain, je jouerai = עָתִיד פָּשׁוּט. שְׁנֵי הַמִּשְׁפָּטִים מְדַבְּרִים עַל מָחָר!",
            big: "demain",
            say: "demain, je vais jouer. demain, je jouerai."
          }
        ]
      },
      exercises: [
        {
          type: "pick",
          prompt: "Quelle phrase parle du futur ?",
          promptHe: "אֵיזֶה מִשְׁפָּט מְדַבֵּר עַל הֶעָתִיד?",
          choices: ["Hier, j'ai nagé.", "Aujourd'hui, je nage.", "Demain, je vais nager."],
          answer: 2,
          say: "demain, je vais nager",
          explain: "« Je vais nager » = futur proche : ça va arriver bientôt !",
          explainHe: "«Je vais nager» = עָתִיד קָרוֹב: זֶה יִקְרֶה בְּקָרוֹב!"
        },
        {
          type: "pick",
          prompt: "C'est quel temps ?",
          promptHe: "אֵיזֶה זְמַן זֶה?",
          question: "il va lire",
          choices: ["le présent", "le futur proche", "le passé"],
          answer: 1,
          say: "il va lire",
          explain: "va + verbe = futur proche. Il va lire : bientôt, il lira !",
          explainHe: "va + פֹּעַל = עָתִיד קָרוֹב. Il va lire: בְּקָרוֹב הוּא יִקְרָא!"
        },
        {
          type: "pick",
          prompt: "Trouve le verbe au futur simple !",
          promptHe: "מִצְאוּ אֶת הַפּוֹעַל בֶּעָתִיד הַפָּשׁוּט!",
          choices: ["je chante", "je vais chanter", "je chanterai"],
          answer: 2,
          say: "je chanterai",
          explain: "-rai à la fin = futur simple : je chanterai.",
          explainHe: "-rai בַּסּוֹף = עָתִיד פָּשׁוּט: je chanterai."
        },
        {
          type: "listen",
          prompt: "Écoute : présent ou futur ?",
          promptHe: "הַקְשִׁיבוּ: הוֹוֶה אוֹ עָתִיד?",
          say: "demain, nous irons à la piscine",
          choices: ["le présent", "le futur"],
          answer: 1,
          explain: "« Demain, nous irons » : c'est le futur !",
          explainHe: "«Demain, nous irons» (מָחָר נֵלֵךְ לַבְּרֵכָה): זֶה עָתִיד!"
        },
        {
          type: "match",
          prompt: "Relie chaque phrase à son temps !",
          promptHe: "חַבְּרוּ כָּל מִשְׁפָּט לַזְּמַן שֶׁלּוֹ!",
          pairs: [["je vais lire", "futur proche"], ["je lirai", "futur simple"], ["je lis", "présent"]],
          explain: "vais + verbe = futur proche, -rai = futur simple, sinon présent.",
          explainHe: "vais + פֹּעַל = עָתִיד קָרוֹב, -rai = עָתִיד פָּשׁוּט, אַחֶרֶת זֶה הוֹוֶה."
        },
        {
          type: "pick",
          prompt: "« Je jouerai au parc. » C'est demain ou hier ?",
          promptHe: "«Je jouerai au parc.» זֶה מָחָר אוֹ אֶתְמוֹל?",
          choices: ["demain", "hier"],
          answer: 0,
          say: "je jouerai au parc",
          explain: "Jouerai = futur simple, donc c'est pour demain !",
          explainHe: "Jouerai = עָתִיד פָּשׁוּט, אָז זֶה יִקְרֶה מָחָר!"
        },
        {
          type: "pick",
          prompt: "Quelle phrase est au futur proche ?",
          promptHe: "אֵיזֶה מִשְׁפָּט הוּא בֶּעָתִיד קָרוֹב?",
          choices: ["Levy fait du vélo.", "Levy va faire du vélo.", "Levy fera du vélo."],
          answer: 1,
          say: "Levy va faire du vélo",
          explain: "va faire = futur proche. « Fera » est le futur simple.",
          explainHe: "va faire = עָתִיד קָרוֹב. «Fera» זֶה עָתִיד פָּשׁוּט."
        },
        {
          type: "pick",
          prompt: "Quelle phrase est au futur simple ?",
          promptHe: "אֵיזֶה מִשְׁפָּט הוּא בֶּעָתִיד פָּשׁוּט?",
          choices: ["La maîtresse chante une chanson.", "La maîtresse va chanter une chanson.", "La maîtresse chantera une chanson."],
          answer: 2,
          say: "la maîtresse chantera une chanson",
          explain: "chantera = futur simple : -ra à la fin du verbe. « va chanter » est le futur proche, « chante » le présent.",
          explainHe: "chantera = עָתִיד פָּשׁוּט: -ra בְּסוֹף הַפֹּעַל. «va chanter» זֶה עָתִיד קָרוֹב, «chante» זֶה הוֹוֶה."
        },
        {
          type: "read",
          prompt: "Lis ces phrases du futur à voix haute !",
          promptHe: "קִרְאוּ אֶת מִשְׁפְּטֵי הֶעָתִיד בְּקוֹל רָם!",
          text: "Demain, je vais ranger ma chambre.\nSamedi, nous fêterons Shabbat.\nPlus tard, je serai grand.",
          say: "demain, je vais ranger ma chambre. samedi, nous fêterons chabbat. plus tard, je serai grand.",
          explain: "Bravo ! Tu lis le futur comme un champion !",
          explainHe: "כָּל הַכָּבוֹד! אַתֶּם קוֹרְאִים אֶת הֶעָתִיד כְּמוֹ אַלּוּפִים!"
        },
        {
          type: "pick",
          prompt: "Lis bien : quelle phrase est au futur ?",
          promptHe: "קִרְאוּ טוֹב: אֵיזֶה מִשְׁפָּט בֶּעָתִיד?",
          choices: ["il joue", "il jouera"],
          answer: 1,
          say: "il joue. il jouera.",
          explain: "« il joue » c'est maintenant (présent). « il jouera » avec -ra, c'est plus tard : le futur !",
          explainHe: "«il joue» זֶה עַכְשָׁו (הוֹוֶה). «il jouera» עִם -ra, זֶה מְאֻחָר יוֹתֵר: הֶעָתִיד!"
        }
      ],
      joke: {
        q: "Pourquoi les squelettes 💀 ne se battent-ils jamais entre eux ?",
        a: "Parce qu'ils n'ont pas les tripes ! 😂",
        qHe: "לָמָּה שְׁלָדִים 💀 אַף פַּעַם לֹא רָבִים זֶה עִם זֶה?",
        aHe: "כִּי אֵין לָהֶם tripes! (בְּצָרְפָתִית tripes זֶה גַּם 'מֵעַיִם' וְגַם 'אֹמֶץ' – וְלַשְּׁלָדִים אֵין מֵעַיִם!) 😂"
      }
    },
    {
      id: "n10-s2",
      name: "Le passé composé",
      nameHe: "זְמַן עָבָר",
      emoji: "🕰️",
      lesson: {
        cards: [
          {
            title: "Raconter ce qui est passé 📜",
            titleHe: "לְסַפֵּר מָה שֶׁכְּבָר קָרָה",
            body: "Pour raconter ce qui est déjà arrivé, on utilise avoir + verbe : j'ai mangé, tu as joué, il a fini. C'est le passé composé !",
            bodyHe: "כְּדֵי לְסַפֵּר מָה שֶׁכְּבָר קָרָה, מִשְׁתַּמְּשִׁים בְּ-avoir + פֹּעַל: j'ai mangé (אָכַלְתִּי), tu as joué, il a fini. זֶה נִקְרָא passé composé!",
            big: "j'ai mangé",
            say: "j'ai mangé. tu as joué. il a fini."
          },
          {
            title: "La terminaison -é ✏️",
            titleHe: "הַסִּיֹּמֶת é",
            body: "Avec les verbes en -er, on écrit -é à la fin : j'ai mangé, elle a dansé, nous avons joué.",
            bodyHe: "עִם פְּעָלִים שֶׁמִּסְתַּיְּמִים בְּ-er, כּוֹתְבִים é בַּסּוֹף: j'ai mangé, elle a dansé, nous avons joué.",
            big: "-é",
            say: "é. j'ai mangé. elle a dansé. nous avons joué."
          },
          {
            title: "Hier, aujourd'hui, demain 📅",
            titleHe: "אֶתְמוֹל, הַיּוֹם, מָחָר",
            body: "Hier, j'ai joué (passé). Aujourd'hui, je joue (présent). Demain, je jouerai (futur). Tu connais les trois temps !",
            bodyHe: "אֶתְמוֹל: j'ai joué (עָבָר). הַיּוֹם: je joue (הוֹוֶה). מָחָר: je jouerai (עָתִיד). אַתֶּם מַכִּירִים אֶת שְׁלֹשֶׁת הַזְּמַנִּים!",
            big: "hier → aujourd'hui → demain",
            say: "hier, j'ai joué. aujourd'hui, je joue. demain, je jouerai."
          }
        ]
      },
      exercises: [
        {
          type: "pick",
          prompt: "Quelle phrase parle d'hier ?",
          promptHe: "אֵיזֶה מִשְׁפָּט מְדַבֵּר עַל אֶתְמוֹל?",
          choices: ["Je mange une pomme.", "J'ai mangé une pomme.", "Je mangerai une pomme."],
          answer: 1,
          say: "j'ai mangé une pomme",
          explain: "j'ai mangé = passé composé : c'est déjà arrivé !",
          explainHe: "j'ai mangé = זְמַן עָבָר: זֶה כְּבָר קָרָה!"
        },
        {
          type: "pick",
          prompt: "C'est quel temps ?",
          promptHe: "אֵיזֶה זְמַן זֶה?",
          question: "il a joué",
          choices: ["le présent", "le passé composé", "le futur"],
          answer: 1,
          say: "il a joué",
          explain: "a + verbe avec -é = passé composé : il a joué.",
          explainHe: "a + פּוֹעַל עִם é = זְמַן עָבָר: il a joué."
        },
        {
          type: "fill",
          prompt: "Complète au passé composé !",
          promptHe: "הַשְׁלִימוּ בִּזְמַן עָבָר!",
          sentence: "Hier, Levy a mang␣ une pizza.",
          choices: ["er", "e", "é"],
          answer: 2,
          say: "hier, Levy a mangé une pizza",
          explain: "Après « a », le verbe en -er s'écrit avec -é : a mangé.",
          explainHe: "אַחֲרֵי «a», פֹּעַל שֶׁמִּסְתַּיֵּם בְּ-er נִכְתַּב עִם é: a mangé."
        },
        {
          type: "fill",
          prompt: "Choisis le bon mot !",
          promptHe: "בַּחֲרוּ אֶת הַמִּלָּה הַנְּכוֹנָה!",
          sentence: "Levy ␣ trouvé son ballon.",
          choices: ["à", "a", "as"],
          answer: 1,
          say: "Levy a trouvé son ballon",
          explain: "« a » = le verbe avoir : Levy a trouvé son ballon.",
          explainHe: "«a» = הַפּוֹעַל avoir (יֵשׁ): Levy a trouvé son ballon."
        },
        {
          type: "pick",
          prompt: "Trouve le verbe au passé composé !",
          promptHe: "מִצְאוּ אֶת הַפּוֹעַל בִּזְמַן עָבָר!",
          choices: ["nous chantons", "nous chanterons", "nous avons chanté"],
          answer: 2,
          say: "nous avons chanté",
          explain: "avons chanté = passé composé : c'est déjà chanté !",
          explainHe: "avons chanté = זְמַן עָבָר: כְּבָר שַׁרְנוּ!"
        },
        {
          type: "listen",
          prompt: "Écoute : passé ou futur ?",
          promptHe: "הַקְשִׁיבוּ: עָבָר אוֹ עָתִיד?",
          say: "Levy a dessiné un chat",
          choices: ["le passé", "le futur"],
          answer: 0,
          explain: "a dessiné = passé composé : le dessin est déjà fait !",
          explainHe: "a dessiné = זְמַן עָבָר: הַצִּיּוּר כְּבָר מוּכָן!"
        },
        {
          type: "match",
          prompt: "Relie chaque moment à sa phrase !",
          promptHe: "חַבְּרוּ כָּל רֶגַע לַמִּשְׁפָּט שֶׁלּוֹ!",
          pairs: [["hier", "j'ai joué"], ["aujourd'hui", "je joue"], ["demain", "je jouerai"]],
          explain: "Hier = passé, aujourd'hui = présent, demain = futur !",
          explainHe: "אֶתְמוֹל = עָבָר, הַיּוֹם = הוֹוֶה, מָחָר = עָתִיד!"
        },
        {
          type: "fill",
          prompt: "Complète la phrase !",
          promptHe: "הַשְׁלִימוּ אֶת הַמִּשְׁפָּט!",
          sentence: "Nous ␣ fêté Hanouka.",
          choices: ["avez", "avons", "ont"],
          answer: 1,
          say: "nous avons fêté hanouka",
          explain: "Avec « nous », on dit avons : nous avons fêté.",
          explainHe: "עִם «nous» אוֹמְרִים avons: nous avons fêté."
        },
        {
          type: "build",
          prompt: "Remets la phrase dans l'ordre !",
          promptHe: "סַדְּרוּ אֶת הַמִּשְׁפָּט לְפִי הַסֵּדֶר!",
          tiles: ["mangé", "J'ai", "une", "glace."],
          answer: ["J'ai", "mangé", "une", "glace."],
          say: "j'ai mangé une glace",
          explain: "J'ai + mangé : le passé composé s'écrit en deux mots !",
          explainHe: "J'ai + mangé: זְמַן הֶעָבָר נִכְתַּב בִּשְׁתֵּי מִלִּים!"
        },
        {
          type: "fill",
          prompt: "Choisis le bon mot !",
          promptHe: "בַּחֲרוּ אֶת הַמִּלָּה הַנְּכוֹנָה!",
          sentence: "Les amis ␣ mangé le gâteau.",
          choices: ["on", "ont"],
          answer: 1,
          say: "les amis ont mangé le gâteau",
          explain: "« ont » = le verbe avoir (ils ont). « on » veut dire quelqu'un. Ici : les amis ont mangé.",
          explainHe: "«ont» = הַפֹּעַל avoir (הֵם ont). «on» אוֹמֵר מִישֶׁהוּ. כָּאן: les amis ont mangé."
        }
      ],
      joke: {
        q: "Pourquoi les livres 📚 n'ont-ils jamais froid ? 🥶",
        a: "Parce qu'ils ont une couverture ! 😄",
        qHe: "לָמָּה לִסְפָרִים 📚 אַף פַּעַם לֹא קַר? 🥶",
        aHe: "כִּי יֵשׁ לָהֶם couverture! (בְּצָרְפָתִית זוֹ גַּם כְּרִיכָה שֶׁל סֵפֶר וְגַם שְׂמִיכָה – מִשְׂחַק מִלִּים!) 😄"
      }
    },
    {
      id: "n10-s3",
      name: "Dictées et histoires",
      nameHe: "הַכְתָּבוֹת וְסִפּוּרִים",
      emoji: "📖",
      lesson: {
        cards: [
          {
            title: "Les grands mots 💪",
            titleHe: "הַמִּלִּים הַגְּדוֹלוֹת",
            body: "Tu sais écrire de grands mots maintenant ! Découpe-les en syllabes : an-ni-ver-saire, mon-ta-gne, té-lé-phone.",
            bodyHe: "אַתֶּם כְּבָר יוֹדְעִים לִכְתֹּב מִלִּים גְּדוֹלוֹת! חַלְּקוּ אוֹתָן לַהֲבָרוֹת: an-ni-ver-saire, mon-ta-gne, té-lé-phone.",
            big: "anniversaire",
            say: "anniversaire. montagne. téléphone."
          },
          {
            title: "L'astuce de la dictée 💡",
            titleHe: "הַטְּרִיק שֶׁל הַהַכְתָּבָה",
            body: "Écoute le mot, découpe-le en syllabes dans ta tête, puis écris syllabe par syllabe. Facile !",
            bodyHe: "הַקְשִׁיבוּ לַמִּלָּה, חַלְּקוּ אוֹתָהּ לַהֲבָרוֹת בָּרֹאשׁ, וְאָז כִּתְבוּ הֲבָרָה אַחֲרֵי הֲבָרָה. קַל!",
            say: "an. ni. ver. saire. anniversaire !"
          },
          {
            title: "Lire comme un détective 🕵️",
            titleHe: "לִקְרֹא כְּמוֹ בַּלָּשׁ",
            body: "Quand tu lis une histoire, cherche les indices : qui ? où ? pourquoi ? comment ? Les réponses se cachent dans le texte !",
            bodyHe: "כְּשֶׁקּוֹרְאִים סִפּוּר, מְחַפְּשִׂים רְמָזִים: מִי? אֵיפֹה? לָמָּה? אֵיךְ? הַתְּשׁוּבוֹת מִתְחַבְּאוֹת בַּטֵּקְסְט!",
            big: "🔍"
          }
        ]
      },
      exercises: [
        {
          type: "type",
          prompt: "Écoute et écris ce grand mot !",
          promptHe: "הַקְשִׁיבוּ וְכִתְבוּ אֶת הַמִּלָּה הַגְּדוֹלָה!",
          say: "anniversaire",
          answer: "anniversaire",
          strict: false,
          explain: "an-ni-ver-saire : 4 syllabes, avec deux N !",
          explainHe: "an-ni-ver-saire: 4 הֲבָרוֹת, עִם שְׁתֵּי N!"
        },
        {
          type: "type",
          prompt: "Écoute et écris le mot !",
          promptHe: "הַקְשִׁיבוּ וְכִתְבוּ אֶת הַמִּלָּה!",
          say: "montagne",
          answer: "montagne",
          strict: false,
          explain: "mon-ta-gne : le son GN comme dans ligne !",
          explainHe: "mon-ta-gne: הַצְּלִיל GN כְּמוֹ בַּמִּלָּה ligne!"
        },
        {
          type: "read",
          prompt: "Lis cette histoire à voix haute !",
          promptHe: "קִרְאוּ אֶת הַסִּפּוּר בְּקוֹל רָם!",
          text: "C'est l'anniversaire de Levy. Ses amis ont préparé un gâteau au chocolat.\nLa maîtresse a décoré la classe. Un ami a caché les cadeaux pour faire une surprise.\nQuand Levy entre, tout le monde crie : « Mazal Tov ! »\nLevy saute de joie et ouvre son cadeau : un vélo rouge !",
          say: "c'est l'anniversaire de Levy. ses amis ont préparé un gâteau au chocolat. la maîtresse a décoré la classe. un ami a caché les cadeaux pour faire une surprise. quand Levy entre, tout le monde crie : mazal tov ! levy saute de joie et ouvre son cadeau : un vélo rouge !",
          explain: "Quelle belle fête d'anniversaire ! Tu as lu une grande histoire !",
          explainHe: "אֵיזוֹ מְסִבַּת יוֹם הֻלֶּדֶת יָפָה! קְרָאתֶם סִפּוּר גָּדוֹל!"
        },
        {
          type: "pick",
          prompt: "Pourquoi l'ami a-t-il caché les cadeaux ?",
          promptHe: "לָמָּה הֶחָבֵר הֶחְבִּיא אֶת הַמַּתָּנוֹת?",
          question: "Un ami a caché les cadeaux pour faire une surprise.",
          choices: ["parce qu'il est fâché", "pour faire une surprise", "pour jouer à cache-cache"],
          answer: 1,
          explain: "Le texte le dit : pour faire une surprise à Levy !",
          explainHe: "הַטֵּקְסְט אוֹמֵר: כְּדֵי לַעֲשׂוֹת הַפְתָּעָה לְ-Levy!"
        },
        {
          type: "pick",
          prompt: "Comment Levy montre-t-il sa joie ?",
          promptHe: "אֵיךְ Levy מַרְאֶה אֶת הַשִּׂמְחָה שֶׁלּוֹ?",
          question: "Levy saute de joie et ouvre son cadeau.",
          choices: ["il pleure", "il va dormir", "il saute de joie"],
          answer: 2,
          explain: "Levy saute de joie : il est très content !",
          explainHe: "Levy קוֹפֵץ מִשִּׂמְחָה: הוּא מְאוֹד שָׂמֵחַ!"
        },
        {
          type: "type",
          prompt: "Écoute et écris le mot !",
          promptHe: "הַקְשִׁיבוּ וְכִתְבוּ אֶת הַמִּלָּה!",
          say: "téléphone",
          answer: "téléphone",
          strict: false,
          explain: "té-lé-phone : le son F s'écrit PH !",
          explainHe: "té-lé-phone: הַצְּלִיל F נִכְתַּב PH!"
        },
        {
          type: "read",
          prompt: "Lis cette histoire à voix haute !",
          promptHe: "קִרְאוּ אֶת הַסִּפּוּר בְּקוֹל רָם!",
          text: "Dimanche, la classe est allée à la montagne. Un ami a marché doucement parce qu'il est fatigué.\nEn haut, la maîtresse a montré la vallée. Levy a pris une photo avec son téléphone.\nUne amie a trouvé une fleur violette. Quelle belle journée !",
          say: "dimanche, la classe est allée à la montagne. un ami a marché doucement parce qu'il est fatigué. en haut, la maîtresse a montré la vallée. levy a pris une photo avec son téléphone. une amie a trouvé une fleur violette. quelle belle journée !",
          explain: "Bravo ! Une grande histoire lue comme un champion !",
          explainHe: "כָּל הַכָּבוֹד! קְרָאתֶם סִפּוּר גָּדוֹל כְּמוֹ אַלּוּפִים!"
        },
        {
          type: "pick",
          prompt: "Pourquoi l'ami a-t-il marché doucement ?",
          promptHe: "לָמָּה הֶחָבֵר הָלַךְ לְאַט?",
          question: "Un ami a marché doucement parce qu'il est fatigué.",
          choices: ["parce qu'il est fatigué", "parce qu'il a peur", "parce qu'il a perdu ses chaussures"],
          answer: 0,
          explain: "Le texte le dit : il est fatigué !",
          explainHe: "הַטֵּקְסְט אוֹמֵר: הוּא עָיֵף!"
        },
        {
          type: "pick",
          prompt: "Comment Levy a-t-il pris la photo ?",
          promptHe: "אֵיךְ Levy צִלֵּם אֶת הַתְּמוּנָה?",
          question: "Levy a pris une photo avec son téléphone.",
          choices: ["avec son appareil photo", "avec son téléphone", "avec le téléphone de la maîtresse"],
          answer: 1,
          explain: "Le texte dit : avec son téléphone !",
          explainHe: "הַטֵּקְסְט אוֹמֵר: עִם הַטֵּלֵפוֹן שֶׁלּוֹ!"
        },
        {
          type: "type",
          prompt: "Écoute et écris le mot !",
          promptHe: "הַקְשִׁיבוּ וְכִתְבוּ אֶת הַמִּלָּה!",
          say: "chapeau",
          answer: "chapeau",
          strict: false,
          explain: "cha-peau : le son O de la fin s'écrit E-A-U !",
          explainHe: "cha-peau: הַצְּלִיל O בַּסּוֹף נִכְתַּב E-A-U!"
        }
      ],
      joke: {
        q: "Quelle est la lettre la plus coupante ✂️ de l'alphabet ?",
        a: "Le H, parce qu'il se prononce comme « hache » ! 🪓😆",
        qHe: "מַהִי הָאוֹת הֲכִי חַדָּה ✂️ בָּאָלֶף-בֵּית?",
        aHe: "הָאוֹת H! (בְּצָרְפָתִית קוֹרְאִים לָהּ 'ache', בְּדִיּוּק כְּמוֹ hache – גַּרְזֶן!) 🪓😆"
      }
    },
    {
      id: "n10-s4",
      name: "Le grand défi final",
      nameHe: "הָאֶתְגָּר הַגָּדוֹל הָאַחֲרוֹן",
      emoji: "🏆",
      lesson: {
        cards: [
          {
            title: "Le défi des super-champions ! 🏆",
            titleHe: "הָאֶתְגָּר שֶׁל הַסּוּפֶּר-אַלּוּפִים!",
            body: "C'est le moment, champion ! Le tout dernier défi : des lettres, des syllabes, des sons, des mots, des phrases et des verbes... tout ce que tu as appris depuis le début ! Levy croit en toi. À toi de jouer !",
            bodyHe: "הִגִּיעַ הָרֶגַע, אַלּוּף! הָאֶתְגָּר הָאַחֲרוֹן: אוֹתִיּוֹת, הֲבָרוֹת, צְלִילִים, מִלִּים, מִשְׁפָּטִים וּפְעָלִים... כָּל מָה שֶׁלְּמַדְתֶּם מֵהַהַתְחָלָה! Levy מַאֲמִין בָּכֶם. קָדִימָה!",
            big: "👑",
            say: "c'est le grand défi final ! bonne chance, champion !"
          }
        ]
      },
      exercises: [
        {
          type: "pick",
          prompt: "Quelle lettre vient juste après le P ?",
          promptHe: "אֵיזוֹ אוֹת בָּאָה מִיָּד אַחֲרֵי P?",
          choices: ["O", "Q", "R"],
          answer: 1,
          say: "pé",
          explain: "Dans l'alphabet : N, O, P, Q, R !",
          explainHe: "בָּאָלֶף-בֵּית: N, O, P, Q, R!"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis la syllabe !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ אֶת הַהֲבָרָה!",
          say: "mo",
          choices: ["ma", "mo", "mi"],
          answer: 1,
          explain: "M + O = mo, comme dans moto !",
          explainHe: "M + O = mo, כְּמוֹ בַּמִּלָּה moto!"
        },
        {
          type: "build",
          prompt: "Assemble le mot chocolat !",
          promptHe: "הַרְכִּיבוּ אֶת הַמִּלָּה chocolat!",
          tiles: ["co", "cho", "lat", "cha"],
          answer: ["cho", "co", "lat"],
          say: "chocolat",
          explain: "cho-co-lat : trois syllabes délicieuses !",
          explainHe: "cho-co-lat: שָׁלוֹשׁ הֲבָרוֹת טְעִימוֹת!"
        },
        {
          type: "pick",
          prompt: "Dans quel mot entends-tu le son ON ?",
          promptHe: "בְּאֵיזוֹ מִלָּה שׁוֹמְעִים אֶת הַצְּלִיל ON?",
          choices: ["mardi", "matin", "maison"],
          answer: 2,
          say: "maison. matin. mardi.",
          explain: "mai-son : on entend ON à la fin !",
          explainHe: "mai-son: שׁוֹמְעִים ON בַּסּוֹף!"
        },
        {
          type: "fill",
          prompt: "Complète le mot !",
          promptHe: "הַשְׁלִימוּ אֶת הַמִּלָּה!",
          sentence: "Levy boit un verre d'␣.",
          choices: ["o", "eau", "ho"],
          answer: 1,
          say: "un verre d'eau",
          explain: "Le son O de l'eau s'écrit E-A-U !",
          explainHe: "הַצְּלִיל O בַּמִּלָּה eau נִכְתַּב E-A-U!"
        },
        {
          type: "pick",
          prompt: "Quelle phrase est bien écrite ?",
          promptHe: "אֵיזֶה מִשְׁפָּט כָּתוּב נָכוֹן?",
          choices: ["levy joue au parc.", "Levy joue au parc.", "Levy joue au parc"],
          answer: 1,
          say: "Levy joue au parc",
          explain: "Une phrase commence par une majuscule et finit par un point !",
          explainHe: "מִשְׁפָּט מַתְחִיל בְּאוֹת גְּדוֹלָה וּמִסְתַּיֵּם בִּנְקֻדָּה!"
        },
        {
          type: "type",
          prompt: "Dictée ! Écoute et écris le mot.",
          promptHe: "הַכְתָּבָה! הַקְשִׁיבוּ וְכִתְבוּ אֶת הַמִּלָּה.",
          say: "dimanche",
          answer: "dimanche",
          strict: false,
          explain: "di-manche : le son AN s'écrit A-N !",
          explainHe: "di-manche: הַצְּלִיל AN נִכְתַּב A-N!"
        },
        {
          type: "fill",
          prompt: "Complète la phrase !",
          promptHe: "הַשְׁלִימוּ אֶת הַמִּשְׁפָּט!",
          sentence: "Il y a deux chat␣ dans le jardin.",
          choices: ["x", "t", "s"],
          answer: 2,
          say: "deux chats",
          explain: "Deux chats : au pluriel, on ajoute un S !",
          explainHe: "שְׁנֵי חֲתוּלִים: בְּרַבִּים מוֹסִיפִים S!"
        },
        {
          type: "fill",
          prompt: "Choisis le bon mot !",
          promptHe: "בַּחֲרוּ אֶת הַמִּלָּה הַנְּכוֹנָה!",
          sentence: "Levy ␣ à l'école.",
          choices: ["et", "es", "est"],
          answer: 2,
          say: "Levy est à l'école",
          explain: "est = le verbe être : Levy est à l'école.",
          explainHe: "est = הַפּוֹעַל être (לִהְיוֹת): Levy est à l'école."
        },
        {
          type: "match",
          prompt: "Relie chaque moment à son verbe !",
          promptHe: "חַבְּרוּ כָּל רֶגַע לַפּוֹעַל שֶׁלּוֹ!",
          pairs: [["hier", "j'ai chanté"], ["aujourd'hui", "je chante"], ["demain", "je chanterai"]],
          explain: "Passé, présent, futur : tu connais les trois temps !",
          explainHe: "עָבָר, הוֹוֶה, עָתִיד: אַתֶּם מַכִּירִים אֶת שְׁלֹשֶׁת הַזְּמַנִּים!"
        },
        {
          type: "riddle",
          prompt: "Devinette de champion !",
          promptHe: "חִידַת אַלּוּפִים!",
          question: "Mon premier est le contraire de froid.\nMon second est le contraire de tard.\nMon tout est la maison d'un roi.",
          choices: ["chapeau", "gâteau", "château"],
          answer: 2,
          say: "mon premier est le contraire de froid. mon second est le contraire de tard. mon tout est la maison d'un roi.",
          explain: "CHAUD + TÔT = CHÂTEAU ! La maison du roi ! 🏰",
          explainHe: "CHAUD (חַם) + TÔT (מֻקְדָּם) = CHÂTEAU (טִירָה)! הַבַּיִת שֶׁל הַמֶּלֶךְ! 🏰"
        },
        {
          type: "read",
          prompt: "Lis le message de Levy à voix haute !",
          promptHe: "קִרְאוּ אֶת הַהוֹדָעָה שֶׁל Levy בְּקוֹל רָם!",
          text: "Bravo, champion !\nTu as appris les lettres, les sons, les mots et les phrases.\nTu sais lire le passé, le présent et le futur.\nTu es un super-champion du français !",
          say: "bravo, champion ! tu as appris les lettres, les sons, les mots et les phrases. tu sais lire le passé, le présent et le futur. tu es un super-champion du français !",
          explain: "Tu l'as fait ! Levy est très fier de toi ! 👑",
          explainHe: "עֲשִׂיתֶם אֶת זֶה! Levy כָּל כָּךְ גֵּאֶה בָּכֶם! 👑"
        }
      ],
      joke: {
        q: "Monsieur et Madame Térieur ont deux fils 👬. Comment s'appellent-ils ?",
        a: "Alain et Alex ! (Alain Térieur et Alex Térieur !) 🚪😂",
        qHe: "לָאָדוֹן וְלִגְבֶרֶת Térieur יֵשׁ שְׁנֵי בָּנִים 👬. אֵיךְ קוֹרְאִים לָהֶם?",
        aHe: "Alain וְ-Alex! (בְּצָרְפָתִית Alain Térieur נִשְׁמָע כְּמוֹ à l'intérieur – בִּפְנִים, וְ-Alex Térieur כְּמוֹ à l'extérieur – בַּחוּץ!) 🚪😂"
      }
    }
  ]
});
