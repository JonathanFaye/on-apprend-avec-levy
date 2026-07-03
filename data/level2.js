window.LEVELS = window.LEVELS || [];
window.LEVELS.push({
  id: "n2",
  order: 2,
  name: "Les syllabes",
  nameHe: "ההברות",
  emoji: "🧩",
  color: "#C62828",
  tagline: "J'assemble les lettres en syllabes !",
  taglineHe: "אני מחבר אותיות להברות!",
  sublevels: [
    {
      id: "n2-s1",
      name: "M et L",
      nameHe: "M ו-L",
      emoji: "🎵",
      lesson: {
        cards: [
          {
            title: "La recette magique",
            titleHe: "המתכון הקסום",
            body: "Une consonne + une voyelle = une syllabe ! On lit de gauche à droite : M puis A, ça fait MA.",
            bodyHe: "עיצור + תנועה = הברה! קוראים משמאל לימין: קודם M ואז A, וזה עושה MA.",
            big: "M + A = MA",
            say: "mmm et a, ça fait ma !"
          },
          {
            title: "La famille de M",
            titleHe: "המשפחה של M",
            body: "M chante avec toutes les voyelles : MA ME MI MO MU. Comme au début de MAMAN !",
            bodyHe: "M שרה עם כל התנועות: MA ME MI MO MU. כמו בהתחלה של MAMAN!",
            big: "MA ME MI MO MU",
            say: "ma. me. mi. mo. mu."
          },
          {
            title: "La famille de L",
            titleHe: "המשפחה של L",
            body: "L chante aussi : LA LE LI LO LU. Comme au début de LEVY !",
            bodyHe: "גם L שרה: LA LE LI LO LU. כמו בהתחלה של LEVY!",
            big: "LA LE LI LO LU",
            say: "la. le. li. lo. lu."
          }
        ]
      },
      exercises: [
        {
          type: "pick",
          prompt: "M + A, ça fait quoi ?",
          promptHe: "M + A, מה זה עושה?",
          question: "M + A",
          choices: ["MA", "AM", "MU"],
          answer: 0,
          say: "ma",
          explain: "On lit de gauche à droite : M puis A, ça fait MA !",
          explainHe: "קוראים משמאל לימין: קודם M ואז A, זה עושה MA!"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis la syllabe !",
          promptHe: "הקשיבו ובחרו את ההברה!",
          say: "mo",
          choices: ["MA", "MO", "MI"],
          answer: 1,
          explain: "Tu as entendu 'mo' : M + O = MO.",
          explainHe: "שמעתם 'mo': M ועוד O זה MO."
        },
        {
          type: "pick",
          prompt: "L + I, ça fait quoi ?",
          promptHe: "L + I, מה זה עושה?",
          question: "L + I",
          choices: ["IL", "LU", "LI"],
          answer: 2,
          say: "li",
          explain: "L puis I, ça fait LI. Attention : on lit de gauche à droite !",
          explainHe: "קודם L ואז I, זה עושה LI. זהירות: קוראים משמאל לימין!"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis la syllabe !",
          promptHe: "הקשיבו ובחרו את ההברה!",
          say: "lu",
          choices: ["LO", "LU", "LA"],
          answer: 1,
          explain: "LU : L + U. U fait 'u' avec la bouche toute pointue !",
          explainHe: "LU: L ועוד U. את U אומרים עם שפתיים מכווצות!"
        },
        {
          type: "match",
          prompt: "Relie les lettres à leur syllabe !",
          promptHe: "חברו את האותיות להברה שלהן!",
          pairs: [
            ["M + I", "MI"],
            ["L + A", "LA"],
            ["M + U", "MU"],
            ["L + E", "LE"]
          ],
          explain: "La consonne + la voyelle = la syllabe !",
          explainHe: "עיצור + תנועה = הברה!"
        },
        {
          type: "pick",
          prompt: "Quelle syllabe commence par M ?",
          promptHe: "איזו הברה מתחילה ב-M?",
          choices: ["LU", "MO", "LE"],
          answer: 1,
          say: "mo",
          explain: "MO commence par M. LU et LE commencent par L.",
          explainHe: "MO מתחילה ב-M. אבל LU ו-LE מתחילות ב-L."
        },
        {
          type: "listen",
          prompt: "Écoute bien et choisis !",
          promptHe: "הקשיבו טוב ובחרו!",
          say: "me",
          choices: ["ME", "MI", "LE"],
          answer: 0,
          explain: "ME : M + E. LE commence par L, pas par M.",
          explainHe: "ME זה M ועוד E. אבל LE מתחילה ב-L, לא ב-M."
        },
        {
          type: "pick",
          prompt: "Trouve l'intrus : il ne commence pas par L !",
          promptHe: "מצאו את היוצא מן הכלל: הוא לא מתחיל ב-L!",
          choices: ["LA", "LO", "MU"],
          answer: 2,
          say: "la. lo. mu.",
          explain: "MU commence par M ! LA et LO commencent par L.",
          explainHe: "MU מתחילה ב-M! אבל LA ו-LO מתחילות ב-L."
        },
        {
          type: "listen",
          prompt: "Écoute et choisis la syllabe !",
          promptHe: "הקשיבו ובחרו את ההברה!",
          say: "la",
          choices: ["MA", "LA", "LO"],
          answer: 1,
          explain: "Tu as entendu 'la' : L + A = LA.",
          explainHe: "שמעתם 'la': L ועוד A זה LA."
        }
      ],
      joke: {
        q: "Que dit le stylo au crayon ?",
        a: "Tu as bonne mine !",
        qHe: "מה אומר העט לעיפרון?",
        aHe: "Tu as bonne mine! בצרפתית 'mine' זה גם החוד של העיפרון וגם מראה הפנים. זה כמו להגיד: אתה נראה מצוין!"
      }
    },
    {
      id: "n2-s2",
      name: "S et R",
      nameHe: "S ו-R",
      emoji: "🐍",
      lesson: {
        cards: [
          {
            title: "S siffle comme un serpent",
            titleHe: "S שורקת כמו נחש",
            body: "SSS... S chante avec les voyelles : SA SE SI SO SU. Comme au début de SALAMI !",
            bodyHe: "SSS... האות S שרה עם התנועות: SA SE SI SO SU. כמו בהתחלה של SALAMI!",
            big: "SA SE SI SO SU",
            say: "sss. sa. se. si. so. su."
          },
          {
            title: "R ronronne comme un moteur",
            titleHe: "R מגרגרת כמו מנוע",
            body: "RRR... comme une moto qui démarre ! R chante : RA RE RI RO RU.",
            bodyHe: "RRR... כמו אופנוע שמתניע! האות R שרה: RA RE RI RO RU.",
            big: "RA RE RI RO RU",
            say: "rrr. ra. re. ri. ro. ru."
          },
          {
            title: "On mélange tout !",
            titleHe: "מערבבים הכול!",
            body: "Tu connais déjà M, L, S et R. Écoute bien : SI et RI, ce n'est pas pareil !",
            bodyHe: "אתם כבר מכירים את M, L, S ו-R. הקשיבו טוב: SI ו-RI זה לא אותו דבר!",
            big: "M L S R",
            say: "si. ri."
          }
        ]
      },
      exercises: [
        {
          type: "pick",
          prompt: "S + A, ça fait quoi ?",
          promptHe: "S + A, מה זה עושה?",
          question: "S + A",
          choices: ["AS", "SA", "SO"],
          answer: 1,
          say: "sa",
          explain: "S puis A, ça fait SA. On lit de gauche à droite !",
          explainHe: "קודם S ואז A, זה עושה SA. קוראים משמאל לימין!"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis la syllabe !",
          promptHe: "הקשיבו ובחרו את ההברה!",
          say: "ri",
          choices: ["RI", "RO", "LI"],
          answer: 0,
          explain: "RI : R + I. On entend 'rrr' au début.",
          explainHe: "RI: R ועוד I. שומעים 'rrr' בהתחלה."
        },
        {
          type: "pick",
          prompt: "R + U, ça fait quoi ?",
          promptHe: "R + U, מה זה עושה?",
          question: "R + U",
          choices: ["RU", "UR", "RO"],
          answer: 0,
          say: "ru",
          explain: "R puis U, ça fait RU.",
          explainHe: "קודם R ואז U, זה עושה RU."
        },
        {
          type: "listen",
          prompt: "Écoute et choisis la syllabe !",
          promptHe: "הקשיבו ובחרו את ההברה!",
          say: "so",
          choices: ["SU", "SO", "RO"],
          answer: 1,
          explain: "SO : S + O. SU finit par U, et RO commence par R.",
          explainHe: "SO זה S ועוד O. אבל SU נגמרת ב-U ו-RO מתחילה ב-R."
        },
        {
          type: "match",
          prompt: "Relie les lettres à la bonne syllabe !",
          promptHe: "חברו את האותיות להברה הנכונה!",
          pairs: [
            ["S + I", "SI"],
            ["R + A", "RA"],
            ["S + U", "SU"],
            ["R + E", "RE"]
          ],
          explain: "La consonne + la voyelle = la syllabe !",
          explainHe: "עיצור + תנועה = הברה!"
        },
        {
          type: "pick",
          prompt: "Trouve l'intrus : il ne commence pas par S !",
          promptHe: "מצאו את היוצא מן הכלל: הוא לא מתחיל ב-S!",
          choices: ["SA", "RE", "SI"],
          answer: 1,
          say: "sa. re. si.",
          explain: "RE commence par R ! SA et SI commencent par S.",
          explainHe: "RE מתחילה ב-R! אבל SA ו-SI מתחילות ב-S."
        },
        {
          type: "listen",
          prompt: "Écoute bien et choisis !",
          promptHe: "הקשיבו טוב ובחרו!",
          say: "se",
          choices: ["RE", "SE", "LE"],
          answer: 1,
          explain: "SE : le serpent SSS + E.",
          explainHe: "SE: הנחש SSS ועוד E."
        },
        {
          type: "pick",
          prompt: "Quelle syllabe finit par O ?",
          promptHe: "איזו הברה נגמרת ב-O?",
          choices: ["RO", "RA", "SI"],
          answer: 0,
          say: "ro",
          explain: "RO finit par O. RA finit par A, SI finit par I.",
          explainHe: "RO נגמרת ב-O. אבל RA נגמרת ב-A ו-SI נגמרת ב-I."
        },
        {
          type: "listen",
          prompt: "Écoute et choisis la syllabe !",
          promptHe: "הקשיבו ובחרו את ההברה!",
          say: "ra",
          choices: ["RA", "LA", "MA"],
          answer: 0,
          explain: "RA : on entend 'rrr' au début, comme un moteur !",
          explainHe: "RA: שומעים 'rrr' בהתחלה, כמו מנוע!"
        }
      ],
      joke: {
        q: "Pourquoi le livre de maths est-il triste ?",
        a: "Parce qu'il a trop de problèmes !",
        qHe: "למה ספר החשבון עצוב?",
        aHe: "כי יש לו יותר מדי בעיות!"
      }
    },
    {
      id: "n2-s3",
      name: "P, T et les mots",
      nameHe: "P, T והמילים",
      emoji: "🏍️",
      lesson: {
        cards: [
          {
            title: "La famille de P",
            titleHe: "המשפחה של P",
            body: "P pétille : PA PE PI PO PU. Comme au début de PAPA !",
            bodyHe: "P מתפוצצת כמו בועה: PA PE PI PO PU. כמו בהתחלה של PAPA!",
            big: "PA PE PI PO PU",
            say: "pa. pe. pi. po. pu."
          },
          {
            title: "La famille de T",
            titleHe: "המשפחה של T",
            body: "T tape : TA TE TI TO TU. Comme au début de TOMATE !",
            bodyHe: "T מתקתקת: TA TE TI TO TU. כמו בהתחלה של TOMATE!",
            big: "TA TE TI TO TU",
            say: "ta. te. ti. to. tu."
          },
          {
            title: "Des syllabes aux mots !",
            titleHe: "מהברות למילים!",
            body: "Deux syllabes ensemble font un mot : PA + PA = PAPA, et MO + TO = MOTO !",
            bodyHe: "שתי הברות ביחד עושות מילה: PA + PA = PAPA, וגם MO + TO = MOTO!",
            big: "PA + PA = PAPA",
            say: "pa. pa. papa !"
          },
          {
            title: "Le S qui dort",
            titleHe: "ה-S שישנה",
            body: "Dans TAPIS, le S de la fin dort : on ne l'entend pas. On lit 'tapi' !",
            bodyHe: "במילה TAPIS האות S שבסוף ישנה: לא שומעים אותה. קוראים 'tapi'!",
            big: "TAPIS",
            say: "tapis"
          }
        ]
      },
      exercises: [
        {
          type: "pick",
          prompt: "P + O, ça fait quoi ?",
          promptHe: "P + O, מה זה עושה?",
          question: "P + O",
          choices: ["OP", "PO", "PU"],
          answer: 1,
          say: "po",
          explain: "P puis O, ça fait PO. On lit de gauche à droite !",
          explainHe: "קודם P ואז O, זה עושה PO. קוראים משמאל לימין!"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis la syllabe !",
          promptHe: "הקשיבו ובחרו את ההברה!",
          say: "tu",
          choices: ["TU", "TI", "PU"],
          answer: 0,
          explain: "TU : T + U.",
          explainHe: "TU זה T ועוד U."
        },
        {
          type: "build",
          prompt: "Assemble le mot PAPA !",
          promptHe: "הרכיבו את המילה PAPA!",
          tiles: ["PA", "PO", "PA"],
          answer: ["PA", "PA"],
          say: "papa",
          explain: "PA + PA = PAPA !",
          explainHe: "PA ועוד PA = PAPA!"
        },
        {
          type: "build",
          prompt: "Assemble le mot MOTO ! 🏍️",
          promptHe: "הרכיבו את המילה MOTO! 🏍️",
          tiles: ["TO", "MO", "MA"],
          answer: ["MO", "TO"],
          say: "moto",
          explain: "MO + TO = MOTO ! Vroum vroum !",
          explainHe: "MO ועוד TO = MOTO! ברום ברום!"
        },
        {
          type: "match",
          prompt: "Relie chaque mot à son image !",
          promptHe: "חברו כל מילה לתמונה שלה!",
          pairs: [
            ["PAPA", "👨"],
            ["MOTO", "🏍️"],
            ["TOMATE", "🍅"],
            ["PIRATE", "🏴‍☠️"]
          ],
          explain: "Bravo ! Tu lis déjà des vrais mots !",
          explainHe: "כל הכבוד! אתם כבר קוראים מילים אמיתיות!"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis le mot !",
          promptHe: "הקשיבו ובחרו את המילה!",
          say: "pirate",
          choices: ["PIRATE", "PILOTE", "TOMATE"],
          answer: 0,
          explain: "PI-RA-TE : on entend RA au milieu, pas LO !",
          explainHe: "PI-RA-TE: שומעים RA באמצע, לא LO!"
        },
        {
          type: "pick",
          prompt: "Quel mot va avec l'image ?",
          promptHe: "איזו מילה מתאימה לתמונה?",
          question: "🍅",
          choices: ["TOMATE", "MOTO", "TAPIS"],
          answer: 0,
          say: "tomate",
          explain: "TO-MA-TE, c'est la tomate toute rouge !",
          explainHe: "TO-MA-TE, זאת העגבנייה האדומה!"
        },
        {
          type: "build",
          prompt: "Assemble le mot TOMATE !",
          promptHe: "הרכיבו את המילה TOMATE!",
          tiles: ["MA", "TO", "TE", "TU"],
          answer: ["TO", "MA", "TE"],
          say: "tomate",
          explain: "TO + MA + TE = TOMATE !",
          explainHe: "TO ועוד MA ועוד TE = TOMATE!"
        },
        {
          type: "pick",
          prompt: "Quel mot va avec l'image ?",
          promptHe: "איזו מילה מתאימה לתמונה?",
          question: "🧑‍✈️",
          choices: ["PILOTE", "PIRATE", "SALAMI"],
          answer: 0,
          say: "pilote",
          explain: "PI-LO-TE : le pilote de l'avion !",
          explainHe: "PI-LO-TE: הטייס של המטוס!"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis le mot !",
          promptHe: "הקשיבו ובחרו את המילה!",
          say: "tapis",
          choices: ["TAPIS", "TOMATE", "PIRATE"],
          answer: 0,
          explain: "TAPIS : le S de la fin dort, on lit 'tapi' !",
          explainHe: "TAPIS: האות S שבסוף ישנה, קוראים 'tapi'!"
        }
      ],
      joke: {
        q: "Pourquoi la maîtresse porte des lunettes de soleil ?",
        a: "Parce que ses élèves sont brillants !",
        qHe: "למה המורה מרכיבה משקפי שמש?",
        aHe: "כי התלמידים שלה מבריקים!"
      }
    },
    {
      id: "n2-s4",
      name: "Le grand défi",
      nameHe: "האתגר הגדול",
      emoji: "🏆",
      lesson: {
        cards: [
          {
            title: "Le grand défi !",
            titleHe: "האתגר הגדול!",
            body: "Bravo, tu connais M, L, S, R, P et T ! Levy est fier de toi. Montre tout ce que tu sais lire !",
            bodyHe: "כל הכבוד, אתם מכירים את M, L, S, R, P ו-T! לוי גאה בכם. תראו כל מה שאתם יודעים לקרוא!",
            big: "M L S R P T",
            say: "à toi de jouer !"
          }
        ]
      },
      exercises: [
        {
          type: "listen",
          prompt: "Écoute et choisis la syllabe !",
          promptHe: "הקשיבו ובחרו את ההברה!",
          say: "mu",
          choices: ["MU", "MO", "LU"],
          answer: 0,
          explain: "MU : M + U.",
          explainHe: "MU זה M ועוד U."
        },
        {
          type: "pick",
          prompt: "T + I, ça fait quoi ?",
          promptHe: "T + I, מה זה עושה?",
          question: "T + I",
          choices: ["IT", "TI", "TU"],
          answer: 1,
          say: "ti",
          explain: "T puis I, ça fait TI. On lit de gauche à droite !",
          explainHe: "קודם T ואז I, זה עושה TI. קוראים משמאל לימין!"
        },
        {
          type: "build",
          prompt: "Assemble le mot MAMAN !",
          promptHe: "הרכיבו את המילה MAMAN!",
          tiles: ["MAN", "MA", "MO"],
          answer: ["MA", "MAN"],
          say: "maman",
          explain: "MA + MAN = MAMAN !",
          explainHe: "MA ועוד MAN = MAMAN!"
        },
        {
          type: "match",
          prompt: "Relie les lettres à leur syllabe !",
          promptHe: "חברו את האותיות להברה שלהן!",
          pairs: [
            ["P + I", "PI"],
            ["T + O", "TO"],
            ["R + U", "RU"],
            ["S + E", "SE"]
          ],
          explain: "La consonne + la voyelle = la syllabe !",
          explainHe: "עיצור + תנועה = הברה!"
        },
        {
          type: "listen",
          prompt: "Écoute et choisis le mot !",
          promptHe: "הקשיבו ובחרו את המילה!",
          say: "salami",
          choices: ["SALAMI", "TOMATE", "PILOTE"],
          answer: 0,
          explain: "SA-LA-MI : trois syllabes ! Miam !",
          explainHe: "SA-LA-MI: שלוש הברות! טעים!"
        },
        {
          type: "pick",
          prompt: "Quelle syllabe finit par U ?",
          promptHe: "איזו הברה נגמרת ב-U?",
          choices: ["SU", "SA", "SO"],
          answer: 0,
          say: "su",
          explain: "SU finit par U. SA finit par A, SO finit par O.",
          explainHe: "SU נגמרת ב-U. אבל SA נגמרת ב-A ו-SO נגמרת ב-O."
        },
        {
          type: "build",
          prompt: "Assemble le mot PILOTE !",
          promptHe: "הרכיבו את המילה PILOTE!",
          tiles: ["LO", "PI", "TE", "PA"],
          answer: ["PI", "LO", "TE"],
          say: "pilote",
          explain: "PI + LO + TE = PILOTE !",
          explainHe: "PI ועוד LO ועוד TE = PILOTE!"
        },
        {
          type: "listen",
          prompt: "Écoute bien et choisis !",
          promptHe: "הקשיבו טוב ובחרו!",
          say: "re",
          choices: ["RE", "RA", "LE"],
          answer: 0,
          explain: "RE : R + E. On entend 'rrr' au début.",
          explainHe: "RE: R ועוד E. שומעים 'rrr' בהתחלה."
        },
        {
          type: "pick",
          prompt: "Quel mot va avec l'image ?",
          promptHe: "איזו מילה מתאימה לתמונה?",
          question: "🏴‍☠️",
          choices: ["PIRATE", "PILOTE", "PAPA"],
          answer: 0,
          say: "pirate",
          explain: "PI-RA-TE : le pirate du bateau !",
          explainHe: "PI-RA-TE: הפיראט של הספינה!"
        },
        {
          type: "match",
          prompt: "Relie chaque mot à son image !",
          promptHe: "חברו כל מילה לתמונה שלה!",
          pairs: [
            ["PILOTE", "🧑‍✈️"],
            ["MOTO", "🏍️"],
            ["TOMATE", "🍅"]
          ],
          explain: "Super ! Tu lis des mots entiers !",
          explainHe: "מעולה! אתם קוראים מילים שלמות!"
        },
        {
          type: "build",
          prompt: "Assemble le mot PIRATE !",
          promptHe: "הרכיבו את המילה PIRATE!",
          tiles: ["RA", "PI", "TE", "RO"],
          answer: ["PI", "RA", "TE"],
          say: "pirate",
          explain: "PI + RA + TE = PIRATE !",
          explainHe: "PI ועוד RA ועוד TE = PIRATE!"
        },
        {
          type: "pick",
          prompt: "Combien de syllabes dans TOMATE ?",
          promptHe: "כמה הברות יש במילה TOMATE?",
          question: "TOMATE",
          choices: ["2", "3", "4"],
          answer: 1,
          say: "to. ma. te.",
          explain: "TO-MA-TE : trois syllabes !",
          explainHe: "TO-MA-TE: שלוש הברות!"
        }
      ],
      joke: {
        q: "Quel est le comble pour un professeur de géographie ?",
        a: "Perdre le nord !",
        qHe: "מה השיא בשביל מורה לגאוגרפיה?",
        aHe: "לאבד את הצפון! (גם בעברית זה אומר להתבלבל לגמרי)"
      }
    }
  ]
});
