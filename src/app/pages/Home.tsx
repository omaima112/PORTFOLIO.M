import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Code2, Sparkles, User } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';

export default function Home() {
  const { t } = useTranslation();
  const profilePicture = '/pfp.jpeg';

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center px-4 animate-fadeInUp">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16 animate-fadeInUp" style={{animationDelay: '120ms'}}>
            {/* Text Content */}
            <div className="flex-1 text-center md:text-start space-y-10">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <Code2 className="text-accent" size={32} />
                <Sparkles className="text-secondary" size={24} />
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl text-accent mb-7">
                {t('home.greeting')} <span className="text-secondary">{t('home.name')}</span>
              </h1>

              <h1 className="text-2xl md:text-3xl text-foreground/90 mb-6 text-center md:text-start">
                {t('home.tagline')}
              </h1>
              
              <p className="text-lg text-foreground/80 max-w-2xl text-center md:text-start">
                {t('home.description')}
              </p>

              {/* Tilted Ada Lovelace Quote (text only, no box) */}
              <p className="italic text-lg text-secondary mt-10 mb-4">
                {t('home.quote')}
                <br />
                <span className="not-italic font-semibold text-accent">{t('home.quoteAuthor')}</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/80 text-foreground rounded-xl transition-all hover:scale-105"
                >
                  {t('home.viewProjects')}
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/80 text-foreground border border-border rounded-xl transition-all hover:scale-105"
                >
                  {t('home.getInTouch')}
                </Link>
              </div>
            </div>

            {/* Profile Picture (using Avatar component) */}
            <div className="flex-shrink-0 relative group">
              {/* Decorative ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-secondary via-accent to-secondary rounded-full opacity-75 blur-lg group-hover:opacity-100 transition-opacity duration-500" />
              <Avatar className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 border-4 border-secondary/50 bg-card">
                <AvatarImage src={profilePicture} alt="Profile Picture" className="object-cover w-full h-full" />
                <AvatarFallback>
                  <User size={80} className="text-secondary/50" />
                </AvatarFallback>
              </Avatar>
              {/* Floating decoration */}
              <div className="absolute -bottom-2 -end-2 w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg">
                <Sparkles size={24} className="text-background" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
