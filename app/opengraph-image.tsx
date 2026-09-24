import { ImageResponse } from 'next/og';
import { site } from '@/lib/site';

export const alt = `${site.legalName} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #0c1f3f 0%, #163467 55%, #1e458a 100%)',
          padding: 72,
          color: '#fff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
          <svg width="86" height="66" viewBox="0 0 64 48">
            <path d="M32 3 62 24h-9L32 9.5 11 24H2L32 3Z" fill="#ffffff" />
            <path
              d="M32 14 51 27.5V45H13V27.5L32 14Z"
              fill="none"
              stroke="#60b6fa"
              strokeWidth="3.2"
              strokeLinejoin="round"
            />
            <rect x="25.5" y="25" width="13" height="12.5" rx="1" fill="#60b6fa" />
          </svg>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 46, fontWeight: 800, letterSpacing: -1 }}>Bİ İNŞAAT</span>
            <span style={{ fontSize: 19, letterSpacing: 9, color: '#93d1fd' }}>CONSTRUCTION</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: 74, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>
            Sağlam Yapılar,
          </span>
          <span style={{ fontSize: 74, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2, color: '#93d1fd' }}>
            Güvenli Yarınlar…
          </span>
          <span style={{ fontSize: 28, marginTop: 22, color: '#aec4ea' }}>
            Konut · Villa · Ticari Yapı · Anahtar Teslim — İstanbul & Fethiye
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(255,255,255,0.18)',
            paddingTop: 26,
            fontSize: 26,
            color: '#dbeefe',
          }}
        >
          <span>www.biinsaat.com</span>
          <span style={{ fontWeight: 700 }}>{site.phoneDisplay}</span>
        </div>
      </div>
    ),
    size,
  );
}
