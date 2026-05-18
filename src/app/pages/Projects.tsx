import { useTranslation } from 'react-i18next';
import { ProjectCard } from '../components/ProjectCard';

export function Projects() {
  const { t } = useTranslation();

  // Core Projects
  const coreProjects = [
    {
      title: t('projects.items.truthguard.title'),
      description: t('projects.items.truthguard.description'),
      techStack: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript'],
      images: [
        '/projects/truthguard1.PNG',
        '/projects/truthguard2.PNG',
        '/projects/Truthguard3.PNG',
      ],
      liveUrl: 'https://omaima112.pythonanywhere.com/',
      codeUrl: 'https://github.com/omaima112/TruthGuard.git',
      badge: '2nd Place',
    },
    {
      title: t('projects.items.encryption.title'),
      description: t('projects.items.encryption.description'),
      techStack: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript'],
      images: [
        '/projects/encryption1.PNG',
        '/projects/encryption2.PNG',
        '/projects/encryption3.PNG',
      ],
      liveUrl: 'https://omaimah-encryption-app.hf.space/',
      codeUrl: 'https://github.com/omaima112/Encryption-Web-App.git',
    },
    {
      title: t('projects.items.climacast.title'),
      description: t('projects.items.climacast.description'),
      techStack: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Vite'],
      images: [
        '/projects/climacast1.PNG',
        '/projects/climacast2.PNG',
        '/projects/climacast3.PNG',
      ],
      liveUrl: 'https://clima-cast-murex.vercel.app/',
      codeUrl: 'https://github.com/omaima112/ClimaCast.git',
      badge: '2nd Place',
    },
    {
      title: t('projects.items.todolist.title'),
      description: t('projects.items.todolist.description'),
      techStack: ['HTML', 'CSS', 'JavaScript'],
      images: [
        '/projects/todolist1.PNG',
        '/projects/todolist2.PNG',
      ],
      liveUrl: 'https://to-do-list-five-beta-67.vercel.app/',
      codeUrl: 'https://github.com/omaima112/TO-DO-list.git',
    },
  ];

  // Personal & Exploratory Work
  const personalProjects = [
    {
      title: t('projects.items.birthday.title'),
      description: t('projects.items.birthday.description'),
      techStack: ['React', 'Vite', 'CSS'],
      images: [
        '/projects/birthday1.PNG',
        '/projects/birthday2.PNG',
        '/projects/birthday3.PNG',
      ],
      liveUrl: 'https://birthday-gift-lzkg.vercel.app/',
      codeUrl: 'https://github.com/omaima112/BirthdayGift.git',
    },
    {
      title: t('projects.items.tribute.title'),
      description: t('projects.items.tribute.description'),
      techStack: ['HTML', 'CSS', 'JavaScript'],
      images: [
        '/projects/tribute1.PNG',
        '/projects/tribute2.PNG',
      ],
      liveUrl: 'https://tribute-wheat.vercel.app/',
      codeUrl: 'https://github.com/omaima112/Tribute-.git',
    },
  ];

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl mb-4 text-accent">{t('projects.title')}</h1>
        <p className="text-lg text-foreground/90 max-w-3xl">
          {t('projects.subtitle')}
        </p>
      </div>

      {/* Core Projects Section */}
      <h1 className="text-3xl font-bold mb-10 mt-10 text-accent text-center">{t('projects.coreProjects')}</h1>
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {coreProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      {/* Personal & Exploratory Work Section */}
      <h1 className="text-3xl font-bold mb-10 mt-10 text-accent/80 text-center">{t('projects.personalProjects')}</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {personalProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
