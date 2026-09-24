'use client';

import { useState, type FormEvent } from 'react';
import Icon from './Icon';
import { services, site } from '@/lib/site';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const field =
  'w-full rounded-xl border border-navy-100 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors placeholder:text-navy-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-100';
const label = 'mb-1.5 block text-xs font-bold uppercase tracking-wider text-navy-500';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus('sending');
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { ok: boolean; error?: string };

      if (!res.ok || !json.ok) {
        setError(json.error ?? 'Mesaj gönderilemedi.');
        setStatus('error');
        return;
      }

      form.reset();
      setStatus('sent');
    } catch {
      setError('Bağlantı kurulamadı. Lütfen telefon ya da WhatsApp ile ulaşın.');
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="rounded-2xl border border-brand-100 bg-brand-50 p-8 text-center">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand-600 text-white">
          <Icon name="check" size={26} />
        </span>
        <h3 className="mt-5 text-xl font-extrabold text-navy-900">Talebiniz bize ulaştı</h3>
        <p className="mt-2 text-sm leading-relaxed text-navy-600">
          En kısa sürede size dönüş yapacağız. Acil bir konu ise{' '}
          <a href={`tel:${site.phoneHref}`} className="font-semibold text-brand-700 underline">
            {site.phoneDisplay}
          </a>{' '}
          numarasından bize ulaşabilirsiniz.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm font-bold text-navy-700 underline underline-offset-4"
        >
          Yeni bir talep gönder
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm sm:p-8">
      <h3 className="text-xl font-extrabold text-navy-900">Teklif Formu</h3>
      <p className="mt-1.5 text-sm text-navy-500">
        Projenizi kısaca anlatın; keşif sonrası kalem kalem teklifinizi hazırlayalım.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">
            Ad Soyad *
          </label>
          <input id="name" name="name" required minLength={2} className={field} placeholder="Adınız ve soyadınız" />
        </div>
        <div>
          <label className={label} htmlFor="phone">
            Telefon *
          </label>
          <input id="phone" name="phone" required type="tel" className={field} placeholder="05XX XXX XX XX" />
        </div>
        <div>
          <label className={label} htmlFor="email">
            E-posta
          </label>
          <input id="email" name="email" type="email" className={field} placeholder="ornek@mail.com" />
        </div>
        <div>
          <label className={label} htmlFor="location">
            Proje Konumu
          </label>
          <input id="location" name="location" className={field} placeholder="İlçe / İl" />
        </div>
        <div className="sm:col-span-2">
          <label className={label} htmlFor="service">
            İlgilendiğiniz Hizmet
          </label>
          <select id="service" name="service" className={field} defaultValue="">
            <option value="">Seçiniz</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Diğer">Diğer</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={label} htmlFor="message">
            Mesajınız *
          </label>
          <textarea
            id="message"
            name="message"
            required
            minLength={5}
            rows={5}
            className={field}
            placeholder="Arsa büyüklüğü, yapının durumu, hedefiniz ve varsa teslim tarihiniz…"
          />
        </div>
      </div>

      {/* Bot tuzağı */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      {status === 'error' && (
        <p role="alert" className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-navy-800 px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-navy-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'sending' ? 'Gönderiliyor…' : 'Teklif İsteyin'}
        {status !== 'sending' && <Icon name="arrow" size={17} />}
      </button>

      <p className="mt-3 text-center text-xs text-navy-400">
        Bilgileriniz yalnızca talebinizi yanıtlamak için kullanılır.
      </p>
    </form>
  );
}
