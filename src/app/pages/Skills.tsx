import { useTranslation } from 'react-i18next';
import { Code2, Wrench, Layout } from 'lucide-react';
import { SkillTag } from '../components/SkillTag';
import React from 'react';

export function Skills() {
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: t('skills.languages'),
      icon: Code2,
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    },
    {
      title: t('skills.frameworks'),
      icon: Layout,
      skills: ['React', 'Next.js', 'Flask'],
    },
    {
      title: t('skills.tools'),
      icon: Wrench,
      skills: ['Git & GitHub', 'Vercel', 'PythonAnywhere', 'Responsive Design', 'UI/UX Fundamentals'],
    },
  ];

  const proficiencyLevels = [
    { skill: 'HTML', level: 90 },
    { skill: 'CSS', level: 85 },
    { skill: 'JavaScript', level: 75 },
    { skill: 'Python', level: 70 },
    { skill: 'React', level: 70 },
    { skill: 'Next.js', level: 65 },
    { skill: 'Git & GitHub', level: 75 },
  ];

  const softSkills = [
    t('skills.softSkillsList.problemSolving'),
    t('skills.softSkillsList.selfLearning'),
    t('skills.softSkillsList.attention'),
    t('skills.softSkillsList.timeManagement'),
    t('skills.softSkillsList.adaptability'),
    t('skills.softSkillsList.criticalThinking'),
    t('skills.softSkillsList.creativity'),
    t('skills.softSkillsList.communication'),
  ];

  // Animated approach effect for proficiency bars
  const [animatedLevels, setAnimatedLevels] = React.useState(proficiencyLevels.map(() => 0));
  React.useEffect(() => {
    proficiencyLevels.forEach((item, i) => {
      setTimeout(() => {
        setAnimatedLevels((prev) => prev.map((v, idx) => idx === i ? item.level : v));
      }, 300 + i * 300);
    });
    // Reset on unmount
    return () => setAnimatedLevels(proficiencyLevels.map(() => 0));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Page Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <Code2 className="text-secondary" size={40} />
          <h1 className="text-4xl md:text-5xl text-accent">{t('skills.title')}</h1>
        </div>
        <p className="text-lg text-foreground/80 max-w-3xl">
          {t('skills.subtitle')}
        </p>
      </div>

      {/* Skills by Category */}
      <div className="space-y-8 mb-16">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <div
              key={index}
              className="bg-card rounded-3xl p-8 border border-border animate-fadeInUp"
              style={{animationDelay: `${index * 80}ms`}}
            >
              <div className="flex items-center gap-3 mb-6">
                <Icon className="text-secondary" size={28} />
                <h2 className="text-2xl text-accent">{category.title}</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <SkillTag key={skillIndex} skill={skill} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Proficiency Levels */}
      <section>
        <h2 className="text-3xl md:text-4xl mb-8 text-accent">{t('skills.proficiency')}</h2>
        <div className="bg-card rounded-3xl p-8 border border-border">
          <div className="space-y-6">
            {proficiencyLevels.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-foreground font-medium">{item.skill}</span>
                  <span className="text-secondary">{item.level}%</span>
                </div>
                <div className="h-3 bg-primary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-secondary to-accent rounded-full transition-all duration-1000"
                    style={{ width: `${animatedLevels[index]}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soft Skills */}
      <section className="mt-16">
        <h2 className="text-3xl md:text-4xl mb-8 text-accent">{t('skills.softSkills')}</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {softSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-5 border border-border text-center hover:border-secondary transition-colors"
            >
              <span className="text-foreground/90">{skill}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
