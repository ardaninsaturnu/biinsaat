# Fotoğraf Klasörü

Sitedeki tüm görseller bu klasörden gelir. Bir dosya **yoksa** site kırılmaz;
yerine markalı bir yer tutucu görünür. Fotoğrafı değiştirmek için aynı isimle
üzerine yazmanız yeterli — kodda hiçbir değişiklik gerekmez.

## Mevcut dosyalar

| Dosya adı | Nerede görünür | Ölçü |
|---|---|---|
| `hero-santiye.jpg` | Ana sayfa açılış görseli | 1200×1500 (4:5) |
| `hakkimizda-ekip.jpg` | Ana sayfa "Neden Bİ İnşaat" | 1600×1000 (16:10) |
| `hakkimizda-santiye.jpg` | Hakkımızda sayfası | 1400×1050 (4:3) |
| `bolge-istanbul.jpg` | Hizmet bölgeleri — İstanbul | 1600×1000 |
| `bolge-fethiye.jpg` | Hizmet bölgeleri — Fethiye | 1600×1000 |
| `project-fethiye-villa.jpg` | Proje kartı — villa | 1600×1000 |
| `project-istanbul-konut.jpg` | Proje kartı — konut | 1600×1000 |
| `project-ticari.jpg` | Proje kartı — ticari | 1600×1000 |
| `project-modern-yasam.jpg` | Proje kartı — modern yaşam | 1600×1000 |
| `project-tadilat.jpg` | Proje kartı — tadilat | 1600×1000 |
| `project-tas-duvar.jpg` | Proje kartı — taş duvar | 1600×1000 |

## Henüz eklenmemiş olanlar

| Dosya adı | Nerede görünür | Ölçü |
|---|---|---|
| `team-umit-guven.jpg` | Ekip kartı — Ümit Güven | 800×800 (kare) |
| `team-cem-ikizoglu.jpg` | Ekip kartı — Cem İkizoğlu | 800×800 (kare) |

Bu ikisi için şu an baş harflerden oluşan bir monogram görünüyor. Gerçek
portre fotoğraflarını bu isimlerle klasöre atınca otomatik yerlerini alırlar.

## Önemli not — mevcut fotoğraflar geçicidir

Sitedeki fotoğraflar **telifsiz stok görsellerdir**, Bİ İnşaat'ın kendi
projelerine ait değildir. Yalnızca sayfaların boş durmaması için konmuştur.
Gerçek şantiye ve proje fotoğraflarınız hazır olduğunda aynı dosya adlarıyla
değiştirin; `lib/site.ts` içindeki `imageAlt` açıklamalarını da fotoğrafta
gerçekte görünenle güncellemeyi unutmayın.

## Yeni proje eklemek

1. Fotoğrafı bu klasöre atın (1600×1000 önerilir)
2. `lib/site.ts` içindeki `projects` dizisine yeni bir kayıt ekleyin
   (`image` ve `imageAlt` alanlarını doldurun)

## İpuçları

- Görseller `next/image` ile otomatik olarak WebP/AVIF'e çevrilip
  ekran boyutuna göre küçültülür; kaynak dosyayı 1600 px genişlikte
  ve 500 KB altında tutmanız yeterli.
- Kırpma oranları yukarıdaki tabloda; farklı oranda bir fotoğraf koyarsanız
  ortadan kırpılarak yerleştirilir.
