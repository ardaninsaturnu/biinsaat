import type { Metadata } from 'next';
import Icon from '@/components/Icon';
import Reveal from '@/components/Reveal';
import SmartImage from '@/components/SmartImage';
import CtaBand from '@/components/CtaBand';
import Process from '@/components/home/Process';
import { PageHero } from '@/components/Section';
import { projects } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Projelerimiz',
  description:
    'Fethiye villa projeleri, İstanbul konut ve ticari yapı uygulamaları, tadilat ve taş duvar işlerinden bir seçki.',
  alternates: { canonical: '/projeler' },
};

export default function ProjelerPage() {
  return (
    <>
      <PageHero
        eyebrow="Projelerimiz"
        title="Modern"
        script="yaşam alanları"
        text="Villa, konut, ticari yapı ve özel uygulamalardan bir seçki. Her proje kendi arazisine, bütçesine ve
        kullanıcısına göre kurgulanıyor."
      />

      <section className="py-16 sm:py-20">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 80}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-navy-100 bg-white transition-shadow hover:shadow-xl hover:shadow-navy-900/8">
                <div className="relative">
                  <SmartImage
                    src={p.image}
                    alt={`${p.title} — ${p.category}, ${p.location}`}
                    label={p.category}
                    className="aspect-16/10 w-full"
                    imgClassName="transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-5 top-5 rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-bold text-navy-800">
                    {p.status}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-700">{p.category}</p>
                  <h2 className="mt-2 text-xl font-extrabold text-navy-900 sm:text-2xl">{p.title}</h2>
                  <p className="mt-1.5 flex items-center gap-1.5 text-sm text-navy-500">
                    <Icon name="pin" size={15} />
                    {p.location}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-navy-600">{p.summary}</p>

                  <dl className="mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-xl bg-navy-100">
                    {p.facts.map((f) => (
                      <div key={f.label} className="bg-navy-50/60 px-3 py-4 text-center">
                        <dt className="text-[0.65rem] font-bold uppercase tracking-wider text-navy-400">
                          {f.label}
                        </dt>
                        <dd className="mt-1 text-xs font-bold text-navy-800">{f.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="container-x mt-10 rounded-2xl border border-dashed border-navy-200 bg-navy-50/50 p-8 text-center">
          <p className="text-sm leading-relaxed text-navy-600">
            Devam eden ve yeni tamamlanan projelerimizin fotoğraflarını düzenli olarak paylaşıyoruz. Belirli bir
            proje tipi hakkında detaylı bilgi ve referans talebiniz varsa bize ulaşın.
          </p>
        </div>
      </section>

      <Process />
      <CtaBand />
    </>
  );
}
