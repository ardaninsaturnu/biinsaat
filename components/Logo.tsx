type Props = {
  variant?: 'dark' | 'light';
  withTagline?: boolean;
  className?: string;
};

/** Marka logosu: çatı + pencere simgesi ve "Bİ İNŞAAT / Construction" yazısı. */
export default function Logo({ variant = 'dark', withTagline = true, className = '' }: Props) {
  const main = variant === 'dark' ? 'text-navy-800' : 'text-white';
  const sub = variant === 'dark' ? 'text-navy-500' : 'text-brand-200';
  const roof = variant === 'dark' ? '#112a53' : '#ffffff';
  const accent = variant === 'dark' ? '#2579eb' : '#93d1fd';

  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 64 48" className="h-9 w-12 shrink-0" aria-hidden="true">
        <path d="M32 3 62 24h-9L32 9.5 11 24H2L32 3Z" fill={roof} />
        <path d="M32 14 51 27.5V45H13V27.5L32 14Z" fill="none" stroke={accent} strokeWidth="3.2" strokeLinejoin="round" />
        <rect x="25.5" y="25" width="13" height="12.5" rx="1" fill={accent} />
        <rect x="31" y="25" width="1.6" height="12.5" fill={roof} opacity="0.55" />
        <rect x="25.5" y="30.5" width="13" height="1.6" fill={roof} opacity="0.55" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={`text-[1.15rem] font-extrabold tracking-tight ${main}`}>Bİ İNŞAAT</span>
        <span className={`mt-0.5 text-[0.62rem] font-medium uppercase tracking-[0.34em] ${sub}`}>Construction</span>
        {withTagline && (
          <span className={`mt-1 text-[0.55rem] font-semibold uppercase tracking-[0.12em] ${sub}`}>
            Hayallerinizi İnşa Eder
          </span>
        )}
      </span>
    </span>
  );
}
