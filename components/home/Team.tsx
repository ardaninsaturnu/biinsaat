import Icon from '../Icon';
import Reveal from '../Reveal';
import SmartImage from '../SmartImage';
import { SectionHeading } from '../Section';
import { people, teamStats } from '@/lib/site';

export default function Team() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Ekibimiz"
          title="Sahada,"
          script="her zaman yanınızda"
          text="Deneyimli mühendislerimiz, ustalarımız ve saha ekibimizle projelerinizi güvenle hayata geçiriyoruz."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {people.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
              <article className="flex h-full flex-col gap-5 rounded-2xl border border-navy-100 bg-white p-5 sm:flex-row sm:p-6">
                <SmartImage
                  src={p.photo}
                  alt={`${p.name} — ${p.role}`}
                  label={p.name}
                  placeholder="monogram"
                  sizes="(max-width: 640px) 100vw, 144px"
                  className="aspect-square w-full shrink-0 rounded-xl sm:h-36 sm:w-36"
                />
                <div className="flex flex-col">
                  <h3 className="text-xl font-extrabold text-navy-900">{p.name}</h3>
                  <p className="text-sm font-bold text-brand-700">{p.role}</p>
                  <p className="text-xs font-medium uppercase tracking-wider text-navy-400">{p.roleEn}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-600">{p.bio}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <a
                      href={`tel:${p.phoneHref}`}
                      className="flex items-center gap-1.5 rounded-full bg-navy-50 px-3.5 py-2 text-xs font-bold text-navy-800 transition-colors hover:bg-navy-100"
                    >
                      <Icon name="phone" size={14} />
                      {p.phoneDisplay}
                    </a>
                    <a
                      href={`mailto:${p.email}`}
                      className="flex items-center gap-1.5 rounded-full bg-navy-50 px-3.5 py-2 text-xs font-bold text-navy-800 transition-colors hover:bg-navy-100"
                    >
                      <Icon name="mail" size={14} />
                      E-posta
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-navy-100 sm:grid-cols-3 lg:grid-cols-6">
          {teamStats.map((s) => (
            <div key={s.label} className="bg-white px-4 py-7 text-center">
              <p className="text-3xl font-extrabold text-navy-900">{s.value}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-navy-500">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
