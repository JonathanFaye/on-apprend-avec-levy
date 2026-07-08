window.LEVELS = window.LEVELS || [];
window.LEVELS.push({
  id: "n6",
  order: 6,
  name: "Je lis des phrases",
  nameHe: "אֲנִי קוֹרֵא מִשְׁפָּטִים",
  emoji: "📖",
  color: "#6A1B9A",
  tagline: "Je lis des phrases entières !",
  taglineHe: "אֲנִי קוֹרֵא מִשְׁפָּטִים שְׁלֵמִים!",
  sublevels: [
    {
      id: "n6-s1",
      name: "Les minuscules",
      nameHe: "הָאוֹתִיּוֹת הַקְּטַנּוֹת",
      emoji: "🔡",
      lesson: {
        cards: [
          {
            title: "Les lettres se déguisent ! 🎭",
            titleHe: "הָאוֹתִיּוֹת מִתְחַפְּשׂוֹת!",
            body: "Chaque grande lettre a une petite sœur : A devient a, B devient b, C devient c. On les appelle les minuscules !",
            bodyHe: "לְכָל אוֹת גְּדוֹלָה יֵשׁ אָחוֹת קְטַנָּה: A הוֹפֶכֶת לְ-a, B הוֹפֶכֶת לְ-b, C הוֹפֶכֶת לְ-c. קוֹרְאִים לָהֶן אוֹתִיּוֹת קְטַנּוֹת!",
            big: "A a  B b  C c",
            say: "a. bé. cé."
          },
          {
            title: "C'est le même mot ! 👯",
            titleHe: "זוֹ אוֹתָהּ מִלָּה!",
            body: "CHAT et chat, c'est exactement le même mot ! Dans les livres, presque tout est écrit en minuscules, avec une majuscule au début de la phrase.",
            bodyHe: "CHAT וּ-chat זוֹ בְּדִיּוּק אוֹתָהּ מִלָּה! בַּסְּפָרִים כִּמְעַט הַכֹּל כָּתוּב בְּאוֹתִיּוֹת קְטַנּוֹת, עִם אוֹת גְּדוֹלָה בִּתְחִלַּת הַמִּשְׁפָּט.",
            big: "CHAT = chat",
            say: "chat."
          },
          {
            title: "Attention aux jumelles ! 👀",
            titleHe: "זְהִירוּת, תְּאוֹמוֹת!",
            body: "Certaines minuscules se ressemblent beaucoup : b et d, p et q. Regarde bien de quel côté est le ventre de la lettre !",
            bodyHe: "יֵשׁ אוֹתִיּוֹת קְטַנּוֹת שֶׁדּוֹמוֹת מְאוֹד: b וְ-d, p וְ-q. הִסְתַּכְּלוּ טוֹב בְּאֵיזֶה צַד נִמְצֵאת הַבֶּטֶן שֶׁל הָאוֹת!",
            big: "b d  p q",
            say: "bé. dé. pé. ku."
          }
        ]
      },
      exercises: [
        {
          type: "match",
          prompt: "Relie chaque grande lettre à sa petite sœur !",
          promptHe: "חַבְּרוּ כָּל אוֹת גְּדוֹלָה לָאָחוֹת הַקְּטַנָּה שֶׁלָּהּ!",
          pairs: [["A", "a"], ["B", "b"], ["E", "e"], ["R", "r"]],
          explain: "A devient a, B devient b, E devient e et R devient r.",
          explainHe: "A הוֹפֶכֶת לְ-a, B לְ-b, E לְ-e וְ-R לְ-r."
        },
        {
          type: "pick",
          prompt: "Quelle est la minuscule de M ?",
          promptHe: "מַהִי הָאוֹת הַקְּטַנָּה שֶׁל M?",
          question: "M",
          choices: ["m", "n", "w"],
          answer: 0,
          say: "aime",
          explain: "M devient m : deux petits ponts, comme la grande !",
          explainHe: "M הוֹפֶכֶת לְ-m: שְׁנֵי גְּשָׁרִים קְטַנִּים, כְּמוֹ הַגְּדוֹלָה!"
        },
        {
          type: "pick",
          prompt: "Quelle est la minuscule de B ?",
          promptHe: "מַהִי הָאוֹת הַקְּטַנָּה שֶׁל B?",
          question: "B",
          choices: ["d", "p", "b"],
          answer: 2,
          say: "b, comme dans ballon",
          explain: "B devient b : un grand dos et un ventre en avant !",
          explainHe: "B הוֹפֶכֶת לְ-b: גַּב גָּבוֹהַּ וּבֶטֶן קָדִימָה!"
        },
        {
          type: "match",
          prompt: "Relie les grandes lettres aux petites !",
          promptHe: "חַבְּרוּ אֶת הָאוֹתִיּוֹת הַגְּדוֹלוֹת לַקְּטַנּוֹת!",
          pairs: [["D", "d"], ["G", "g"], ["Q", "q"], ["N", "n"]],
          explain: "D devient d, G devient g, Q devient q et N devient n.",
          explainHe: "D הוֹפֶכֶת לְ-d, G לְ-g, Q לְ-q וְ-N לְ-n."
        },
        {
          type: "pick",
          prompt: "Quel mot veut dire 🐱 ?",
          promptHe: "אֵיזוֹ מִלָּה אוֹמֶרֶת 🐱?",
          question: "🐱",
          choices: ["chaud", "chat", "chou"],
          answer: 1,
          say: "chat",
          explain: "chat s'écrit c-h-a-t. En minuscules aussi, tu sais le lire !",
          explainHe: "chat נִכְתֶּבֶת c-h-a-t. גַּם בְּאוֹתִיּוֹת קְטַנּוֹת אַתֶּם יוֹדְעִים לִקְרֹא אוֹתָהּ!"
        },
        {
          type: "pick",
          prompt: "Trouve le mot MAISON écrit en minuscules !",
          promptHe: "מִצְאוּ אֶת הַמִּלָּה MAISON כְּתוּבָה בְּאוֹתִיּוֹת קְטַנּוֹת!",
          question: "MAISON",
          choices: ["raison", "saison", "maison"],
          answer: 2,
          say: "maison",
          explain: "maison : m-a-i-s-o-n, les mêmes lettres en petit ! 🏠",
          explainHe: "maison: בְּדִיּוּק אוֹתָן אוֹתִיּוֹת, רַק קְטַנּוֹת! 🏠"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ מָה שְׁמַעְתֶּם!",
          say: "bonjour",
          choices: ["bonsoir", "bonjour", "toujours"],
          answer: 1,
          explain: "Tu as entendu bonjour, comme quand Levy dit bonjour le matin !",
          explainHe: "שְׁמַעְתֶּם bonjour, כְּמוֹ כְּשֶׁלֵּוִי אוֹמֵר בֹּקֶר טוֹב!"
        },
        {
          type: "fill",
          prompt: "Complète le mot !",
          promptHe: "הַשְׁלִימוּ אֶת הַמִּלָּה!",
          sentence: "Levy a un vél␣ bleu.",
          choices: ["o", "a", "e"],
          answer: 0,
          say: "vélo",
          explain: "vélo s'écrit v-é-l-o. Levy adore son vélo bleu ! 🚲",
          explainHe: "vélo נִכְתֶּבֶת v-é-l-o. לֵוִי אוֹהֵב אֶת הָאוֹפַנַּיִם הַכְּחֻלִּים שֶׁלּוֹ! 🚲"
        },
        {
          type: "build",
          prompt: "Assemble le mot lapin !",
          promptHe: "הַרְכִּיבוּ אֶת הַמִּלָּה lapin!",
          tiles: ["pin", "la", "lo"],
          answer: ["la", "pin"],
          say: "lapin",
          explain: "la + pin = lapin ! 🐰",
          explainHe: "la + pin = lapin! 🐰"
        },
        {
          type: "read",
          prompt: "Lis ces mots en minuscules à voix haute !",
          promptHe: "קִרְאוּ בְּקוֹל רָם אֶת הַמִּלִּים בְּאוֹתִיּוֹת קְטַנּוֹת!",
          text: "chat\nmaison\nvélo",
          say: "chat. maison. vélo.",
          explain: "Bravo ! Tu lis les minuscules comme un grand !",
          explainHe: "כָּל הַכָּבוֹד! אַתֶּם קוֹרְאִים אוֹתִיּוֹת קְטַנּוֹת כְּמוֹ גְּדוֹלִים!"
        }
      ],
      joke: {
        q: "Charade ! Mon premier miaule 🐱. Mon second recouvre ton corps. Mon tout se porte sur la tête ! 🤔",
        a: "Un chapeau ! CHAT + PEAU = CHAPEAU ! 🎩😹",
        qHe: "חִידָה! הַחֵלֶק הָרִאשׁוֹן הוּא חַיָּה שֶׁעוֹשָׂה מְיָאוּ (CHAT) 🐱. הַחֵלֶק הַשֵּׁנִי מְכַסֶּה אֶת הַגּוּף (PEAU). וְהַכֹּל בְּיַחַד? מַשֶּׁהוּ שֶׁשָּׂמִים עַל הָרֹאשׁ!",
        aHe: "כּוֹבַע! CHAT + PEAU = CHAPEAU! 🎩😹"
      }
    },
    {
      id: "n6-s2",
      name: "Les sons gn, ph, qu",
      nameHe: "הַצְּלִילִים gn, ph, qu",
      emoji: "🎵",
      lesson: {
        cards: [
          {
            title: "Le son gn ⛰️",
            titleHe: "הַצְּלִיל gn",
            body: "Les lettres g et n ensemble font le son 'gne', comme dans montagne, ligne et signe.",
            bodyHe: "הָאוֹתִיּוֹת g וְ-n בְּיַחַד עוֹשׂוֹת אֶת הַצְּלִיל 'נְיֶה', כְּמוֹ בַּמִּלִּים montagne, ligne וְ-signe.",
            big: "gn → montagne",
            say: "gne. montagne. ligne. signe."
          },
          {
            title: "Le son ph 📷",
            titleHe: "הַצְּלִיל ph",
            body: "Les lettres p et h ensemble font le son 'f', comme dans photo, téléphone et phoque !",
            bodyHe: "הָאוֹתִיּוֹת p וְ-h בְּיַחַד עוֹשׂוֹת אֶת הַצְּלִיל f, כְּמוֹ בַּמִּלִּים photo, téléphone וְ-phoque!",
            big: "ph → photo",
            say: "fe. photo. téléphone. phoque."
          },
          {
            title: "Le son qu 🎶",
            titleHe: "הַצְּלִיל qu",
            body: "Les lettres q et u ensemble font le son 'k', comme dans qui, quatre et musique. Le u ne se prononce pas !",
            bodyHe: "הָאוֹתִיּוֹת q וְ-u בְּיַחַד עוֹשׂוֹת אֶת הַצְּלִיל k, כְּמוֹ בַּמִּלִּים qui, quatre וְ-musique. אֶת הַ-u לֹא מְבַטְּאִים!",
            big: "qu → quatre",
            say: "ke. qui. quatre. musique."
          }
        ]
      },
      exercises: [
        {
          type: "pick",
          prompt: "Quel son font les lettres ph ?",
          promptHe: "אֵיזֶה צְלִיל עוֹשׂוֹת הָאוֹתִיּוֹת ph?",
          question: "ph",
          choices: ["p", "f", "v"],
          answer: 1,
          say: "fe",
          explain: "ph fait le son 'f' : photo se dit foto ! 📷",
          explainHe: "ph עוֹשֶׂה אֶת הַצְּלִיל f: אֶת photo מְבַטְּאִים 'פוֹטוֹ'! 📷"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ מָה שְׁמַעְתֶּם!",
          say: "photo",
          choices: ["moto", "auto", "photo"],
          answer: 2,
          explain: "photo commence par le son 'f', écrit ph ! 📷",
          explainHe: "photo מַתְחִילָה בִּצְלִיל f שֶׁנִּכְתַּב ph! 📷"
        },
        {
          type: "fill",
          prompt: "Complète le mot !",
          promptHe: "הַשְׁלִימוּ אֶת הַמִּלָּה!",
          sentence: "Levy monte sur la monta␣ne.",
          choices: ["g", "n", "p"],
          answer: 0,
          say: "montagne",
          explain: "montagne s'écrit avec gn : mon-ta-gne ! ⛰️",
          explainHe: "montagne נִכְתֶּבֶת עִם gn: mon-ta-gne! ⛰️"
        },
        {
          type: "pick",
          prompt: "Quel mot a le son 'gne' ?",
          promptHe: "בְּאֵיזוֹ מִלָּה יֵשׁ אֶת הַצְּלִיל 'נְיֶה' (gn)?",
          choices: ["lune", "lame", "ligne"],
          answer: 2,
          say: "ligne",
          explain: "Dans ligne, on entend 'gne' à la fin : li-gne !",
          explainHe: "בַּמִּלָּה ligne שׁוֹמְעִים 'נְיֶה' בַּסּוֹף: li-gne!"
        },
        {
          type: "build",
          prompt: "Assemble le mot musique !",
          promptHe: "הַרְכִּיבוּ אֶת הַמִּלָּה musique!",
          tiles: ["si", "que", "mu", "co"],
          answer: ["mu", "si", "que"],
          say: "musique",
          explain: "mu + si + que = musique ! 🎵",
          explainHe: "mu + si + que = musique! 🎵"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ מָה שְׁמַעְתֶּם!",
          say: "quatre",
          choices: ["carte", "quatre", "patte"],
          answer: 1,
          explain: "quatre commence par qu, qui fait le son 'k' !",
          explainHe: "quatre מַתְחִילָה בְּ-qu שֶׁעוֹשֶׂה אֶת הַצְּלִיל k!"
        },
        {
          type: "type",
          prompt: "Écoute et écris le mot !",
          promptHe: "הַקְשִׁיבוּ וְכִתְבוּ אֶת הַמִּלָּה!",
          say: "photo",
          answer: "photo",
          strict: false,
          explain: "photo s'écrit p-h-o-t-o : le son 'f' s'écrit ph !",
          explainHe: "photo נִכְתֶּבֶת p-h-o-t-o: הַצְּלִיל f נִכְתָּב ph!"
        },
        {
          type: "match",
          prompt: "Relie chaque mot à son image !",
          promptHe: "חַבְּרוּ כָּל מִלָּה לַתְּמוּנָה שֶׁלָּהּ!",
          pairs: [["photo", "📷"], ["téléphone", "📞"], ["quatre", "4️⃣"], ["montagne", "⛰️"]],
          explain: "photo 📷, téléphone 📞, quatre 4️⃣ et montagne ⛰️ !",
          explainHe: "photo 📷, téléphone 📞, quatre 4️ וְ-montagne ⛰️!"
        },
        {
          type: "fill",
          prompt: "Complète le mot !",
          promptHe: "הַשְׁלִימוּ אֶת הַמִּלָּה!",
          sentence: "Levy écoute de la musi␣ue.",
          choices: ["c", "g", "q"],
          answer: 2,
          say: "musique",
          explain: "musique s'écrit avec qu : mu-si-que ! 🎵",
          explainHe: "musique נִכְתֶּבֶת עִם qu: mu-si-que! 🎵"
        },
        {
          type: "read",
          prompt: "Lis cette phrase à voix haute !",
          promptHe: "קִרְאוּ אֶת הַמִּשְׁפָּט בְּקוֹל רָם!",
          text: "Le phoque fait un signe sur la montagne.",
          say: "Le phoque fait un signe sur la montagne.",
          explain: "Quelle drôle de phrase ! Bravo, tu as lu ph et gn !",
          explainHe: "אֵיזֶה מִשְׁפָּט מַצְחִיק! כָּל הַכָּבוֹד, קְרָאתֶם ph וְגַם gn!"
        }
      ],
      joke: {
        q: "Charade ! Mon premier est le contraire de haut. Mon second est le contraire de tard. Mon tout flotte sur l'eau ! 🌊",
        a: "Un bateau ! BAS + TÔT = BATEAU ! ⛵😄",
        qHe: "חִידָה! הַחֵלֶק הָרִאשׁוֹן הוּא הַהֶפֶךְ מִגָּבוֹהַּ (BAS). הַחֵלֶק הַשֵּׁנִי הוּא הַהֶפֶךְ מִמְּאֻחָר (TÔT). וְהַכֹּל בְּיַחַד? מַשֶּׁהוּ שֶׁצָּף עַל הַמַּיִם!",
        aHe: "סִירָה! BAS + TÔT = BATEAU! ⛵😄"
      }
    },
    {
      id: "n6-s3",
      name: "Les petits mots et les phrases",
      nameHe: "מִלִּים קְטַנּוֹת וּמִשְׁפָּטִים",
      emoji: "💬",
      lesson: {
        cards: [
          {
            title: "Les petits mots partout 🔎",
            titleHe: "מִלִּים קְטַנּוֹת בְּכָל מָקוֹם",
            body: "Ces petits mots sont dans toutes les phrases : il, elle, est, et, dans, avec, sur, sous, je, tu. Apprends-les par cœur !",
            bodyHe: "הַמִּלִּים הַקְּטַנּוֹת הָאֵלֶּה נִמְצָאוֹת בְּכָל הַמִּשְׁפָּטִים: il, elle, est, et, dans, avec, sur, sous, je, tu. לִמְדוּ אוֹתָן בְּעַל פֶּה!",
            big: "il  elle  est  et",
            say: "il. elle. est. et. dans. avec. sur. sous. je. tu."
          },
          {
            title: "La phrase ✏️",
            titleHe: "הַמִּשְׁפָּט",
            body: "Une phrase commence par une MAJUSCULE et finit par un point. Regarde : Levy va à la piscine.",
            bodyHe: "מִשְׁפָּט מַתְחִיל בְּאוֹת גְּדוֹלָה וּמִסְתַּיֵּם בִּנְקֻדָּה. הִסְתַּכְּלוּ: Levy va à la piscine.",
            big: "Levy va à la piscine.",
            say: "Levy va à la piscine."
          },
          {
            title: "? et !",
            titleHe: "? וְ-!",
            body: "Le point d'interrogation ? sert à poser une question. Le point d'exclamation ! sert à crier ou à s'étonner !",
            bodyHe: "סִימַן שְׁאֵלָה ? מְשַׁמֵּשׁ לִשְׁאֹל שְׁאֵלָה. סִימַן קְרִיאָה ! מְשַׁמֵּשׁ לִצְעֹק אוֹ לְהִתְפַּלֵּא!",
            big: ". ? !",
            say: "point. point d'interrogation. point d'exclamation."
          }
        ]
      },
      exercises: [
        {
          type: "fill",
          prompt: "Complète la phrase !",
          promptHe: "הַשְׁלִימוּ אֶת הַמִּשְׁפָּט!",
          sentence: "Le chat est ␣ la table.",
          choices: ["et", "sur", "je"],
          answer: 1,
          say: "Le chat est sur la table.",
          explain: "Le chat est SUR la table : il est dessus ! 🐱",
          explainHe: "הֶחָתוּל נִמְצָא sur (עַל) הַשֻּׁלְחָן: הוּא לְמַעְלָה! 🐱"
        },
        {
          type: "build",
          prompt: "Assemble la phrase !",
          promptHe: "הַרְכִּיבוּ אֶת הַמִּשְׁפָּט!",
          tiles: ["va", "Levy", "à", "piscine.", "la"],
          answer: ["Levy", "va", "à", "la", "piscine."],
          say: "Levy va à la piscine.",
          explain: "La phrase commence par une majuscule : Levy va à la piscine. 🏊",
          explainHe: "הַמִּשְׁפָּט מַתְחִיל בְּאוֹת גְּדוֹלָה: Levy va à la piscine. 🏊"
        },
        {
          type: "pick",
          prompt: "Quel signe finit une question ?",
          promptHe: "אֵיזֶה סִימָן מְסַיֵּם שְׁאֵלָה?",
          choices: ["!", ".", "?"],
          answer: 2,
          explain: "Le point d'interrogation ? finit toutes les questions !",
          explainHe: "סִימַן הַשְּׁאֵלָה ? מְסַיֵּם כָּל שְׁאֵלָה!"
        },
        {
          type: "fill",
          prompt: "Complète le début de la phrase !",
          promptHe: "הַשְׁלִימוּ אֶת תְּחִלַּת הַמִּשְׁפָּט!",
          sentence: "␣e chat dort.",
          choices: ["L", "l", "d"],
          answer: 0,
          say: "Le chat dort.",
          explain: "Une phrase commence toujours par une MAJUSCULE : Le chat dort.",
          explainHe: "מִשְׁפָּט תָּמִיד מַתְחִיל בְּאוֹת גְּדוֹלָה: Le chat dort."
        },
        {
          type: "pick",
          prompt: "Choisis la phrase bien écrite !",
          promptHe: "בַּחֲרוּ אֶת הַמִּשְׁפָּט הַכָּתוּב נָכוֹן!",
          choices: ["le chat est sur la table.", "Le chat est sur la table.", "Le chat est sur la table"],
          answer: 1,
          explain: "Majuscule au début ET point à la fin : Le chat est sur la table.",
          explainHe: "אוֹת גְּדוֹלָה בַּהַתְחָלָה וְגַם נְקֻדָּה בַּסּוֹף: Le chat est sur la table."
        },
        {
          type: "pick",
          prompt: "Il ou elle ? Choisis pour la maîtresse !",
          promptHe: "il אוֹ elle? בַּחֲרוּ בִּשְׁבִיל הַמּוֹרָה!",
          question: "la maîtresse 👩‍🏫",
          choices: ["il", "elle"],
          answer: 1,
          say: "elle",
          explain: "La maîtresse est une femme, on dit ELLE. Pour Levy, on dit IL !",
          explainHe: "הַמּוֹרָה הִיא אִשָּׁה, אוֹמְרִים elle. עַל לֵוִי אוֹמְרִים il!"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis la phrase que tu entends !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ אֶת הַמִּשְׁפָּט שֶׁשְּׁמַעְתֶּם!",
          say: "Levy est avec son ami.",
          choices: ["Levy est avec le chat.", "Levy est sur le vélo.", "Levy est avec son ami."],
          answer: 2,
          explain: "Levy est AVEC son ami : ils jouent ensemble !",
          explainHe: "לֵוִי נִמְצָא avec (עִם) חָבֵר שֶׁלּוֹ: הֵם מְשַׂחֲקִים בְּיַחַד!"
        },
        {
          type: "fill",
          prompt: "Quelle ponctuation à la fin ?",
          promptHe: "אֵיזֶה סִימַן פִּסּוּק בַּסּוֹף?",
          sentence: "Qui est dans la piscine ␣",
          choices: [".", "?", "!"],
          answer: 1,
          say: "Qui est dans la piscine ?",
          explain: "C'est une question, alors on met un point d'interrogation ?",
          explainHe: "זוֹ שְׁאֵלָה, אָז שָׂמִים סִימַן שְׁאֵלָה ?"
        },
        {
          type: "read",
          prompt: "Lis ces phrases à voix haute !",
          promptHe: "קִרְאוּ אֶת הַמִּשְׁפָּטִים בְּקוֹל רָם!",
          text: "Levy va à la piscine.\nLe chat est sur la table.",
          say: "Levy va à la piscine. Le chat est sur la table.",
          explain: "Bravo ! Tu lis de vraies phrases maintenant !",
          explainHe: "כָּל הַכָּבוֹד! עַכְשָׁו אַתֶּם קוֹרְאִים מִשְׁפָּטִים אֲמִתִּיִּים!"
        },
        {
          type: "type",
          prompt: "Écoute et écris le mot !",
          promptHe: "הַקְשִׁיבוּ וְכִתְבוּ אֶת הַמִּלָּה!",
          say: "avec",
          answer: "avec",
          strict: false,
          explain: "avec s'écrit a-v-e-c. Levy joue avec son ami !",
          explainHe: "avec נִכְתֶּבֶת a-v-e-c. לֵוִי מְשַׂחֵק עִם חָבֵר שֶׁלּוֹ!"
        }
      ],
      joke: {
        q: "Charade ! Mon premier est une note de musique 🎵. Mon second est un arbre toujours vert 🌲. Mon tout a de grandes oreilles ! 👂",
        a: "Un lapin ! LA + PIN = LAPIN ! 🐰😂",
        qHe: "חִידָה! הַחֵלֶק הָרִאשׁוֹן הוּא תָּו מוּזִיקָלִי (LA) 🎵. הַחֵלֶק הַשֵּׁנִי הוּא עֵץ יָרֹק (PIN) 🌲. וְהַכֹּל בְּיַחַד? חַיָּה עִם אָזְנַיִם גְּדוֹלוֹת!",
        aHe: "אַרְנָב! LA + PIN = LAPIN! 🐰😂"
      }
    },
    {
      id: "n6-s4",
      name: "Le grand défi",
      nameHe: "הָאֶתְגָּר הַגָּדוֹל",
      emoji: "🏆",
      lesson: {
        cards: [
          {
            title: "Le grand défi ! 🏆",
            titleHe: "הָאֶתְגָּר הַגָּדוֹל!",
            body: "Bravo ! Tu sais lire des phrases en minuscules, avec gn, ph, qu et la ponctuation. Levy est super fier de toi. À toi de jouer !",
            bodyHe: "כָּל הַכָּבוֹד! אַתֶּם יוֹדְעִים לִקְרֹא מִשְׁפָּטִים בְּאוֹתִיּוֹת קְטַנּוֹת, עִם gn, ph, qu וְסִימָנֵי פִּסּוּק. לֵוִי מַמָּשׁ גֵּאֶה בָּכֶם. עַכְשָׁו תּוֹרְכֶם!",
            big: "📖 ✨",
            say: "Le grand défi ! À toi de jouer !"
          }
        ]
      },
      exercises: [
        {
          type: "match",
          prompt: "Relie chaque grande lettre à sa minuscule !",
          promptHe: "חַבְּרוּ כָּל אוֹת גְּדוֹלָה לָאוֹת הַקְּטַנָּה שֶׁלָּהּ!",
          pairs: [["G", "g"], ["Q", "q"], ["E", "e"], ["R", "r"]],
          explain: "G devient g, Q devient q, E devient e et R devient r !",
          explainHe: "G הוֹפֶכֶת לְ-g, Q לְ-q, E לְ-e וְ-R לְ-r!"
        },
        {
          type: "pick",
          prompt: "Trouve le mot MUSIQUE en minuscules !",
          promptHe: "מִצְאוּ אֶת הַמִּלָּה MUSIQUE בְּאוֹתִיּוֹת קְטַנּוֹת!",
          question: "MUSIQUE",
          choices: ["musigue", "musique", "nusique"],
          answer: 1,
          say: "musique",
          explain: "musique : m-u-s-i-q-u-e, avec qu ! 🎵",
          explainHe: "musique: m-u-s-i-q-u-e, עִם qu! 🎵"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ מָה שְׁמַעְתֶּם!",
          say: "montagne",
          choices: ["montagne", "montre", "maman"],
          answer: 0,
          explain: "montagne finit par le son 'gne' : mon-ta-gne ! ⛰️",
          explainHe: "montagne מִסְתַּיֶּמֶת בִּצְלִיל 'נְיֶה': mon-ta-gne! ⛰️"
        },
        {
          type: "fill",
          prompt: "Complète le mot !",
          promptHe: "הַשְׁלִימוּ אֶת הַמִּלָּה!",
          sentence: "Levy a ␣uatre Pokémon.",
          choices: ["g", "d", "q"],
          answer: 2,
          say: "quatre",
          explain: "quatre s'écrit avec qu : q-u-a-t-r-e !",
          explainHe: "quatre נִכְתֶּבֶת עִם qu: q-u-a-t-r-e!"
        },
        {
          type: "build",
          prompt: "Assemble la phrase !",
          promptHe: "הַרְכִּיבוּ אֶת הַמִּשְׁפָּט!",
          tiles: ["chat", "Le", "sous", "dort", "la", "table."],
          answer: ["Le", "chat", "dort", "sous", "la", "table."],
          say: "Le chat dort sous la table.",
          explain: "Majuscule au début, point à la fin : Le chat dort sous la table. 🐱",
          explainHe: "אוֹת גְּדוֹלָה בַּהַתְחָלָה וּנְקֻדָּה בַּסּוֹף: Le chat dort sous la table. 🐱"
        },
        {
          type: "pick",
          prompt: "Choisis la phrase bien écrite !",
          promptHe: "בַּחֲרוּ אֶת הַמִּשְׁפָּט הַכָּתוּב נָכוֹן!",
          choices: ["elle joue avec le chat.", "Elle joue avec le chat", "Elle joue avec le chat."],
          answer: 2,
          explain: "Majuscule au début et point à la fin : Elle joue avec le chat.",
          explainHe: "אוֹת גְּדוֹלָה בַּהַתְחָלָה וּנְקֻדָּה בַּסּוֹף: Elle joue avec le chat."
        },
        {
          type: "type",
          prompt: "Écoute et écris le mot !",
          promptHe: "הַקְשִׁיבוּ וְכִתְבוּ אֶת הַמִּלָּה!",
          say: "ligne",
          answer: "ligne",
          strict: false,
          explain: "ligne s'écrit l-i-g-n-e, avec gn !",
          explainHe: "ligne נִכְתֶּבֶת l-i-g-n-e, עִם gn!"
        },
        {
          type: "pick",
          prompt: "Lis la phrase : où est Levy ?",
          promptHe: "קִרְאוּ אֶת הַמִּשְׁפָּט: אֵיפֹה לֵוִי?",
          question: "Levy est dans la piscine.",
          choices: ["dans la piscine", "sur le vélo", "sous la table"],
          answer: 0,
          explain: "La phrase dit : Levy est DANS la piscine ! 🏊",
          explainHe: "הַמִּשְׁפָּט אוֹמֵר: לֵוִי נִמְצָא dans (בְּתוֹךְ) הַבְּרֵכָה! 🏊"
        },
        {
          type: "fill",
          prompt: "Quelle ponctuation à la fin ?",
          promptHe: "אֵיזֶה סִימַן פִּסּוּק בַּסּוֹף?",
          sentence: "Qui a mon chapeau ␣",
          choices: ["!", "?", "."],
          answer: 1,
          say: "Qui a mon chapeau ?",
          explain: "C'est une question : on met un point d'interrogation ?",
          explainHe: "זוֹ שְׁאֵלָה: שָׂמִים סִימַן שְׁאֵלָה ?"
        },
        {
          type: "match",
          prompt: "Relie chaque mot à son image !",
          promptHe: "חַבְּרוּ כָּל מִלָּה לַתְּמוּנָה שֶׁלָּהּ!",
          pairs: [["téléphone", "📞"], ["montagne", "⛰️"], ["piscine", "🏊"], ["chat", "🐱"]],
          explain: "téléphone 📞, montagne ⛰️, piscine 🏊 et chat 🐱 !",
          explainHe: "téléphone 📞, montagne ⛰️, piscine 🏊 וְ-chat 🐱!"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis la phrase que tu entends !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ אֶת הַמִּשְׁפָּט שֶׁשְּׁמַעְתֶּם!",
          say: "Elle est avec la maîtresse.",
          choices: ["Il est avec la maîtresse.", "Elle est avec la maîtresse.", "Elle est avec son amie."],
          answer: 1,
          explain: "ELLE est avec la maîtresse : on entend bien ELLE !",
          explainHe: "elle (הִיא) נִמְצֵאת עִם הַמּוֹרָה: שׁוֹמְעִים הֵיטֵב elle!"
        },
        {
          type: "riddle",
          prompt: "Charade !",
          promptHe: "חִידָה!",
          question: "Mon premier est le contraire de dur.\nMon second, c'est 'ton', comme dans 'ton vélo'.\nMon tout dit bêêê dans le pré.",
          choices: ["un bouton", "un menton", "un mouton"],
          answer: 2,
          say: "Mon premier est le contraire de dur. Mon second, c'est ton, comme dans ton vélo. Mon tout dit bêêê dans le pré.",
          explain: "MOU + TON = MOUTON ! Le mouton dit bêêê ! 🐑",
          explainHe: "MOU (רַךְ, הַהֶפֶךְ מִקָּשֶׁה) + TON (שֶׁלְּךָ) = MOUTON, כֶּבֶשׂ! הַכֶּבֶשׂ עוֹשֶׂה מֶה! 🐑"
        }
      ],
      joke: {
        q: "Charade ! Mon premier est le contraire de 'sur'. Mon second est blanc et on le mange 🍚. Mon tout adore le fromage ! 🧀",
        a: "Une souris ! SOUS + RIZ = SOURIS ! 🐭😂",
        qHe: "חִידָה! הַחֵלֶק הָרִאשׁוֹן הוּא הַהֶפֶךְ מִ-sur (SOUS, מִתַּחַת). הַחֵלֶק הַשֵּׁנִי לָבָן וְאוֹכְלִים אוֹתוֹ (RIZ, אֹרֶז) 🍚. וְהַכֹּל בְּיַחַד? חַיָּה קְטַנָּה שֶׁאוֹהֶבֶת גְּבִינָה!",
        aHe: "עַכְבָּר! SOUS + RIZ = SOURIS! 🐭😂"
      }
    }
  ]
});
