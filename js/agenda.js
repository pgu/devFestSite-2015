'use strict'

devfestApp.factory('AgendaService', ['SpeakersService', function(speakerService){
	var agenda = {
		categories : {
			android : "Android et Objets Connectés"
			, web : "Web"
			, cloud : "Cloud et Big Data"
			, decouverte : "Découverte"
		},
		hours : {  
		  "h01":{
		    "id":"h01",
		    "hourStart":"07",
		    "minStart":"30",
		    "hourEnd":"08",
		    "minEnd":"30"
		  },
		  "h02":{
		    "id":"h02",
		    "hourStart":"08",
		    "minStart":"30",
		    "hourEnd":"09",
		    "minEnd":"30"
		  },
		  "h03":{
		    "id":"h03",
		    "hourStart":"09",
		    "minStart":"40",
		    "hourEnd":"10",
		    "minEnd":"30"
		  },
		  "h04":{
		    "id":"h04",
		    "hourStart":"10",
		    "minStart":"40",
		    "hourEnd":"11",
		    "minEnd":"30"
		  },
		  "h05":{
		    "id":"h05",
		    "hourStart":"11",
		    "minStart":"40",
		    "hourEnd":"12",
		    "minEnd":"30"
		  },
		  "h06":{
		    "id":"h06",
		    "hourStart":"12",
		    "minStart":"30",
		    "hourEnd":"14",
		    "minEnd":"00"
		  },
		  "h07":{
		    "id":"h07",
		    "hourStart":"14",
		    "minStart":"00",
		    "hourEnd":"14",
		    "minEnd":"50"
		  },
		  "h08":{
		    "id":"h08",
		    "hourStart":"15",
		    "minStart":"00",
		    "hourEnd":"15",
		    "minEnd":"50"
		  },
		  "h09":{
		    "id":"h09",
		    "hourStart":"15",
		    "minStart":"50",
		    "hourEnd":"16",
		    "minEnd":"40"
		  },
		  "h10":{
		    "id":"h10",
		    "hourStart":"16",
		    "minStart":"40",
		    "hourEnd":"17",
		    "minEnd":"30"
		  },
		  "h11":{
		    "id":"h11",
		    "hourStart":"17",
		    "minStart":"40",
		    "hourEnd":"18",
		    "minEnd":"30"
		  },
		  "h12":{
		    "id":"h12",
		    "hourStart":"18",
		    "minStart":"30",
		    "hourEnd":"22",
		    "minEnd":"30"
		  }
		},
		sessions:[
  {
    "id": "s3",
    "title": "Android Auto : Rolling Droid gather no moss",
    "confRoom": "Salle Titan",
    "desc": "Android Auto est une nouvelle extension de la plateforme Android. A l'image d'Android Wear, il s'agit d'une interface pour proposer des notifications et des interactions rapides ou faibles à l'utilisateur. La particularité est que les traditionnellement flexibles guidelines de Google sont devenues des contraintes fermes. Nous vous proposons ici une analyse complète de ce nouvel horizon pour Android.",
    "type": "discovery",
    "difficulty": 101,
    "all": false,
    "lang": "fr",
    "hour": "h04",
    "video": "",
    "slides": "",
    "speakers": [
      "dcavaillès"
    ]
  },
  {
    "id": "s4",
    "title": "Hand's on Web Components with Polymer 1.0",
    "confRoom": "Salle Titan",
    "desc": "The W3C has been working on a Web Components standard for almost three years, but it is still a work in progress. But polyfills like allows current developers to use Web Components today, and incorporate to their apps widgets from any library of web components. \n\nThe best known of these libraries is Google's Polymer. In Google IO 2015 conference, Google has at last released the long awaited version 1.0 of Polymer, making it even faster, more stable and at least suitable for \"serious\" applications. In this lab you will use Polymer 1.0 with Material Design Polymer Elements to design and develop a web application using web components.\n\nYou will learn to use the following technologies:\n- Polymer and Web Components (for mobile and desktop)\n- The Paper Elements for Polymer (material design)\n\nMandatory Installs prior to lab:\n+ npm \n+ bower\n+ your favorite HTML/CSS/JS IDE (I suggest Sublime Text)",
    "type": "web",
    "difficulty": 101,
    "all": false,
    "lang": "fr",
    "hour": "h04",
    "video": "",
    "slides": "",
    "speakers": [
      "hgonzalez"
    ]
  },
  {
    "id": "s5",
    "title": "React + Flux le retour au sources.",
    "confRoom": "Salle Titan",
    "desc": "React et Flux est un duo gagnant pour créer de façon efficace des applications web et natives faciles à maintenir.\nLors de cette présentation nous passerons en revue le fonctionnement de ces deux outils et leurs principaux atouts.",
    "type": "discovery",
    "difficulty": 101,
    "all": false,
    "lang": "fr",
    "hour": "h04",
    "video": "",
    "slides": "",
    "speakers": [
      "acateland"
    ]
  },
  {
    "id": "s6",
    "title": "L'innovation technologique n'existe pas.",
    "confRoom": "Salle Titan",
    "desc": "L'innovation doit être sociale avant d'être technologique. Comment regarder les nouvelles technologies sous un angle utile, social, humain et engagé ? Un aperçu du paysage technologique contemporain sous le regard d'un designer",
    "type": "discovery",
    "difficulty": 101,
    "all": false,
    "lang": "fr",
    "hour": "h04",
    "video": "",
    "slides": "",
    "speakers": [
      "gdorne"
    ]
  },
  {
    "id": "s7",
    "title": "Prise en main de Kubernetes",
    "confRoom": "Salle Titan",
    "desc": "Mise en oeuvre d'un cluster Kubernetes pour déployer une architecture comprenant une stack MySQL, PHP et Memcache.\nRolling updates et redimensionnement de replication controlers. Le déploiement se fera sur Google Container Engine (GKE).",
    "type": "cloud",
    "difficulty": 202,
    "all": false,
    "lang": "fr",
    "hour": "h04",
    "video": "",
    "slides": "",
    "speakers": [
      "amoussine-pouchkine"
    ]
  },
  {
    "id": "s8",
    "title": "Cloud Ops",
    "confRoom": "Salle Titan",
    "desc": "Come and see how you can improve your Devops tasks with Google Cloud",
    "type": "cloud",
    "difficulty": 202,
    "all": false,
    "lang": "fr",
    "hour": "h04",
    "video": "",
    "slides": "",
    "speakers": [
      "blegras"
    ]
  },
  {
    "id": "s9",
    "title": "Eddystone, un format ouvert pour les beacons et les objets connectés",
    "confRoom": "Salle Titan",
    "desc": "Eddystone, annoncé par Google le 14 juillet 2015, propose un format plus ouvert et plus riche que iBeacon, et supporté par près de 70% des téléphones portables à travers le monde. Nous allons décrypter cette technologie, et voir comment interagir depuis un téléphone Android ou iOS, avec ou sans application.",
    "type": "mobile",
    "difficulty": 101,
    "all": false,
    "lang": "fr",
    "hour": "h04",
    "video": "",
    "slides": "",
    "speakers": [
      "rmenetrier"
    ]
  },
  {
    "id": "s10",
    "title": "React + Redux : les mains dans le cambouis.",
    "confRoom": "Salle Titan",
    "desc": "Ce workshop se propose de réaliser une application de chat avec React, Redux et Firebase. De la création des composants React à la consommation de webservices en passant par l'implémentation de l'architecture Flux via Redux, cet exercice sera également l'occasion de découvrir les outils de devs construits autour de Redux : rechargement de composants à chaud, outil d'enregistrement des actions utilisateurs, replay des actions utilisateur, etc...\n\nUne liste de pré-requis sera disponible sur le repos https://github.com/cateland/nantes-devfest-2015-react-redux, celui-ci seras rendu public deux semaines avant le workshop pour vous donner le temps de préparer vos machines.",
    "type": "web",
    "difficulty": 202,
    "all": false,
    "lang": "fr",
    "hour": "h04",
    "video": "",
    "slides": "",
    "speakers": [
      "acateland"
    ]
  },
  {
    "id": "s11",
    "title": "Management en couleur avec DISC",
    "confRoom": "Salle Titan",
    "desc": "Chaque personne est unique. Chacun de nous voit le monde à sa façon. Chacun communique et se comporte d’une manière qui lui est propre. Ce constat est unanimement admis. Pourtant, nous répétons tous la même erreur de communication : nous parlons aux autres comme on aimerait qu’ils nous parlent. Cette erreur est essentielle. Il faut parler aux autres comme ils aimeraient qu’on leur parle. Une des règles d’or est qu’il faut s’adapter à son interlocuteur. Mais, pour cela, encore faut-il connaitre son profil…\n\nDISC est un outil d'évaluation (coloré) utilisé pour améliorer la productivité, le travail d'équipe et la communication. DISC est l'acronyme de Dominant (rouge), Influent (jaune), Stable (vert) et Consciencieux (bleu). DISC mesure des styles de communication et de comportement. Ce n’est PAS un test de QI. Ça ne mesure PAS l’intelligence, les aptitudes, la santé mentale, les valeurs, etc. Les profils DISC décrivent les comportements humains dans de nombreuses situations, par exemple en réponse au stress, aux défis, aux challenges, aux crises, aux procédures, etc.\n\nEn connaissant bien son profil et celui de ses interlocuteurs, on peut communiquer de manière plus efficace, à l’écrit comme à l’oral. Cela permet de distribuer efficacement les tâches selon leurs types, les objectifs, les besoins, les contraintes, etc. Cela permet également de constituer une équipe en choisissant ses membres en fonction du contexte.",
    "type": "discovery",
    "difficulty": 101,
    "all": false,
    "lang": "fr",
    "hour": "h04",
    "video": "",
    "slides": "",
    "speakers": [
      "tleriche"
    ]
  },
  {
    "id": "s12",
    "title": "OMG!, Terminator sera codé en JavaScript!",
    "confRoom": "Salle Titan",
    "desc": "Tout le monde est persuadé que l’ancêtre de SkyNet, est le Turk (cf. The Sarah Connor Chronicles) … Eh bien non!, C’est B.O.B.! Un robot à roulette (le T-0). Et je vais vous expliquer comment tout à commencé: en devenant un “maker du dimanche”!.\n\nLa genèse de BOB (*):\n\n*: Bot Operative Behaviour\n\n- un thermomètre à leds avec un Arduino et Johnny-Five\n- SAM (j’aime bien donner des petits noms à mes jouets), qui va rendre le Nest obsolète, avec un Raspberry et une GrovePi qui va discuter avec le monde grâce à MQTT\n- BOB, le T-0, avec un Raspberry et une GoPiGo … Et bien sûr BOB et SAM discuteront entre eux\n\nEt tout ça propulsé par du JavaScript! \nIl y aura donc de la démo live avec du hardware.\nJe vous parlerais aussi de l’écosystème “hardware + javascript\"\nIl y aura donc de la démo live avec du hardware.\nJe vous parlerais aussi de l’écosystème “hardware + javascript\"\n\nCette présentation a plusieurs objectifs:\n\n- montrer que JavaScript peut servir à autre chose que du web\n- montrer qu'il est facile de devenir un \"maker\" du dimanche même si l'on n'y connait pas grand chose\n- faire une petite introduction à l'IOT\n\nd'un point de vue démo, ce ne sera pas forcément du code mais de l'exécution de programmes avec impact sur des composants électronique (j'aurais donc une petite caméra, type webcam)",
    "type": "mobile",
    "difficulty": 101,
    "all": false,
    "lang": "fr",
    "hour": "h04",
    "video": "",
    "slides": "",
    "speakers": [
      "pcharriere"
    ]
  },
  {
    "id": "s13",
    "title": "Usages des robots humanoïdes dans les espaces grand publics, et connectés à notre monde numérique",
    "confRoom": "Salle Titan",
    "desc": "Les nouveaux robots humanoïdes ont maintenant des capacités qui permettent d'interagir naturellement et intuitivement avec leur environnement.\nAinsi, ils peuvent être utilisés en tant que nouvelles interfaces de communication avec un humain, ou avec notre monde numérique.\n\nDifférents cas d'usages sur l’intérêt de ces robots seront évoqués lors de cette conférence, tels que : Le conseil en magasin, l'orientation dans les espaces grand publics, l'accueil dans les hôtels, l'animation dans les musées, ou bien le divertissement. Les domaines d'applications sont sans limites.\nL'intégration de ces interfaces homme/machine soulève de nouveaux défis techniques, qui seront également abordés au travers de différents cas d'usages.",
    "type": "discovery",
    "difficulty": 101,
    "all": false,
    "lang": "fr",
    "hour": "h04",
    "video": "",
    "slides": "",
    "speakers": [
      "fcalzada"
    ]
  },
  {
    "id": "s14",
    "title": "Déploiement continu, test en production, autoscaling et workflow métiers pour vos applications web dans le Cloud",
    "confRoom": "Salle Titan",
    "desc": "Déployer des applications webs dans le Cloud permet aux développeurs de tirer partie de fonctionnalités Dev Ops comme le déploiement continu, le test en production, l'autoscaling, etc sans avoir à se soucier de l'infrastructure sous jacente.\nDans cette session, nous verrons comment le service Azure App Service de Microsoft vous permet d'obtenir cette flexibilité.",
    "type": "cloud",
    "difficulty": 101,
    "all": false,
    "lang": "fr",
    "hour": "h04",
    "video": "",
    "slides": "",
    "speakers": [
      "btalmard"
    ]
  },
  {
    "id": "s15",
    "title": "Firebase, au-delà du Chat. Et si on développait un plugin Atom de pair-programming?",
    "confRoom": "Salle Titan",
    "desc": "Firebase permet d'écrire de façon simple et robuste des applications collaboratives.\nSouvent on en fait la démonstration en développant un Chat en 10 lignes de code.\n\nNous allons voir comment aller plus loin en développant un plugin Atom\nde pair-programming permettant de binôme sur du code grâce à Firebase.\n\nGestion des sessions, synchronisation de plusieurs curseurs, modifications simultanées,\nconnections/déconnections...\n\nCe live-coding montrera comment mettre en oeuvre Firebase sur une vraie application.\nAvec des tests !",
    "type": "cloud",
    "difficulty": 101,
    "all": false,
    "lang": "fr",
    "hour": "h04",
    "video": "",
    "slides": "",
    "speakers": [
      "dgageot"
    ]
  },
  {
    "id": "s16",
    "title": "Angular 2 in action",
    "confRoom": "Salle Titan",
    "desc": "Dans ce codelab, nous allons découvrir le développement d'applications Web avec Angular 2. Nous prendrons comme exemple, une application de QUIZ que nous allons développer de A à Z et qui nous permettra de manipuler les nouveaux concepts proposés par cette nouvelle version. Soyez prêt à mettre les mains dans le cambouis et à débugger du code.\nWARNING: angular 2 est en developer preview !!!",
    "type": "web",
    "difficulty": 101,
    "all": false,
    "lang": "fr",
    "hour": "h04",
    "video": "",
    "slides": "",
    "speakers": [
      "wchegham"
    ]
  },
  {
    "id": "s17",
    "title": "Flexrox",
    "confRoom": "Salle Titan",
    "desc": "Acceptez mon bref soliloque\nDe louanges flattant Flexbox\nUne spec bien loin d'être en toc !\n\nAvant l'avènement de Flexbox,\nLes CSS furent un paradoxe :\nAlambiqués et mastocs\nParfois un peu loufoques\nEt pas toujours très orthodoxes\n... Même sur Firefox !\n\nAujourd'hui, véritable électrochoc\nLouons les bienfaits de Flexbox\nRetirez vos toques, posez vos breloques\nLaissez de côté vos docs et vos forks\nEt lâchez s'il vous plaît ce phoque !\n(et réciproque)\n\nQuelle belle époque\nBref... ça roxe !\n\nKAMOULOX !",
    "type": "web",
    "difficulty": 202,
    "all": false,
    "lang": "fr",
    "hour": "h04",
    "video": "",
    "slides": "",
    "speakers": [
      "rgoetter"
    ]
  },
  {
    "id": "s18",
    "title": "Harald à la dent bleue dans ton navigateur web",
    "confRoom": "Salle Titan",
    "desc": "Interagir avec des appareils en Bluetooth depuis une application Web est sur le point de devenir possible grâce à une nouvelle API Web standardisée qui se veut moderne et simple d'utilisation.",
    "type": "web",
    "difficulty": 202,
    "all": false,
    "lang": "fr",
    "hour": "h04",
    "video": "",
    "slides": "",
    "speakers": [
      "fbeaufort"
    ]
  },
  {
    "id": "s19",
    "title": "React, une autre façon de penser vos composants web",
    "confRoom": "Salle Titan",
    "desc": "React est une librairie JavaScript développée par Facebook pour créer facilement des interfaces graphiques. Contrairement à d'autres librairies, ici pas de templates et de pseudo code, React permet d'utiliser la pleine expressivité de JavaScript et de bénéficier de tous les goodies du langage.\n\nLe but de React est de proposer une solution permettant de construire des applications conséquentes avec des données qui évoluent dans le temps en écrivant exclusivement des composants réutilisables et testables tout en gardant une approche simple et efficace.\n\nDurant ce live coding, nous verrons comment utiliser React dans diverses situations, comment écrire des composants en utilisant ES2015, comment exposer ses composants React en WebComponents et pourquoi écrire des petites applications mobiles natives.",
    "type": "web",
    "difficulty": 101,
    "all": false,
    "lang": "fr",
    "hour": "h04",
    "video": "",
    "slides": "",
    "speakers": [
      "mancelin"
    ]
  },
  {
    "id": "s20",
    "title": "Advanced Scrolling Techniques on Android",
    "confRoom": "Salle Titan",
    "desc": "Scrolling is one of the most important gesture on mobile platforms. Indeed, it easily allows users to access a fairly large amount of content just by swiping their fingers on screen. In order to implement such gestures, the Android SDK comes with a bunch of scrolling containers: View, ListView, RecyclerView, ScrollView, etc. While using these components independently is relatively simple, it starts getting complicated when nesting them… In this session we will go through a complete overview of how Android deals with scrolling in general and how to master the scrolling mechanism to create compelling mobile user experience.",
    "type": "mobile",
    "difficulty": 303,
    "all": false,
    "lang": "fr",
    "hour": "h04",
    "video": "",
    "slides": "",
    "speakers": [
      "cmottier"
    ]
  },
  {
    "id": "s21",
    "title": "Mark, Marque et Marques",
    "confRoom": "Salle Titan",
    "desc": "Mark, Marque et Marques… ou comment créer une marque et la faire vivre sur une interface. \nQue ce soit une startup, un nouveau produit ou un projet client, la marque se doit d’être au centre de nos pensées. \nTout est lié par la Marque : interface, animations, architecture… \nDesigners et développeurs sont l’équipe parfaite pour créer et faire vivre La Marque. \nEt pourtant, ce n’est pas ce qui se passe aujourd’hui...\nCette conférence est donc pour expliquer ce processus et faire que les développeurs et designers travaillent main dans la main pour créer une expérience inoubliable pour l’utilisateur, inspirante et technologiquement innovante.",
    "type": "discovery",
    "difficulty": 101,
    "all": false,
    "lang": "fr",
    "hour": "h04",
    "video": "",
    "slides": "",
    "speakers": [
      "mgruaz"
    ]
  },
  {
    "id": "s22",
    "title": "Ionic : un framework fun et productif pour développer des applications mobiles hybrides",
    "confRoom": "Salle Titan",
    "desc": "Après 20 ans de Java, vous pensez qu'il est temps de basculer du côté mobile de la force mais vous n'avez pas envie de passer des jours à vous former au développement natif pour toutes les plateformes existantes ? Alors Ionic est fait pour vous !\n\nIonic c'est un framework mobile hybride basé sur HTML5, qui va rapidement vous rendre accro tellement il facilite le développement d'application pour mobile. Il est open source, il embarque avec lui la simplicité et la puissance d'AngularJS et il ne vous faudra que quelques heures pour développer une application simple mais déjà fonctionnelle qui pourra être déployée sur tous les mobiles ... what else?",
    "type": "mobile",
    "difficulty": 101,
    "all": false,
    "lang": "fr",
    "hour": "h04",
    "video": "",
    "slides": "",
    "speakers": [
      "smoallic"
    ]
  },
  {
    "id": "s23",
    "title": "Angular 2 : templates, composants et injection de dépendances",
    "confRoom": "Salle Titan",
    "desc": "La genèse d'Angular 2 n'est pas achevée, mais la version alpha permet déjà de se faire une bonne idée de ce à quoi il va ressembler. Et c'est bluffant ! Si la version 1 a paru magique, dans sa version 2 c'est un Angular épuré, à la fois plus puissant et plus limpide.\n\nDans cette session, rien que du code, pour vous montrer comment se créent les composants, s'écrivent les templates et s'injectent les dépendances.",
    "type": "web",
    "difficulty": 202,
    "all": false,
    "lang": "fr",
    "hour": "h04",
    "video": "",
    "slides": "",
    "speakers": [
      "tchatel"
    ]
  },
  {
    "id": "s24",
    "title": "8 pratiques clés en SEO pour les développeurs",
    "confRoom": "Salle Titan",
    "desc": "Le référencement web s'apparente souvent à des pratiques propres aux web-marketeurs et rédacteurs. Dans les faits, la technique web se fait de plus en plus présente et permet réellement de passer certains caps pour optimiser le positionnement des pages web. Nous allons faire le tour de plusieurs pratiques phares du référencement que les développeurs peuvent mettre en place pour réussir leur boost SEO.",
    "type": "discovery",
    "difficulty": 101,
    "all": false,
    "lang": "fr",
    "hour": "h04",
    "video": "",
    "slides": "",
    "speakers": [
      "mchartier"
    ]
  },
  {
    "id": "s25",
    "title": "REST from zero to hero in 45 minutes",
    "confRoom": "Salle Titan",
    "desc": "Venez découvrir - ou redécouvrir ! - les différents ingrédients qui sont a l’origine d’une bonne API.\n\nNous présenterons la transformation d’une API Web fictive (d'une conception assez discutable ;-) ) en une API REST vraiment user-friendly. Chaque étape sera l’occasion d’introduire un concept ou une bonne pratique supplémentaire en partant des bases de REST jusqu’aux sujets avancés tels que le versioning ou l’hypermédia.\n\nVous sortirez de cette session avec une vision claire des concepts cachés derrière le terme \"REST\".",
    "type": "web",
    "difficulty": 101,
    "all": false,
    "lang": "fr",
    "hour": "h04",
    "video": "",
    "slides": "",
    "speakers": [
      "arichard"
    ]
  },
  {
    "id": "s26",
    "title": "JavaScript ? Unicode",
    "confRoom": "Salle Titan",
    "desc": "In this talk we’ll take a look at the various ways JavaScript relies on Unicode, what the consequences are for JavaScript developers wishing to support full Unicode, and how the upcoming ECMAScript 6 (or ES 2015 as it’s being called nowadays) will improve this.",
    "type": "web",
    "difficulty": 101,
    "all": false,
    "lang": "fr",
    "hour": "h04",
    "video": "",
    "slides": "",
    "speakers": [
      "mbynens"
    ]
  },
  {
    "id": "s27",
    "title": "WebRTC Update",
    "confRoom": "Salle Titan",
    "desc": "\"What's new and next for WebRTC for native apps and on the web.\n\nDraft topics:\n• What are the big achievements of the last 12 months?\n• What are the big goals for the next 12 months? \n• ORTC, Unified Plan, WebRTC 0.9, WebRC 1.0 — WTF?\n• Codecs\n• WebRTC for Android and iOS\n• Hardware support\n• Amazing apps\n• Predictions?\n• Developer resources\"",
    "type": "web",
    "difficulty": 202,
    "all": false,
    "lang": "fr",
    "hour": "h04",
    "video": "",
    "slides": "",
    "speakers": [
      "sdutton"
    ]
  },
  {
    "id": "s1",
    "title": "Accueil",
    "confRoom": "Espace Les Machines",
    "desc": "Profitez de cet instant pour déguster une collation et un café avant d'enchaîner sur une journée bien remplie ! ;)",
    "type": "white",
    "all": true,
    "hour": "h01"
  },
  {
    "id": "s2",
    "title": "Keynote",
    "confRoom": "Salle Titan",
    "desc": "Conférence d'ouverture du DevFest",
    "type": "white",
    "all": true,
    "video": "",
    "hour": "h02"
  },
  {
    "id": "s11",
    "confRoom": "Espace Tour Lu",
    "title": "Déjeuner && Table Ronde : Mon Job en IT",
    "type": "white",
    "desc": "Repas gratuit pour tous les participants.<br>Profitez-en pour faire un tour des différents stands et démos.<br><br><b>Table Ronde : Mon nouveau job en IT</b> - Espace Bellem - 13h00 : <br> Aujourd'hui, quels choix avons-nous et comment s'y retrouver ? <br> Des professionnels du recrutement seront là pour échanger et partager sur les nouvelles pratiques, les conseils pour trouver le job de ses rêves, les attentes des sociétés, ….",
    "all": true,
    "hour": "h06"
  },
  {
    "id": "s20",
    "confRoom": "Espace Les Machines",
    "title": "Pause",
    "type": "white",
    "all": true,
    "hour": "h09"
  },
  {
    "id": "s33",
    "confRoom": "Espace Tour Lu",
    "title": "Afterparty",
    "type": "white",
    "desc": "Un moment de networking convivial pour les plus motivés :)<br> L'utilisation de votre smartphone est fortement recommandée ;)",
    "all": true,
    "hour": "h12"
  }
]
	}
	// On map les speakers
	_(agenda.sessions).map(function(session){
		if (!session.speakers)
			return session;
		session.speakers = _(session.speakers).map(function(speaker){
			return speakerService[_.findIndex(speakerService,function(speakerTmp){
				return speakerTmp.id === speaker;
			})];
		}).value();
		return session;
	}).value();

	// On prépare les données pour mieux les afficher
	agenda.sessionsTransform = _.chain(agenda.sessions).forEach(function(session){
		session.hourContent = agenda.hours[session.hour]
	}).groupBy(function(session){
		return session.hour;
	}).mapValues(function(sessionValues){
		return _(sessionValues).forEach(function(session){
			session.classCol = 	sessionValues.length === 1 ? 'col-md-12' : 'col-md-3';
		}).sortBy(function(session){
			switch (session.type){
				case 'mobile':
					return 0;
				case 'web' : 
					return 1;
				case 'cloud' : 
					return 2;
				case 'discovery' :
					return 3;
				default : 
					return 4;
			}
		}).value();		
	}).values().sortBy(function(sessionValues){return sessionValues[0].hour;})
	.value();

	return agenda;
}]);

/**
 * Sessions controller
 */ 
devfestApp.controller('AgendaCtrl', ['$scope', 'AgendaService', function ($scope, agendaService) {

    $scope.agenda = agendaService;
    

}]);