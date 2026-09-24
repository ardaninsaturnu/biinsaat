import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import Icon from '@/components/Icon';
import Faq from '@/components/home/Faq';
import { PageHero } from '@/components/Section';
import { people, site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'İletişim',
  description: `Bİ İnşaat iletişim: ${site.address.full}. Telefon ${site.phoneDisplay}, e-posta ${site.email}. Keşif ve teklif ücretsiz.`,
  alternates: { canonical: '/iletisim' },
};

const mapsQuery = encodeURIComponent(site.address.full);

export default function IletisimPage() {
  return (
    <>
      <PageHero
        eyebrow="İletişim"
        title="Projenizi"
        script="konuşalım"
        text="Keşif ve teklif ücretsiz. Telefonla, WhatsApp’tan ya da aşağıdaki formdan bize ulaşabilirsiniz."
      />

      <section className="py-16 sm:py-20">
        <div className="container-x grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <div className="rounded-2xl border border-navy-100 bg-white p-6 sm:p-7">
              <h2 className="text-lg font-extrabold text-navy-900">Ofisimiz</h2>
              <p className="mt-3 flex gap-3 text-sm leading-relaxed text-navy-600">
                <Icon name="pin" size={18} className="mt-0.5 shrink-0 text-brand-600" />
                {site.address.full}
              </p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-700 hover:underline"
              >
                Haritada Aç
                <Icon name="arrow" size={15} />
              </a>

              <div className="mt-6 space-y-3 border-t border-navy-100 pt-6">
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 text-sm font-semibold text-navy-800 hover:text-brand-700"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-navy-50 text-navy-700">
                    <Icon name="mail" size={18} />
                  </span>
                  {site.email}
                </a>
                <a
                  href={site.url}
                  className="flex items-center gap-3 text-sm font-semibold text-navy-800 hover:text-brand-700"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-navy-50 text-navy-700">
                    <Icon name="globe" size={18} />
                  </span>
                  www.biinsaat.com
                </a>
              </div>
            </div>

            {people.map((p) => (
              <div key={p.name} className="rounded-2xl border border-navy-100 bg-white p-6 sm:p-7">
                <h3 className="text-base font-extrabold text-navy-900">{p.name}</h3>
                <p className="text-sm font-bold text-brand-700">{p.role}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href={`tel:${p.phoneHref}`}
                    className="flex items-center gap-2 rounded-full bg-navy-800 px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-navy-700"
                  >
                    <Icon name="phone" size={14} />
                    {p.phoneDisplay}
                  </a>
                  <a
                    href={`https://wa.me/${p.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-xs font-bold text-white transition-opacity hover:opacity-90"
                  >
                    <Icon name="whatsapp" size={15} fill="currentColor" stroke="none" />
                    WhatsApp
                  </a>
                  <a
                    href={`mailto:${p.email}`}
                    className="flex items-center gap-2 rounded-full bg-navy-50 px-4 py-2.5 text-xs font-bold text-navy-800 transition-colors hover:bg-navy-100"
                  >
                    <Icon name="mail" size={14} />
                    {p.email}
                  </a>
                </div>
              </div>
            ))}

            <div className="overflow-hidden rounded-2xl border border-navy-100">
              <iframe
                title="Bİ İnşaat ofis konumu"
                src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full border-0"
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <Faq />
    </>
  );
}
