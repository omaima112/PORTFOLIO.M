import { useTranslation } from 'react-i18next';

export function About() {
  const { t } = useTranslation();

  const researchInterests = [
    t('about.interests.infoSecurity'),
    t('about.interests.misinformation'),
    t('about.interests.dataPrivacy'),
    t('about.interests.digitalTrust'),
    t('about.interests.crypto'),
    t('about.interests.verification'),
    t('about.interests.userSecurity'),
    t('about.interests.digitalLiteracy'),
  ];

  return (
    <div className="max-w-3xl mx-auto py-16 px-4 space-y-10 text-start">
      <h1 className="text-4xl font-bold text-accent mb-6">{t('about.title')}</h1>
      <p className="text-lg text-white">
        {t('about.paragraph1')}
        <br /><br />
        {t('about.paragraph2')}
        <br /><br />
        {t('about.paragraph3')}
      </p>

      {/* Research Interests Section */}
      <div className="mt-10 p-6 rounded-xl border border-accent/20 bg-white/10">
        <h2 className="text-2xl font-semibold text-accent mb-4">{t('about.researchInterests')}</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {researchInterests.map((interest, index) => (
            <span
              key={index}
              className="px-4 py-2 rounded-full bg-accent/10 text-accent text-base font-medium"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
