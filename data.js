const appData = {
    A1: {
    modules: [
        {
            id: "A1.1",
            title: "Survie & Bases",
            image: "A1.1.png",
            description: "Alphabet, prononciation, salutations complexes et le verbe Būti.",
            subModules: [
                {
                    id: "A1.1.1",
                    title: "Salutations & Premiers Contacts 👋",
                    theory: `
                        <h3>La Politesse Lituanienne</h3>
                        <p>En Lituanie, la forme de salutation dépend de l'heure et du degré de familiarité. Le vouvoiement (Jūs) est très important avec les inconnus.</p>
                        
                        <h4>Vocabulaire Thématique : Les Rencontres</h4>
                        <ul>
                            <li><strong>Labas</strong> : Salut (Informel)</li>
                            <li><strong>Laba diena</strong> : Bonjour (Formel, utilisé de 10h à 18h)</li>
                            <li><strong>Labas rytas</strong> : Bonjour (Le matin, avant 10h)</li>
                            <li><strong>Labas vakaras</strong> : Bonsoir</li>
                            <li><strong>Labanakt</strong> : Bonne nuit</li>
                            <li><strong>Kaip sekasi?</strong> : Comment ça va ?</li>
                            <li><strong>Gerai, ačiū</strong> : Bien, merci</li>
                            <li><strong>Malonu susipažinti</strong> : Enchanté(e)</li>
                        </ul>
                        
                        <h4>Exemples en contexte :</h4>
                        <p>- <em>Labas rytas, kaip sekasi?</em> (Bonjour, comment ça va ?)<br>
                        - <em>Gerai, ačiū. O tau?</em> (Bien, merci. Et toi ?)</p>
                    `,
                    exercises: [
                        { type: "qcm", question: "Il est 8h du matin. Vous entrez dans une boulangerie. Que dites-vous ?", options: ["Laba diena", "Labas rytas", "Labas vakaras"], correctAnswer: "Labas rytas", feedback: "Exact ! Labas rytas s'utilise le matin." },
                        { type: "fill", question: "On vous présente quelqu'un pour la première fois. Vous répondez : ___ susipažinti.", options: ["Gerai", "Labanakt", "Malonu"], correctAnswer: "Malonu", feedback: "Malonu susipažinti = Enchanté de vous rencontrer." },
                        { type: "qcm", question: "Que répond-on généralement à 'Kaip sekasi?' (Comment ça va) ?", options: ["Gerai, ačiū", "Labanakt", "Labas"], correctAnswer: "Gerai, ačiū", feedback: "Gerai, ačiū = Bien, merci." },
                        { type: "fill", question: "Il est 19h00, vous saluez un collègue : Labas ___", options: ["rytas", "vakaras", "diena"], correctAnswer: "vakaras", feedback: "Labas vakaras = Bonsoir." },
                        { type: "qcm", question: "Un ami vous dit 'Gerai, ačiū. O tau?'. Que demande-t-il ?", options: ["Et toi ?", "Tu vas où ?", "Pourquoi ?"], correctAnswer: "Et toi ?", feedback: "'O tau?' signifie 'Et toi ?' (À toi)." },
                        { type: "fill", question: "Pour souhaiter une bonne nuit : ___ !", options: ["Laba diena", "Labanakt", "Labas"], correctAnswer: "Labanakt", feedback: "Labanakt = Bonne nuit." },
                        { type: "qcm", question: "Lequel de ces termes est STRICTEMENT informel ?", options: ["Labas", "Laba diena", "Labanakt"], correctAnswer: "Labas", feedback: "'Labas' s'utilise uniquement avec les amis ou la famille." },
                        { type: "fill", question: "Je dis bonjour au facteur à 14h : Laba ___", options: ["diena", "rytas", "vakaras"], correctAnswer: "diena", feedback: "Laba diena s'utilise en pleine journée." },
                        { type: "qcm", question: "Dans 'Malonu susipažinti', que veut dire 'Malonu' ?", options: ["Agréable / Plaisir", "Rencontrer", "Moi"], correctAnswer: "Agréable / Plaisir", feedback: "Malonu veut dire Agréable. (C'est un plaisir de vous rencontrer)." },
                        { type: "fill", question: "Kaip ___? (Comment ça va ?)", options: ["sekasi", "malonu", "labas"], correctAnswer: "sekasi", feedback: "Kaip sekasi? = Comment ça va / Comment ça réussit ?" }
                    ]
                },
                {
                    id: "A1.1.2",
                    title: "Le Verbe Būti & Les Professions 🧑‍🏫",
                    theory: `
                        <h3>Le Verbe Être (Būti) et les Identités</h3>
                        <p>Le verbe Būti est irrégulier mais fondamental. Il permet de se présenter, de donner sa nationalité ou sa profession.</p>
                        
                        <h4>Conjugaison de Būti (Présent)</h4>
                        <p>Aš <strong>esu</strong>, Tu <strong>esi</strong>, Jis/Ji <strong>yra</strong>, Mes <strong>esame</strong>, Jūs <strong>esate</strong>, Jie/Jos <strong>yra</strong>.</p>
                        
                        <h4>Vocabulaire Thématique : Les Professions</h4>
                        <ul>
                            <li><strong>Mokytojas / Mokytoja</strong> : Professeur (H/F)</li>
                            <li><strong>Studentas / Studentė</strong> : Étudiant(e)</li>
                            <li><strong>Gydytojas / Gydytoja</strong> : Médecin (H/F)</li>
                            <li><strong>Inžinierius</strong> : Ingénieur</li>
                            <li><strong>Prancūzas / Prancūzė</strong> : Français(e)</li>
                            <li><strong>Lietuvis / Lietuvė</strong> : Lituanien(ne)</li>
                        </ul>
                    `,
                    exercises: [
                        { type: "fill", question: "Aš ___ studentas (Je suis étudiant).", options: ["esu", "esi", "yra"], correctAnswer: "esu", feedback: "Aš esu = Je suis." },
                        { type: "qcm", question: "Comment dire 'Elle est professeur' ?", options: ["Ji yra mokytoja", "Jis yra mokytojas", "Ji esi mokytoja"], correctAnswer: "Ji yra mokytoja", feedback: "Ji (Elle) + yra + mokytoja (féminin)." },
                        { type: "fill", question: "Jūs ___ iš Prancūzijos (Vous êtes de France).", options: ["esame", "esate", "yra"], correctAnswer: "esate", feedback: "Jūs esate = Vous êtes." },
                        { type: "qcm", question: "Lequel est un mot féminin ?", options: ["Prancūzas", "Studentas", "Lietuvė"], correctAnswer: "Lietuvė", feedback: "Lietuvė (Lituanienne) a une terminaison féminine en -ė." },
                        { type: "fill", question: "Mes ___ inžinieriai (Nous sommes ingénieurs).", options: ["yra", "esate", "esame"], correctAnswer: "esame", feedback: "Mes esame = Nous sommes." },
                        { type: "qcm", question: "Que signifie 'Gydytojas' ?", options: ["Professeur", "Médecin", "Étudiant"], correctAnswer: "Médecin", feedback: "Gydytojas = Médecin (Masculin)." },
                        { type: "fill", question: "Ar tu ___ lietuvis? (Es-tu lituanien ?)", options: ["esi", "esu", "yra"], correctAnswer: "esi", feedback: "Tu esi = Tu es." },
                        { type: "qcm", question: "Comment se conjugue 'Būti' pour 'Jie' (Ils) ?", options: ["esame", "esate", "yra"], correctAnswer: "yra", feedback: "La forme 'yra' sert pour Il, Elle, Ils, Elles." },
                        { type: "fill", question: "Ji yra ___. (Elle est française).", options: ["Prancūzas", "Prancūzė", "Prancūzai"], correctAnswer: "Prancūzė", feedback: "Prancūzė = Française (Féminin)." },
                        { type: "qcm", question: "Si un homme lituanien se présente, il dira :", options: ["Aš esu Lietuvė", "Aš esu Lietuvis", "Aš esi Lietuvis"], correctAnswer: "Aš esu Lietuvis", feedback: "Aš esu + Lietuvis (Masculin)." }
                    ]
                },
                {
                    id: "A1.1.3",
                    title: "Les Nombres et L'Âge 🎂",
                    theory: `
                        <h3>Exprimer son Âge</h3>
                        <p>En Lituanien, l'âge ne s'exprime pas avec le verbe avoir ("J'ai 20 ans") mais avec le Datif ("À moi est 20 ans").</p>
                        <p><strong>Man yra dvidešimt metų.</strong> (À moi est 20 années = J'ai 20 ans).</p>
                        
                        <h4>Vocabulaire Thématique : Les dizaines</h4>
                        <ul>
                            <li><strong>Dešimt</strong> : 10</li>
                            <li><strong>Dvidešimt</strong> : 20</li>
                            <li><strong>Trisdešimt</strong> : 30</li>
                            <li><strong>Keturiasdešimt</strong> : 40</li>
                            <li><strong>Penkiasdešimt</strong> : 50</li>
                            <li><strong>Metai / Metų</strong> : Années / Ans</li>
                            <li><strong>Kiek tau metų?</strong> : Quel âge as-tu ?</li>
                        </ul>
                    `,
                    exercises: [
                        { type: "fill", question: "___ yra dvidešimt metų (J'ai 20 ans).", options: ["Aš", "Man", "Tau"], correctAnswer: "Man", feedback: "On utilise le Datif 'Man' (À moi)." },
                        { type: "qcm", question: "Comment dire '30' ?", options: ["Dvidešimt", "Trisdešimt", "Penkiasdešimt"], correctAnswer: "Trisdešimt", feedback: "Tris (3) + dešimt (10) = Trisdešimt." },
                        { type: "fill", question: "Kiek ___ metų? (Quel âge as-tu ?)", options: ["tu", "man", "tau"], correctAnswer: "tau", feedback: "Tau = À toi (Datif de Tu)." },
                        { type: "qcm", question: "Que signifie 'Metų' ?", options: ["Mois", "Jours", "Années (Ans)"], correctAnswer: "Années (Ans)", feedback: "Metų = Ans." },
                        { type: "fill", question: "Mano tėčiui yra ___ metų (Mon père a 50 ans).", options: ["Keturiasdešimt", "Penkiasdešimt", "Dešimt"], correctAnswer: "Penkiasdešimt", feedback: "Penki (5) + dešimt = 50." },
                        { type: "qcm", question: "Que signifie 'Jam yra keturiasdešimt metų' ?", options: ["Il a 40 ans", "Elle a 40 ans", "J'ai 40 ans"], correctAnswer: "Il a 40 ans", feedback: "Jam = À lui (Il)." },
                        { type: "fill", question: "Man ___ trisdešimt metų.", options: ["esu", "yra", "turiu"], correctAnswer: "yra", feedback: "On utilise 'yra' (est) et non pas 'turiu' (j'ai) pour l'âge en lituanien !" },
                        { type: "qcm", question: "Si 2 = Du, et 10 = Dešimt, alors 20 se dit :", options: ["Du dešimt", "Dvidešimt", "Dvidešim"], correctAnswer: "Dvidešimt", feedback: "Dvidešimt = 20." },
                        { type: "fill", question: "Jam yra ___ metų. (Il a 10 ans).", options: ["Dešimt", "Vienas", "Nulis"], correctAnswer: "Dešimt", feedback: "Dešimt = 10." },
                        { type: "qcm", question: "Quel cas grammatical utilise-t-on pour la personne qui donne son âge (ex: Man, Tau, Jam) ?", options: ["Nominatif", "Datif", "Accusatif"], correctAnswer: "Datif", feedback: "On utilise le Datif (À qui ?)." }
                    ]
                }
            ]
        },
        {
            id: "A1.2",
            title: "Entourage & Lieux",
            image: "A1.2.png",
            description: "Vocabulaire de la ville, le locatif (où) et les verbes de mouvement.",
            subModules: [
                {
                    id: "A1.2.1",
                    title: "Où suis-je ? Le Locatif 📍",
                    theory: `
                        <h3>Le Locatif (Vietininkas)</h3>
                        <p>Le locatif répond à la question <strong>Kur?</strong> (Où ?). Il indique la position sans mouvement. Il se forme en changeant la fin du mot.</p>
                        
                        <h4>Règles de base</h4>
                        <ul>
                            <li>-as ➡️ <strong>-e</strong> (Miestas -> Miest<strong>e</strong> = Dans la ville)</li>
                            <li>-a ➡️ <strong>-oje</strong> (Gatvė -> Gatv<strong>ėje</strong> = Dans la rue)</li>
                            <li>-ė ➡️ <strong>-ėje</strong> (Kavinė -> Kavin<strong>ėje</strong> = Au café)</li>
                        </ul>
                        
                        <h4>Vocabulaire Thématique : Les Lieux</h4>
                        <ul>
                            <li><strong>Miestas</strong> : Ville</li>
                            <li><strong>Parduotuvė</strong> : Magasin</li>
                            <li><strong>Kavinė</strong> : Café (lieu)</li>
                            <li><strong>Bankas</strong> : Banque</li>
                            <li><strong>Parkas</strong> : Parc</li>
                            <li><strong>Namai</strong> : Maison (Nam<strong>uose</strong> = À la maison)</li>
                        </ul>
                    `,
                    exercises: [
                        { type: "fill", question: "Aš esu (Miestas) -> Aš esu ___.", options: ["Miestą", "Mieste", "Miesto"], correctAnswer: "Mieste", feedback: "-as devient -e au locatif." },
                        { type: "qcm", question: "Comment dire 'À la maison' (Exception) ?", options: ["Namose", "Namuose", "Name"], correctAnswer: "Namuose", feedback: "Namai donne Namuose (À la maison)." },
                        { type: "fill", question: "Jis yra (Bankas) -> Jis yra ___.", options: ["Banke", "Banką", "Bankoje"], correctAnswer: "Banke", feedback: "Bankas -> Banke." },
                        { type: "qcm", question: "Kur tu esi? (Où es-tu ?). Que devez-vous répondre ?", options: ["Aš esu parkas", "Aš esu parke", "Aš esu parką"], correctAnswer: "Aš esu parke", feedback: "Il faut utiliser le locatif (-e) pour indiquer la position." },
                        { type: "fill", question: "Mes esame (Kavinė) -> Mes esame ___.", options: ["Kavinėje", "Kavinėse", "Kavinę"], correctAnswer: "Kavinėje", feedback: "-ė devient -ėje." },
                        { type: "qcm", question: "Que signifie 'Parduotuvėje' ?", options: ["Dans la ville", "Dans le magasin", "Dans le café"], correctAnswer: "Dans le magasin", feedback: "Parduotuvė = Magasin." },
                        { type: "fill", question: "Aš esu ___ (Dans la rue - Gatvė).", options: ["Gatve", "Gatvėje", "Gatvose"], correctAnswer: "Gatvėje", feedback: "-ė -> -ėje." },
                        { type: "qcm", question: "Le locatif s'utilise pour :", options: ["Le mouvement vers un lieu", "La position statique dans un lieu", "L'objet direct"], correctAnswer: "La position statique dans un lieu", feedback: "Le locatif indique 'Dans' ou 'À' sans mouvement (Kur)." },
                        { type: "fill", question: "Vaikai yra (Parkas) -> Vaikai yra ___.", options: ["Parke", "Parką", "Parkose"], correctAnswer: "Parke", feedback: "Parkas -> Parke." },
                        { type: "qcm", question: "Lequel de ces mots est au locatif ?", options: ["Miestą", "Miestas", "Mieste"], correctAnswer: "Mieste", feedback: "Mieste est le locatif de Miestas." }
                    ]
                },
                {
                    id: "A1.2.2",
                    title: "Verbes de Mouvement & l'Accusatif 🚶",
                    theory: `
                        <h3>Aller quelque part (Eiti / Važiuoti)</h3>
                        <p>Quand il y a un mouvement <strong>vers</strong> un lieu (Direction), on utilise la préposition <strong>Į</strong> (À / Dans / Vers) suivie de <strong>l'Accusatif</strong>.</p>
                        
                        <h4>Les Verbes</h4>
                        <ul>
                            <li><strong>Eiti</strong> : Aller à pied (Aš einu, Tu eini, Jis/Ji eina)</li>
                            <li><strong>Važiuoti</strong> : Aller en véhicule (Aš važiuoju, Tu važiuoji, Jis/Ji važiuoja)</li>
                        </ul>
                        
                        <h4>Exemples</h4>
                        <p>Aš einu <strong>į parką</strong> (Je vais au parc). (Parkas -> Parką)<br>
                        Jis važiuoja <strong>į miestą</strong> (Il va en ville). (Miestas -> Miestą)</p>
                    `,
                    exercises: [
                        { type: "fill", question: "Aš einu į (Bankas) -> Aš einu į ___.", options: ["Banke", "Banką", "Bankas"], correctAnswer: "Banką", feedback: "Après Į, on utilise l'accusatif (-as -> -ą)." },
                        { type: "qcm", question: "Lequel utiliser si on va à l'école en marchant ?", options: ["Eiti", "Važiuoti", "Būti"], correctAnswer: "Eiti", feedback: "Eiti = Aller à pied." },
                        { type: "fill", question: "Mes važiuojame į (Vilnius) -> Mes važiuojame į ___.", options: ["Vilnių", "Vilniuje", "Vilniui"], correctAnswer: "Vilnių", feedback: "-us devient -ų à l'accusatif (Vilnių)." },
                        { type: "qcm", question: "Que signifie 'Jis važiuoja į kavinę' ?", options: ["Il est au café", "Il va au café en voiture/bus", "Il marche vers le café"], correctAnswer: "Il va au café en voiture/bus", feedback: "Važiuoja implique l'utilisation d'un véhicule." },
                        { type: "fill", question: "Ar tu ___ į parduotuvę? (Est-ce que tu vas à pied au magasin ?)", options: ["eini", "eina", "einu"], correctAnswer: "eini", feedback: "Tu eini = Tu vas (à pied)." },
                        { type: "qcm", question: "Pour dire 'Je suis dans le parc', je dis 'Aš esu parke'. Comment dire 'Je vais au parc' ?", options: ["Aš einu parke", "Aš einu į parką", "Aš einu į parke"], correctAnswer: "Aš einu į parką", feedback: "Mouvement = į + Accusatif (parką)." },
                        { type: "fill", question: "Ji ___ į darbą (Elle va au travail en voiture).", options: ["eina", "važiuoja", "yra"], correctAnswer: "važiuoja", feedback: "Važiuoja = Elle va (en véhicule)." },
                        { type: "qcm", question: "Dans 'Aš einu į mokyklą', pourquoi 'mokykla' prend un 'ą' ?", options: ["C'est l'accusatif de direction après į", "C'est le locatif", "C'est une erreur"], correctAnswer: "C'est l'accusatif de direction après į", feedback: "La direction exige la préposition Į + l'Accusatif. Pour les noms en -a (mokykla), la terminaison devient -ą." },
                        { type: "fill", question: "Rytoj aš ___ į Kauną (Demain, je vais à Kaunas en bus).", options: ["važiuoju", "einu", "esu"], correctAnswer: "važiuoju", feedback: "Pour une autre ville, on utilise presque toujours važiuoti." },
                        { type: "qcm", question: "Que veut dire la préposition 'Į' ?", options: ["Dans (statique)", "Avec", "Vers / Dans / À (direction)"], correctAnswer: "Vers / Dans / À (direction)", feedback: "Į marque la direction." }
                    ]
                }
            ]
        },
        {
            id: "A1.3",
            title: "Verbes d'Action & Routine",
            image: "A1.3.png",
            description: "Les verbes du quotidien, Manger, Boire, Vouloir et le présent régulier.",
            subModules: [
                {
                    id: "A1.3.1",
                    title: "Manger & Boire 🍽️",
                    theory: `
                        <h3>Les verbes Valgyti et Gerti</h3>
                        <p>Ces verbes s'utilisent tous les jours, suivis de l'accusatif pour exprimer ce que l'on mange/boit, ou du génitif si la quantité n'est pas définie (du pain, de l'eau).</p>
                        
                        <h4>Conjugaisons</h4>
                        <p><strong>Valgyti (Manger)</strong> : Aš valg-au, Tu valg-ai, Jis/Ji valg-o.<br>
                        <strong>Gerti (Boire)</strong> : Aš geri-u, Tu geri-i, Jis/Ji geri-a.</p>
                        
                        <h4>Vocabulaire : Les Repas</h4>
                        <ul>
                            <li><strong>Pusryčiai</strong> : Petit-déjeuner</li>
                            <li><strong>Pietūs</strong> : Déjeuner</li>
                            <li><strong>Vakarienė</strong> : Dîner</li>
                            <li><strong>Skanu !</strong> : C'est délicieux !</li>
                        </ul>
                    `,
                    exercises: [
                        { type: "fill", question: "Aš ___ kavą (Je bois du café).", options: ["geriu", "valgau", "geria"], correctAnswer: "geriu", feedback: "Aš geriu = Je bois." },
                        { type: "qcm", question: "Que signifie 'Pusryčiai' ?", options: ["Déjeuner", "Dîner", "Petit-déjeuner"], correctAnswer: "Petit-déjeuner", feedback: "Pusryčiai = Petit-déjeuner." },
                        { type: "fill", question: "Jis ___ obuolį (Il mange une pomme).", options: ["valgau", "valgo", "valgai"], correctAnswer: "valgo", feedback: "Jis valgo = Il mange." },
                        { type: "qcm", question: "Comment dire 'C'est délicieux !' ?", options: ["Gerai !", "Skanu !", "Malonu !"], correctAnswer: "Skanu !", feedback: "Skanu ! = Délicieux / Bon goût." },
                        { type: "fill", question: "Tu ___ vandenį (Tu bois de l'eau).", options: ["geri", "geriu", "geria"], correctAnswer: "geri", feedback: "Tu geri = Tu bois." },
                        { type: "qcm", question: "Que mange-t-on le soir (Dîner) ?", options: ["Pietūs", "Pusryčiai", "Vakarienė"], correctAnswer: "Vakarienė", feedback: "Vakarienė = Dîner." },
                        { type: "fill", question: "Mes ___ (Nous mangeons).", options: ["valgome", "valgote", "valgo"], correctAnswer: "valgome", feedback: "Mes valgome = Nous mangeons." },
                        { type: "qcm", question: "Dans 'Aš geriu kavą', à quel cas est 'kavą' ?", options: ["Nominatif", "Accusatif", "Locatif"], correctAnswer: "Accusatif", feedback: "Kavą est l'objet direct, donc accusatif (-a -> -ą)." },
                        { type: "fill", question: "Jie ___ (Ils boivent).", options: ["geria", "geriame", "geriate"], correctAnswer: "geria", feedback: "Jie geria = Ils boivent." },
                        { type: "qcm", question: "Que signifie 'Pietūs' ?", options: ["Petit-déjeuner", "Déjeuner", "Dîner"], correctAnswer: "Déjeuner", feedback: "Pietūs = Déjeuner (repas du midi)." }
                    ]
                },
                {
                    id: "A1.3.2",
                    title: "Le Verbe Norėti (Vouloir) 💭",
                    theory: `
                        <h3>Exprimer la Volonté</h3>
                        <p>Le verbe <strong>Norėti</strong> (Vouloir) est indispensable. Il est suivi soit d'un autre verbe à l'infinitif, soit d'un nom au <strong>Génitif</strong> (pour demander "un peu de").</p>
                        
                        <h4>Conjugaison de Norėti</h4>
                        <p>Aš nori-u, Tu nori, Jis/Ji nori, Mes nori-me, Jūs nori-te, Jie/Jos nori.</p>
                        
                        <h4>Le Génitif (Kilminkas)</h4>
                        <p>Contrairement à l'accusatif (Je lis <em>le livre entier</em>), le verbe vouloir demande le génitif (Je veux <em>de l'eau</em>).<br>
                        Règles du Génitif singulier :<br>
                        -as -> <strong>-o</strong> (Sūris -> Sūri<strong>o</strong>)<br>
                        -a -> <strong>-os</strong> (Kava -> Kav<strong>os</strong>)</p>
                    `,
                    exercises: [
                        { type: "fill", question: "Aš ___ (Je veux).", options: ["noriu", "nori", "norime"], correctAnswer: "noriu", feedback: "Aš noriu = Je veux." },
                        { type: "qcm", question: "Que signifie 'Tu nori valgyti' ?", options: ["Tu manges", "Tu veux boire", "Tu veux manger"], correctAnswer: "Tu veux manger", feedback: "Norėti + Infinitif = Vouloir faire." },
                        { type: "fill", question: "Jis nori (Kava) -> Jis nori ___.", options: ["Kavą", "Kavos", "Kavai"], correctAnswer: "Kavos", feedback: "Après norėti, on utilise le génitif (-a -> -os)." },
                        { type: "qcm", question: "Comment dire 'Nous voulons' ?", options: ["Jūs norite", "Mes norime", "Jie nori"], correctAnswer: "Mes norime", feedback: "Mes norime = Nous voulons." },
                        { type: "fill", question: "Aš noriu ___ (Je veux de l'eau - Vanduo).", options: ["Vandens", "Vandenį", "Vanduo"], correctAnswer: "Vandens", feedback: "Le génitif de vanduo est irrégulier : vandens." },
                        { type: "qcm", question: "Pourquoi dit-on 'Aš noriu kavos' et non 'Aš noriu kavą' ?", options: ["Kava est masculin", "Norėti demande l'accusatif", "Norėti demande le génitif (partitif)"], correctAnswer: "Norėti demande le génitif (partitif)", feedback: "Le verbe norėti appelle le génitif." },
                        { type: "fill", question: "Ar jūs ___? (Voulez-vous ?)", options: ["norite", "norime", "nori"], correctAnswer: "norite", feedback: "Jūs norite = Vous voulez." },
                        { type: "qcm", question: "Quel est le génitif de 'Sūris' (Fromage) ?", options: ["Sūrį", "Sūrio", "Sūriui"], correctAnswer: "Sūrio", feedback: "-is devient -io au génitif." },
                        { type: "fill", question: "Ji ___ (Elle veut).", options: ["noriu", "nori", "norite"], correctAnswer: "nori", feedback: "Ji nori = Elle veut." },
                        { type: "qcm", question: "Comment traduire 'Je veux dormir' (Miegoti) ?", options: ["Aš miegu", "Aš noriu miegoti", "Aš noriu miegu"], correctAnswer: "Aš noriu miegoti", feedback: "Norėti + Infinitif (miegoti)." }
                    ]
                }
            ]
        },
        {
            id: "A1.4",
            title: "Goûts & Temps",
            image: "A1.4.jpeg",
            description: "J'aime, le vocabulaire du temps et des jours de la semaine.",
            subModules: [
                {
                    id: "A1.4.1",
                    title: "J'aime (Man Patinka) 💖",
                    theory: `
                        <h3>Exprimer ses goûts</h3>
                        <p>En lituanien, "J'aime" se dit de manière indirecte : "À moi plaît". On utilise donc le <strong>Datif</strong> pour la personne.</p>
                        
                        <h4>Le Datif (Naudininkas) des pronoms</h4>
                        <ul>
                            <li><strong>Man</strong> : À moi (Man patinka = J'aime)</li>
                            <li><strong>Tau</strong> : À toi (Tau patinka = Tu aimes)</li>
                            <li><strong>Jam</strong> : À lui (Jam patinka = Il aime)</li>
                            <li><strong>Jai</strong> : À elle (Jai patinka = Elle aime)</li>
                            <li><strong>Mums</strong> : À nous</li>
                            <li><strong>Jums</strong> : À vous</li>
                            <li><strong>Jiems / Joms</strong> : À eux / À elles</li>
                        </ul>
                        <p>La chose aimée reste au <strong>Nominatif</strong> (comme si elle était le sujet).<br>
                        Ex: Man patinka <strong>kava</strong> (J'aime le café).</p>
                    `,
                    exercises: [
                        { type: "fill", question: "___ patinka kava (J'aime le café).", options: ["Aš", "Man", "Mano"], correctAnswer: "Man", feedback: "Man = À moi." },
                        { type: "qcm", question: "Que signifie 'Tau patinka Lietuva' ?", options: ["Tu aimes la Lituanie", "J'aime la Lituanie", "Il aime la Lituanie"], correctAnswer: "Tu aimes la Lituanie", feedback: "Tau = À toi." },
                        { type: "fill", question: "___ patinka muzika (Elle aime la musique).", options: ["Jam", "Ji", "Jai"], correctAnswer: "Jai", feedback: "Jai = À elle." },
                        { type: "qcm", question: "Si j'aime plusieurs choses, le verbe change : Man patinka (singulier) -> Man patinKA (pluriel). Vrai ou Faux ?", options: ["Vrai", "Faux, le verbe change : patinka -> patinka", "Faux, le verbe devient patinkate"], correctAnswer: "Faux, le verbe change : patinka -> patinka", feedback: "Le verbe 'patikti' à la 3ème personne est identique au pluriel et singulier : Man patinka (il plaît / ils plaisent)." },
                        { type: "fill", question: "___ patinka sportas (Il aime le sport).", options: ["Jam", "Jai", "Jis"], correctAnswer: "Jam", feedback: "Jam = À lui." },
                        { type: "qcm", question: "Quel cas grammatical est utilisé pour la chose qu'on aime dans 'Man patinka kava' ?", options: ["Accusatif", "Génitif", "Nominatif"], correctAnswer: "Nominatif", feedback: "La chose aimée (kava) est le sujet grammatical de la phrase." },
                        { type: "fill", question: "Ar ___ patinka? (Est-ce que ça vous plaît ? - vouvoiement)", options: ["Mums", "Jums", "Jūs"], correctAnswer: "Jums", feedback: "Jums = À vous." },
                        { type: "qcm", question: "Comment dire 'Nous aimons' ?", options: ["Mes patinka", "Mums patinka", "Mums patinkame"], correctAnswer: "Mums patinka", feedback: "Mums (À nous) + Patinka (plaît)." },
                        { type: "fill", question: "Man ___ Vilnius (J'aime Vilnius).", options: ["patinku", "patinka", "esu"], correctAnswer: "patinka", feedback: "Patinka." },
                        { type: "qcm", question: "Lequel est correct ?", options: ["Aš patinka šuo", "Man patinka šunį", "Man patinka šuo"], correctAnswer: "Man patinka šuo", feedback: "Man (Datif) + Patinka + Šuo (Nominatif)." }
                    ]
                },
                {
                    id: "A1.4.2",
                    title: "Les Jours de la Semaine 📅",
                    theory: `
                        <h3>Le Calendrier Lituanien</h3>
                        <p>Les jours de la semaine lituaniens sont très logiques ! Ils signifient littéralement "Premier jour", "Deuxième jour", etc.</p>
                        
                        <h4>Les 7 jours (Dienos)</h4>
                        <ul>
                            <li><strong>Pirmadienis</strong> : Lundi (1er jour)</li>
                            <li><strong>Antradienis</strong> : Mardi (2e jour)</li>
                            <li><strong>Trečiadienis</strong> : Mercredi (3e jour)</li>
                            <li><strong>Ketvirtadienis</strong> : Jeudi (4e jour)</li>
                            <li><strong>Penktadienis</strong> : Vendredi (5e jour)</li>
                            <li><strong>Šeštadienis</strong> : Samedi (6e jour)</li>
                            <li><strong>Sekmadienis</strong> : Dimanche (7e jour)</li>
                        </ul>
                        <p><strong>Savaitė</strong> : La semaine<br>
                        <strong>Šiandien</strong> : Aujourd'hui<br>
                        <strong>Rytoj</strong> : Demain</p>
                    `,
                    exercises: [
                        { type: "fill", question: "Lundi se dit ___.", options: ["Pirmadienis", "Antradienis", "Sekmadienis"], correctAnswer: "Pirmadienis", feedback: "Pirmas (Premier) + diena (jour) = Pirmadienis." },
                        { type: "qcm", question: "Quel jour est 'Penktadienis' ?", options: ["Mercredi", "Jeudi", "Vendredi"], correctAnswer: "Vendredi", feedback: "Penktadienis = Vendredi (5e jour)." },
                        { type: "fill", question: "Le week-end commence par ___ (Samedi).", options: ["Šeštadienis", "Sekmadienis", "Penktadienis"], correctAnswer: "Šeštadienis", feedback: "Šeši (6) -> Šeštadienis." },
                        { type: "qcm", question: "Que signifie 'Šiandien' ?", options: ["Demain", "Aujourd'hui", "Hier"], correctAnswer: "Aujourd'hui", feedback: "Šiandien = Aujourd'hui." },
                        { type: "fill", question: "Dimanche est le dernier jour : ___", options: ["Šeštadienis", "Sekmadienis", "Antradienis"], correctAnswer: "Sekmadienis", feedback: "Sekmadienis = Dimanche." },
                        { type: "qcm", question: "Quel jour est entre Trečiadienis et Penktadienis ?", options: ["Antradienis", "Ketvirtadienis", "Sekmadienis"], correctAnswer: "Ketvirtadienis", feedback: "Ketvirtadienis = Jeudi (4e jour)." },
                        { type: "fill", question: "___ yra sekmadienis (Demain c'est dimanche).", options: ["Šiandien", "Rytoj", "Vakar"], correctAnswer: "Rytoj", feedback: "Rytoj = Demain." },
                        { type: "qcm", question: "Que signifie 'Savaitė' ?", options: ["Un mois", "Un jour", "Une semaine"], correctAnswer: "Une semaine", feedback: "Savaitė = Semaine." },
                        { type: "fill", question: "Mardi se dit ___.", options: ["Antradienis", "Trečiadienis", "Pirmadienis"], correctAnswer: "Antradienis", feedback: "Antras (Deuxième) -> Antradienis." },
                        { type: "qcm", question: "Si Šiandien est Pirmadienis, alors Rytoj est...", options: ["Sekmadienis", "Trečiadienis", "Antradienis"], correctAnswer: "Antradienis", feedback: "Demain de lundi, c'est mardi (Antradienis)." }
                    ]
                }
            ]
        }
    ]
    },
    A2: {
        modules: [
            {
                id: "A2.1",
                title: "Passé & Récit",
                image: "A2.1.png",
                description: "Le passé simple, raconter un voyage et s'exprimer sur les transports.",
                subModules: [
                    {
                        id: "A2.1.1",
                        title: "Le Passé Simple (Būtasis kartinis laikas) 🕰️",
                        theory: `
                            <h3>Le Passé Simple</h3>
                            <p>En lituanien, le passé simple (<em>Būtasis kartinis laikas</em>) exprime une action ponctuelle et complètement terminée dans le passé.</p>
                            
                            <h4>Conjugaison des verbes</h4>
                            <p>Les terminaisons du passé dépendent du type de verbe à la 3ème personne du singulier (soit en <strong>-o</strong>, soit en <strong>-ė</strong>).</p>
                            
                            <h5>1. Les verbes en -o (ex: Būti -> buvo)</h5>
                            <ul>
                                <li>Aš <strong>buvau</strong> (J'étais / fus)</li>
                                <li>Tu <strong>buvai</strong> (Tu étais)</li>
                                <li>Jis/Ji <strong>buvo</strong> (Il/Elle était)</li>
                                <li>Mes <strong>buvome</strong> (Nous étions)</li>
                                <li>Jūs <strong>buvote</strong> (Vous étiez)</li>
                                <li>Jie/Jos <strong>buvo</strong> (Ils/Elles étaient)</li>
                            </ul>
                            
                            <h5>2. Les verbes en -ė (ex: Daryti -> darė)</h5>
                            <ul>
                                <li>Aš <strong>dariau</strong> (J'ai fait)</li>
                                <li>Tu <strong>darei</strong> (Tu as fait)</li>
                                <li>Jis/Ji <strong>darė</strong> (Il/Elle a fait)</li>
                                <li>Mes <strong>darėme</strong> (Nous avons fait)</li>
                                <li>Jūs <strong>darėte</strong> (Vous avez fait)</li>
                                <li>Jie/Jos <strong>darė</strong> (Ils/Elles ont fait)</li>
                            </ul>
                            
                            <h4>Mots temporels utiles :</h4>
                            <p>- <em>Vakar</em> (Hier)<br>
                            - <em>Praėjusį savaitgalį</em> (Le week-end dernier)<br>
                            - <em>Prieš valandą</em> (Il y a une heure)</p>
                        `,
                        exercises: [
                            { type: "fill", question: "Aš ___ Vilniuje vakar (J'étais à Vilnius hier).", options: ["buvau", "buvai", "buvo"], correctAnswer: "buvau", feedback: "Aš buvau = J'étais (verbe būti)." },
                            { type: "qcm", question: "Comment dire 'Nous avons fait nos devoirs' ?", options: ["Mes darėme namų darbus", "Mes darėte namų darbus", "Mes darė namų darbus"], correctAnswer: "Mes darėme namų darbus", feedback: "Mes darėme = Nous avons fait." },
                            { type: "fill", question: "Ar tu ___ šį filmą? (As-tu vu ce film ? - verbe matyti/matė)", options: ["matei", "matė", "matėte"], correctAnswer: "matei", feedback: "Tu matei = Tu as vu." },
                            { type: "qcm", question: "Quelle est la traduction de 'Jie važiavo į Kauną' ?", options: ["Ils allaient à Kaunas (en véhicule)", "Ils vont à Kaunas", "Ils allaient à Kaunas (à pied)"], correctAnswer: "Ils allaient à Kaunas (en véhicule)", feedback: "Važiuoti implique un véhicule, au passé : važiavo." },
                            { type: "fill", question: "Ji ___ naują suknelę (Elle a acheté une nouvelle robe - verbe pirkti/pirko).", options: ["pirkau", "pirko", "pirkome"], correctAnswer: "pirko", feedback: "Ji pirko = Elle a acheté." },
                            { type: "qcm", question: "Comment traduire 'Je suis allé au cinéma' (à pied) ?", options: ["Aš nuėjau į kiną", "Aš nuvažiavau į kiną", "Aš esu kine"], correctAnswer: "Aš nuėjau į kiną", feedback: "Eiti (aller à pied) au passé avec préfixe de direction donne 'nuėjau'." },
                            { type: "fill", question: "Kada jūs ___? (Quand êtes-vous arrivés ? - verbe atvykti/atvyko)", options: ["atvykote", "atvykome", "atvyko"], correctAnswer: "atvykote", feedback: "Jūs atvykote = Vous êtes arrivés." },
                            { type: "qcm", question: "Que signifie 'Jis gėrė kavą ryte' ?", options: ["Il a bu du café le matin", "Il boit du café le matin", "Il veut boire du café"], correctAnswer: "Il a bu du café le matin", feedback: "Gėrė est le passé de gerti (boire)." },
                            { type: "fill", question: "Savaitgalį vaikai ___ parke (Le week-end, les enfants ont joué dans le parc - verbe žaisti/žaidė).", options: ["žaidė", "žaidėme", "žaidėte"], correctAnswer: "žaidė", feedback: "Vaikai (les enfants - 3e pers. pluriel) -> žaidė." },
                            { type: "qcm", question: "Comment se conjugue 'suprasti' (comprendre) pour 'Aš' (Je) au passé ?", options: ["supratau", "supratai", "suprato"], correctAnswer: "supratau", feedback: "Aš supratau = J'ai compris." }
                        ]
                    },
                    {
                        id: "A2.1.2",
                        title: "Raconter son Voyage & Transports 🚌",
                        theory: `
                            <h3>Le Voyage et les Déplacements</h3>
                            <p>Pour raconter vos vacances ou vos déplacements, vous aurez besoin des verbes de mouvement au passé et du vocabulaire du voyage.</p>
                            
                            <h4>Vocabulaire Thématique : Les Transports & Voyage</h4>
                            <ul>
                                <li><strong>Kelionė</strong> : Le voyage</li>
                                <li><strong>Bilietas</strong> : Le billet</li>
                                <li><strong>Lagaminas</strong> : La valise</li>
                                <li><strong>Viešbutis</strong> : L'hôtel</li>
                                <li><strong>Lėktuvas</strong> : L'avion</li>
                                <li><strong>Traukinys</strong> : Le train</li>
                            </ul>
                            
                            <h4>Exprimer l'origine et la destination au passé</h4>
                            <p>On utilise la préposition <strong>Iš</strong> (+ Génitif) pour la provenance, et <strong>Į</strong> (+ Accusatif) pour la destination.<br>
                            Ex: <em>Aš nuvažiavau iš Vilniaus į Kauną.</em> (Je suis allé de Vilnius à Kaunas en voiture).</p>
                        `,
                        exercises: [
                            { type: "fill", question: "Aš skridau lėktuvu į ___ (Vilnius - accusatif).", options: ["Vilnių", "Vilniuje", "Vilniaus"], correctAnswer: "Vilnių", feedback: "Direction = Į + Accusatif (Vilnių)." },
                            { type: "qcm", question: "Comment dit-on 'Où est ma valise ?' ?", options: ["Kur yra mano lagaminas?", "Kur yra mano bilietas?", "Kur yra mano viešbutis?"], correctAnswer: "Kur yra mano lagaminas?", feedback: "Lagaminas = Valise." },
                            { type: "fill", question: "Mes nusipirkome traukinio ___ (billet - accusatif).", options: ["bilietą", "bilietas", "bilieto"], correctAnswer: "bilietą", feedback: "Objet direct = Accusatif (bilietą)." },
                            { type: "qcm", question: "Que signifie 'Jis išvažiavo iš Vilniaus' ?", options: ["Il est parti de Vilnius", "Il va à Vilnius", "Il habite à Vilnius"], correctAnswer: "Il est parti de Vilnius", feedback: "Iš + Génitif = provenance (de Vilnius)." },
                            { type: "fill", question: "Aš užsakiau kambarį ___ (dans l'hôtel - viešbutis -> locatif).", options: ["viešbutyje", "viešbutį", "viešbučio"], correctAnswer: "viešbutyje", feedback: "Position statique = Locatif (viešbutyje)." },
                            { type: "qcm", question: "Comment traduire 'Elle est allée au magasin' (à pied) ?", options: ["Ji nuėjo į parduotuvę", "Ji nuvažiavo į parduotuvę", "Ji yra parduotuvėje"], correctAnswer: "Ji nuėjo į parduotuvę", feedback: "Nuėjo = Elle est allée à pied (į + accusatif de direction)." },
                            { type: "fill", question: "Kiek kainuoja autobuso ___? (billet)", options: ["bilietas", "bilietą", "bilieto"], correctAnswer: "bilietas", feedback: "Sujet de la phrase = Nominatif (bilietas)." },
                            { type: "qcm", question: "Que signifie 'Mūsų kelionė buvo labai įdomi' ?", options: ["Notre voyage était très intéressant", "Notre voiture était très rapide", "Notre hôtel était très beau"], correctAnswer: "Notre voyage était très intéressant", feedback: "Kelionė = Voyage." },
                            { type: "fill", question: "Jie atvyko į ___ (la gare - stotis -> accusatif).", options: ["stotį", "stotyje", "stoties"], correctAnswer: "stotį", feedback: "Direction = Į + Accusatif (stotį)." },
                            { type: "qcm", question: "Pour dire 'Nous avons voyagé en train', on utilise le cas instrumental pour le moyen de transport :", options: ["Mes keliavome traukiniu", "Mes keliavome su traukiniu", "Mes keliavome traukinyje"], correctAnswer: "Mes keliavome traukiniu", feedback: "Le moyen de transport s'exprime par l'Instrumental seul (traukiniu)." }
                        ]
                    }
                ]
            },
            {
                id: "A2.2",
                title: "Relations & L'Instrumental",
                image: "A2.2.png",
                description: "Le cas instrumental (avec qui, comment) et le vocabulaire des relations familiales.",
                subModules: [
                    {
                        id: "A2.2.1",
                        title: "L'Instrumental (Kuo? Avec quoi / avec qui) 🔧",
                        theory: `
                            <h3>Le Cas Instrumental (Įnagininkas)</h3>
                            <p>Le cas instrumental répond à la question <strong>Kuo?</strong> (Avec quoi, par quel moyen, avec qui).</p>
                            
                            <h4>1. Avec la préposition SU (avec quelqu'un / quelque chose)</h4>
                            <p>On utilise <strong>su</strong> pour exprimer l'accompagnement.<br>
                            Ex: <em>Aš kalbu su draugu.</em> (Je parle avec un ami).</p>
                            
                            <h4>2. Sans préposition (Moyens de transport, outils)</h4>
                            <p>On n'utilise pas 'su' pour les objets ou moyens de transport qu'on utilise.<br>
                            Ex: <em>Aš važiuoju autobusu.</em> (Je vais en bus). <em>Aš rašau pieštuku.</em> (J'écris au crayon).</p>
                            
                            <h4>Terminaisons courantes au singulier :</h4>
                            <ul>
                                <li>-as ➡️ <strong>-u</strong> (draugas -> draugu)</li>
                                <li>-a ➡️ <strong>-a</strong> (mama -> mama)</li>
                                <li>-ė ➡️ <strong>-e</strong> (kolegė -> kolege)</li>
                                <li>-is ➡️ <strong>-iu</strong> (brolis -> broliu)</li>
                                <li>-us ➡️ <strong>-umi</strong> (sūnus -> sūnumi)</li>
                            </ul>
                        `,
                        exercises: [
                            { type: "fill", question: "Aš važiuoju į darbą (autobusas) -> Aš važiuoju į darbą ___.", options: ["autobusu", "su autobusu", "autobuse"], correctAnswer: "autobusu", feedback: "Pas de préposition 'su' pour les moyens de transport !" },
                            { type: "qcm", question: "Comment dire 'Elle parle avec son amie' (draugė) ?", options: ["Ji kalba su drauge", "Ji kalba su draugė", "Ji kalba drauge"], correctAnswer: "Ji kalba su drauge", feedback: "Accompagnement = su + Instrumental (-ė -> -e)." },
                            { type: "fill", question: "Mes rašome (pieštukas) -> Mes rašome ___.", options: ["pieštuku", "su pieštuku", "pieštuke"], correctAnswer: "pieštuku", feedback: "Outil/Instrument = Instrumental seul (pieštuku)." },
                            { type: "qcm", question: "Que signifie 'Jis eina į parką su šunimi' (šuo) ?", options: ["Il va au parc avec son chien", "Il va au parc en voiture", "Il promène son chat"], correctAnswer: "Jis eina į parką su šunimi", feedback: "Šunimi est l'instrumental singulier de šuo (chien)." },
                            { type: "fill", question: "Ar tu geri arbatą su ___ (citrina) ?", options: ["citrina", "citrine", "citriną"], correctAnswer: "citrina", feedback: "Pour les noms en -a, l'instrumental est identique au nominatif (citrina)." },
                            { type: "qcm", question: "Comment traduire 'Nous voyageons en train' (traukinys) ?", options: ["Mes keliaujame traukiniu", "Mes keliaujame su traukiniu", "Mes keliaujame traukinyje"], correctAnswer: "Mes keliaujame traukiniu", feedback: "Moyen de transport = traukinys -> traukiniu." },
                            { type: "fill", question: "Aš valgau sriubą (šaukštas) -> Aš valgau sriubą ___.", options: ["šaukštu", "su šaukštu", "šaukštą"], correctAnswer: "šaukštu", feedback: "Instrumental seul = šaukštu." },
                            { type: "qcm", question: "Que signifie 'Ji pietauja su kolega' ?", options: ["Elle déjeune avec un collègue", "Elle travaille avec un collègue", "Elle parle à son patron"], correctAnswer: "Ji pietauja su kolega", feedback: "Pietauja (déjeuner) + su kolega (avec un collègue)." },
                            { type: "fill", question: "Vaikas piešia su ___ (pieštukas).", options: ["pieštuku", "pieštukas", "pieštukuose"], correctAnswer: "pieštuku", feedback: "su pieštuku = avec un crayon." },
                            { type: "qcm", question: "Quel est l'instrumental de 'sūnus' (fils) ?", options: ["sūnumi", "sūnu", "sūniu"], correctAnswer: "sūnumi", feedback: "Les noms en -us font leur instrumental en -umi (sūnumi)." }
                        ]
                    },
                    {
                        id: "A2.2.2",
                        title: "Famille & Entourage 👨‍👩‍👧‍👦",
                        theory: `
                            <h3>Parler de sa Famille et de ses Relations</h3>
                            <p>Approfondissons le vocabulaire familial et apprenons à décrire le statut civil et les relations de possession.</p>
                            
                            <h4>Vocabulaire du Statut Civil</h4>
                            <ul>
                                <li><strong>Vedęs</strong> : Marié (pour un homme)</li>
                                <li><strong>Ištekėjusi</strong> : Mariée (pour une femme)</li>
                                <li><strong>Vieniša / Vienišas</strong> : Célibataire</li>
                                <li><strong>Šeima</strong> : La famille</li>
                            </ul>
                            
                            <h4>Exprimer la possession (Génitif)</h4>
                            <p>Pour exprimer la possession ('le... de...'), on place le possesseur au <strong>Génitif</strong> devant l'objet possédé.<br>
                            Ex: <em>Mano brolio žmona</em> (La femme de mon frère). <em>Mano sesers vyras</em> (Le mari de ma sœur).</p>
                        `,
                        exercises: [
                            { type: "fill", question: "Mano brolis yra ___ (marié).", options: ["vedęs", "ištekėjusi", "vienišas"], correctAnswer: "vedęs", feedback: "Vedęs s'utilise uniquement pour un homme." },
                            { type: "qcm", question: "Comment dit-on 'Ma sœur est mariée' ?", options: ["Mano sesuo yra ištekėjusi", "Mano sesuo yra vedęs", "Mano sesuo yra žmona"], correctAnswer: "Mano sesuo yra ištekėjusi", feedback: "Ištekėjusi s'utilise uniquement pour une femme." },
                            { type: "fill", question: "Kaip sekasi tavo ___? (parents - tėvai -> datif).", options: ["tėvams", "tėvai", "tėvus"], correctAnswer: "tėvams", feedback: "Kaip sekasi + Datif (tėvams = aux parents)." },
                            { type: "qcm", question: "Que signifie 'Mano brolio namas' ?", options: ["La maison de mon frère", "Le frère de ma maison", "J'ai un frère"], correctAnswer: "La maison de mon frère", feedback: "Brolio (de mon frère - génitif) placé devant namas." },
                            { type: "fill", question: "Aš turiu didelę ___ (famille - šeima -> accusatif).", options: ["šeimą", "šeimos", "šeimoje"], correctAnswer: "šeimą", feedback: "Avoir + Accusatif (šeimą)." },
                            { type: "qcm", question: "Comment traduire 'Ils ont deux enfants' ?", options: ["Jie turi du vaikus", "Jie yra du vaikai", "Jie turi dvidešimt metų"], correctAnswer: "Jie turi du vaikus", feedback: "Turi (ont) + vaikus (accusatif pluriel de vaikai)." },
                            { type: "fill", question: "Tai yra mano ___ (sesuo -> génitif) vaikas.", options: ["sesers", "sesuo", "seserį"], correctAnswer: "sesers", feedback: "Sesuo a un génitif irrégulier : sesers." },
                            { type: "qcm", question: "Que signifie 'Ar tu pažįsti mano draugą?' ?", options: ["Est-ce que tu connais mon ami ?", "Est-ce que tu aimes mon ami ?", "Où est mon ami ?"], correctAnswer: "Est-ce que tu connais mon ami ?", feedback: "Pažinti = connaître quelqu'un (+ accusatif draugą)." },
                            { type: "fill", question: "Mes gyvename su savo ___ (parents - tėvai -> instrumental).", options: ["tėvais", "tėvams", "tėvus"], correctAnswer: "tėvais", feedback: "su + instrumental pluriel (-ai -> -ais) = tėvais." },
                            { type: "qcm", question: "Comment traduire 'Le prénom de mon épouse est Lina' ?", options: ["Mano žmonos vardas yra Lina", "Mano vyro vardas yra Lina", "Mano žmona vardas yra Lina"], correctAnswer: "Mano žmonos vardas yra Lina", feedback: "Žmonos (de mon épouse - génitif) + vardas." }
                        ]
                    }
                ]
            },
            {
                id: "A2.3",
                title: "Comparatifs & Vie Quotidienne",
                image: "A2.3.png",
                description: "Faire des comparaisons (plus que, le plus) et parler de la météo et des saisons.",
                subModules: [
                    {
                        id: "A2.3.1",
                        title: "Comparatifs & Superlatifs 📈",
                        theory: `
                            <h3>Comparer en Lituanien</h3>
                            <p>Découvrons comment exprimer la supériorité (plus... que) et le superlatif (le plus...).</p>
                            
                            <h4>1. Le Comparatif (-esnis / -esnė)</h4>
                            <p>On ajoute le suffixe <strong>-esnis</strong> (masculin) ou <strong>-esnė</strong> (féminin) au radical de l'adjectif.<br>
                            Ex: <em>Didelis</em> (grand) ➡️ <em>Didesnis / Didesnė</em> (plus grand/e).<br>
                            <em>Gražus</em> (beau) ➡️ <em>Gražesnis / Gražesnė</em> (plus beau/belle).</p>
                            
                            <h4>La structure de comparaison (Už)</h4>
                            <p>Pour dire "que" (plus grand <em>que</em>), on utilise la préposition <strong>Už</strong> suivie de <strong>l'Accusatif</strong>.<br>
                            Ex: <em>Kas yra didesnis už mane.</em> (Il est plus grand que moi).</p>
                            
                            <h4>2. Le Superlatif (-iausias / -iausia)</h4>
                            <p>On ajoute le suffixe <strong>-iausias</strong> (masculin) ou <strong>-iausia</strong> (féminin) au radical.<br>
                            Ex: <em>Didžiausias / Didžiausia</em> (le/la plus grand/e).<br>
                            <em>Gražiausias / Gražiausia</em> (le/la plus beau/belle).</p>
                        `,
                        exercises: [
                            { type: "fill", question: "Šis butas yra ___ už tą (didelis -> comparatif).", options: ["didesnis", "didžiausias", "didelis"], correctAnswer: "didesnis", feedback: "Comparatif masculin de didelis = didesnis." },
                            { type: "qcm", question: "Comment dire 'Vilnius est la plus grande ville de Lituanie' ?", options: ["Vilnius yra didžiausias Lietuvos miestas", "Vilnius yra didesnis Lietuvos miestas", "Vilnius yra didelis Lietuvos miestas"], correctAnswer: "Vilnius yra didžiausias Lietuvos miestas", feedback: "Superlatif (la plus grande) = didžiausias." },
                            { type: "fill", question: "Mano sesuo yra ___ už mane (jaunas -> comparatif féminin).", options: ["jaunesnė", "jaunesnis", "jauniausia"], correctAnswer: "jaunesnė", feedback: "Féminin comparatif = jaunesnė." },
                            { type: "qcm", question: "Que signifie 'Šis automobilis yra greitesnis už tavo' ?", options: ["Cette voiture est plus rapide que la tienne", "Cette voiture est moins rapide que la tienne", "Cette voiture est aussi rapide que la tienne"], correctAnswer: "Cette voiture est plus rapide que la tienne", feedback: "Greitesnis = plus rapide (de greitas)." },
                            { type: "fill", question: "Kuri knyga yra ___? (intéressante -> comparatif féminin de įdomus)", options: ["įdomesnė", "įdomesnis", "įdomiausia"], correctAnswer: "įdomesnė", feedback: "knyga (féminin) -> įdomesnė." },
                            { type: "qcm", question: "Comment traduire 'C'est le plus bel endroit du monde' (gražus) ?", options: ["Tai yra gražiausia vieta pasaulyje", "Tai yra gražesnė vieta pasaulyje", "Tai yra graži vieta pasaulyje"], correctAnswer: "Tai yra gražiausia vieta pasaulyje", feedback: "vieta (féminin) + gražiausia (superlatif féminin)." },
                            { type: "fill", question: "Ši kava yra ___ už arbatą (brangus -> comparatif féminin).", options: ["brangesnė", "brangesnis", "brangiausia"], correctAnswer: "brangesnė", feedback: "kava (féminin) -> brangesnė." },
                            { type: "qcm", question: "Que signifie 'Jis yra stipriausias vyras' ?", options: ["Il est l'homme le plus fort", "Il est plus fort que toi", "Il est un homme fort"], correctAnswer: "Jis yra stipriausias vyras", feedback: "Stipriausias = le plus fort (de stiprus)." },
                            { type: "fill", question: "Šis kelias yra ___ už tą (trumpas -> comparatif).", options: ["trumpesnis", "trumpesnė", "trumpiausias"], correctAnswer: "trumpesnis", feedback: "kelias (masculin) -> trumpesnis." },
                            { type: "qcm", question: "Comment dit-on 'L'été est la saison la plus chaude' (šiltas) ?", options: ["Vasara yra šilčiausias metų laikas", "Vasara yra šiltesnis metų laikas", "Vasara yra šilta metų laikas"], correctAnswer: "Vasara yra šilčiausias metų laikas", feedback: "laikas (masculin) -> šilčiausias (le plus chaud)." }
                        ]
                    },
                    {
                        id: "A2.3.2",
                        title: "Météo, Saisons & Vêtements ⛅",
                        theory: `
                            <h3>La Météo et le Quotidien</h3>
                            <p>Apprenez à parler du temps qu'il fait, à exprimer les saisons et à décrire vos vêtements.</p>
                            
                            <h4>1. La Météo (Orai)</h4>
                            <ul>
                                <li><strong>Saulė šviečia</strong> : Le soleil brille</li>
                                <li><strong>Lyja lietus</strong> : Il pleut (litt. la pluie pleut)</li>
                                <li><strong>Sninga</strong> : Il neige</li>
                                <li><strong>Pučia vėjas</strong> : Le vent souffle</li>
                            </ul>
                            
                            <h4>2. Les Saisons (Saison = Metų laikas)</h4>
                            <p>Pour dire "en été", "en hiver", on utilise l'accusatif temporel :<br>
                            - Vasara ➡️ <strong>Vasarą</strong> (En été)<br>
                            - Žiema ➡️ <strong>Žiemą</strong> (En hiver)<br>
                            - Ruduo ➡️ <strong>Rudenį</strong> (En automne)<br>
                            - Pavasaris ➡️ <strong>Pavasarį</strong> (Au printemps)</p>
                            
                            <h4>3. Les Vêtements (Drabužiai)</h4>
                            <p>Le verbe <strong>Vilkėti</strong> (porter) prend l'accusatif.<br>
                            Ex: <em>Aš vilkiu šiltą megztinį.</em> (Je porte un pull chaud).</p>
                        `,
                        exercises: [
                            { type: "fill", question: "Šiandien šviečia ___ (soleil).", options: ["saulė", "saulę", "saulės"], correctAnswer: "saulė", feedback: "Sujet = Nominatif (saulė)." },
                            { type: "qcm", question: "Comment dire 'En hiver, il neige souvent' ?", options: ["Žiemą dažnai sninga", "Žiema dažnai sninga", "Žiemą dažnai lyja"], correctAnswer: "Žiemą dažnai sninga", feedback: "Žiemą = En hiver. Sninga = Il neige." },
                            { type: "fill", question: "Vasarą aš vilkiu ___ (T-shirt - marškinėliai -> accusatif pluriel).", options: ["marškinėlius", "marškinėliai", "marškinėliais"], correctAnswer: "marškinėlius", feedback: "Porter + Accusatif (marškinėlius)." },
                            { type: "qcm", question: "Que signifie 'Rudenį dažnai lyja lietus' ?", options: ["En automne, il pleut souvent", "Au printemps, il fait beau", "En été, il y a du vent"], correctAnswer: "En automne, il pleut souvent", feedback: "Rudenį = En automne. Lyja lietus = Il pleut." },
                            { type: "fill", question: "___ (En hiver) yra labai šalta.", options: ["Žiemą", "Žiema", "Žiemos"], correctAnswer: "Žiemą", feedback: "Žiemą = En hiver." },
                            { type: "qcm", question: "Comment traduire 'Le vent souffle fort' ?", options: ["Pučia stiprus vėjas", "Lyja stiprus vėjas", "Šviečia stiprus vėjas"], correctAnswer: "Pučia stiprus vėjas", feedback: "Pučia = souffle. Vėjas = vent." },
                            { type: "fill", question: "Aš noriu nusipirkti šiltą ___ (manteau - paltas -> accusatif).", options: ["paltą", "paltas", "palto"], correctAnswer: "paltą", feedback: "Nusipirkti + Accusatif (paltą)." },
                            { type: "qcm", question: "Que signifie 'Vasarą mes važiuojame prie jūros' ?", options: ["En été, nous allons à la mer", "En hiver, nous allons à la montagne", "Aujourd'hui, nous allons au lac"], correctAnswer: "Vasarą mes važiuojame prie jūros", feedback: "Vasarą = En été. Prie jūros = Vers la mer." },
                            { type: "fill", question: "Koks šiandien ___? (météo / temps - oras).", options: ["oras", "orą", "orai"], correctAnswer: "oras", feedback: "Oras = le temps / l'air." },
                            { type: "qcm", question: "Comment dire 'J'enfile mon bonnet' (kepurė) ?", options: ["Aš užsidedu kepurę", "Aš vilkiu kepurę", "Aš esu kepurėje"], correctAnswer: "Aš užsidedu kepurę", feedback: "Pour les chapeaux/bonnets on utilise užsidėti + Accusatif (kepurę)." }
                        ]
                    }
                ]
            },
            {
                id: "A2.4",
                title: "Futur & Projets",
                image: "A2.4.png",
                description: "Le futur des verbes et savoir exprimer ses intentions et projets d'avenir.",
                subModules: [
                    {
                        id: "A2.4.1",
                        title: "Le Futur (Būsimasis laikas) 🔮",
                        theory: `
                            <h3>Le Temps Futur (Būsimasis laikas)</h3>
                            <p>Le futur lituanien est très régulier. Il se forme à partir de l'infinitif en ajoutant le suffixe <strong>-s-</strong> suivi des terminaisons.</p>
                            
                            <h4>Formation du Futur</h4>
                            <p>Prenez l'infinitif, enlevez le <strong>-ti</strong> final, ajoutez le suffixe <strong>-s-</strong> puis les terminaisons suivantes :</p>
                            <ul>
                                <li>Aš : <strong>-siu</strong> (ex: Dirbti ➡️ dirbsiu = je travaillerai)</li>
                                <li>Tu : <strong>-si</strong> (ex: Dirbti ➡️ dirbsi = tu travailleras)</li>
                                <li>Jis/Ji : <strong>-s</strong> (ex: Dirbti ➡️ dirbs = il/elle travaillera)</li>
                                <li>Mes : <strong>-sime</strong> (ex: Dirbti ➡️ dirbsime = nous travaillerons)</li>
                                <li>Jūs : <strong>-site</strong> (ex: Dirbti ➡️ dirbsite = vous travaillerez)</li>
                                <li>Jie/Jos : <strong>-s</strong> (ex: Dirbti ➡️ dirbs = ils/elles travailleront)</li>
                            </ul>
                            
                            <h4>Conjugaison du verbe BŪTI (Être) au futur :</h4>
                            <p>Aš <strong>būsiu</strong>, Tu <strong>būsi</strong>, Jis/Ji <strong>bus</strong>, Mes <strong>būsime</strong>, Jūs <strong>būsite</strong>, Jie/Jos <strong>bus</strong>.</p>
                        `,
                        exercises: [
                            { type: "fill", question: "Rytoj aš ___ namuose (Demain, je serai à la maison).", options: ["būsiu", "būsi", "bus"], correctAnswer: "būsiu", feedback: "Aš būsiu = Je serai." },
                            { type: "qcm", question: "Comment dire 'La semaine prochaine, nous irons à la mer' (en voiture) ?", options: ["Kitą savaitę mes važiuosime prie jūros", "Kitą savaitę mes važiuojame prie jūros", "Kitą savaitę mes važiuoti prie jūros"], correctAnswer: "Kitą savaitę mes važiuosime prie jūros", feedback: "Mes važiuosime = Nous irons (en véhicule)." },
                            { type: "fill", question: "Ar tu ___ šeštadienį? (Travailleras-tu ? - dirbti)", options: ["dirbsi", "dirbsiu", "dirbs"], correctAnswer: "dirbsi", feedback: "Tu dirbsi = Tu travailleras." },
                            { type: "qcm", question: "Que signifie 'Jis pirks naują telefoną rytoj' ?", options: ["Il achètera un nouveau téléphone demain", "Il a acheté un nouveau téléphone", "Il veut acheter un téléphone"], correctAnswer: "Jis pirks naują telefoną rytoj", feedback: "Pirks is the future of pirkti (acheter)." },
                            { type: "fill", question: "Jie ___ Kaune kitais metais (Ils habiteront à Kaunas l'année prochaine - gyventi).", options: ["gyvens", "gyvensime", "gyvensite"], correctAnswer: "gyvens", feedback: "Jie gyvens = Ils habiteront." },
                            { type: "qcm", question: "Comment traduire 'Que ferez-vous ce soir ?' (veikti)", options: ["Ką jūs veiksite vakare?", "Ką jūs veikiate vakare?", "Ką jūs veikėte vakare?"], correctAnswer: "Ką jūs veiksite vakare?", feedback: "Veiksite = Vous ferez (futur)." },
                            { type: "fill", question: "Ji ___ lietuvių kalbos (Elle apprendra le lituanien - mokytis).", options: ["mokysis", "mokysis", "mokysimės"], correctAnswer: "mokysis", feedback: "Ji mokysis = Elle apprendra (verbe réfléchi)." },
                            { type: "qcm", question: "Que veut dire 'Aš valgysiu vakarienę aštuntą valandą' ?", options: ["Je mangerai le dîner à 8h", "Je mange le dîner à 8h", "J'ai mangé le dîner à 8h"], correctAnswer: "Je mangerai le dîner à 8h", feedback: "Valgysiu = Je mangerai (futur de valgyti)." },
                            { type: "fill", question: "Rytoj ___ lietus (Demain il pleuvra - lyti/lis).", options: ["lis", "lyja", "lijo"], correctAnswer: "lis", feedback: "Lis = Il pleuvra (futur irrégulier de lyti)." },
                            { type: "qcm", question: "Comment traduire 'Nous rencontrerons des amis demain' (susitikti)", options: ["Mes susitiksime su draugais rytoj", "Mes susitinkame su draugais rytoj", "Mes susitikome su draugais rytoj"], correctAnswer: "Mes susitiksime su draugais rytoj", feedback: "Mes susitiksime = Nous rencontrerons." }
                        ]
                    },
                    {
                        id: "A2.4.2",
                        title: "Exprimer ses Projets & Intentions 💭",
                        theory: `
                            <h3>Exprimer ses Projets et Intentions</h3>
                            <p>Pour parler de vos rêves, de votre carrière ou de vos projets d'avenir, utilisez des verbes d'intention suivis de l'infinitif.</p>
                            
                            <h4>Les Verbes d'Intention principaux</h4>
                            <ul>
                                <li><strong>Norėti</strong> (Vouloir) : Aš noriu studijuoti... (Je veux étudier...)</li>
                                <li><strong>Planuoti</strong> (Planifier) : Aš planuoju keliauti... (Je planifie de voyager...)</li>
                                <li><strong>Ketinti</strong> (Avoir l'intention de) : Aš ketinu dirbti... (J'ai l'intention de travailler...)</li>
                            </ul>
                            
                            <h4>Vocabulaire de l'Avenir</h4>
                            <ul>
                                <li><strong>Ateitis</strong> : L'avenir / le futur</li>
                                <li><strong>Karjera</strong> : La carrière</li>
                                <li><strong>Tikslas</strong> : Le but / l'objectif</li>
                                <li><strong>Svajonė</strong> : Le rêve</li>
                            </ul>
                        `,
                        exercises: [
                            { type: "fill", question: "Aš planuoju ___ naujų žodžių (Apprendre - mokytis).", options: ["mokytis", "mokausi", "mokysiuos"], correctAnswer: "mokytis", feedback: "Planuoti + Infinitif (mokytis)." },
                            { type: "qcm", question: "Comment traduire 'Nous avons l'intention d'acheter un appartement à Vilnius' ?", options: ["Mes ketiname pirkti butą Vilniuje", "Mes planuojame butą Vilniuje", "Mes norime bute Vilniuje"], correctAnswer: "Mes ketiname pirkti butą Vilniuje", feedback: "Ketiname (avons l'intention) + pirkti (acheter) + butą (accusatif) + Vilniuje (locatif)." },
                            { type: "fill", question: "Jis nori susirasti naują ___ (travail - darbas -> accusatif).", options: ["darbą", "darbas", "darbe"], correctAnswer: "darbą", feedback: "Trouver + Accusatif (darbą)." },
                            { type: "qcm", question: "Que signifie 'Ji planuoja keliauti aplink pasaulį' ?", options: ["Elle planifie de voyager autour du monde", "Elle voyage en Europe", "Elle rêve de sa maison"], correctAnswer: "Ji planuoja keliauti aplink pasaulį", feedback: "Keliauti = voyager. Aplink pasaulį = autour du monde." },
                            { type: "fill", question: "Ką tu ketini ___ po pamokų? (faire - daryti)", options: ["daryti", "darai", "darysi"], correctAnswer: "daryti", feedback: "Ketini + Infinitif (daryti)." },
                            { type: "qcm", question: "Comment dire 'Mon plus grand rêve est d'apprendre le lituanien' ?", options: ["Mano didžiausia svajonė yra išmokti lietuvių kalbą", "Mano didžiausias tikslas yra mokyti lietuvių kalbą", "Mano svajonė yra lietuvių kalba"], correctAnswer: "Mano didžiausia svajonė yra išmokti lietuvių kalbą", feedback: "Svajonė = Rêve. Išmokti = Maîtriser/Apprendre complètement." },
                            { type: "fill", question: "Aš planuoju dirbti ___ (ingénieur - inžinierius -> instrumental).", options: ["inžinieriumi", "inžinierius", "inžinierių"], correctAnswer: "inžinieriumi", feedback: "Dirbti + Instrumental (inžinieriumi)." },
                            { type: "qcm", question: "Que veut dire 'Jie ketina ilsėtis šį savaitgalį' ?", options: ["Ils ont l'intention de se reposer ce week-end", "Ils vont travailler ce week-end", "Ils aiment le week-end"], correctAnswer: "Jie ketina ilsėtis šį savaitgalį", feedback: "Ilsėtis = se reposer." },
                            { type: "fill", question: "Ji nori ___ gydytoja (devenir - tapti).", options: ["tapti", "būti", "dirba"], correctAnswer: "tapti", feedback: "Tapti = Devenir." },
                            { type: "qcm", question: "Comment traduire 'Nous planifions d'habiter en Lituanie dans le futur' ?", options: ["Mes planuojame gyventi Lietuvoje ateityje", "Mes planuojame važiuoti į Lietuvą ateityje", "Mes gyvename Lietuvoje"], correctAnswer: "Mes planuojame gyventi Lietuvoje ateityje", feedback: "Gyventi = habiter. Lietuvoje = en Lituanie (locatif). Ateityje = dans le futur (locatif)." }
                        ]
                    }
                ]
            }
        ]
    },
    B1: {
        modules: [
            {
                id: "B1.1",
                title: "Vie Professionnelle & Conditionnel",
                image: "B1.1.png",
                description: "Le conditionnel, présenter sa candidature, le vocabulaire du travail.",
                subModules: [
                    {
                        id: "B1.1.1",
                        title: "Le Conditionnel (Tariamoji nuosaka) 🕰️",
                        theory: `
                            <h3>Le Conditionnel en Lituanien</h3>
                            <p>Le conditionnel (<em>tariamoji nuosaka</em>) est utilisé pour exprimer des souhaits, des hypothèses, des regrets ou des demandes polies.</p>
                            
                            <h4>Formation :</h4>
                            <p>On prend le radical de l'infinitif (sans <strong>-ti</strong>), on ajoute le suffixe du conditionnel <strong>-t-</strong>, puis les terminaisons personnelles :</p>
                            <ul>
                                <li><strong>Aš (Je)</strong> : <em>-čiau</em> (ex: dirb-ti -> dirbčiau - je travaillerais)</li>
                                <li><strong>Tu (Tu)</strong> : <em>-tum</em> (ex: dirbtum)</li>
                                <li><strong>Jis / Ji (Il / Elle)</strong> : <em>-tų</em> (ex: dirbtų)</li>
                                <li><strong>Mes (Nous)</strong> : <em>-tume</em> (ex: dirbtume)</li>
                                <li><strong>Jūs (Vous)</strong> : <em>-tumėte</em> (ex: dirbtumėte)</li>
                                <li><strong>Jie / Jos (Ils / Elles)</strong> : <em>-tų</em> (ex: dirbtų)</li>
                            </ul>
                            
                            <h4>Le verbe Būti (Être) au conditionnel :</h4>
                            <p><em>Aš būčiau, tu būtum, jis/ji būtų, mes būtume, jūs būtumėte, jie/jos būtų.</em></p>
                            
                            <h4>Exemples en contexte :</h4>
                            <p>- <em>Aš norėčiau kavos.</em> (Je voudrais du café.)<br>
                            - <em>Jeigu turėčiau laiko, keliaučiau.</em> (Si j'avais du temps, je voyagerais.)</p>
                        `,
                        exercises: [
                            { type: "fill", question: "Aš ___ (norėti -> conditionnel je) kavos.", options: ["norėčiau", "norėtum", "norėtų"], correctAnswer: "norėčiau", feedback: "Norėčiau = je voudrais." },
                            { type: "qcm", question: "Que signifie 'Jeigu aš turėčiau laiko, aš keliaučiau' ?", options: ["Si j'avais du temps, je voyagerais", "Quand j'ai du temps, je voyage", "Je n'ai pas le temps de voyager"], correctAnswer: "Si j'avais du temps, je voyagerais", feedback: "Turėčiau = j'aurais. Keliaučiau = je voyagerais." },
                            { type: "fill", question: "Jei tu ___ (būti -> conditionnel tu) čia, mes džiaugtumės.", options: ["būtum", "būčiau", "būtų"], correctAnswer: "būtum", feedback: "Būtum = tu serais." },
                            { type: "qcm", question: "Comment traduire 'Nous travaillerions ensemble' ?", options: ["Mes dirbtume kartu", "Mes dirbame kartu", "Mes dirbome kartu"], correctAnswer: "Mes dirbtume kartu", feedback: "Dirbtume = nous travaillerions." },
                            { type: "fill", question: "Ką jūs ___ (daryti -> conditionnel vous) mano vietoje?", options: ["darytumėte", "darytume", "darytum"], correctAnswer: "darytumėte", feedback: "Darytumėte = vous feriez." },
                            { type: "qcm", question: "Que signifie 'Jis norėtų tapti gydytoju' ?", options: ["Il voudrait devenir médecin", "Il est médecin", "Il veut voir le médecin"], correctAnswer: "Il voudrait devenir médecin", feedback: "Norėtų = il voudrait. Gydytoju = médecin (instrumental)." },
                            { type: "fill", question: "Mes ___ (pirkti -> conditionnel nous) šį namą, jei turėtume pinigų.", options: ["pirktume", "pirktumėte", "pirktų"], correctAnswer: "pirktume", feedback: "Pirktume = nous achèterions." },
                            { type: "qcm", question: "Comment traduire 'Ils habiteraient en Lituanie' ?", options: ["Jie gyventų Lietuvoje", "Jie gyvena Lietuvoje", "Jie gyveno Lietuvoje"], correctAnswer: "Jie gyventų Lietuvoje", feedback: "Gyventų = ils habiteraient." },
                            { type: "fill", question: "Ar tu ___ (padėti -> conditionnel tu) man rytoj?", options: ["padėtum", "padėtumėte", "padėčiau"], correctAnswer: "padėtum", feedback: "Padėtum = tu aiderais." },
                            { type: "qcm", question: "Que signifie 'Jei lytų, mes liktume namuose' ?", options: ["S'il pleuvait, nous resterions à la maison", "S'il pleut, nous allons au cinéma", "Il pleut dehors"], correctAnswer: "S'il pleuvait, nous resterions à la maison", feedback: "Lytų = il pleuvait. Liktume = nous resterions." }
                        ]
                    },
                    {
                        id: "B1.1.2",
                        title: "Vie Professionnelle & Recrutement 💼",
                        theory: `
                            <h3>Le Vocabulaire du Travail</h3>
                            <p>Afin de pouvoir s'insérer sur le marché professionnel en Lituanie, il est nécessaire de connaître les termes clés des relations d'embauche.</p>
                            
                            <h4>Vocabulaire important :</h4>
                            <ul>
                                <li><strong>Darbas</strong> : le travail</li>
                                <li><strong>Darbdavys</strong> : l'employeur</li>
                                <li><strong>Darbuotojas</strong> : l'employé</li>
                                <li><strong>Gyvenimo aprašymas (CV)</strong> : le curriculum vitae</li>
                                <li><strong>Pokalbis dėl darbo</strong> : l'entretien d'embauche</li>
                                <li><strong>Patirtis</strong> : l'expérience (gen. <em>patirties</em>)</li>
                                <li><strong>Įgūdžiai</strong> : les compétences/aptitudes</li>
                                <li><strong>Atlyginimas</strong> : le salaire</li>
                                <li><strong>Sutartis</strong> : le contrat</li>
                                <li><strong>Ieškoti darbo</strong> : chercher du travail (le verbe <em>ieškoti</em> régit le génitif)</li>
                            </ul>
                            
                            <h4>Exemples en contexte :</h4>
                            <p>- <em>Aš ieškau darbo.</em> (Je cherche du travail.)<br>
                            - <em>Rytoj turiu pokalbį dėl darbo.</em> (Demain, j'ai un entretien d'embauche.)</p>
                        `,
                        exercises: [
                            { type: "fill", question: "Aš ieškau naujo ___ (travail - darbas -> génitif).", options: ["darbo", "darbą", "darbe"], correctAnswer: "darbo", feedback: "Ieškoti régit le génitif (darbo)." },
                            { type: "qcm", question: "Que signifie 'Rytoj turiu pokalbį dėl darbo' ?", options: ["Demain j'ai un entretien d'embauche", "Je travaille demain", "Je postule aujourd'hui"], correctAnswer: "Demain j'ai un entretien d'embauche", feedback: "Pokalbis dėl darbo = entretien d'embauche." },
                            { type: "fill", question: "Mano gyvenimo ___ (CV - aprašymas) yra čia.", options: ["aprašymas", "aprašymą", "aprašymo"], correctAnswer: "aprašymas", feedback: "Gyvenimo aprašymas = CV." },
                            { type: "qcm", question: "Comment traduire 'Quel est le salaire ?' ?", options: ["Koks yra atlyginimas ?", "Kur yra darbas ?", "Kokia yra sutartis ?"], correctAnswer: "Koks yra atlyginimas ?", feedback: "Atlyginimas = salaire." },
                            { type: "fill", question: "Aš turiu daug darbinės ___ (expérience - patirtis -> génitif).", options: ["patirties", "patirtį", "patirtimi"], correctAnswer: "patirties", feedback: "Turiu daug + Génitif (patirties)." },
                            { type: "qcm", question: "Que signifie 'Mes pasirašėme darbo sutartį' ?", options: ["Nous avons signé le contrat de travail", "Nous cherchons un contrat", "Nous avons fini de travailler"], correctAnswer: "Nous avons signé le contrat de travail", feedback: "Pasirašyti = signer. Sutartį = le contrat." },
                            { type: "fill", question: "Kas yra jūsų ___ (employeur - darbdavys) ?", options: ["darbdavys", "darbuotojas", "bendradarbis"], correctAnswer: "darbdavys", feedback: "Darbdavys = employeur." },
                            { type: "qcm", question: "Comment traduire 'J'ai les compétences requises' ?", options: ["Aš turiu reikalingus įgūdžius", "Aš neturiu patirties", "Aš ieškau įgūdžių"], correctAnswer: "Aš turiu reikalingus įgūdžius", feedback: "Įgūdžiai = compétences/aptitudes." },
                            { type: "fill", question: "Ši įmonė turi daug gerų ___ (employés - darbuotojas -> génitif pluriel).", options: ["darbuotojų", "darbuotojus", "darbuotojai"], correctAnswer: "darbuotojų", feedback: "Daug + Génitif pluriel (darbuotojų)." },
                            { type: "qcm", question: "Que signifie 'Aš noriu pakeisti karjerą' ?", options: ["Je veux changer de carrière", "Je cherche une nouvelle carrière", "J'aime ma carrière"], correctAnswer: "Je veux changer de carrière", feedback: "Pakeisti = changer. Karjerą = la carrière." }
                        ]
                    }
                ]
            },
            {
                id: "B1.2",
                title: "Verbes Préfixés & Médias",
                image: "B1.2.png",
                description: "Comprendre l'aspect verbal avec les préfixes et suivre les actualités.",
                subModules: [
                    {
                        id: "B1.2.1",
                        title: "Aspect & Verbes Préfixés ⚙️",
                        theory: `
                            <h3>Les préfixes verbaux en lituanien</h3>
                            <p>En lituanie, les préfixes changent le sens des verbes et indiquent souvent l'aspect accompli (perfectif).</p>
                            
                            <h4>Différence d'aspect :</h4>
                            <ul>
                                <li><strong>rašyti</strong> (écrire, action en cours) -> <strong>parašyti</strong> (écrire complètement)</li>
                                <li><strong>skaityti</strong> (lire, action en cours) -> <strong>perskaityti</strong> (lire entièrement)</li>
                            </ul>
                            
                            <h4>Principaux préfixes et sens :</h4>
                            <ul>
                                <li><strong>pa-</strong> : action limitée ou accomplie (ex: <em>palaukti</em> - attendre un peu)</li>
                                <li><strong>iš-</strong> : vers l'extérieur ou action totale (ex: <em>išeiti</em> - sortir, <em>išgerti</em> - boire tout)</li>
                                <li><strong>su-</strong> : rassemblement ou accomplissement (ex: <em>suvalgyti</em> - manger tout)</li>
                                <li><strong>į-</strong> : vers l'intérieur (ex: <em>įeiti</em> - entrer)</li>
                                <li><strong>at-</strong> : rapprochement/retour (ex: <em>ateiti</em> - arriver)</li>
                                <li><strong>nu-</strong> : éloignement/descendant (ex: <em>nueiti</em> - aller là-bas, <em>nupirkti</em> - acheter)</li>
                                <li><strong>par-</strong> : retour chez soi (ex: <em>pareiti</em> - rentrer chez soi)</li>
                            </ul>
                        `,
                        exercises: [
                            { type: "fill", question: "Prašau ___ (attendre un peu - palaukti) penkias minutes.", options: ["palaukti", "laukti", "išlaukti"], correctAnswer: "palaukti", feedback: "Palaukti = attendre un peu." },
                            { type: "qcm", question: "Que signifie 'Aš noriu išeiti' ?", options: ["Je veux sortir", "Je veux entrer", "Je veux rester"], correctAnswer: "Je veux sortir", feedback: "Išeiti = sortir." },
                            { type: "fill", question: "Mes turime ___ (entrer - įeiti) į pastatą.", options: ["įeiti", "išeiti", "nueiti"], correctAnswer: "įeiti", feedback: "Įeiti = entrer." },
                            { type: "qcm", question: "Quelle est la différence entre 'rašyti' et 'parašyti' ?", options: ["Rašyti est l'action en cours, parašyti est l'action achevée", "Rašyti veut dire lire, parašyti veut dire écrire", "Ils ont exactement le même sens"], correctAnswer: "Rašyti est l'action en cours, parašyti est l'action achevée", feedback: "Le préfixe pa- indique ici l'achèvement (perfectif)." },
                            { type: "fill", question: "Jis ___ (manger tout -> passé simple) visą sriubą.", options: ["suvalgė", "valgė", "paaiškino"], correctAnswer: "suvalgė", feedback: "Suvalgė = a mangé complètement (perfectif)." },
                            { type: "qcm", question: "Que signifie 'Traukinys atvyko į stotį' ?", options: ["Le train est arrivé à la gare", "Le train part de la gare", "Le train est en retard"], correctAnswer: "Le train est arrived à la gare", feedback: "Atvykti = arriver." },
                            { type: "fill", question: "Aš turiu ___ (acheter - nupirkti) naujus batus.", options: ["nupirkti", "pirkti", "apipirkti"], correctAnswer: "nupirkti", feedback: "Nupirkti = acheter (perfectif)." },
                            { type: "qcm", question: "Comment traduire 'Nous rentrons à la maison (à pied)' ?", options: ["Mes pareiname namo", "Mes išeiname namo", "Mes ateiname namo"], correctAnswer: "Mes pareiname namo", feedback: "Pareiti = rentrer chez soi." },
                            { type: "fill", question: "Kada tu ___ (venir/arriver -> futur tu) pas mane?", options: ["ateisi", "eisi", "išeisi"], correctAnswer: "ateisi", feedback: "Ateisi = tu viendras/arriveras." },
                            { type: "qcm", question: "Que signifie 'Ji išgėrė visą arbatą' ?", options: ["Elle a bu tout le thé", "Elle prépare le thé", "Elle n'aime pas le thé"], correctAnswer: "Elle a bu tout le thé", feedback: "Išgerti = boire complètement." }
                        ]
                    },
                    {
                        id: "B1.2.2",
                        title: "Actualités & Médias 📱",
                        theory: `
                            <h3>Suivre les actualités en lituanien</h3>
                            <p>Le vocabulaire des technologies et des actualités est indispensable pour s'informer au quotidien.</p>
                            
                            <h4>Mots clés :</h4>
                            <ul>
                                <li><strong>Žiniasklaida</strong> : les médias</li>
                                <li><strong>Naujienos</strong> : les nouvelles / l'actualité</li>
                                <li><strong>Laikraštis</strong> : le journal</li>
                                <li><strong>Žurnalas</strong> : le magazine</li>
                                <li><strong>Internetas</strong> : Internet (loc. <em>internete</em>)</li>
                                <li><strong>Svetainė</strong> : le site web</li>
                                <li><strong>Socialiniai tinklai</strong> : les réseaux sociaux (gen. <em>socialinių tinklų</em>)</li>
                                <li><strong>Pranešimas</strong> : le message / le rapport / l'annonce</li>
                                <li><strong>Straipsnis</strong> : l'article</li>
                            </ul>
                        `,
                        exercises: [
                            { type: "fill", question: "Aš skaitau naujienas ___ (sur Internet - internetas -> locatif).", options: ["internete", "internetas", "interneto"], correctAnswer: "internete", feedback: "Locatif de lieu (internete)." },
                            { type: "qcm", question: "Que signifie 'Aš perskaičiau įdomų straipsnį' ?", options: ["J'ai lu un article intéressant", "Je lis un journal", "J'écris sur un site web"], correctAnswer: "J'ai lu un article intéressant", feedback: "Perskaičiau = j'ai lu (complètement). Straipsnį = l'article." },
                            { type: "fill", question: "Ar gali atsiųsti man ___ (un message - pranešimas -> accusatif) ?", options: ["pranešimą", "pranešimas", "pranešimo"], correctAnswer: "pranešimą", feedback: "Accusatif de l'objet direct (pranešimą)." },
                            { type: "qcm", question: "Comment traduire 'Je n'aime pas les réseaux sociaux' ?", options: ["Aš nemėgstu socialinių tinklų", "Aš nemėgstu interneto", "Aš nemėgstu žiniasklaidos"], correctAnswer: "Aš nemėgstu socialinių tinklų", feedback: "Nemėgstu régit le génitif (socialinių tinklų)." },
                            { type: "fill", question: "Ši interneto ___ (site - svetainė) yra naudinga.", options: ["svetainė", "svetainę", "svetainės"], correctAnswer: "svetainė", feedback: "Svetainė = site web." },
                            { type: "qcm", question: "Que signifie 'Žiniasklaida daug rašo apie tai' ?", options: ["Les médias écrivent beaucoup à ce sujet", "Les journalistes parlent de la radio", "Les gens lisent beaucoup"], correctAnswer: "Les médias écrivent beaucoup à ce sujet", feedback: "Žiniasklaida = les médias." },
                            { type: "fill", question: "Man reikia naujo ___ (ordinateur - kompiuteris -> génitif).", options: ["kompiuterio", "kompiuterį", "kompiuteriu"], correctAnswer: "kompiuterio", feedback: "Reikia régit le génitif (kompiuterio)." },
                            { type: "qcm", question: "Comment traduire 'Il regarde le journal télévisé' ?", options: ["Jis žiūri žinias", "Jis skaito laikraštį", "Jis ieško naujienų"], correctAnswer: "Jis žiūri žinias", feedback: "Žinios = les informations/le journal télévisé." },
                            { type: "fill", question: "Šis ___ (magazine - žurnalas) yra labai įdomus.", options: ["žurnalas", "žurnalą", "žurnalo"], correctAnswer: "žurnalas", feedback: "Sujet au nominatif pluriel (žurnalas)." },
                            { type: "qcm", question: "Que signifie 'Ar tu matei šią naujieną?' ?", options: ["As-tu vu cette nouvelle ?", "As-tu reçu ce message ?", "Connais-tu ce journal ?"], correctAnswer: "As-tu vu cette nouvelle ?", feedback: "Naujieną = la nouvelle (accusatif)." }
                        ]
                    }
                ]
            },
            {
                id: "B1.3",
                title: "Participes Actifs & Culture",
                image: "B1.3.png",
                description: "Maîtriser les participes actifs et découvrir la culture et l'histoire lituaniennes.",
                subModules: [
                    {
                        id: "B1.3.1",
                        title: "Les Participes Actifs 🗣️",
                        theory: `
                            <h3>Les Participes Actifs en lituanien</h3>
                            <p>Les participes actifs (<em>veikiamieji dalyviai</em>) qualifient une personne ou un objet effectuant une action. Ils s'accordent en genre, nombre et cas.</p>
                            
                            <h4>1. Participe Actif Présent :</h4>
                            <p>Indique une action en cours. Formé à partir du radical du présent + suffixe <strong>-antis / -anti</strong> (conjugaison en -a) ou <strong>-intis / -inti</strong> (conjugaison en -i).</p>
                            <p>Exemple : <em>groti</em> (jouer musique) -> present <em>groja</em> -> <em>grojantis vyras</em> (l'homme qui joue).</p>
                            
                            <h4>2. Participe Actif Passé Simple :</h4>
                            <p>Indique une action achevée dans le passé. Formé à partir du radical du passé simple + suffixe <strong>-ęs (masc) / -usi (fem)</strong>.</p>
                            <p>Exemple : <em>dirbti</em> (travailler) -> passé <em>dirbo</em> -> <em>dirbęs žmogus</em> (la personne qui a travaillé).</p>
                        `,
                        exercises: [
                            { type: "fill", question: "Aš matau knygą ___ (lisant - skaitantis -> accusatif masc).", options: ["skaitantį", "skaitantis", "skaitančio"], correctAnswer: "skaitantį", feedback: "L'accusatif s'accorde avec le nom (berniuką skaitantį)." },
                            { type: "qcm", question: "Que signifie 'Turintis pinigų žmogus gali keliauti' ?", options: ["L'homme ayant de l'argent peut voyager", "L'homme cherche de l'argent pour voyager", "L'homme voyage sans argent"], correctAnswer: "L'homme ayant de l'argent peut voyager", feedback: "Turintis = ayant (participe présent)." },
                            { type: "fill", question: "Šiame name gyveno ___ (ayant travaillé - dirbęs) mokytojas.", options: ["dirbęs", "dirbantis", "dirbama"], correctAnswer: "dirbęs", feedback: "Dirbęs = ayant travaillé (participe passé)." },
                            { type: "qcm", question: "Comment traduire 'La femme qui parle' ?", options: ["Kalbanti moteris", "Kalbėjusi moteris", "Kalbama moteris"], correctAnswer: "Kalbanti moteris", feedback: "Kalbanti = parlante/qui parle (fem)." },
                            { type: "fill", question: "Mes matėme bėgančią ___ (fille - mergaitė -> accusatif singulier).", options: ["mergaitę", "mergaitė", "mergaitės"], correctAnswer: "mergaitę", feedback: "Bėgančią (Acc) s'accorde avec mergaitę." },
                            { type: "qcm", question: "Que signifie 'Lietuvoje gyvenę žmonės žino tradicijas' ?", options: ["Les gens ayant vécu en Lituanie connaissent les traditions", "Les gens vivant en Lituanie aiment les fêtes", "Les gens vont habiter en Lituanie"], correctAnswer: "Les gens ayant vécu en Lituanie connaissent les traditions", feedback: "Gyvenę = ayant vécu (masc pluriel)." },
                            { type: "fill", question: "Ar pažįsti tą grojantį ___ (homme - vyras -> accusatif) ?", options: ["vyrą", "vyras", "vyro"], correctAnswer: "vyrą", feedback: "Grojantį (Acc) s'accorde avec vyrą." },
                            { type: "qcm", question: "Comment traduire 'Les feuilles tombantes' ?", options: ["Krentantys lapai", "Kritę lapai", "Krentantis lapas"], correctAnswer: "Krentantys lapai", feedback: "Krentantys = tombants (pluriel)." },
                            { type: "fill", question: "Čia yra laišką ___ (écrivant - rašanti -> nominatif fem) moteris.", options: ["rašanti", "rašantis", "rašiusi"], correctAnswer: "rašanti", feedback: "Rašanti = écrivante/qui écrit (fem)." },
                            { type: "qcm", question: "Que signifie 'Išvažiavę draugai atsiuntė laišką' ?", options: ["Les amis partis ont envoyé une lettre", "Les amis écrivent une lettre en partant", "Les amis vont partir et écrire"], correctAnswer: "Les amis partis ont envoyé une lettre", feedback: "Išvažiavę = partis/ayant pris la route (pluriel)." }
                        ]
                    },
                    {
                        id: "B1.3.2",
                        title: "Culture, Histoire & Traditions 🏰",
                        theory: `
                            <h3>Patrimoine et Traditions Lituaniens</h3>
                            <p>La Lituanie possède une culture riche, mêlant traditions païennes anciennes et histoire médiévale glorieuse.</p>
                            
                            <h4>Vocabulaire important :</h4>
                            <ul>
                                <li><strong>Kultūra</strong> : la culture</li>
                                <li><strong>Istorija</strong> : l'histoire</li>
                                <li><strong>Tradicija</strong> : la tradition</li>
                                <li><strong>Paveldas</strong> : le patrimoine</li>
                                <li><strong>Pilis</strong> : le château / le fort</li>
                                <li><strong>Šventė</strong> : la fête</li>
                                <li><strong>Muziejus</strong> : le musée</li>
                                <li><strong>Užgavėnės</strong> : le carnaval lituanien pour chasser l'hiver</li>
                                <li><strong>Joninės</strong> : la fête du solstice d'été (Saint-Jean)</li>
                            </ul>
                        `,
                        exercises: [
                            { type: "fill", question: "Vilniaus Gedimino ___ (château - pilis) yra garsi.", options: ["pilis", "pilį", "pilies"], correctAnswer: "pilis", feedback: "Pilis = château (nominatif féminin)." },
                            { type: "qcm", question: "Que signifie 'Mes švenčiame Jonines vasarą' ?", options: ["Nous célébrons Joninės en été", "Nous aimons la fête de la neige", "Nous allons en vacances d'été"], correctAnswer: "Nous célébrons Joninės en été", feedback: "Joninės = fête du solstice. Vasarą = en été." },
                            { type: "fill", question: "Šis muziejus saugo Lietuvos ___ (histoire - istorija -> accusatif).", options: ["istoriją", "istorija", "istorijos"], correctAnswer: "istoriją", feedback: "Saugo régit l'accusatif (istoriją)." },
                            { type: "qcm", question: "Comment traduire 'Les traditions sont très importantes' ?", options: ["Tradicijos yra labai svarbios", "Kultūra yra įdomi", "Istorija yra svarbi"], correctAnswer: "Tradicijos yra labai svarbios", feedback: "Tradicijos = les traditions. Svarbios = importantes." },
                            { type: "fill", question: "Rytoj eisiu į dramos ___ (théâtre - teatras -> accusatif).", options: ["teatrą", "teatras", "teatre"], correctAnswer: "teatrą", feedback: "Eiti į + Accusatif (teatrą)." },
                            { type: "qcm", question: "Que signifie 'Užgavėnės yra tradicinė lietuvių šventė' ?", options: ["Užgavėnės est une fête traditionnelle lituanienne", "Les Lituaniens aiment l'hiver", "Le nouvel an est célébré en Lituanie"], correctAnswer: "Užgavėnės est une fête traditionnelle lituanienne", feedback: "Užgavėnės = fête traditionnelle de fin d'hiver." },
                            { type: "fill", question: "Lietuva turi turtingą kultūrinį ___ (patrimoine - paveldas -> accusatif).", options: ["paveldą", "paveldas", "paveldo"], correctAnswer: "paveldą", feedback: "Accusatif de l'objet direct (paveldą)." },
                            { type: "qcm", question: "Comment traduire 'Nous visitons le musée' ?", options: ["Mes lankome muziejų", "Mes einame į teatrą", "Mes saugome istoriją"], correctAnswer: "Mes lankome muziejų", feedback: "Lankyti = visiter. Muziejų = le musée (accusatif)." },
                            { type: "fill", question: "Ši šventė sujungia senąsias ___ (traditions - tradicija -> accusatif pluriel).", options: ["tradicijas", "tradicijos", "tradicijų"], correctAnswer: "tradicijas", feedback: "Accusatif pluriel féminin (tradicijas)." },
                            { type: "qcm", question: "Que signifie 'Ar tu domiesi Lietuvos istorija?' ?", options: ["T'intéresses-tu à l'histoire de la Lituanie ?", "Connais-tu la Lituanie ?", "As-tu visité les châteaux lituaniens ?"], correctAnswer: "T'intéresses-tu à l'histoire de la Lituanie ?", feedback: "Domėtis régit l'instrumental (istorija)." }
                        ]
                    }
                ]
            },
            {
                id: "B1.4",
                title: "Participes Passifs & Santé/Société",
                image: "B1.4.png",
                description: "Employer les participes passifs et s'exprimer sur la santé et les faits de société.",
                subModules: [
                    {
                        id: "B1.4.1",
                        title: "Les Participes Passifs 📜",
                        theory: `
                            <h3>Les Participes Passifs en lituanien</h3>
                            <p>Les participes passifs (<em>neveikiamieji dalyviai</em>) indiquent que le nom subit l'action. Ils servent notamment à former la voix passive.</p>
                            
                            <h4>1. Participe Passif Présent :</h4>
                            <p>Indique une action subie actuellement. Formé à partir du radical du présent + suffixe <strong>-mas (masc) / -ma (fem)</strong>.</p>
                            <p>Exemple : <em>skaityti</em> -> present <em>skaito</em> -> <em>skaitoma knyga</em> (un livre lu / qui est lu).</p>
                            
                            <h4>2. Participe Passif Passé :</h4>
                            <p>Indique une action subie achevée. Formé à partir de l'infinitif + suffixe <strong>-tas (masc) / -ta (fem)</strong>.</p>
                            <p>Exemple : <em>rašyti</em> -> <em>rašytas laiškas</em> (la lettre écrite / qui a été écrite).</p>
                        `,
                        exercises: [
                            { type: "fill", question: "Ši knyga yra ___ (lue - skaityti -> passif présent fem).", options: ["skaitoma", "skaityta", "skaitomas"], correctAnswer: "skaitoma", feedback: "Skaitoma = lue (présent passif)." },
                            { type: "qcm", question: "Que signifie 'Namas buvo pastatytas prieš metus' ?", options: ["La maison a été construite il y a un an", "La maison sera vendue l'année prochaine", "La maison était habitée il y a un an"], correctAnswer: "La maison a été construite il y a un an", feedback: "Pastatytas = construit (passé passif)." },
                            { type: "fill", question: "Ar šis laiškas jau ___ (écrit - parašyti -> passif passé masc) ?", options: ["parašytas", "rašomas", "parašyta"], correctAnswer: "parašytas", feedback: "Parašytas = écrit (passé passif)." },
                            { type: "qcm", question: "Comment traduire 'C'est une règle bien connue' ?", options: ["Tai yra gerai žinoma taisyklė", "Tai yra nežinoma taisyklė", "Tai yra nouva taisyklė"], correctAnswer: "Tai yra gerai žinoma taisyklė", feedback: "Žinoma = connue (présent passif)." },
                            { type: "fill", question: "Ši daina yra ___ (chantée - dainuoti -> passif présent fem).", options: ["dainuojama", "dainuota", "dainuojamas"], correctAnswer: "dainuojama", feedback: "Dainuojama = chantée (présent passif)." },
                            { type: "qcm", question: "Que signifie 'Lietuvoje gaminamas sūris yra skanus' ?", options: ["Le fromage fabriqué en Lituanie est bon", "Le fromage est vendu en Lituanie", "Nous mangeons du fromage lituanien"], correctAnswer: "Le fromage fabriqué en Lituanie est bon", feedback: "Gaminamas = fabriqué/produit (présent passif)." },
                            { type: "fill", question: "Visi darbai yra ___ (accomplis - atlikti -> pluriel passé passif).", options: ["atlikti", "atliekami", "atliktas"], correctAnswer: "atlikti", feedback: "Atlikti = accomplis." },
                            { type: "qcm", question: "Comment traduire 'La nourriture préparée par maman' ?", options: ["Mamos paruoštas maistas", "Mamos ruošiamas maistas", "Mamos nupirktas maistas"], correctAnswer: "Mamos paruoštas maistas", feedback: "Paruoštas = préparé (passé passif)." },
                            { type: "fill", question: "Šis filmas buvo ___ (créé - sukurti -> passif passé masc) praėjusiais metais.", options: ["sukurtas", "kuriamas", "sukurtą"], correctAnswer: "sukurtas", feedback: "Sukurtas = créé/réalisé (passé passif)." },
                            { type: "qcm", question: "Que signifie 'Laiškas, siunčiamas paštu, vėluoja' ?", options: ["La lettre envoyée par la poste est en retard", "La lettre est arrivée par la poste", "Le courrier postal est rapide"], correctAnswer: "La lettre envoyée par la poste est en retard", feedback: "Siunčiamas = envoyé/qui est envoyé (présent passif)." }
                        ]
                    },
                    {
                        id: "B1.4.2",
                        title: "Santé & Société 🩺",
                        theory: `
                            <h3>Santé et Vie en Société</h3>
                            <p>Exprimer des douleurs physiques, parler de bien-être et débattre des faits de société sont des compétences clés du niveau B1.</p>
                            
                            <h4>Vocabulaire important :</h4>
                            <ul>
                                <li><strong>Sveikata</strong> : la santé</li>
                                <li><strong>Sveikas gyvenimo būdas</strong> : un mode de vie sain</li>
                                <li><strong>Gydytojas</strong> : le médecin</li>
                                <li><strong>Ligoninė</strong> : l'hôpital</li>
                                <li><strong>Vaistinė</strong> : la pharmacie (loc. <em>vaistinėje</em>)</li>
                                <li><strong>Vaistai</strong> : les médicaments</li>
                                <li><strong>Liga</strong> : la maladie</li>
                                <li><strong>Skausmas</strong> : la douleur</li>
                                <li><strong>Visuomenė</strong> : la société</li>
                                <li><strong>Gyventojas</strong> : l'habitant</li>
                            </ul>
                        `,
                        exercises: [
                            { type: "fill", question: "Sportas yra naudingas jūsų ___ (santé - sveikata -> datif).", options: ["sveikatai", "sveikatą", "sveikatos"], correctAnswer: "sveikatai", feedback: "Naudingas régit le datif (sveikatai)." },
                            { type: "qcm", question: "Que signifie 'Gydytojas išrašė vaistus' ?", options: ["Le médecin a prescrit des médicaments", "Le médecin cherche des médicaments", "Le malade prend des médicaments"], correctAnswer: "Le médecin a prescrit des médicaments", feedback: "Išrašyti vaistus = prescrire des médicaments." },
                            { type: "fill", question: "Aš turiu skubiai važiuoti į ___ (hôpital - ligoninė -> accusatif).", options: ["ligoninę", "ligoninėje", "ligoninės"], correctAnswer: "ligoninę", feedback: "Važiuoti į + Accusatif (ligoninę)." },
                            { type: "qcm", question: "Comment traduire 'Où est la pharmacie ?' ?", options: ["Kur yra vaistinė ?", "Kur yra ligoninė ?", "Kur yra vaistai ?"], correctAnswer: "Kur yra vaistinė ?", feedback: "Vaistinė = pharmacie." },
                            { type: "fill", question: "Sveikas gyvenimo ___ (mode/style - būdas) gerina savijautą.", options: ["būdas", "būdą", "būdo"], correctAnswer: "būdas", feedback: "Sveikas gyvenimo būdas = mode de vie sain." },
                            { type: "qcm", question: "Que signifie 'Mums reikia kurti stiprią visuomenę' ?", options: ["Nous devons construire une société forte", "Nous aimons la société moderne", "La société est en crise"], correctAnswer: "Nous devons construire une société forte", feedback: "Visuomenę = la société (accusatif)." },
                            { type: "fill", question: "Vilniuje yra daug ___ (habitants - gyventojas -> génitif pluriel).", options: ["gyventojų", "gyventojus", "gyventojai"], correctAnswer: "gyventojų", feedback: "Daug + Génitif pluriel (gyventojų)." },
                            { type: "qcm", question: "Comment traduire 'J'ai mal à la tête' ?", options: ["Man skauda galvą", "Man skauda nugarą", "Aš sergu"], correctAnswer: "Man skauda galvą", feedback: "Man skauda + Accusatif (galvą)." },
                            { type: "fill", question: "Šie ___ (médicaments - vaistai) padeda nuo skausmo.", options: ["vaistai", "vaistus", "vaistų"], correctAnswer: "vaistai", feedback: "Sujet au nominatif pluriel (vaistai)." },
                            { type: "qcm", question: "Que signifie 'Ar tu jautiesi gerai?' ?", options: ["Te sens-tu bien ?", "Es-tu malade ?", "Vas-tu chez le médecin ?"], correctAnswer: "Te sens-tu bien ?", feedback: "Jaustis = se sentir." }
                        ]
                    }
                ]
            }
        ]
    }
};
