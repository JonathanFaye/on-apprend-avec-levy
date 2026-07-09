window.LEVELS = window.LEVELS || [];
window.LEVELS.push({
  id: "n9",
  order: 9,
  name: "Presque champion",
  nameHe: "כִּמְעַט אַלּוּף",
  emoji: "🏆",
  color: "#00695C",
  tagline: "Je conjugue et j'écris comme un champion !",
  taglineHe: "אֲנִי מַטֶּה פְּעָלִים וְכוֹתֵב כְּמוֹ אַלּוּף!",
  sublevels: [
    {
      id: "n9-s1",
      name: "Les verbes en -ER",
      nameHe: "פְּעָלִים שֶׁנִּגְמָרִים בְּ-ER",
      emoji: "🏊",
      lesson: {
        cards: [
          {
            title: "Les verbes en -ER 🏊",
            titleHe: "הַפְּעָלִים שֶׁנִּגְמָרִים בְּ-ER",
            body: "Un verbe, c'est un mot d'action : jouer, manger, nager, chanter. Ils finissent tous par -ER !",
            bodyHe: "פֹּעַל הוּא מִלָּה שֶׁל פְּעֻלָּה: jouer (לְשַׂחֵק), manger (לֶאֱכֹל), nager (לִשְׂחוֹת), chanter (לָשִׁיר). כֻּלָּם נִגְמָרִים בְּ-ER!",
            big: "jouer manger nager chanter",
            say: "jouer. manger. nager. chanter."
          },
          {
            title: "je, tu, il, elle 🙋",
            titleHe: "je, tu, il, elle",
            body: "Au présent : je joue, tu joues, il joue. On entend pareil, mais avec TU il y a toujours un S !",
            bodyHe: "בַּהוֹוֶה: je joue, tu joues, il joue. שׁוֹמְעִים אוֹתוֹ דָּבָר, אֲבָל עִם TU תָּמִיד יֵשׁ S!",
            big: "je joue, tu joues, il joue",
            say: "je joue. tu joues. il joue."
          },
          {
            title: "nous, vous, ils 👥",
            titleHe: "nous, vous, ils",
            body: "Nous jouons, vous jouez, ils jouent. Attention : nous mangeons, nous nageons, avec un E après le G !",
            bodyHe: "Nous jouons, vous jouez, ils jouent. שִׂימוּ לֵב: nous mangeons, nous nageons, עִם E אַחֲרֵי הַ-G!",
            big: "nous jouons, vous jouez, ils jouent",
            say: "nous jouons. vous jouez. ils jouent."
          }
        ]
      },
      exercises: [
        {
          type: "pick",
          prompt: "Lis bien le sujet ! Choisis la bonne forme.",
          promptHe: "קִרְאוּ טוֹב אֶת הַנּוֹשֵׂא! בַּחֲרוּ אֶת הַצּוּרָה הַנְּכוֹנָה.",
          question: "Les amis ___ ensemble.",
          choices: ["joue", "jouent"],
          answer: 1,
          say: "les amis jouent ensemble.",
          explain: "Les amis, c'est plusieurs, comme ILS : le verbe prend -ENT, jouent. On n'entend pas le -ENT, il faut le LIRE !",
          explainHe: "Les amis זֶה כַּמָּה, כְּמוֹ ILS: הַפּוֹעַל מְקַבֵּל ENT-, jouent. אֶת הַ-ENT לֹא שׁוֹמְעִים, צָרִיךְ לִקְרֹא!"
        },
        {
          type: "fill",
          prompt: "Complète la phrase !",
          promptHe: "הַשְׁלִימוּ אֶת הַמִּשְׁפָּט!",
          sentence: "Tu jou␣ avec ton ami.",
          choices: ["es", "e", "ons"],
          answer: 0,
          say: "tu joues avec ton ami.",
          explain: "Avec TU, le verbe en -ER finit par -ES : tu joues.",
          explainHe: "עִם TU, פּוֹעַל בְּ-ER נִגְמָר בְּ-ES: tu joues."
        },
        {
          type: "pick",
          prompt: "Choisis la bonne forme du verbe !",
          promptHe: "בַּחֲרוּ אֶת הַצּוּרָה הַנְּכוֹנָה שֶׁל הַפּוֹעַל!",
          question: "La maîtresse ___ une jolie chanson.",
          choices: ["chante", "chantes", "chantent"],
          answer: 0,
          say: "la maîtresse chante une jolie chanson.",
          explain: "La maîtresse = elle. Avec IL ou ELLE, le verbe finit par -E : elle chante.",
          explainHe: "La maîtresse = elle (הִיא). עִם IL אוֹ ELLE הַפּוֹעַל נִגְמָר בְּ-E: elle chante."
        },
        {
          type: "fill",
          prompt: "Complète la phrase !",
          promptHe: "הַשְׁלִימוּ אֶת הַמִּשְׁפָּט!",
          sentence: "Nous man␣ une pizza.",
          choices: ["geons", "gons", "ge"],
          answer: 0,
          say: "nous mangeons une pizza.",
          explain: "Après le G, on ajoute un E pour garder le son doux : nous mangeons.",
          explainHe: "אַחֲרֵי G מוֹסִיפִים E כְּדֵי לִשְׁמֹר עַל הַצְּלִיל הָרַךְ: nous mangeons."
        },
        {
          type: "build",
          prompt: "Mets la phrase dans l'ordre !",
          promptHe: "סַדְּרוּ אֶת הַמִּשְׁפָּט לְפִי הַסֵּדֶר!",
          tiles: ["Ils", "chantent", "une", "chanson", "chante"],
          answer: ["Ils", "chantent", "une", "chanson"],
          say: "ils chantent une chanson.",
          explain: "Avec ILS, le verbe prend -ENT : ils chantent. Le -ENT ne s'entend pas !",
          explainHe: "עִם ILS הַפּוֹעַל מְקַבֵּל ENT- בַּסּוֹף: ils chantent. אֶת הַ-ENT לֹא שׁוֹמְעִים!"
        },
        {
          type: "listen",
          prompt: "Écoute bien et choisis ce que tu entends !",
          promptHe: "הַקְשִׁיבוּ טוֹב וּבַחֲרוּ מַה שֶּׁשְּׁמַעְתֶּם!",
          say: "nous nageons",
          choices: ["nous nageons", "vous nagez", "ils nagent"],
          answer: 0,
          explain: "Tu as entendu 'nous' : nous nageons, avec -ONS.",
          explainHe: "שְׁמַעְתֶּם 'nous': nous nageons, עִם ONS- בַּסּוֹף."
        },
        {
          type: "match",
          prompt: "Relie chaque personne à son verbe !",
          promptHe: "חַבְּרוּ כָּל גּוּף לַפּוֹעַל שֶׁלּוֹ!",
          pairs: [["je", "joue"], ["nous", "jouons"], ["vous", "jouez"], ["ils", "jouent"]],
          explain: "je joue, nous jouons, vous jouez, ils jouent : chaque personne a sa terminaison.",
          explainHe: "je joue, nous jouons, vous jouez, ils jouent: לְכָל גּוּף יֵשׁ סִיֹּמֶת מִשֶּׁלּוֹ."
        },
        {
          type: "pick",
          prompt: "Quelle phrase est bien écrite ?",
          promptHe: "אֵיזֶה מִשְׁפָּט כָּתוּב נָכוֹן?",
          choices: ["Tu manges une pomme.", "Tu mange une pomme.", "Tu mangent une pomme."],
          answer: 0,
          say: "tu manges une pomme.",
          explain: "Avec TU, il faut un S : tu manges.",
          explainHe: "עִם TU חַיָּבִים S בַּסּוֹף: tu manges."
        },
        {
          type: "type",
          prompt: "Dictée ! Écoute et écris.",
          promptHe: "הַכְתָּבָה! הַקְשִׁיבוּ וְכִתְבוּ.",
          say: "je nage",
          answer: "je nage",
          strict: false,
          explain: "je nage : avec JE, le verbe finit par -E.",
          explainHe: "je nage: עִם JE הַפּוֹעַל נִגְמָר בְּ-E."
        },
        {
          type: "read",
          prompt: "Lis cette phrase à voix haute !",
          promptHe: "קִרְאוּ אֶת הַמִּשְׁפָּט בְּקוֹל רָם!",
          text: "Levy chante, son amie danse\net nous jouons tous ensemble.",
          say: "levy chante, son amie danse et nous jouons tous ensemble.",
          explain: "Bravo ! chante avec -E, jouons avec -ONS.",
          explainHe: "כָּל הַכָּבוֹד! chante עִם E, jouons עִם ONS."
        }
      ],
      joke: {
        q: "Charade ! Mon premier est une note de musique (do, ré, mi...) 🎵. Mon deuxième : il ... à l'école. Mon troisième veut dire joli. Mon tout est dans la salle de bain ! 🛁",
        a: "Un LAVABO ! LA + VA + BEAU. C'est là qu'on se lave les mains ! 🧼😂",
        qHe: "חִידַת הֲבָרוֹת! הָרִאשׁוֹן הוּא תָּו בְּמוּזִיקָה (LA) 🎵. הַשֵּׁנִי: il ... à l'école (VA). הַשְּׁלִישִׁי אוֹמֵר 'יָפֶה' (BEAU). הַכֹּל בְּיַחַד נִמְצָא בַּחֲדַר הָאַמְבַּטְיָה! 🛁",
        aHe: "LAVABO (כִּיּוֹר)! LA + VA + BEAU נִשְׁמָע בְּיַחַד כְּמוֹ lavabo, 'כִּיּוֹר' בְּצָרְפָתִית! 🧼😂"
      }
    },
    {
      id: "n9-s2",
      name: "a ou à, est ou et",
      nameHe: "a אוֹ à, est אוֹ et",
      emoji: "✏️",
      lesson: {
        cards: [
          {
            title: "a ou à ? 🤔",
            titleHe: "a אוֹ à?",
            body: "a = le verbe avoir : Levy a un vélo. à = un petit mot de lieu : il va à l'école. Astuce : si tu peux dire 'avait', écris a sans accent !",
            bodyHe: "a = הַפּוֹעַל avoir: Levy a un vélo. à = מִלָּה קְטַנָּה שֶׁל מָקוֹם: il va à l'école. טְרִיק: אִם אֶפְשָׁר לְהַגִּיד 'avait', כּוֹתְבִים a בְּלִי אֶקְסְנֵט!",
            big: "Levy a un vélo. Il va à l'école.",
            say: "levy a un vélo. il va à l'école."
          },
          {
            title: "est ou et ? ⚖️",
            titleHe: "est אוֹ et?",
            body: "est = le verbe être : Levy est content. et = ça veut dire 'plus' : le chat et le chien. Astuce : si tu peux dire 'était', écris est !",
            bodyHe: "est = הַפּוֹעַל être: Levy est content. et = זֶה אוֹמֵר 'וְעוֹד': le chat et le chien. טְרִיק: אִם אֶפְשָׁר לְהַגִּיד 'était', כּוֹתְבִים est!",
            big: "Levy est content. Le chat et le chien jouent.",
            say: "levy est content. le chat et le chien jouent."
          }
        ]
      },
      exercises: [
        {
          type: "fill",
          prompt: "a ou à ? Complète !",
          promptHe: "a אוֹ à? הַשְׁלִימוּ!",
          sentence: "Levy ␣ un vélo rouge.",
          choices: ["a", "à"],
          answer: 0,
          say: "levy a un vélo rouge.",
          explain: "On peut dire 'Levy AVAIT un vélo' : c'est le verbe avoir, a sans accent.",
          explainHe: "אֶפְשָׁר לְהַגִּיד 'Levy avait un vélo': זֶה הַפּוֹעַל avoir, כּוֹתְבִים a בְּלִי אֶקְסְנֵט."
        },
        {
          type: "fill",
          prompt: "a ou à ? Complète !",
          promptHe: "a אוֹ à? הַשְׁלִימוּ!",
          sentence: "Il va ␣ la piscine.",
          choices: ["à", "a"],
          answer: 0,
          say: "il va à la piscine.",
          explain: "On ne peut pas dire 'il va AVAIT la piscine' ! Ici c'est à avec un accent.",
          explainHe: "אִי אֶפְשָׁר לְהַגִּיד 'il va avait la piscine'! כָּאן זֶה à עִם אֶקְסְנֵט."
        },
        {
          type: "pick",
          prompt: "Quelle phrase est bien écrite ?",
          promptHe: "אֵיזֶה מִשְׁפָּט כָּתוּב נָכוֹן?",
          choices: ["La maîtresse a une voiture bleue.", "La maîtresse à une voiture bleue."],
          answer: 0,
          say: "la maîtresse a une voiture bleue.",
          explain: "La maîtresse AVAIT une voiture : ça marche ! Donc a sans accent.",
          explainHe: "'La maîtresse avait une voiture' עוֹבֵד! לָכֵן a בְּלִי אֶקְסְנֵט."
        },
        {
          type: "fill",
          prompt: "est ou et ? Complète !",
          promptHe: "est אוֹ et? הַשְׁלִימוּ!",
          sentence: "Levy ␣ un garçon gentil.",
          choices: ["est", "et"],
          answer: 0,
          say: "levy est un garçon gentil.",
          explain: "On peut dire 'Levy ÉTAIT gentil' : c'est le verbe être, est.",
          explainHe: "אֶפְשָׁר לְהַגִּיד 'Levy était gentil': זֶה הַפּוֹעַל être, כּוֹתְבִים est."
        },
        {
          type: "fill",
          prompt: "est ou et ? Complète !",
          promptHe: "est אוֹ et? הַשְׁלִימוּ!",
          sentence: "Le chat ␣ le chien mangent une glace.",
          choices: ["et", "est"],
          answer: 0,
          say: "le chat et le chien mangent une glace.",
          explain: "et veut dire 'plus' : le chat + le chien. On ne peut pas dire 'le chat était le chien' !",
          explainHe: "et אוֹמֵר 'וְעוֹד': le chat + le chien. אִי אֶפְשָׁר לְהַגִּיד 'le chat était le chien'!"
        },
        {
          type: "match",
          prompt: "Relie chaque mot à son astuce !",
          promptHe: "חַבְּרוּ כָּל מִלָּה לַטְּרִיק שֶׁלָּהּ!",
          pairs: [["a", "avait"], ["à", "un lieu 📍"], ["est", "était"], ["et", "➕ plus"]],
          explain: "a devient avait, est devient était. à et et ne changent jamais.",
          explainHe: "a הוֹפֵךְ לְ-avait, est הוֹפֵךְ לְ-était. à וְ-et לֹא מִשְׁתַּנִּים אַף פַּעַם."
        },
        {
          type: "build",
          prompt: "Mets la phrase dans l'ordre !",
          promptHe: "סַדְּרוּ אֶת הַמִּשְׁפָּט לְפִי הַסֵּדֶר!",
          tiles: ["Levy", "va", "à", "l'école", "a"],
          answer: ["Levy", "va", "à", "l'école"],
          say: "levy va à l'école.",
          explain: "Il va À l'école : à avec accent, c'est la direction.",
          explainHe: "הוּא הוֹלֵךְ À l'école: à עִם אֶקְסְנֵט, זֶה הַכִּוּוּן."
        },
        {
          type: "pick",
          prompt: "Quelle phrase est bien écrite ?",
          promptHe: "אֵיזֶה מִשְׁפָּט כָּתוּב נָכוֹן?",
          choices: ["Levy est à la maison.", "Levy et à la maison.", "Levy est a la maison."],
          answer: 0,
          say: "levy est à la maison.",
          explain: "Levy ÉTAIT à la maison : est. Et 'à la maison' = un lieu : à avec accent.",
          explainHe: "'Levy était à la maison': לָכֵן est. וְ'à la maison' = מָקוֹם: à עִם אֶקְסְנֵט."
        },
        {
          type: "fill",
          prompt: "Complète la phrase !",
          promptHe: "הַשְׁלִימוּ אֶת הַמִּשְׁפָּט!",
          sentence: "Le chaton ␣ deux ans.",
          choices: ["a", "à", "et"],
          answer: 0,
          say: "le chaton a deux ans.",
          explain: "Le chaton AVAIT deux ans : ça marche, donc verbe avoir, a.",
          explainHe: "'Le chaton avait deux ans' עוֹבֵד: לָכֵן זֶה הַפּוֹעַל avoir, כּוֹתְבִים a."
        },
        {
          type: "read",
          prompt: "Lis cette phrase à voix haute !",
          promptHe: "קִרְאוּ אֶת הַמִּשְׁפָּט בְּקוֹל רָם!",
          text: "Levy est à la piscine\net il a un ballon bleu.",
          say: "levy est à la piscine et il a un ballon bleu.",
          explain: "est, à, et, a : les quatre dans une seule phrase, bravo !",
          explainHe: "est, à, et, a: כָּל הָאַרְבָּעָה בְּמִשְׁפָּט אֶחָד, כָּל הַכָּבוֹד!"
        }
      ],
      joke: {
        q: "Charade ! Mon premier, on le fait avec les pieds en marchant. Mon deuxième est un petit animal gris à longue queue 🐭. Mon troisième tombe des nuages 🌧️. Mon tout te protège... de mon troisième !",
        a: "Un PARAPLUIE ! PAS + RAT + PLUIE. ☔😂",
        qHe: "חִידַת הֲבָרוֹת! אֶת הָרִאשׁוֹן עוֹשִׂים עִם הָרַגְלַיִם כְּשֶׁהוֹלְכִים (PAS - צַעַד). הַשֵּׁנִי הוּא חַיָּה קְטַנָּה וַאֲפֹרָה עִם זָנָב אָרֹךְ (RAT - עַכְבְּרוֹשׁ) 🐭. הַשְּׁלִישִׁי יוֹרֵד מֵהָעֲנָנִים (PLUIE - גֶּשֶׁם) 🌧️. הַכֹּל בְּיַחַד מֵגֵן עֲלֵיכֶם... מֵהַשְּׁלִישִׁי!",
        aHe: "PARAPLUIE (מִטְרִיָּה)! PAS + RAT + PLUIE נִשְׁמָע בְּיַחַד כְּמוֹ 'מִטְרִיָּה' בְּצָרְפָתִית! ☔😂"
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
            title: "on ou ont ? 🎯",
            titleHe: "on אוֹ ont?",
            body: "ont = le verbe avoir avec ils : ils ont un chien (ils avaient). on = quelqu'un, comme il : on joue.",
            bodyHe: "ont = הַפּוֹעַל avoir עִם ils: ils ont un chien (אֶפְשָׁר לְהַגִּיד avaient). on = מִישֶׁהוּ, כְּמוֹ il: on joue.",
            big: "Ils ont un chien. On joue ensemble.",
            say: "ils ont un chien. on joue ensemble."
          },
          {
            title: "son ou sont ? 🎒",
            titleHe: "son אוֹ sont?",
            body: "sont = le verbe être avec ils : ils sont contents (ils étaient). son = à lui : Levy prend son vélo.",
            bodyHe: "sont = הַפּוֹעַל être עִם ils: ils sont contents (אֶפְשָׁר לְהַגִּיד étaient). son = שֶׁלּוֹ: Levy prend son vélo.",
            big: "Ils sont grands. Levy aime son vélo.",
            say: "ils sont grands. levy aime son vélo."
          },
          {
            title: "L'adjectif s'accorde 🎨",
            titleHe: "שֵׁם הַתֹּאַר מַתְאִים אֶת עַצְמוֹ",
            body: "L'adjectif change avec le mot : un vélo bleu, une trottinette bleue. Au féminin, on ajoute souvent un E.",
            bodyHe: "שֵׁם הַתֹּאַר מִשְׁתַּנֶּה עִם הַמִּלָּה: un vélo bleu, une trottinette bleue. בִּנְקֵבָה מוֹסִיפִים בְּדֶרֶךְ כְּלָל E.",
            big: "un vélo bleu 🚲 une trottinette bleue 🛴",
            say: "un vélo bleu. une trottinette bleue."
          }
        ]
      },
      exercises: [
        {
          type: "fill",
          prompt: "on ou ont ? Complète !",
          promptHe: "on אוֹ ont? הַשְׁלִימוּ!",
          sentence: "Levy et son ami ␣ un chien.",
          choices: ["ont", "on"],
          answer: 0,
          say: "levy et son ami ont un chien.",
          explain: "Ils AVAIENT un chien : ça marche ! C'est le verbe avoir, ont.",
          explainHe: "'Ils avaient un chien' עוֹבֵד! זֶה הַפּוֹעַל avoir, כּוֹתְבִים ont."
        },
        {
          type: "fill",
          prompt: "On ou Ont ? Complète !",
          promptHe: "On אוֹ Ont? הַשְׁלִימוּ!",
          sentence: "␣ joue au ballon dans le jardin.",
          choices: ["On", "Ont"],
          answer: 0,
          say: "on joue au ballon dans le jardin.",
          explain: "'IL joue au ballon' marche aussi : on = quelqu'un, comme il.",
          explainHe: "'Il joue au ballon' עוֹבֵד גַּם: on = מִישֶׁהוּ, כְּמוֹ il."
        },
        {
          type: "fill",
          prompt: "son ou sont ? Complète !",
          promptHe: "son אוֹ sont? הַשְׁלִימוּ!",
          sentence: "Levy prend ␣ cartable.",
          choices: ["son", "sont"],
          answer: 0,
          say: "levy prend son cartable.",
          explain: "Le cartable est à lui : son cartable. On ne peut pas dire 'étaient' ici.",
          explainHe: "הַתִּיק שֶׁלּוֹ: son cartable. אִי אֶפְשָׁר לְהַגִּיד 'étaient' כָּאן."
        },
        {
          type: "fill",
          prompt: "son ou sont ? Complète !",
          promptHe: "son אוֹ sont? הַשְׁלִימוּ!",
          sentence: "Les enfants ␣ dans le jardin.",
          choices: ["sont", "son"],
          answer: 0,
          say: "les enfants sont dans le jardin.",
          explain: "Ils ÉTAIENT dans le jardin : c'est le verbe être, sont.",
          explainHe: "'Ils étaient dans le jardin' עוֹבֵד: זֶה הַפּוֹעַל être, כּוֹתְבִים sont."
        },
        {
          type: "pick",
          prompt: "Quelle phrase est bien écrite ?",
          promptHe: "אֵיזֶה מִשְׁפָּט כָּתוּב נָכוֹן?",
          choices: ["Ils sont très contents.", "Ils son très contents.", "Ils sons très contents."],
          answer: 0,
          say: "ils sont très contents.",
          explain: "Ils ÉTAIENT contents : sont avec un T à la fin.",
          explainHe: "'Ils étaient contents': לָכֵן sont עִם T בַּסּוֹף."
        },
        {
          type: "pick",
          prompt: "Choisis le bon adjectif !",
          promptHe: "בַּחֲרוּ אֶת שֵׁם הַתֹּאַר הַנָּכוֹן!",
          question: "une trottinette ___",
          choices: ["bleue", "bleu"],
          answer: 0,
          say: "une trottinette bleue.",
          explain: "Trottinette est féminin : on ajoute un E, bleue.",
          explainHe: "trottinette הִיא נְקֵבָה: מוֹסִיפִים E, bleue."
        },
        {
          type: "fill",
          prompt: "Choisis le bon adjectif !",
          promptHe: "בַּחֲרוּ אֶת שֵׁם הַתֹּאַר הַנָּכוֹן!",
          sentence: "Levy a un vélo ␣.",
          choices: ["vert", "verte"],
          answer: 0,
          say: "levy a un vélo vert.",
          explain: "Vélo est masculin : vert sans E.",
          explainHe: "vélo הוּא זָכָר: vert בְּלִי E."
        },
        {
          type: "match",
          prompt: "Relie chaque mot à son astuce !",
          promptHe: "חַבְּרוּ כָּל מִלָּה לַטְּרִיק שֶׁלָּהּ!",
          pairs: [["ont", "ils avaient"], ["on", "quelqu'un"], ["sont", "ils étaient"], ["son", "à lui 👦"]],
          explain: "ont devient avaient, sont devient étaient. on = quelqu'un, son = à lui.",
          explainHe: "ont הוֹפֵךְ לְ-avaient, sont הוֹפֵךְ לְ-étaient. on = מִישֶׁהוּ, son = שֶׁלּוֹ."
        },
        {
          type: "build",
          prompt: "Assemble : une trottinette bleue !",
          promptHe: "הַרְכִּיבוּ: une trottinette bleue!",
          tiles: ["une", "trottinette", "bleue", "bleu"],
          answer: ["une", "trottinette", "bleue"],
          say: "une trottinette bleue.",
          explain: "Féminin : bleue avec un E à la fin.",
          explainHe: "נְקֵבָה: bleue עִם E בַּסּוֹף."
        },
        {
          type: "type",
          prompt: "Dictée ! Écoute et écris.",
          promptHe: "הַכְתָּבָה! הַקְשִׁיבוּ וְכִתְבוּ.",
          say: "une pomme verte",
          answer: "une pomme verte",
          strict: false,
          explain: "Pomme est féminin : verte avec un E.",
          explainHe: "pomme הִיא נְקֵבָה: verte עִם E."
        }
      ],
      joke: {
        q: "Charade ! Mon premier est une barrière de petits buissons. Mon deuxième se mange beaucoup en Chine 🍚. Mon troisième, on l'entend avec les oreilles. Mon tout est plein de piquants ! 🦔",
        a: "Un HÉRISSON ! 🦔 HAIE + RIZ + SON. Et en plus, SON, tu viens de l'apprendre ! 😉",
        qHe: "חִידַת הֲבָרוֹת! הָרִאשׁוֹן הוּא גָּדֵר שֶׁל שִׂיחִים קְטַנִּים (HAIE). אֶת הַשֵּׁנִי אוֹכְלִים הַרְבֵּה בְּסִין (RIZ - אֹרֶז) 🍚. אֶת הַשְּׁלִישִׁי שׁוֹמְעִים בָּאָזְנַיִם (SON - צְלִיל). הַכֹּל בְּיַחַד מָלֵא קוֹצִים! 🦔",
        aHe: "HÉRISSON (קִפּוֹד)! 🦔 HAIE + RIZ + SON נִשְׁמָע בְּיַחַד כְּמוֹ 'קִפּוֹד' בְּצָרְפָתִית! וּבְנוֹסָף, אֶת SON בְּדִיּוּק לְמַדְתֶּם! 😉"
      }
    },
    {
      id: "n9-s4",
      name: "Le grand défi",
      nameHe: "הָאֶתְגָּר הַגָּדוֹל",
      emoji: "💪",
      lesson: {
        cards: [
          {
            title: "Le grand défi ! 💪",
            titleHe: "הָאֶתְגָּר הַגָּדוֹל!",
            body: "Tu es presque champion ! Verbes, homophones, accords : montre tout ce que tu sais. Levy croit en toi !",
            bodyHe: "אַתֶּם כִּמְעַט אַלּוּפִים! פְּעָלִים, מִלִּים דּוֹמוֹת, הַתְאָמוֹת: תַּרְאוּ כָּל מַה שֶּׁאַתֶּם יוֹדְעִים. Levy מַאֲמִין בָּכֶם!",
            big: "🏆"
          }
        ]
      },
      exercises: [
        {
          type: "pick",
          prompt: "Choisis la bonne forme du verbe !",
          promptHe: "בַּחֲרוּ אֶת הַצּוּרָה הַנְּכוֹנָה שֶׁל הַפּוֹעַל!",
          question: "Nous ___ à la piscine.",
          choices: ["nageons", "nagons", "nagez"],
          answer: 0,
          say: "nous nageons à la piscine.",
          explain: "Nous nageons : avec un E après le G pour garder le son doux.",
          explainHe: "nous nageons: עִם E אַחֲרֵי G כְּדֵי לִשְׁמֹר עַל הַצְּלִיל הָרַךְ."
        },
        {
          type: "fill",
          prompt: "a ou à ? Complète !",
          promptHe: "a אוֹ à? הַשְׁלִימוּ!",
          sentence: "Levy ␣ une kippa neuve.",
          choices: ["a", "à"],
          answer: 0,
          say: "levy a une kippa neuve.",
          explain: "Levy AVAIT une kippa : verbe avoir, a sans accent.",
          explainHe: "'Levy avait une kippa': הַפּוֹעַל avoir, כּוֹתְבִים a בְּלִי אֶקְסְנֵט."
        },
        {
          type: "fill",
          prompt: "est ou et ? Complète !",
          promptHe: "est אוֹ et? הַשְׁלִימוּ!",
          sentence: "Le chat ␣ sur le lit.",
          choices: ["est", "et"],
          answer: 0,
          say: "le chat est sur le lit.",
          explain: "Le chat ÉTAIT sur le lit : verbe être, est.",
          explainHe: "'Le chat était sur le lit': הַפּוֹעַל être, כּוֹתְבִים est."
        },
        {
          type: "fill",
          prompt: "on ou ont ? Complète !",
          promptHe: "on אוֹ ont? הַשְׁלִימוּ!",
          sentence: "Les enfants ␣ des cadeaux de Hanouka.",
          choices: ["ont", "on"],
          answer: 0,
          say: "les enfants ont des cadeaux de hanouka.",
          explain: "Ils AVAIENT des cadeaux : verbe avoir, ont.",
          explainHe: "'Ils avaient des cadeaux': הַפּוֹעַל avoir, כּוֹתְבִים ont."
        },
        {
          type: "fill",
          prompt: "son ou sont ? Complète !",
          promptHe: "son אוֹ sont? הַשְׁלִימוּ!",
          sentence: "La maîtresse prête ␣ stylo à Levy.",
          choices: ["son", "sont"],
          answer: 0,
          say: "la maîtresse prête son stylo à levy.",
          explain: "Le stylo est à elle : son stylo.",
          explainHe: "הָעֵט שֶׁלָּהּ: son stylo."
        },
        {
          type: "pick",
          prompt: "Choisis le bon adjectif !",
          promptHe: "בַּחֲרוּ אֶת שֵׁם הַתֹּאַר הַנָּכוֹן!",
          question: "un ballon ___",
          choices: ["bleu", "bleue"],
          answer: 0,
          say: "un ballon bleu.",
          explain: "Ballon est masculin : bleu sans E.",
          explainHe: "ballon הוּא זָכָר: bleu בְּלִי E."
        },
        {
          type: "build",
          prompt: "Mets la phrase dans l'ordre !",
          promptHe: "סַדְּרוּ אֶת הַמִּשְׁפָּט לְפִי הַסֵּדֶר!",
          tiles: ["On", "chante", "et", "on", "danse", "ont"],
          answer: ["On", "chante", "et", "on", "danse"],
          say: "on chante et on danse.",
          explain: "on = quelqu'un. La tuile 'ont' était un piège !",
          explainHe: "on = מִישֶׁהוּ. הָאָרִיחַ 'ont' הָיָה מַלְכֹּדֶת!"
        },
        {
          type: "listen",
          prompt: "Écoute bien et choisis ce que tu entends !",
          promptHe: "הַקְשִׁיבוּ טוֹב וּבַחֲרוּ מַה שֶּׁשְּׁמַעְתֶּם!",
          say: "vous chantez",
          choices: ["vous chantez", "tu chantes", "ils chantent"],
          answer: 0,
          explain: "Tu as entendu 'vous' : vous chantez, avec -EZ.",
          explainHe: "שְׁמַעְתֶּם 'vous': vous chantez, עִם EZ- בַּסּוֹף."
        },
        {
          type: "type",
          prompt: "Dictée ! Écris la phrase exactement.",
          promptHe: "הַכְתָּבָה! כִּתְבוּ אֶת הַמִּשְׁפָּט בְּדִיּוּק.",
          say: "ils chantent",
          answer: "ils chantent",
          strict: true,
          explain: "Avec ILS, le verbe prend -ENT à la fin, même si on ne l'entend pas : ils chantent.",
          explainHe: "עִם ILS הַפּוֹעַל מְקַבֵּל ENT- בַּסּוֹף, גַּם אִם לֹא שׁוֹמְעִים: ils chantent."
        },
        {
          type: "riddle",
          prompt: "Devinette !",
          promptHe: "חִידָה!",
          question: "Mon premier est un animal qui miaule.\nMon second recouvre tout ton corps.\nMon tout se porte sur la tête.",
          choices: ["un chapeau", "un château", "un chameau"],
          answer: 0,
          say: "mon premier est un animal qui miaule. mon second recouvre tout ton corps. mon tout se porte sur la tête.",
          explain: "CHAT + PEAU = CHAPEAU ! 🎩",
          explainHe: "CHAT (חָתוּל) + PEAU (עוֹר) = CHAPEAU (כּוֹבַע)! 🎩"
        },
        {
          type: "pick",
          prompt: "Lis bien ! Quel mot va dans la phrase ?",
          promptHe: "קִרְאוּ טוֹב! אֵיזוֹ מִלָּה מַתְאִימָה לַמִּשְׁפָּט?",
          question: "Levy boit de l'eau dans un ___.",
          choices: ["vert", "verre"],
          answer: 1,
          say: "levy boit de l'eau dans un verre.",
          explain: "verre, c'est l'objet ou on boit 🥛. vert, c'est la couleur 🟢. Ça se dit pareil, il faut LIRE pour choisir !",
          explainHe: "verre = הַכְּלִי שֶׁשּׁוֹתִים מִמֶּנּוּ 🥛. vert = הַצֶּבַע יָרֹק 🟢. נִשְׁמָע אוֹתוֹ דָּבָר, צָרִיךְ לִקְרֹא כְּדֵי לִבְחֹר!"
        },
        {
          type: "read",
          prompt: "Lis ce petit texte à voix haute !",
          promptHe: "קִרְאוּ אֶת הַקֶּטַע הַקָּצָר בְּקוֹל רָם!",
          text: "On est presque à la fin !\nLevy et la maîtresse sont fiers de toi.\nTu as travaillé comme un champion.\nBravo, on continue ensemble !",
          say: "on est presque à la fin ! levy et la maîtresse sont fiers de toi. tu as travaillé comme un champion. bravo, on continue ensemble !",
          explain: "Quatre phrases avec on, sont, et, as : champion !",
          explainHe: "אַרְבָּעָה מִשְׁפָּטִים עִם on, sont, et, as: אַלּוּפִים!"
        }
      ],
      joke: {
        q: "Charade ! Mon premier sort de la bouche quand on fait de la musique 🎶. Mon deuxième est un oiseau noir et blanc qui adore ce qui brille 🐦. Mon troisième est un petit mot qui veut dire 'quelqu'un'. Mon tout... c'est TOI à la fin de ce niveau !",
        a: "Un CHAMPION ! CHANT + PIE + ON. Bravo, champion ! 🏆🎉",
        qHe: "חִידַת הֲבָרוֹת! הָרִאשׁוֹן יוֹצֵא מֵהַפֶּה כְּשֶׁשָּׁרִים (CHANT - שִׁירָה) 🎶. הַשֵּׁנִי הוּא צִפּוֹר שְׁחֹרָה-לְבָנָה שֶׁאוֹהֶבֶת דְּבָרִים נוֹצְצִים (PIE - עַקְעָק) 🐦. הַשְּׁלִישִׁי הוּא מִלָּה קְטַנָּה שֶׁאוֹמֶרֶת 'מִישֶׁהוּ' (ON). הַכֹּל בְּיַחַד... זֶה אַתֶּם בְּסוֹף הַשָּׁלָב הַזֶּה!",
        aHe: "CHAMPION (אַלּוּף)! CHANT + PIE + ON נִשְׁמָע בְּיַחַד כְּמוֹ 'אַלּוּף' בְּצָרְפָתִית. כָּל הַכָּבוֹד, אַלּוּפִים! 🏆🎉"
      }
    }
  ]
});
