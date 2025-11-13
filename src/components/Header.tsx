
import { Link, useLocation } from 'react-router-dom';
import { User, Home, FileText, Mail, FolderOpen } from 'lucide-react';

const Header = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Accueil', icon: Home },
    { path: '/about', label: 'À propos', icon: User },
    { path: '/cv', label: 'CV', icon: FileText },
    { path: '/projects', label: 'Projets', icon: FolderOpen },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <header className="bg-white shadow-lg border-b-2 border-tech-blue-light sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-primary hover:text-primary-dark transition-colors">
            Alexandre Pinguin
          </Link>
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'bg-primary text-white shadow-md'
                      : 'text-gray-600 hover:text-primary hover:bg-accent'
                  }`}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
          <div className="md:hidden">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-xs px-2 py-1 rounded ${
                      isActive ? 'bg-primary text-white' : 'text-gray-600'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
