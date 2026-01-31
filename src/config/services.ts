import { Service } from '@/types';

/**
 * Configuration des services proposés avec contenu SEO enrichi
 * Architecture scalable pour ajouter de nouveaux services
 */
export const services: Service[] = [
    {
        slug: 'renovation-toiture',
        title: 'Rénovation de Toiture',
        description: 'Rénovation complète de votre toiture avec des matériaux de qualité supérieure. Nos experts interviennent sur tous types de couvertures en Île-de-France.',
        image: '/services/renovation-toiture.jpg',
        features: [
            'Diagnostic complet gratuit de l\'état de votre toiture',
            'Matériaux certifiés et garantis (tuiles, ardoises, zinc)',
            'Garantie décennale sur tous les travaux',
            'Intervention rapide sous 48h pour urgences',
            'Devis détaillé et transparent',
            'Nettoyage complet du chantier',
        ],
        longDescription: `La rénovation de toiture est une étape cruciale pour préserver l'intégrité de votre habitat et garantir votre confort au quotidien. Une toiture en bon état vous protège efficacement contre les intempéries, améliore l'isolation thermique de votre maison et valorise votre patrimoine immobilier.

Avec plus de 15 ans d'expérience dans le domaine de la couverture, notre entreprise familiale s'est spécialisée dans la rénovation complète de toitures en Île-de-France. Nous intervenons aussi bien sur des maisons individuelles que sur des immeubles collectifs, des bâtiments commerciaux ou des monuments historiques.

Notre approche se base sur trois piliers fondamentaux : la qualité des matériaux, l'expertise technique et la satisfaction client. Chaque chantier fait l'objet d'une étude approfondie pour vous proposer la solution la plus adaptée à vos besoins, qu'il s'agisse de rénovation ou d'une intervention sur votre [charpente](/services/charpente) ou votre [zinguerie](/services/zinguerie).`,
        process: [
            {
                title: 'Diagnostic initial',
                description: 'Un expert couvreur se déplace gratuitement à votre domicile pour inspecter minutieusement votre toiture. Il évalue l\'état général de la couverture, de la charpente, de l\'isolation et de la zinguerie. Un rapport détaillé vous est remis avec des photos et nos recommandations.'
            },
            {
                title: 'Devis personnalisé',
                description: 'Sur la base du diagnostic, nous établissons un devis détaillé incluant les matériaux nécessaires, la main d\'œuvre, les délais d\'intervention et les garanties. Nous prenons le temps de vous expliquer chaque poste pour une totale transparence.'
            },
            {
                title: 'Préparation du chantier',
                description: 'Une fois le devis accepté, nous planifions l\'intervention en tenant compte de vos contraintes et de la météo. Nous sécurisons le périmètre, installons les échafaudages et protégeons vos espaces extérieurs (jardin, terrasse, allée).'
            },
            {
                title: 'Travaux de rénovation',
                description: 'Nos compagnons couvreurs procèdent méthodiquement à la dépose de l\'ancienne couverture, à la vérification et au renforcement si nécessaire de la charpente, puis à la pose des nouveaux matériaux selon les règles de l\'art. Chaque étape fait l\'objet d\'un contrôle qualité.'
            },
            {
                title: 'Finitions et nettoyage',
                description: 'Nous procédons aux dernières vérifications d\'étanchéité, installons ou rénovons la zinguerie (gouttières, faîtage), puis nettoyons intégralement le chantier. Nous évacuons tous les gravats et veillons à vous restituer un environnement propre.'
            },
        ],
        benefits: [
            'Protection optimale contre les infiltrations d\'eau et l\'humidité',
            'Amélioration significative de l\'isolation thermique et phonique',
            'Valorisation immobilière de votre bien (jusqu\'à 20% de plus-value)',
            'Réduction de votre facture énergétique grâce à une meilleure isolation',
            'Conformité aux normes DTU (Documents Techniques Unifiés)',
            'Tranquillité d\'esprit avec notre garantie décennale',
            'Esthétique modernisée de votre habitat',
            'Durée de vie prolongée de votre toiture (30 à 50 ans selon matériaux)',
        ],
        faq: [
            {
                question: 'Quand faut-il rénover sa toiture ?',
                answer: 'Une toiture doit généralement être rénovée tous les 20 à 30 ans selon les matériaux utilisés. Cependant, plusieurs signes doivent vous alerter avant ce délai : tuiles ou ardoises cassées, infiltrations d\'eau au plafond, mousse importante, gouttières qui débordent, ou encore augmentation anormale de votre facture de chauffage. Notre diagnostic gratuit vous permettra d\'évaluer précisément l\'état de votre couverture.'
            },
            {
                question: 'Combien coûte une rénovation de toiture ?',
                answer: 'Le coût d\'une rénovation de toiture varie considérablement selon la surface, les matériaux choisis, l\'état de la charpente et la complexité du chantier. Comptez entre 80€ et 250€/m² pour une rénovation complète. Nous proposons systématiquement un devis gratuit et détaillé après visite sur place. Des aides financières peuvent être disponibles pour l\'isolation.'
            },
            {
                question: 'Quelle est la durée des travaux ?',
                answer: 'Pour une maison individuelle standard (100-150m²), les travaux de rénovation durent généralement entre 5 et 10 jours ouvrés selon les conditions météorologiques. Les chantiers plus importants ou complexes peuvent nécessiter 2 à 3 semaines. Nous vous fournissons un planning précis lors de l\'établissement du devis.'
            },
            {
                question: 'Puis-je rester chez moi pendant les travaux ?',
                answer: 'Oui, dans la plupart des cas vous pouvez continuer à occuper votre logement pendant la rénovation. Nous installons des bâches étanches chaque soir pour protéger votre intérieur. Toutefois, certaines nuisances sont inévitables (bruit, poussière). Nous faisons notre maximum pour minimiser la gêne occasionnée.'
            },
        ],
    },
    {
        slug: 'zinguerie',
        title: 'Travaux de Zinguerie',
        description: 'Installation et réparation professionnelle de gouttières, chéneaux et descentes pluviales. Évacuation optimale des eaux de pluie pour protéger votre habitation.',
        image: '/services/zinguerie.jpg',
        features: [
            'Installation de gouttières zinc, cuivre ou aluminium',
            'Réparation et entretien de système d\'évacuation',
            'Étanchéité garantie 10 ans',
            'Évacuation des eaux optimisée',
            'Entretien régulier et démoussage',
            'Grilles anti-feuilles et protections',
        ],
        longDescription: `La zinguerie est un élément essentiel de votre toiture souvent négligé, mais qui joue un rôle crucial dans la protection de votre habitation contre les infiltrations d'eau. Un système de zinguerie bien conçu et correctement entretenu évacue efficacement les eaux pluviales, préservant ainsi vos façades, vos fondations et l'intégrité structurelle de votre bâtiment.

Nos artisans zingueurs possèdent une expertise reconnue dans tous les travaux de [zinguerie](/services/zinguerie) : installation de gouttières, de chéneaux, de descentes pluviales, de noues, de solins et de bavettes. Nous travaillons avec les meilleurs matériaux du marché (zinc naturel, cuivre, aluminium laqué, acier galvanisé) pour garantir la longévité et l'efficacité de nos installations lors de vos travaux de [rénovation de toiture](/services/renovation-toiture).

Que ce soit pour une construction neuve, une rénovation ou un simple remplacement, nous adaptons nos solutions à l'architecture de votre bâtiment et à vos contraintes techniques et esthétiques.`,
        process: [
            {
                title: 'Évaluation des besoins',
                description: 'Nous analysons votre toiture, sa surface, sa pente, et calculons le débit d\'eau à évacuer. Cette étude permet de dimensionner correctement les gouttières et descentes pour une évacuation optimale, même lors de fortes précipitations.'
            },
            {
                title: 'Choix des matériaux',
                description: 'Selon votre budget, l\'esthétique recherchée et les contraintes techniques, nous vous conseillons le matériau le plus adapté : zinc pour son élégance et sa durabilité, cuivre pour sa patine noble, ou aluminium pour son excellent rapport qualité-prix.'
            },
            {
                title: 'Installation professionnelle',
                description: 'Nos zingueurs qualifiés procèdent à l\'installation en respectant scrupuleusement les pentes nécessaires à l\'écoulement naturel de l\'eau. Chaque jonction est soigneusement soudée ou rivetée pour garantir une étanchéité parfaite.'
            },
            {
                title: 'Tests et vérifications',
                description: 'Nous effectuons des tests d\'écoulement pour vérifier le bon fonctionnement du système. Nous nous assurons qu\'il n\'y a aucune fuite et que l\'eau est correctement évacuée loin des fondations.'
            },
        ],
        benefits: [
            'Protection efficace de vos façades contre le ruissellement',
            'Prévention des infiltrations d\'eau dans les fondations',
            'Préservation de la structure de votre bâtiment',
            'Esthétique soignée avec des finitions élégantes',
            'Matériaux durables nécessitant peu d\'entretien',
            'Amélioration de la valeur de votre propriété',
            'Système adapté aux normes DTU 40.5',
        ],
        faq: [
            {
                question: 'Quel matériau choisir pour mes gouttières ?',
                answer: 'Le zinc est le matériau traditionnel par excellence, offrant une excellente durabilité (50 ans minimum) et une patine élégante avec le temps. Le cuivre, plus onéreux, développe une belle patine verte et dure encore plus longtemps. L\'aluminium laqué offre un excellent rapport qualité-prix et existe en plusieurs coloris pour s\'harmoniser avec votre façade.'
            },
            {
                question: 'À quelle fréquence faut-il nettoyer les gouttières ?',
                answer: 'Nous recommandons un nettoyage deux fois par an : au printemps et à l\'automne. Cela permet d\'éviter l\'accumulation de feuilles, mousses et de débris qui peuvent obstruer le système et causer des débordements. Si vous avez de nombreux arbres à proximité, un nettoyage trimestriel peut être nécessaire.'
            },
            {
                question: 'Comment savoir si mes gouttières doivent être remplacées ?',
                answer: 'Plusieurs signes indiquent qu\'un remplacement s\'impose : présence de rouille ou de trous, déformations visibles, fuites aux jonctions, décrochement des fixations, ou débordement même après nettoyage. Notre diagnostic gratuit vous permettra d\'évaluer l\'état de votre installation.'
            },
        ],
    },
    {
        slug: 'charpente',
        title: 'Charpente',
        description: 'Construction, rénovation et traitement de charpentes traditionnelles et industrielles. Expertise technique et savoir-faire artisanal pour la solidité de votre toiture.',
        image: '/services/charpente.jpg',
        features: [
            'Charpentes traditionnelles en bois massif',
            'Charpentes fermettes industrielles',
            'Traitement préventif et curatif contre les insectes',
            'Renforcement de structure existante',
            'Expertise et conseil technique',
            'Bois certifiés PEFC ou FSC',
        ],
        longDescription: `La charpente est l'ossature qui supporte votre toiture et distribue les charges sur les murs porteurs. C'est un élément structurel majeur de votre habitation qui nécessite une expertise pointue et un savoir-faire artisanal pour garantir sa solidité et sa pérennité.

Depuis plus de 15 ans, notre équipe de charpentiers qualifiés intervient sur tous types de charpentes : traditionnelles en bois massif pour les constructions neuves ou les rénovations patrimoniales, fermettes industrielles pour les maisons contemporaines, ou encore charpentes complexes pour les architectures spécifiques (toits arrondis, verrières, etc.).

Nous attachons une importance particulière à la qualité des bois utilisés, privilégiant des essences durables (chêne, Douglas, épicéa) certifiées PEFC ou FSC pour un approvisionnement responsable. Chaque pièce est sélectionnée avec soin et traitée contre les insectes xylophages et les champignons avant assemblage lors de vos [travaux de toiture](/services/renovation-toiture).`,
        process: [
            {
                title: 'Étude structurelle',
                description: 'Un ingénieur ou un maître charpentier analyse les plans de votre projet ou l\'état de votre charpente existante. Il calcule les sections de bois nécessaires, les portées, et conçoit la structure optimale selon les charges à supporter (poids de la couverture, neige, vent).'
            },
            {
                title: 'Sélection des bois',
                description: 'Nous choisissons les essences adaptées à votre projet : chêne pour une charpente traditionnelle haut de gamme, Douglas pour un excellent rapport qualité-prix, ou épicéa pour les fermettes. Tous nos bois sont séchés, rabotés et traités en usine.'
            },
            {
                title: 'Taille et assemblage',
                description: 'Pour les charpentes traditionnelles, nous effectuons la taille au millimètre près en atelier. Chaque pièce est numérotée et les assemblages (tenons-mortaises, embrèvements) sont réalisés selon les techniques ancestrales pour garantir solidité et durabilité.'
            },
            {
                title: 'Levage et pose',
                description: 'Le jour du levage, notre équipe procède à l\'assemblage sur site avec précision. Pour les charpentes traditionnelles importantes, nous organisons parfois un levage collectif traditionnel. Chaque ferme est positionnée, aplombée et fixée selon les règles de l\'art.'
            },
            {
                title: 'Traitement final',
                description: 'Une fois la charpente montée, nous appliquons si nécessaire un traitement complémentaire contre les insectes et champignons. Pour les charpentes apparentes, nous pouvons réaliser des finitions esthétiques (lasure, vernis) selon vos souhaits.'
            },
        ],
        benefits: [
            'Solidité structurelle garantie pour plusieurs décennies',
            'Bois noble et écologique, matériau renouvelable',
            'Excellentes propriétés isolantes naturelles',
            'Possibilité de création d\'espace habitable sous combles',
            'Esthétique chaleureuse pour les charpentes apparentes',
            'Valorisation patrimoniale significative',
            'Résistance au feu supérieure aux idées reçues (classe D-s2, d0)',
            'Conformité aux normes Eurocode 5',
        ],
        faq: [
            {
                question: 'Charpente traditionnelle ou fermettes : que choisir ?',
                answer: 'La charpente traditionnelle, composée de fermes massives, permet d\'aménager facilement les combles et offre une esthétique noble si elle reste apparente. Les fermettes industrielles, plus économiques, sont idéales si vous n\'envisagez pas d\'aménagement des combles. Nous vous conseillons selon votre projet et votre budget.'
            },
            {
                question: 'Comment savoir si ma charpente est attaquée par des insectes ?',
                answer: 'Plusieurs signes doivent vous alerter : présence de petits trous dans le bois (vermoulures), sciure ou poussière de bois au sol, affaissement de la toiture, ou bois qui sonne creux au tapotement. Si vous constatez ces symptômes, contactez-nous rapidement pour un diagnostic. Un traitement précoce évite des dégâts importants.'
            },
            {
                question: 'Peut-on renforcer une charpente existante ?',
                answer: 'Oui, nous réalisons fréquemment des renforts de charpente pour permettre l\'aménagement de combles, réparer des pièces endommagées, ou augmenter la capacité portante pour un changement de couverture. Nous utilisons des techniques traditionnelles (prothèses, pièces de renfort) ou modernes (connecteurs métalliques) selon les besoins.'
            },
        ],
    },
    {
        slug: 'isolation-toiture',
        title: 'Isolation de Toiture',
        description: 'Amélioration thermique et phonique de votre habitat par l\'isolation performante de la toiture. Réduction de votre facture énergétique et confort optimal.',
        image: '/services/isolation.jpg',
        features: [
            'Isolation par l\'intérieur ou par l\'extérieur',
            'Matériaux écologiques et performants',
            'Conformité aux normes RT 2020 et RE 2020',
            'Éligibilité aux aides financières (MaPrimeRénov\', CEE)',
            'Amélioration du confort été comme hiver',
            'Réduction jusqu\'à 30% de votre facture énergétique',
        ],
        longDescription: `L'isolation de la toiture est le chantier de rénovation énergétique le plus rentable pour votre habitation. Pourquoi ? Parce que 25 à 30% des déperditions thermiques d'une maison se font par le toit, par simple effet de convection : l'air chaud, plus léger, monte naturellement et s'échappe par une toiture mal isolée.

En améliorant l'[isolation de votre toiture](/services/isolation-toiture), vous réalisez des économies substantielles sur votre facture de chauffage, vous gagnez en confort thermique été comme hiver, et vous valorisez votre bien immobilier en améliorant son Diagnostic de Performance Énergétique (DPE). C'est souvent le moment idéal pour vérifier l'état de votre [couverture](/services/renovation-toiture) et de votre [charpente](/services/charpente).

Notre entreprise est certifiée RGE (Reconnu Garant de l'Environnement), ce qui vous permet de bénéficier des aides financières de l'État (MaPrimeRénov', CEE, éco-PTZ) pour financer vos travaux d'isolation. Nous vous accompagnons dans toutes les démarches administratives pour maximiser vos aides.`,
        process: [
            {
                title: 'Audit énergétique',
                description: 'Nous commençons par évaluer les performances actuelles de votre isolation à l\'aide d\'une caméra thermique. Cet examen permet de détecter les ponts thermiques, les zones de déperdition et de calculer précisément les gains attendus après isolation.'
            },
            {
                title: 'Choix de la technique',
                description: 'Selon votre situation (combles aménagés ou perdus, accès, budget), nous vous proposons la solution la plus adaptée : isolation par soufflage pour les combles perdus, isolation entre chevrons pour les combles aménageables, ou isolation par l\'extérieur (sarking) lors d\'une rénovation complète.'
            },
            {
                title: 'Sélection des matériaux',
                description: 'Nous travaillons avec une gamme variée d\'isolants : laine de verre ou de roche (excellent rapport qualité-prix), ouate de cellulose (écologique), laine de bois (régulateur hygrométrique), ou polyuréthane (performance maximale). Chaque isolant a ses avantages selon vos priorités.'
            },
            {
                title: 'Installation professionnelle',
                description: 'Nos équipes certifiées RGE procèdent à l\'installation dans le respect des DTU. Nous veillons particulièrement à la continuité de l\'isolation, à l\'étanchéité à l\'air et à la gestion de la ventilation pour éviter tout problème de condensation.'
            },
            {
                title: 'Contrôle et certification',
                description: 'À l\'issue des travaux, nous réalisons un test d\'étanchéité à l\'air si nécessaire et vous remettons toutes les certifications et garanties requises pour vos dossiers d\'aides financières. Vous recevez également nos conseils pour optimiser votre système de ventilation.'
            },
        ],
        benefits: [
            'Économies d\'énergie immédiates et durables (jusqu\'à 30%)',
            'Confort thermique optimal hiver comme été',
            'Amélioration du DPE et valorisation immobilière',
            'Réduction de votre empreinte carbone',
            'Isolation phonique améliorée (pluie, grêle, bruits extérieurs)',
            'Aides financières substantielles disponibles',
            'Retour sur investissement rapide (5-7 ans)',
            'Protection de votre charpente contre les variations thermiques',
        ],
        faq: [
            {
                question: 'Quelle épaisseur d\'isolant faut-il pour les combles ?',
                answer: 'La réglementation thermique actuelle (RT 2020) recommande une résistance thermique R ≥ 7 m².K/W pour les combles perdus, soit environ 30-35 cm de laine minérale ou 25-30 cm de polyuréthane. Pour les combles aménagés, visez R ≥ 6 m².K/W. Nous dimensionnons précisément l\'isolation selon votre configuration.'
            },
            {
                question: 'À quelles aides ai-je droit pour l\'isolation de ma toiture ?',
                answer: 'MaPrimeRénov\' est accessible à tous les propriétaires, avec des montants variant selon vos revenus. Les Certificats d\'Économies d\'Énergie (CEE) offrent des primes supplémentaires. L\'éco-PTZ permet d\'emprunter jusqu\'à 50 000€ à taux zéro. La TVA réduite à 5,5% s\'applique automatiquement. Notre certification RGE vous ouvre tous ces dispositifs, et nous vous accompagnons dans les démarches.'
            },
            {
                question: 'Isolation par l\'intérieur ou par l\'extérieur ?',
                answer: 'L\'isolation par l\'intérieur est plus économique et adaptée si votre toiture est en bon état. L\'isolation par l\'extérieur (sarking) est idéale lors d\'une réfection complète de toiture : elle supprime les ponts thermiques, conserve l\'espace habitable sous combles et améliore significativement les performances. Elle coûte 2 à 3 fois plus cher mais offre le meilleur résultat.'
            },
        ],
    },
];

export function getServiceBySlug(slug: string): Service | undefined {
    return services.find((s) => s.slug === slug);
}
