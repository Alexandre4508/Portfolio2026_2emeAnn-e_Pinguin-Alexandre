
import { Shield, Thermometer, Lock, Network, Phone, MonitorSpeaker } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Projet de sensibilisation à la cybersécurité",
      description: "Sensibiliser le public aux bonnes pratiques de sécurité.",
      icon: Shield,
      color: "bg-red-500",
      details: "Ce projet vise à éduquer et sensibiliser les utilisateurs aux menaces de cybersécurité actuelles et aux mesures préventives essentielles pour protéger leurs données personnelles et professionnelles."
    },
    {
      title: "Système de surveillance de la température pour salle des serveurs",
      description: "Ce projet vise à concevoir et déployer un appareil de mesure de la température pour une salle des serveurs, permettant une surveillance en temps réel des températures.",
      icon: Thermometer,
      color: "bg-orange-500",
      details: "Développement d'un système de monitoring utilisant des capteurs de température connectés pour assurer la surveillance continue et l'alerte en cas de dépassement des seuils critiques."
    },
    {
      title: "Exploration de solutions de chiffrement sous Linux : Gocryptfs et LUKS",
      description: "Ce projet explore et compare deux méthodes de chiffrement sous Linux, Gocryptfs et LUKS, en examinant leurs avantages, inconvénients, cas d'utilisation, et performances.",
      icon: Lock,
      color: "bg-purple-500",
      details: "Analyse comparative approfondie des solutions de chiffrement, incluant des tests de performance, d'usabilité et de sécurité pour guider le choix selon les besoins spécifiques."
    },
    {
      title: "Construire un réseau informatique pour une petite structure",
      description: "Ce projet consiste à déployer un réseau informatique sécurisé pour une petite entreprise immobilière, incluant des VLANs, une DMZ, des services réseau (HTTP, FTP, DHCP, SSH), un pare-feu pfSense et un accès Internet.",
      icon: Network,
      color: "bg-blue-500",
      details: "Conception et implémentation complète d'une infrastructure réseau sécurisée avec segmentation, services réseau et documentation technique détaillée."
    },
    {
      title: "Caractériser et mesurer un système Télécom",
      description: "L'objectif de ce projet était d'expérimenter un codec (G.711) dans un système télécom.",
      icon: Phone,
      color: "bg-green-500",
      details: "Étude pratique des codecs audio dans les télécommunications, analyse des performances et de la qualité de transmission du codec G.711 dans différentes conditions."
    },
    {
      title: "Supervision des performances réseau",
      description: "Le projet consiste à mettre en place une console de supervision permettant de surveiller l'état des équipements réseau, avoir un historique des pannes sur les deux derniers mois et envoyer des alertes en cas de panne prolongée.",
      icon: MonitorSpeaker,
      color: "bg-indigo-500",
      details: "Développement d'une solution de monitoring réseau complète avec tableau de bord, historique des incidents et système d'alertes automatisées pour une maintenance proactive."
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
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden animate-slide-in group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="p-6">
                  <div className={`${project.color} text-white p-4 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={32} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-4 line-clamp-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="border-t pt-4">
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {project.details}
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 font-medium">Projet académique</span>
                    <div className="flex space-x-1">
                      {[1, 2, 3].map((star) => (
                        <div key={star} className="w-2 h-2 bg-primary rounded-full"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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
