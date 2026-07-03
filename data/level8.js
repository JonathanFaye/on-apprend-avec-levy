window.LEVELS = window.LEVELS || [];
window.LEVELS.push({
  id: "n8",
  order: 8,
  name: "Le français costaud",
  nameHe: "צרפתית חזקה",
  emoji: "💪",
  color: "#4527A0",
  tagline: "Je deviens fort en français !",
  taglineHe: "אני נהיה חזק בצרפתית!",
  sublevels: [
    {
      id: "n8-s1",
      name: "Masculin ou féminin ?",
      nameHe: "זכר או נקבה?",
      emoji: "👫",
      lesson: {
        cards: [
          {
            title: "Masculin ou féminin ?",
            titleHe: "זכר או נקבה?",
            body: "En français, chaque nom est masculin ou féminin. Un garçon, c'est masculin. Une fille, c'est féminin.",
            bodyHe: "בצרפתית, כל שם עצם הוא זכר או נקבה. garçon (ילד) זה זכר. fille (ילדה) זה נקבה.",
            big: "le garçon • la fille",
            say: "le garçon. la fille."
          },
          {
            title: "le ou la ?",
            titleHe: "le או la?",
            body: "Devant un mot masculin, on met le. Devant un mot féminin, on met la. Le chat, la maison.",
            bodyHe: "לפני מילה בזכר שמים le. לפני מילה בנקבה שמים la. le chat, la maison.",
            big: "le chat • la maison",
            say: "le chat. la maison."
          },
          {
            title: "un ou une ?",
            titleHe: "un או une?",
            body: "Un pour le masculin, une pour le féminin. Un vélo, une pomme.",
            bodyHe: "un לזכר, une לנקבה. un vélo, une pomme.",
            big: "un vélo • une pomme",
            say: "un vélo. une pomme."
          },
          {
            title: "La famille des animaux",
            titleHe: "משפחת החיות",
            body: "Parfois, le mot change au féminin : le chat, la chatte. Le chien, la chienne.",
            bodyHe: "לפעמים המילה משתנה בנקבה: le chat (חתול), la chatte (חתולה). le chien (כלב), la chienne (כלבה).",
            big: "chat → chatte",
            say: "le chat. la chatte. le chien. la chienne."
          }
        ]
      },
      exercises: [
        {
          type: "pick",
          prompt: "Choisis : le ou la ?",
          promptHe: "בחרו: le או la?",
          question: "___ garçon",
          choices: ["le", "la"],
          answer: 0,
          say: "le garçon",
          explain: "Garçon est un mot masculin : on dit le garçon.",
          explainHe: "garçon (ילד) היא מילה בזכר: אומרים le garçon."
        },
        {
          type: "pick",
          prompt: "Choisis : le ou la ?",
          promptHe: "בחרו: le או la?",
          question: "___ fille",
          choices: ["le", "la"],
          answer: 1,
          say: "la fille",
          explain: "Fille est un mot féminin : on dit la fille.",
          explainHe: "fille (ילדה) היא מילה בנקבה: אומרים la fille."
        },
        {
          type: "fill",
          prompt: "Complète la phrase !",
          promptHe: "השלימו את המשפט!",
          sentence: "Levy a ␣ vélo bleu.",
          choices: ["un", "une", "des"],
          answer: 0,
          say: "Levy a un vélo bleu.",
          explain: "Vélo est masculin : un vélo.",
          explainHe: "vélo (אופניים) היא מילה בזכר בצרפתית: un vélo."
        },
        {
          type: "fill",
          prompt: "Complète la phrase !",
          promptHe: "השלימו את המשפט!",
          sentence: "Levy mange ␣ pomme.",
          choices: ["une", "un", "le"],
          answer: 0,
          say: "Levy mange une pomme.",
          explain: "Pomme est féminin : une pomme.",
          explainHe: "pomme (תפוח) היא מילה בנקבה בצרפתית: une pomme."
        },
        {
          type: "match",
          prompt: "Relie le masculin à son féminin !",
          promptHe: "חברו את הזכר לנקבה שלו!",
          pairs: [
            ["le garçon", "la fille"],
            ["le chat", "la chatte"],
            ["le chien", "la chienne"]
          ],
          explain: "Garçon et fille, chat et chatte, chien et chienne !",
          explainHe: "ילד וילדה, חתול וחתולה, כלב וכלבה!"
        },
        {
          type: "pick",
          prompt: "Quel mot est féminin ?",
          promptHe: "איזו מילה היא בנקבה?",
          choices: ["la lune", "le soleil", "le livre"],
          answer: 0,
          say: "la lune",
          explain: "La lune : lune est féminin. Soleil et livre sont masculins.",
          explainHe: "la lune (ירח) היא נקבה בצרפתית. soleil ו-livre הם זכר."
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הקשיבו ובחרו מה שמעתם!",
          say: "une tortue",
          choices: ["une tortue", "un tortue", "des tortues"],
          answer: 0,
          explain: "On entend une : tortue est féminin, une tortue.",
          explainHe: "שומעים une: המילה tortue (צב) היא בנקבה, une tortue."
        },
        {
          type: "build",
          prompt: "Construis la phrase !",
          promptHe: "הרכיבו את המשפט!",
          tiles: ["chante", "la", "fille", "le"],
          answer: ["la", "fille", "chante"],
          say: "la fille chante.",
          explain: "Fille est féminin : la fille chante.",
          explainHe: "fille היא בנקבה: la fille chante."
        },
        {
          type: "type",
          prompt: "Écoute et écris !",
          promptHe: "הקשיבו וכתבו!",
          say: "la maison",
          answer: "la maison",
          strict: false,
          explain: "Maison est féminin : la maison.",
          explainHe: "maison (בית) היא מילה בנקבה בצרפתית: la maison."
        }
      ],
      joke: {
        q: "Qu'est-ce qui se mouille en séchant ?",
        a: "La serviette !",
        qHe: "מה נרטב בזמן שהוא מייבש?",
        aHe: "המגבת!"
      }
    },
    {
      id: "n8-s2",
      name: "Un ou plusieurs ?",
      nameHe: "אחד או הרבה?",
      emoji: "📚",
      lesson: {
        cards: [
          {
            title: "Un seul ou plusieurs ?",
            titleHe: "אחד בלבד או הרבה?",
            body: "Singulier = un seul. Pluriel = plusieurs. Au pluriel, on ajoute souvent un s : un chat, des chats.",
            bodyHe: "יחיד = אחד בלבד. רבים = הרבה. ברבים מוסיפים בדרך כלל s: un chat, des chats.",
            big: "un chat → des chats",
            say: "un chat. des chats."
          },
          {
            title: "les et des",
            titleHe: "les ו-des",
            body: "Au pluriel, le et la deviennent les. Un et une deviennent des. La fleur, les fleurs !",
            bodyHe: "ברבים, le ו-la הופכים ל-les. un ו-une הופכים ל-des. la fleur, les fleurs!",
            big: "la fleur → les fleurs",
            say: "la fleur. les fleurs."
          },
          {
            title: "Le s muet",
            titleHe: "ה-s השקטה",
            body: "Le s du pluriel ne se prononce pas : chats se dit comme chat. C'est les ou des qui montre le pluriel !",
            bodyHe: "ה-s של הרבים לא נשמעת: chats נשמע כמו chat. המילים les או des מראות לנו שיש רבים!",
            big: "chats = chat 🤫",
            say: "le chat. les chats. on entend pareil !"
          }
        ]
      },
      exercises: [
        {
          type: "fill",
          prompt: "Complète le mot au pluriel !",
          promptHe: "השלימו את המילה ברבים!",
          sentence: "un chat → des chat␣",
          choices: ["s", "e", "t"],
          answer: 0,
          say: "un chat. des chats.",
          explain: "Au pluriel, on ajoute un s : des chats.",
          explainHe: "ברבים מוסיפים s: des chats."
        },
        {
          type: "fill",
          prompt: "Complète la phrase !",
          promptHe: "השלימו את המשפט!",
          sentence: "Levy regarde ␣ chiens.",
          choices: ["les", "le", "la"],
          answer: 0,
          say: "Levy regarde les chiens.",
          explain: "Chiens est au pluriel : les chiens.",
          explainHe: "chiens זה ברבים: les chiens."
        },
        {
          type: "pick",
          prompt: "Quel mot est au pluriel ?",
          promptHe: "איזו מילה היא ברבים?",
          choices: ["des livres", "un livre", "le livre"],
          answer: 0,
          say: "des livres",
          explain: "Des livres : il y en a plusieurs, avec un s à la fin.",
          explainHe: "des livres: יש כמה ספרים, עם s בסוף."
        },
        {
          type: "fill",
          prompt: "Complète la phrase !",
          promptHe: "השלימו את המשפט!",
          sentence: "Levy a deux ballon␣.",
          choices: ["s", "e", "n"],
          answer: 0,
          say: "Levy a deux ballons.",
          explain: "Deux ballons : plusieurs, donc on ajoute un s.",
          explainHe: "שני כדורים = רבים, אז מוסיפים s: ballons."
        },
        {
          type: "match",
          prompt: "Relie le singulier au pluriel !",
          promptHe: "חברו את היחיד לרבים!",
          pairs: [
            ["le chat", "les chats"],
            ["une fleur", "des fleurs"],
            ["un livre", "des livres"]
          ],
          explain: "Le devient les, un et une deviennent des, et on ajoute un s !",
          explainHe: "le הופך ל-les, ו-un/une הופכים ל-des, ומוסיפים s!"
        },
        {
          type: "build",
          prompt: "Construis la phrase !",
          promptHe: "הרכיבו את המשפט!",
          tiles: ["dorment", "les", "chats", "chat"],
          answer: ["les", "chats", "dorment"],
          say: "les chats dorment.",
          explain: "Plusieurs chats : les chats dorment.",
          explainHe: "הרבה חתולים: les chats dorment."
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הקשיבו ובחרו מה שמעתם!",
          say: "des bananes",
          choices: ["des bananes", "une banane", "la banane"],
          answer: 0,
          explain: "On entend des : il y a plusieurs bananes.",
          explainHe: "שומעים des: יש כמה בננות."
        },
        {
          type: "type",
          prompt: "Écoute et écris !",
          promptHe: "הקשיבו וכתבו!",
          say: "les chats",
          answer: "les chats",
          strict: false,
          explain: "Les chats : pluriel, avec un s à la fin de chats.",
          explainHe: "les chats: רבים, עם s בסוף המילה chats."
        },
        {
          type: "pick",
          prompt: "Quel mot est au singulier ?",
          promptHe: "איזו מילה היא ביחיד?",
          choices: ["la pomme", "les pommes", "des pommes"],
          answer: 0,
          say: "la pomme",
          explain: "La pomme : une seule pomme, sans s.",
          explainHe: "la pomme: תפוח אחד בלבד, בלי s."
        }
      ],
      joke: {
        q: "Plus on en enlève, plus il devient grand. Qu'est-ce que c'est ?",
        a: "Un trou !",
        qHe: "ככל שמוציאים ממנו יותר, הוא נעשה גדול יותר. מה זה?",
        aHe: "בור!"
      }
    },
    {
      id: "n8-s3",
      name: "Être et avoir",
      nameHe: "être ו-avoir",
      emoji: "💬",
      lesson: {
        cards: [
          {
            title: "Le verbe être",
            titleHe: "הפועל être (להיות)",
            body: "Être dit ce qu'on est : je suis Levy, tu es gentil, il est grand, nous sommes contents.",
            bodyHe: "être אומר מה אנחנו: je suis (אני), tu es (אתה), il est (הוא), nous sommes (אנחנו).",
            big: "je suis • tu es • il est • nous sommes",
            say: "je suis. tu es. il est. nous sommes."
          },
          {
            title: "Le verbe avoir",
            titleHe: "הפועל avoir (יש)",
            body: "Avoir dit ce qu'on a : j'ai un vélo, tu as un livre, il a un chien.",
            bodyHe: "avoir אומר מה יש לנו: j'ai (יש לי), tu as (יש לך), il a (יש לו).",
            big: "j'ai • tu as • il a",
            say: "j'ai. tu as. il a."
          },
          {
            title: "Être ou avoir ?",
            titleHe: "être או avoir?",
            body: "Levy est content : verbe être. Levy a un chien : verbe avoir. Pour l'âge, on dit : j'ai sept ans !",
            bodyHe: "Levy est content: הפועל être. Levy a un chien: הפועל avoir. לגיל אומרים: j'ai sept ans (אני בן שבע)!",
            big: "il est... • il a...",
            say: "Levy est content. Levy a un chien. j'ai sept ans."
          }
        ]
      },
      exercises: [
        {
          type: "fill",
          prompt: "Complète avec le verbe être !",
          promptHe: "השלימו עם הפועל être!",
          sentence: "Je ␣ Levy !",
          choices: ["suis", "es", "est"],
          answer: 0,
          say: "je suis Levy !",
          explain: "Avec je, on dit : je suis.",
          explainHe: "עם je אומרים: je suis (אני)."
        },
        {
          type: "pick",
          prompt: "Choisis la bonne phrase !",
          promptHe: "בחרו את המשפט הנכון!",
          choices: ["Tu es mon ami.", "Tu est mon ami.", "Tu suis mon ami."],
          answer: 0,
          say: "tu es mon ami.",
          explain: "Avec tu, on dit : tu es.",
          explainHe: "עם tu אומרים: tu es (אתה)."
        },
        {
          type: "fill",
          prompt: "Complète avec le verbe avoir !",
          promptHe: "השלימו עם הפועל avoir!",
          sentence: "J'␣ un vélo bleu.",
          choices: ["ai", "as", "a"],
          answer: 0,
          say: "j'ai un vélo bleu.",
          explain: "Avec je, on dit : j'ai.",
          explainHe: "עם je אומרים: j'ai (יש לי)."
        },
        {
          type: "fill",
          prompt: "Complète la phrase !",
          promptHe: "השלימו את המשפט!",
          sentence: "Levy ␣ sept ans.",
          choices: ["a", "as", "ai"],
          answer: 0,
          say: "Levy a sept ans.",
          explain: "Avec il, on dit : il a. Levy a sept ans.",
          explainHe: "עם il אומרים: il a (יש לו). Levy a sept ans."
        },
        {
          type: "pick",
          prompt: "Choisis la bonne phrase !",
          promptHe: "בחרו את המשפט הנכון!",
          choices: ["Nous sommes contents.", "Nous est contents.", "Nous es contents."],
          answer: 0,
          say: "nous sommes contents.",
          explain: "Avec nous, on dit : nous sommes.",
          explainHe: "עם nous אומרים: nous sommes (אנחנו)."
        },
        {
          type: "fill",
          prompt: "Être ou avoir ?",
          promptHe: "être או avoir?",
          sentence: "Mon amie ␣ neuf ans.",
          choices: ["a", "est", "as"],
          answer: 0,
          say: "Mon amie a neuf ans.",
          explain: "Pour l'âge, on utilise avoir : elle a neuf ans.",
          explainHe: "לגיל משתמשים בצרפתית בפועל avoir: elle a neuf ans."
        },
        {
          type: "fill",
          prompt: "Être ou avoir ?",
          promptHe: "être או avoir?",
          sentence: "La tortue ␣ petite.",
          choices: ["est", "a", "as"],
          answer: 0,
          say: "La tortue est petite.",
          explain: "La tortue est petite : on dit ce qu'elle est, c'est le verbe être.",
          explainHe: "La tortue est petite: אומרים מה היא, זה הפועל être (להיות)."
        },
        {
          type: "build",
          prompt: "Construis la phrase !",
          promptHe: "הרכיבו את המשפט!",
          tiles: ["une", "j'ai", "sœur", "il a"],
          answer: ["j'ai", "une", "sœur"],
          say: "j'ai une sœur.",
          explain: "J'ai une sœur : le verbe avoir avec je, c'est j'ai.",
          explainHe: "j'ai une sœur (יש לי אחות): הפועל avoir עם je זה j'ai."
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הקשיבו ובחרו מה שמעתם!",
          say: "il est content",
          choices: ["Il est content.", "Il a content.", "Ils sont contents."],
          answer: 0,
          explain: "On entend il est : le verbe être.",
          explainHe: "שומעים il est: הפועל être."
        },
        {
          type: "read",
          prompt: "Lis cette phrase à voix haute !",
          promptHe: "קראו את המשפט בקול רם!",
          text: "Je suis Levy et j'ai un chien.",
          say: "je suis Levy et j'ai un chien.",
          explain: "Bravo ! Je suis (être) et j'ai (avoir) dans la même phrase !",
          explainHe: "כל הכבוד! je suis (להיות) ו-j'ai (יש לי) באותו משפט!"
        }
      ],
      joke: {
        q: "Je suis à toi, mais tes amis m'utilisent plus que toi. Qui suis-je ?",
        a: "Ton prénom !",
        qHe: "אני שלך, אבל החברים שלך משתמשים בי יותר ממך. מי אני?",
        aHe: "השם שלך!"
      }
    },
    {
      id: "n8-s4",
      name: "Le grand défi",
      nameHe: "האתגר הגדול",
      emoji: "🏆",
      lesson: {
        cards: [
          {
            title: "Le grand défi !",
            titleHe: "האתגר הגדול!",
            body: "Bravo, tu es costaud ! Masculin, féminin, pluriel, être et avoir... Montre tout ce que tu sais, Levy croit en toi !",
            bodyHe: "כל הכבוד, אתם חזקים! זכר, נקבה, רבים, être ו-avoir... תראו כל מה שאתם יודעים, Levy מאמין בכם!",
            big: "💪",
            say: "à toi de jouer, champion !"
          }
        ]
      },
      exercises: [
        {
          type: "fill",
          prompt: "Complète la phrase !",
          promptHe: "השלימו את המשפט!",
          sentence: "La maîtresse ouvre ␣ porte.",
          choices: ["la", "le", "les"],
          answer: 0,
          say: "La maîtresse ouvre la porte.",
          explain: "Porte est féminin : la porte.",
          explainHe: "porte (דלת) היא מילה בנקבה בצרפתית: la porte."
        },
        {
          type: "fill",
          prompt: "Complète le mot !",
          promptHe: "השלימו את המילה!",
          sentence: "Levy achète des pomme␣.",
          choices: ["s", "e", "t"],
          answer: 0,
          say: "Levy achète des pommes.",
          explain: "Des pommes : plusieurs, donc un s à la fin.",
          explainHe: "des pommes: הרבה תפוחים, אז s בסוף."
        },
        {
          type: "type",
          prompt: "Dictée ! Écoute et écris la phrase.",
          promptHe: "הכתבה! הקשיבו וכתבו את המשפט.",
          say: "je suis content",
          answer: "je suis content",
          strict: false,
          explain: "Je suis content : le verbe être avec je.",
          explainHe: "je suis content (אני שמח): הפועל être עם je."
        },
        {
          type: "fill",
          prompt: "Complète la phrase !",
          promptHe: "השלימו את המשפט!",
          sentence: "Nous ␣ à la piscine.",
          choices: ["sommes", "suis", "est"],
          answer: 0,
          say: "nous sommes à la piscine.",
          explain: "Avec nous, on dit : nous sommes.",
          explainHe: "עם nous אומרים: nous sommes (אנחנו)."
        },
        {
          type: "pick",
          prompt: "Quel mot est masculin ?",
          promptHe: "איזו מילה היא בזכר?",
          choices: ["le vélo", "la lune", "une pomme"],
          answer: 0,
          say: "le vélo",
          explain: "Le vélo : vélo est masculin. Lune et pomme sont féminins.",
          explainHe: "le vélo הוא זכר בצרפתית. lune ו-pomme הן נקבה."
        },
        {
          type: "match",
          prompt: "Relie le bon verbe !",
          promptHe: "חברו את הפועל הנכון!",
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
          promptHe: "הכתבה! הקשיבו וכתבו את המשפט.",
          say: "il a un chat",
          answer: "il a un chat",
          strict: false,
          explain: "Il a un chat : le verbe avoir avec il.",
          explainHe: "il a un chat (יש לו חתול): הפועל avoir עם il."
        },
        {
          type: "build",
          prompt: "Construis la phrase !",
          promptHe: "הרכיבו את המשפט!",
          tiles: ["nous", "amis", "sommes", "suis"],
          answer: ["nous", "sommes", "amis"],
          say: "nous sommes amis.",
          explain: "Nous sommes amis : le verbe être avec nous.",
          explainHe: "nous sommes amis (אנחנו חברים): הפועל être עם nous."
        },
        {
          type: "listen",
          prompt: "Écoute et choisis ce que tu entends !",
          promptHe: "הקשיבו ובחרו מה שמעתם!",
          say: "des vélos",
          choices: ["des vélos", "un vélo", "le vélo"],
          answer: 0,
          explain: "On entend des : plusieurs vélos.",
          explainHe: "שומעים des: כמה אופניים, רבים."
        },
        {
          type: "fill",
          prompt: "Complète la phrase !",
          promptHe: "השלימו את המשפט!",
          sentence: "Mon amie est ␣ fille gentille.",
          choices: ["une", "un", "des"],
          answer: 0,
          say: "Mon amie est une fille gentille.",
          explain: "Fille est féminin : une fille.",
          explainHe: "fille היא נקבה: une fille."
        },
        {
          type: "type",
          prompt: "Dictée ! Écoute et écris la phrase.",
          promptHe: "הכתבה! הקשיבו וכתבו את המשפט.",
          say: "tu es grand",
          answer: "tu es grand",
          strict: false,
          explain: "Tu es grand : le verbe être avec tu.",
          explainHe: "tu es grand (אתה גדול): הפועל être עם tu."
        },
        {
          type: "pick",
          prompt: "Comment dire « plusieurs filles » ?",
          promptHe: "איך אומרים « הרבה בנות »?",
          choices: ["des filles", "des fille", "une filles"],
          answer: 0,
          say: "des filles",
          explain: "Des filles : des pour le pluriel, et un s à filles.",
          explainHe: "des filles: des לרבים, ו-s בסוף המילה filles."
        }
      ],
      joke: {
        q: "Qu'est-ce qui monte et qui descend sans jamais bouger ?",
        a: "L'escalier !",
        qHe: "מה עולה ויורד אבל אף פעם לא זז?",
        aHe: "המדרגות!"
      }
    }
  ]
});
