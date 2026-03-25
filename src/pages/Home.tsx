
import { ArrowRight, Network, Shield, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBg from '@/assets/hero-bg.jpeg';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-tech-blue-dark/70 to-secondary/80" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Bienvenue sur mon site
            </h1>
            <h2 className="text-2xl md:text-3xl mb-8 text-blue-100">
              Alexandre Pinguin
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-blue-200 max-w-3xl mx-auto">
              Étudiant en deuxième année de BUT Réseaux et Télécommunications - Parcours cybersécurité
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link 
                to="/about" 
                className="bg-secondary hover:bg-secondary-dark px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                Découvrir mon profil
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link 
                to="/projects" 
                className="bg-transparent border-2 border-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
              >
                Voir mes projets
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Mes domaines d'intérêt
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-in">
              <div className="bg-primary text-white p-4 rounded-lg w-fit mb-6">
                <Network size={32} />
              </div>
              <h4 className="text-xl font-bold mb-4 text-gray-800">Réseaux & Télécoms</h4>
              <p className="text-gray-600">
                Apprentissage des technologies réseau, des protocoles de communication et des infrastructures télécom modernes.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-in" style={{animationDelay: '0.2s'}}>
              <div className="bg-secondary text-white p-4 rounded-lg w-fit mb-6">
                <Shield size={32} />
              </div>
              <h4 className="text-xl font-bold mb-4 text-gray-800">Cybersécurité</h4>
              <p className="text-gray-600">
                Etudiant dans la sécurité informatique, la protection des données et les bonnes pratiques sécuritaires.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-in" style={{animationDelay: '0.4s'}}>
              <div className="bg-primary text-white p-4 rounded-lg w-fit mb-6">
                <Code size={32} />
              </div>
              <h4 className="text-xl font-bold mb-4 text-gray-800">Développement</h4>
              <p className="text-gray-600">
                Maîtrise de Python, HTML et découverte de nouvelles technologies pour créer des solutions innovantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-secondary to-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">
            Prêt à collaborer ?
          </h3>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Je suis toujours ouvert aux nouvelles opportunités et aux projets innovants dans le domaine des télécommunications.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl"
          >
            Me contacter
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
