import Link from 'next/link';
import Icon from '@/components/Icon';

export default function NotFound() {
  return (
    <section className="blueprint-dark bg-navy-900 py-24 sm:py-32">
      <div className="container-x text-center">
        <p className="text-6xl font-extrabold text-brand-400/50 sm:text-7xl">404</p>
        <h1 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">Bu sayfa henüz inşa edilmedi</h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-navy-200">
          Aradığınız sayfa taşınmış ya da kaldırılmış olabilir. Ana sayfadan devam edebilirsiniz.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-500"
          >
            Ana Sayfa
            <Icon name="arrow" size={16} />
          </Link>
          <Link
            href="/iletisim"
            className="flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
          >
            İletişim
          </Link>
        </div>
      </div>
    </section>
  );
}
