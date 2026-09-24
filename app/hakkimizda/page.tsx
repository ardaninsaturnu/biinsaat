import type { Metadata } from 'next';
import Icon from '@/components/Icon';
import Reveal from '@/components/Reveal';
import SmartImage from '@/components/SmartImage';
import CtaBand from '@/components/CtaBand';
import Team from '@/components/home/Team';
import Regions from '@/components/home/Regions';
import { PageHero, SectionHeading } from '@/components/Section';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description:
    'Bİ İnşaat; İstanbul Maslak merkezli, İstanbul ve Fethiye’de konut, villa ve ticari yapı projeleri yürüten bir yapı firmasıdır.',
  alternates: { canonical: '/hakkimizda' },
};

const values = [
  { icon: 'blueprint', title: 'Planlı', text: 'İş programı baştan çıkar, sözleşmeye girer ve takip edilir.' },
  { icon: 'shield', title: 'Kaliteli', text: 'Malzeme ve imalat kalitesinden takvim uğruna ödün verilmez.' },
  { icon: 'clock', title: 'Zamanında', text: 'Teslim tarihi bir temenni değil, taahhüttür.' },
  { icon: 'helmet', title: 'Güvenli', text: 'İSG sorumlusu ve saha disipliniyle güvenli şantiye.' },
  { icon: 'leaf', title: 'Sürdürülebilir', text: 'Yalıtım, malzeme ömrü ve işletme maliyeti gözetilir.' },
  { icon: 'users', title: 'Şeffaf', text: 'Fotoğraf ve raporlarla ilerleme düzenli paylaşılır.' },
];

export default function HakkimizdaPage() {
  return (
    <>
      <PageHero
        eyebrow="Hakkımızda"
        title="Hayallerinizi"
        script="inşa eder"
        text="Bİ İnşaat; İstanbul Maslak merkezli bir yapı firması. İstanbul ve Fethiye’de konut, villa, ticari yapı ve
        anahtar teslim projeler yürütüyoruz."
      />

      <section className="py-16 sm:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <SmartImage
            src="/images/hakkimizda-santiye.jpg"
            alt="Bİ İnşaat şantiyesinde beton dökümü sırasında çalışan ekip"
            label="Saha Görseli"
            className="aspect-4/3 w-full rounded-3xl"
          />

          <div>
            <SectionHeading eyebrow="Biz Kimiz" title="Fikirden" script="yaşama…" />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-navy-600">
              <p>
                İşe bir arsa ya da bir fikirle başlıyoruz. İmar durumundan zemine, bütçeden teslim tarihine kadar
                her başlığı konuşup rakama döküyor; ortaya çıkan planı sözleşmeye bağlıyoruz.
              </p>
              <p>
                Şantiyede iki yönetici ortağımız bizzat bulunuyor. Karar gerektiren bir konu çıktığında günlerce
                bekleyen bir onay zinciri yok; iş yerinde ve zamanında çözülüyor.
              </p>
              <p>
                Amacımız yalnızca bir yapı teslim etmek değil; yıllar sonra da arkasında durabileceğimiz,
                <span className="script mx-1 text-xl text-brand-700">sağlam yapılar ve güvenli yarınlar</span>
                bırakmak.
              </p>
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                { v: '30+', l: 'Saha Ekibi' },
                { v: '2', l: 'Aktif Bölge' },
                { v: '10', l: 'Hizmet Başlığı' },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-navy-100 bg-white p-5">
                  <dt className="text-3xl font-extrabold text-navy-900">{s.v}</dt>
                  <dd className="mt-1 text-xs font-semibold uppercase tracking-wider text-navy-500">{s.l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="blueprint bg-navy-50/50 py-16 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Değerlerimiz"
            title="Nasıl"
            script="çalışıyoruz"
            align="center"
            text="Her projede değişmeyen altı ilke."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 70}>
                <div className="h-full rounded-2xl border border-navy-100 bg-white p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700">
                    <Icon name={v.icon} size={22} />
                  </span>
                  <h3 className="mt-4 text-base font-extrabold text-navy-900">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Team />
      <Regions />

      <section className="pb-16 sm:pb-24">
        <div className="container-x rounded-3xl bg-navy-900 p-8 text-center sm:p-12">
          <p className="script text-3xl text-brand-300">{site.sloganEn} · {site.sloganRu}</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-2xl font-extrabold text-white sm:text-3xl">
            Türkçe, İngilizce ve Rusça olarak hizmet veriyoruz.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-navy-200">
            Yurt dışından yatırım yapan müşterilerimize süreç boyunca kendi dillerinde raporlama ve iletişim
            sağlıyoruz.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
