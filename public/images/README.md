# Fotoğraf Klasörü

Bu klasördeki dosyalar siteye otomatik olarak yerleşir. Dosya **yoksa** site kırılmaz;
yerine markalı bir "blueprint" yer tutucu çizim görünür. Fotoğrafı bu klasöre
aşağıdaki **tam isimlerle** atmanız yeterli.

| Dosya adı | Nerede görünür | Önerilen ölçü / oran |
|---|---|---|
| `hero-santiye.jpg` | Ana sayfa açılış görseli | 1200×1500 (dikey, 4:5) |
| `hakkimizda-ekip.jpg` | Ana sayfa "Neden Bİ İnşaat" | 1600×1000 (16:10) |
| `hakkimizda-santiye.jpg` | Hakkımızda sayfası | 1600×1200 (4:3) |
| `team-umit-guven.jpg` | Ekip kartı — Ümit Güven | 800×800 (kare) |
| `team-cem-ikizoglu.jpg` | Ekip kartı — Cem İkizoğlu | 800×800 (kare) |
| `bolge-istanbul.jpg` | Hizmet bölgeleri — İstanbul | 1600×1000 (16:10) |
| `bolge-fethiye.jpg` | Hizmet bölgeleri — Fethiye | 1600×1000 (16:10) |
| `project-fethiye-villa.jpg` | Proje kartı | 1600×1000 (16:10) |
| `project-istanbul-konut.jpg` | Proje kartı | 1600×1000 (16:10) |
| `project-ticari.jpg` | Proje kartı | 1600×1000 (16:10) |
| `project-modern-yasam.jpg` | Proje kartı | 1600×1000 (16:10) |
| `project-tadilat.jpg` | Proje kartı | 1600×1000 (16:10) |
| `project-tas-duvar.jpg` | Proje kartı | 1600×1000 (16:10) |

## İpuçları

- Dosya boyutunu 300 KB altında tutun (jpg, kalite ~80). Site daha hızlı açılır.
- Yeni proje eklemek için: fotoğrafı buraya atın, sonra `lib/site.ts` içindeki
  `projects` dizisine yeni bir kayıt ekleyin.
- Fotoğraf isimlerini değiştirmek isterseniz `lib/site.ts` içindeki `image` /
  `photo` alanlarını da güncelleyin.
