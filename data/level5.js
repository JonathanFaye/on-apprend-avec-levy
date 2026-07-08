window.LEVELS = window.LEVELS || [];
window.LEVELS.push({
  id: "n5",
  order: 5,
  name: "Encore des sons",
  nameHe: "עוֹד צְלִילִים",
  emoji: "🎵",
  color: "#00838F",
  tagline: "Je découvre de nouveaux sons !",
  taglineHe: "אֲנִי מְגַלֶּה צְלִילִים חֲדָשִׁים!",
  sublevels: [
    {
      id: "n5-s1",
      name: "OI et EU",
      nameHe: "OI וְ-EU",
      emoji: "👑",
      lesson: {
        cards: [
          {
            title: "Le son OI 👑",
            titleHe: "הַצְּלִיל OI",
            body: "O et I ensemble font le son 'oi', comme dans MOI, TOI et ROI !",
            bodyHe: "O וְ-I בְּיַחַד עוֹשׂוֹת אֶת הַצְּלִיל 'וָא', כְּמוֹ בַּמִּלִּים MOI, TOI וְ-ROI!",
            big: "OI 👑",
            say: "oi. moi. toi. roi."
          },
          {
            title: "Des mots avec OI 🚗",
            titleHe: "מִלִּים עִם OI",
            body: "On retrouve OI dans POISSON et VOITURE. Tu l'entends ?",
            bodyHe: "הַצְּלִיל OI נִמְצָא גַּם בַּמִּלִּים POISSON וְ-VOITURE. שׁוֹמְעִים אוֹתוֹ?",
            big: "POISSON 🐟 VOITURE 🚗",
            say: "poisson. voiture."
          },
          {
            title: "Le son EU 💙",
            titleHe: "הַצְּלִיל EU",
            body: "E et U ensemble font le son 'eu', comme dans FEU, BLEU et JEUDI.",
            bodyHe: "E וְ-U בְּיַחַד עוֹשׂוֹת צְלִיל מְיֻחָד, כְּמוֹ בַּמִּלִּים FEU, BLEU וְ-JEUDI. הַקְשִׁיבוּ טוֹב!",
            big: "EU 🔥",
            say: "eu. feu. bleu. jeudi."
          },
          {
            title: "Le X muet de DEUX 🤫",
            titleHe: "הַ-X הַשְּׁקֵטָה שֶׁל DEUX",
            body: "Dans DEUX, le X de la fin est muet : on dit 'deu' !",
            bodyHe: "בַּמִּלָּה DEUX לֹא שׁוֹמְעִים אֶת הַ-X שֶׁבַּסּוֹף: אוֹמְרִים 'דֶּה'!",
            big: "DEUX = 2",
            say: "deux."
          }
        ]
      },
      exercises: [
        {
          type: "pick",
          prompt: "Quelles lettres font le son 'oi' ?",
          promptHe: "אֵילוּ אוֹתִיּוֹת עוֹשׂוֹת אֶת הַצְּלִיל 'oi'?",
          choices: ["OU", "OI", "ON"],
          answer: 1,
          say: "oi",
          explain: "O et I ensemble font le son 'oi', comme dans ROI. 👑",
          explainHe: "O וְ-I בְּיַחַד עוֹשׂוֹת אֶת הַצְּלִיל 'וָא', כְּמוֹ בַּמִּלָּה ROI. 👑"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ מָה שְׁמַעְתֶּם!",
          say: "roi",
          choices: ["RAT", "ROUE", "ROI"],
          answer: 2,
          explain: "ROI s'écrit R-O-I. On entend 'oi' à la fin ! 👑",
          explainHe: "ROI נִכְתַּב R-O-I. שׁוֹמְעִים 'וָא' בַּסּוֹף! 👑"
        },
        {
          type: "build",
          prompt: "Assemble le mot VOITURE !",
          promptHe: "הַרְכִּיבוּ אֶת הַמִּלָּה VOITURE!",
          tiles: ["TURE", "VOI", "VA"],
          answer: ["VOI", "TURE"],
          say: "voiture",
          explain: "VOI + TURE = VOITURE ! 🚗",
          explainHe: "VOI + TURE = VOITURE! 🚗"
        },
        {
          type: "fill",
          prompt: "Complète le mot !",
          promptHe: "הַשְׁלִימוּ אֶת הַמִּלָּה!",
          sentence: "MOI, TOI ET LE R␣I.",
          choices: ["ON", "OI", "OU"],
          answer: 1,
          say: "moi, toi et le roi",
          explain: "ROI s'écrit avec OI : R-O-I. 👑",
          explainHe: "ROI נִכְתַּב עִם OI: R-O-I. 👑"
        },
        {
          type: "pick",
          prompt: "Quel mot veut dire 🐟 ?",
          promptHe: "אֵיזוֹ מִלָּה אוֹמֶרֶת 🐟?",
          question: "🐟",
          choices: ["POISSON", "POUSSIN", "MAISON"],
          answer: 0,
          say: "poisson",
          explain: "POISSON commence par POI : on entend 'oi' ! 🐟",
          explainHe: "POISSON זֶה דָּג! הַמִּלָּה מַתְחִילָה בְּ-POI, שׁוֹמְעִים 'וָא'. 🐟"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ מָה שְׁמַעְתֶּם!",
          say: "feu",
          choices: ["FOU", "FEU", "FA"],
          answer: 1,
          explain: "FEU s'écrit F-E-U. E et U font le son 'eu'. 🔥",
          explainHe: "FEU (אֵשׁ) נִכְתַּב F-E-U. E וְ-U עוֹשׂוֹת אֶת הַצְּלִיל 'eu'. 🔥"
        },
        {
          type: "fill",
          prompt: "Complète le mot !",
          promptHe: "הַשְׁלִימוּ אֶת הַמִּלָּה!",
          sentence: "LEVY A UN BALLON BL␣.",
          choices: ["OU", "O", "EU"],
          answer: 2,
          say: "bleu",
          explain: "BLEU se termine par EU : B-L-E-U. 💙",
          explainHe: "BLEU (כָּחֹל) נִגְמַר בְּ-EU: B-L-E-U. 💙"
        },
        {
          type: "type",
          prompt: "Écoute et écris le mot !",
          promptHe: "הַקְשִׁיבוּ וְכִתְבוּ אֶת הַמִּלָּה!",
          say: "feu",
          answer: "feu",
          strict: false,
          explain: "FEU : F, E, U. Le son 'eu' s'écrit E-U. 🔥",
          explainHe: "FEU: F, E, U. הַצְּלִיל 'eu' נִכְתַּב E-U. 🔥"
        },
        {
          type: "match",
          prompt: "Relie chaque mot à son image !",
          promptHe: "חַבְּרוּ כָּל מִלָּה לַתְּמוּנָה שֶׁלָּהּ!",
          pairs: [["ROI", "👑"], ["POISSON", "🐟"], ["FEU", "🔥"], ["VOITURE", "🚗"]],
          say: "roi. poisson. feu. voiture.",
          explain: "ROI 👑, POISSON 🐟, FEU 🔥, VOITURE 🚗. Bravo !",
          explainHe: "ROI 👑, POISSON 🐟, FEU 🔥, VOITURE 🚗. כָּל הַכָּבוֹד!"
        },
        {
          type: "pick",
          prompt: "Vrai ou faux ? Dans DEUX, le X est muet.",
          promptHe: "נָכוֹן אוֹ לֹא? בַּמִּלָּה DEUX הַ-X שְׁקֵטָה.",
          question: "DEUX",
          choices: ["VRAI", "FAUX"],
          answer: 0,
          say: "deux",
          explain: "VRAI ! On dit 'deu' : le X de DEUX ne se prononce pas. ✌️",
          explainHe: "נָכוֹן! אוֹמְרִים 'דֶּה': אֶת הַ-X שֶׁל DEUX לֹא שׁוֹמְעִים. ✌️"
        }
      ],
      joke: {
        q: "Qu'est-ce qui a des dents 🦷 mais ne mange jamais 🍽️ ?",
        a: "Un peigne ! 🪮😂",
        qHe: "מָה יֵשׁ לוֹ שִׁנַּיִם 🦷 אֲבָל הוּא אַף פַּעַם לֹא אוֹכֵל?",
        aHe: "מַסְרֵק! 🪮 גַּם בְּעִבְרִית לַשִּׁנַּיִם שֶׁל מַסְרֵק קוֹרְאִים שִׁנַּיִם! 😁"
      }
    },
    {
      id: "n5-s2",
      name: "AU, EAU et les accents",
      nameHe: "AU, EAU וְהַסִּימָנִים",
      emoji: "⛵",
      lesson: {
        cards: [
          {
            title: "Le son AU 🟡",
            titleHe: "הַצְּלִיל AU",
            body: "Les lettres AU font le son 'o', comme dans CHAUD et JAUNE.",
            bodyHe: "הָאוֹתִיּוֹת AU עוֹשׂוֹת אֶת הַצְּלִיל 'אוֹ', כְּמוֹ בַּמִּלִּים CHAUD וְ-JAUNE.",
            big: "AU ☀️",
            say: "o. chaud. jaune."
          },
          {
            title: "Le son EAU ⛵",
            titleHe: "הַצְּלִיל EAU",
            body: "EAU fait aussi 'o', avec trois lettres ! GÂTEAU, BATEAU, et même le mot EAU tout seul.",
            bodyHe: "גַּם EAU נִשְׁמָע 'אוֹ', עִם שָׁלוֹשׁ אוֹתִיּוֹת! GÂTEAU, BATEAU, וְגַם הַמִּלָּה EAU לְבַד (מַיִם).",
            big: "EAU 💧",
            say: "o. gâteau. bateau. eau."
          },
          {
            title: "Les accents É È Ê ✨",
            titleHe: "הַסִּימָנִים É È Ê",
            body: "É se dit 'é' comme ÉTÉ et ÉCOLE. È et Ê se disent 'è' comme dans FÊTE.",
            bodyHe: "É נִשְׁמָע כְּמוֹ 'אֶה', כְּמוֹ בְּמִלִּים ÉTÉ וְ-ÉCOLE. È וְ-Ê נִשְׁמָעִים 'אֶה', כְּמוֹ בַּמִּלָּה FÊTE.",
            big: "É È Ê",
            say: "é. è. été. fête."
          },
          {
            title: "Le petit chapeau et le À 🎩",
            titleHe: "הַכּוֹבַע הַקָּטָן וְ-À",
            body: "Le petit chapeau peut aussi se poser sur A : GÂTEAU ! Et le petit accent sur le A de LÀ montre un endroit : là !",
            bodyHe: "הַכּוֹבַע הַקָּטָן יָכוֹל לָשֶׁבֶת גַּם עַל A: GÂTEAU! וְהַסִּימָן הַקָּטָן עַל הַ-A שֶׁל הַמִּלָּה LÀ מַרְאֶה מָקוֹם: שָׁם!",
            big: "Â À",
            say: "gâteau. là."
          }
        ]
      },
      exercises: [
        {
          type: "pick",
          prompt: "Quelles lettres font le son 'o' dans CHAUD ?",
          promptHe: "אֵילוּ אוֹתִיּוֹת עוֹשׂוֹת אֶת הַצְּלִיל 'אוֹ' בַּמִּלָּה CHAUD?",
          question: "CHAUD",
          choices: ["OU", "AN", "AU"],
          answer: 2,
          say: "chaud",
          explain: "Dans CHAUD, le son 'o' s'écrit AU. ☀️",
          explainHe: "בַּמִּלָּה CHAUD (חַם) הַצְּלִיל 'אוֹ' נִכְתַּב AU. ☀️"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ מָה שְׁמַעְתֶּם!",
          say: "jaune",
          choices: ["JEUNE", "JAUNE", "JOUE"],
          answer: 1,
          explain: "JAUNE s'écrit avec AU : J-A-U-N-E. 🟡",
          explainHe: "JAUNE (צָהֹב) נִכְתַּב עִם AU: J-A-U-N-E. 🟡"
        },
        {
          type: "build",
          prompt: "Assemble le mot GÂTEAU !",
          promptHe: "הַרְכִּיבוּ אֶת הַמִּלָּה GÂTEAU!",
          tiles: ["TEAU", "GÂ", "TO"],
          answer: ["GÂ", "TEAU"],
          say: "gâteau",
          explain: "GÂ + TEAU = GÂTEAU ! Avec un chapeau sur le Â et EAU à la fin. 🎂",
          explainHe: "GÂ + TEAU = GÂTEAU (עוּגָה)! עִם כּוֹבַע עַל הַ-Â וְ-EAU בַּסּוֹף. 🎂"
        },
        {
          type: "fill",
          prompt: "Complète le mot !",
          promptHe: "הַשְׁלִימוּ אֶת הַמִּלָּה!",
          sentence: "LE BAT␣ EST SUR LA MER.",
          choices: ["EAU", "AU", "O"],
          answer: 0,
          say: "bateau",
          explain: "BATEAU s'écrit avec EAU, trois lettres pour le son 'o' ! ⛵",
          explainHe: "BATEAU (סִירָה) נִכְתַּב עִם EAU: שָׁלוֹשׁ אוֹתִיּוֹת לַצְּלִיל 'אוֹ'! ⛵"
        },
        {
          type: "pick",
          prompt: "Quel mot veut dire 💧 ?",
          promptHe: "אֵיזוֹ מִלָּה אוֹמֶרֶת 💧?",
          question: "💧",
          choices: ["AU", "EAU", "OU"],
          answer: 1,
          say: "eau",
          explain: "EAU : trois lettres, un seul son 'o' ! C'est ce qu'on boit. 💧",
          explainHe: "EAU זֶה מַיִם! שָׁלוֹשׁ אוֹתִיּוֹת, צְלִיל אֶחָד: 'אוֹ'. 💧"
        },
        {
          type: "fill",
          prompt: "Complète le mot !",
          promptHe: "הַשְׁלִימוּ אֶת הַמִּלָּה!",
          sentence: "LEVY VA À L'␣COLE.",
          choices: ["E", "È", "É"],
          answer: 2,
          say: "école",
          explain: "ÉCOLE commence par É avec un accent aigu. 🏫",
          explainHe: "ÉCOLE (בֵּית סֵפֶר) מַתְחִילָה בְּ-É עִם סִימָן קָטָן מֵעָלֶיהָ. 🏫"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ מָה שְׁמַעְתֶּם!",
          say: "fête",
          choices: ["TÊTE", "FÊTE", "FAUTE"],
          answer: 1,
          explain: "FÊTE commence par F ! Le Ê porte un petit chapeau. 🎉",
          explainHe: "FÊTE (חַג) מַתְחִילָה בְּ-F! עַל הַ-Ê יֵשׁ כּוֹבַע קָטָן. 🎉"
        },
        {
          type: "type",
          prompt: "Écoute et écris le mot !",
          promptHe: "הַקְשִׁיבוּ וְכִתְבוּ אֶת הַמִּלָּה!",
          say: "été",
          answer: "été",
          strict: false,
          explain: "ÉTÉ : É, T, É. Deux accents aigus ! ☀️",
          explainHe: "ÉTÉ (קַיִץ): É, T, É. שְׁנֵי סִימָנִים! ☀️"
        },
        {
          type: "match",
          prompt: "Relie chaque mot à son image !",
          promptHe: "חַבְּרוּ כָּל מִלָּה לַתְּמוּנָה שֶׁלָּהּ!",
          pairs: [["GÂTEAU", "🎂"], ["BATEAU", "⛵"], ["EAU", "💧"], ["VÉLO", "🚲"]],
          say: "gâteau. bateau. eau. vélo.",
          explain: "GÂTEAU 🎂, BATEAU ⛵, EAU 💧, VÉLO 🚲. Super !",
          explainHe: "GÂTEAU 🎂, BATEAU ⛵, EAU 💧, VÉLO 🚲. מְעֻלֶּה!"
        },
        {
          type: "read",
          prompt: "Lis cette phrase à voix haute !",
          promptHe: "קִרְאוּ אֶת הַמִּשְׁפָּט בְּקוֹל רָם!",
          text: "C'EST L'ÉTÉ.\nLA FÊTE EST LÀ !",
          say: "c'est l'été. la fête est là !",
          explain: "Tu as lu É, Ê et À comme un champion ! 🌟",
          explainHe: "קְרָאתֶם É, Ê וְ-À כְּמוֹ אַלּוּפִים! 🌟"
        }
      ],
      joke: {
        q: "Qu'est-ce qui est plein de trous 🕳️ mais qui garde l'eau 💧 ?",
        a: "Une éponge ! 🧽😂",
        qHe: "מָה מָלֵא חֹרִים 🕳️ אֲבָל שׁוֹמֵר עַל הַמַּיִם 💧?",
        aHe: "סְפוֹג! 🧽😂"
      }
    },
    {
      id: "n5-s3",
      name: "Les lettres muettes",
      nameHe: "הָאוֹתִיּוֹת הַשְּׁקֵטוֹת",
      emoji: "🤫",
      lesson: {
        cards: [
          {
            title: "Les lettres muettes 🤫",
            titleHe: "הָאוֹתִיּוֹת הַשְּׁקֵטוֹת",
            body: "Parfois, la dernière lettre d'un mot ne se prononce pas : elle est muette ! Chut... 🤫",
            bodyHe: "לִפְעָמִים אֶת הָאוֹת הָאַחֲרוֹנָה שֶׁל מִלָּה לֹא שׁוֹמְעִים בִּכְלָל: הִיא שְׁקֵטָה! שְׁשְׁשְׁשְׁ... 🤫",
            big: "LAIT 🥛",
            say: "lait."
          },
          {
            title: "AI et AIN 🍞",
            titleHe: "AI וְ-AIN",
            body: "AI se dit 'è' comme dans LAIT. AIN se dit 'in' comme dans PAIN.",
            bodyHe: "AI נִשְׁמָע 'אֶה', כְּמוֹ בַּמִּלָּה LAIT (חָלָב). AIN נִשְׁמָע כְּמוֹ בְּסוֹף הַמִּלָּה PAIN (לֶחֶם): 'פֶּן'.",
            big: "AI • AIN",
            say: "è. lait. in. pain."
          },
          {
            title: "Cherche la lettre muette ! 🕵️",
            titleHe: "מִצְאוּ אֶת הָאוֹת הַשְּׁקֵטָה!",
            body: "GRAND : D muet. TAPIS : S muet. LOUP : P muet. DEUX : X muet !",
            bodyHe: "GRAND: הַ-D שְׁקֵטָה. TAPIS: הַ-S שְׁקֵטָה. LOUP: הַ-P שְׁקֵטָה. DEUX: הַ-X שְׁקֵטָה!",
            big: "GRAND • TAPIS • LOUP",
            say: "grand. tapis. loup. deux."
          }
        ]
      },
      exercises: [
        {
          type: "pick",
          prompt: "Quelle lettre est muette dans LAIT ?",
          promptHe: "אֵיזוֹ אוֹת שְׁקֵטָה בַּמִּלָּה LAIT?",
          question: "LAIT",
          choices: ["L", "A", "T"],
          answer: 2,
          say: "lait",
          explain: "On dit 'lè' : le T de LAIT est muet ! 🥛",
          explainHe: "אוֹמְרִים 'לֵה': אֶת הַ-T שֶׁל LAIT (חָלָב) לֹא שׁוֹמְעִים! 🥛"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ מָה שְׁמַעְתֶּם!",
          say: "pain",
          choices: ["BAIN", "PAIN", "MAIN"],
          answer: 1,
          explain: "PAIN commence par P. AIN fait le son 'in'. 🍞",
          explainHe: "PAIN (לֶחֶם) מַתְחִיל בְּ-P. שׁוֹמְעִים 'פֶּן'. 🍞"
        },
        {
          type: "pick",
          prompt: "Quelle lettre est muette dans GRAND ?",
          promptHe: "אֵיזוֹ אוֹת שְׁקֵטָה בַּמִּלָּה GRAND?",
          question: "GRAND",
          choices: ["G", "D", "R"],
          answer: 1,
          say: "grand",
          explain: "On dit 'gran' : le D de GRAND est muet ! 💪",
          explainHe: "אוֹמְרִים 'גְרָאן': אֶת הַ-D שֶׁל GRAND (גָּדוֹל) לֹא שׁוֹמְעִים! 💪"
        },
        {
          type: "fill",
          prompt: "Complète le mot !",
          promptHe: "הַשְׁלִימוּ אֶת הַמִּלָּה!",
          sentence: "LEVY BOIT DU L␣T.",
          choices: ["A", "AI", "È"],
          answer: 1,
          say: "levy boit du lait",
          explain: "Le son 'è' de LAIT s'écrit AI : L-A-I-T. 🥛",
          explainHe: "הַצְּלִיל 'אֶה' שֶׁל LAIT נִכְתַּב AI: L-A-I-T. 🥛"
        },
        {
          type: "build",
          prompt: "Assemble le mot TAPIS !",
          promptHe: "הַרְכִּיבוּ אֶת הַמִּלָּה TAPIS!",
          tiles: ["PIS", "TA", "PI"],
          answer: ["TA", "PIS"],
          say: "tapis",
          explain: "TA + PIS = TAPIS. Le S de la fin est muet !",
          explainHe: "TA + PIS = TAPIS (שָׁטִיחַ). הַ-S שֶׁבַּסּוֹף שְׁקֵטָה!"
        },
        {
          type: "match",
          prompt: "Relie chaque mot à son image !",
          promptHe: "חַבְּרוּ כָּל מִלָּה לַתְּמוּנָה שֶׁלָּהּ!",
          pairs: [["PAIN", "🍞"], ["LAIT", "🥛"], ["LOUP", "🐺"], ["MAIN", "✋"]],
          say: "pain. lait. loup. main.",
          explain: "PAIN 🍞, LAIT 🥛, LOUP 🐺, MAIN ✋. Bravo !",
          explainHe: "PAIN 🍞, LAIT 🥛, LOUP 🐺, MAIN ✋. כָּל הַכָּבוֹד!"
        },
        {
          type: "type",
          prompt: "Écoute et écris le mot !",
          promptHe: "הַקְשִׁיבוּ וְכִתְבוּ אֶת הַמִּלָּה!",
          say: "lait",
          answer: "lait",
          strict: false,
          explain: "LAIT : L, A, I, T. N'oublie pas le T muet de la fin ! 🥛",
          explainHe: "LAIT: L, A, I, T. אַל תִּשְׁכְּחוּ אֶת הַ-T הַשְּׁקֵטָה בַּסּוֹף! 🥛"
        },
        {
          type: "pick",
          prompt: "Entend-on le P à la fin de LOUP ?",
          promptHe: "הַאִם שׁוֹמְעִים אֶת הַ-P בְּסוֹף הַמִּלָּה LOUP?",
          question: "LOUP 🐺",
          choices: ["OUI", "NON"],
          answer: 1,
          say: "loup",
          explain: "On dit 'lou' : le P de LOUP est muet ! 🐺",
          explainHe: "אוֹמְרִים 'לוּ': הַ-P שֶׁל LOUP (זְאֵב) שְׁקֵטָה! 🐺"
        },
        {
          type: "pick",
          prompt: "Quel mot a une lettre muette à la fin ?",
          promptHe: "לְאֵיזוֹ מִלָּה יֵשׁ אוֹת שְׁקֵטָה בַּסּוֹף?",
          choices: ["SAC", "TAPIS", "BOL"],
          answer: 1,
          say: "tapis. sac. bol.",
          explain: "Dans TAPIS, le S est muet. Dans SAC et BOL, on entend tout !",
          explainHe: "בְּ-TAPIS הַ-S שְׁקֵטָה. בְּ-SAC וּבְ-BOL שׁוֹמְעִים הַכֹּל!"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ מָה שְׁמַעְתֶּם!",
          say: "deux",
          choices: ["DOUX", "DIX", "DEUX"],
          answer: 2,
          explain: "DEUX : on entend 'deu'. Le X est muet ! ✌️",
          explainHe: "DEUX (שְׁתַּיִם) נִשְׁמָע 'דֶּה': הַ-X שְׁקֵטָה! ✌️"
        }
      ],
      joke: {
        q: "Qu'est-ce qui a un chapeau 🎩 mais pas de tête ?",
        a: "Un champignon ! 🍄😂",
        qHe: "לְמִי יֵשׁ כּוֹבַע 🎩 אֲבָל אֵין לוֹ רֹאשׁ?",
        aHe: "פִּטְרִיָּה! גַּם בְּעִבְרִית קוֹרְאִים לַחֵלֶק הָעֶלְיוֹן שֶׁלָּהּ 'כּוֹבַע הַפִּטְרִיָּה'! 🍄😄"
      }
    },
    {
      id: "n5-s4",
      name: "Le grand défi",
      nameHe: "הָאֶתְגָּר הַגָּדוֹל",
      emoji: "🏆",
      lesson: {
        cards: [
          {
            title: "Le grand défi ! 🏆",
            titleHe: "הָאֶתְגָּר הַגָּדוֹל!",
            body: "Bravo ! Tu connais OI, EU, AU, EAU, les accents et les lettres muettes. Montre tout ce que tu sais !",
            bodyHe: "כָּל הַכָּבוֹד! אַתֶּם כְּבָר מַכִּירִים אֶת OI, EU, AU, EAU, אֶת הַסִּימָנִים וְאֶת הָאוֹתִיּוֹת הַשְּׁקֵטוֹת. עַכְשָׁו תַּרְאוּ לִי הַכֹּל! 🏆",
            big: "🏆",
            say: "Bonne chance, champion !"
          }
        ]
      },
      exercises: [
        {
          type: "pick",
          prompt: "Quel mot a le son 'oi' ?",
          promptHe: "בְּאֵיזוֹ מִלָּה יֵשׁ אֶת הַצְּלִיל 'oi'?",
          choices: ["MAISON", "POISSON", "BALLON"],
          answer: 1,
          say: "poisson. maison. ballon.",
          explain: "POISSON a le son 'oi' : POI ! MAISON a 'ai', BALLON a 'on'. 🐟",
          explainHe: "בְּ-POISSON שׁוֹמְעִים 'וָא': POI! בְּ-MAISON יֵשׁ 'אֶה', בְּ-BALLON יֵשׁ 'אוֹן'. 🐟"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ מָה שְׁמַעְתֶּם!",
          say: "bateau",
          choices: ["GÂTEAU", "CADEAU", "BATEAU"],
          answer: 2,
          explain: "BATEAU commence par BA ! ⛵",
          explainHe: "BATEAU מַתְחִיל בְּ-BA! ⛵"
        },
        {
          type: "fill",
          prompt: "Complète le mot !",
          promptHe: "הַשְׁלִימוּ אֶת הַמִּלָּה!",
          sentence: "LE ROI A UN GÂT␣.",
          choices: ["EAU", "O", "EU"],
          answer: 0,
          say: "le roi a un gâteau",
          explain: "GÂTEAU se termine par EAU, comme BATEAU ! 🎂",
          explainHe: "GÂTEAU נִגְמַר בְּ-EAU, בְּדִיּוּק כְּמוֹ BATEAU! 🎂"
        },
        {
          type: "build",
          prompt: "Assemble le mot JEUDI !",
          promptHe: "הַרְכִּיבוּ אֶת הַמִּלָּה JEUDI!",
          tiles: ["DI", "JEU", "DA"],
          answer: ["JEU", "DI"],
          say: "jeudi",
          explain: "JEU + DI = JEUDI, le jour de la semaine ! 📅",
          explainHe: "JEU + DI = JEUDI (יוֹם חֲמִישִׁי)! 📅"
        },
        {
          type: "type",
          prompt: "Écoute et écris le mot !",
          promptHe: "הַקְשִׁיבוּ וְכִתְבוּ אֶת הַמִּלָּה!",
          say: "roi",
          answer: "roi",
          strict: false,
          explain: "ROI : R, O, I. Le son 'oi' s'écrit O-I. 👑",
          explainHe: "ROI (מֶלֶךְ): R, O, I. הַצְּלִיל 'וָא' נִכְתַּב O-I. 👑"
        },
        {
          type: "pick",
          prompt: "Quel mot porte un accent circonflexe (chapeau) ?",
          promptHe: "לְאֵיזוֹ מִלָּה יֵשׁ כּוֹבַע קָטָן (אַקְסֶנְט סִירְקוֹנְפְלֶקְס)?",
          choices: ["ÉTÉ", "TÊTE", "LÀ"],
          answer: 1,
          say: "tête. été. là.",
          explain: "TÊTE a un chapeau sur le E : Ê ! ÉTÉ a des accents aigus, LÀ un accent grave.",
          explainHe: "לְ-TÊTE יֵשׁ כּוֹבַע עַל הָ-E: Ê! לְ-ÉTÉ וּלְ-LÀ יֵשׁ סִימָנִים אֲחֵרִים."
        },
        {
          type: "match",
          prompt: "Relie chaque mot à son image !",
          promptHe: "חַבְּרוּ כָּל מִלָּה לַתְּמוּנָה שֶׁלָּהּ!",
          pairs: [["FEU", "🔥"], ["EAU", "💧"], ["JAUNE", "🟡"], ["BLEU", "🔵"]],
          say: "feu. eau. jaune. bleu.",
          explain: "FEU 🔥, EAU 💧, JAUNE 🟡, BLEU 🔵. Champion !",
          explainHe: "FEU 🔥, EAU 💧, JAUNE 🟡, BLEU 🔵. אַלּוּפִים!"
        },
        {
          type: "pick",
          prompt: "Quelle lettre est muette dans DEUX ?",
          promptHe: "אֵיזוֹ אוֹת שְׁקֵטָה בַּמִּלָּה DEUX?",
          question: "DEUX",
          choices: ["D", "E", "X"],
          answer: 2,
          say: "deux",
          explain: "Le X de DEUX est muet : on dit 'deu' ! ✌️",
          explainHe: "אֶת הַ-X שֶׁל DEUX לֹא שׁוֹמְעִים: אוֹמְרִים 'דֶּה'! ✌️"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ מָה שְׁמַעְתֶּם!",
          say: "moi",
          choices: ["MAI", "MOI", "MOU"],
          answer: 1,
          explain: "MOI s'écrit M-O-I : c'est le son 'oi' ! 😄",
          explainHe: "MOI (אֲנִי) נִכְתַּב M-O-I: זֶה הַצְּלִיל 'וָא'! 😄"
        },
        {
          type: "fill",
          prompt: "Complète le mot !",
          promptHe: "הַשְׁלִימוּ אֶת הַמִּלָּה!",
          sentence: "LA F␣TE DE HANOUKA ARRIVE !",
          choices: ["É", "Ê", "E"],
          answer: 1,
          say: "la fête de hanouka arrive",
          explain: "FÊTE s'écrit avec Ê, le petit chapeau ! 🕎",
          explainHe: "FÊTE נִכְתֶּבֶת עִם Ê, הַכּוֹבַע הַקָּטָן! 🕎"
        },
        {
          type: "riddle",
          prompt: "Devinette !",
          promptHe: "חִידָה!",
          question: "Mon premier est un animal qui miaule.\nMon second recouvre tout ton corps.\nMon tout se porte sur la tête.",
          choices: ["BATEAU", "CHAPEAU", "MANTEAU"],
          answer: 1,
          say: "Mon premier est un animal qui miaule. Mon second recouvre tout ton corps. Mon tout se porte sur la tête.",
          explain: "CHAT + PEAU = CHAPEAU ! Et il se termine par EAU. 🎩",
          explainHe: "CHAT (חָתוּל) + PEAU (עוֹר) = CHAPEAU (כּוֹבַע)! וְהוּא נִגְמַר בְּ-EAU. 🎩"
        },
        {
          type: "read",
          prompt: "Lis ces phrases à voix haute !",
          promptHe: "קִרְאוּ אֶת הַמִּשְׁפָּטִים בְּקוֹל רָם!",
          text: "MOI, JE LIS !\nLE ROI A UN BATEAU JAUNE.\nMAZAL TOV, CHAMPION !",
          say: "moi, je lis ! le roi a un bateau jaune. mazal tov, champion !",
          explain: "Tu as tout lu : OI, AU, EAU ! Mazal Tov ! 🏆",
          explainHe: "קְרָאתֶם הַכֹּל: OI, AU, EAU! מַזָּל טוֹב! 🏆"
        }
      ],
      joke: {
        q: "Qu'est-ce qui a des aiguilles 🪡 mais ne pique jamais 🦔 ?",
        a: "Une horloge ! ⏰😂",
        qHe: "לְמִי יֵשׁ מְחָטִים 🪡 אֲבָל הוּא אַף פַּעַם לֹא דּוֹקֵר?",
        aHe: "שָׁעוֹן! בְּצָרְפָתִית לַמְּחוֹגִים שֶׁל הַשָּׁעוֹן קוֹרְאִים 'aiguilles', כְּלוֹמַר מְחָטִים! ⏰😂"
      }
    }
  ]
});
