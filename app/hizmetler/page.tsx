import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import Reveal from '@/components/Reveal';
import CtaBand from '@/components/CtaBand';
import Process from '@/components/home/Process';
import { PageHero } from '@/components/Section';
import { services } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Hizmetlerimiz',
  description:
    'Konut, villa, iş yeri, kaba inşaat, ince işler, taş duvar, tamir–tadilat, anahtar teslim, proje geliştirme ve yatırım danışmanlığı hizmetleri.',
  alternates: { canonical: '/hizmetler' },
};

export default function HizmetlerPage() {
  return (
    <>
      <PageHero
        eyebrow="Hizmetlerimiz"
        title="Tek duvardan"
        script="anahtar teslime"
        text="Kapsamı birlikte belirliyor, işi tek muhatapla ve tek sözleşmeyle yürütüyoruz."
      >
        <ul className="mt-8 flex flex-wrap gap-2">
          {services.map((s) => (
            <li key={s.slug}>
              <a
                href={`#${s.slug}`}
                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/15"
              >
                <Icon name={s.icon} size={15} className="text-brand-300" />
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </PageHero>

      <section className="py-16 sm:py-20">
        <div className="container-x space-y-4">
          {services.map((s, i) => (
            <Reveal key={s.slug}>
              <article
                id={s.slug}
                className="scroll-mt-28 rounded-2xl border border-navy-100 bg-white p-6 sm:p-8 lg:grid lg:grid-cols-[auto_1fr_auto] lg:items-start lg:gap-8"
              >
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-navy-800 text-white">
                  <Icon name={s.icon} size={26} />
                </span>

                <div className="mt-5 lg:mt-0">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-700">
                    {String(i + 1).padStart(2, '0')} · {s.titleEn}
                  </p>
                  <h2 className="mt-1.5 text-2xl font-extrabold text-navy-900">{s.title}</h2>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-navy-600">{s.detail}</p>
                </div>

                <ul className="mt-5 grid gap-2 lg:mt-0 lg:w-64">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm font-medium text-navy-700">
                      <Icon name="check" size={16} className="mt-0.5 shrink-0 text-brand-600" />
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="container-x mt-10 rounded-2xl bg-navy-50 p-8 text-center">
          <h3 className="text-xl font-extrabold text-navy-900">Aradığınız hizmet listede yok mu?</h3>
          <p className="mx-auto mt-2 max-w-xl text-sm text-navy-600">
            Kapsamı birlikte netleştirelim. İhtiyacınızı anlatın, uygun çözümü ve yaklaşık maliyeti birlikte
            çıkaralım.
          </p>
          <Link
            href="/iletisim"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy-800 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-navy-700"
          >
            Bize Ulaşın
            <Icon name="arrow" size={16} />
          </Link>
        </div>
      </section>

      <Process />
      <CtaBand />
    </>
  );
}
