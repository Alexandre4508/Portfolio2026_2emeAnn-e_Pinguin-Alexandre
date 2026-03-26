
import { 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  GraduationCap, 
  Award, 
  Languages, 
  Monitor, 
  Heart,
  User,
  Target,
  Briefcase,
  Download
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const CV = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-secondary text-white p-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-2">ALEXANDRE PINGUIN</h1>
              <p className="text-xl text-blue-100 mb-6">Étudiant en Réseaux et Télécommunications</p>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center">
                  <Phone size={16} className="mr-2" />
                  <span>06 92 63 92 03</span>
                </div>
                <div className="flex items-center">
                  <Mail size={16} className="mr-2" />
                  <span>alexpinguin450@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="mr-2" />
                  <span>Saint-Louis</span>
                </div>
                <div className="flex items-center">
                  <Linkedin size={16} className="mr-2" />
                  <span>alexandre-pinguin-071b4531a</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Colonne de gauche */}
              <div className="lg:col-span-1 space-y-6">
                {/* Profil */}
                <div className="bg-tech-blue-light p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <User className="text-primary mr-3" size={24} />
                    <h2 className="text-xl font-bold text-primary">PROFIL</h2>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Je suis de nature organisée et attentif à ce qui m'entoure en général. 
                    J'aime les sciences, la chimie et l'informatique. Je suis aussi parfois 
                    sur les réseaux sociaux et crée souvent du contenu sur différentes plateformes.
                  </p>
                </div>

                {/* Qualités */}
                <div className="bg-tech-green-light p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Award className="text-secondary mr-3" size={24} />
                    <h2 className="text-xl font-bold text-secondary">QUALITÉS</h2>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                      Esprit d'équipe
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                      Organisé
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                      Rigoureux
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                      Attentif
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                      Naturel
                    </li>
                  </ul>
                </div>

                {/* Langues */}
                <div className="bg-gray-100 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Languages className="text-primary mr-3" size={24} />
                    <h2 className="text-xl font-bold text-primary">LANGUES</h2>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Français</span>
                        <span className="text-secondary font-semibold">Maîtrisé</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Anglais</span>
                        <span className="text-secondary font-semibold">A2</span>
                      </div>
                      <p className="text-gray-600 text-xs">En apprentissage</p>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Espagnol</span>
                        <span className="text-secondary font-semibold">A2</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Logiciels */}
                <div className="bg-tech-blue-light p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Monitor className="text-primary mr-3" size={24} />
                    <h2 className="text-xl font-bold text-primary">LOGICIELS FAMILIERS</h2>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <span className="bg-white px-2 py-1 rounded">Linux</span>
                    <span className="bg-white px-2 py-1 rounded">Putty</span>
                    <span className="bg-white px-2 py-1 rounded">Arduino</span>
                    <span className="bg-white px-2 py-1 rounded">Cisco Packet Tracer</span>
                    <span className="bg-white px-2 py-1 rounded">HTML</span>
                    <span className="bg-white px-2 py-1 rounded">Python</span>
                    <span className="bg-white px-2 py-1 rounded">Regressi</span>
                    <span className="bg-white px-2 py-1 rounded">Canva</span>
                    <span className="bg-white px-2 py-1 rounded">LibreOffice</span>
                    <span className="bg-white px-2 py-1 rounded">Raspberry</span>
                  </div>
                </div>

                {/* Passions */}
                <div className="bg-tech-green-light p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Heart className="text-secondary mr-3" size={24} />
                    <h2 className="text-xl font-bold text-secondary">PASSIONS</h2>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                      Jeux vidéo
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                      Réseaux sociaux
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                      Mode
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                      Sport
                    </li>
                  </ul>
                </div>
              </div>

              {/* Colonne de droite */}
              <div className="lg:col-span-2 space-y-6">
                {/* Diplômes */}
                <div>
                  <div className="flex items-center mb-6">
                    <GraduationCap className="text-primary mr-3" size={28} />
                    <h2 className="text-2xl font-bold text-primary">DIPLÔMES OBTENUS</h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg">Première année BUT Réseaux et Télécommunication</h3>
                      <p className="text-secondary font-semibold">2024 - 2025</p>
                      <p className="text-gray-600">IUT de la Réunion</p>
                    </div>
                    
                    <div className="border-l-4 border-secondary pl-6">
                      <h3 className="font-bold text-lg">Bac STL (Sciences Technologiques et Laboratoire)</h3>
                      <p className="text-secondary font-semibold">2023 - 2024</p>
                      <p className="text-gray-600">Lycée général et technologique Antoine Roussin, Saint-Louis</p>
                    </div>
                    
                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg">Certification Pix</h3>
                      <p className="text-secondary font-semibold">2023 - 2024</p>
                      <p className="text-gray-600">Lycée Général et technologique Antoine Roussin, Saint-Louis</p>
                    </div>
                    
                    <div className="border-l-4 border-secondary pl-6">
                      <h3 className="font-bold text-lg">Attestation de suivi ANSSI</h3>
                      <p className="text-secondary font-semibold">2024</p>
                      <p className="text-gray-600">IUT de la Réunion, Saint-Pierre</p>
                    </div>
                  </div>
                </div>

                {/* Qualités détaillées */}
                <div>
                  <div className="flex items-center mb-6">
                    <Target className="text-secondary mr-3" size={28} />
                    <h2 className="text-2xl font-bold text-secondary">QUALITÉS DÉVELOPPÉES</h2>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Grâce à mon diplôme j'ai appris à souvent collaborer et travailler au sein d'une équipe, 
                      ce qui fait que j'ai la capacité à écouter les suggestions qu'on peut me proposer pour améliorer mon travail.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Je sais m'adapter à quelconque situation avec flexibilité, surtout s'il s'agit de mon travail à effectuer 
                      au quotidien, et j'ai pu le démontrer grâce à cette première année dans ce BUT qui diffère complètement 
                      de mon diplôme précédent.
                    </p>
                  </div>
                </div>

                {/* Expérience */}
                <div>
                  <div className="flex items-center mb-6">
                    <Briefcase className="text-primary mr-3" size={28} />
                    <h2 className="text-2xl font-bold text-primary">EXPÉRIENCE</h2>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Durant cette première année de BUT, grâce aux SAE (Situations d'Apprentissage et d'Évaluation), 
                      j'ai pu me mettre dans de vraies situations professionnelles, notamment la mise en place d'un réseau 
                      avec une carte Raspberry Pi en me connectant à distance avec le protocole SSH.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      En laboratoire, nous avons aussi effectué plusieurs TP en relation avec la sensibilisation 
                      de l'utilisation de produits dangereux.
                    </p>
                  </div>
                </div>

                {/* Projet futur */}
                <div>
                  <div className="flex items-center mb-6">
                    <Target className="text-secondary mr-3" size={28} />
                    <h2 className="text-2xl font-bold text-secondary">PROJET FUTUR</h2>
                  </div>
                  
                  <div className="bg-gradient-to-r from-primary to-secondary text-white p-6 rounded-lg">
                    <p className="leading-relaxed">
                      J'aimerais plus tard travailler au sein d'une entreprise dans laquelle je pourrai m'épanouir 
                      et développer de manière passionnante mes compétences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;
