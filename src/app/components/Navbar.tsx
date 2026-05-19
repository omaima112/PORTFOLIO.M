import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Home, User, FolderKanban, Mail, GraduationCap, Award, Code2 } from 'lucide-react';
import { LanguageToggle } from './LanguageToggle';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // All navigation items for hamburger menu
  const allNavItems = [
    { name: t('nav.home'), path: '/', icon: Home },
    { name: t('nav.about'), path: '/about', icon: User },
    { name: t('nav.education'), path: '/education', icon: GraduationCap },
    { name: t('nav.skills'), path: '/skills', icon: Code2 },
    { name: t('nav.achievements'), path: '/achievements', icon: Award },
    { name: t('nav.projects'), path: '/projects', icon: FolderKanban },
    { name: t('nav.contact'), path: '/contact', icon: Mail },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <Link to="/" className="text-xl font-semibold text-accent hover:text-secondary transition-colors">
            {t('nav.portfolio')}
          </Link>

          {/* Right side controls */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <LanguageToggle />
            
            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-foreground hover:text-accent hover:bg-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop - click to close */}
          <div 
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="absolute top-16 end-4 z-50 w-56 bg-card border border-border rounded-2xl shadow-xl shadow-black/20 overflow-hidden">
            <nav className="py-2">
              {allNavItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 mx-2 rounded-xl transition-all duration-200 ${
                      isActive(item.path)
                        ? 'text-accent bg-secondary/40'
                        : 'text-foreground hover:text-accent hover:bg-primary'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </>
      )}
    </nav>
  );
}
