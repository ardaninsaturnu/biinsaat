import type { SVGProps } from 'react';

const paths: Record<string, React.ReactNode> = {
  home: <path d="M3 10.5 12 3l9 7.5M5.5 9.5V20h13V9.5M9.75 20v-5.5h4.5V20" />,
  villa: (
    <>
      <path d="M2.5 11 8 6.5 13.5 11M4.5 10.2V19h7v-8.8" />
      <path d="M13.5 19v-7.5h8V19M15.75 14.5h1.5M18.75 14.5h1.5" />
      <path d="M2 19h20" />
    </>
  ),
  commercial: (
    <>
      <path d="M4 20V4h9v16M13 20V9h7v11M2.5 20h19" />
      <path d="M7 8h2.5M7 12h2.5M7 16h2.5M16 13h1.5M16 16.5h1.5" />
    </>
  ),
  shell: (
    <>
      <path d="M3 6.5h18M3 12h18M3 17.5h18M3 6.5v11" />
      <path d="M21 6.5v11M9 6.5V12M15 6.5V12M12 12v5.5M6 12v5.5M18 12v5.5" />
    </>
  ),
  interior: (
    <>
      <path d="M3.5 5.5h11v5h-11z" />
      <path d="M14.5 8h4.5a1.5 1.5 0 0 1 1.5 1.5V12a1.5 1.5 0 0 1-1.5 1.5H12" />
      <path d="M12 13.5v2.5h-2v5h4v-5h-2" />
    </>
  ),
  stone: (
    <>
      <path d="M3 7h18M3 12h18M3 17h18M3 7v10M21 7v10" />
      <path d="M8 7v5M16 7v5M12 12v5M6.5 12v5M17.5 12v5" />
    </>
  ),
  repair: (
    <>
      <path d="M14.2 6.3a3.6 3.6 0 0 1 4.9-3.35l-2.5 2.5 1.95 1.95 2.5-2.5A3.6 3.6 0 0 1 17.7 9.8L9.5 18a2.4 2.4 0 1 1-3.4-3.4l8.1-8.3Z" />
      <path d="M6.2 3.5 3.5 6.2l3.4 3.4 2.7-2.7L6.2 3.5Z" />
    </>
  ),
  key: (
    <>
      <circle cx="7.5" cy="12" r="3.75" />
      <path d="M11.25 12H21M18 12v3M15 12v2.25" />
    </>
  ),
  blueprint: (
    <>
      <path d="M5 3.5h9l5 5V20.5H5z" />
      <path d="M14 3.5v5h5" />
      <path d="M8.5 12.5h7M8.5 16h4.5" />
    </>
  ),
  chart: (
    <>
      <path d="M4 20V4M4 20h16" />
      <path d="M8 17v-5M12.5 17V8M17 17v-7.5" />
    </>
  ),
  phone: (
    <path d="M6.2 3.5h3l1.5 3.8-1.9 1.4a11.5 11.5 0 0 0 5.5 5.5l1.4-1.9 3.8 1.5v3a2 2 0 0 1-2.2 2A16.8 16.8 0 0 1 4.2 5.7a2 2 0 0 1 2-2.2Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.8 6.5 8.2 6 8.2-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.5 9.5h17M3.5 14.5h17" />
      <path d="M12 3c2.6 2.4 4 5.6 4 9s-1.4 6.6-4 9c-2.6-2.4-4-5.6-4-9s1.4-6.6 4-9Z" />
    </>
  ),
  whatsapp: (
    <path d="M12.04 3.5a8.4 8.4 0 0 0-7.2 12.7L3.6 20.5l4.45-1.2a8.4 8.4 0 1 0 4-15.8Zm4.2 11.7c-.2.55-1.16 1.07-1.6 1.1-.42.04-.94.2-3.06-.72-2.57-1.12-4.2-3.84-4.32-4.02-.13-.18-1.03-1.4-1.03-2.68 0-1.27.66-1.9.9-2.16a.94.94 0 0 1 .68-.3h.48c.16 0 .37-.06.57.45.2.5.7 1.74.76 1.87.06.13.1.28 0 .45-.09.18-.13.29-.26.45l-.4.46c-.13.13-.27.28-.11.55.15.27.68 1.15 1.47 1.86 1.01.92 1.86 1.2 2.13 1.34.26.13.42.11.57-.07.16-.18.66-.78.84-1.05.18-.27.35-.22.58-.13.24.09 1.5.72 1.76.85.26.13.43.2.49.31.06.11.06.63-.15 1.19Z" />
  ),
  check: <path d="m4.5 12.5 4.8 4.8L19.5 7.2" />,
  arrow: <path d="M4.5 12h15M13.5 6l6 6-6 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  shield: (
    <>
      <path d="M12 3 20 6v6c0 4.4-3.2 7.8-8 9-4.8-1.2-8-4.6-8-9V6l8-3Z" />
      <path d="m8.8 12 2.2 2.2 4.2-4.4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.3l3.4 2" />
    </>
  ),
  helmet: (
    <>
      <path d="M3.5 17.5h17M4.5 17.5v-2a7.5 7.5 0 0 1 15 0v2" />
      <path d="M9.5 8.7V4.8A1.3 1.3 0 0 1 10.8 3.5h2.4a1.3 1.3 0 0 1 1.3 1.3v3.9" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2.8v2.4M12 18.8v2.4M21.2 12h-2.4M5.2 12H2.8M18.5 5.5l-1.7 1.7M7.2 16.8l-1.7 1.7M18.5 18.5l-1.7-1.7M7.2 7.2 5.5 5.5" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8.5" r="3.2" />
      <path d="M3.5 19.5a5.5 5.5 0 0 1 11 0" />
      <path d="M16 6.2a3.2 3.2 0 0 1 0 6.1M17 14.6a5.5 5.5 0 0 1 3.5 4.9" />
    </>
  ),
  excavator: (
    <>
      <path d="M3 18.5h12M4.5 18.5v-3.2h9v3.2" />
      <path d="M13.5 15.3 16 8.5h3.5" />
      <path d="M19.5 8.5 21 14l-3 1" />
    </>
  ),
  leaf: (
    <>
      <path d="M20 4c0 8-4.5 13-10.5 13A5.5 5.5 0 0 1 4 11.5C4 6 10 4 20 4Z" />
      <path d="M13.5 10.5 4.5 19.5" />
    </>
  ),
};

type Props = SVGProps<SVGSVGElement> & { name: keyof typeof paths | string; size?: number };

export default function Icon({ name, size = 24, ...rest }: Props) {
  const d = paths[name] ?? paths.home;
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {d}
    </svg>
  );
}
