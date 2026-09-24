import Link from 'next/link';
import Icon from '../Icon';
import SmartImage from '../SmartImage';
import { site } from '@/lib/site';

export default function Hero() {
  return (
    <section className="blueprint-dark relative overflow-hidden bg-navy-900">
      <div
        className="absolute -left-40 top-0 h-[32rem] w-[32rem] rounded-full bg-brand-700/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 right-0 h-[26rem] w-[26rem] rounded-full bg-brand-500/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-x relative grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-200">
            <Icon name="pin" size={14} />
            İstanbul · Fethiye ve Çevresi
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Sağlam Yapılar,
            <br />
            <span className="text-brand-300">Güvenli Yarınlar…</span>
          </h1>

          <p className="script mt-5 text-3xl text-white/85 sm:text-4xl">Fikirden Yaşama…</p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-200 sm:text-lg">
            Konut, villa, ticari yapı, kaba inşaat, tadilat ve anahtar teslim projeler. Arsadan anahtara kadar
            her aşamayı tek elden, planlı ve kayıt altında yürütüyoruz.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/iletisim"
              className="flex items-center gap-2 rounded-full bg-brand-600 px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-brand-500"
            >
              Ücretsiz Keşif ve Teklif
              <Icon name="arrow" size={17} />
            </Link>
            <Link
              href="/projeler"
              className="flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              Projelerimizi İnceleyin
            </Link>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-7">
            {[
              { v: '30+', l: 'Kişilik Saha Ekibi' },
              { v: '10', l: 'Hizmet Başlığı' },
              { v: '2', l: 'Aktif Bölge' },
            ].map((s) => (
              <div key={s.l}>
                <dt className="text-3xl font-extrabold text-brand-300">{s.v}</dt>
                <dd className="mt-1 text-xs font-medium uppercase tracking-wider text-navy-300">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <SmartImage
            src="/images/hero-santiye.jpg"
            alt="Bİ İnşaat şantiyesinde devam eden betonarme karkas imalatı"
            label="Şantiye Görseli"
            priority
            className="aspect-4/5 w-full rounded-3xl shadow-2xl shadow-black/40 ring-1 ring-white/10 sm:aspect-3/4 lg:aspect-4/5"
          />

          <div className="absolute -bottom-6 -left-4 w-60 rounded-2xl border border-navy-100 bg-white p-5 shadow-xl sm:-left-8">
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-700">
              <Icon name="shield" size={16} />
              Teslim Sözü
            </span>
            <p className="mt-2.5 text-sm font-semibold leading-snug text-navy-800">
              Sözleşmeye bağlı iş programı, düzenli fotoğraf ve ilerleme raporu.
            </p>
          </div>

          <div className="absolute -right-3 top-6 hidden rounded-2xl bg-white/10 px-4 py-3 backdrop-blur sm:block">
            <ul className="space-y-1.5 text-xs font-semibold text-white">
              {site.values.map((v) => (
                <li key={v} className="flex items-center gap-2">
                  <Icon name="check" size={13} className="text-brand-300" />
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Alt şerit */}
      <div className="relative border-t border-white/10 bg-navy-950/60">
        <div className="container-x flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-5 text-center">
          {site.promise.map((p) => (
            <span key={p} className="script text-2xl text-brand-300">
              {p}
            </span>
          ))}
          <span className="text-xs uppercase tracking-[0.2em] text-navy-300">
            Trust · Quality · On Time Delivery
          </span>
        </div>
      </div>
    </section>
  );
}
