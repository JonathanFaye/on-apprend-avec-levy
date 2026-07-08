window.LEVELS = window.LEVELS || [];
window.LEVELS.push({
  id: "n3",
  order: 3,
  name: "Premiers mots",
  nameHe: "מִלִּים רִאשׁוֹנוֹת",
  emoji: "📚",
  color: "#E65100",
  tagline: "Je lis mes premiers mots !",
  taglineHe: "אֲנִי קוֹרֵא אֶת הַמִּלִּים הָרִאשׁוֹנוֹת שֶׁלִּי!",
  sublevels: [
    {
      id: "n3-s1",
      name: "V et N",
      nameHe: "V וְ-N",
      emoji: "🚢",
      lesson: {
        cards: [
          {
            title: "La lettre V",
            titleHe: "הָאוֹת V",
            body: "La lettre V fait le son 'vvv' comme dans NAVIRE. Lis de gauche à droite : VA VE VI VO VU.",
            bodyHe: "הָאוֹת V עוֹשָׂה אֶת הַצְּלִיל 'ווּוּ' כְּמוֹ בַּמִּלָּה NAVIRE. קִרְאוּ מִשְּׂמֹאל לְיָמִין: VA VE VI VO VU.",
            big: "VA VE VI VO VU",
            say: "va. ve. vi. vo. vu."
          },
          {
            title: "La lettre N",
            titleHe: "הָאוֹת N",
            body: "La lettre N fait le son 'nnn' comme dans LUNE. Lis : NA NE NI NO NU.",
            bodyHe: "הָאוֹת N עוֹשָׂה אֶת הַצְּלִיל 'נַנְן' כְּמוֹ בַּמִּלָּה LUNE. קִרְאוּ: NA NE NI NO NU.",
            big: "NA NE NI NO NU",
            say: "na. ne. ni. no. nu."
          },
          {
            title: "Des syllabes aux mots 🧩",
            titleHe: "מֵהֲבָרוֹת לְמִלִּים",
            body: "On colle les syllabes pour lire des mots entiers : NA + VI + RE = NAVIRE !",
            bodyHe: "מְחַבְּרִים אֶת הַהֲבָרוֹת כְּדֵי לִקְרֹא מִלִּים שְׁלֵמוֹת: NA + VI + RE = NAVIRE!",
            big: "NA-VI-RE 🚢",
            say: "na. vi. re. navire !"
          }
        ]
      },
      exercises: [
        {
          type: "pick",
          prompt: "Trouve la lettre V !",
          promptHe: "מִצְאוּ אֶת הָאוֹת V!",
          choices: ["U", "V", "N"],
          answer: 1,
          say: "vvv, comme dans vélo",
          explain: "V est pointue en bas. U est arrondie en bas.",
          explainHe: "V מְחֻדֶּדֶת לְמַטָּה. U מְעֻגֶּלֶת לְמַטָּה."
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ מָה שְׁמַעְתֶּם!",
          say: "va",
          choices: ["NA", "VA", "MA"],
          answer: 1,
          explain: "On entend 'vvv' au début : c'est VA.",
          explainHe: "שׁוֹמְעִים 'ווּוּ' בַּהַתְחָלָה: זֶה VA."
        },
        {
          type: "listen",
          prompt: "Écoute bien et choisis la syllabe !",
          promptHe: "הַקְשִׁיבוּ טוֹב וּבַחֲרוּ אֶת הַהֲבָרָה!",
          say: "ni",
          choices: ["NU", "VI", "NI"],
          answer: 2,
          explain: "'nnn' + 'i' = NI.",
          explainHe: "'נַנְן' וְעוֹד 'אִי' = NI."
        },
        {
          type: "pick",
          prompt: "Quelle syllabe commence le mot NAVIRE ?",
          promptHe: "בְּאֵיזוֹ הֲבָרָה מַתְחִילָה הַמִּלָּה NAVIRE?",
          question: "NAVIRE 🚢",
          choices: ["NA", "VA", "MA"],
          answer: 0,
          say: "navire",
          explain: "NA-VI-RE : on entend NA en premier.",
          explainHe: "NA-VI-RE: שׁוֹמְעִים NA בַּהַתְחָלָה."
        },
        {
          type: "build",
          prompt: "Assemble le mot NAVIRE !",
          promptHe: "הַרְכִּיבוּ אֶת הַמִּלָּה NAVIRE!",
          tiles: ["VI", "NA", "RE", "MO"],
          answer: ["NA", "VI", "RE"],
          say: "navire",
          explain: "NA + VI + RE = NAVIRE, le grand bateau ! 🚢",
          explainHe: "NA + VI + RE = NAVIRE, הָאֳנִיָּה הַגְּדוֹלָה! 🚢"
        },
        {
          type: "fill",
          prompt: "Complète le mot !",
          promptHe: "הַשְׁלִימוּ אֶת הַמִּלָּה!",
          sentence: "LU␣E 🌙",
          choices: ["M", "N", "V"],
          answer: 1,
          say: "lune",
          explain: "On entend 'nnn' au milieu : LUNE.",
          explainHe: "שׁוֹמְעִים 'נַנְן' בָּאֶמְצַע: LUNE."
        },
        {
          type: "match",
          prompt: "Relie chaque mot à son image !",
          promptHe: "חַבְּרוּ כָּל מִלָּה לַתְּמוּנָה שֶׁלָּהּ!",
          pairs: [["LUNE", "🌙"], ["NAVIRE", "🚢"], ["TULIPE", "🌷"]],
          explain: "LUNE 🌙, NAVIRE 🚢, TULIPE 🌷. Bien lu !",
          explainHe: "LUNE 🌙, NAVIRE 🚢, TULIPE 🌷. קְרָאתֶם יָפֶה!"
        },
        {
          type: "pick",
          prompt: "Lis le mot et trouve son image !",
          promptHe: "קִרְאוּ אֶת הַמִּלָּה וּמִצְאוּ אֶת הַתְּמוּנָה!",
          question: "TULIPE",
          choices: ["🌙", "🚢", "🌷"],
          answer: 2,
          say: "tulipe",
          explain: "TU-LI-PE, c'est la fleur : 🌷.",
          explainHe: "TU-LI-PE זֶה הַפֶּרַח: 🌷."
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ מָה שְׁמַעְתֶּם!",
          say: "vu",
          choices: ["VU", "VO", "NU"],
          answer: 0,
          explain: "'vvv' + 'u' = VU.",
          explainHe: "'ווּוּ' וְעוֹד U = VU."
        },
        {
          type: "build",
          prompt: "Assemble le mot TULIPE !",
          promptHe: "הַרְכִּיבוּ אֶת הַמִּלָּה TULIPE!",
          tiles: ["LI", "TU", "PE", "VA"],
          answer: ["TU", "LI", "PE"],
          say: "tulipe",
          explain: "TU + LI + PE = TULIPE 🌷.",
          explainHe: "TU + LI + PE = TULIPE 🌷."
        }
      ],
      joke: {
        q: "Un ami demande à Toto : 'Pourquoi fermes-tu les yeux 🙈 devant le miroir 🪞 ?'",
        a: "'Pour voir comment je suis quand je dors ! 😴😂'",
        qHe: "חָבֵר שׁוֹאֵל אֶת טוֹטוֹ: 'לָמָּה אַתָּה עוֹצֵם עֵינַיִם מוּל הַמַּרְאָה 🪞?'",
        aHe: "'כְּדֵי לִרְאוֹת אֵיךְ אֲנִי נִרְאֶה כְּשֶׁאֲנִי יָשָׁן! 😴😂'"
      }
    },
    {
      id: "n3-s2",
      name: "F, D, B et les petits mots",
      nameHe: "F, D, B וְהַמִּלִּים הַקְּטַנּוֹת",
      emoji: "🍌",
      lesson: {
        cards: [
          {
            title: "La lettre F",
            titleHe: "הָאוֹת F",
            body: "La lettre F fait le son 'fff'. Lis : FA FE FI FO FU.",
            bodyHe: "הָאוֹת F עוֹשָׂה אֶת הַצְּלִיל 'פְפְפְ', כְּמוֹ פ בַּמִּלָּה פָלָאפֶל. קִרְאוּ: FA FE FI FO FU.",
            big: "FA FE FI FO FU",
            say: "fa. fe. fi. fo. fu."
          },
          {
            title: "La lettre D",
            titleHe: "הָאוֹת D",
            body: "La lettre D fait le son 'ddd' comme dans DOMINO. Lis : DA DE DI DO DU.",
            bodyHe: "הָאוֹת D עוֹשָׂה אֶת הַצְּלִיל 'דֵּדד', כְּמוֹ ד בַּמִּלָּה DOMINO. קִרְאוּ: DA DE DI DO DU.",
            big: "DA DE DI DO DU",
            say: "da. de. di. do. du."
          },
          {
            title: "La lettre B",
            titleHe: "הָאוֹת B",
            body: "La lettre B fait le son 'bbb' comme dans BANANE. Attention : B et D se ressemblent ! Lis : BA BE BI BO BU.",
            bodyHe: "הָאוֹת B עוֹשָׂה אֶת הַצְּלִיל 'בְּבֵּבּ', כְּמוֹ בַּמִּלָּה BANANE. שִׂימוּ לֵב: B וְ-D דּוֹמוֹת! קִרְאוּ: BA BE BI BO BU.",
            big: "BA BE BI BO BU",
            say: "ba. be. bi. bo. bu."
          },
          {
            title: "Les petits mots magiques ✨",
            titleHe: "הַמִּלִּים הַקְּטַנּוֹת הַקְּסוּמוֹת",
            body: "Des petits mots à connaître par cœur, on les voit partout : LE, LA, UN, UNE, ET.",
            bodyHe: "מִלִּים קְטַנּוֹת שֶׁצָּרִיךְ לָדַעַת בְּעַל פֶּה, רוֹאִים אוֹתָן בְּכָל מָקוֹם: LE, LA, UN, UNE, ET.",
            big: "LE LA UN UNE ET",
            say: "le. la. un. une. et."
          }
        ]
      },
      exercises: [
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ מָה שְׁמַעְתֶּם!",
          say: "fa",
          choices: ["VA", "FA", "BA"],
          answer: 1,
          explain: "On entend 'fff' : FA. V fait 'vvv', c'est différent !",
          explainHe: "שׁוֹמְעִים 'פ': FA. V עוֹשֶׂה 'ווּוּ', זֶה שׁוֹנֶה!"
        },
        {
          type: "listen",
          prompt: "Écoute bien et choisis la syllabe !",
          promptHe: "הַקְשִׁיבוּ טוֹב וּבַחֲרוּ אֶת הַהֲבָרָה!",
          say: "ba",
          choices: ["BA", "DA", "PA"],
          answer: 0,
          explain: "B fait 'bbb' : BA. Attention, B et D se ressemblent !",
          explainHe: "B עוֹשֶׂה 'בְּ': BA. שִׂימוּ לֵב, B וְ-D דּוֹמוֹת!"
        },
        {
          type: "pick",
          prompt: "Quelle syllabe commence le mot BANANE ?",
          promptHe: "בְּאֵיזוֹ הֲבָרָה מַתְחִילָה הַמִּלָּה BANANE?",
          question: "BANANE 🍌",
          choices: ["DA", "NA", "BA"],
          answer: 2,
          say: "banane",
          explain: "BA-NA-NE : on entend BA en premier.",
          explainHe: "BA-NA-NE: שׁוֹמְעִים BA בַּהַתְחָלָה."
        },
        {
          type: "build",
          prompt: "Assemble le mot BANANE !",
          promptHe: "הַרְכִּיבוּ אֶת הַמִּלָּה BANANE!",
          tiles: ["NA", "BA", "NE", "DO"],
          answer: ["BA", "NA", "NE"],
          say: "banane",
          explain: "BA + NA + NE = BANANE 🍌.",
          explainHe: "BA + NA + NE = BANANE 🍌."
        },
        {
          type: "fill",
          prompt: "Complète le mot !",
          promptHe: "הַשְׁלִימוּ אֶת הַמִּלָּה!",
          sentence: "SALA␣E 🥗",
          choices: ["B", "D", "T"],
          answer: 1,
          say: "salade",
          explain: "On entend 'ddd' : SALADE.",
          explainHe: "שׁוֹמְעִים 'דֵּדד': SALADE."
        },
        {
          type: "pick",
          prompt: "Trouve le petit mot UNE !",
          promptHe: "מִצְאוּ אֶת הַמִּלָּה הַקְּטַנָּה UNE!",
          choices: ["UN", "UNE", "NU"],
          answer: 1,
          say: "une",
          explain: "UNE a trois lettres : U-N-E.",
          explainHe: "לְ-UNE יֵשׁ שָׁלוֹשׁ אוֹתִיּוֹת: U-N-E."
        },
        {
          type: "listen",
          prompt: "Écoute : quel petit mot entends-tu ?",
          promptHe: "הַקְשִׁיבוּ: אֵיזוֹ מִלָּה קְטַנָּה שְׁמַעְתֶּם?",
          say: "et",
          choices: ["LE", "LA", "ET"],
          answer: 2,
          explain: "ET se dit 'é'. Il sert à ajouter : PAPA ET MAMAN.",
          explainHe: "ET נִשְׁמַעַת 'אֶה'. הִיא מְחַבֶּרֶת דְּבָרִים: PAPA ET MAMAN."
        },
        {
          type: "build",
          prompt: "Assemble : UN PANDA !",
          promptHe: "הַרְכִּיבוּ: UN PANDA!",
          tiles: ["PANDA", "UN", "LA"],
          answer: ["UN", "PANDA"],
          say: "un panda",
          explain: "UN PANDA 🐼. Le petit mot UN vient avant.",
          explainHe: "UN PANDA 🐼. הַמִּלָּה הַקְּטַנָּה UN בָּאָה קֹדֶם."
        },
        {
          type: "match",
          prompt: "Relie chaque mot à son image !",
          promptHe: "חַבְּרוּ כָּל מִלָּה לַתְּמוּנָה שֶׁלָּהּ!",
          pairs: [["BANANE", "🍌"], ["SALADE", "🥗"], ["PANDA", "🐼"]],
          explain: "BANANE 🍌, SALADE 🥗, PANDA 🐼. Super !",
          explainHe: "BANANE 🍌, SALADE 🥗, PANDA 🐼. מְעֻלֶּה!"
        },
        {
          type: "fill",
          prompt: "Complète la phrase !",
          promptHe: "הַשְׁלִימוּ אֶת הַמִּשְׁפָּט!",
          sentence: "UN DOMINO ET U␣E BANANE.",
          choices: ["N", "M", "V"],
          answer: 0,
          say: "un domino et une banane",
          explain: "UNE : U-N-E. On écrit UNE BANANE.",
          explainHe: "UNE: U-N-E. כּוֹתְבִים UNE BANANE."
        }
      ],
      joke: {
        q: "La maîtresse : 'Toto, épelle le mot BANANE 🍌.'",
        a: "'B-A, puis N-A, N-A... le plus dur, c'est de savoir quand s'arrêter ! 😅🍌'",
        qHe: "הַמּוֹרָה: 'טוֹטוֹ, אַיֵּת אֶת הַמִּלָּה BANANE 🍌.'",
        aHe: "'B-A, וְאָז N-A, N-A... הֲכִי קָשֶׁה זֶה לָדַעַת מָתַי לַעֲצֹר! 😅🍌'"
      }
    },
    {
      id: "n3-s3",
      name: "PAPA, MAMAN et la lettre É",
      nameHe: "PAPA, MAMAN וְהָאוֹת É",
      emoji: "🚲",
      lesson: {
        cards: [
          {
            title: "Les mots PAPA et MAMAN",
            titleHe: "הַמִּלִּים PAPA וְ-MAMAN",
            body: "Tu sais déjà les lire : PAPA et MAMAN, les premiers mots du français. Lis-les bien !",
            bodyHe: "אַתֶּם כְּבָר יוֹדְעִים לִקְרֹא אוֹתָן: PAPA וְ-MAMAN, הַמִּלִּים הָרִאשׁוֹנוֹת בְּצָרְפָתִית. קִרְאוּ אוֹתָן יָפֶה!",
            big: "PAPA MAMAN",
            say: "papa. maman."
          },
          {
            title: "LEVY, notre héros 🦸",
            titleHe: "LEVY, הַגִּבּוֹר שֶׁלָּנוּ",
            body: "Le prénom LEVY est spécial : il se lit 'Lévi'. Le Y à la fin fait le son 'i'. Regarde-le bien pour le reconnaître !",
            bodyHe: "הַשֵּׁם LEVY מְיֻחָד: קוֹרְאִים אוֹתוֹ 'לֵוִי'. הַ-Y בַּסּוֹף עוֹשֶׂה אֶת הַצְּלִיל 'אִי'. הִסְתַּכְּלוּ עָלָיו טוֹב כְּדֵי לְזַהוֹת אוֹתוֹ!",
            big: "LEVY 👦",
            say: "lévy"
          },
          {
            title: "La lettre É",
            titleHe: "הָאוֹת É",
            body: "La lettre É porte un petit accent. Elle se dit 'é' comme dans VÉLO. Levy adore son vélo !",
            bodyHe: "לָאוֹת É יֵשׁ קַו קָטָן לְמַעְלָה. הִיא נִשְׁמַעַת 'אֶה' כְּמוֹ בַּמִּלָּה VÉLO. Levy מֵת עַל הָאוֹפַנַּיִם שֶׁלּוֹ!",
            big: "É → VÉLO 🚲",
            say: "é ! vélo !"
          }
        ]
      },
      exercises: [
        {
          type: "listen",
          prompt: "Écoute : quel prénom entends-tu ?",
          promptHe: "הַקְשִׁיבוּ: אֵיזֶה שֵׁם שְׁמַעְתֶּם?",
          say: "lévy",
          choices: ["LUNE", "LEVY", "VÉLO"],
          answer: 1,
          explain: "LEVY, c'est notre héros ! 👦",
          explainHe: "LEVY הוּא הַגִּבּוֹר שֶׁלָּנוּ! 👦"
        },
        {
          type: "listen",
          prompt: "Écoute : quel mot entends-tu ?",
          promptHe: "הַקְשִׁיבוּ: אֵיזוֹ מִלָּה שְׁמַעְתֶּם?",
          say: "papa",
          choices: ["PAPA", "PAPI", "PAPE"],
          answer: 0,
          explain: "PA + PA = PAPA, deux fois la syllabe PA.",
          explainHe: "PA וְעוֹד PA = PAPA, פַּעֲמַיִם הַהֲבָרָה PA."
        },
        {
          type: "pick",
          prompt: "Lis le mot et trouve son image !",
          promptHe: "קִרְאוּ אֶת הַמִּלָּה וּמִצְאוּ אֶת הַתְּמוּנָה!",
          question: "MAMAN",
          choices: ["👨", "👶", "👩"],
          answer: 2,
          say: "maman",
          explain: "MA-MAN, c'est 👩.",
          explainHe: "MA-MAN זוֹ 👩."
        },
        {
          type: "match",
          prompt: "Relie chaque prénom à son image !",
          promptHe: "חַבְּרוּ כָּל שֵׁם לַתְּמוּנָה שֶׁלּוֹ!",
          pairs: [["PAPA", "👨"], ["MAMAN", "👩"], ["LEVY", "👦"]],
          explain: "PAPA 👨, MAMAN 👩 et LEVY 👦 !",
          explainHe: "PAPA 👨, MAMAN 👩 וְ-LEVY 👦!"
        },
        {
          type: "fill",
          prompt: "Complète le mot !",
          promptHe: "הַשְׁלִימוּ אֶת הַמִּלָּה!",
          sentence: "V␣LO 🚲",
          choices: ["E", "É", "A"],
          answer: 1,
          say: "vélo",
          explain: "É avec son accent se dit 'é' : VÉLO.",
          explainHe: "É עִם הַקַּו הַקָּטָן לְמַעְלָה נִשְׁמַעַת 'אֶה': VÉLO."
        },
        {
          type: "listen",
          prompt: "Écoute et choisis le mot !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ אֶת הַמִּלָּה!",
          say: "vélo",
          choices: ["VALO", "VÉLO", "VOLO"],
          answer: 1,
          explain: "On entend 'é' : VÉLO, avec la lettre É.",
          explainHe: "שׁוֹמְעִים 'אֶה': VÉLO, עִם הָאוֹת É."
        },
        {
          type: "build",
          prompt: "Assemble le mot VÉLO !",
          promptHe: "הַרְכִּיבוּ אֶת הַמִּלָּה VÉLO!",
          tiles: ["LO", "VÉ", "VO"],
          answer: ["VÉ", "LO"],
          say: "vélo",
          explain: "VÉ + LO = VÉLO 🚲.",
          explainHe: "VÉ + LO = VÉLO 🚲."
        },
        {
          type: "build",
          prompt: "Assemble : PAPA ET MAMAN !",
          promptHe: "הַרְכִּיבוּ: PAPA ET MAMAN!",
          tiles: ["ET", "PAPA", "MAMAN", "LA"],
          answer: ["PAPA", "ET", "MAMAN"],
          say: "papa et maman",
          explain: "Le petit mot ET colle les deux mots.",
          explainHe: "הַמִּלָּה הַקְּטַנָּה ET מְחַבֶּרֶת בֵּין שְׁתֵּי הַמִּלִּים."
        },
        {
          type: "pick",
          prompt: "Lis ce prénom. Qui est-ce ?",
          promptHe: "קִרְאוּ אֶת הַשֵּׁם. מִי זֶה?",
          question: "LEVY",
          choices: ["👨", "👶", "👦"],
          answer: 2,
          say: "lévy",
          explain: "LEVY, c'est notre héros : 👦.",
          explainHe: "LEVY הוּא הַגִּבּוֹר שֶׁלָּנוּ: 👦."
        },
        {
          type: "fill",
          prompt: "Complète la phrase !",
          promptHe: "הַשְׁלִימוּ אֶת הַמִּשְׁפָּט!",
          sentence: "MAMAN ␣T PAPA.",
          choices: ["E", "A", "O"],
          answer: 0,
          say: "maman et papa",
          explain: "Le petit mot ET s'écrit E-T.",
          explainHe: "הַמִּלָּה הַקְּטַנָּה ET נִכְתֶּבֶת E-T."
        }
      ],
      joke: {
        q: "La maîtresse : 'Toto, je te donne 2 lapins 🐰, puis encore 2 lapins 🐰. Combien en as-tu ?'",
        a: "'5, maîtresse ! J'en ai déjà un à la maison ! 🏠😂'",
        qHe: "הַמּוֹרָה: 'טוֹטוֹ, אֲנִי נוֹתֶנֶת לְךָ 2 אַרְנָבִים וְעוֹד 2 אַרְנָבִים. כַּמָּה יֵשׁ לְךָ 🐰?'",
        aHe: "'5, הַמּוֹרָה! יֵשׁ לִי כְּבָר אַרְנָב אֶחָד בַּבַּיִת! 🏠😂'"
      }
    },
    {
      id: "n3-s4",
      name: "Le grand défi",
      nameHe: "הָאֶתְגָּר הַגָּדוֹל",
      emoji: "🏆",
      lesson: {
        cards: [
          {
            title: "Le grand défi ! 🏆",
            titleHe: "הָאֶתְגָּר הַגָּדוֹל!",
            body: "Bravo ! Tu connais V, N, F, D, B, la lettre É et plein de mots. Montre tout ce que tu sais !",
            bodyHe: "כָּל הַכָּבוֹד! אַתֶּם מַכִּירִים אֶת V, N, F, D, B, אֶת הָאוֹת É וַהֲמוֹן מִלִּים. הַרְאוּ כָּל מָה שֶׁאַתֶּם יוֹדְעִים!",
            big: "💪",
            say: "à toi de jouer !"
          }
        ]
      },
      exercises: [
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ מָה שְׁמַעְתֶּם!",
          say: "da",
          choices: ["BA", "DA", "VA"],
          answer: 1,
          explain: "'ddd' + 'a' = DA.",
          explainHe: "'דֵּדד' וְעוֹד 'אָה' = DA."
        },
        {
          type: "pick",
          prompt: "Quel mot veut dire 🍌 ?",
          promptHe: "אֵיזוֹ מִלָּה אוֹמֶרֶת 🍌?",
          question: "🍌",
          choices: ["SALADE", "BANANE", "DOMINO"],
          answer: 1,
          say: "banane",
          explain: "BA-NA-NE, le fruit jaune : 🍌.",
          explainHe: "BA-NA-NE, הַפְּרִי הַצָּהֹב: 🍌."
        },
        {
          type: "fill",
          prompt: "Complète le mot !",
          promptHe: "הַשְׁלִימוּ אֶת הַמִּלָּה!",
          sentence: "␣ANANE 🍌",
          choices: ["D", "P", "B"],
          answer: 2,
          say: "banane",
          explain: "On entend 'bbb' au début : BANANE.",
          explainHe: "שׁוֹמְעִים 'בְּ' בַּהַתְחָלָה: BANANE."
        },
        {
          type: "build",
          prompt: "Assemble le mot DOMINO !",
          promptHe: "הַרְכִּיבוּ אֶת הַמִּלָּה DOMINO!",
          tiles: ["MI", "DO", "NO", "BA"],
          answer: ["DO", "MI", "NO"],
          say: "domino",
          explain: "DO + MI + NO = DOMINO !",
          explainHe: "DO + MI + NO = DOMINO!"
        },
        {
          type: "match",
          prompt: "Relie chaque mot à son image !",
          promptHe: "חַבְּרוּ כָּל מִלָּה לַתְּמוּנָה שֶׁלָּהּ!",
          pairs: [["VÉLO", "🚲"], ["BANANE", "🍌"], ["LUNE", "🌙"], ["PANDA", "🐼"]],
          explain: "VÉLO 🚲, BANANE 🍌, LUNE 🌙, PANDA 🐼. Champion !",
          explainHe: "VÉLO 🚲, BANANE 🍌, LUNE 🌙, PANDA 🐼. אַלּוּפִים!"
        },
        {
          type: "listen",
          prompt: "Écoute : quel petit mot entends-tu ?",
          promptHe: "הַקְשִׁיבוּ: אֵיזוֹ מִלָּה קְטַנָּה שְׁמַעְתֶּם?",
          say: "une",
          choices: ["UN", "NU", "UNE"],
          answer: 2,
          explain: "On entend le 'nnn' à la fin : c'est UNE, U-N-E.",
          explainHe: "שׁוֹמְעִים 'נַנְן' בַּסּוֹף: זוֹ UNE, U-N-E."
        },
        {
          type: "fill",
          prompt: "Complète la phrase !",
          promptHe: "הַשְׁלִימוּ אֶת הַמִּשְׁפָּט!",
          sentence: "␣N NAVIRE 🚢",
          choices: ["U", "O", "I"],
          answer: 0,
          say: "un navire",
          explain: "Le petit mot UN s'écrit U-N.",
          explainHe: "הַמִּלָּה הַקְּטַנָּה UN נִכְתֶּבֶת U-N."
        },
        {
          type: "build",
          prompt: "Assemble : UN VÉLO ET UNE BANANE !",
          promptHe: "הַרְכִּיבוּ: UN VÉLO ET UNE BANANE!",
          tiles: ["ET", "UN", "BANANE", "UNE", "VÉLO"],
          answer: ["UN", "VÉLO", "ET", "UNE", "BANANE"],
          say: "un vélo et une banane",
          explain: "UN VÉLO 🚲 ET UNE BANANE 🍌. Bien joué !",
          explainHe: "UN VÉLO 🚲 ET UNE BANANE 🍌. כָּל הַכָּבוֹד!"
        },
        {
          type: "listen",
          prompt: "Écoute : quel mot entends-tu ?",
          promptHe: "הַקְשִׁיבוּ: אֵיזוֹ מִלָּה שְׁמַעְתֶּם?",
          say: "salade",
          choices: ["MALADE", "SALADE", "BALADE"],
          answer: 1,
          explain: "On entend 'sss' au début : SALADE 🥗.",
          explainHe: "שׁוֹמְעִים 'סָס' בַּהַתְחָלָה: SALADE 🥗."
        },
        {
          type: "pick",
          prompt: "Quelle syllabe commence le mot VÉLO ?",
          promptHe: "בְּאֵיזוֹ הֲבָרָה מַתְחִילָה הַמִּלָּה VÉLO?",
          question: "VÉLO 🚲",
          choices: ["VO", "FÉ", "VÉ"],
          answer: 2,
          say: "vélo",
          explain: "VÉ-LO : on entend VÉ en premier, avec É.",
          explainHe: "VÉ-LO: שׁוֹמְעִים VÉ בַּהַתְחָלָה, עִם É."
        },
        {
          type: "fill",
          prompt: "Complète le mot !",
          promptHe: "הַשְׁלִימוּ אֶת הַמִּלָּה!",
          sentence: "MALA␣E 🤒",
          choices: ["D", "B", "T"],
          answer: 0,
          say: "malade",
          explain: "On entend 'ddd' : MALADE.",
          explainHe: "שׁוֹמְעִים 'דֵּדד': MALADE."
        },
        {
          type: "pick",
          prompt: "Quel mot n'est PAS de la nourriture ?",
          promptHe: "אֵיזוֹ מִלָּה הִיא לֹא אֹכֶל?",
          choices: ["BANANE", "DOMINO", "SALADE"],
          answer: 1,
          say: "quel mot n'est pas de la nourriture ?",
          explain: "DOMINO, c'est un jeu, ça ne se mange pas !",
          explainHe: "DOMINO זֶה מִשְׂחָק, אֶת זֶה לֹא אוֹכְלִים!"
        }
      ],
      joke: {
        q: "La maîtresse : 'Toto, pourquoi arrives-tu en retard ⏰ ?'",
        a: "'À cause du panneau devant l'école : ÉCOLE, RALENTIR ! Alors j'ai marché tout doucement... 🐢😂'",
        qHe: "הַמּוֹרָה: 'טוֹטוֹ, לָמָּה אִחַרְתָּ ⏰?'",
        aHe: "'בִּגְלַל הַשֶּׁלֶט לְיַד בֵּית הַסֵּפֶר: בֵּית סֵפֶר, הָאֵטּוּ! אָז הָלַכְתִּי מַמָּשׁ לְאַט... 🐢😂'"
      }
    }
  ]
});
