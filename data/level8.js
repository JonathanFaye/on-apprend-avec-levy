window.LEVELS = window.LEVELS || [];
window.LEVELS.push({
  id: "n8",
  order: 8,
  name: "Le français costaud",
  nameHe: "צָרְפָתִית חֲזָקָה",
  emoji: "💪",
  color: "#4527A0",
  tagline: "Je deviens fort en français !",
  taglineHe: "אֲנִי נִהְיֶה חָזָק בְּצָרְפָתִית!",
  sublevels: [
    {
        "id": "n8-s0-grammaire",
        "name": "La grammaire en douceur",
        "nameHe": "הַדִּקְדּוּק בְּעֲדִינוּת",
        "emoji": "🌱",
        "lesson": {
            "cards": [
                {
                    "title": "Tu parles déjà français ! 🗣️",
                    "titleHe": "אַתָּה כְּבָר מְדַבֵּר צָרְפָתִית! 🗣️",
                    "body": "Tu dis déjà 'un chat', 'une fleur' sans y penser. Chaque mot est un garçon (masculin) ou une fille (féminin). Ici, tu vas juste apprendre à le VOIR écrit.",
                    "bodyHe": "אַתָּה כְּבָר אוֹמֵר 'un chat', 'une fleur' בְּלִי לַחְשֹׁב. כָּל מִלָּה הִיא יֶלֶד (זָכָר) אוֹ יַלְדָּה (נְקֵבָה). כָּאן אַתָּה פָּשׁוּט תִּלְמַד לִרְאוֹת אוֹתָהּ כְּתוּבָה.",
                    "big": "un / une",
                    "say": "un chat. une fleur."
                },
                {
                    "title": "un, une, le, la 🔑",
                    "titleHe": "un, une, le, la 🔑",
                    "body": "Pour un garçon : un, le. Pour une fille : une, la. Un chien, le chien. Une poule, la poule. Tu le dis déjà tout seul !",
                    "bodyHe": "לְיֶלֶד: un, le. לְיַלְדָּה: une, la. Un chien, le chien. Une poule, la poule. אַתָּה כְּבָר אוֹמֵר אֶת זֶה לְבַד!",
                    "big": "un le / une la",
                    "say": "un chien. le chien. une poule. la poule."
                },
                {
                    "title": "Un ou plusieurs ? le petit s ✏️",
                    "titleHe": "אֶחָד אוֹ הַרְבֵּה? הַ-s הַקָּטָן ✏️",
                    "body": "Quand il y en a plusieurs, on ajoute souvent un petit 's' à la fin. Un chat, des chats. On ne l'entend pas, mais on l'écrit !",
                    "bodyHe": "כְּשֶׁיֵּשׁ הַרְבֵּה, לְרֹב מוֹסִיפִים 's' קָטָן בַּסּוֹף. Un chat, des chats. לֹא שׁוֹמְעִים אוֹתוֹ, אֲבָל כּוֹתְבִים אוֹתוֹ!",
                    "big": "un chat, des chats",
                    "say": "un chat. des chats."
                }
            ]
        },
        "exercises": [
            {
                "type": "pick",
                "prompt": "Quel petit mot va avec fleur ?",
                "promptHe": "אֵיזוֹ מִלָּה קְטַנָּה הוֹלֶכֶת עִם fleur?",
                "question": "🌸 fleur",
                "choices": [
                    "une",
                    "un"
                ],
                "answer": 0,
                "say": "une fleur",
                "explain": "On dit UNE fleur : fleur est un mot féminin, une fille.",
                "explainHe": "אוֹמְרִים UNE fleur: fleur הִיא מִלָּה נְקֵבָה, יַלְדָּה."
            },
            {
                "type": "pick",
                "prompt": "Quel petit mot va avec chien ?",
                "promptHe": "אֵיזוֹ מִלָּה קְטַנָּה הוֹלֶכֶת עִם chien?",
                "question": "🐶 chien",
                "choices": [
                    "un",
                    "une"
                ],
                "answer": 0,
                "say": "un chien",
                "explain": "On dit UN chien : chien est un mot masculin, un garçon.",
                "explainHe": "אוֹמְרִים UN chien: chien הוּא מִלָּה זָכָר, יֶלֶד."
            },
            {
                "type": "listen",
                "prompt": "Écoute : un ou une ?",
                "promptHe": "הַקְשִׁיבוּ: un אוֹ une?",
                "choices": [
                    "une",
                    "un"
                ],
                "answer": 0,
                "say": "une pomme",
                "explain": "Tu as entendu 'une pomme'. Pomme est féminin.",
                "explainHe": "שָׁמַעְתָּ 'une pomme'. pomme הִיא נְקֵבָה."
            },
            {
                "type": "fill",
                "prompt": "Complète avec le bon petit mot !",
                "promptHe": "הַשְׁלִימוּ עִם הַמִּלָּה הַקְּטַנָּה הַנְּכוֹנָה!",
                "choices": [
                    "le",
                    "la",
                    "une"
                ],
                "answer": 0,
                "sentence": "␣ soleil brille.",
                "say": "le soleil brille",
                "explain": "On dit LE soleil : soleil est masculin.",
                "explainHe": "אוֹמְרִים LE soleil: soleil הוּא זָכָר."
            },
            {
                "type": "pick",
                "prompt": "Lis bien : quel mot dit plusieurs ?",
                "promptHe": "קִרְאוּ הֵיטֵב: אֵיזוֹ מִלָּה אוֹמֶרֶת הַרְבֵּה?",
                "choices": [
                    "les chats",
                    "le chat"
                ],
                "answer": 0,
                "say": "les chats",
                "explain": "'les chats' a le mot 'les' et un s : c'est plusieurs. 'le chat', c'est un seul.",
                "explainHe": "לְ-'les chats' יֵשׁ הַמִּלָּה 'les' וְ-s: זֶה הַרְבֵּה. 'le chat' זֶה אֶחָד בִּלְבַד."
            },
            {
                "type": "fill",
                "prompt": "Plusieurs ! Ajoute la bonne lettre.",
                "promptHe": "הַרְבֵּה! הוֹסִיפוּ אֶת הָאוֹת הַנְּכוֹנָה.",
                "choices": [
                    "s",
                    "t",
                    "e"
                ],
                "answer": 0,
                "sentence": "il y a deux chien␣.",
                "say": "deux chiens",
                "explain": "Plusieurs chiens : on ajoute un 's' à la fin, chienS.",
                "explainHe": "הַרְבֵּה chiens: מוֹסִיפִים 's' בַּסּוֹף, chienS."
            },
            {
                "type": "pick",
                "prompt": "Lis bien : un seul ou plusieurs ?",
                "promptHe": "קִרְאוּ הֵיטֵב: אֶחָד אוֹ הַרְבֵּה?",
                "question": "des poissons",
                "choices": [
                    "plusieurs",
                    "un seul"
                ],
                "answer": 0,
                "say": "des poissons",
                "explain": "'des poissons' : le mot 'des' et le s disent qu'il y en a plusieurs. Un seul, ce serait 'un poisson'.",
                "explainHe": "'des poissons': הַמִּלָּה 'des' וְהַ-s אוֹמְרוֹת שֶׁיֵּשׁ הַרְבֵּה. אֶחָד בִּלְבַד זֶה 'un poisson'."
            },
            {
                "type": "build",
                "prompt": "Assemble : plusieurs chats !",
                "promptHe": "הַרְכִּיבוּ: הַרְבֵּה chats!",
                "answer": [
                    "des",
                    "chats"
                ],
                "tiles": [
                    "chats",
                    "des",
                    "un",
                    "chat"
                ],
                "say": "des chats",
                "explain": "Plusieurs : DES chats, avec un 's' à la fin !",
                "explainHe": "הַרְבֵּה: DES chats, עִם 's' בַּסּוֹף!"
            },
            {
                "type": "pick",
                "prompt": "Lis bien : combien de chiens ?",
                "promptHe": "קִרְאוּ הֵיטֵב: כַּמָּה chiens?",
                "question": "les chiens",
                "choices": [
                    "plusieurs 🐶🐶",
                    "un seul 🐶"
                ],
                "answer": 0,
                "say": "les chiens",
                "explain": "Le mot 'chiens' a un 's' : c'est plusieurs chiens !",
                "explainHe": "לַמִּלָּה 'chiens' יֵשׁ 's': זֶה הַרְבֵּה chiens!"
            }
        ],
        "joke": {
            "q": "Que dit un mot féminin à un mot masculin ? 💬",
            "a": "Toi et moi, on s'accorde bien ! 😄",
            "qHe": "מָה אוֹמֶרֶת מִלָּה נְקֵבָה לְמִלָּה זָכָר? 💬",
            "aHe": "אֲנַחְנוּ מַתְאִימִים כָּל כָּךְ טוֹב יַחַד! 😄"
        }
    },

    {
      id: "n8-s1",
      name: "Masculin ou féminin ?",
      nameHe: "זָכָר אוֹ נְקֵבָה?",
      emoji: "👫",
      lesson: {
        cards: [
          {
            title: "Masculin ou féminin ? 👫",
            titleHe: "זָכָר אוֹ נְקֵבָה?",
            body: "En français, chaque nom est masculin ou féminin. Un garçon, c'est masculin. Une fille, c'est féminin.",
            bodyHe: "בְּצָרְפָתִית, כָּל שֵׁם עֶצֶם הוּא זָכָר אוֹ נְקֵבָה. garçon (יֶלֶד) זֶה זָכָר. fille (יַלְדָּה) זֶה נְקֵבָה.",
            big: "le garçon • la fille",
            say: "le garçon. la fille."
          },
          {
            title: "le ou la ? 🤔",
            titleHe: "le אוֹ la?",
            body: "Devant un mot masculin, on met le. Devant un mot féminin, on met la. Le chat, la maison.",
            bodyHe: "לִפְנֵי מִלָּה בְּזָכָר שָׂמִים le. לִפְנֵי מִלָּה בִּנְקֵבָה שָׂמִים la. le chat, la maison.",
            big: "le chat • la maison",
            say: "le chat. la maison."
          },
          {
            title: "un ou une ? 🍎",
            titleHe: "un אוֹ une?",
            body: "Un pour le masculin, une pour le féminin. Un vélo, une pomme.",
            bodyHe: "un לְזָכָר, une לַנְּקֵבָה. un vélo, une pomme.",
            big: "un vélo • une pomme",
            say: "un vélo. une pomme."
          },
          {
            title: "La famille des animaux 🐾",
            titleHe: "מִשְׁפַּחַת הַחַיּוֹת",
            body: "Parfois, le mot change au féminin : le chat, la chatte. Le chien, la chienne.",
            bodyHe: "לִפְעָמִים הַמִּלָּה מִשְׁתַּנָּה בִּנְקֵבָה: le chat (חָתוּל), la chatte (חֲתוּלָה). le chien (כֶּלֶב), la chienne (כַּלְבָּה).",
            big: "chat → chatte",
            say: "le chat. la chatte. le chien. la chienne."
          }
        ]
      },
      exercises: [
        {
          type: "pick",
          prompt: "Choisis : le ou la ?",
          promptHe: "בַּחֲרוּ: le אוֹ la?",
          question: "___ garçon",
          choices: ["le", "la"],
          answer: 0,
          say: "le garçon",
          explain: "Garçon est un mot masculin : on dit le garçon.",
          explainHe: "garçon (יֶלֶד) הִיא מִלָּה בְּזָכָר: אוֹמְרִים le garçon."
        },
        {
          type: "pick",
          prompt: "Choisis : le ou la ?",
          promptHe: "בַּחֲרוּ: le אוֹ la?",
          question: "___ fille",
          choices: ["le", "la"],
          answer: 1,
          say: "la fille",
          explain: "Fille est un mot féminin : on dit la fille.",
          explainHe: "fille (יַלְדָּה) הִיא מִלָּה בִּנְקֵבָה: אוֹמְרִים la fille."
        },
        {
          type: "fill",
          prompt: "Complète la phrase !",
          promptHe: "הַשְׁלִימוּ אֶת הַמִּשְׁפָּט!",
          sentence: "Levy a ␣ vélo bleu.",
          choices: ["un", "une", "des"],
          answer: 0,
          say: "Levy a un vélo bleu.",
          explain: "Vélo est masculin : un vélo.",
          explainHe: "vélo (אוֹפַנַּיִם) הִיא מִלָּה בְּזָכָר בְּצָרְפָתִית: un vélo."
        },
        {
          type: "fill",
          prompt: "Complète la phrase !",
          promptHe: "הַשְׁלִימוּ אֶת הַמִּשְׁפָּט!",
          sentence: "Levy mange ␣ pomme.",
          choices: ["une", "un", "le"],
          answer: 0,
          say: "Levy mange une pomme.",
          explain: "Pomme est féminin : une pomme.",
          explainHe: "pomme (תַּפּוּחַ) הִיא מִלָּה בִּנְקֵבָה בְּצָרְפָתִית: une pomme."
        },
        {
          type: "match",
          prompt: "Relie le masculin à son féminin !",
          promptHe: "חַבְּרוּ אֶת הַזָּכָר לַנְּקֵבָה שֶׁלּוֹ!",
          pairs: [
            ["le garçon", "la fille"],
            ["le chat", "la chatte"],
            ["le chien", "la chienne"]
          ],
          explain: "Garçon et fille, chat et chatte, chien et chienne !",
          explainHe: "יֶלֶד וְיַלְדָּה, חָתוּל וַחֲתוּלָה, כֶּלֶב וְכַלְבָּה!"
        },
        {
          type: "pick",
          prompt: "Lis bien : où est écrit le féminin ?",
          promptHe: "קִרְאוּ הֵיטֵב: אֵיפֹה כָּתוּב הַנְּקֵבָה?",
          choices: ["une amie", "un ami"],
          answer: 0,
          say: "une amie",
          explain: "'une amie' est féminin : le petit mot 'une' et un e à la fin (amiE). 'un ami' est masculin.",
          explainHe: "'une amie' הִיא נְקֵבָה: הַמִּלָּה 'une' וְ-e בַּסּוֹף (amiE). 'un ami' הוּא זָכָר."
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ מָה שְׁמַעְתֶּם!",
          say: "une tortue",
          choices: ["une tortue", "un tortue", "des tortues"],
          answer: 0,
          explain: "On entend une : tortue est féminin, une tortue.",
          explainHe: "שׁוֹמְעִים une: הַמִּלָּה tortue (צָב) הִיא בִּנְקֵבָה, une tortue."
        },
        {
          type: "build",
          prompt: "Construis la phrase !",
          promptHe: "הַרְכִּיבוּ אֶת הַמִּשְׁפָּט!",
          tiles: ["chante", "la", "fille", "le"],
          answer: ["la", "fille", "chante"],
          say: "la fille chante.",
          explain: "Fille est féminin : la fille chante.",
          explainHe: "fille הִיא בִּנְקֵבָה: la fille chante."
        },
        {
          type: "type",
          prompt: "Écoute et écris !",
          promptHe: "הַקְשִׁיבוּ וְכִתְבוּ!",
          say: "la maison",
          answer: "la maison",
          strict: false,
          explain: "Maison est féminin : la maison.",
          explainHe: "maison (בַּיִת) הִיא מִלָּה בִּנְקֵבָה בְּצָרְפָתִית: la maison."
        }
      ],
      joke: {
        q: "Qu'est-ce qui se mouille 💦 en séchant ?",
        a: "La serviette ! 🛁😂",
        qHe: "מָה נִרְטָב בִּזְמַן שֶׁהוּא מְיַבֵּשׁ? 💦🤔",
        aHe: "הַמַּגֶּבֶת! 🛁😂"
      }
    },
    {
      id: "n8-s2",
      name: "Un ou plusieurs ?",
      nameHe: "אֶחָד אוֹ הַרְבֵּה?",
      emoji: "📚",
      lesson: {
        cards: [
          {
            title: "Un seul ou plusieurs ? 🔢",
            titleHe: "אֶחָד בִּלְבַד אוֹ הַרְבֵּה?",
            body: "Singulier = un seul. Pluriel = plusieurs. Au pluriel, on ajoute souvent un s : un chat, des chats.",
            bodyHe: "יָחִיד = אֶחָד בִּלְבַד. רַבִּים = הַרְבֵּה. בְּרַבִּים מוֹסִיפִים בְּדֶרֶךְ כְּלָל s: un chat, des chats.",
            big: "un chat → des chats",
            say: "un chat. des chats."
          },
          {
            title: "les et des 📚",
            titleHe: "les וְ-des",
            body: "Au pluriel, le et la deviennent les. Un et une deviennent des. La fleur, les fleurs !",
            bodyHe: "בְּרַבִּים, le וְ-la הוֹפְכִים לְ-les. un וְ-une הוֹפְכִים לְ-des. la fleur, les fleurs!",
            big: "la fleur → les fleurs",
            say: "la fleur. les fleurs."
          },
          {
            title: "Le s muet 🤫",
            titleHe: "הַ-s הַשְּׁקֵטָה",
            body: "Le s du pluriel ne se prononce pas : chats se dit comme chat. C'est les ou des qui montre le pluriel !",
            bodyHe: "הַ-s שֶׁל הָרַבִּים לֹא נִשְׁמַעַת: chats נִשְׁמָע כְּמוֹ chat. הַמִּלִּים les אוֹ des מַרְאוֹת לָנוּ שֶׁיֵּשׁ רַבִּים!",
            big: "chats = chat 🤫",
            say: "le chat. les chats. on entend pareil !"
          }
        ]
      },
      exercises: [
        {
          type: "fill",
          prompt: "Complète le mot au pluriel !",
          promptHe: "הַשְׁלִימוּ אֶת הַמִּלָּה בָּרַבִּים!",
          sentence: "un chat → des chat␣",
          choices: ["s", "e", "t"],
          answer: 0,
          say: "un chat. des chats.",
          explain: "Au pluriel, on ajoute un s : des chats.",
          explainHe: "בְּרַבִּים מוֹסִיפִים s: des chats."
        },
        {
          type: "fill",
          prompt: "Complète la phrase !",
          promptHe: "הַשְׁלִימוּ אֶת הַמִּשְׁפָּט!",
          sentence: "Levy regarde ␣ chiens.",
          choices: ["les", "le", "la"],
          answer: 0,
          say: "Levy regarde les chiens.",
          explain: "Chiens est au pluriel : les chiens.",
          explainHe: "chiens זֶה בְּרַבִּים: les chiens."
        },
        {
          type: "pick",
          prompt: "Lis bien : quel mot dit UN SEUL ?",
          promptHe: "קִרְאוּ הֵיטֵב: אֵיזוֹ מִלָּה אוֹמֶרֶת אֶחָד בִּלְבַד?",
          choices: ["le chat", "les chats"],
          answer: 0,
          say: "le chat",
          explain: "'le chat' = un seul chat. 'les chats' a le mot 'les' et un s : c'est plusieurs.",
          explainHe: "'le chat' = חָתוּל אֶחָד. לְ-'les chats' יֵשׁ 'les' וְ-s: זֶה הַרְבֵּה."
        },
        {
          type: "fill",
          prompt: "Complète la phrase !",
          promptHe: "הַשְׁלִימוּ אֶת הַמִּשְׁפָּט!",
          sentence: "Levy a deux ballon␣.",
          choices: ["s", "e", "n"],
          answer: 0,
          say: "Levy a deux ballons.",
          explain: "Deux ballons : plusieurs, donc on ajoute un s.",
          explainHe: "שְׁנֵי כַּדּוּרִים = רַבִּים, אָז מוֹסִיפִים s: ballons."
        },
        {
          type: "match",
          prompt: "Relie le singulier au pluriel !",
          promptHe: "חַבְּרוּ אֶת הַיָּחִיד לָרַבִּים!",
          pairs: [
            ["le chat", "les chats"],
            ["une fleur", "des fleurs"],
            ["un livre", "des livres"]
          ],
          explain: "Le devient les, un et une deviennent des, et on ajoute un s !",
          explainHe: "le הוֹפֵךְ לְ-les, וְ-un/une הוֹפְכִים לְ-des, וּמוֹסִיפִים s!"
        },
        {
          type: "build",
          prompt: "Construis la phrase !",
          promptHe: "הַרְכִּיבוּ אֶת הַמִּשְׁפָּט!",
          tiles: ["dorment", "les", "chats", "chat"],
          answer: ["les", "chats", "dorment"],
          say: "les chats dorment.",
          explain: "Plusieurs chats : les chats dorment.",
          explainHe: "הַרְבֵּה חֲתוּלִים: les chats dorment."
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ מָה שְׁמַעְתֶּם!",
          say: "des bananes",
          choices: ["des bananes", "une banane", "la banane"],
          answer: 0,
          explain: "On entend des : il y a plusieurs bananes.",
          explainHe: "שׁוֹמְעִים des: יֵשׁ כַּמָּה בָּנָנוֹת."
        },
        {
          type: "type",
          prompt: "Écoute et écris !",
          promptHe: "הַקְשִׁיבוּ וְכִתְבוּ!",
          say: "les chats",
          answer: "les chats",
          strict: false,
          explain: "Les chats : pluriel, avec un s à la fin de chats.",
          explainHe: "les chats: רַבִּים, עִם s בְּסוֹף הַמִּלָּה chats."
        },
        {
          type: "pick",
          prompt: "On entend pareil ! Lis : quel mot dit plusieurs ?",
          promptHe: "שׁוֹמְעִים אוֹתוֹ דָּבָר! קִרְאוּ: אֵיזוֹ מִלָּה אוֹמֶרֶת הַרְבֵּה?",
          choices: ["les chiens", "le chien"],
          answer: 0,
          say: "les chiens",
          explain: "'le chien' et 'les chiens' s'entendent pareil ! Mais 'les' et le s montrent qu'il y en a plusieurs. Il faut LIRE pour savoir.",
          explainHe: "'le chien' וְ-'les chiens' נִשְׁמָעִים אוֹתוֹ דָּבָר! אֲבָל 'les' וְהַ-s מַרְאִים שֶׁיֵּשׁ הַרְבֵּה. צָרִיךְ לִקְרֹא כְּדֵי לָדַעַת."
        }
      ],
      joke: {
        q: "Plus on en enlève, plus il devient grand. Qu'est-ce que c'est ? 🤔",
        a: "Un trou ! 🕳️😄",
        qHe: "כְּכָל שֶׁמּוֹצִיאִים מִמֶּנּוּ יוֹתֵר, הוּא נַעֲשֶׂה גָּדוֹל יוֹתֵר. מָה זֶה? 🤔",
        aHe: "בּוֹר! 🕳️😄"
      }
    },
    {
      id: "n8-s3",
      name: "Être et avoir",
      nameHe: "être וְ-avoir",
      emoji: "💬",
      lesson: {
        cards: [
          {
            title: "Le verbe être 🌟",
            titleHe: "הַפֹּעַל être (לִהְיוֹת)",
            body: "Être dit ce qu'on est : je suis Levy, tu es gentil, il est grand, nous sommes contents.",
            bodyHe: "être אוֹמֵר מָה אֲנַחְנוּ: je suis (אֲנִי), tu es (אַתָּה), il est (הוּא), nous sommes (אֲנַחְנוּ).",
            big: "je suis • tu es • il est • nous sommes",
            say: "je suis. tu es. il est. nous sommes."
          },
          {
            title: "Le verbe avoir 🎒",
            titleHe: "הַפֹּעַל avoir (יֵשׁ)",
            body: "Avoir dit ce qu'on a : j'ai un vélo, tu as un livre, il a un chien.",
            bodyHe: "avoir אוֹמֵר מָה יֵשׁ לָנוּ: j'ai (יֵשׁ לִי), tu as (יֵשׁ לְךָ), il a (יֵשׁ לוֹ).",
            big: "j'ai • tu as • il a",
            say: "j'ai. tu as. il a."
          },
          {
            title: "Être ou avoir ? ⚖️",
            titleHe: "être אוֹ avoir?",
            body: "Levy est content : verbe être. Levy a un chien : verbe avoir. Pour l'âge, on dit : j'ai sept ans !",
            bodyHe: "Levy est content: הַפֹּעַל être. Levy a un chien: הַפֹּעַל avoir. לְגִיל אוֹמְרִים: j'ai sept ans (אֲנִי בֶּן שֶׁבַע)!",
            big: "il est... • il a...",
            say: "Levy est content. Levy a un chien. j'ai sept ans."
          }
        ]
      },
      exercises: [
        {
          type: "fill",
          prompt: "Complète avec le verbe être !",
          promptHe: "הַשְׁלִימוּ עִם הַפֹּעַל être!",
          sentence: "Je ␣ Levy !",
          choices: ["suis", "es", "est"],
          answer: 0,
          say: "je suis Levy !",
          explain: "Avec je, on dit : je suis.",
          explainHe: "עִם je אוֹמְרִים: je suis (אֲנִי)."
        },
        {
          type: "pick",
          prompt: "Choisis la bonne phrase !",
          promptHe: "בַּחֲרוּ אֶת הַמִּשְׁפָּט הַנָּכוֹן!",
          choices: ["Tu es mon ami.", "Tu est mon ami.", "Tu suis mon ami."],
          answer: 0,
          say: "tu es mon ami.",
          explain: "Avec tu, on dit : tu es.",
          explainHe: "עִם tu אוֹמְרִים: tu es (אַתָּה)."
        },
        {
          type: "fill",
          prompt: "Complète avec le verbe avoir !",
          promptHe: "הַשְׁלִימוּ עִם הַפֹּעַל avoir!",
          sentence: "J'␣ un vélo bleu.",
          choices: ["ai", "as", "a"],
          answer: 0,
          say: "j'ai un vélo bleu.",
          explain: "Avec je, on dit : j'ai.",
          explainHe: "עִם je אוֹמְרִים: j'ai (יֵשׁ לִי)."
        },
        {
          type: "fill",
          prompt: "Complète la phrase !",
          promptHe: "הַשְׁלִימוּ אֶת הַמִּשְׁפָּט!",
          sentence: "Levy ␣ sept ans.",
          choices: ["a", "as", "ai"],
          answer: 0,
          say: "Levy a sept ans.",
          explain: "Avec il, on dit : il a. Levy a sept ans.",
          explainHe: "עִם il אוֹמְרִים: il a (יֵשׁ לוֹ). Levy a sept ans."
        },
        {
          type: "pick",
          prompt: "Choisis la bonne phrase !",
          promptHe: "בַּחֲרוּ אֶת הַמִּשְׁפָּט הַנָּכוֹן!",
          choices: ["Nous sommes contents.", "Nous est contents.", "Nous es contents."],
          answer: 0,
          say: "nous sommes contents.",
          explain: "Avec nous, on dit : nous sommes.",
          explainHe: "עִם nous אוֹמְרִים: nous sommes (אֲנַחְנוּ)."
        },
        {
          type: "fill",
          prompt: "Être ou avoir ?",
          promptHe: "être אוֹ avoir?",
          sentence: "Mon amie ␣ neuf ans.",
          choices: ["a", "est", "as"],
          answer: 0,
          say: "Mon amie a neuf ans.",
          explain: "Pour l'âge, on utilise avoir : elle a neuf ans.",
          explainHe: "לְגִיל מִשְׁתַּמְּשִׁים בְּצָרְפָתִית בַּפֹּעַל avoir: elle a neuf ans."
        },
        {
          type: "fill",
          prompt: "Être ou avoir ?",
          promptHe: "être אוֹ avoir?",
          sentence: "La tortue ␣ petite.",
          choices: ["est", "a", "as"],
          answer: 0,
          say: "La tortue est petite.",
          explain: "La tortue est petite : on dit ce qu'elle est, c'est le verbe être.",
          explainHe: "La tortue est petite: אוֹמְרִים מָה הִיא, זֶה הַפֹּעַל être (לִהְיוֹת)."
        },
        {
          type: "build",
          prompt: "Construis la phrase !",
          promptHe: "הַרְכִּיבוּ אֶת הַמִּשְׁפָּט!",
          tiles: ["une", "j'ai", "sœur", "il a"],
          answer: ["j'ai", "une", "sœur"],
          say: "j'ai une sœur.",
          explain: "J'ai une sœur : le verbe avoir avec je, c'est j'ai.",
          explainHe: "j'ai une sœur (יֵשׁ לִי אָחוֹת): הַפֹּעַל avoir עִם je זֶה j'ai."
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ מָה שְׁמַעְתֶּם!",
          say: "il est content",
          choices: ["Il est content.", "Il a content.", "Ils sont contents."],
          answer: 0,
          explain: "On entend il est : le verbe être.",
          explainHe: "שׁוֹמְעִים il est: הַפֹּעַל être."
        },
        {
          type: "read",
          prompt: "Lis cette phrase à voix haute !",
          promptHe: "קִרְאוּ אֶת הַמִּשְׁפָּט בְּקוֹל רָם!",
          text: "Je suis Levy et j'ai un chien.",
          say: "je suis Levy et j'ai un chien.",
          explain: "Bravo ! Je suis (être) et j'ai (avoir) dans la même phrase !",
          explainHe: "כָּל הַכָּבוֹד! je suis (לִהְיוֹת) וְ-j'ai (יֵשׁ לִי) בְּאוֹתוֹ מִשְׁפָּט!"
        }
      ],
      joke: {
        q: "Je suis à toi, mais tes amis m'utilisent plus que toi. Qui suis-je ? 🤔",
        a: "Ton prénom ! 🏷️😄",
        qHe: "אֲנִי שֶׁלְּךָ, אֲבָל הַחֲבֵרִים שֶׁלְּךָ מִשְׁתַּמְּשִׁים בִּי יוֹתֵר מִמְּךָ. מִי אֲנִי? 🤔",
        aHe: "הַשֵּׁם שֶׁלְּךָ! 🏷️😄"
      }
    },
    {
      id: "n8-s4",
      name: "Le grand défi",
      nameHe: "הָאֶתְגָּר הַגָּדוֹל",
      emoji: "🏆",
      lesson: {
        cards: [
          {
            title: "Le grand défi ! 🏆",
            titleHe: "הָאֶתְגָּר הַגָּדוֹל!",
            body: "Bravo, tu es costaud ! Masculin, féminin, pluriel, être et avoir... Montre tout ce que tu sais, Levy croit en toi !",
            bodyHe: "כָּל הַכָּבוֹד, אַתֶּם חֲזָקִים! זָכָר, נְקֵבָה, רַבִּים, être וְ-avoir... תַּרְאוּ כָּל מָה שֶׁאַתֶּם יוֹדְעִים, Levy מַאֲמִין בָּכֶם!",
            big: "💪",
            say: "à toi de jouer, champion !"
          }
        ]
      },
      exercises: [
        {
          type: "fill",
          prompt: "Complète la phrase !",
          promptHe: "הַשְׁלִימוּ אֶת הַמִּשְׁפָּט!",
          sentence: "La maîtresse ouvre ␣ porte.",
          choices: ["la", "le", "les"],
          answer: 0,
          say: "La maîtresse ouvre la porte.",
          explain: "Porte est féminin : la porte.",
          explainHe: "porte (דֶּלֶת) הִיא מִלָּה בִּנְקֵבָה בְּצָרְפָתִית: la porte."
        },
        {
          type: "fill",
          prompt: "Complète le mot !",
          promptHe: "הַשְׁלִימוּ אֶת הַמִּלָּה!",
          sentence: "Levy achète des pomme␣.",
          choices: ["s", "e", "t"],
          answer: 0,
          say: "Levy achète des pommes.",
          explain: "Des pommes : plusieurs, donc un s à la fin.",
          explainHe: "des pommes: הַרְבֵּה תַּפּוּחִים, אָז s בַּסּוֹף."
        },
        {
          type: "type",
          prompt: "Dictée ! Écoute et écris la phrase.",
          promptHe: "הַכְתָּבָה! הַקְשִׁיבוּ וְכִתְבוּ אֶת הַמִּשְׁפָּט.",
          say: "je suis content",
          answer: "je suis content",
          strict: false,
          explain: "Je suis content : le verbe être avec je.",
          explainHe: "je suis content (אֲנִי שָׂמֵחַ): הַפֹּעַל être עִם je."
        },
        {
          type: "fill",
          prompt: "Complète la phrase !",
          promptHe: "הַשְׁלִימוּ אֶת הַמִּשְׁפָּט!",
          sentence: "Nous ␣ à la piscine.",
          choices: ["sommes", "suis", "est"],
          answer: 0,
          say: "nous sommes à la piscine.",
          explain: "Avec nous, on dit : nous sommes.",
          explainHe: "עִם nous אוֹמְרִים: nous sommes (אֲנַחְנוּ)."
        },
        {
          type: "pick",
          prompt: "Lis bien : quelle phrase est juste ?",
          promptHe: "קִרְאוּ הֵיטֵב: אֵיזֶה מִשְׁפָּט נָכוֹן?",
          choices: ["le vélo est bleu", "la vélo est bleu"],
          answer: 0,
          say: "le vélo est bleu",
          explain: "'vélo' est masculin : on dit LE vélo. 'la vélo' n'existe pas.",
          explainHe: "'vélo' הוּא זָכָר: אוֹמְרִים LE vélo. 'la vélo' לֹא קַיָּם."
        },
        {
          type: "match",
          prompt: "Relie le bon verbe !",
          promptHe: "חַבְּרוּ אֶת הַפֹּעַל הַנָּכוֹן!",
          pairs: [
            ["je", "suis"],
            ["tu", "as"],
            ["il", "a"],
            ["nous", "sommes"]
          ],
          explain: "Je suis, tu as, il a, nous sommes !",
          explainHe: "je suis, tu as, il a, nous sommes!"
        },
        {
          type: "type",
          prompt: "Dictée ! Écoute et écris la phrase.",
          promptHe: "הַכְתָּבָה! הַקְשִׁיבוּ וְכִתְבוּ אֶת הַמִּשְׁפָּט.",
          say: "il a un chat",
          answer: "il a un chat",
          strict: false,
          explain: "Il a un chat : le verbe avoir avec il.",
          explainHe: "il a un chat (יֵשׁ לוֹ חָתוּל): הַפֹּעַל avoir עִם il."
        },
        {
          type: "build",
          prompt: "Construis la phrase !",
          promptHe: "הַרְכִּיבוּ אֶת הַמִּשְׁפָּט!",
          tiles: ["nous", "amis", "sommes", "suis"],
          answer: ["nous", "sommes", "amis"],
          say: "nous sommes amis.",
          explain: "Nous sommes amis : le verbe être avec nous.",
          explainHe: "nous sommes amis (אֲנַחְנוּ חֲבֵרִים): הַפֹּעַל être עִם nous."
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הַקְשִׁיבוּ וּבַחֲרוּ מָה שְׁמַעְתֶּם!",
          say: "des vélos",
          choices: ["des vélos", "un vélo", "le vélo"],
          answer: 0,
          explain: "On entend des : plusieurs vélos.",
          explainHe: "שׁוֹמְעִים des: כַּמָּה אוֹפַנַּיִם, רַבִּים."
        },
        {
          type: "fill",
          prompt: "Complète la phrase !",
          promptHe: "הַשְׁלִימוּ אֶת הַמִּשְׁפָּט!",
          sentence: "Mon amie est ␣ fille gentille.",
          choices: ["une", "un", "des"],
          answer: 0,
          say: "Mon amie est une fille gentille.",
          explain: "Fille est féminin : une fille.",
          explainHe: "fille הִיא נְקֵבָה: une fille."
        },
        {
          type: "type",
          prompt: "Dictée ! Écoute et écris la phrase.",
          promptHe: "הַכְתָּבָה! הַקְשִׁיבוּ וְכִתְבוּ אֶת הַמִּשְׁפָּט.",
          say: "tu es grand",
          answer: "tu es grand",
          strict: false,
          explain: "Tu es grand : le verbe être avec tu.",
          explainHe: "tu es grand (אַתָּה גָּדוֹל): הַפֹּעַל être עִם tu."
        },
        {
          type: "pick",
          prompt: "Comment dire « plusieurs filles » ?",
          promptHe: "אֵיךְ אוֹמְרִים « הַרְבֵּה בָּנוֹת »?",
          choices: ["des filles", "des fille", "une filles"],
          answer: 0,
          say: "des filles",
          explain: "Des filles : des pour le pluriel, et un s à filles.",
          explainHe: "des filles: des לְרַבִּים, וְ-s בְּסוֹף הַמִּלָּה filles."
        }
      ],
      joke: {
        q: "Qu'est-ce qui monte ⬆️ et qui descend ⬇️ sans jamais bouger ?",
        a: "L'escalier ! 🪜😂",
        qHe: "מָה עוֹלֶה וְיוֹרֵד אֲבָל אַף פַּעַם לֹא זָז? ⬆️⬇️",
        aHe: "הַמַּדְרֵגוֹת! 🪜😂"
      }
    }
  ]
});
