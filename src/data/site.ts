export const siteConfig = {

  name: 'Wysteria Works',

  legalName: 'Wysteria Works Estetik Kliniği',

  tagline: 'Işığın en sakin hali.',

  address: 'Atatürk Bulvarı No. 54, Adapazarı, Sakarya',

  shortAddress: 'Atatürk Bulvarı, Adapazarı',

  phone: '0 503 003 03',

  phoneRaw: '+9050300303',

  email: 'contact@wysteriaworks.com',

  instagram: '@wysteriaworks',

  instagramUrl: 'https://www.instagram.com/wysteriaworks',

  mapsUrl:

    'https://www.google.com/maps/search/?api=1&query=Atat%C3%BCrk+Bulvar%C4%B1+No+54+Adapazar%C4%B1+Sakarya',

  directionsUrl:

    'https://www.google.com/maps/dir/?api=1&destination=Atat%C3%BCrk+Bulvar%C4%B1+No+54+Adapazar%C4%B1+Sakarya',

  mapEmbedUrl:

    'https://www.google.com/maps?q=Atat%C3%BCrk+Bulvar%C4%B1+Adapazar%C4%B1+Sakarya&z=16&output=embed',

  menuUrl: '/treatments',

  qrUrl: '/treatments',

  coordinates: '40.7562° N — 30.3956° E',

  est: '2023',

  hours: {

    weekday: '09:00 – 19:00',

    saturday: '09:00 – 19:00',

    sunday: null as string | null,

    monday: '09:00 – 19:00',

  },

  hoursRows: [

    { key: 'weekday', time: '09:00 – 19:00' },

    { key: 'saturday', time: '09:00 – 19:00' },

    { key: 'sunday', time: 'Kapalı' },

  ],

};

export type Product = {

  id: string;

  name: string;

  description: string;

  category: string;

  price: number;

  duration: number;

  image: string;

  alt: string;

  featured?: boolean;

};

export const categories = [

  'Cilt Bakımı',

  'Lazer & Işık',

  'İnjeksiyon',

  'Vücut',

  'Ritüeller',

];

export const products: Product[] = [

  {

    id: 't01',

    name: 'Wysteria Signature Cilt Bakımı',

    description: 'Cilt analizi, derin temizlik, enzim peeling ve kişiye özel serum kürü.',

    category: 'Cilt Bakımı',

    price: 2400,

    duration: 75,

    image: '/assets/site/img-silk-poster.jpg',

    alt: 'Wysteria Signature — krem ipek dokusu',

    featured: true,

  },

  {

    id: 't02',

    name: 'HydraFacial',

    description: 'Vakumlu derin temizlik + nemlendirme serumu; anında ışıltı.',

    category: 'Cilt Bakımı',

    price: 1850,

    duration: 60,

    image: '/assets/site/img-72.jpg',

    alt: 'HydraFacial — su altı ışık kırılması',

  },

  {

    id: 't03',

    name: 'Kimyasal Peeling',

    description: 'Leke ve ton eşitsizliği için kontrollü yenileme protokolü.',

    category: 'Cilt Bakımı',

    price: 1600,

    duration: 45,

    image: '/assets/site/img-07.jpg',

    alt: 'Kimyasal peeling — amber serum dökülüşü',

  },

  {

    id: 't04',

    name: 'Gua Sha Ritüeli',

    description: 'Yeşim taşı ile lenfatik drenaj — ödem atımı ve doğal lifting.',

    category: 'Cilt Bakımı',

    price: 950,

    duration: 40,

    image: '/assets/site/img-16.jpg',

    alt: 'Gua Sha ritüeli — bakım ürünleri düzlemi',

  },

  {

    id: 't05',

    name: 'Altın Maske Bakımı',

    description: '24 ayar altın yaprak maske + kolajen serum kombinasyonu.',

    category: 'Cilt Bakımı',

    price: 2800,

    duration: 90,

    image: '/assets/site/img-silk-champagne.jpg',

    alt: 'Altın maske — şampanya ipek doku',

  },

  {

    id: 't06',

    name: 'Lazer Epilasyon — Tüm Vücut',

    description: 'Buz başlıklı diode lazer; her cilt tipine uygun protokol.',

    category: 'Lazer & Işık',

    price: 3200,

    duration: 60,

    image: '/assets/site/img-26.jpg',

    alt: 'Lazer epilasyon — laboratuvar ampulleri',

    featured: true,

  },

  {

    id: 't07',

    name: 'BBL / IPL Foto Gençleştirme',

    description: 'Leke, kızarıklık ve ince damarlanmada ışık terapisi.',

    category: 'Lazer & Işık',

    price: 2900,

    duration: 50,

    image: '/assets/site/img-liquid-poster.jpg',

    alt: 'BBL ışık terapisi — koyu sıvı yüzey',

  },

  {

    id: 't08',

    name: 'Karbon Peeling (Hollywood)',

    description: 'Q-switch lazer + karbon maske; gözenek ve matlık için.',

    category: 'Lazer & Işık',

    price: 1750,

    duration: 40,

    image: '/assets/site/img-62.jpg',

    alt: 'Karbon peeling — koyu cam kuleler',

  },

  {

    id: 't09',

    name: 'Lekeli Cilt Protokolü',

    description: 'Melazma ve güneş lekesinde kombine lazer + mezoterapi.',

    category: 'Lazer & Işık',

    price: 3600,

    duration: 75,

    image: '/assets/site/img-04.jpg',

    alt: 'Leke protokolü — cilt tedavisi detayı',

  },

  {

    id: 't10',

    name: 'Botoks — Üç Bölge',

    description: 'Alın, göz çevresi ve kaş arası; doğal mimik korunur.',

    category: 'İnjeksiyon',

    price: 4800,

    duration: 30,

    image: '/assets/site/img-15.jpg',

    alt: 'Botoks — medikal ürün hazırlığı',

    featured: true,

  },

  {

    id: 't11',

    name: 'Dolgu — Dudak / Elmacık',

    description: 'Hiyalüronik asit dolgu; yüz oranına göre planlanır.',

    category: 'İnjeksiyon',

    price: 5500,

    duration: 45,

    image: '/assets/site/img-30.jpg',

    alt: 'Dolgu — klinik tedavi uygulaması',

  },

  {

    id: 't12',

    name: 'Gençlik Aşısı (H-100)',

    description: 'Yoğun nem + aminoasit kokteyli; cilt kalitesini artırır.',

    category: 'İnjeksiyon',

    price: 3900,

    duration: 40,

    image: '/assets/site/img-09.jpg',

    alt: 'Gençlik aşısı — kil maskesi hazırlığı',

  },

  {

    id: 't13',

    name: 'Mezoterapi — Saç',

    description: 'Dökülme karşıtı vitamin kokteyli, 6 seanslık protokol.',

    category: 'İnjeksiyon',

    price: 2200,

    duration: 45,

    image: '/assets/site/img-06.jpg',

    alt: 'Saç mezoterapisi — uygulama detayı',

  },

  {

    id: 't14',

    name: 'G5 Selülit Masajı',

    description: 'Mekanik drenaj masajı; bölgesel sıkılaşma protokolü.',

    category: 'Vücut',

    price: 1300,

    duration: 45,

    image: '/assets/site/img-03.jpg',

    alt: 'G5 masajı — sırt uygulaması',

  },

  {

    id: 't15',

    name: 'Lenf Drenaj (Pressoterapi)',

    description: 'Ödem ve dolaşım için basınç terapisi — 45 dk dinlenme.',

    category: 'Vücut',

    price: 950,

    duration: 45,

    image: '/assets/site/img-64.jpg',

    alt: 'Lenf drenaj — dalgalı cephe dokusu',

  },

  {

    id: 't16',

    name: 'Radyofrekans Sıkılaştırma',

    description: 'Kolajen uyarımı ile yüz ve boyun sıkılaştırma.',

    category: 'Vücut',

    price: 2100,

    duration: 55,

    image: '/assets/site/img-07.jpg',

    alt: 'Radyofrekans — serum makro detayı',

  },

  {

    id: 't17',

    name: 'Buz Başlıklı Kriyo Bakımı',

    description: 'Gözenek sıkılaştırma ve şişlik azaltma; -10°C terapi.',

    category: 'Vücut',

    price: 1450,

    duration: 35,

    image: '/assets/site/img-72.jpg',

    alt: 'Kriyo bakımı — su yüzeyi makrosu',

  },

  {

    id: 't18',

    name: 'Wysteria Gün Batımı Ritüeli',

    description: 'Buhar, masaj ve yüz bakımı — 120 dakikalık tam paket.',

    category: 'Ritüeller',

    price: 4900,

    duration: 120,

    image: '/assets/site/img-marble-poster.jpg',

    alt: 'Gün batımı ritüeli — altın damarlı sıvı',

    featured: true,

  },

  {

    id: 't19',

    name: 'Sıcak Taş Masajı',

    description: 'Bazalt taşları ile derin gevşeme; 60 dakika.',

    category: 'Ritüeller',

    price: 1650,

    duration: 60,

    image: '/assets/site/img-61.jpg',

    alt: 'Sıcak taş masajı — terracotta taş formu',

  },

  {

    id: 't20',

    name: 'Aromaterapi Masajı',

    description: 'Kişiye özel yağ karışımı ile bütünsel rahatlama.',

    category: 'Ritüeller',

    price: 1500,

    duration: 60,

    image: '/assets/site/img-60.jpg',

    alt: 'Aromaterapi — cam yüzey ışığı',

  },

  {

    id: 't21',

    name: 'Çift Ritüeli',

    description: 'Aynı odada iki kişilik masaj + ikram.',

    category: 'Ritüeller',

    price: 3200,

    duration: 75,

    image: '/assets/site/img-67.jpg',

    alt: 'Çift ritüeli — beyaz kemer koridoru',

  },

];

export const galleryImages = [

  { url: '/assets/site/img-67.jpg', label: 'Koridor', alt: 'Kemerli taş koridor — lineer ışık' },

  { url: '/assets/site/img-64.jpg', label: 'Taş Doku', alt: 'Dalgalı işlenmiş taş yüzey' },

  { url: '/assets/site/img-62.jpg', label: 'Monolit', alt: 'Koyu cam ve taş kütle' },

  { url: '/assets/site/img-65.jpg', label: 'Pavilyon', alt: 'Keskin açılı mimari kütle' },

  { url: '/assets/site/img-30.jpg', label: 'Tedavi', alt: 'Klinik cilt tedavisi uygulaması' },

  { url: '/assets/site/img-26.jpg', label: 'Laboratuvar', alt: 'Amber ampul ve serum hazırlığı' },

];

export const siteImages = {

  heroPoster: '/assets/site/img-liquid-poster.jpg',

  heroVideo: '/video/liquid-obsidian.mp4',

  detailVideo: '/video/liquid-marble.mp4',

  portalInner: '/assets/site/img-67.jpg',

  ritual1: '/assets/site/img-61.jpg',

  ritual2: '/assets/site/img-64.jpg',

  ritual3: '/assets/site/img-65.jpg',

  story1: '/assets/site/img-67.jpg',

  story2: '/assets/site/img-64.jpg',

  contact: '/assets/site/img-65.jpg',

  ogImage: '/assets/site/img-67.jpg',

};

export const brandLogo = '/assets/site/wysteria-clear.png';

export const brandLogoInk = '/assets/site/wysteria-ink.png';

export const brandMark = '/assets/site/mark.png';

export const brandMarkInk = '/assets/site/mark-ink.png';

export function getOpenStatus(): { open: boolean; label: string } {

  const now = new Date();

  const day = now.getDay();

  const mins = now.getHours() * 60 + now.getMinutes();

  const ranges: Record<number, [number, number] | null> = {

    0: null,

    1: [9 * 60, 19 * 60],

    2: [9 * 60, 19 * 60],

    3: [9 * 60, 19 * 60],

    4: [9 * 60, 19 * 60],

    5: [9 * 60, 19 * 60],

    6: [9 * 60, 19 * 60],

  };

  const range = ranges[day];

  if (!range) return { open: false, label: 'closed' };

  return { open: mins >= range[0] && mins < range[1], label: mins >= range[0] && mins < range[1] ? 'open' : 'closed' };

}
