window.LEVELS = window.LEVELS || [];
window.LEVELS.push({
  id: "n4",
  order: 4,
  name: "Les sons magiques",
  nameHe: "הַצְּלִילִים הַקְּסוּמִים",
  emoji: "✨",
  color: "#2E7D32",
  tagline: "Deux lettres, un seul son !",
  taglineHe: "שְׁתֵּי אוֹתִיּוֹת, צְלִיל אֶחָד!",
  sublevels: [
    {
      id: "n4-s1",
      name: "CH et OU",
      nameHe: "CH וְ-OU",
      emoji: "🐱",
      lesson: {
        cards: [
          {
            title: "Le son CH 🐱",
            titleHe: "הַצְּלִיל CH",
            body: "C et H ensemble font un seul son : 'ch', comme dans CHAT. Deux lettres = un son magique !",
            bodyHe: "C וְ-H בְּיַחַד עוֹשׂוֹת צְלִיל אֶחָד: 'שְׁ', כְּמוֹ בַּמִּלָּה CHAT (חָתוּל). שְׁתֵּי אוֹתִיּוֹת = צְלִיל אֶחָד קָסוּם!",
            big: "CH",
            say: "che. chat. chalom."
          },
          {
            title: "Des mots avec CH 🎩",
            titleHe: "מִלִּים עִם CH",
            body: "CHAT, CHALOM, CHAPEAU, CHOU. Tu entends 'ch' au début de chaque mot !",
            bodyHe: "CHAT (חָתוּל), CHALOM (שָׁלוֹם), CHAPEAU (כּוֹבַע), CHOU (כְּרוּב). שׁוֹמְעִים 'שֶׁ' בִּתְחִלַּת כָּל מִלָּה!",
            big: "CHAT",
            say: "chat. chalom. chapeau. chou."
          },
          {
            title: "Le son OU 🐔",
            titleHe: "הַצְּלִיל OU",
            body: "O et U ensemble font le son 'ou', comme dans CHOU et POULE !",
            bodyHe: "O וְ-U בְּיַחַד עוֹשׂוֹת אֶת הַצְּלִיל 'אוּ', כְּמוֹ בַּמִּלִּים CHOU (כְּרוּב) וְ-POULE (תַּרְנְגֹלֶת)!",
            big: "OU",
            say: "ou. chou. poule. roue."
          }
        ]
      },
      exercises: [
        {
          type: "pick",
          prompt: "Quelles lettres font le son 'ch' de CHAT ?",
          promptHe: "אֵילוּ אוֹתִיּוֹת עוֹשׂוֹת אֶת הַצְּלִיל 'ch' שֶׁל CHAT?",
          question: "CHAT 🐱",
          choices: ["CH", "CA", "AT"],
          answer: 0,
          say: "che. chat.",
          explain: "C et H ensemble font le son 'ch', comme dans CHAT !",
          explainHe: "C וְ-H בְּיַחַד עוֹשׂוֹת אֶת הַצְּלִיל 'שְׁ', כְּמוֹ בַּמִּלָּה CHAT!"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ מָה שְׁמַעְתֶּם!",
          say: "chat",
          choices: ["CHAT", "RAT", "CHOU"],
          answer: 0,
          explain: "Tu as entendu CHAT : ça commence par le son 'ch' ! 🐱",
          explainHe: "שְׁמַעְתֶּם CHAT (חָתוּל): הַמִּלָּה מַתְחִילָה בִּצְלִיל 'שֶׁ'! 🐱"
        },
        {
          type: "pick",
          prompt: "Lis bien ! Lequel dit 'miaou' ?",
          promptHe: "קִרְאוּ טוֹב! אֵיזֶה אוֹמֵר 'מְיָאוּ'?",
          question: "🐱",
          choices: ["CHAT", "CHOU"],
          answer: 0,
          say: "chat. chou.",
          explain: "Les deux commencent par CH ! Mais CHAT finit par A-T (le T est muet), et CHOU finit par OU. 🐱",
          explainHe: "שְׁתֵּי הַמִּלִּים מַתְחִילוֹת בְּ-CH! אֲבָל CHAT נִגְמֶרֶת בְּ-A-T (אֶת הַ-T לֹא שׁוֹמְעִים), וְ-CHOU נִגְמֶרֶת בְּ-OU. 🐱"
        },
        {
          type: "build",
          prompt: "Assemble le mot CHOU !",
          promptHe: "הַרְכִּיבוּ אֶת הַמִּלָּה CHOU!",
          tiles: ["OU", "CH", "AT"],
          answer: ["CH", "OU"],
          say: "chou",
          explain: "CH + OU = CHOU ! Deux sons magiques dans un petit mot. 🥬",
          explainHe: "CH + OU = CHOU (כְּרוּב)! שְׁנֵי צְלִילִים קְסוּמִים בְּמִלָּה קְטַנָּה אַחַת. 🥬"
        },
        {
          type: "fill",
          prompt: "Complète le mot !",
          promptHe: "הַשְׁלִימוּ אֶת הַמִּלָּה!",
          sentence: "LEVY A UNE P␣LE.",
          choices: ["OU", "ON", "OI"],
          answer: 0,
          say: "poule",
          explain: "P + OU + LE = POULE ! 🐔",
          explainHe: "P + OU + LE = POULE (תַּרְנְגֹלֶת)! 🐔"
        },
        {
          type: "match",
          prompt: "Relie chaque mot à son image !",
          promptHe: "חַבְּרוּ כָּל מִלָּה לַתְּמוּנָה שֶׁלָּהּ!",
          pairs: [["CHAT", "🐱"], ["POULE", "🐔"], ["CHOU", "🥬"]],
          explain: "CHAT 🐱, POULE 🐔, CHOU 🥬 : on entend 'ch' et 'ou' !",
          explainHe: "CHAT זֶה חָתוּל 🐱, POULE זֶה תַּרְנְגֹלֶת 🐔, CHOU זֶה כְּרוּב 🥬!"
        },
        {
          type: "listen",
          prompt: "Écoute ! Quelles lettres font ce son ?",
          promptHe: "הַקְשִׁיבוּ! אֵילוּ אוֹתִיּוֹת עוֹשׂוֹת אֶת הַצְּלִיל הַזֶּה?",
          say: "ou",
          choices: ["OU", "O", "U"],
          answer: 0,
          explain: "Le son 'ou' s'écrit avec deux lettres : O et U ensemble !",
          explainHe: "אֶת הַצְּלִיל 'אוּ' כּוֹתְבִים עִם שְׁתֵּי אוֹתִיּוֹת: O וְ-U בְּיַחַד!"
        },
        {
          type: "read",
          prompt: "Lis cette phrase à voix haute !",
          promptHe: "קִרְאוּ אֶת הַמִּשְׁפָּט בְּקוֹל רָם!",
          text: "LE CHAT A VU LA POULE.",
          say: "le chat a vu la poule.",
          explain: "Bravo ! CHAT avec le son 'ch', POULE avec le son 'ou'.",
          explainHe: "כָּל הַכָּבוֹד! CHAT עִם הַצְּלִיל 'שְׁ', POULE עִם הַצְּלִיל 'אוּ'."
        },
        {
          type: "pick",
          prompt: "Lis bien ! Laquelle fait COT COT ?",
          promptHe: "קִרְאוּ טוֹב! מִי עוֹשָׂה 'קוֹ־קוֹ'?",
          question: "🐔",
          choices: ["POULE", "BOULE"],
          answer: 0,
          say: "poule. boule.",
          explain: "POULE et BOULE ont le son OU, mais POULE commence par P (l'animal) et BOULE par B ! 🐔",
          explainHe: "POULE וְ-BOULE יֵשׁ בָּהֶן אֶת הַצְּלִיל OU, אֲבָל POULE מַתְחִילָה בְּ-P (הַחַיָּה) וְ-BOULE בְּ-B! 🐔"
        }
      ],
      joke: {
        q: "Quel fruit les poissons 🐟 n'aiment-ils pas ?",
        a: "La pêche ! 🍑😂",
        qHe: "אֵיזֶה פְּרִי הַדָּגִים 🐟 לֹא אוֹהֲבִים?",
        aHe: "הָאֲפַרְסֵק! 🍑 בְּצָרְפָתִית 'pêche' זֶה גַּם אֲפַרְסֵק וְגַם דַּיִג, וְהַדָּגִים מְפַחֲדִים מִדַּיִג! 😂"
      }
    },
    {
      id: "n4-s2",
      name: "ON et AN",
      nameHe: "ON וְ-AN",
      emoji: "🍬",
      lesson: {
        cards: [
          {
            title: "Le son ON 🍬",
            titleHe: "הַצְּלִיל ON",
            body: "O et N ensemble font le son 'on', comme dans BONBON ! On le dit un peu avec le nez.",
            bodyHe: "O וְ-N בְּיַחַד עוֹשׂוֹת אֶת הַצְּלִיל 'ON', כְּמוֹ בַּמִּלָּה BONBON (סֻכָּרִיָּה)! אוֹמְרִים אוֹתוֹ קְצָת עִם הָאַף.",
            big: "ON",
            say: "on. bonbon."
          },
          {
            title: "Des mots avec ON 🐑",
            titleHe: "מִלִּים עִם ON",
            body: "BONBON, PONT, ROND, MOUTON. Le son 'on' se cache partout !",
            bodyHe: "BONBON (סֻכָּרִיָּה), PONT (גֶּשֶׁר), ROND (עָגֹל), MOUTON (כִּבְשָׂה). הַצְּלִיל 'ON' מִתְחַבֵּא בְּכָל מָקוֹם!",
            big: "BONBON",
            say: "bonbon. pont. rond. mouton."
          },
          {
            title: "Le son AN 🌱",
            titleHe: "הַצְּלִיל AN",
            body: "A et N ensemble font le son 'an', comme dans GRAND. Attention : le D à la fin de GRAND est muet, on ne l'entend pas !",
            bodyHe: "A וְ-N בְּיַחַד עוֹשׂוֹת אֶת הַצְּלִיל 'AN', כְּמוֹ בַּמִּלָּה GRAND (גָּדוֹל). שִׂימוּ לֵב: הַ-D בְּסוֹף הַמִּלָּה GRAND שְׁקֵטָה, לֹא שׁוֹמְעִים אוֹתָהּ!",
            big: "AN",
            say: "an. grand. plante. chant."
          }
        ]
      },
      exercises: [
        {
          type: "pick",
          prompt: "Quelles lettres font le son 'on' de BONBON ?",
          promptHe: "אֵילוּ אוֹתִיּוֹת עוֹשׂוֹת אֶת הַצְּלִיל 'on' שֶׁל BONBON?",
          question: "BONBON 🍬",
          choices: ["ON", "AN", "OU"],
          answer: 0,
          say: "on. bonbon.",
          explain: "O et N ensemble font le son 'on', comme dans BONBON !",
          explainHe: "O וְ-N בְּיַחַד עוֹשׂוֹת אֶת הַצְּלִיל 'ON', כְּמוֹ בַּמִּלָּה BONBON!"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ מָה שְׁמַעְתֶּם!",
          say: "bonbon",
          choices: ["BONBON", "BALLON", "BANANE"],
          answer: 0,
          explain: "Tu as entendu BONBON : deux fois le son 'on' ! 🍬",
          explainHe: "שְׁמַעְתֶּם BONBON (סֻכָּרִיָּה): פַּעֲמַיִם הַצְּלִיל 'ON'! 🍬"
        },
        {
          type: "build",
          prompt: "Assemble le mot MOUTON !",
          promptHe: "הַרְכִּיבוּ אֶת הַמִּלָּה MOUTON!",
          tiles: ["TON", "MOU", "MON"],
          answer: ["MOU", "TON"],
          say: "mouton",
          explain: "MOU + TON = MOUTON ! On entend 'ou' puis 'on'. 🐑",
          explainHe: "MOU + TON = MOUTON (כִּבְשָׂה)! שׁוֹמְעִים 'אוּ' וְאָז 'ON'. 🐑"
        },
        {
          type: "fill",
          prompt: "Complète le mot !",
          promptHe: "הַשְׁלִימוּ אֶת הַמִּלָּה!",
          sentence: "LEVY A UN B␣BON.",
          choices: ["ON", "AN", "OU"],
          answer: 0,
          say: "bonbon",
          explain: "B + ON + BON = BONBON ! 🍬",
          explainHe: "B + ON + BON = BONBON (סֻכָּרִיָּה)! 🍬"
        },
        {
          type: "pick",
          prompt: "Quel mot veut dire 🐑 ?",
          promptHe: "אֵיזוֹ מִלָּה אוֹמֶרֶת 🐑?",
          question: "🐑",
          choices: ["MOUTON", "BOUTON", "MENTON"],
          answer: 0,
          say: "mouton",
          explain: "🐑 c'est le MOUTON ! BOUTON et MENTON se ressemblent, mais ce n'est pas pareil.",
          explainHe: "🐑 זֶה MOUTON (כִּבְשָׂה)! BOUTON (כַּפְתּוֹר) וּ-MENTON (סַנְטֵר) דּוֹמוֹת, אֲבָל זֶה לֹא אוֹתוֹ דָּבָר."
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ מָה שְׁמַעְתֶּם!",
          say: "grand",
          choices: ["GRAND", "ROND", "GRIS"],
          answer: 0,
          explain: "Tu as entendu GRAND, avec le son 'an'. Le D de la fin est muet !",
          explainHe: "שְׁמַעְתֶּם GRAND (גָּדוֹל), עִם הַצְּלִיל 'AN'. אֶת הַ-D שֶׁבַּסּוֹף לֹא שׁוֹמְעִים!"
        },
        {
          type: "fill",
          prompt: "Complète le mot !",
          promptHe: "הַשְׁלִימוּ אֶת הַמִּלָּה!",
          sentence: "LEVY A UNE PL␣TE VERTE.",
          choices: ["AN", "ON", "IN"],
          answer: 0,
          say: "plante",
          explain: "PL + AN + TE = PLANTE ! 🌱",
          explainHe: "PL + AN + TE = PLANTE (צֶמַח)! 🌱"
        },
        {
          type: "pick",
          prompt: "Trouve le mot où on entend DEUX fois 'on' !",
          promptHe: "מִצְאוּ אֶת הַמִּלָּה שֶׁבָּהּ שׁוֹמְעִים פַּעֲמַיִם 'on'!",
          choices: ["BONBON", "BALLON"],
          answer: 0,
          say: "bonbon. ballon.",
          explain: "BONBON = BON + BON : deux fois 'on' ! BALLON n'a qu'un seul 'on' (BAL-LON). 🍬",
          explainHe: "BONBON = BON + BON: פַּעֲמַיִם 'on'! בְּ-BALLON יֵשׁ רַק 'on' אֶחָד (BAL-LON). 🍬"
        },
        {
          type: "match",
          prompt: "Relie chaque mot à son image !",
          promptHe: "חַבְּרוּ כָּל מִלָּה לַתְּמוּנָה שֶׁלָּהּ!",
          pairs: [["BONBON", "🍬"], ["MOUTON", "🐑"], ["PONT", "🌉"], ["PLANTE", "🌱"]],
          explain: "BONBON 🍬, MOUTON 🐑, PONT 🌉, PLANTE 🌱 : partout des sons magiques !",
          explainHe: "BONBON סֻכָּרִיָּה 🍬, MOUTON כִּבְשָׂה 🐑, PONT גֶּשֶׁר 🌉, PLANTE צֶמַח 🌱: צְלִילִים קְסוּמִים בְּכָל מָקוֹם!"
        },
        {
          type: "read",
          prompt: "Lis cette phrase à voix haute !",
          promptHe: "קִרְאוּ אֶת הַמִּשְׁפָּט בְּקוֹל רָם!",
          text: "LE GRAND MOUTON DANSE.",
          say: "le grand mouton danse.",
          explain: "Bravo ! GRAND avec 'an', MOUTON avec 'ou' et 'on', DANSE avec 'an'.",
          explainHe: "כָּל הַכָּבוֹד! GRAND עִם 'AN', MOUTON עִם 'OU' וְ-'ON', DANSE עִם 'AN'."
        }
      ],
      joke: {
        q: "Pourquoi le citron 🍋 traverse-t-il la rue en courant 🏃 ?",
        a: "Parce qu'il est pressé ! 😂",
        qHe: "לָמָּה הַלִּימוֹן 🍋 חוֹצֶה אֶת הַכְּבִישׁ בְּרִיצָה? 🏃",
        aHe: "כִּי הוּא 'pressé'! בְּצָרְפָתִית זֶה גַּם 'מְמַהֵר' וְגַם 'סָחוּט', לִימוֹן סָחוּט שֶׁמְּמַהֵר! 😂"
      }
    },
    {
      id: "n4-s3",
      name: "IN et nos mots",
      nameHe: "IN וְהַמִּלִּים שֶׁלָּנוּ",
      emoji: "🐰",
      lesson: {
        cards: [
          {
            title: "Le son IN 🐰",
            titleHe: "הַצְּלִיל IN",
            body: "I et N ensemble font le son 'in', comme dans LAPIN ! Encore un son qu'on dit avec le nez.",
            bodyHe: "I וְ-N בְּיַחַד עוֹשׂוֹת אֶת הַצְּלִיל 'IN', כְּמוֹ בַּמִּלָּה LAPIN (אַרְנָב)! עוֹד צְלִיל שֶׁאוֹמְרִים קְצָת עִם הָאַף.",
            big: "IN",
            say: "hein. lapin."
          },
          {
            title: "Des mots avec IN 🌲",
            titleHe: "מִלִּים עִם IN",
            body: "LAPIN, MATIN, SAPIN, MOULIN. Tu entends 'in' à la fin de chaque mot !",
            bodyHe: "LAPIN (אַרְנָב), MATIN (בֹּקֶר), SAPIN (אַשּׁוּחַ), MOULIN (טַחֲנָה). שׁוֹמְעִים 'IN' בְּסוֹף כָּל מִלָּה!",
            big: "LAPIN",
            say: "lapin. matin. sapin. moulin."
          },
          {
            title: "Des mots qu'on connaît déjà ! 👋",
            titleHe: "מִלִּים שֶׁאֲנַחְנוּ כְּבָר מַכִּירִים!",
            body: "CHALOM, BONJOUR, MAZAL TOV ! Tu les dis déjà à la maison. Regarde : CH, ON, OU... les sons magiques sont partout !",
            bodyHe: "CHALOM, BONJOUR, MAZAL TOV! אַתֶּם כְּבָר אוֹמְרִים אוֹתָן בַּבַּיִת. תִּרְאוּ: CH, ON, OU... הַצְּלִילִים הַקְּסוּמִים נִמְצָאִים בְּכָל מָקוֹם!",
            big: "CHALOM",
            say: "chalom. bonjour. mazal tov."
          }
        ]
      },
      exercises: [
        {
          type: "pick",
          prompt: "Quelles lettres font le son 'in' de LAPIN ?",
          promptHe: "אֵילוּ אוֹתִיּוֹת עוֹשׂוֹת אֶת הַצְּלִיל 'in' שֶׁל LAPIN?",
          question: "LAPIN 🐰",
          choices: ["IN", "ON", "AN"],
          answer: 0,
          say: "hein. lapin.",
          explain: "I et N ensemble font le son 'in', comme à la fin de LAPIN !",
          explainHe: "I וְ-N בְּיַחַד עוֹשׂוֹת אֶת הַצְּלִיל 'IN', כְּמוֹ בְּסוֹף הַמִּלָּה LAPIN!"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ מָה שְׁמַעְתֶּם!",
          say: "lapin",
          choices: ["LAPIN", "SAPIN", "MATIN"],
          answer: 0,
          explain: "Tu as entendu LAPIN ! Les trois mots finissent par 'in', écoute bien le début. 🐰",
          explainHe: "שְׁמַעְתֶּם LAPIN (אַרְנָב)! שְׁלוֹשׁ הַמִּלִּים נִגְמָרוֹת בְּ-'IN', מַקְשִׁיבִים טוֹב לַהַתְחָלָה. 🐰"
        },
        {
          type: "build",
          prompt: "Assemble le mot MATIN !",
          promptHe: "הַרְכִּיבוּ אֶת הַמִּלָּה MATIN!",
          tiles: ["TIN", "MA", "MOU"],
          answer: ["MA", "TIN"],
          say: "matin",
          explain: "MA + TIN = MATIN ! C'est le début de la journée. ☀️",
          explainHe: "MA + TIN = MATIN (בֹּקֶר)! זוֹ תְּחִלַּת הַיּוֹם. ☀️"
        },
        {
          type: "fill",
          prompt: "Complète le mot !",
          promptHe: "הַשְׁלִימוּ אֶת הַמִּלָּה!",
          sentence: "LEVY A UN GRAND SAP␣.",
          choices: ["IN", "ON", "OU"],
          answer: 0,
          say: "sapin",
          explain: "SAP + IN = SAPIN ! Un grand arbre vert. 🌲",
          explainHe: "SAP + IN = SAPIN (אַשּׁוּחַ)! עֵץ יָרֹק וְגָדוֹל. 🌲"
        },
        {
          type: "type",
          prompt: "Écoute et écris le mot !",
          promptHe: "הַקְשִׁיבוּ וְכִתְבוּ אֶת הַמִּלָּה!",
          say: "chou",
          answer: "chou",
          strict: false,
          explain: "CHOU s'écrit CH + OU : deux sons magiques, quatre lettres ! 🥬",
          explainHe: "CHOU (כְּרוּב) נִכְתָּב CH + OU: שְׁנֵי צְלִילִים קְסוּמִים, אַרְבַּע אוֹתִיּוֹת! 🥬"
        },
        {
          type: "match",
          prompt: "Relie chaque mot à son image !",
          promptHe: "חַבְּרוּ כָּל מִלָּה לַתְּמוּנָה שֶׁלָּהּ!",
          pairs: [["LAPIN", "🐰"], ["CHAT", "🐱"], ["MOUTON", "🐑"], ["POULE", "🐔"]],
          explain: "LAPIN 🐰, CHAT 🐱, MOUTON 🐑, POULE 🐔 : tous nos animaux avec des sons magiques !",
          explainHe: "LAPIN אַרְנָב 🐰, CHAT חָתוּל 🐱, MOUTON כִּבְשָׂה 🐑, POULE תַּרְנְגֹלֶת 🐔: כָּל הַחַיּוֹת שֶׁלָּנוּ עִם צְלִילִים קְסוּמִים!"
        },
        {
          type: "pick",
          prompt: "Trouve le mot CHALOM !",
          promptHe: "מִצְאוּ אֶת הַמִּלָּה CHALOM!",
          question: "שָׁלוֹם",
          choices: ["CHALOM", "CHALON", "CHAMOL"],
          answer: 0,
          say: "chalom",
          explain: "CHALOM = CH + A + L + O + M. Le mot qu'on dit tous les jours !",
          explainHe: "CHALOM = CH + A + L + O + M. הַמִּלָּה שֶׁאֲנַחְנוּ אוֹמְרִים כָּל יוֹם!"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ מָה שְׁמַעְתֶּם!",
          say: "bonjour",
          choices: ["BONJOUR", "BONBON", "TOUJOURS"],
          answer: 0,
          explain: "Tu as entendu BONJOUR : le son 'on' puis le son 'ou' ! 👋",
          explainHe: "שְׁמַעְתֶּם BONJOUR (שָׁלוֹם, בֹּקֶר טוֹב): הַצְּלִיל 'ON' וְאָז הַצְּלִיל 'OU'! 👋"
        },
        {
          type: "pick",
          prompt: "Lis bien ! Lequel est l'arbre ?",
          promptHe: "קִרְאוּ טוֹב! אֵיזֶה הוּא הָעֵץ?",
          question: "🌲",
          choices: ["SAPIN", "LAPIN"],
          answer: 0,
          say: "sapin. lapin.",
          explain: "SAPIN et LAPIN finissent par IN, mais SAPIN commence par S (l'arbre) et LAPIN par L (l'animal) ! 🌲🐰",
          explainHe: "SAPIN וְ-LAPIN נִגְמָרוֹת בְּ-IN, אֲבָל SAPIN מַתְחִילָה בְּ-S (הָעֵץ) וְ-LAPIN בְּ-L (הַחַיָּה)! 🌲🐰"
        },
        {
          type: "read",
          prompt: "Lis cette phrase à voix haute !",
          promptHe: "קִרְאוּ אֶת הַמִּשְׁפָּט בְּקוֹל רָם!",
          text: "CHALOM ! LE MATIN, LE LAPIN DIT BONJOUR.",
          say: "chalom ! le matin, le lapin dit bonjour.",
          explain: "Bravo ! Tu as lu CHALOM, MATIN, LAPIN et BONJOUR : quatre mots avec des sons magiques !",
          explainHe: "כָּל הַכָּבוֹד! קְרָאתֶם CHALOM, MATIN, LAPIN וְ-BONJOUR: אַרְבַּע מִלִּים עִם צְלִילִים קְסוּמִים!"
        }
      ],
      joke: {
        q: "Pourquoi la banane 🍌 met-elle de la crème solaire ☀️ ?",
        a: "Pour ne pas peler ! 😂🍌",
        qHe: "לָמָּה הַבָּנָנָה 🍌 מוֹרַחַת קְרֵם הֲגַנָּה? ☀️",
        aHe: "כְּדֵי לֹא לְהִתְקַלֵּף! 😂"
      }
    },
    {
      id: "n4-s4",
      name: "Le grand défi",
      nameHe: "הָאֶתְגָּר הַגָּדוֹל",
      emoji: "🏆",
      lesson: {
        cards: [
          {
            title: "Le grand défi ! 🏆",
            titleHe: "הָאֶתְגָּר הַגָּדוֹל!",
            body: "Bravo ! Tu connais les 5 sons magiques : CH, OU, ON, AN, IN. Levy est fier de toi. À toi de jouer !",
            bodyHe: "כָּל הַכָּבוֹד! אַתֶּם מַכִּירִים אֶת 5 הַצְּלִילִים הַקְּסוּמִים: CH, OU, ON, AN, IN. Levy גֵּאֶה בָּכֶם. עַכְשָׁו תּוֹרְכֶם לְשַׂחֵק!",
            big: "CH OU ON AN IN",
            say: "che. ou. on. an. hein."
          }
        ]
      },
      exercises: [
        {
          type: "match",
          prompt: "Relie chaque son au mot où on l'entend !",
          promptHe: "חַבְּרוּ כָּל צְלִיל לַמִּלָּה שֶׁבָּהּ שׁוֹמְעִים אוֹתוֹ!",
          pairs: [["CH", "CHAT"], ["OU", "POULE"], ["ON", "PONT"], ["AN", "PLANTE"]],
          explain: "CH dans CHAT, OU dans POULE, ON dans PONT, AN dans PLANTE !",
          explainHe: "CH בַּמִּלָּה CHAT, OU בַּמִּלָּה POULE, ON בַּמִּלָּה PONT, AN בַּמִּלָּה PLANTE!"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ מָה שְׁמַעְתֶּם!",
          say: "chanson",
          choices: ["CHANSON", "CHALOM", "BONBON"],
          answer: 0,
          explain: "Tu as entendu CHANSON : CH + AN + SON, trois sons magiques dans un mot ! 🎵",
          explainHe: "שְׁמַעְתֶּם CHANSON (שִׁיר): CH + AN + SON, שְׁלוֹשָׁה צְלִילִים קְסוּמִים בְּמִלָּה אַחַת! 🎵"
        },
        {
          type: "pick",
          prompt: "Trouve le mot avec le son 'in' !",
          promptHe: "מִצְאוּ אֶת הַמִּלָּה עִם הַצְּלִיל 'in'!",
          choices: ["MOULIN", "MOUTON", "CHALOM"],
          answer: 0,
          say: "moulin",
          explain: "MOULIN finit par 'in' : MOU + LIN ! MOUTON finit par 'on'.",
          explainHe: "MOULIN (טַחֲנָה) נִגְמֶרֶת בְּ-'IN': MOU + LIN! MOUTON נִגְמֶרֶת בְּ-'ON'."
        },
        {
          type: "build",
          prompt: "Assemble le mot BONJOUR !",
          promptHe: "הַרְכִּיבוּ אֶת הַמִּלָּה BONJOUR!",
          tiles: ["JOUR", "BON", "BAN"],
          answer: ["BON", "JOUR"],
          say: "bonjour",
          explain: "BON + JOUR = BONJOUR ! Le son 'on' puis le son 'ou'. 👋",
          explainHe: "BON + JOUR = BONJOUR! הַצְּלִיל 'ON' וְאָז הַצְּלִיל 'OU'. 👋"
        },
        {
          type: "fill",
          prompt: "Complète le mot !",
          promptHe: "הַשְׁלִימוּ אֶת הַמִּלָּה!",
          sentence: "LE LAP␣ MANGE UNE CAROTTE.",
          choices: ["IN", "OU", "AN"],
          answer: 0,
          say: "lapin",
          explain: "LAP + IN = LAPIN ! Il adore les carottes. 🐰🥕",
          explainHe: "LAP + IN = LAPIN (אַרְנָב)! הוּא מֵת עַל גֶּזֶר. 🐰🥕"
        },
        {
          type: "pick",
          prompt: "Lis bien ! Lequel dit BÊÊ ?",
          promptHe: "קִרְאוּ טוֹב! מִי אוֹמֵר 'בֶּה'?",
          question: "🐑",
          choices: ["MOUTON", "BOUTON"],
          answer: 0,
          say: "mouton. bouton.",
          explain: "MOUTON et BOUTON finissent par OU-TON, mais MOUTON commence par M (l'animal) et BOUTON par B ! 🐑",
          explainHe: "MOUTON וְ-BOUTON נִגְמָרוֹת בְּ-OU-TON, אֲבָל MOUTON מַתְחִילָה בְּ-M (הַחַיָּה) וְ-BOUTON בְּ-B! 🐑"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ מָה שְׁמַעְתֶּם!",
          say: "rond",
          choices: ["ROND", "GRAND", "ROUE"],
          answer: 0,
          explain: "Tu as entendu ROND, avec le son 'on'. GRAND a le son 'an' : écoute la différence !",
          explainHe: "שְׁמַעְתֶּם ROND (עָגֹל), עִם הַצְּלִיל 'ON'. בְּ-GRAND יֵשׁ אֶת הַצְּלִיל 'AN': מַקְשִׁיבִים לַהֶבְדֵּל!"
        },
        {
          type: "riddle",
          prompt: "Devinette !",
          promptHe: "חִידָה!",
          question: "Mon premier est le contraire de MAUVAIS.\nMon second est pareil que mon premier.\nMon tout est sucré et se mange.",
          choices: ["BONBON", "MOUTON", "BONJOUR"],
          answer: 0,
          say: "mon premier est le contraire de mauvais. mon second est pareil que mon premier. mon tout est sucré et se mange.",
          explain: "BON + BON = BONBON ! Deux fois le son 'on'. 🍬",
          explainHe: "BON (טוֹב) + BON = BONBON (סֻכָּרִיָּה)! פַּעֲמַיִם הַצְּלִיל 'ON'. 🍬"
        },
        {
          type: "pick",
          prompt: "Lis bien ! Lequel mange une carotte ?",
          promptHe: "קִרְאוּ טוֹב! מִי אוֹכֵל גֶּזֶר?",
          question: "🐰",
          choices: ["LAPIN", "SAPIN"],
          answer: 0,
          say: "lapin. sapin.",
          explain: "LAPIN et SAPIN finissent par IN, mais LAPIN commence par L (l'animal) et SAPIN par S (l'arbre) ! 🐰🌲",
          explainHe: "LAPIN וְ-SAPIN נִגְמָרוֹת בְּ-IN, אֲבָל LAPIN מַתְחִילָה בְּ-L (הַחַיָּה) וְ-SAPIN מַתְחִילָה בְּ-S (הָעֵץ)! 🐰🌲"
        },
        {
          type: "fill",
          prompt: "Complète le mot !",
          promptHe: "הַשְׁלִימוּ אֶת הַמִּלָּה!",
          sentence: "LE GR␣D CHAT DANSE.",
          choices: ["AN", "ON", "IN"],
          answer: 0,
          say: "grand",
          explain: "GR + AN + D = GRAND ! Et le D de la fin est muet.",
          explainHe: "GR + AN + D = GRAND (גָּדוֹל)! וְאֶת הַ-D שֶׁבַּסּוֹף לֹא שׁוֹמְעִים."
        },
        {
          type: "pick",
          prompt: "Trouve le mot avec le son 'an' !",
          promptHe: "מִצְאוּ אֶת הַמִּלָּה עִם הַצְּלִיל 'an'!",
          choices: ["CHANT", "CHAT", "CHOU"],
          answer: 0,
          say: "chant",
          explain: "CHANT = CH + AN + T muet : on dit 'chan' ! CHAT et CHOU n'ont pas de 'an'.",
          explainHe: "CHANT (שִׁירָה) = CH + AN + T שְׁקֵטָה: אוֹמְרִים 'שָׁאַן'! בְּ-CHAT וּבְ-CHOU אֵין 'AN'."
        },
        {
          type: "read",
          prompt: "Lis cette phrase à voix haute !",
          promptHe: "קִרְאוּ אֶת הַמִּשְׁפָּט בְּקוֹל רָם!",
          text: "LE MATIN, LE GRAND MOUTON CHANTE UNE CHANSON.",
          say: "le matin, le grand mouton chante une chanson.",
          explain: "Bravo, champion ! Tu as lu les 5 sons magiques dans une seule phrase !",
          explainHe: "כָּל הַכָּבוֹד, אַלּוּפִים! קְרָאתֶם אֶת חֲמֵשֶׁת הַצְּלִילִים הַקְּסוּמִים בְּמִשְׁפָּט אֶחָד!"
        }
      ],
      joke: {
        q: "Quel fromage 🧀 est fort comme un rocher 🪨 ?",
        a: "Le roquefort ! 💪 (ROC-FORT : un roc très fort !)",
        qHe: "אֵיזוֹ גְּבִינָה 🧀 חֲזָקָה כְּמוֹ סֶלַע?",
        aHe: "רוֹקְפוֹר! בְּצָרְפָתִית ROC זֶה סֶלַע וְ-FORT זֶה חָזָק 💪: ROC-FORT! 😂"
      }
    }
  ]
});
