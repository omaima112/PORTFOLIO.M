interface SkillTagProps {
  skill: string;
  category?: 'language' | 'framework' | 'tool';
}

export function SkillTag({ skill, category = 'language' }: SkillTagProps) {
  const categoryColors = {
    language: 'bg-secondary/40 border-secondary',
    framework: 'bg-muted/40 border-muted',
    tool: 'bg-primary/40 border-primary',
  };

  return (
    <span
      className={`inline-block px-4 py-2 rounded-lg border ${categoryColors[category]} text-accent transition-all hover:scale-105`}
    >
      {skill}
    </span>
  );
}
