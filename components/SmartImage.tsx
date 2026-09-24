'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  /** Görsel bulunamazsa yer tutucunun üzerinde görünecek etiket */
  label?: string;
  priority?: boolean;
};

/** Blueprint tarzı markalı yer tutucu çizimi. */
function Placeholder({ label }: { label?: string }) {
  return (
    <div className="blueprint-dark absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-navy-800 via-navy-850 to-navy-950 p-6">
      <svg viewBox="0 0 200 120" className="w-full max-w-[13rem] text-brand-300/55" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round">
          <path d="M10 96h180" strokeWidth="1.8" />
          <path d="M30 96V54l34-20 34 20v42" />
          <path d="M22 58 64 33l42 25" strokeDasharray="4 3" />
          <path d="M46 96V74h16v22M76 62h14v14H76z" />
          <path d="M106 96V44h56v52M118 56h12v12h-12zM138 56h12v12h-12zM118 76h12v12h-12zM138 76h12v12h-12z" />
          <path d="M162 96V62h20v34M168 70h8v8h-8z" />
          <circle cx="64" cy="33" r="2.4" fill="currentColor" stroke="none" />
          <path d="M14 96V80M14 88h10" strokeDasharray="3 2" />
        </g>
      </svg>
      {label && (
        <span className="mt-4 text-center text-[0.68rem] font-bold uppercase tracking-[0.22em] text-brand-100/60">
          {label}
        </span>
      )}
    </div>
  );
}

/**
 * Fotoğraf dosyası henüz public/images içine eklenmemişse kırık görsel yerine
 * markalı bir yer tutucu gösterir. Kontrol, hidrasyondan önce yüklenmeyi
 * kaçırmamak için mount anında da yapılır.
 */
export default function SmartImage({ src, alt, className = '', imgClassName = '', label, priority }: Props) {
  const ref = useRef<HTMLImageElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const img = ref.current;
    if (!img) return;
    // Hidrasyondan önce yüklenmeyi bitirmiş (ya da hata vermiş) görselleri yakala.
    if (img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <div className={`relative overflow-hidden bg-navy-900 ${className}`}>
      <Placeholder label={label} />
      {!failed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={ref}
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => setFailed(true)}
          className={`relative h-full w-full object-cover ${imgClassName}`}
        />
      )}
    </div>
  );
}
