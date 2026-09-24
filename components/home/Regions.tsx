import Icon from '../Icon';
import SmartImage from '../SmartImage';
import { SectionHeading } from '../Section';

const regions = [
  {
    city: 'İstanbul',
    image: '/images/bolge-istanbul.jpg',
    script: 'Daha güçlü yarınlara…',
    text: 'Maslak’taki merkezimizden yürüttüğümüz konut, ofis ve tadilat projeleri; şehrin yoğun temposuna uygun, planlı şantiye yönetimi.',
    items: ['Konut ve ofis projeleri', 'Tadilat ve güçlendirme', 'Proje geliştirme'],
  },
  {
    city: 'Fethiye ve Çevresi',
    image: '/images/bolge-fethiye.jpg',
    script: 'Doğayla yaşayan yapılar…',
    text: 'Körfez manzaralı arazilerde villa ve az katlı konut uygulamaları; taş duvar, peyzaj ve havuz işleriyle birlikte.',
    items: ['Villa projeleri', 'Taş duvar ve istinat', 'Havuz ve peyzaj'],
  },
];

export default function Regions() {
  return (
    <section className="bg-navy-50/40 py-16 sm:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Hizmet Bölgelerimiz"
          title="İki bölgede,"
          script="aynı standart"
          text="İstanbul ve Fethiye’de aktif olarak proje yürütüyoruz."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {regions.map((r) => (
            <article key={r.city} className="group relative overflow-hidden rounded-3xl bg-navy-900">
              <SmartImage
                src={r.image}
                alt={`${r.city} bölgesindeki Bİ İnşaat projeleri`}
                label={r.city}
                className="aspect-16/10 w-full"
                imgClassName="opacity-70 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-300">
                  <Icon name="pin" size={15} />
                  Hizmet Bölgesi
                </span>
                <h3 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">{r.city}</h3>
                <p className="script mt-1 text-xl text-brand-300">{r.script}</p>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-navy-200">{r.text}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {r.items.map((i) => (
                    <li
                      key={i}
                      className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur"
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
