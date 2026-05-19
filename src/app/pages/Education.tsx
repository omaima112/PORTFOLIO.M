import { useTranslation } from 'react-i18next';
import { GraduationCap, Target, BookOpen, Calendar } from 'lucide-react';

export function Education() {
  const { t } = useTranslation();

  const subjects = [
    t('education.subjects.programming'),
    t('education.subjects.webDev'),
    t('education.subjects.math'),
    t('education.subjects.physics'),
    t('education.subjects.cs'),
  ];

  const currentlyLearning = ['React', 'Next.js', 'TypeScript', 'Backend Development', 'API Integration', 'Security Fundamentals'];

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Page Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <GraduationCap className="text-secondary" size={40} />
          <h1 className="text-4xl md:text-5xl text-accent">{t('education.title')}</h1>
        </div>
        <p className="text-lg text-foreground/80 max-w-3xl">
          {t('education.subtitle')}
        </p>
      </div>

      {/* Current Education */}
      <section className="mb-16">
        <div className="bg-card rounded-3xl p-8 md:p-12 border border-border animate-fadeInUp">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl text-accent mb-2">
                {t('education.degree')}
              </h2>
              <p className="text-xl text-secondary">{t('education.college')}</p>
            </div>
            <div className="flex items-center gap-2 text-foreground/70">
              <Calendar size={20} />
              <span>{t('education.duration')}</span>
            </div>
          </div>
          
          <p className="text-lg text-foreground/90 leading-relaxed mb-8">
            {t('education.description')}
          </p>

          {/* Relevant Subjects */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="text-secondary" size={24} />
              <h3 className="text-xl text-accent">{t('education.relevantSubjects')}</h3>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {subjects.map((subject, index) => (
                <div
                  key={index}
                  className="px-4 py-3 bg-primary/50 rounded-xl text-foreground/90 border border-border"
                >
                  {subject}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Focus */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <Target className="text-secondary" size={32} />
          <h2 className="text-3xl md:text-4xl text-accent">{t('education.learningFocus')}</h2>
        </div>
        <div className="bg-card rounded-3xl p-8 md:p-12 border border-border space-y-6 text-start">
          <p className="text-lg text-foreground/90 leading-relaxed">
            {t('education.learningParagraph1')}
          </p>
          <p className="text-lg text-foreground/90 leading-relaxed">
            {t('education.learningParagraph2')}
          </p>
          <p className="text-lg text-foreground/90 leading-relaxed">
            {t('education.learningParagraph3')}
          </p>
          
          {/* Current Learning */}
          <div className="pt-6 border-t border-border">
            <h3 className="text-xl text-secondary mb-4">{t('education.currentlyLearning')}</h3>
            <div className="flex flex-wrap gap-3">
              {currentlyLearning.map((item, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-secondary/30 text-accent rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
