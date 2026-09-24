export const site = {
  name: 'Bİ İNŞAAT',
  legalName: 'Bİ İNŞAAT Construction',
  url: 'https://www.biinsaat.com',
  slogan: 'Hayallerinizi İnşa Eder',
  sloganEn: 'We Build Your Dreams',
  sloganRu: 'Мы строим ваши мечты',
  tagline: 'Sağlam Yapılar, Güvenli Yarınlar…',
  taglineEn: 'Solid Structures, Secure Tomorrows…',
  description:
    'İstanbul ve Fethiye’de konut, villa, ticari yapı, kaba inşaat, tadilat ve anahtar teslim projeler. Planlı, kaliteli ve zamanında teslim anlayışıyla hayallerinizi inşa ediyoruz.',
  address: {
    street: 'Maslak Meydan Sokak No:5, Spring Giz Plaza, İç Kapı No:9',
    district: 'Sarıyer',
    city: 'İstanbul',
    country: 'Türkiye',
    full: 'Maslak Meydan Sokak No:5, Spring Giz Plaza, İç Kapı No:9, Sarıyer / İstanbul / Türkiye',
  },
  email: 'info@biinsaat.com',
  phoneDisplay: '0 542 208 68 44',
  phoneHref: '+905422086844',
  whatsappHref: '905422086844',
  regions: ['İstanbul', 'Fethiye ve Çevresi'],
  values: ['Planlı', 'Kaliteli', 'Zamanında', 'Güvenli', 'Sürdürülebilir'],
  promise: ['Güven', 'Kalite', 'Zamanında Teslim'],
} as const;

export type Person = {
  name: string;
  role: string;
  roleEn: string;
  phoneDisplay: string;
  phoneHref: string;
  whatsapp: string;
  email: string;
  photo: string;
  bio: string;
};

export const people: Person[] = [
  {
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
  {
    name: 'Cem İkizoğlu',
    role: 'Yönetici / Ortak',
    roleEn: 'Managing Partner',
    phoneDisplay: '0 532 246 57 29',
    phoneHref: '+905322465729',
    whatsapp: '905322465729',
    email: 'cem@biinsaat.com',
    photo: '/images/team-cem-ikizoglu.jpg',
    bio: 'Proje geliştirme, tasarım koordinasyonu ve yatırım danışmanlığı tarafını yürütüyor; arsadan projeye giden yolu planlıyor.',
  },
];

export type Service = {
  slug: string;
  title: string;
  titleEn: string;
  icon: string;
  short: string;
  detail: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: 'konut',
    title: 'Konut',
    titleEn: 'Residence',
    icon: 'home',
    short: 'Aileler için planlı, sağlam ve yaşanabilir konut yapıları.',
    detail:
      'Tek bina ya da çok bloklu konut projelerinde; zemin etüdünden statik projeye, kaba inşaattan ince işlere kadar tüm süreci tek elden yürütüyoruz.',
    bullets: ['Betonarme karkas', 'Deprem yönetmeliğine uygun statik', 'Isı ve su yalıtımı', 'Ortak alan ve peyzaj'],
  },
  {
    slug: 'villa',
    title: 'Villa',
    titleEn: 'Villa',
    icon: 'villa',
    short: 'Doğayla uyumlu, özel tasarım müstakil villa projeleri.',
    detail:
      'Fethiye ve çevresinde arazinin eğimini, manzarayı ve güneşi okuyarak konumlandırdığımız; havuzlu, bahçeli özel villa uygulamaları.',
    bullets: ['Arazi ve manzara analizi', 'Havuz ve peyzaj', 'Doğal taş ve ahşap detaylar', 'Akıllı ev altyapısı'],
  },
  {
    slug: 'is-yeri',
    title: 'İş Yeri',
    titleEn: 'Commercial',
    icon: 'commercial',
    short: 'Ticari yapılar, ofis ve mağaza uygulamaları.',
    detail:
      'Ofis, mağaza, depo ve karma kullanımlı ticari yapılarda; işletmenin akışına göre kurgulanan, hızlı ve kontrollü uygulama.',
    bullets: ['Ofis ve mağaza uygulaması', 'Cephe ve vitrin işleri', 'Mekanik ve elektrik altyapı', 'Hızlı teslim takvimi'],
  },
  {
    slug: 'kaba-insaat',
    title: 'Kaba İnşaat',
    titleEn: 'Shell Construction',
    icon: 'shell',
    short: 'Temelden karkasa, yapının taşıyıcı iskeleti.',
    detail:
      'Kazı, temel, betonarme karkas ve duvar işleri; laboratuvar onaylı beton, projeye birebir uygun donatı ve kayıt altına alınan imalat.',
    bullets: ['Kazı ve temel', 'Betonarme karkas', 'Duvar ve şap', 'Beton ve donatı kontrolü'],
  },
  {
    slug: 'ince-isler',
    title: 'İnce İşler',
    titleEn: 'Interior Works',
    icon: 'interior',
    short: 'Sıva, boya, zemin, mutfak ve banyo uygulamaları.',
    detail:
      'Yapının karakterini belirleyen aşama: alçı ve sıva, zemin kaplamaları, boya, mutfak-banyo uygulamaları ve son detaylar.',
    bullets: ['Alçı, sıva ve boya', 'Zemin kaplamaları', 'Mutfak ve banyo', 'Kapı, pencere ve doğrama'],
  },
  {
    slug: 'tas-duvar',
    title: 'Taş Duvar & İstinat',
    titleEn: 'Stone Wall',
    icon: 'stone',
    short: 'Doğal taş duvar ve istinat duvarı uygulamaları.',
    detail:
      'Eğimli arazilerde güvenliği sağlayan istinat duvarları ve yapının karakterini tamamlayan doğal taş cephe uygulamaları.',
    bullets: ['İstinat duvarı', 'Doğal taş cephe', 'Bahçe duvarı', 'Drenaj çözümleri'],
  },
  {
    slug: 'tamir-tadilat',
    title: 'Tamir & Tadilat',
    titleEn: 'Repair & Renovation',
    icon: 'repair',
    short: 'Mevcut yapıların yenilenmesi ve onarımı.',
    detail:
      'Daire, ofis ve villa tadilatlarında; keşif, net fiyat ve net süre. Yaşarken tadilat gerektiren işlerde etaplı çalışma.',
    bullets: ['Komple daire tadilatı', 'Mutfak ve banyo yenileme', 'Cephe onarımı', 'Güçlendirme işleri'],
  },
  {
    slug: 'anahtar-teslim',
    title: 'Anahtar Teslim',
    titleEn: 'Turnkey Projects',
    icon: 'key',
    short: 'Arsadan anahtara, tek muhatapla tüm süreç.',
    detail:
      'Ruhsat, proje, imalat, iskan ve teslim; tüm başlıkların tek sözleşme altında toplandığı, tek muhataplı çalışma modeli.',
    bullets: ['Ruhsat ve izin takibi', 'Tek sözleşme', 'Sabit teslim takvimi', 'İskan ve teslim'],
  },
  {
    slug: 'proje-gelistirme',
    title: 'Proje Geliştirme',
    titleEn: 'Project Development',
    icon: 'blueprint',
    short: 'Arsanın en doğru şekilde değerlendirilmesi.',
    detail:
      'İmar durumu, emsal, fizibilite ve kat karşılığı senaryoları; arsanızdan çıkacak en verimli projeyi rakamlarla ortaya koyuyoruz.',
    bullets: ['İmar ve emsal analizi', 'Fizibilite raporu', 'Kat karşılığı senaryoları', 'Mimari konsept'],
  },
  {
    slug: 'yatirim-danismanligi',
    title: 'Yatırım Danışmanlığı',
    titleEn: 'Investment Consultancy',
    icon: 'chart',
    short: 'Doğru yatırım, güvenli gelecek.',
    detail:
      'Bölge, maliyet ve getiri analizleriyle; doğru arsayı, doğru projeyi ve doğru zamanlamayı birlikte belirliyoruz.',
    bullets: ['Bölge analizi', 'Maliyet ve getiri tablosu', 'Risk değerlendirmesi', 'Çıkış stratejisi'],
  },
];

export type ProcessStep = {
  no: string;
  title: string;
  titleEn: string;
  text: string;
};

export const processSteps: ProcessStep[] = [
  { no: '01', title: 'Arazi', titleEn: 'Land', text: 'Arsanın imar durumu, zemini ve çevresi incelenir; projenin sınırları netleşir.' },
  { no: '02', title: 'Proje Tasarım', titleEn: 'Design', text: 'Mimari, statik ve mekanik projeler hazırlanır; ruhsat süreci başlatılır.' },
  { no: '03', title: 'Kaba İnşaat', titleEn: 'Shell Construction', text: 'Kazı, temel ve betonarme karkas; yapının taşıyıcı iskeleti yükselir.' },
  { no: '04', title: 'İnce İnşaat', titleEn: 'Interior Works', text: 'Sıva, zemin, boya, mutfak-banyo ve tüm iç mekân detayları tamamlanır.' },
  { no: '05', title: 'Teslim', titleEn: 'Handover', text: 'Kontrol listesi, iskan ve anahtar teslimi; garanti kapsamı devreye girer.' },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  status: string;
  summary: string;
  image: string;
  /** Fotoğrafta gerçekte ne göründüğü (erişilebilirlik için) */
  imageAlt: string;
  facts: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: 'fethiye-manzara-villalari',
    title: 'Fethiye Manzara Villaları',
    category: 'Villa Projeleri',
    location: 'Fethiye / Muğla',
    status: 'Devam Ediyor',
    summary:
      'Körfeze bakan eğimli arazide, havuzlu ve geniş teraslı müstakil villalar. Doğal taş, ahşap ve geniş cam yüzeylerin bir arada kullanıldığı bir yaşam kurgusu.',
    image: '/images/project-fethiye-villa.jpg',
    imageAlt: 'Havuzlu, geniş cam cepheli modern beyaz villa',
    facts: [
      { label: 'Tip', value: 'Müstakil Villa' },
      { label: 'Kapsam', value: 'Anahtar Teslim' },
      { label: 'Özellik', value: 'Havuz & Peyzaj' },
    ],
  },
  {
    slug: 'istanbul-konut-projesi',
    title: 'İstanbul Konut Projesi',
    category: 'Konut Projeleri',
    location: 'Sarıyer / İstanbul',
    status: 'Devam Ediyor',
    summary:
      'Şehir içinde, ortak yaşam alanlarını öne çıkaran çok katlı konut bloğu. Planlı şantiye yönetimi ve sıkı kalite kontrolüyle yürütülüyor.',
    image: '/images/project-istanbul-konut.jpg',
    imageAlt: 'Çok katlı konut bloklarından oluşan yerleşim',
    facts: [
      { label: 'Tip', value: 'Çok Katlı Konut' },
      { label: 'Kapsam', value: 'Kaba + İnce İnşaat' },
      { label: 'Özellik', value: 'Ortak Yaşam Alanları' },
    ],
  },
  {
    slug: 'ticari-yapi-projesi',
    title: 'Ticari Yapı Projesi',
    category: 'Ticari Projeler',
    location: 'İstanbul',
    status: 'Tamamlandı',
    summary:
      'Ofis ve mağaza kullanımını bir arada barındıran, cephe detaylarıyla öne çıkan ticari yapı. İşletmenin açılış takvimine göre planlanan hızlı uygulama.',
    image: '/images/project-ticari.jpg',
    imageAlt: 'Tuğla ve cam cepheli modern ofis binası',
    facts: [
      { label: 'Tip', value: 'Ofis & Mağaza' },
      { label: 'Kapsam', value: 'Anahtar Teslim' },
      { label: 'Özellik', value: 'Cephe Uygulaması' },
    ],
  },
  {
    slug: 'modern-yasam-alanlari',
    title: 'Modern Yaşam Alanları',
    category: 'Konut Projeleri',
    location: 'Fethiye / Muğla',
    status: 'Planlama',
    summary:
      'Doğayla iç içe, az katlı ve geniş bahçeli yaşam alanları. Sürdürülebilir malzeme seçimi ve düşük enerji tüketimi hedefiyle kurgulanıyor.',
    image: '/images/project-modern-yasam.jpg',
    imageAlt: 'Çam ormanı içinde, geniş bahçeli az katlı modern konut',
    facts: [
      { label: 'Tip', value: 'Az Katlı Konut' },
      { label: 'Kapsam', value: 'Proje Geliştirme' },
      { label: 'Özellik', value: 'Sürdürülebilir Tasarım' },
    ],
  },
  {
    slug: 'tadilat-yenileme',
    title: 'Tadilat & Yenileme İşleri',
    category: 'Tadilat',
    location: 'İstanbul',
    status: 'Sürekli',
    summary:
      'Daire, ofis ve villa tadilatlarında net keşif, net fiyat ve net süre. Yaşarken tadilat gereken işlerde etaplı çalışma modeli.',
    image: '/images/project-tadilat.jpg',
    imageAlt: 'Tadilat hâlindeki bir iç mekânda boya uygulaması yapan usta',
    facts: [
      { label: 'Tip', value: 'İç Mekân' },
      { label: 'Kapsam', value: 'Tadilat & Onarım' },
      { label: 'Özellik', value: 'Etaplı Çalışma' },
    ],
  },
  {
    slug: 'tas-duvar-istinat',
    title: 'Taş Duvar & İstinat Uygulamaları',
    category: 'Özel İşler',
    location: 'Fethiye / Muğla',
    status: 'Tamamlandı',
    summary:
      'Eğimli arazilerde güvenliği sağlayan istinat duvarları ve yapının karakterini tamamlayan doğal taş cephe uygulamaları.',
    image: '/images/project-tas-duvar.jpg',
    imageAlt: 'Bahçe kenarında örülmüş doğal taş duvar',
    facts: [
      { label: 'Tip', value: 'Dış Mekân' },
      { label: 'Kapsam', value: 'Taş Duvar & İstinat' },
      { label: 'Özellik', value: 'Drenaj Çözümleri' },
    ],
  },
];

export const teamStats = [
  { value: '2', label: 'Mühendis' },
  { value: '3', label: 'Teknik Personel' },
  { value: '6', label: 'Usta' },
  { value: '15', label: 'Uygulama Ekibi' },
  { value: '3', label: 'Makine Operatörü' },
  { value: '1', label: 'İSG Sorumlusu' },
];

export const nav = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/hizmetler', label: 'Hizmetler' },
  { href: '/projeler', label: 'Projeler' },
  { href: '/iletisim', label: 'İletişim' },
];

export const faqs = [
  {
    q: 'Hangi bölgelerde çalışıyorsunuz?',
    a: 'Merkezimiz İstanbul Maslak’ta; İstanbul ve çevresinin yanı sıra Fethiye ve çevresinde de aktif olarak proje yürütüyoruz.',
  },
  {
    q: 'Anahtar teslim proje ne demek?',
    a: 'Ruhsat ve proje süreçlerinden imalata, iskandan teslime kadar tüm başlıkların tek sözleşme altında toplanması demek. Tek muhatapla çalışır, süreci tek yerden takip edersiniz.',
  },
  {
    q: 'Fiyat teklifi nasıl alabilirim?',
    a: 'Arsanızın ya da mevcut yapınızın konumunu, yaklaşık metrekaresini ve hedefinizi bize iletmeniz yeterli. Keşif sonrası kalem kalem, açık bir teklif hazırlıyoruz.',
  },
  {
    q: 'Teslim süresi nasıl belirleniyor?',
    a: 'Proje kapsamı netleştikten sonra iş programı çıkarılıyor ve sözleşmeye bağlanıyor. Süreç boyunca ilerlemeyi fotoğraf ve raporlarla düzenli olarak paylaşıyoruz.',
  },
  {
    q: 'Yalnızca kaba inşaat yaptırabilir miyim?',
    a: 'Evet. Kaba inşaat, ince işler, taş duvar veya tadilat gibi başlıkları ayrı ayrı da üstleniyoruz. Kapsamı birlikte belirliyoruz.',
  },
];
