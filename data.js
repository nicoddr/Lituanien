const appData = {
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
};
