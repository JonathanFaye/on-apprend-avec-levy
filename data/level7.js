window.LEVELS = window.LEVELS || [];
window.LEVELS.push({
  id: "n7",
  order: 7,
  name: "Je lis des histoires",
  nameHe: "אֲנִי קוֹרֵא סִפּוּרִים",
  emoji: "📜",
  color: "#AD1457",
  tagline: "Je lis des histoires en entier !",
  taglineHe: "אֲנִי קוֹרֵא סִפּוּרִים שְׁלֵמִים!",
  sublevels: [
    {
      id: "n7-s1",
      name: "Levy à la piscine",
      nameHe: "Levy בַּבְּרֵכָה",
      emoji: "🏊",
      lesson: {
        cards: [
          {
            title: "On lit une vraie histoire ! 🌟",
            titleHe: "קוֹרְאִים סִפּוּר אֲמִתִּי!",
            body: "Aujourd'hui, tu lis une histoire entière ! Lis doucement, phrase par phrase, de gauche à droite. Ensuite, tu réponds à des questions.",
            bodyHe: "הַיּוֹם קוֹרְאִים סִפּוּר שָׁלֵם! קִרְאוּ לְאַט, מִשְׁפָּט אַחֲרֵי מִשְׁפָּט, מִשְּׂמֹאל לְיָמִין. אַחַר כָּךְ עוֹנִים עַל שְׁאֵלוֹת.",
            big: "📖"
          },
          {
            title: "Levy à la piscine 🏊",
            titleHe: "Levy בַּבְּרֵכָה",
            body: "Levy va à la piscine avec son ami. Il fait très chaud. Levy saute dans l'eau bleue. Son ami nage avec une bouée. Après, ils mangent une glace.",
            bodyHe: "Levy הוֹלֵךְ לַבְּרֵכָה עִם הֶחָבֵר שֶׁלּוֹ. חַם מְאוֹד. Levy קוֹפֵץ לַמַּיִם הַכְּחֻלִּים. הֶחָבֵר שֶׁלּוֹ שׂוֹחֶה עִם גַּלְגַּל יָם. אַחַר כָּךְ הֵם אוֹכְלִים גְּלִידָה.",
            say: "Levy va à la piscine avec son ami. Il fait très chaud. Levy saute dans l'eau bleue. Son ami nage avec une bouée. Après, ils mangent une glace."
          },
          {
            title: "Qui ? Où ? Quoi ? 🕵️",
            titleHe: "מִי? אֵיפֹה? מָה?",
            body: "Après l'histoire, Levy te pose des questions : qui ? où ? quoi ? La réponse est toujours dans l'histoire !",
            bodyHe: "אַחֲרֵי הַסִּפּוּר Levy שׁוֹאֵל שְׁאֵלוֹת: מִי? אֵיפֹה? מָה? הַתְּשׁוּבָה תָּמִיד נִמְצֵאת בְּתוֹךְ הַסִּפּוּר!"
          }
        ]
      },
      exercises: [
        {
          type: "read",
          prompt: "Lis l'histoire à voix haute !",
          promptHe: "קִרְאוּ אֶת הַסִּפּוּר בְּקוֹל רָם!",
          text: "Levy va à la piscine avec son ami.\nIl fait très chaud.\nLevy saute dans l'eau bleue. Son ami nage avec une bouée.\nAprès, ils mangent une glace.",
          say: "Levy va à la piscine avec son ami. Il fait très chaud. Levy saute dans l'eau bleue. Son ami nage avec une bouée. Après, ils mangent une glace.",
          explain: "Bravo ! Tu as lu une histoire entière, comme un grand !",
          explainHe: "כָּל הַכָּבוֹד! קְרָאתֶם סִפּוּר שָׁלֵם, כְּמוֹ גְּדוֹלִים!"
        },
        {
          type: "pick",
          prompt: "Qui va à la piscine avec Levy ?",
          promptHe: "מִי הוֹלֵךְ לַבְּרֵכָה עִם Levy?",
          say: "qui va à la piscine avec Levy ?",
          choices: ["la maîtresse", "son ami", "le chat"],
          answer: 1,
          explain: "C'est son ami qui va à la piscine avec Levy.",
          explainHe: "זֶה הֶחָבֵר שֶׁל Levy שֶׁהוֹלֵךְ אִתּוֹ לַבְּרֵכָה."
        },
        {
          type: "pick",
          prompt: "Où vont Levy et son ami ?",
          promptHe: "לְאָן הוֹלְכִים Levy וְהֶחָבֵר שֶׁלּוֹ?",
          say: "où vont Levy et son ami ?",
          choices: ["à l'école", "au parc", "à la piscine"],
          answer: 2,
          explain: "Ils vont à la piscine, pour nager et sauter dans l'eau !",
          explainHe: "הֵם הוֹלְכִים לַבְּרֵכָה, לִשְׂחוֹת וְלִקְפֹּץ לַמַּיִם!"
        },
        {
          type: "pick",
          prompt: "Quel temps fait-il dans l'histoire ?",
          promptHe: "אֵיזֶה מֶזֶג אֲוִיר יֵשׁ בַּסִּפּוּר?",
          say: "quel temps fait-il dans l'histoire ?",
          choices: ["Il pleut.", "Il fait très chaud.", "Il neige."],
          answer: 1,
          explain: "L'histoire dit : il fait très chaud. C'est pour ça qu'ils vont nager !",
          explainHe: "בַּסִּפּוּר כָּתוּב: חַם מְאוֹד. בִּגְלַל זֶה הֵם הוֹלְכִים לִשְׂחוֹת!"
        },
        {
          type: "pick",
          prompt: "Que fait Levy à la piscine ?",
          promptHe: "מָה עוֹשֶׂה Levy בַּבְּרֵכָה?",
          say: "que fait Levy à la piscine ?",
          choices: ["Il dort.", "Il lit un livre.", "Il saute dans l'eau."],
          answer: 2,
          explain: "Levy saute dans l'eau bleue. Splash !",
          explainHe: "Levy קוֹפֵץ לַמַּיִם הַכְּחֻלִּים. ספלאשׁ!"
        },
        {
          type: "fill",
          prompt: "Complète la phrase de l'histoire !",
          promptHe: "הַשְׁלִימוּ אֶת הַמִּשְׁפָּט מֵהַסִּפּוּר!",
          sentence: "Son ami nage avec une ␣.",
          choices: ["moto", "bouée", "table"],
          answer: 1,
          say: "bouée",
          explain: "Dans l'histoire, son ami nage avec une bouée.",
          explainHe: "בַּסִּפּוּר הֶחָבֵר שֶׁלּוֹ שׂוֹחֶה עִם גַּלְגַּל יָם."
        },
        {
          type: "pick",
          prompt: "Que mangent-ils après la piscine ?",
          promptHe: "מָה הֵם אוֹכְלִים אַחֲרֵי הַבְּרֵכָה?",
          say: "que mangent-ils après la piscine ?",
          choices: ["une pomme", "du pain", "une glace"],
          answer: 2,
          explain: "Après la piscine, ils mangent une glace. Miam !",
          explainHe: "אַחֲרֵי הַבְּרֵכָה הֵם אוֹכְלִים גְּלִידָה. טָעִים!"
        },
        {
          type: "build",
          prompt: "Remets les mots dans l'ordre !",
          promptHe: "סַדְּרוּ אֶת הַמִּלִּים בַּסֵּדֶר הַנָּכוֹן!",
          tiles: ["dans", "Levy", "l'eau.", "saute"],
          answer: ["Levy", "saute", "dans", "l'eau."],
          say: "levy saute dans l'eau.",
          explain: "La phrase commence par Levy avec une majuscule et finit par un point.",
          explainHe: "הַמִּשְׁפָּט מַתְחִיל בְּ-Levy עִם אוֹת גְּדוֹלָה וְנִגְמָר בִּנְקֻדָּה."
        },
        {
          type: "pick",
          prompt: "Lis bien : lequel nage dans l'eau ?",
          promptHe: "קִרְאוּ טוֹב: מִי שׂוֹחֶה בַּמַּיִם?",
          choices: ["poisson", "poussin"],
          answer: 0,
          say: "poisson",
          explain: "poisson s'ecrit avec OI et nage dans l'eau. poussin s'ecrit avec OU, c'est le bebe de la poule !",
          explainHe: "poisson נִכְתָּב עִם OI וְשׂוֹחֶה בַּמַּיִם. poussin נִכְתָּב עִם OU, זֶה הָאֶפְרוֹחַ שֶׁל הַתַּרְנְגֹלֶת!"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ מָה שְׁמַעְתֶּם!",
          say: "piscine",
          choices: ["cuisine", "piscine", "poussin"],
          answer: 1,
          explain: "Tu as entendu : piscine, avec PI au début.",
          explainHe: "שְׁמַעְתֶּם: piscine, עִם PI בַּהַתְחָלָה."
        }
      ],
      joke: {
        q: "Quel est le sport le plus fruité ? 🍑",
        a: "La boxe, parce qu'on se prend des pêches ! 🥊😂",
        qHe: "מַהוּ הַסְּפּוֹרְט הֲכִי פֵּרוֹתִי? 🍑",
        aHe: "הָאִגְרוּף! כִּי בְּצָרְפָתִית pêche זֶה גַּם אֲפַרְסֵק וְגַם מַכַּת אֶגְרוֹף! 🥊😂"
      }
    },
    {
      id: "n7-s2",
      name: "Le Shabbat chez Levy",
      nameHe: "שַׁבָּת אֵצֶל Levy",
      emoji: "🕯️",
      lesson: {
        cards: [
          {
            title: "Vendredi soir ✨",
            titleHe: "עֶרֶב שִׁשִּׁי",
            body: "Le vendredi soir, le Shabbat commence. On allume les bougies, on chante, et il y a deux pains dorés sur la table.",
            bodyHe: "בְּעֶרֶב שִׁשִּׁי מַתְחִילָה הַשַּׁבָּת. מַדְלִיקִים נֵרוֹת, שָׁרִים, וְיֵשׁ שְׁתֵּי חַלּוֹת זְהֻבּוֹת עַל הַשֻּׁלְחָן.",
            big: "🕯️🍞"
          },
          {
            title: "Le Shabbat chez Levy 🕯️",
            titleHe: "שַׁבָּת אֵצֶל Levy",
            body: "C'est vendredi soir. Levy allume les bougies. Sur la table, il y a deux pains dorés. Levy chante une belle chanson. Toute la famille dit : Chabbat Chalom !",
            bodyHe: "עֶרֶב שִׁשִּׁי. Levy מַדְלִיק אֶת הַנֵּרוֹת. עַל הַשֻּׁלְחָן יֵשׁ שְׁתֵּי חַלּוֹת זְהֻבּוֹת. Levy שָׁר שִׁיר יָפֶה. כָּל הַמִּשְׁפָּחָה אוֹמֶרֶת: שַׁבַּת שָׁלוֹם!",
            say: "C'est vendredi soir. Levy allume les bougies. Sur la table, il y a deux pains dorés. Levy chante une belle chanson. Toute la famille dit : chabbat chalom !"
          },
          {
            title: "Vrai ou faux ? 🤔",
            titleHe: "נָכוֹן אוֹ לֹא נָכוֹן?",
            body: "Levy va te dire des phrases. Si la phrase est comme dans l'histoire, c'est VRAI. Sinon, c'est FAUX !",
            bodyHe: "Levy יַגִּיד לָכֶם מִשְׁפָּטִים. אִם הַמִּשְׁפָּט כְּמוֹ בַּסִּפּוּר — זֶה VRAI (נָכוֹן). אִם לֹא — זֶה FAUX (לֹא נָכוֹן)!"
          }
        ]
      },
      exercises: [
        {
          type: "read",
          prompt: "Lis l'histoire à voix haute !",
          promptHe: "קִרְאוּ אֶת הַסִּפּוּר בְּקוֹל רָם!",
          text: "C'est vendredi soir. Levy allume les bougies.\nSur la table, il y a deux pains dorés.\nLevy chante une belle chanson.\nToute la famille dit : Chabbat Chalom !",
          say: "C'est vendredi soir. Levy allume les bougies. Sur la table, il y a deux pains dorés. Levy chante une belle chanson. Toute la famille dit : chabbat chalom !",
          explain: "Bravo ! Quelle belle histoire de Shabbat !",
          explainHe: "כָּל הַכָּבוֹד! אֵיזֶה סִפּוּר שַׁבָּת יָפֶה!"
        },
        {
          type: "pick",
          prompt: "Quel soir commence le Shabbat ?",
          promptHe: "בְּאֵיזֶה עֶרֶב מַתְחִילָה הַשַּׁבָּת?",
          say: "quel soir commence le shabbat ?",
          choices: ["lundi soir", "vendredi soir", "mardi soir"],
          answer: 1,
          explain: "Le Shabbat commence le vendredi soir, quand on allume les bougies.",
          explainHe: "הַשַּׁבָּת מַתְחִילָה בְּעֶרֶב שִׁשִּׁי, כְּשֶׁמַּדְלִיקִים אֶת הַנֵּרוֹת."
        },
        {
          type: "pick",
          prompt: "Qui allume les bougies ?",
          promptHe: "מִי מַדְלִיק אֶת הַנֵּרוֹת?",
          say: "qui allume les bougies ?",
          choices: ["la maîtresse", "le chat", "Levy"],
          answer: 2,
          explain: "C'est Levy qui allume les bougies de Shabbat.",
          explainHe: "Levy הוּא שֶׁמַּדְלִיק אֶת נֵרוֹת הַשַּׁבָּת."
        },
        {
          type: "pick",
          prompt: "Qu'y a-t-il sur la table ?",
          promptHe: "מָה יֵשׁ עַל הַשֻּׁלְחָן?",
          say: "qu'y a-t-il sur la table ?",
          choices: ["trois pizzas", "deux pains dorés", "des crayons"],
          answer: 1,
          explain: "Sur la table, il y a deux pains dorés pour le Shabbat.",
          explainHe: "עַל הַשֻּׁלְחָן יֵשׁ שְׁתֵּי חַלּוֹת זְהֻבּוֹת לְשַׁבָּת."
        },
        {
          type: "pick",
          prompt: "Vrai ou faux ?",
          promptHe: "נָכוֹן אוֹ לֹא נָכוֹן?",
          question: "Levy allume les bougies.",
          say: "levy allume les bougies. vrai ou faux ?",
          choices: ["VRAI", "FAUX"],
          answer: 0,
          explain: "C'est vrai ! Dans l'histoire, Levy allume les bougies.",
          explainHe: "נָכוֹן! בַּסִּפּוּר Levy מַדְלִיק אֶת הַנֵּרוֹת."
        },
        {
          type: "pick",
          prompt: "Vrai ou faux ?",
          promptHe: "נָכוֹן אוֹ לֹא נָכוֹן?",
          question: "Sur la table, il y a une pizza.",
          say: "sur la table, il y a une pizza. vrai ou faux ?",
          choices: ["VRAI", "FAUX"],
          answer: 1,
          explain: "C'est faux ! Sur la table, il y a deux pains dorés, pas de pizza.",
          explainHe: "לֹא נָכוֹן! עַל הַשֻּׁלְחָן יֵשׁ שְׁתֵּי חַלּוֹת זְהֻבּוֹת, לֹא פִּיצָה."
        },
        {
          type: "pick",
          prompt: "Vrai ou faux ?",
          promptHe: "נָכוֹן אוֹ לֹא נָכוֹן?",
          question: "Toute la famille dit : Chabbat Chalom !",
          say: "toute la famille dit : chabbat chalom. vrai ou faux ?",
          choices: ["VRAI", "FAUX"],
          answer: 0,
          explain: "C'est vrai ! Toute la famille dit : Chabbat Chalom !",
          explainHe: "נָכוֹן! כָּל הַמִּשְׁפָּחָה אוֹמֶרֶת: שַׁבַּת שָׁלוֹם!"
        },
        {
          type: "fill",
          prompt: "Complète la phrase de l'histoire !",
          promptHe: "הַשְׁלִימוּ אֶת הַמִּשְׁפָּט מֵהַסִּפּוּר!",
          sentence: "Levy allume les ␣.",
          choices: ["fenêtres", "voitures", "bougies"],
          answer: 2,
          say: "bougies",
          explain: "Levy allume les bougies de Shabbat.",
          explainHe: "Levy מַדְלִיק אֶת נֵרוֹת הַשַּׁבָּת."
        },
        {
          type: "pick",
          prompt: "Lis bien : lequel est un animal ?",
          promptHe: "קִרְאוּ טוֹב: מִי מֵהֶם חַיָּה?",
          choices: ["mouton", "bouton"],
          answer: 0,
          say: "mouton",
          explain: "mouton commence par M, c'est l'animal qui fait beee. bouton commence par B, c'est le bouton de la chemise !",
          explainHe: "mouton מַתְחִיל בְּ-M, זוֹ הַחַיָּה שֶׁעוֹשָׂה מֶה. bouton מַתְחִיל בְּ-B, זֶה הַכַּפְתּוֹר שֶׁל הַחֻלְצָה!"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ מָה שְׁמַעְתֶּם!",
          say: "pain",
          choices: ["main", "pain", "bain"],
          answer: 1,
          explain: "Tu as entendu : pain, avec le son P au début.",
          explainHe: "שְׁמַעְתֶּם: pain, עִם הַצְּלִיל P בַּהַתְחָלָה."
        }
      ],
      joke: {
        q: "Que fait un escargot 🐌 sur le dos d'une tortue 🐢 ?",
        a: "Il crie : Youpi ! Ça va trop vite ! 😂",
        qHe: "מָה עוֹשֶׂה חִלָּזוֹן עַל הַגַּב שֶׁל צָב?",
        aHe: "הוּא צוֹעֵק: יוּפִּי, זֶה נוֹסֵעַ מַהֵר מִדַּי!"
      }
    },
    {
      id: "n7-s3",
      name: "La dictée des champions",
      nameHe: "הַהַכְתָּבָה שֶׁל הָאַלּוּפִים",
      emoji: "✏️",
      lesson: {
        cards: [
          {
            title: "La dictée 🎧",
            titleHe: "הַכְתָּבָה",
            body: "Écoute bien le mot, répète-le dans ta tête, puis écris-le lettre par lettre. Tu peux réécouter autant que tu veux !",
            bodyHe: "הַקְשִׁיבוּ טוֹב לַמִּלָּה, חִזְרוּ עָלֶיהָ בָּרֹאשׁ, וְאָז כִּתְבוּ אוֹתָהּ אוֹת אַחֲרֵי אוֹת. אֶפְשָׁר לְהַקְשִׁיב שׁוּב כַּמָּה שֶׁרוֹצִים!",
            big: "✏️"
          },
          {
            title: "Les mots de tous les jours 📝",
            titleHe: "מִלִּים שֶׁל כָּל יוֹם",
            body: "Voici des mots qu'on voit partout : maison, école, gâteau, bonjour. Regarde-les bien avant la dictée !",
            bodyHe: "הִנֵּה מִלִּים שֶׁרוֹאִים בְּכָל מָקוֹם: maison, école, gâteau, bonjour. הִסְתַּכְּלוּ עֲלֵיהֶן טוֹב לִפְנֵי הַהַכְתָּבָה!",
            big: "maison école gâteau bonjour",
            say: "maison. école. gâteau. bonjour."
          },
          {
            title: "La phrase en ordre 🧩",
            titleHe: "מִשְׁפָּט לְפִי הַסֵּדֶר",
            body: "Une phrase commence par une majuscule et finit par un point. Remets les mots dans le bon ordre, de gauche à droite !",
            bodyHe: "מִשְׁפָּט מַתְחִיל בְּאוֹת גְּדוֹלָה וְנִגְמָר בִּנְקֻדָּה. סַדְּרוּ אֶת הַמִּלִּים בַּסֵּדֶר הַנָּכוֹן, מִשְּׂמֹאל לְיָמִין!"
          }
        ]
      },
      exercises: [
        {
          type: "type",
          prompt: "Écoute et écris le mot !",
          promptHe: "הַקְשִׁיבוּ וְכִתְבוּ אֶת הַמִּלָּה!",
          say: "maison",
          answer: "maison",
          strict: false,
          explain: "On écrit : maison. Le son AI est au milieu, et le son ON à la fin.",
          explainHe: "כּוֹתְבִים maison. הַצְּלִיל AI בָּאֶמְצַע, וְהַצְּלִיל ON בַּסּוֹף."
        },
        {
          type: "type",
          prompt: "Écoute et écris le mot !",
          promptHe: "הַקְשִׁיבוּ וְכִתְבוּ אֶת הַמִּלָּה!",
          say: "école",
          answer: "école",
          strict: false,
          explain: "On écrit : école, avec un é accent aigu au début.",
          explainHe: "כּוֹתְבִים école, עִם é עִם אֶקְסְנֵט בַּהַתְחָלָה."
        },
        {
          type: "build",
          prompt: "Remets les mots dans l'ordre !",
          promptHe: "סַדְּרוּ אֶת הַמִּלִּים בַּסֵּדֶר הַנָּכוֹן!",
          tiles: ["un", "gâteau.", "Levy", "mange"],
          answer: ["Levy", "mange", "un", "gâteau."],
          say: "levy mange un gâteau.",
          explain: "La phrase est : Levy mange un gâteau. On commence par Levy, avec une majuscule.",
          explainHe: "הַמִּשְׁפָּט הוּא: Levy mange un gâteau. מַתְחִילִים בְּ-Levy, עִם אוֹת גְּדוֹלָה."
        },
        {
          type: "type",
          prompt: "Écoute et écris le mot !",
          promptHe: "הַקְשִׁיבוּ וְכִתְבוּ אֶת הַמִּלָּה!",
          say: "bonjour",
          answer: "bonjour",
          strict: false,
          explain: "On écrit : bonjour. Le son ON, puis le son OU.",
          explainHe: "כּוֹתְבִים bonjour: הַצְּלִיל ON וְאָז הַצְּלִיל OU."
        },
        {
          type: "build",
          prompt: "Remets les mots dans l'ordre !",
          promptHe: "סַדְּרוּ אֶת הַמִּלִּים בַּסֵּדֶר הַנָּכוֹן!",
          tiles: ["dans", "Levy", "la", "maison.", "est"],
          answer: ["Levy", "est", "dans", "la", "maison."],
          say: "levy est dans la maison.",
          explain: "La phrase est : Levy est dans la maison.",
          explainHe: "הַמִּשְׁפָּט הוּא: Levy est dans la maison."
        },
        {
          type: "type",
          prompt: "Écoute et écris le mot !",
          promptHe: "הַקְשִׁיבוּ וְכִתְבוּ אֶת הַמִּלָּה!",
          say: "gâteau",
          answer: "gâteau",
          strict: false,
          explain: "On écrit : gâteau, avec un â chapeau et EAU à la fin.",
          explainHe: "כּוֹתְבִים gâteau, עִם â עִם כּוֹבַע וְ-EAU בַּסּוֹף."
        },
        {
          type: "build",
          prompt: "Remets les mots dans l'ordre !",
          promptHe: "סַדְּרוּ אֶת הַמִּלִּים בַּסֵּדֶר הַנָּכוֹן!",
          tiles: ["ballon.", "Levy", "au", "joue"],
          answer: ["Levy", "joue", "au", "ballon."],
          say: "levy joue au ballon.",
          explain: "La phrase est : Levy joue au ballon.",
          explainHe: "הַמִּשְׁפָּט הוּא: Levy joue au ballon."
        },
        {
          type: "fill",
          prompt: "Complète le mot !",
          promptHe: "הַשְׁלִימוּ אֶת הַמִּלָּה!",
          sentence: "Levy va à l'␣cole.",
          choices: ["a", "é", "o"],
          answer: 1,
          say: "école",
          explain: "C'est l'école, avec un é accent aigu au début.",
          explainHe: "זוֹ הַמִּלָּה école, עִם é עִם אֶקְסְנֵט בַּהַתְחָלָה."
        },
        {
          type: "type",
          prompt: "Écoute et écris le mot !",
          promptHe: "הַקְשִׁיבוּ וְכִתְבוּ אֶת הַמִּלָּה!",
          say: "vélo",
          answer: "vélo",
          strict: false,
          explain: "On écrit : vélo, avec un é accent aigu.",
          explainHe: "כּוֹתְבִים vélo, עִם é עִם אֶקְסְנֵט."
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ מָה שְׁמַעְתֶּם!",
          say: "gâteau",
          choices: ["château", "chapeau", "gâteau"],
          answer: 2,
          explain: "Tu as entendu : gâteau, avec GA au début.",
          explainHe: "שְׁמַעְתֶּם: gâteau, עִם GA בַּהַתְחָלָה."
        }
      ],
      joke: {
        q: "Quel est le comble pour un électricien ? ⚡",
        a: "C'est de ne pas être au courant ! 💡😂",
        qHe: "מָה הֲכִי מַצְחִיק שֶׁיָּכוֹל לִקְרוֹת לַחַשְׁמַלַּאי? ⚡",
        aHe: "לֹא לִהְיוֹת au courant! בְּצָרְפָתִית courant זֶה גַּם זֶרֶם חַשְׁמַלִּי, וּ-être au courant זֶה 'לָדַעַת מָה קוֹרֶה'! 💡😂"
      }
    },
    {
      id: "n7-s4",
      name: "Le grand défi",
      nameHe: "הָאֶתְגָּר הַגָּדוֹל",
      emoji: "🏆",
      lesson: {
        cards: [
          {
            title: "Le grand défi ! 💪",
            titleHe: "הָאֶתְגָּר הַגָּדוֹל!",
            body: "Voici une grande histoire de Pokémon en deux parties ! Lis bien, réponds aux questions et deviens un champion de la lecture !",
            bodyHe: "הִנֵּה סִפּוּר Pokémon גָּדוֹל בִּשְׁנֵי חֲלָקִים! קִרְאוּ טוֹב, עֲנוּ עַל הַשְּׁאֵלוֹת וְהִפְכוּ לְאַלּוּפֵי קְרִיאָה!",
            big: "🏆"
          }
        ]
      },
      exercises: [
        {
          type: "read",
          prompt: "Lis la première partie de l'histoire !",
          promptHe: "קִרְאוּ אֶת הַחֵלֶק הָרִאשׁוֹן שֶׁל הַסִּפּוּר!",
          text: "Levy joue dans le jardin.\nIl trouve un petit Pokémon perdu.\nLe Pokémon pleure : il a perdu son dresseur.\nLevy lui donne de l'eau et un gâteau.",
          say: "Levy joue dans le jardin. Il trouve un petit pokémon perdu. Le pokémon pleure : il a perdu son dresseur. Levy lui donne de l'eau et un gâteau.",
          explain: "Bravo ! Tu as lu la première partie de l'histoire !",
          explainHe: "כָּל הַכָּבוֹד! קְרָאתֶם אֶת הַחֵלֶק הָרִאשׁוֹן שֶׁל הַסִּפּוּר!"
        },
        {
          type: "pick",
          prompt: "Où Levy trouve-t-il le Pokémon ?",
          promptHe: "אֵיפֹה Levy מוֹצֵא אֶת הַ-Pokémon?",
          say: "où Levy trouve-t-il le pokémon ?",
          choices: ["à l'école", "dans le jardin", "à la piscine"],
          answer: 1,
          explain: "Levy joue dans le jardin quand il trouve le petit Pokémon.",
          explainHe: "Levy מְשַׂחֵק בַּגִּנָּה כְּשֶׁהוּא מוֹצֵא אֶת הַ-Pokémon הַקָּטָן."
        },
        {
          type: "pick",
          prompt: "Pourquoi le Pokémon pleure-t-il ?",
          promptHe: "לָמָּה הַ-Pokémon בּוֹכֶה?",
          say: "pourquoi le pokémon pleure-t-il ?",
          choices: ["Il est tombé du lit.", "Il a perdu son dresseur.", "Il n'aime pas les gâteaux."],
          answer: 1,
          explain: "Le Pokémon pleure parce qu'il a perdu son dresseur.",
          explainHe: "הַ-Pokémon בּוֹכֶה כִּי הוּא אִבֵּד אֶת הַמְּאַלֵּף שֶׁלּוֹ."
        },
        {
          type: "pick",
          prompt: "Que donne Levy au Pokémon ?",
          promptHe: "מָה Levy נוֹתֵן לְ-Pokémon?",
          say: "que donne Levy au pokémon ?",
          choices: ["une moto", "un cartable", "de l'eau et un gâteau"],
          answer: 2,
          explain: "Levy est gentil : il donne de l'eau et un gâteau au Pokémon.",
          explainHe: "Levy נֶחְמָד: הוּא נוֹתֵן לְ-Pokémon מַיִם וְעוּגָה."
        },
        {
          type: "fill",
          prompt: "Complète la phrase de l'histoire !",
          promptHe: "הַשְׁלִימוּ אֶת הַמִּשְׁפָּט מֵהַסִּפּוּר!",
          sentence: "Levy trouve un Pokémon ␣.",
          choices: ["géant", "perdu", "méchant"],
          answer: 1,
          say: "perdu",
          explain: "Le Pokémon est perdu : il ne trouve plus son dresseur.",
          explainHe: "הַ-Pokémon אָבוּד: הוּא לֹא מוֹצֵא אֶת הַמְּאַלֵּף שֶׁלּוֹ."
        },
        {
          type: "pick",
          prompt: "Vrai ou faux ?",
          promptHe: "נָכוֹן אוֹ לֹא נָכוֹן?",
          question: "Le Pokémon pleure.",
          say: "le pokémon pleure. vrai ou faux ?",
          choices: ["VRAI", "FAUX"],
          answer: 0,
          explain: "C'est vrai, le pauvre Pokémon pleure parce qu'il est perdu.",
          explainHe: "נָכוֹן, הַ-Pokémon הַמִּסְכֵּן בּוֹכֶה כִּי הוּא אָבוּד."
        },
        {
          type: "read",
          prompt: "Lis la suite de l'histoire !",
          promptHe: "קִרְאוּ אֶת הֶמְשֵׁךְ הַסִּפּוּר!",
          text: "Levy et le Pokémon cherchent dans toute la rue.\nLe soir, le dresseur arrive enfin.\nIl dit : merci Levy, tu es un champion !\nLe Pokémon saute de joie.",
          say: "Levy et le pokémon cherchent dans toute la rue. Le soir, le dresseur arrive enfin. Il dit : merci Levy, tu es un champion ! Le pokémon saute de joie.",
          explain: "Bravo ! Tu as lu toute l'histoire du Pokémon perdu !",
          explainHe: "כָּל הַכָּבוֹד! קְרָאתֶם אֶת כָּל הַסִּפּוּר עַל הַ-Pokémon הָאָבוּד!"
        },
        {
          type: "pick",
          prompt: "Qui arrive le soir ?",
          promptHe: "מִי מַגִּיעַ בָּעֶרֶב?",
          say: "qui arrive le soir ?",
          choices: ["la maîtresse", "le dresseur", "un ami"],
          answer: 1,
          explain: "Le soir, le dresseur du Pokémon arrive enfin.",
          explainHe: "בָּעֶרֶב סוֹף סוֹף מַגִּיעַ הַמְּאַלֵּף שֶׁל הַ-Pokémon."
        },
        {
          type: "build",
          prompt: "Remets les mots dans l'ordre !",
          promptHe: "סַדְּרוּ אֶת הַמִּלִּים בַּסֵּדֶר הַנָּכוֹן!",
          tiles: ["saute", "Le", "de", "Pokémon", "joie."],
          answer: ["Le", "Pokémon", "saute", "de", "joie."],
          say: "le pokémon saute de joie.",
          explain: "La phrase est : Le Pokémon saute de joie.",
          explainHe: "הַמִּשְׁפָּט הוּא: Le Pokémon saute de joie."
        },
        {
          type: "pick",
          prompt: "Lis bien : lequel navigue sur un bateau ?",
          promptHe: "קִרְאוּ טוֹב: מִי מֵהֶם שָׁט בַּיָּם?",
          choices: ["pirate", "pilote"],
          answer: 0,
          say: "pirate",
          explain: "pirate a un R : il navigue sur la mer. pilote a un L : lui, il conduit un avion !",
          explainHe: "pirate יֵשׁ בּוֹ R: הוּא שָׁט בַּיָּם. pilote יֵשׁ בּוֹ L: הוּא נוֹהֵג בְּמָטוֹס!"
        },
        {
          type: "type",
          prompt: "Écoute et écris le mot !",
          promptHe: "הַקְשִׁיבוּ וְכִתְבוּ אֶת הַמִּלָּה!",
          say: "merci",
          answer: "merci",
          strict: false,
          explain: "On écrit : merci. M-E-R-C-I, comme le dresseur dit à Levy !",
          explainHe: "כּוֹתְבִים merci: M-E-R-C-I, כְּמוֹ שֶׁהַמְּאַלֵּף אוֹמֵר לְ-Levy!"
        },
        {
          type: "pick",
          prompt: "Comment est le Pokémon à la fin ?",
          promptHe: "אֵיךְ מַרְגִּישׁ הַ-Pokémon בַּסּוֹף?",
          say: "comment est le pokémon à la fin ?",
          choices: ["triste", "content", "fâché"],
          answer: 1,
          explain: "À la fin, le Pokémon saute de joie : il est très content !",
          explainHe: "בַּסּוֹף הַ-Pokémon קוֹפֵץ מִשִּׂמְחָה: הוּא מְאוֹד שָׂמֵחַ!"
        }
      ],
      joke: {
        q: "Quel est le sport le plus silencieux ? 🤫",
        a: "Le parachutisme, parce qu'il faut dire CHUT ! 🪂😂",
        qHe: "מַהוּ הַסְּפּוֹרְט הֲכִי שָׁקֵט? 🤫",
        aHe: "הַצְּנִיחָה! כִּי בְּתוֹךְ הַמִּלָּה parachute מִתְחַבֵּאת הַמִּלָּה chut — 'שְׁשְׁשְׁשְׁ!' 🪂😂"
      }
    }
  ]
});
