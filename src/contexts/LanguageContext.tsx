import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  fr: {
    // Header
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.cv': 'CV',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',

    // Home
    'home.hero.title': 'Bienvenue sur mon site',
    'home.hero.name': 'Alexandre Pinguin',
    'home.hero.subtitle': 'Étudiant en deuxième année de BUT Réseaux et Télécommunications - Parcours cybersécurité',
    'home.hero.cta1': 'Découvrir mon profil',
    'home.hero.cta2': 'Voir mes projets',
    'home.features.title': "Mes domaines d'intérêt",
    'home.features.network.title': 'Réseaux & Télécoms',
    'home.features.network.desc': 'Apprentissage des technologies réseau, des protocoles de communication et des infrastructures télécom modernes.',
    'home.features.security.title': 'Cybersécurité',
    'home.features.security.desc': 'Etudiant dans la sécurité informatique, la protection des données et les bonnes pratiques sécuritaires.',
    'home.features.dev.title': 'Développement',
    'home.features.dev.desc': 'Maîtrise de Python, HTML et découverte de nouvelles technologies pour créer des solutions innovantes.',
    'home.cta.title': 'Ouvert aux opportunités',
    'home.cta.desc': "Actuellement à la recherche d'une alternance ou d'un stage en tant que technicien/administrateur réseaux ou responsable sécurité des systèmes d'information. N'hésitez pas à me contacter !",
    'home.cta.button': 'Me contacter',

    // About
    'about.title': 'À propos de moi',
    'about.subtitle': 'Étudiant passionné en Réseaux et Télécommunications',
    'about.parcours.title': 'Mon parcours',
    'about.parcours.desc': "Après un baccalauréat STL, je me suis orienté vers le BUT Réseaux et Télécommunications à l'IUT de La Réunion. Cette reconversion réussie me permet d'allier ma curiosité scientifique à ma passion pour l'informatique et les réseaux.",
    'about.motivation.title': 'Ma motivation',
    'about.motivation.desc': "Je suis motivé par le désir constant d'apprendre et de me perfectionner dans le domaine des télécommunications et de la cybersécurité. Chaque projet est une nouvelle opportunité de développer mes compétences.",
    'about.passions.title': 'Mes passions',
    'about.passions.gaming.title': 'Jeux vidéo',
    'about.passions.gaming.desc': "Passionné par l'univers du gaming, je m'intéresse aux technologies derrière les jeux et aux communautés en ligne.",
    'about.passions.social.title': 'Réseaux sociaux',
    'about.passions.social.desc': "Créateur de contenu sur différentes plateformes, j'explore les tendances numériques et la communication digitale.",
    'about.passions.sports.title': 'Sport',
    'about.passions.sports.desc': "Le sport m'aide à maintenir un équilibre de vie sain et développe mon esprit d'équipe et ma persévérance.",
    'about.passions.science.title': 'Sciences',
    'about.passions.science.desc': "Mon parcours en STL m'a donné un goût prononcé pour les sciences, la chimie et l'expérimentation.",
    'about.passions.fashion.title': 'Mode',
    'about.passions.fashion.desc': "Intéressé par le monde de la mode, j'ai participé à l'élection de Mister Étudiant Réunion 2026, une expérience qui me permet de développer mon côté humain et ma confiance en moi.",
    'about.passions.dance.title': 'Danse',
    'about.passions.dance.desc': "La danse est une passion qui me permet de m'exprimer, de me dépasser et de partager des moments de convivialité.",
    'about.qualities.title': 'Mes qualités',
    'about.qualities.team.title': "Esprit d'équipe",
    'about.qualities.team.desc': 'Collaboration efficace et écoute active au sein des projets de groupe.',
    'about.qualities.organized.title': 'Organisé',
    'about.qualities.organized.desc': 'Planification rigoureuse et gestion efficace du temps et des ressources.',
    'about.qualities.curious.title': 'Curieux',
    'about.qualities.curious.desc': "Toujours en quête de nouvelles connaissances et technologies à explorer.",
    'about.qualities.adaptable.title': 'Adaptable',
    'about.qualities.adaptable.desc': "Capacité à m'ajuster rapidement aux nouvelles situations et défis.",

    // CV
    'cv.title': 'ALEXANDRE PINGUIN',
    'cv.subtitle': 'Étudiant en Réseaux et Télécommunications',
    'cv.download': 'Télécharger mon CV',
    'cv.profile.title': 'PROFIL',
    'cv.profile.desc': "Étudiant motivé en BUT Réseaux & Télécommunications, passionné par les systèmes et les réseaux grâce à mes différents projets, organisé, rigoureux et en reconversion réussie après un bac STL, je suis à la recherche d'une alternance ou un stage comme responsable sécurité des systèmes d'information ou technicien ou administrateur réseaux pour renforcer mes compétences sur les infrastructures en environnement professionnel.",
    'cv.qualities.title': 'QUALITÉS',
    'cv.quality.1': "Sens de l'organisation",
    'cv.quality.2': 'Capacité à documenter et transmettre',
    'cv.quality.3': 'Apprend vite',
    'cv.quality.4': 'Polyvalent',
    'cv.languages.title': 'LANGUES',
    'cv.software.title': 'COMPÉTENCES TECHNIQUES',
    'cv.passions.title': 'PASSIONS',
    'cv.diplomas.title': 'DIPLÔMES OBTENUS',
    'cv.skills.title': 'QUALITÉS DÉVELOPPÉES',
    'cv.skills.desc1': "Grâce à mon diplôme j'ai appris à souvent collaborer et travailler au sein d'une équipe, ce qui fait que j'ai la capacité à écouter les suggestions qu'on peut me proposer pour améliorer mon travail.",
    'cv.skills.desc2': "Je sais m'adapter à quelconque situation avec flexibilité, surtout s'il s'agit de mon travail à effectuer au quotidien, et j'ai pu le démontrer grâce à cette première année dans ce BUT qui diffère complètement de mon diplôme précédent.",
    'cv.experience.title': 'PROJETS / EXPÉRIENCE',
    'cv.experience.audit': "Audit de Sécurité Réseau Direct : Rédaction complète d'un audit de sécurité pour un client en effectuant du Pentesting sur plusieurs machines.",
    'cv.experience.secure': "Concevoir un réseau sécurisé : Conception, déploiement et sécurisation de l'architecture réseau d'une entreprise multisite.",
    'cv.experience.infra': "Infrastructure réseau complète : Création d'un réseau inter-sites avec pfSense et switches VLAN. Mise en place de serveurs Samba et Moodle.",
    'cv.experience.supervision': "Console de supervision : Conception de l'interface utilisateur, réflexion graphique, organisation des livrables et présentation orale.",
    'cv.future.title': 'PROJET FUTUR',
    'cv.future.desc': "J'aimerais plus tard travailler au sein d'une entreprise dans laquelle je pourrai m'épanouir et développer de manière passionnante mes compétences.",

    // Projects
    'projects.title': 'Mes Projets',
    'projects.subtitle': 'Découvrez les projets que j\'ai réalisés durant ma formation en Réseaux et Télécommunications',
    'projects.academic': 'Projet académique',
    'projects.view': 'Voir la présentation',
    'projects.skills.title': 'Compétences développées',
    'projects.skills.desc': 'Ces projets m\'ont permis de développer mes compétences techniques et pratiques dans des domaines variés des télécommunications et de la cybersécurité.',
    'projects.skills.network': 'Réseaux',
    'projects.skills.network.desc': 'Configuration et sécurisation',
    'projects.skills.security': 'Sécurité',
    'projects.skills.security.desc': 'Chiffrement et protection',
    'projects.skills.monitoring': 'Monitoring',
    'projects.skills.monitoring.desc': 'Surveillance et alertes',
    'projects.skills.telecom': 'Télécom',
    'projects.skills.telecom.desc': 'Codecs et transmission',
    // Project items
    'project.cyber.title': 'Projet de sensibilisation à la cybersécurité',
    'project.cyber.desc': 'Sensibiliser le public aux bonnes pratiques de sécurité.',
    'project.cyber.details': 'Ce projet vise à éduquer et sensibiliser les utilisateurs aux menaces de cybersécurité actuelles et aux mesures préventives essentielles pour protéger leurs données personnelles et professionnelles.',
    'project.temp.title': 'Système de surveillance de la température pour salle des serveurs',
    'project.temp.desc': 'Ce projet vise à concevoir et déployer un appareil de mesure de la température pour une salle des serveurs, permettant une surveillance en temps réel des températures.',
    'project.temp.details': 'Développement d\'un système de monitoring utilisant des capteurs de température connectés pour assurer la surveillance continue et l\'alerte en cas de dépassement des seuils critiques.',
    'project.crypto.title': 'Exploration de solutions de chiffrement sous Linux : Gocryptfs et LUKS',
    'project.crypto.desc': 'Ce projet explore et compare deux méthodes de chiffrement sous Linux, Gocryptfs et LUKS, en examinant leurs avantages, inconvénients, cas d\'utilisation, et performances.',
    'project.crypto.details': 'Analyse comparative approfondie des solutions de chiffrement, incluant des tests de performance, d\'usabilité et de sécurité pour guider le choix selon les besoins spécifiques.',
    'project.network.title': 'Construire un réseau informatique pour une petite structure',
    'project.network.desc': 'Ce projet consiste à déployer un réseau informatique sécurisé pour une petite entreprise immobilière, incluant des VLANs, une DMZ, des services réseau (HTTP, FTP, DHCP, SSH), un pare-feu pfSense et un accès Internet.',
    'project.network.details': 'Conception et implémentation complète d\'une infrastructure réseau sécurisée avec segmentation, services réseau et documentation technique détaillée.',
    'project.telecom.title': 'Caractériser et mesurer un système Télécom',
    'project.telecom.desc': 'L\'objectif de ce projet était d\'expérimenter un codec (G.711) dans un système télécom.',
    'project.telecom.details': 'Étude pratique des codecs audio dans les télécommunications, analyse des performances et de la qualité de transmission du codec G.711 dans différentes conditions.',
    'project.supervision.title': 'Supervision des performances réseau',
    'project.supervision.desc': 'Le projet consiste à mettre en place une console de supervision permettant de surveiller l\'état des équipements réseau, avoir un historique des pannes sur les deux derniers mois et envoyer des alertes en cas de panne prolongée.',
    'project.supervision.details': 'Développement d\'une solution de monitoring réseau complète avec tableau de bord, historique des incidents et système d\'alertes automatisées pour une maintenance proactive.',
    'project.safescreen.title': 'Projet SafeScreen',
    'project.safescreen.desc': 'Création d\'un réseau d\'écrans de divertissement destiné aux résidents d\'un EHPAD, offrant un accès sécurisé à des contenus adaptés pour améliorer leur quotidien.',
    'project.safescreen.details': 'Dans le cadre de ce projet, j\'ai été en charge de la partie cybersécurité : sécurisation du réseau d\'écrans, mise en place de contrôles d\'accès, protection des données des résidents et définition des politiques de sécurité pour garantir un environnement numérique fiable et conforme.',
    'project.integratif.title': 'Projet intégratif – Architecture multi-sites',
    'project.integratif.desc': 'Mise en place d\'une architecture réseau complète répartie sur deux sites (Maison Mère et Succursale), interconnectés via pfSense avec segmentation par VLANs.',
    'project.integratif.details': 'Déploiement d\'une infrastructure multi-sites comprenant des VLANs par catégorie d\'utilisateurs (administration, professeurs, étudiants), un serveur Samba pour le partage de fichiers et un serveur Moodle accessible depuis l\'ensemble des réseaux, le tout sécurisé par des pare-feux pfSense.',
    'project.iutfam.title': 'Site web IUTFAM – Réseau social étudiant',
    'project.iutfam.desc': 'Conception et développement d\'un réseau social web dédié aux étudiants de l\'IUT de La Réunion, permettant la communication et l\'échange au sein de la communauté étudiante.',
    'project.iutfam.details': 'Ce projet collaboratif avait pour défi de créer une plateforme sociale complète avec système de chat, gestion d\'événements et espace communautaire, offrant aux étudiants de l\'IUT un outil de communication dédié et sécurisé.',

    // Contact
    'contact.title': 'Contactez-moi',
    'contact.subtitle': "N'hésitez pas à me contacter pour toute question ou opportunité",
    'contact.info.title': 'Informations de contact',
    'contact.form.name': 'Nom complet',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Sujet',
    'contact.form.message': 'Message',
    'contact.form.send': 'Envoyer le message',
    'contact.available.title': 'Disponibilité',
    'contact.available.desc': 'Je suis actuellement disponible pour des stages et alternances.',
    'contact.connect': 'Restons connectés',

    // Footer
    'footer.role': 'Étudiant en Réseaux & Télécommunications',
    'footer.rights': '© Alexandre Pinguin. Tous droits réservés.',

    // Project modal
    'projects.modal.close': 'Fermer',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.cv': 'Resume',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    // Home
    'home.hero.title': 'Welcome to my website',
    'home.hero.name': 'Alexandre Pinguin',
    'home.hero.subtitle': 'Second-year student in Networks & Telecommunications – Cybersecurity track',
    'home.hero.cta1': 'Discover my profile',
    'home.hero.cta2': 'View my projects',
    'home.features.title': 'My areas of interest',
    'home.features.network.title': 'Networks & Telecom',
    'home.features.network.desc': 'Learning network technologies, communication protocols, and modern telecom infrastructure.',
    'home.features.security.title': 'Cybersecurity',
    'home.features.security.desc': 'Studying IT security, data protection, and security best practices.',
    'home.features.dev.title': 'Development',
    'home.features.dev.desc': 'Proficiency in Python, HTML, and discovering new technologies to create innovative solutions.',
    'home.cta.title': 'Open to opportunities',
    'home.cta.desc': 'Currently looking for an apprenticeship or internship as a network technician/administrator or information security officer. Feel free to contact me!',
    'home.cta.button': 'Contact me',

    // About
    'about.title': 'About me',
    'about.subtitle': 'Passionate student in Networks & Telecommunications',
    'about.parcours.title': 'My background',
    'about.parcours.desc': 'After a STL baccalaureate, I moved into Networks & Telecommunications at IUT de La Réunion. This successful transition allows me to combine my scientific curiosity with my passion for IT and networks.',
    'about.motivation.title': 'My motivation',
    'about.motivation.desc': 'I am driven by a constant desire to learn and improve in the field of telecommunications and cybersecurity. Every project is a new opportunity to develop my skills.',
    'about.passions.title': 'My passions',
    'about.passions.gaming.title': 'Video games',
    'about.passions.gaming.desc': 'Passionate about the gaming universe, I am interested in the technologies behind games and online communities.',
    'about.passions.social.title': 'Social media',
    'about.passions.social.desc': 'Content creator on various platforms, I explore digital trends and digital communication.',
    'about.passions.sports.title': 'Sports',
    'about.passions.sports.desc': 'Sports help me maintain a healthy life balance and develop my teamwork spirit and perseverance.',
    'about.passions.science.title': 'Sciences',
    'about.passions.science.desc': 'My STL background gave me a strong taste for science, chemistry, and experimentation.',
    'about.passions.fashion.title': 'Fashion',
    'about.passions.fashion.desc': 'Interested in the fashion world, I participated in the Mister Student Réunion 2026 election, an experience that allows me to develop my human side and self-confidence.',
    'about.passions.dance.title': 'Dance',
    'about.passions.dance.desc': 'Dance is a passion that allows me to express myself, push my limits, and share moments of togetherness.',
    'about.qualities.title': 'My qualities',
    'about.qualities.team.title': 'Team spirit',
    'about.qualities.team.desc': 'Effective collaboration and active listening within group projects.',
    'about.qualities.organized.title': 'Organized',
    'about.qualities.organized.desc': 'Rigorous planning and effective time and resource management.',
    'about.qualities.curious.title': 'Curious',
    'about.qualities.curious.desc': 'Always seeking new knowledge and technologies to explore.',
    'about.qualities.adaptable.title': 'Adaptable',
    'about.qualities.adaptable.desc': 'Ability to quickly adjust to new situations and challenges.',

    // CV
    'cv.title': 'ALEXANDRE PINGUIN',
    'cv.subtitle': 'Networks & Telecommunications Student',
    'cv.download': 'Download my resume',
    'cv.profile.title': 'PROFILE',
    'cv.profile.desc': 'Motivated student in Networks & Telecommunications, passionate about systems and networks through various projects, organized, rigorous, and in a successful career change after a STL baccalaureate. Looking for an apprenticeship or internship as an information security officer or network technician/administrator to strengthen my skills in professional infrastructure environments.',
    'cv.qualities.title': 'QUALITIES',
    'cv.quality.1': 'Organizational skills',
    'cv.quality.2': 'Ability to document and share',
    'cv.quality.3': 'Quick learner',
    'cv.quality.4': 'Versatile',
    'cv.languages.title': 'LANGUAGES',
    'cv.software.title': 'TECHNICAL SKILLS',
    'cv.passions.title': 'PASSIONS',
    'cv.diplomas.title': 'EDUCATION',
    'cv.skills.title': 'DEVELOPED SKILLS',
    'cv.skills.desc1': 'Through my studies I learned to collaborate and work within a team, which means I have the ability to listen to suggestions to improve my work.',
    'cv.skills.desc2': 'I know how to adapt to any situation with flexibility, especially when it comes to my daily work, and I was able to demonstrate this through my first year in this program which differs completely from my previous diploma.',
    'cv.experience.title': 'PROJECTS / EXPERIENCE',
    'cv.experience.audit': 'Direct Network Security Audit: Complete writing of a security audit for a client by performing Pentesting on multiple machines.',
    'cv.experience.secure': 'Designing a secure network: Design, deployment and securing of the network architecture of a multi-site company.',
    'cv.experience.infra': 'Complete network infrastructure: Creation of an inter-site network with pfSense and VLAN switches. Setup of Samba and Moodle servers.',
    'cv.experience.supervision': 'Monitoring console: User interface design, graphic reflection, deliverables organization and oral presentation.',
    'cv.future.title': 'FUTURE PLANS',
    'cv.future.desc': 'I would like to work in a company where I can thrive and passionately develop my skills.',

    // Projects
    'projects.title': 'My Projects',
    'projects.subtitle': 'Discover the projects I completed during my Networks & Telecommunications studies',
    'projects.academic': 'Academic project',
    'projects.view': 'View presentation',
    'projects.skills.title': 'Skills developed',
    'projects.skills.desc': 'These projects allowed me to develop my technical and practical skills in various areas of telecommunications and cybersecurity.',
    'projects.skills.network': 'Networks',
    'projects.skills.network.desc': 'Configuration and security',
    'projects.skills.security': 'Security',
    'projects.skills.security.desc': 'Encryption and protection',
    'projects.skills.monitoring': 'Monitoring',
    'projects.skills.monitoring.desc': 'Surveillance and alerts',
    'projects.skills.telecom': 'Telecom',
    'projects.skills.telecom.desc': 'Codecs and transmission',

    // Contact
    'contact.title': 'Contact me',
    'contact.subtitle': 'Feel free to contact me for any questions or opportunities',
    'contact.info.title': 'Contact information',
    'contact.form.name': 'Full name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send message',
    'contact.available.title': 'Availability',
    'contact.available.desc': 'I am currently available for internships and apprenticeships.',
    'contact.connect': 'Stay connected',

    // Footer
    'footer.role': 'Networks & Telecommunications Student',
    'footer.rights': '© Alexandre Pinguin. All rights reserved.',

    // Project modal
    'projects.modal.close': 'Close',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
