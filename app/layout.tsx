import type { Metadata, Viewport } from 'next';
import { Manrope, Caveat } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { people, services, site } from '@/lib/site';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-manrope',
  display: 'swap',
});

// Caveat değişken (variable) bir fonttur: sabit weight listesi verilirse
// next/font derleme sırasında hata veriyor. Ağırlık CSS'te ayarlanıyor.
const caveat = Caveat({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  variable: '--font-script',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.slogan} — İstanbul & Fethiye İnşaat Firması`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    'inşaat firması',
    'İstanbul inşaat',
    'Fethiye villa',
    'anahtar teslim inşaat',
    'kaba inşaat',
    'tadilat',
    'konut projesi',
    'taş duvar',
    'proje geliştirme',
    'Bi İnşaat',
  ],
  authors: [{ name: site.legalName }],
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: site.url,
    siteName: site.legalName,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#112a53',
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: site.legalName,
  alternateName: site.name,
  slogan: site.slogan,
  description: site.description,
  url: site.url,
  email: site.email,
  telephone: site.phoneHref,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.district,
    addressRegion: site.address.city,
    addressCountry: 'TR',
  },
  areaServed: site.regions.map((r) => ({ '@type': 'Place', name: r })),
  employee: people.map((p) => ({ '@type': 'Person', name: p.name, jobTitle: p.role })),
  makesOffer: services.map((s) => ({
    '@type': 'Offer',
    itemOffered: { '@type': 'Service', name: s.title, description: s.short },
  })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${manrope.variable} ${caveat.variable}`}>
      <body className="font-sans antialiased">
        <a
          href="#icerik"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-navy-800 focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
        >
          İçeriğe geç
        </a>
        <Header />
        <main id="icerik">{children}</main>
        <Footer />
        <WhatsAppButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
