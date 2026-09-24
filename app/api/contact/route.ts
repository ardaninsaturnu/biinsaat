import { NextResponse } from 'next/server';
import { site } from '@/lib/site';

export const runtime = 'nodejs';

type Payload = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  location?: string;
  message?: string;
  /** bot tuzağı – dolu gelirse istek sessizce yutulur */
  website?: string;
};

const escape = (v: string) =>
  v.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: 'Geçersiz istek.' }, { status: 400 });
  }

  if (body.website) {
    // Honeypot doldurulmuş: başarılı gibi dön, hiçbir şey gönderme.
    return NextResponse.json({ ok: true });
  }

  const name = (body.name ?? '').trim();
  const phone = (body.phone ?? '').trim();
  const message = (body.message ?? '').trim();

  if (name.length < 2 || phone.length < 7 || message.length < 5) {
    return NextResponse.json(
      { ok: false, error: 'Lütfen ad, telefon ve mesaj alanlarını eksiksiz doldurun.' },
      { status: 422 },
    );
  }

  const rows: [string, string][] = [
    ['Ad Soyad', name],
    ['Telefon', phone],
    ['E-posta', (body.email ?? '').trim() || '—'],
    ['Hizmet', (body.service ?? '').trim() || '—'],
    ['Konum', (body.location ?? '').trim() || '—'],
    ['Mesaj', message],
  ];

  const html = `
    <h2 style="font-family:sans-serif">${site.name} — Yeni teklif talebi</h2>
    <table style="font-family:sans-serif;border-collapse:collapse">
      ${rows
        .map(
          ([k, v]) =>
            `<tr><td style="padding:6px 14px 6px 0;color:#64748b;vertical-align:top">${k}</td><td style="padding:6px 0"><strong>${escape(
              v,
            ).replace(/\n/g, '<br>')}</strong></td></tr>`,
        )
        .join('')}
    </table>`;

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? site.email;
  const from = process.env.CONTACT_FROM_EMAIL ?? 'Bi Insaat Web <onboarding@resend.dev>';

  // E-posta servisi tanımlı değilse form yine çalışır; kayıt sunucu loguna düşer.
  if (!apiKey) {
    console.info('[iletisim-formu] RESEND_API_KEY tanımsız, talep yalnızca loglandı:', rows);
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject: `Yeni teklif talebi — ${name}`,
        html,
        reply_to: body.email?.trim() || undefined,
      }),
    });

    if (!res.ok) {
      console.error('[iletisim-formu] Resend hatası:', res.status, await res.text());
      return NextResponse.json(
        { ok: false, error: 'Mesaj gönderilemedi. Lütfen telefon ya da WhatsApp ile ulaşın.' },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (error) {
    console.error('[iletisim-formu] Beklenmeyen hata:', error);
    return NextResponse.json(
      { ok: false, error: 'Mesaj gönderilemedi. Lütfen telefon ya da WhatsApp ile ulaşın.' },
      { status: 500 },
    );
  }
}
