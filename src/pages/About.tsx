
import { GraduationCap, Target, Heart, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {t('about.title')}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-lg animate-slide-in">
            <div className="flex items-center mb-6">
              <div className="bg-primary text-white p-3 rounded-lg mr-4">
                <GraduationCap size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">{t('about.parcours.title')}</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">{t('about.parcours.desc')}</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg animate-slide-in" style={{animationDelay: '0.2s'}}>
            <div className="flex items-center mb-6">
              <div className="bg-secondary text-white p-3 rounded-lg mr-4">
                <Target size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">{t('about.motivation.title')}</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">{t('about.motivation.desc')}</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg mb-12 animate-fade-in">
          <div className="flex items-center mb-6">
            <div className="bg-primary text-white p-3 rounded-lg mr-4">
              <Heart size={28} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">{t('about.passions.title')}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { key: 'gaming', color: 'text-primary' },
              { key: 'social', color: 'text-secondary' },
              { key: 'sports', color: 'text-primary' },
              { key: 'science', color: 'text-secondary' },
              { key: 'fashion', color: 'text-primary' },
              { key: 'dance', color: 'text-secondary' },
            ].map((p) => (
              <div key={p.key}>
                <h3 className={`font-semibold text-lg mb-3 ${p.color}`}>{t(`about.passions.${p.key}.title`)}</h3>
                <p className="text-gray-600 mb-4">{t(`about.passions.${p.key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-xl shadow-lg animate-fade-in">
          <div className="flex items-center mb-6">
            <div className="bg-white text-primary p-3 rounded-lg mr-4">
              <Award size={28} />
            </div>
            <h2 className="text-2xl font-bold">{t('about.qualities.title')}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {['team', 'organized', 'curious', 'adaptable'].map((q) => (
              <div key={q} className="bg-white bg-opacity-20 p-4 rounded-lg text-center">
                <h3 className="font-semibold mb-2">{t(`about.qualities.${q}.title`)}</h3>
                <p className="text-sm text-blue-100">{t(`about.qualities.${q}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
