import Icon from '../Icon';
import Reveal from '../Reveal';
import SmartImage from '../SmartImage';
import { SectionHeading } from '../Section';

const reasons = [
  {
    icon: 'helmet',
    title: 'Sahada yönetici var',
    text: 'Projeyi taşeronun insafına bırakmıyoruz. Ortaklarımız sahada; kararlar gecikmeden alınıyor.',
  },
  {
    icon: 'shield',
    title: 'Kayıt altında imalat',
    text: 'Beton, donatı ve yalıtım işleri kontrol listeleriyle yürüyor; her aşama fotoğraflanıp raporlanıyor.',
  },
  {
    icon: 'clock',
    title: 'Sözleşmeye bağlı takvim',
    text: 'İş programı baştan çıkarılıyor ve sözleşmeye giriyor. Gecikme varsa sebebiyle birlikte paylaşılıyor.',
  },
  {
    icon: 'chart',
    title: 'Açık ve kalem kalem teklif',
    text: 'Metraj, malzeme ve işçilik ayrı ayrı yazılıyor. Sonradan çıkan sürprizleri sözleşme aşamasında bitiriyoruz.',
  },
  {
    icon: 'leaf',
    title: 'Sürdürülebilir seçimler',
    text: 'Isı yalıtımı, malzeme ömrü ve işletme maliyeti; kararları uzun vadeye bakarak veriyoruz.',
  },
  {
    icon: 'users',
    title: 'Tek muhatap',
    text: 'Ruhsattan iskana kadar tüm başlıklar tek sözleşmede. Onlarca firmayla değil, tek ekiple çalışıyorsunuz.',
  },
];

export default function WhyUs() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-x grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="lg:sticky lg:top-32">
          <SectionHeading
            eyebrow="Neden Bİ İnşaat"
            title="Hayallerinizi"
            script="inşa eder"
            text="Bİ İnşaat; İstanbul Maslak merkezli, İstanbul ve Fethiye’de proje yürüten bir yapı firması. İşi
            büyüklüğüne göre değil, doğru yapılmasına göre ele alıyoruz."
          />

          <SmartImage
            src="/images/hakkimizda-ekip.jpg"
            alt="Temel donatısı serilmiş şantiye alanında çalışan işçiler"
            label="Ekip Görseli"
            className="mt-8 aspect-16/10 w-full rounded-2xl"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={(i % 2) * 70}>
              <div className="h-full rounded-2xl border border-navy-100 bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-navy-900/5">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700">
                  <Icon name={r.icon} size={22} />
                </span>
                <h3 className="mt-4 text-base font-extrabold text-navy-900">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
