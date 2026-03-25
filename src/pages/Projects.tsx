
import { ExternalLink } from 'lucide-react';
import projectCybersecurite from '@/assets/project-cybersecurite.png';
import projectTemperature from '@/assets/project-temperature.png';
import projectReseau from '@/assets/project-reseau.png';
import projectSupervision from '@/assets/project-supervision.png';
import projectSafescreen from '@/assets/project-safescreen.png';
import projectIntegratif from '@/assets/project-integratif.png';
import projectIutfam from '@/assets/project-iutfam.png';

const Projects = () => {
  const projects = [
    {
      title: "Projet de sensibilisation à la cybersécurité",
      description: "Sensibiliser le public aux bonnes pratiques de sécurité.",
      image: projectCybersecurite,
      color: "bg-red-500",
      details: "Ce projet vise à éduquer et sensibiliser les utilisateurs aux menaces de cybersécurité actuelles et aux mesures préventives essentielles pour protéger leurs données personnelles et professionnelles.",
      link: "https://www.canva.com/design/DAGQh8EQjn0/ch8vVTu9xtW0kEJTZ6uq5Q/view?utm_content=DAGQh8EQjn0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h7e927ec9b2"
    },
    {
      title: "Système de surveillance de la température pour salle des serveurs",
      description: "Ce projet vise à concevoir et déployer un appareil de mesure de la température pour une salle des serveurs, permettant une surveillance en temps réel des températures.",
      image: projectTemperature,
      color: "bg-orange-500",
      details: "Développement d'un système de monitoring utilisant des capteurs de température connectés pour assurer la surveillance continue et l'alerte en cas de dépassement des seuils critiques.",
      link: "https://www.canva.com/design/DAGZn8ZIOGY/qu6FO5sqV_fFafIZaeDIAQ/view?utm_content=DAGZn8ZIOGY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hadb3f10e72"
    },
    {
      title: "Exploration de solutions de chiffrement sous Linux : Gocryptfs et LUKS",
      description: "Ce projet explore et compare deux méthodes de chiffrement sous Linux, Gocryptfs et LUKS, en examinant leurs avantages, inconvénients, cas d'utilisation, et performances.",
      image: null,
      color: "bg-purple-500",
      details: "Analyse comparative approfondie des solutions de chiffrement, incluant des tests de performance, d'usabilité et de sécurité pour guider le choix selon les besoins spécifiques."
    },
    {
      title: "Construire un réseau informatique pour une petite structure",
      description: "Ce projet consiste à déployer un réseau informatique sécurisé pour une petite entreprise immobilière, incluant des VLANs, une DMZ, des services réseau (HTTP, FTP, DHCP, SSH), un pare-feu pfSense et un accès Internet.",
      image: projectReseau,
      color: "bg-blue-500",
      details: "Conception et implémentation complète d'une infrastructure réseau sécurisée avec segmentation, services réseau et documentation technique détaillée.",
      link: "https://www.canva.com/design/DAGmsNC98MY/wbq2buJu20wdJQ40GmCbeg/view?utm_content=DAGmsNC98MY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h474305b08d"
    },
    {
      title: "Caractériser et mesurer un système Télécom",
      description: "L'objectif de ce projet était d'expérimenter un codec (G.711) dans un système télécom.",
      image: null,
      color: "bg-green-500",
      details: "Étude pratique des codecs audio dans les télécommunications, analyse des performances et de la qualité de transmission du codec G.711 dans différentes conditions."
    },
    {
      title: "Supervision des performances réseau",
      description: "Le projet consiste à mettre en place une console de supervision permettant de surveiller l'état des équipements réseau, avoir un historique des pannes sur les deux derniers mois et envoyer des alertes en cas de panne prolongée.",
      image: projectSupervision,
      color: "bg-indigo-500",
      details: "Développement d'une solution de monitoring réseau complète avec tableau de bord, historique des incidents et système d'alertes automatisées pour une maintenance proactive."
    },
    {
      title: "Projet SafeScreen",
      description: "Création d'un réseau d'écrans de divertissement destiné aux résidents d'un EHPAD, offrant un accès sécurisé à des contenus adaptés pour améliorer leur quotidien.",
      image: projectSafescreen,
      color: "bg-teal-500",
      details: "Dans le cadre de ce projet, j'ai été en charge de la partie cybersécurité : sécurisation du réseau d'écrans, mise en place de contrôles d'accès, protection des données des résidents et définition des politiques de sécurité pour garantir un environnement numérique fiable et conforme.",
      link: "https://www.canva.com/design/DAHDDIfdgKo/bmvAC1lapHD7vFoCG7xMpA/view?utm_content=DAHDDIfdgKo&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h236819d34c"
    },
    {
      title: "Projet intégratif – Architecture multi-sites",
      description: "Mise en place d'une architecture réseau complète répartie sur deux sites (Maison Mère et Succursale), interconnectés via pfSense avec segmentation par VLANs.",
      image: projectIntegratif,
      color: "bg-cyan-500",
      details: "Déploiement d'une infrastructure multi-sites comprenant des VLANs par catégorie d'utilisateurs (administration, professeurs, étudiants), un serveur Samba pour le partage de fichiers et un serveur Moodle accessible depuis l'ensemble des réseaux, le tout sécurisé par des pare-feux pfSense."
    },
    {
      title: "Site web IUTFAM – Réseau social étudiant",
      description: "Conception et développement d'un réseau social web dédié aux étudiants de l'IUT de La Réunion, permettant la communication et l'échange au sein de la communauté étudiante.",
      image: projectIutfam,
      color: "bg-emerald-500",
      details: "Ce projet collaboratif avait pour défi de créer une plateforme sociale complète avec système de chat, gestion d'événements et espace communautaire, offrant aux étudiants de l'IUT un outil de communication dédié et sécurisé."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Mes Projets
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Découvrez les projets que j'ai réalisés durant ma formation en Réseaux et Télécommunications
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden animate-slide-in group flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {project.image ? (
                <div className="w-full h-44 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ) : (
                <div className={`w-full h-44 ${project.color} flex items-center justify-center`}>
                  <span className="text-white text-5xl font-bold opacity-30">
                    {project.title.charAt(0)}
                  </span>
                </div>
              )}

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="border-t pt-4 mt-auto">
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {project.details}
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 px-6 py-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 font-medium">Projet académique</span>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm font-medium text-primary hover:underline transition-colors"
                    >
                      Voir la présentation <ExternalLink size={14} />
                    </a>
                  ) : (
                    <div className="flex space-x-1">
                      {[1, 2, 3].map((star) => (
                        <div key={star} className="w-2 h-2 bg-primary rounded-full"></div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-xl shadow-lg text-center animate-fade-in">
          <h2 className="text-2xl font-bold mb-4">
            Compétences développées
          </h2>
          <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
            Ces projets m'ont permis de développer mes compétences techniques et pratiques dans des domaines variés
            des télécommunications et de la cybersécurité.
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white bg-opacity-20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Réseaux</h3>
              <p className="text-sm text-blue-100">Configuration et sécurisation</p>
            </div>
            <div className="bg-white bg-opacity-20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Sécurité</h3>
              <p className="text-sm text-blue-100">Chiffrement et protection</p>
            </div>
            <div className="bg-white bg-opacity-20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Monitoring</h3>
              <p className="text-sm text-blue-100">Surveillance et alertes</p>
            </div>
            <div className="bg-white bg-opacity-20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Télécom</h3>
              <p className="text-sm text-blue-100">Codecs et transmission</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
