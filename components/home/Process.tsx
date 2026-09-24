import Reveal from '../Reveal';
import { SectionHeading } from '../Section';
import { processSteps } from '@/lib/site';

export default function Process() {
  return (
    <section className="blueprint-dark bg-navy-900 py-16 sm:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Proje Süreci"
          title="Arazi’den teslime"
          script="beş adım"
          text="Her adımın çıktısı belli, sorumlusu belli. Nerede olduğumuzu her an biliyorsunuz."
          tone="dark"
        />

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, i) => (
            <Reveal key={step.no} delay={i * 80}>
              <li className="group relative h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-brand-400/40 hover:bg-white/10">
                <span className="text-4xl font-extrabold text-brand-400/40 transition-colors group-hover:text-brand-400/70">
                  {step.no}
                </span>
                <h3 className="mt-3 text-lg font-extrabold text-white">{step.title}</h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-300/70">{step.titleEn}</p>
                <p className="mt-3 text-sm leading-relaxed text-navy-200">{step.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
