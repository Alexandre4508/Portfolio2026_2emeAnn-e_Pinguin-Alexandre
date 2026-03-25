
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary to-secondary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Alexandre Pinguin</h3>
            <p className="text-blue-100">Étudiant en Réseaux & Télécommunications</p>
          </div>
          <div className="flex space-x-6">
            <a href="mailto:alexpinguin450@gmail.com" className="hover:text-tech-green-light transition-colors">
              <Mail size={24} />
            </a>
            <a href="tel:0692639203" className="hover:text-tech-green-light transition-colors">
              <Phone size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/alexandre-pinguin-071b4531a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-tech-green-light transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <div className="flex items-center text-blue-100">
              <MapPin size={16} className="mr-1" />
              <span className="text-sm">Saint-Louis</span>
            </div>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-blue-400 text-center text-blue-100">
          <p>&copy; Alexandre Pinguin. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
