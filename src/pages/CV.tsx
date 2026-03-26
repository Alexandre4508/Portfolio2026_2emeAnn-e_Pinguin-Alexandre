
import { 
  Phone, Mail, MapPin, Linkedin, GraduationCap, Award, Languages, 
  Monitor, Heart, User, Target, Briefcase, Download, Car
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const CV = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-secondary text-white p-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-2">{t('cv.title')}</h1>
              <p className="text-xl text-blue-100 mb-4">{t('cv.subtitle')}</p>
              
              <a href="/CV_Alexandre_Pinguin.pdf" download>
                <Button className="mb-6 bg-white/20 border border-white/40 text-white hover:bg-white hover:text-primary">
                  <Download size={16} />
                  {t('cv.download')}
                </Button>
              </a>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center">
                  <Car size={16} className="mr-2" />
                  <span>Permis B - Véhiculé</span>
                </div>
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
                  <span>alexandre-pinguin</span>
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
                    <h2 className="text-xl font-bold text-primary">{t('cv.profile.title')}</h2>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {t('cv.profile.desc')}
                  </p>
                </div>

                {/* Qualités */}
                <div className="bg-tech-green-light p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Award className="text-secondary mr-3" size={24} />
                    <h2 className="text-xl font-bold text-secondary">{t('cv.qualities.title')}</h2>
                  </div>
                  <ul className="space-y-2 text-sm">
                    {[t('cv.quality.1'), t('cv.quality.2'), t('cv.quality.3'), t('cv.quality.4')].map((q, i) => (
                      <li key={i} className="flex items-center">
                        <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Langues */}
                <div className="bg-gray-100 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Languages className="text-primary mr-3" size={24} />
                    <h2 className="text-xl font-bold text-primary">{t('cv.languages.title')}</h2>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Français</span>
                      <span className="text-secondary font-semibold">Maîtrisé</span>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Anglais</span>
                        <span className="text-secondary font-semibold">A2</span>
                      </div>
                      <p className="text-gray-600 text-xs">Débutant</p>
                    </div>
                    <div>
                      <div className="flex justify-between">
                        <span>Espagnol</span>
                        <span className="text-secondary font-semibold">A2</span>
                      </div>
                      <p className="text-gray-600 text-xs">Débutant</p>
                    </div>
                  </div>
                </div>

                {/* Compétences techniques */}
                <div className="bg-tech-blue-light p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Monitor className="text-primary mr-3" size={24} />
                    <h2 className="text-xl font-bold text-primary">{t('cv.software.title')}</h2>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-semibold text-primary">Réseaux:</span>
                      <p className="text-gray-700">TCP/IP, VLAN, pfSense, routage, DHCP, DNS</p>
                    </div>
                    <div>
                      <span className="font-semibold text-primary">Supervision:</span>
                      <p className="text-gray-700">Raspberry Pi, SSH, surveillance locale</p>
                    </div>
                    <div>
                      <span className="font-semibold text-primary">Analyse:</span>
                      <p className="text-gray-700">ping, traceroute, test de connectivité</p>
                    </div>
                    <div>
                      <span className="font-semibold text-primary">Langages/outils:</span>
                      <p className="text-gray-700">HTML/CSS, Python, Cisco Packet Tracer, VirtualBox, GLPI</p>
                    </div>
                    <div>
                      <span className="font-semibold text-primary">Matériel:</span>
                      <p className="text-gray-700">Installation/maintenance de postes, Raspberry Pi</p>
                    </div>
                  </div>
                </div>

                {/* Passions */}
                <div className="bg-tech-green-light p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Heart className="text-secondary mr-3" size={24} />
                    <h2 className="text-xl font-bold text-secondary">{t('cv.passions.title')}</h2>
                  </div>
                  <ul className="space-y-2 text-sm">
                    {['Jeux vidéo', 'Réseaux sociaux', 'Sport'].map((p, i) => (
                      <li key={i} className="flex items-center">
                        <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Colonne de droite */}
              <div className="lg:col-span-2 space-y-6">
                {/* Diplômes */}
                <div>
                  <div className="flex items-center mb-6">
                    <GraduationCap className="text-primary mr-3" size={28} />
                    <h2 className="text-2xl font-bold text-primary">{t('cv.diplomas.title')}</h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg">Deuxième année BUT Réseaux et Télécommunications</h3>
                      <p className="text-secondary font-semibold">2025 - 2026</p>
                      <p className="text-gray-600">IUT de la Réunion</p>
                    </div>
                    
                    <div className="border-l-4 border-secondary pl-6">
                      <h3 className="font-bold text-lg">Bac STL (Sciences et Technologies de Laboratoire)</h3>
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
                      <p className="text-secondary font-semibold">2024 - 2025</p>
                      <p className="text-gray-600">IUT de la Réunion, Saint-Pierre</p>
                    </div>
                  </div>
                </div>

                {/* Qualités développées */}
                <div>
                  <div className="flex items-center mb-6">
                    <Target className="text-secondary mr-3" size={28} />
                    <h2 className="text-2xl font-bold text-secondary">{t('cv.skills.title')}</h2>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 leading-relaxed mb-4">{t('cv.skills.desc1')}</p>
                    <p className="text-gray-700 leading-relaxed">{t('cv.skills.desc2')}</p>
                  </div>
                </div>

                {/* Projets / Expérience */}
                <div>
                  <div className="flex items-center mb-6">
                    <Briefcase className="text-primary mr-3" size={28} />
                    <h2 className="text-2xl font-bold text-primary">{t('cv.experience.title')}</h2>
                  </div>
                  
                  <div className="space-y-4">
                    {[t('cv.experience.audit'), t('cv.experience.secure'), t('cv.experience.infra'), t('cv.experience.supervision')].map((exp, i) => (
                      <div key={i} className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-700 text-sm leading-relaxed">{exp}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Projet futur */}
                <div>
                  <div className="flex items-center mb-6">
                    <Target className="text-secondary mr-3" size={28} />
                    <h2 className="text-2xl font-bold text-secondary">{t('cv.future.title')}</h2>
                  </div>
                  
                  <div className="bg-gradient-to-r from-primary to-secondary text-white p-6 rounded-lg">
                    <p className="leading-relaxed">{t('cv.future.desc')}</p>
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
