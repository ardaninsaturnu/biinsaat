import { SectionHeading } from '../Section';
import { faqs } from '@/lib/site';

export default function Faq() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="Sıkça Sorulanlar"
          title="Merak"
          script="edilenler"
          text="Aradığınız cevap burada yoksa bize doğrudan sorabilirsiniz."
        />

        <div className="divide-y divide-navy-100 border-y border-navy-100">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-bold text-navy-900 marker:content-none">
                {f.q}
                <span className="relative grid h-7 w-7 shrink-0 place-items-center rounded-full border border-navy-200 text-navy-700 transition-colors group-open:border-brand-600 group-open:bg-brand-600 group-open:text-white">
                  <span className="absolute h-px w-3 bg-current" />
                  <span className="absolute h-3 w-px bg-current transition-transform group-open:scale-y-0" />
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-navy-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
