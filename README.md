# Bİ İNŞAAT — Kurumsal Web Sitesi

İstanbul ve Fethiye’de faaliyet gösteren **Bİ İnşaat Construction** için hazırlanmış,
Next.js tabanlı kurumsal web sitesi.

- **Framework:** Next.js 15 (App Router, TypeScript)
- **Stil:** Tailwind CSS v4
- **Hedef platform:** Vercel
- **Dil:** Türkçe (İngilizce/Rusça marka sloganları içerikte korunmuştur)

## Sayfalar

| Yol | İçerik |
|---|---|
| `/` | Açılış, hizmet özeti, neden biz, proje süreci, projeler, bölgeler, ekip, SSS |
| `/hakkimizda` | Firma tanıtımı, değerler, ekip, hizmet bölgeleri |
| `/hizmetler` | 10 hizmet başlığı, detay ve kapsam listeleri |
| `/projeler` | Proje kartları ve künyeleri |
| `/iletisim` | Adres, yetkili kişiler, harita ve teklif formu |

## Öne çıkanlar

- Mobil öncelikli, tamamen responsive tasarım
- SEO: sayfa bazlı metadata, `sitemap.xml`, `robots.txt`, JSON-LD (GeneralContractor şeması)
- Bağlantı paylaşımları için otomatik üretilen OG görseli
- Sabit WhatsApp butonu, tıklanabilir telefon ve e-posta bağlantıları
- Bot tuzaklı (honeypot) ve doğrulamalı teklif formu
- Fotoğraf eksikse kırılmayan, markalı yer tutucu görsel sistemi

## Kurulum

```bash
npm install
npm run dev
```

Site `http://localhost:3000` adresinde açılır.

## Fotoğraflar

Tüm fotoğraflar `public/images/` klasörüne gider. Hangi dosyanın nereye
denk geldiği `public/images/README.md` içinde listelenmiştir. Fotoğraf
eklenmeden de site sorunsuz çalışır.

## İçerik güncelleme

Metinlerin neredeyse tamamı tek dosyada toplanmıştır: **`lib/site.ts`**

- `site` → telefon, e-posta, adres, sloganlar
- `people` → yetkili kişiler
- `services` → hizmet başlıkları ve detayları
- `projects` → proje kartları
- `processSteps`, `teamStats`, `faqs` → süreç, ekip sayıları, sık sorulanlar

Buradaki bir değişiklik tüm sayfalara otomatik yansır.

## Teklif formu e-postası (opsiyonel)

Form, e-posta servisi tanımlı olmadan da çalışır (talepler sunucu loguna düşer).
E-posta almak için `.env.example` dosyasındaki değişkenleri Vercel ortam
değişkenlerine ekleyin.

## Vercel’e yayınlama

```bash
npm i -g vercel
vercel        # önizleme
vercel --prod # canlı yayın
```

Alternatif olarak projeyi GitHub’a gönderip Vercel panelinden **Import Project**
diyebilirsiniz; Vercel Next.js’i otomatik tanır, ek ayar gerekmez.

Yayın sonrası `lib/site.ts` içindeki `url` alanını gerçek alan adınızla
güncelleyin (sitemap ve OG etiketleri bu adresi kullanır).
