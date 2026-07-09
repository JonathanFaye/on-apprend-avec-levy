window.LEVELS = window.LEVELS || [];
window.LEVELS.push({
  id: "n1",
  order: 1,
  name: "Les lettres",
  nameHe: "הָאוֹתִיּוֹת",
  emoji: "🔤",
  color: "#1A56A0",
  tagline: "Je découvre l'alphabet !",
  taglineHe: "אֲנִי מְגַלֶּה אֶת הָאָלֶף-בֵּית!",
  sublevels: [
    {
      id: "n1-s1",
      name: "Les voyelles",
      nameHe: "הַתְּנוּעוֹת",
      emoji: "🌟",
      lesson: {
        cards: [
          {
            title: "Les voyelles magiques ✨",
            titleHe: "הַתְּנוּעוֹת הַקְּסוּמוֹת",
            body: "Les voyelles sont les reines des lettres : A E I O U Y. On les entend dans presque tous les mots !",
            bodyHe: "הַתְּנוּעוֹת הֵן מַלְכוֹת הָאוֹתִיּוֹת: A E I O U Y. שׁוֹמְעִים אוֹתָן כִּמְעַט בְּכָל מִלָּה!",
            big: "A E I O U Y",
            say: "a. euh. i. o. u. i grec."
          },
          {
            title: "Chaque voyelle chante son nom 🎵",
            titleHe: "כָּל תְּנוּעָה שָׁרָה אֶת הַשֵּׁם שֶׁלָּהּ",
            body: "A dit 'a', E dit 'euh', I dit 'i', O dit 'o', U dit 'u'. Et Y a un nom rigolo : 'i grec' !",
            bodyHe: "A אוֹמֶרֶת 'אָה', E אוֹמֶרֶת 'אֶה', I אוֹמֶרֶת 'אִי', O אוֹמֶרֶת 'אוֹ', U אוֹמֶרֶת 'אוּ'. וּלְ-Y יֵשׁ שֵׁם מַצְחִיק: 'אִי גְּרֵק'!",
            big: "A E I O U Y",
            say: "a. euh. i. o. u. i grec."
          },
          {
            title: "On lit de gauche à droite ! 👀",
            titleHe: "קוֹרְאִים מִשְּׂמֹאל לְיָמִין!",
            body: "En hébreu, on lit de droite à gauche. En français, c'est le contraire : on lit de GAUCHE à DROITE !",
            bodyHe: "בְּעִבְרִית קוֹרְאִים מִיָּמִין לִשְׂמֹאל. בְּצָרְפָתִית זֶה הָפוּךְ: קוֹרְאִים מִשְּׂמֹאל לְיָמִין!",
            big: "➡️ ➡️ ➡️",
            say: "En français, on lit de gauche à droite !"
          }
        ]
      },
      exercises: [
        {
          type: "pick",
          prompt: "Trouve la lettre A !",
          promptHe: "מִצְאוּ אֶת הָאוֹת A!",
          choices: ["A", "E", "O"],
          answer: 0,
          say: "a",
          explain: "Voici A ! C'est la première lettre de l'alphabet.",
          explainHe: "הִנֵּה A! זוֹ הָאוֹת הָרִאשׁוֹנָה בָּאָלֶף-בֵּית."
        },
        {
          type: "listen",
          prompt: "Écoute et choisis la lettre que tu entends !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ אֶת הָאוֹת שֶׁשְּׁמַעְתֶּם!",
          say: "i",
          choices: ["I", "E", "A"],
          answer: 0,
          explain: "C'était la lettre I ! On dit : i.",
          explainHe: "זוֹ הָיְתָה הָאוֹת I! אוֹמְרִים: אִי."
        },
        {
          type: "pick",
          prompt: "Trouve la lettre E !",
          promptHe: "מִצְאוּ אֶת הָאוֹת E!",
          choices: ["E", "F", "B"],
          answer: 0,
          say: "euh",
          explain: "Voici E ! Son nom se dit 'euh'.",
          explainHe: "הִנֵּה E! אֶת הַשֵּׁם שֶׁלָּהּ אוֹמְרִים 'אֶה'."
        },
        {
          type: "match",
          prompt: "Relie les lettres identiques !",
          promptHe: "חַבְּרוּ אֶת הָאוֹתִיּוֹת הַזֵּהוֹת!",
          pairs: [["A", "A"], ["E", "E"], ["I", "I"], ["O", "O"]],
          say: "a. euh. i. o.",
          explain: "Regarde bien la forme de chaque lettre !",
          explainHe: "הִסְתַּכְּלוּ טוֹב עַל הַצּוּרָה שֶׁל כָּל אוֹת!"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis la lettre que tu entends !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ אֶת הָאוֹת שֶׁשְּׁמַעְתֶּם!",
          say: "o",
          choices: ["O", "U", "A"],
          answer: 0,
          explain: "C'était O ! La lettre O est toute ronde, comme un ballon.",
          explainHe: "זוֹ הָיְתָה O! הָאוֹת O עֲגֻלָּה לְגַמְרֵי, כְּמוֹ כַּדּוּר."
        },
        {
          type: "pick",
          prompt: "Trouve la lettre U !",
          promptHe: "מִצְאוּ אֶת הָאוֹת U!",
          choices: ["U", "V", "O"],
          answer: 0,
          say: "u",
          explain: "Voici U ! Attention : V est pointu en bas, U est arrondi.",
          explainHe: "הִנֵּה U! שִׂימוּ לֵב: V מְחֻדֶּדֶת לְמַטָּה, U מְעֻגֶּלֶת."
        },
        {
          type: "listen",
          prompt: "Écoute et choisis la lettre que tu entends !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ אֶת הָאוֹת שֶׁשְּׁמַעְתֶּם!",
          say: "i grec",
          choices: ["Y", "I", "U"],
          answer: 0,
          explain: "C'est Y ! Son nom est rigolo : 'i grec'.",
          explainHe: "זוֹ Y! יֵשׁ לָהּ שֵׁם מַצְחִיק: 'אִי גְּרֵק'."
        },
        {
          type: "pick",
          prompt: "Trouve la voyelle !",
          promptHe: "מִצְאוּ אֶת הַתְּנוּעָה!",
          choices: ["M", "A", "T"],
          answer: 1,
          say: "a",
          explain: "A est une voyelle ! M et T sont des consonnes.",
          explainHe: "A הִיא תְּנוּעָה! M וְ-T הֵם עִצּוּרִים."
        },
        {
          type: "read",
          prompt: "Lis les voyelles à voix haute !",
          promptHe: "קִרְאוּ אֶת הַתְּנוּעוֹת בְּקוֹל רָם!",
          text: "A E I O U Y",
          say: "a. euh. i. o. u. i grec.",
          explain: "Bravo ! Tu connais les six voyelles !",
          explainHe: "כָּל הַכָּבוֹד! אַתֶּם מַכִּירִים אֶת שֵׁשׁ הַתְּנוּעוֹת!"
        }
      ],
      joke: {
        q: "Pourquoi les poissons 🐟 n'aiment pas jouer au tennis 🎾 ?",
        a: "Parce qu'ils ont peur du filet ! 😂",
        qHe: "לָמָּה דָּגִים 🐟 לֹא אוֹהֲבִים לְשַׂחֵק טֵנִיס? 🎾",
        aHe: "כִּי הֵם מְפַחֲדִים מֵהָרֶשֶׁת! 😂"
      }
    },
    {
      id: "n1-s2",
      name: "Les consonnes",
      nameHe: "הָעִצּוּרִים",
      emoji: "💪",
      lesson: {
        cards: [
          {
            title: "Les consonnes costaudes 💪",
            titleHe: "הָעִצּוּרִים הַחֲזָקִים",
            body: "Voici des consonnes très utiles : M L S R P T V N. Chacune fait un petit SON. Avec les voyelles, elles fabriquent des mots !",
            bodyHe: "הִנֵּה עִצּוּרִים מְאוֹד שִׁמּוּשִׁיִּים: M L S R P T V N. לְכָל אֶחָד יֵשׁ צְלִיל קָטָן מִשֶּׁלּוֹ. יַחַד עִם הַתְּנוּעוֹת הֵם בּוֹנִים מִלִּים!",
            big: "M L S R P T V N",
            say: "mmm, comme dans maman. lll, comme dans lune. sss, comme dans serpent."
          },
          {
            title: "Chaque consonne fait un son 🔊",
            titleHe: "לְכָל אוֹת יֵשׁ צְלִיל 🔊",
            body: "Le plus important pour lire, c'est le SON de la lettre. M fait mmm, P fait p, V fait vvv. C'est comme ça qu'on lit les mots !",
            bodyHe: "הַדָּבָר הֲכִי חָשׁוּב כְּדֵי לִקְרֹא הוּא הַצְּלִיל שֶׁל הָאוֹת. M עוֹשָׂה מְמְמ, P עוֹשָׂה פּ, V עוֹשָׂה וְוְו. כָּכָה קוֹרְאִים אֶת הַמִּלִּים!",
            big: "M P V",
            say: "mmm, comme dans maman. p, comme dans papa. vvv, comme dans vélo."
          },
          {
            title: "Des lettres autour de toi 🔎",
            titleHe: "אוֹתִיּוֹת סְבִיבְךָ",
            body: "M comme MOTO 🏍️, P comme PIZZA 🍕, T comme TORTUE 🐢, V comme VÉLO 🚲 !",
            bodyHe: "M כְּמוֹ MOTO 🏍️, P כְּמוֹ PIZZA 🍕, T כְּמוֹ TORTUE 🐢, V כְּמוֹ VÉLO 🚲!",
            big: "M P T V",
            say: "moto. pizza. tortue. vélo."
          }
        ]
      },
      exercises: [
        {
          type: "pick",
          prompt: "Trouve la lettre M !",
          promptHe: "מִצְאוּ אֶת הָאוֹת M!",
          choices: ["M", "N", "W"],
          answer: 0,
          say: "mmm, comme dans maman",
          explain: "Voici M ! Elle fait le son mmm, comme dans MAMAN.",
          explainHe: "הִנֵּה M! הִיא עוֹשָׂה אֶת הַצְּלִיל מְמְמ, כְּמוֹ בַּמִּלָּה MAMAN."
        },
        {
          type: "listen",
          prompt: "Écoute et choisis la lettre que tu entends !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ אֶת הָאוֹת שֶׁשְּׁמַעְתֶּם!",
          say: "lll, comme dans lune",
          choices: ["L", "R", "N"],
          answer: 0,
          explain: "C'était L ! Elle fait le son lll, comme dans LUNE.",
          explainHe: "זוֹ הָיְתָה L! הִיא עוֹשָׂה אֶת הַצְּלִיל לְלְל, כְּמוֹ בַּמִּלָּה LUNE."
        },
        {
          type: "pick",
          prompt: "Trouve la lettre S !",
          promptHe: "מִצְאוּ אֶת הָאוֹת S!",
          choices: ["S", "Z", "C"],
          answer: 0,
          say: "sss, comme dans serpent",
          explain: "Voici S ! Elle fait le son sss, comme un serpent qui siffle. 🐍",
          explainHe: "הִנֵּה S! הִיא עוֹשָׂה אֶת הַצְּלִיל סְסְס, כְּמוֹ נָחָשׁ שֶׁלּוֹחֵשׁ. 🐍"
        },
        {
          type: "match",
          prompt: "Relie la lettre au dessin qui commence par elle !",
          promptHe: "חַבְּרוּ כָּל אוֹת לַצִּיּוּר שֶׁמַּתְחִיל בָּהּ!",
          pairs: [["M", "🏍️"], ["P", "🍕"], ["T", "🐢"], ["V", "🚲"]],
          say: "mmm, moto. p, pizza. t, tortue. vvv, vélo.",
          explain: "M comme MOTO, P comme PIZZA, T comme TORTUE, V comme VÉLO !",
          explainHe: "M כְּמוֹ MOTO, P כְּמוֹ PIZZA, T כְּמוֹ TORTUE, V כְּמוֹ VÉLO!"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis la lettre que tu entends !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ אֶת הָאוֹת שֶׁשְּׁמַעְתֶּם!",
          say: "rrr, comme dans rat",
          choices: ["R", "L", "N"],
          answer: 0,
          explain: "C'était R ! Elle fait le son rrr, comme dans RAT.",
          explainHe: "זוֹ הָיְתָה R! הִיא עוֹשָׂה אֶת הַצְּלִיל רְרְר, כְּמוֹ בַּמִּלָּה RAT."
        },
        {
          type: "pick",
          prompt: "Trouve la lettre P !",
          promptHe: "מִצְאוּ אֶת הָאוֹת P!",
          choices: ["P", "B", "R"],
          answer: 0,
          say: "p, comme dans papa",
          explain: "Voici P ! Elle fait le son p, comme dans PAPA.",
          explainHe: "הִנֵּה P! הִיא עוֹשָׂה אֶת הַצְּלִיל פּ, כְּמוֹ בַּמִּלָּה PAPA."
        },
        {
          type: "listen",
          prompt: "Écoute et choisis la lettre que tu entends !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ אֶת הָאוֹת שֶׁשְּׁמַעְתֶּם!",
          say: "t, comme dans tortue",
          choices: ["T", "P", "V"],
          answer: 0,
          explain: "C'était T ! Elle fait le son t, comme dans TORTUE.",
          explainHe: "זוֹ הָיְתָה T! הִיא עוֹשָׂה אֶת הַצְּלִיל טְ, כְּמוֹ בַּמִּלָּה TORTUE."
        },
        {
          type: "pick",
          prompt: "Trouve la lettre N !",
          promptHe: "מִצְאוּ אֶת הָאוֹת N!",
          choices: ["N", "M", "H"],
          answer: 0,
          say: "nnn, comme dans nid",
          explain: "Voici N ! Elle fait le son nnn, comme dans NID. M a deux ponts, N un seul.",
          explainHe: "הִנֵּה N! הִיא עוֹשָׂה אֶת הַצְּלִיל נְנְנ, כְּמוֹ בַּמִּלָּה NID. לְ-M יֵשׁ שְׁנֵי גְּשָׁרִים, וּלְ-N רַק אֶחָד."
        },
        {
          type: "listen",
          prompt: "Écoute et choisis la lettre que tu entends !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ אֶת הָאוֹת שֶׁשְּׁמַעְתֶּם!",
          say: "vvv, comme dans vélo",
          choices: ["V", "B", "F"],
          answer: 0,
          explain: "C'était V ! Elle fait le son vvv, comme dans VÉLO.",
          explainHe: "זוֹ הָיְתָה V! הִיא עוֹשָׂה אֶת הַצְּלִיל וְוְו, כְּמוֹ בַּמִּלָּה VÉLO."
        }
      ],
      joke: {
        q: "Que fait une vache 🐄 quand elle ferme les yeux 🙈 ?",
        a: "Du lait concentré ! 🥛😂",
        qHe: "מָה עוֹשָׂה פָּרָה 🐄 כְּשֶׁהִיא עוֹצֶמֶת עֵינַיִם? 🙈",
        aHe: "חָלָב מְרֻכָּז! (כִּי הִיא מִתְרַכֶּזֶת!) 🥛😂"
      }
    },
    {
      id: "n1-s3",
      name: "Tout l'alphabet",
      nameHe: "כָּל הָאָלֶף-בֵּית",
      emoji: "📖",
      lesson: {
        cards: [
          {
            title: "L'alphabet tout entier ! 📚",
            titleHe: "כָּל הָאָלֶף-בֵּית!",
            body: "L'alphabet français a 26 lettres, de A à Z. Écoute leurs noms !",
            bodyHe: "בָּאָלֶף-בֵּית הַצָּרְפָתִי יֵשׁ 26 אוֹתִיּוֹת, מִ-A עַד Z. הַקְשִׁיבוּ לַשֵּׁמוֹת שֶׁלָּהֶן!",
            big: "A B C D E F G H I J K L M\nN O P Q R S T U V W X Y Z",
            say: "a. bé. cé. dé. euh. èf. jé. ache. i. ji. ka. èl. èm. èn. o. pé. ku. èr. èss. té. u. vé. double vé. iks. i grec. zèd."
          },
          {
            title: "L'ordre alphabétique 🔢",
            titleHe: "הַסֵּדֶר הָאָלֶפְבֵּיתִי",
            body: "Les lettres ont un ordre : A, puis B, puis C... Comme une file d'attente bien rangée !",
            bodyHe: "לָאוֹתִיּוֹת יֵשׁ סֵדֶר: A, אַחַר כָּךְ B, אַחַר כָּךְ C... כְּמוֹ תּוֹר מְסֻדָּר!",
            big: "A B C D E",
            say: "a, puis bé, puis cé, puis dé, puis euh."
          },
          {
            title: "Rappel : on lit de gauche à droite ! 💡",
            titleHe: "תִּזְכֹּרֶת: קוֹרְאִים מִשְּׂמֹאל לְיָמִין!",
            body: "En français, tes yeux partent de la GAUCHE et vont vers la DROITE. C'est le contraire de l'hébreu !",
            bodyHe: "בְּצָרְפָתִית הָעֵינַיִם מַתְחִילוֹת מִשְּׂמֹאל וְהוֹלְכוֹת יָמִינָה. זֶה הָפוּךְ מֵעִבְרִית!",
            big: "➡️ ➡️ ➡️",
            say: "On lit de gauche à droite !"
          }
        ]
      },
      exercises: [
        {
          type: "pick",
          prompt: "Quelle lettre vient juste après A ?",
          promptHe: "אֵיזוֹ אוֹת בָּאָה מִיָּד אַחֲרֵי A?",
          choices: ["B", "C", "D"],
          answer: 0,
          say: "bé",
          explain: "A, B, C... Après A vient B !",
          explainHe: "A, B, C... אַחֲרֵי A בָּאָה B!"
        },
        {
          type: "pick",
          prompt: "Quelle lettre vient juste après C ?",
          promptHe: "אֵיזוֹ אוֹת בָּאָה מִיָּד אַחֲרֵי C?",
          choices: ["D", "B", "E"],
          answer: 0,
          say: "dé",
          explain: "A, B, C, D... Après C vient D !",
          explainHe: "A, B, C, D... אַחֲרֵי C בָּאָה D!"
        },
        {
          type: "pick",
          prompt: "Quelle lettre lis-tu en premier ?",
          promptHe: "אֵיזוֹ אוֹת קוֹרְאִים רִאשׁוֹנָה?",
          question: "M O T O",
          choices: ["M", "O", "T"],
          answer: 0,
          explain: "On lit de gauche à droite : on commence par M !",
          explainHe: "קוֹרְאִים מִשְּׂמֹאל לְיָמִין: מַתְחִילִים בְּ-M!"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis la lettre que tu entends !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ אֶת הָאוֹת שֶׁשְּׁמַעְתֶּם!",
          say: "double vé",
          choices: ["W", "V", "M"],
          answer: 0,
          explain: "C'est W : 'double vé', comme deux V collés !",
          explainHe: "זוֹ W: 'דּוּבְּל וֶה', כְּמוֹ שְׁתֵּי V מְחֻבָּרוֹת!"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis la lettre que tu entends !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ אֶת הָאוֹת שֶׁשְּׁמַעְתֶּם!",
          say: "ache",
          choices: ["H", "A", "K"],
          answer: 0,
          explain: "C'est H ! Son nom est 'ache'.",
          explainHe: "זוֹ H! הַשֵּׁם שֶׁלָּהּ 'אָשׁ'."
        },
        {
          type: "match",
          prompt: "Relie la lettre au dessin qui commence par elle !",
          promptHe: "חַבְּרוּ כָּל אוֹת לַצִּיּוּר שֶׁמַּתְחִיל בָּהּ!",
          pairs: [["A", "✈️"], ["B", "🍌"], ["C", "🥕"], ["O", "🍊"]],
          say: "a, avion. b, banane. k, carotte. o, orange.",
          explain: "A comme AVION, B comme BANANE, C comme CAROTTE, O comme ORANGE !",
          explainHe: "A כְּמוֹ AVION, B כְּמוֹ BANANE, C כְּמוֹ CAROTTE, O כְּמוֹ ORANGE!"
        },
        {
          type: "pick",
          prompt: "Quelle lettre vient juste après L ?",
          promptHe: "אֵיזוֹ אוֹת בָּאָה מִיָּד אַחֲרֵי L?",
          choices: ["M", "N", "K"],
          answer: 0,
          say: "èm",
          explain: "K, L, M... Après L vient M !",
          explainHe: "K, L, M... אַחֲרֵי L בָּאָה M!"
        },
        {
          type: "pick",
          prompt: "Quelle lettre lis-tu en dernier ?",
          promptHe: "אֵיזוֹ אוֹת קוֹרְאִים אַחֲרוֹנָה?",
          question: "P A P A",
          choices: ["A", "P"],
          answer: 0,
          explain: "On lit de gauche à droite : la dernière lettre est tout à droite. C'est A !",
          explainHe: "קוֹרְאִים מִשְּׂמֹאל לְיָמִין: הָאוֹת הָאַחֲרוֹנָה הִיא הֲכִי יְמָנִית. זוֹ A!"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis la lettre que tu entends !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ אֶת הָאוֹת שֶׁשְּׁמַעְתֶּם!",
          say: "zèd",
          choices: ["Z", "S", "J"],
          answer: 0,
          explain: "C'est Z, la toute dernière lettre de l'alphabet !",
          explainHe: "זוֹ Z, הָאוֹת הֲכִי אַחֲרוֹנָה בָּאָלֶף-בֵּית!"
        },
        {
          type: "read",
          prompt: "Lis ces lettres, de gauche à droite !",
          promptHe: "קִרְאוּ אֶת הָאוֹתִיּוֹת, מִשְּׂמֹאל לְיָמִין!",
          text: "A B C D E F",
          say: "a. bé. cé. dé. euh. èf.",
          explain: "Bravo ! Tu lis de gauche à droite, comme un champion !",
          explainHe: "כָּל הַכָּבוֹד! אַתֶּם קוֹרְאִים מִשְּׂמֹאל לְיָמִין, כְּמוֹ אַלּוּפִים!"
        }
      ],
      joke: {
        q: "Qu'est-ce qui fait 999 fois 'tic' et une fois 'toc' ? 🤔",
        a: "Un mille-pattes 🐛 avec une jambe de bois ! 🦵😂",
        qHe: "מָה עוֹשֶׂה 999 פְּעָמִים 'טִיק' וּפַעַם אַחַת 'טוֹק'? 🤔",
        aHe: "מַרְבֵּה-רַגְלַיִם 🐛 עִם רֶגֶל עֵץ! 🦵😂"
      }
    },
    {
      id: "n1-s4",
      name: "Le grand défi",
      nameHe: "הָאֶתְגָּר הַגָּדוֹל",
      emoji: "🏆",
      lesson: {
        cards: [
          {
            title: "Le grand défi ! 🏆",
            titleHe: "הָאֶתְגָּר הַגָּדוֹל!",
            body: "Bravo ! Tu connais les voyelles, les consonnes et tout l'alphabet. Levy est fier de toi. Montre tout ce que tu sais !",
            bodyHe: "כָּל הַכָּבוֹד! אַתֶּם מַכִּירִים אֶת הַתְּנוּעוֹת, אֶת הָעִצּוּרִים וְאֶת כָּל הָאָלֶף-בֵּית. Levy גֵּאֶה בָּכֶם. הַרְאוּ כָּל מַה שֶּׁאַתֶּם יוֹדְעִים!",
            big: "🏆",
            say: "C'est parti, champion !"
          }
        ]
      },
      exercises: [
        {
          type: "pick",
          prompt: "Trouve la voyelle !",
          promptHe: "מִצְאוּ אֶת הַתְּנוּעָה!",
          choices: ["R", "O", "T"],
          answer: 1,
          say: "o",
          explain: "O est une voyelle ! R et T sont des consonnes.",
          explainHe: "O הִיא תְּנוּעָה! R וְ-T הֵם עִצּוּרִים."
        },
        {
          type: "listen",
          prompt: "Écoute et choisis la lettre que tu entends !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ אֶת הָאוֹת שֶׁשְּׁמַעְתֶּם!",
          say: "u",
          choices: ["U", "O", "I"],
          answer: 0,
          explain: "C'était U ! On dit : u.",
          explainHe: "זוֹ הָיְתָה U! אוֹמְרִים: אוּ."
        },
        {
          type: "pick",
          prompt: "Quelle lettre vient juste après B ?",
          promptHe: "אֵיזוֹ אוֹת בָּאָה מִיָּד אַחֲרֵי B?",
          choices: ["C", "D", "A"],
          answer: 0,
          say: "cé",
          explain: "A, B, C... Après B vient C !",
          explainHe: "A, B, C... אַחֲרֵי B בָּאָה C!"
        },
        {
          type: "match",
          prompt: "Relie la lettre au dessin qui commence par elle !",
          promptHe: "חַבְּרוּ כָּל אוֹת לַצִּיּוּר שֶׁמַּתְחִיל בָּהּ!",
          pairs: [["S", "☀️"], ["L", "🦁"], ["T", "🐢"], ["P", "🍕"]],
          say: "sss, soleil. lll, lion. t, tortue. p, pizza.",
          explain: "S comme SOLEIL, L comme LION, T comme TORTUE, P comme PIZZA !",
          explainHe: "S כְּמוֹ SOLEIL, L כְּמוֹ LION, T כְּמוֹ TORTUE, P כְּמוֹ PIZZA!"
        },
        {
          type: "pick",
          prompt: "Trouve la lettre R !",
          promptHe: "מִצְאוּ אֶת הָאוֹת R!",
          choices: ["R", "B", "P"],
          answer: 0,
          say: "rrr, comme dans rat",
          explain: "Voici R ! Les lettres B et P lui ressemblent, regarde bien.",
          explainHe: "הִנֵּה R! הָאוֹתִיּוֹת B וְ-P דּוֹמוֹת לָהּ, הִסְתַּכְּלוּ טוֹב."
        },
        {
          type: "listen",
          prompt: "Écoute et choisis la lettre que tu entends !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ אֶת הָאוֹת שֶׁשְּׁמַעְתֶּם!",
          say: "i grec",
          choices: ["Y", "I", "J"],
          answer: 0,
          explain: "C'est Y, le fameux 'i grec' !",
          explainHe: "זוֹ Y, הָ'אִי גְּרֵק' הַמְּפֻרְסֶמֶת!"
        },
        {
          type: "pick",
          prompt: "Quelle lettre lis-tu en premier ?",
          promptHe: "אֵיזוֹ אוֹת קוֹרְאִים רִאשׁוֹנָה?",
          question: "L U N E",
          choices: ["L", "E", "U"],
          answer: 0,
          explain: "On lit de gauche à droite : on commence par L !",
          explainHe: "קוֹרְאִים מִשְּׂמֹאל לְיָמִין: מַתְחִילִים בְּ-L!"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis la lettre que tu entends !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ אֶת הָאוֹת שֶׁשְּׁמַעְתֶּם!",
          say: "mmm, comme dans maman",
          choices: ["M", "N", "L"],
          answer: 0,
          explain: "C'était M ! Elle fait le son mmm, comme dans MAMAN.",
          explainHe: "זוֹ הָיְתָה M! הִיא עוֹשָׂה אֶת הַצְּלִיל מְמְמ, כְּמוֹ בַּמִּלָּה MAMAN."
        },
        {
          type: "pick",
          prompt: "Quelle lettre fait le son p ?",
          promptHe: "אֵיזוֹ אוֹת עוֹשָׂה אֶת הַצְּלִיל p?",
          choices: ["P", "Q", "N"],
          answer: 0,
          say: "p, comme dans papa",
          explain: "C'est P ! Elle fait le son p, comme au début de PAPA.",
          explainHe: "זוֹ P! הִיא עוֹשָׂה אֶת הַצְּלִיל p, כְּמוֹ בְּרֹאשׁ הַמִּלָּה PAPA."
        },
        {
          type: "match",
          prompt: "Relie les lettres identiques !",
          promptHe: "חַבְּרוּ אֶת הָאוֹתִיּוֹת הַזֵּהוֹת!",
          pairs: [["O", "O"], ["Q", "Q"], ["C", "C"], ["G", "G"]],
          explain: "Les lettres O, Q, C et G se ressemblent : regarde bien leur forme !",
          explainHe: "הָאוֹתִיּוֹת O, Q, C וְ-G דּוֹמוֹת: הִסְתַּכְּלוּ טוֹב עַל הַצּוּרָה שֶׁלָּהֶן!"
        },
        {
          type: "pick",
          prompt: "Trouve la consonne !",
          promptHe: "מִצְאוּ אֶת הָעִצּוּר!",
          choices: ["A", "T", "E"],
          answer: 1,
          say: "t, comme dans tortue",
          explain: "T est une consonne ! A et E sont des voyelles.",
          explainHe: "T הוּא עִצּוּר! A וְ-E הֵן תְּנוּעוֹת."
        },
        {
          type: "read",
          prompt: "Lis tout l'alphabet à voix haute !",
          promptHe: "קִרְאוּ אֶת כָּל הָאָלֶף-בֵּית בְּקוֹל רָם!",
          text: "A B C D E F G H I\nJ K L M N O P Q R\nS T U V W X Y Z",
          say: "a. bé. cé. dé. euh. èf. jé. ache. i. ji. ka. èl. èm. èn. o. pé. ku. èr. èss. té. u. vé. double vé. iks. i grec. zèd.",
          explain: "Incroyable ! Tu connais les 26 lettres de l'alphabet !",
          explainHe: "מַדְהִים! אַתֶּם מַכִּירִים אֶת כָּל 26 הָאוֹתִיּוֹת שֶׁל הָאָלֶף-בֵּית!"
        }
      ],
      joke: {
        q: "Pourquoi les éléphants 🐘 n'ont-ils pas d'ordinateur 💻 ?",
        a: "Parce qu'ils ont peur de la souris ! 🐭😂",
        qHe: "לָמָּה לַפִּילִים 🐘 אֵין מַחְשֵׁב? 💻",
        aHe: "כִּי הֵם מְפַחֲדִים מֵהָעַכְבָּר! 🐭😂"
      }
    }
  ]
});
