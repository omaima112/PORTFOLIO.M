import { useTranslation } from 'react-i18next';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

export function Contact() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl mb-4 text-accent">{t('contact.title')}</h1>
        <p className="text-lg text-foreground/90 max-w-3xl">
          {t('contact.subtitle')}
        </p> 
      </div>

      <div className="max-w-xl mx-auto">
        {/* Contact Information */}
        <div className="bg-card rounded-3xl p-8 border border-border animate-fadeInUp">
          <h2 className="text-2xl mb-6 text-accent">{t('contact.contactInfo')}</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary/20 rounded-xl">
                <Mail className="text-secondary" size={24} />
              </div>        
              <div>
                <h3 className="text-lg mb-1 text-accent">{t('contact.email')}</h3>
                <a
                  href="mailto:omaima.ksa005@gmail.com"
                  className="text-foreground/90 hover:text-secondary transition-colors"
                >
                  omaima.ksa005@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary/20 rounded-xl">
                <Github className="text-secondary" size={24} />
              </div>
              <div>
                <h3 className="text-lg mb-1 text-accent">{t('contact.github')}</h3>
                <a
                  href="https://github.com/omaima112"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/90 hover:text-secondary transition-colors"
                >
                  github.com/omaima112
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary/20 rounded-xl">
                <Linkedin className="text-secondary" size={24} />
              </div>
              <div>
                <h3 className="text-lg mb-1 text-accent">{t('contact.linkedin')}</h3>
                <a
                  href="https://www.linkedin.com/in/omaima-a-a1b185379"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/90 hover:text-secondary transition-colors"
                >
                  linkedin.com/in/omaima-a-a1b185379
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary/20 rounded-xl">
                <MapPin className="text-secondary" size={24} />
              </div>
              <div>
                <h3 className="text-lg mb-1 text-accent">{t('contact.location')}</h3>
                <p className="text-foreground/90">{t('contact.locationValue')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
