import Link from 'next/link';
import Icon from '../Icon';
import Reveal from '../Reveal';
import SmartImage from '../SmartImage';
import { SectionHeading } from '../Section';
import { projects } from '@/lib/site';

export default function ProjectsPreview() {
  return (
    <section className="bg-navy-50/40 py-16 sm:py-24">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Projelerimiz"
            title="Modern"
            script="yaşam alanları"
            text="Villa, konut ve ticari yapı projelerinden bir seçki."
          />
          <Link
            href="/projeler"
            className="hidden items-center gap-2 rounded-full border border-navy-200 px-6 py-3 text-sm font-bold text-navy-800 transition-colors hover:bg-white sm:flex"
          >
            Tüm Projeler
            <Icon name="arrow" size={16} />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <article className="group h-full overflow-hidden rounded-2xl border border-navy-100 bg-white transition-shadow hover:shadow-xl hover:shadow-navy-900/8">
                <div className="relative">
                  <SmartImage
                    src={p.image}
                    alt={p.imageAlt}
                    label={p.category}
                    className="aspect-4/3 w-full"
                    imgClassName="transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-navy-800">
                    {p.status}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-700">{p.category}</p>
                  <h3 className="mt-2 text-lg font-extrabold text-navy-900">{p.title}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-navy-500">
                    <Icon name="pin" size={14} />
                    {p.location}
                  </p>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-navy-600">{p.summary}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center sm:hidden">
          <Link
            href="/projeler"
            className="inline-flex items-center gap-2 rounded-full bg-navy-800 px-7 py-3.5 text-sm font-bold text-white"
          >
            Tüm Projeler
            <Icon name="arrow" size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
