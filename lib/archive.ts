import type { Person } from './site';

/**
 * ARŞİV — SİTEDE GÖRÜNMEZ
 *
 * Bu dosya hiçbir sayfaya veya bileşene bağlı değildir; içeriği yayına çıkmaz.
 * Amacı, ekipten ayrılan kişilerin kaydını kaybetmemek ve gerektiğinde
 * geri almayı kolaylaştırmaktır.
 *
 * GERİ ALMAK İÇİN
 * Aşağıdaki kaydı olduğu gibi kopyalayıp `lib/site.ts` içindeki
 * `people` dizisine ekleyin. Ekip bölümü tek kişide ortalanmış tek sütun,
 * iki kişiden itibaren iki sütun olacak şekilde kendiliğinden ayarlanır.
 *
 * Ayrıca kontrol edilmesi gerekenler (ortak sayısı ikiye çıkarsa):
 *   - app/hakkimizda/page.tsx  -> "Şantiyede yönetici ortağımız bizzat bulunuyor."
 *   - components/home/WhyUs.tsx -> "Yönetici ortağımız sahada; ..."
 *   - lib/site.ts               -> Cem İkizoğlu'nun biyografisi tek ortağa göre yazıldı
 *   - public/images/README.md   -> ekip fotoğrafı satırı
 *
 * Not: Bu kayıtlar git geçmişinde de durur.
 *   git show df6432a^:lib/site.ts
 */
export const formerPeople: Person[] = [
  {
    // Ayrılma tarihi: 2026-11-12 (siteden kaldırıldığı gün)
    name: 'Ümit Güven',
    role: 'Kurucu Ortak / Yönetici',
    roleEn: 'Co-Founder / Managing Partner',
    phoneDisplay: '0 542 208 68 44',
    phoneHref: '+905422086844',
    whatsapp: '905422086844',
    email: 'umitguven@biinsaat.com',
    photo: '/images/team-umit-guven.jpg',
    bio: 'Saha yönetimi, kaba inşaat ve uygulama süreçlerinin başında; projelerin ilk kazmadan anahtar teslimine kadar her aşamasını bizzat takip ediyor.',
  },
];
