'use client';

import Image from 'next/image';
import { useState } from 'react';

type Props = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  /** Görsel bulunamazsa yer tutucunun üzerinde görünecek etiket */
  label?: string;
  priority?: boolean;
  /** Yer tutucu biçimi: blueprint çizimi ya da baş harf monogramı */
  placeholder?: 'blueprint' | 'monogram';
  /** Görselin sayfadaki yaklaşık genişliği (responsive boyutlandırma için) */
  sizes?: string;
};

/** Kişi fotoğrafı yerine baş harflerden oluşan monogram. */
function Monogram({ label }: { label?: string }) {
  const initials = (label ?? '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toLocaleUpperCase('tr-TR');

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-navy-700 via-navy-800 to-navy-950">
      <span className="text-4xl font-extrabold tracking-tight text-brand-200/85">{initials || 'Bİ'}</span>
      <span className="mt-2 h-px w-8 bg-brand-300/40" />
      {label && (
        <span className="mt-2 px-3 text-center text-[0.6rem] font-bold uppercase tracking-[0.16em] text-brand-100/55">
          {label}
        </span>
      )}
    </div>
  );
}

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
 * next/image üzerinden optimize edilmiş (WebP/AVIF, responsive) görsel.
 * Dosya public/images içinde yoksa kırık görsel yerine markalı yer tutucu kalır.
 */
export default function SmartImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  label,
  priority,
  placeholder = 'blueprint',
  sizes = '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px',
}: Props) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-navy-900 ${className}`}>
      {placeholder === 'monogram' ? <Monogram label={label} /> : <Placeholder label={label} />}
      {!failed && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          onError={() => setFailed(true)}
          className={`object-cover ${imgClassName}`}
        />
      )}
    </div>
  );
}
