import { useTranslation } from 'react-i18next';
import { Mail, Github, Linkedin } from 'lucide-react';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="py-8 text-center bg-[#2d0147] text-white">
      <div className="flex justify-center gap-8 mb-2">
        <a
          href="mailto:omaima.ksa005@gmail.com"
          aria-label="Email"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail size={28} />
        </a>
        <a
          href="https://github.com/omaima112"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/omaima-a-a1b185379"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={28} />
        </a>
      </div>
      <p className="mt-2 text-sm">{t('footer.copyright')}</p>
      <p className="mt-1 text-sm italic">{t('footer.designed')}</p>
    </footer>
  );
}
