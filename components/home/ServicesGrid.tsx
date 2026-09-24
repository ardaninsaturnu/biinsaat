import Link from 'next/link';
import Icon from '../Icon';
import Reveal from '../Reveal';
import { SectionHeading } from '../Section';
import { services } from '@/lib/site';

export default function ServicesGrid({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services;

  return (
    <section className="blueprint bg-navy-50/40 py-16 sm:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Hizmetlerimiz"
          title="Yapının her aşamasında"
          script="yanınızdayız"
          text="Tek bir duvardan anahtar teslim projeye kadar; kapsamı birlikte belirliyor, işi tek muhatapla yürütüyoruz."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 70}>
              <Link
                href={`/hizmetler#${service.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg hover:shadow-navy-900/5"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-800 text-white transition-colors group-hover:bg-brand-600">
                  <Icon name={service.icon} size={24} />
                </span>
                <h3 className="mt-5 text-lg font-extrabold text-navy-900">{service.title}</h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-navy-400">{service.titleEn}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-600">{service.short}</p>
                <span className="mt-5 flex items-center gap-1.5 text-sm font-bold text-brand-700">
                  Detaylar
                  <Icon name="arrow" size={15} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        {limit && (
          <div className="mt-10 text-center">
            <Link
              href="/hizmetler"
              className="inline-flex items-center gap-2 rounded-full bg-navy-800 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-navy-700"
            >
              Tüm Hizmetler
              <Icon name="arrow" size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
