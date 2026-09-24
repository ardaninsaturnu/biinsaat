import type { ReactNode } from 'react';

export function SectionHeading({
  eyebrow,
  title,
  script,
  text,
  align = 'left',
  tone = 'light',
  as: Tag = 'h2',
}: {
  eyebrow?: string;
  title: string;
  script?: string;
  text?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  as?: 'h1' | 'h2';
}) {
  const isDark = tone === 'dark';
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] ${
            isDark ? 'text-brand-300' : 'text-brand-700'
          }`}
        >
          <span className={`h-px w-7 ${isDark ? 'bg-brand-300' : 'bg-brand-700'}`} />
          {eyebrow}
        </span>
      )}
      <Tag
        className={`mt-4 font-extrabold leading-tight tracking-tight ${
          Tag === 'h1' ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl'
        } ${isDark ? 'text-white' : 'text-navy-900'}`}
      >
        {title}
        {script && <span className={`script ml-3 font-normal ${isDark ? 'text-brand-300' : 'text-brand-600'}`}>{script}</span>}
      </Tag>
      {text && (
        <p className={`mt-4 text-base leading-relaxed ${isDark ? 'text-navy-200' : 'text-navy-600'}`}>{text}</p>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  script,
  text,
  children,
}: {
  eyebrow: string;
  title: string;
  script?: string;
  text?: string;
  children?: ReactNode;
}) {
  return (
    <section className="blueprint-dark relative overflow-hidden bg-navy-900 py-16 sm:py-20">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-600/20 blur-3xl" aria-hidden="true" />
      <div className="container-x relative">
        <SectionHeading as="h1" eyebrow={eyebrow} title={title} script={script} text={text} tone="dark" />
        {children}
      </div>
    </section>
  );
}
