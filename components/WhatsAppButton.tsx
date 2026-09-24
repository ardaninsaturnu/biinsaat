import Icon from './Icon';
import { site } from '@/lib/site';

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${site.whatsappHref}?text=${encodeURIComponent(
        'Merhaba, Bİ İnşaat web sitesinden yazıyorum. Projem hakkında bilgi almak istiyorum.',
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile iletişime geçin"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-800"
    >
      <Icon name="whatsapp" size={28} fill="currentColor" stroke="none" />
    </a>
  );
}
