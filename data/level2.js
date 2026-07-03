window.LEVELS = window.LEVELS || [];
window.LEVELS.push({
  id: "n2",
  order: 2,
  name: "Les syllabes",
  nameHe: "הַהֲבָרוֹת",
  emoji: "🧩",
  color: "#C62828",
  tagline: "J'assemble les lettres en syllabes !",
  taglineHe: "אֲנִי מְחַבֵּר אוֹתִיּוֹת לַהֲבָרוֹת!",
  sublevels: [
    {
      id: "n2-s1",
      name: "M et L",
      nameHe: "M וְ-L",
      emoji: "🎵",
      lesson: {
        cards: [
          {
            title: "La recette magique ✨",
            titleHe: "הַמַּתְכּוֹן הַקָּסוּם",
            body: "Une consonne + une voyelle = une syllabe ! On lit de gauche à droite : M puis A, ça fait MA.",
            bodyHe: "עִצּוּר + תְּנוּעָה = הֲבָרָה! קוֹרְאִים מִשְּׂמֹאל לְיָמִין: קֹדֶם M וְאָז A, וְזֶה עוֹשֶׂה MA.",
            big: "M + A = MA",
            say: "mmm et a, ça fait ma !"
          },
          {
            title: "La famille de M 🎶",
            titleHe: "הַמִּשְׁפָּחָה שֶׁל M",
            body: "M chante avec toutes les voyelles : MA ME MI MO MU. Comme au début de MAMAN !",
            bodyHe: "M שָׁרָה עִם כָּל הַתְּנוּעוֹת: MA ME MI MO MU. כְּמוֹ בַּהַתְחָלָה שֶׁל MAMAN!",
            big: "MA ME MI MO MU",
            say: "ma. me. mi. mo. mu."
          },
          {
            title: "La famille de L 🎤",
            titleHe: "הַמִּשְׁפָּחָה שֶׁל L",
            body: "L chante aussi : LA LE LI LO LU. Comme au début de LEVY !",
            bodyHe: "גַּם L שָׁרָה: LA LE LI LO LU. כְּמוֹ בַּהַתְחָלָה שֶׁל LEVY!",
            big: "LA LE LI LO LU",
            say: "la. le. li. lo. lu."
          }
        ]
      },
      exercises: [
        {
          type: "pick",
          prompt: "M + A, ça fait quoi ?",
          promptHe: "M + A, מָה זֶה עוֹשֶׂה?",
          question: "M + A",
          choices: ["MA", "AM", "MU"],
          answer: 0,
          say: "ma",
          explain: "On lit de gauche à droite : M puis A, ça fait MA !",
          explainHe: "קוֹרְאִים מִשְּׂמֹאל לְיָמִין: קֹדֶם M וְאָז A, זֶה עוֹשֶׂה MA!"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis la syllabe !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ אֶת הַהֲבָרָה!",
          say: "mo",
          choices: ["MA", "MO", "MI"],
          answer: 1,
          explain: "Tu as entendu 'mo' : M + O = MO.",
          explainHe: "שְׁמַעְתֶּם 'mo': M וְעוֹד O זֶה MO."
        },
        {
          type: "pick",
          prompt: "L + I, ça fait quoi ?",
          promptHe: "L + I, מָה זֶה עוֹשֶׂה?",
          question: "L + I",
          choices: ["IL", "LU", "LI"],
          answer: 2,
          say: "li",
          explain: "L puis I, ça fait LI. Attention : on lit de gauche à droite !",
          explainHe: "קֹדֶם L וְאָז I, זֶה עוֹשֶׂה LI. זְהִירוּת: קוֹרְאִים מִשְּׂמֹאל לְיָמִין!"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis la syllabe !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ אֶת הַהֲבָרָה!",
          say: "lu",
          choices: ["LO", "LU", "LA"],
          answer: 1,
          explain: "LU : L + U. U fait 'u' avec la bouche toute pointue !",
          explainHe: "LU: L וְעוֹד U. אֶת U אוֹמְרִים עִם שְׂפָתַיִם מְכֻוָּצוֹת!"
        },
        {
          type: "match",
          prompt: "Relie les lettres à leur syllabe !",
          promptHe: "חַבְּרוּ אֶת הָאוֹתִיּוֹת לַהֲבָרָה שֶׁלָּהֶן!",
          pairs: [
            ["M + I", "MI"],
            ["L + A", "LA"],
            ["M + U", "MU"],
            ["L + E", "LE"]
          ],
          explain: "La consonne + la voyelle = la syllabe !",
          explainHe: "עִצּוּר + תְּנוּעָה = הֲבָרָה!"
        },
        {
          type: "pick",
          prompt: "Quelle syllabe commence par M ?",
          promptHe: "אֵיזוֹ הֲבָרָה מַתְחִילָה בְּ-M?",
          choices: ["LU", "MO", "LE"],
          answer: 1,
          say: "mo",
          explain: "MO commence par M. LU et LE commencent par L.",
          explainHe: "MO מַתְחִילָה בְּ-M. אֲבָל LU וְ-LE מַתְחִילוֹת בְּ-L."
        },
        {
          type: "listen",
          prompt: "Écoute bien et choisis !",
          promptHe: "הַקְשִׁיבוּ טוֹב וּבַחֲרוּ!",
          say: "me",
          choices: ["ME", "MI", "LE"],
          answer: 0,
          explain: "ME : M + E. LE commence par L, pas par M.",
          explainHe: "ME זֶה M וְעוֹד E. אֲבָל LE מַתְחִילָה בְּ-L, לֹא בְּ-M."
        },
        {
          type: "pick",
          prompt: "Trouve l'intrus : il ne commence pas par L !",
          promptHe: "מִצְאוּ אֶת הַיּוֹצֵא מִן הַכְּלָל: הוּא לֹא מַתְחִיל בְּ-L!",
          choices: ["LA", "LO", "MU"],
          answer: 2,
          say: "la. lo. mu.",
          explain: "MU commence par M ! LA et LO commencent par L.",
          explainHe: "MU מַתְחִילָה בְּ-M! אֲבָל LA וְ-LO מַתְחִילוֹת בְּ-L."
        },
        {
          type: "listen",
          prompt: "Écoute et choisis la syllabe !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ אֶת הַהֲבָרָה!",
          say: "la",
          choices: ["MA", "LA", "LO"],
          answer: 1,
          explain: "Tu as entendu 'la' : L + A = LA.",
          explainHe: "שְׁמַעְתֶּם 'la': L וְעוֹד A זֶה LA."
        }
      ],
      joke: {
        q: "Que dit le stylo 🖊️ au crayon ✏️ ?",
        a: "Tu as bonne mine ! 😄",
        qHe: "מָה אוֹמֵר הָעֵט 🖊️ לָעִפָּרוֹן ✏️?",
        aHe: "Tu as bonne mine! בְּצָרְפָתִית 'mine' זֶה גַּם הַחֹד שֶׁל הָעִפָּרוֹן וְגַם מַרְאֶה הַפָּנִים. זֶה כְּמוֹ לְהַגִּיד: אַתָּה נִרְאֶה מְצֻיָּן! 😄"
      }
    },
    {
      id: "n2-s2",
      name: "S et R",
      nameHe: "S וְ-R",
      emoji: "🐍",
      lesson: {
        cards: [
          {
            title: "S siffle comme un serpent 🐍",
            titleHe: "S שׁוֹרֶקֶת כְּמוֹ נָחָשׁ",
            body: "SSS... S chante avec les voyelles : SA SE SI SO SU. Comme au début de SALAMI !",
            bodyHe: "SSS... הָאוֹת S שָׁרָה עִם הַתְּנוּעוֹת: SA SE SI SO SU. כְּמוֹ בַּהַתְחָלָה שֶׁל SALAMI!",
            big: "SA SE SI SO SU",
            say: "sss. sa. se. si. so. su."
          },
          {
            title: "R ronronne comme un moteur 🏎️",
            titleHe: "R מְגַרְגֶּרֶת כְּמוֹ מָנוֹעַ",
            body: "RRR... comme une moto qui démarre ! R chante : RA RE RI RO RU.",
            bodyHe: "RRR... כְּמוֹ אוֹפַנּוֹעַ שֶׁמַּתְנִיעַ! הָאוֹת R שָׁרָה: RA RE RI RO RU.",
            big: "RA RE RI RO RU",
            say: "rrr. ra. re. ri. ro. ru."
          },
          {
            title: "On mélange tout ! 🎨",
            titleHe: "מְעַרְבְּבִים הַכֹּל!",
            body: "Tu connais déjà M, L, S et R. Écoute bien : SI et RI, ce n'est pas pareil !",
            bodyHe: "אַתֶּם כְּבָר מַכִּירִים אֶת M, L, S וְ-R. הַקְשִׁיבוּ טוֹב: SI וְ-RI זֶה לֹא אוֹתוֹ דָּבָר!",
            big: "M L S R",
            say: "si. ri."
          }
        ]
      },
      exercises: [
        {
          type: "pick",
          prompt: "S + A, ça fait quoi ?",
          promptHe: "S + A, מָה זֶה עוֹשֶׂה?",
          question: "S + A",
          choices: ["AS", "SA", "SO"],
          answer: 1,
          say: "sa",
          explain: "S puis A, ça fait SA. On lit de gauche à droite !",
          explainHe: "קֹדֶם S וְאָז A, זֶה עוֹשֶׂה SA. קוֹרְאִים מִשְּׂמֹאל לְיָמִין!"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis la syllabe !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ אֶת הַהֲבָרָה!",
          say: "ri",
          choices: ["RI", "RO", "LI"],
          answer: 0,
          explain: "RI : R + I. On entend 'rrr' au début.",
          explainHe: "RI: R וְעוֹד I. שׁוֹמְעִים 'rrr' בַּהַתְחָלָה."
        },
        {
          type: "pick",
          prompt: "R + U, ça fait quoi ?",
          promptHe: "R + U, מָה זֶה עוֹשֶׂה?",
          question: "R + U",
          choices: ["RU", "UR", "RO"],
          answer: 0,
          say: "ru",
          explain: "R puis U, ça fait RU.",
          explainHe: "קֹדֶם R וְאָז U, זֶה עוֹשֶׂה RU."
        },
        {
          type: "listen",
          prompt: "Écoute et choisis la syllabe !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ אֶת הַהֲבָרָה!",
          say: "so",
          choices: ["SU", "SO", "RO"],
          answer: 1,
          explain: "SO : S + O. SU finit par U, et RO commence par R.",
          explainHe: "SO זֶה S וְעוֹד O. אֲבָל SU נִגְמֶרֶת בְּ-U וְ-RO מַתְחִילָה בְּ-R."
        },
        {
          type: "match",
          prompt: "Relie les lettres à la bonne syllabe !",
          promptHe: "חַבְּרוּ אֶת הָאוֹתִיּוֹת לַהֲבָרָה הַנְּכוֹנָה!",
          pairs: [
            ["S + I", "SI"],
            ["R + A", "RA"],
            ["S + U", "SU"],
            ["R + E", "RE"]
          ],
          explain: "La consonne + la voyelle = la syllabe !",
          explainHe: "עִצּוּר + תְּנוּעָה = הֲבָרָה!"
        },
        {
          type: "pick",
          prompt: "Trouve l'intrus : il ne commence pas par S !",
          promptHe: "מִצְאוּ אֶת הַיּוֹצֵא מִן הַכְּלָל: הוּא לֹא מַתְחִיל בְּ-S!",
          choices: ["SA", "RE", "SI"],
          answer: 1,
          say: "sa. re. si.",
          explain: "RE commence par R ! SA et SI commencent par S.",
          explainHe: "RE מַתְחִילָה בְּ-R! אֲבָל SA וְ-SI מַתְחִילוֹת בְּ-S."
        },
        {
          type: "listen",
          prompt: "Écoute bien et choisis !",
          promptHe: "הַקְשִׁיבוּ טוֹב וּבַחֲרוּ!",
          say: "se",
          choices: ["RE", "SE", "LE"],
          answer: 1,
          explain: "SE : le serpent SSS + E.",
          explainHe: "SE: הַנָּחָשׁ SSS וְעוֹד E."
        },
        {
          type: "pick",
          prompt: "Quelle syllabe finit par O ?",
          promptHe: "אֵיזוֹ הֲבָרָה נִגְמֶרֶת בְּ-O?",
          choices: ["RO", "RA", "SI"],
          answer: 0,
          say: "ro",
          explain: "RO finit par O. RA finit par A, SI finit par I.",
          explainHe: "RO נִגְמֶרֶת בְּ-O. אֲבָל RA נִגְמֶרֶת בְּ-A וְ-SI נִגְמֶרֶת בְּ-I."
        },
        {
          type: "listen",
          prompt: "Écoute et choisis la syllabe !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ אֶת הַהֲבָרָה!",
          say: "ra",
          choices: ["RA", "LA", "MA"],
          answer: 0,
          explain: "RA : on entend 'rrr' au début, comme un moteur !",
          explainHe: "RA: שׁוֹמְעִים 'rrr' בַּהַתְחָלָה, כְּמוֹ מָנוֹעַ!"
        }
      ],
      joke: {
        q: "Pourquoi le livre de maths 📖 est-il triste 😢 ?",
        a: "Parce qu'il a trop de problèmes ! 😂",
        qHe: "לָמָּה סֵפֶר הַחֶשְׁבּוֹן 📖 עָצוּב 😢?",
        aHe: "כִּי יֵשׁ לוֹ יוֹתֵר מִדַּי בְּעָיוֹת! 😂"
      }
    },
    {
      id: "n2-s3",
      name: "P, T et les mots",
      nameHe: "P, T וְהַמִּלִּים",
      emoji: "🏍️",
      lesson: {
        cards: [
          {
            title: "La famille de P 🫧",
            titleHe: "הַמִּשְׁפָּחָה שֶׁל P",
            body: "P pétille : PA PE PI PO PU. Comme au début de PAPA !",
            bodyHe: "P מִתְפּוֹצֶצֶת כְּמוֹ בּוּעָה: PA PE PI PO PU. כְּמוֹ בַּהַתְחָלָה שֶׁל PAPA!",
            big: "PA PE PI PO PU",
            say: "pa. pe. pi. po. pu."
          },
          {
            title: "La famille de T 🥁",
            titleHe: "הַמִּשְׁפָּחָה שֶׁל T",
            body: "T tape : TA TE TI TO TU. Comme au début de TOMATE !",
            bodyHe: "T מְתַקְתֶּקֶת: TA TE TI TO TU. כְּמוֹ בַּהַתְחָלָה שֶׁל TOMATE!",
            big: "TA TE TI TO TU",
            say: "ta. te. ti. to. tu."
          },
          {
            title: "Des syllabes aux mots ! 🧱",
            titleHe: "מֵהֲבָרוֹת לְמִלִּים!",
            body: "Deux syllabes ensemble font un mot : PA + PA = PAPA, et MO + TO = MOTO !",
            bodyHe: "שְׁתֵּי הֲבָרוֹת בְּיַחַד עוֹשׂוֹת מִלָּה: PA + PA = PAPA, וְגַם MO + TO = MOTO!",
            big: "PA + PA = PAPA",
            say: "pa. pa. papa !"
          },
          {
            title: "Le S qui dort 😴",
            titleHe: "הַ-S שֶׁיְּשֵׁנָה",
            body: "Dans TAPIS, le S de la fin dort : on ne l'entend pas. On lit 'tapi' !",
            bodyHe: "בַּמִּלָּה TAPIS הָאוֹת S שֶׁבַּסּוֹף יְשֵׁנָה: לֹא שׁוֹמְעִים אוֹתָהּ. קוֹרְאִים 'tapi'!",
            big: "TAPIS",
            say: "tapis"
          }
        ]
      },
      exercises: [
        {
          type: "pick",
          prompt: "P + O, ça fait quoi ?",
          promptHe: "P + O, מָה זֶה עוֹשֶׂה?",
          question: "P + O",
          choices: ["OP", "PO", "PU"],
          answer: 1,
          say: "po",
          explain: "P puis O, ça fait PO. On lit de gauche à droite !",
          explainHe: "קֹדֶם P וְאָז O, זֶה עוֹשֶׂה PO. קוֹרְאִים מִשְּׂמֹאל לְיָמִין!"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis la syllabe !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ אֶת הַהֲבָרָה!",
          say: "tu",
          choices: ["TU", "TI", "PU"],
          answer: 0,
          explain: "TU : T + U.",
          explainHe: "TU זֶה T וְעוֹד U."
        },
        {
          type: "build",
          prompt: "Assemble le mot PAPA !",
          promptHe: "הַרְכִּיבוּ אֶת הַמִּלָּה PAPA!",
          tiles: ["PA", "PO", "PA"],
          answer: ["PA", "PA"],
          say: "papa",
          explain: "PA + PA = PAPA !",
          explainHe: "PA וְעוֹד PA = PAPA!"
        },
        {
          type: "build",
          prompt: "Assemble le mot MOTO ! 🏍️",
          promptHe: "הַרְכִּיבוּ אֶת הַמִּלָּה MOTO! 🏍️",
          tiles: ["TO", "MO", "MA"],
          answer: ["MO", "TO"],
          say: "moto",
          explain: "MO + TO = MOTO ! Vroum vroum !",
          explainHe: "MO וְעוֹד TO = MOTO! בְּרוֹם בְּרוֹם!"
        },
        {
          type: "match",
          prompt: "Relie chaque mot à son image !",
          promptHe: "חַבְּרוּ כָּל מִלָּה לַתְּמוּנָה שֶׁלָּהּ!",
          pairs: [
            ["PAPA", "👨"],
            ["MOTO", "🏍️"],
            ["TOMATE", "🍅"],
            ["PIRATE", "🏴‍☠️"]
          ],
          explain: "Bravo ! Tu lis déjà des vrais mots !",
          explainHe: "כָּל הַכָּבוֹד! אַתֶּם כְּבָר קוֹרְאִים מִלִּים אֲמִתִּיּוֹת!"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis le mot !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ אֶת הַמִּלָּה!",
          say: "pirate",
          choices: ["PIRATE", "PILOTE", "TOMATE"],
          answer: 0,
          explain: "PI-RA-TE : on entend RA au milieu, pas LO !",
          explainHe: "PI-RA-TE: שׁוֹמְעִים RA בָּאֶמְצַע, לֹא LO!"
        },
        {
          type: "pick",
          prompt: "Quel mot va avec l'image ?",
          promptHe: "אֵיזוֹ מִלָּה מַתְאִימָה לַתְּמוּנָה?",
          question: "🍅",
          choices: ["TOMATE", "MOTO", "TAPIS"],
          answer: 0,
          say: "tomate",
          explain: "TO-MA-TE, c'est la tomate toute rouge !",
          explainHe: "TO-MA-TE, זֹאת הָעַגְבָנִיָּה הָאֲדֻמָּה!"
        },
        {
          type: "build",
          prompt: "Assemble le mot TOMATE !",
          promptHe: "הַרְכִּיבוּ אֶת הַמִּלָּה TOMATE!",
          tiles: ["MA", "TO", "TE", "TU"],
          answer: ["TO", "MA", "TE"],
          say: "tomate",
          explain: "TO + MA + TE = TOMATE !",
          explainHe: "TO וְעוֹד MA וְעוֹד TE = TOMATE!"
        },
        {
          type: "pick",
          prompt: "Quel mot va avec l'image ?",
          promptHe: "אֵיזוֹ מִלָּה מַתְאִימָה לַתְּמוּנָה?",
          question: "🧑‍✈️",
          choices: ["PILOTE", "PIRATE", "SALAMI"],
          answer: 0,
          say: "pilote",
          explain: "PI-LO-TE : le pilote de l'avion !",
          explainHe: "PI-LO-TE: הַטַּיָּס שֶׁל הַמָּטוֹס!"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis le mot !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ אֶת הַמִּלָּה!",
          say: "tapis",
          choices: ["TAPIS", "TOMATE", "PIRATE"],
          answer: 0,
          explain: "TAPIS : le S de la fin dort, on lit 'tapi' !",
          explainHe: "TAPIS: הָאוֹת S שֶׁבַּסּוֹף יְשֵׁנָה, קוֹרְאִים 'tapi'!"
        }
      ],
      joke: {
        q: "Pourquoi la maîtresse porte des lunettes de soleil 🕶️ ?",
        a: "Parce que ses élèves sont brillants ! ✨😎",
        qHe: "לָמָּה הַמּוֹרָה מַרְכִּיבָה מִשְׁקְפֵי שֶׁמֶשׁ 🕶️?",
        aHe: "כִּי הַתַּלְמִידִים שֶׁלָּהּ מַבְרִיקִים! ✨😎"
      }
    },
    {
      id: "n2-s4",
      name: "Le grand défi",
      nameHe: "הָאֶתְגָּר הַגָּדוֹל",
      emoji: "🏆",
      lesson: {
        cards: [
          {
            title: "Le grand défi ! 🏆",
            titleHe: "הָאֶתְגָּר הַגָּדוֹל!",
            body: "Bravo, tu connais M, L, S, R, P et T ! Levy est fier de toi. Montre tout ce que tu sais lire !",
            bodyHe: "כָּל הַכָּבוֹד, אַתֶּם מַכִּירִים אֶת M, L, S, R, P וְ-T! לֵוִי גֵּאֶה בָּכֶם. תַּרְאוּ כָּל מָה שֶׁאַתֶּם יוֹדְעִים לִקְרֹא!",
            big: "M L S R P T",
            say: "à toi de jouer !"
          }
        ]
      },
      exercises: [
        {
          type: "listen",
          prompt: "Écoute et choisis la syllabe !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ אֶת הַהֲבָרָה!",
          say: "mu",
          choices: ["MU", "MO", "LU"],
          answer: 0,
          explain: "MU : M + U.",
          explainHe: "MU זֶה M וְעוֹד U."
        },
        {
          type: "pick",
          prompt: "T + I, ça fait quoi ?",
          promptHe: "T + I, מָה זֶה עוֹשֶׂה?",
          question: "T + I",
          choices: ["IT", "TI", "TU"],
          answer: 1,
          say: "ti",
          explain: "T puis I, ça fait TI. On lit de gauche à droite !",
          explainHe: "קֹדֶם T וְאָז I, זֶה עוֹשֶׂה TI. קוֹרְאִים מִשְּׂמֹאל לְיָמִין!"
        },
        {
          type: "build",
          prompt: "Assemble le mot MAMAN !",
          promptHe: "הַרְכִּיבוּ אֶת הַמִּלָּה MAMAN!",
          tiles: ["MAN", "MA", "MO"],
          answer: ["MA", "MAN"],
          say: "maman",
          explain: "MA + MAN = MAMAN !",
          explainHe: "MA וְעוֹד MAN = MAMAN!"
        },
        {
          type: "match",
          prompt: "Relie les lettres à leur syllabe !",
          promptHe: "חַבְּרוּ אֶת הָאוֹתִיּוֹת לַהֲבָרָה שֶׁלָּהֶן!",
          pairs: [
            ["P + I", "PI"],
            ["T + O", "TO"],
            ["R + U", "RU"],
            ["S + E", "SE"]
          ],
          explain: "La consonne + la voyelle = la syllabe !",
          explainHe: "עִצּוּר + תְּנוּעָה = הֲבָרָה!"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis le mot !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ אֶת הַמִּלָּה!",
          say: "salami",
          choices: ["SALAMI", "TOMATE", "PILOTE"],
          answer: 0,
          explain: "SA-LA-MI : trois syllabes ! Miam !",
          explainHe: "SA-LA-MI: שָׁלוֹשׁ הֲבָרוֹת! טָעִים!"
        },
        {
          type: "pick",
          prompt: "Quelle syllabe finit par U ?",
          promptHe: "אֵיזוֹ הֲבָרָה נִגְמֶרֶת בְּ-U?",
          choices: ["SU", "SA", "SO"],
          answer: 0,
          say: "su",
          explain: "SU finit par U. SA finit par A, SO finit par O.",
          explainHe: "SU נִגְמֶרֶת בְּ-U. אֲבָל SA נִגְמֶרֶת בְּ-A וְ-SO נִגְמֶרֶת בְּ-O."
        },
        {
          type: "build",
          prompt: "Assemble le mot PILOTE !",
          promptHe: "הַרְכִּיבוּ אֶת הַמִּלָּה PILOTE!",
          tiles: ["LO", "PI", "TE", "PA"],
          answer: ["PI", "LO", "TE"],
          say: "pilote",
          explain: "PI + LO + TE = PILOTE !",
          explainHe: "PI וְעוֹד LO וְעוֹד TE = PILOTE!"
        },
        {
          type: "listen",
          prompt: "Écoute bien et choisis !",
          promptHe: "הַקְשִׁיבוּ טוֹב וּבַחֲרוּ!",
          say: "re",
          choices: ["RE", "RA", "LE"],
          answer: 0,
          explain: "RE : R + E. On entend 'rrr' au début.",
          explainHe: "RE: R וְעוֹד E. שׁוֹמְעִים 'rrr' בַּהַתְחָלָה."
        },
        {
          type: "pick",
          prompt: "Quel mot va avec l'image ?",
          promptHe: "אֵיזוֹ מִלָּה מַתְאִימָה לַתְּמוּנָה?",
          question: "🏴‍☠️",
          choices: ["PIRATE", "PILOTE", "PAPA"],
          answer: 0,
          say: "pirate",
          explain: "PI-RA-TE : le pirate du bateau !",
          explainHe: "PI-RA-TE: הַפִּירָאט שֶׁל הַסְּפִינָה!"
        },
        {
          type: "match",
          prompt: "Relie chaque mot à son image !",
          promptHe: "חַבְּרוּ כָּל מִלָּה לַתְּמוּנָה שֶׁלָּהּ!",
          pairs: [
            ["PILOTE", "🧑‍✈️"],
            ["MOTO", "🏍️"],
            ["TOMATE", "🍅"]
          ],
          explain: "Super ! Tu lis des mots entiers !",
          explainHe: "מְעֻלֶּה! אַתֶּם קוֹרְאִים מִלִּים שְׁלֵמוֹת!"
        },
        {
          type: "build",
          prompt: "Assemble le mot PIRATE !",
          promptHe: "הַרְכִּיבוּ אֶת הַמִּלָּה PIRATE!",
          tiles: ["RA", "PI", "TE", "RO"],
          answer: ["PI", "RA", "TE"],
          say: "pirate",
          explain: "PI + RA + TE = PIRATE !",
          explainHe: "PI וְעוֹד RA וְעוֹד TE = PIRATE!"
        },
        {
          type: "pick",
          prompt: "Combien de syllabes dans TOMATE ?",
          promptHe: "כַּמָּה הֲבָרוֹת יֵשׁ בַּמִּלָּה TOMATE?",
          question: "TOMATE",
          choices: ["2", "3", "4"],
          answer: 1,
          say: "to. ma. te.",
          explain: "TO-MA-TE : trois syllabes !",
          explainHe: "TO-MA-TE: שָׁלוֹשׁ הֲבָרוֹת!"
        }
      ],
      joke: {
        q: "Quel est le comble pour un professeur de géographie 🌍 ?",
        a: "Perdre le nord ! 🧭😂",
        qHe: "מָה הַשִּׂיא בִּשְׁבִיל מוֹרֶה לְגֵאוֹגְרַפְיָה 🌍?",
        aHe: "לְאַבֵּד אֶת הַצָּפוֹן! 🧭😂 (גַּם בְּעִבְרִית זֶה אוֹמֵר לְהִתְבַּלְבֵּל לְגַמְרֵי)"
      }
    }
  ]
});
