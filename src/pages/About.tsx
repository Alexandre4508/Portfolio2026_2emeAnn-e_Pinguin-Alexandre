
import { GraduationCap, Target, Heart, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            À propos de moi
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-lg animate-slide-in">
            <div className="flex items-center mb-6">
              <div className="bg-primary text-white p-3 rounded-lg mr-4">
                <GraduationCap size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Mon parcours</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Je suis actuellement étudiant en première année de BUT Réseaux et Télécommunications à l'IUT de la Réunion. 
              Après avoir obtenu mon Bac STL (Sciences et Technologies de Laboratoire) au Lycée Antoine Roussin, 
              j'ai choisi de me réorienter vers un domaine qui me passionne : les technologies de l'information et de la communication.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg animate-slide-in" style={{animationDelay: '0.2s'}}>
            <div className="flex items-center mb-6">
              <div className="bg-secondary text-white p-3 rounded-lg mr-4">
                <Target size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Ma motivation</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Je suis une personne naturellement motivée et organisée, avec une grande attention aux détails. 
              Mon changement d'orientation témoigne de ma capacité d'adaptation et de ma détermination à poursuivre 
              mes passions dans le domaine technologique.
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg mb-12 animate-fade-in">
          <div className="flex items-center mb-6">
            <div className="bg-primary text-white p-3 rounded-lg mr-4">
              <Heart size={28} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Mes passions</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-3 text-primary">Cybersécurité</h3>
              <p className="text-gray-600 mb-4">
                Je suis particulièrement intéressé par la cybersécurité et la protection des systèmes d'information. 
                Cette passion me pousse à approfondir mes connaissances sur les menaces actuelles et les moyens de s'en protéger.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3 text-secondary">Sciences et Innovation</h3>
              <p className="text-gray-600 mb-4">
                J'ai toujours été passionné par les sciences, particulièrement la chimie et l'informatique. 
                Cette curiosité scientifique nourrit ma créativité et mon approche analytique des problèmes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3 text-primary">Création de contenu</h3>
              <p className="text-gray-600 mb-4">
                Je suis actif sur les réseaux sociaux où je crée régulièrement du contenu sur différentes plateformes, 
                ce qui m'a permis de développer mes compétences en communication digitale.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3 text-secondary">Travail d'équipe</h3>
              <p className="text-gray-600 mb-4">
                Grâce à mon expérience en laboratoire, j'ai développé de solides compétences en collaboration 
                et je sais écouter les suggestions pour améliorer mon travail.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3 text-primary">Mode & Développement personnel</h3>
              <p className="text-gray-600 mb-4">
                Intéressé par le monde de la mode, j'ai participé à l'élection de Mister Étudiant Réunion 2026. 
                Cette expérience me permet de me développer sur le plan humain et de renforcer ma confiance en moi.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3 text-secondary">Danse</h3>
              <p className="text-gray-600 mb-4">
                J'aime danser, une passion qui me permet de m'exprimer, de me détendre et de cultiver ma créativité au quotidien.
              </p>
            </div>
          </div>
        </div>
        </div>

        <div className="bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-xl shadow-lg animate-fade-in">
          <div className="flex items-center mb-6">
            <div className="bg-white text-primary p-3 rounded-lg mr-4">
              <Award size={28} />
            </div>
            <h2 className="text-2xl font-bold">Mes qualités</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white bg-opacity-20 p-4 rounded-lg text-center">
              <h3 className="font-semibold mb-2">Organisé</h3>
              <p className="text-sm text-blue-100">Structure et méthode dans mon travail</p>
            </div>
            <div className="bg-white bg-opacity-20 p-4 rounded-lg text-center">
              <h3 className="font-semibold mb-2">Rigoureux</h3>
              <p className="text-sm text-blue-100">Attention aux détails et précision</p>
            </div>
            <div className="bg-white bg-opacity-20 p-4 rounded-lg text-center">
              <h3 className="font-semibold mb-2">Attentif</h3>
              <p className="text-sm text-blue-100">Écoute active et observation</p>
            </div>
            <div className="bg-white bg-opacity-20 p-4 rounded-lg text-center">
              <h3 className="font-semibold mb-2">Adaptable</h3>
              <p className="text-sm text-blue-100">Flexibilité face aux changements</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
