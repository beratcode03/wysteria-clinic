export const tr = {

  nav: {

    home: 'Ana Sayfa',

    contact: 'İletişim',

    reserve: 'Randevu Al',

    menuCta: 'Tedaviler',

    openMenu: 'Menüyü aç',

    closeMenu: 'Menüyü kapat',

    homeAria: 'Wysteria Works ana sayfa',

    call: 'Ara',

    signin: 'Giriş',

  },

  hero: {

    openNow: (closes: string) => `Şu an açık · ${closes}'e kadar`,

    closedNow: (opens: string) => `Şu an kapalı · ${opens}'te açılıyoruz`,

    eyebrow: 'Adapazarı · Estetik Kliniği',

    title1: 'Işığın',

    title2: 'en sakin',

    title3: 'hali.',

    subtitle:

      'Cildinizi bir proje değil, bir ritüel olarak görüyoruz. Bilimsel protokoller, sakin bir ortam ve aceleye getirilmeyen bir dokunuş.',

    ctaMenu: 'Tedavileri Gör',

    ctaReserve: 'Randevu Al',

    today: 'Bugün',

    scroll: 'Keşfet',

    arriveEyebrow: 'İçeridesiniz',

    arriveTitle: 'Şimdi, yavaşlayın.',

  },

  manifesto: {

    eyebrow: 'Felsefe',

    line1: 'Güzellik, aceleye gelmez.',

    copy: "Wysteria Works'te hiçbir tedavi katalogdan seçilmez. Cildiniz analiz edilir, dinlenir, sonra ihtiyacı olana karar verilir. Amacımız 'başka biri' olmak değil; sizin en iyi hâlinizi ortaya çıkarmak.",

    stat1: 'kuruluş',

    stat2: 'dakika ortalama seans',

    stat3: 'uzman ekip',

    statNote: 'bilimsel cilt protokolleri',

  },

  signature: {

    eyebrow: 'İmza Tedaviler',

    title1: 'En çok',

    title2: 'tercih edilenler',

    copy: 'Danışanlarımızın tekrar tekrar döndüğü, sonuçlarını en hızlı gördüğü protokoller.',

    ctaAll: 'Tüm Tedavileri Gör',

    chefsPick: 'Editörün seçimi',

  },

  science: {

    eyebrow: 'Cildin Bilimi',

    title1: 'Üç katman,',

    title2: 'tek harita.',

    copy: 'Her tedavi, cildin üç katmanından hangisine dokunduğunu bilerek seçilir. Yüzeyde görünen, derinde başlar.',

    layers: [

      { name: 'Epidermis', note: 'Bariyer ve ton — yüzey yenileme' },

      { name: 'Dermis', note: 'Kolajen ve elastikiyet — sıkılaşma' },

      { name: 'Hipodermis', note: 'Hacim ve destek — kontur' },

    ],

    principles: [

      'Her protokol bir katmana hedeflenir',

      'Enerji dozu cilt tipine göre kalibre edilir',

      'Her sonuç, bir sonraki seansın girdisidir',

    ],

  },

  craft: {

    eyebrow: 'Klinik Disiplin',

    title1: 'Önce ölçüm,',

    title2: 'sonra dokunuş.',

    steps: [

      {

        n: '01',

        title: 'Cilt Biyometrisi',

        meta: 'SPEKTRAL ANALİZ',

        copy: 'Yüksek çözünürlüklü spektral görüntüleme: nem haritası, melanin dağılımı, bariyer bütünlüğü. Tahmin değil — ölçüm.',

      },

      {

        n: '02',

        title: 'Dozajlama & Kalibrasyon',

        meta: 'PARAMETRE AYARI',

        copy: 'Enerji dozu ve moleküler iletim cilt tipinize kalibre edilir. Katalog protokolü yok; her parametre kişiseldir.',

      },

      {

        n: '03',

        title: 'Hücresel Entegrasyon',

        meta: 'İZLEME PROTOKOLÜ',

        copy: 'Seans sonrası doku yanıtı takip edilir. Her sonuç, bir sonraki randevunun girdisidir — döngü kapanmaz, derinleşir.',

      },

    ],

  },

  story: {

    eyebrow: 'Mekân',

    title1: 'Klinik değil,',

    title2: 'sığınak',

    title3: 'gibi.',

    p1: 'Girdiğiniz andan itibaren tempo düşer: traverten duvarlar, filtrelenmiş doğal ışık, kokusuz temiz hava ve sizi bekleyen bir ekip.',

    p2: 'Her oda tek kişiliktir, her seans randevuludur. Bekleme salonu sizi değil, sükuneti bekler.',

    link: 'Tedavileri Keşfedin',

    slide2Title: 'Detayda saklı disiplin',

    slide2Copy: 'Malzeme, ışık ve akustik — tedavinin parçası olmayan hiçbir şey bu odada değil.',

    metrics: ['Akustik İzolasyon', 'Filtrelenmiş Gün Işığı', 'Steril Hava Döngüsü'],

    slide3Title: 'Danışma Suiti',

    slide3Copy: 'İlk görüşme burada başlar — analiz, harita ve protokol.',

    features: [

      'Tek kişilik tedavi odaları',

      'Medikal cihaz parkı, güncel protokoller',

      'Randevu sistemi — bekleme yok',

    ],

  },

  marquee: {

    items: ['Cilt Analizi', 'Medikal Estetik', 'Lazer & Işık', 'Ritüel Bakımlar', 'Kişiye Özel Protokol', 'Sakin Ortam'],

  },

  gallery: {

    eyebrow: 'Mekan',

    title: 'Işığın içinden geçin',

    labels: ['Koridor', 'Taş Doku', 'Monolit', 'Pavilyon', 'Tedavi', 'Laboratuvar'],

    viewAria: 'Fotoğrafı büyüt',

    closeAria: 'Galeriyi kapat',

    prevAria: 'Önceki fotoğraf',

    nextAria: 'Sonraki fotoğraf',

    count: 'kare',

  },

  notFound: {

    eyebrow: '404',

    title1: 'Bu oda',

    title2: 'boş görünüyor.',

    desc: 'Aradığınız sayfa taşınmış ya da hiç var olmamış olabilir. Sizi daha sakin bir yere götürelim.',

    home: 'Ana Sayfa',

    menu: 'Tedavilere Bak',

  },

  visit: {

    eyebrow: 'Ziyaret',

    title: 'Kapımız açık',

    address: 'Adres',

    hours: 'Çalışma Saatleri',

    open: 'Şu an açık',

    closed: 'Şu an kapalı',

    closedDay: 'Pazar günleri kapalıyız',

    cta: 'Yol Tarifi Al',

    days: ['Pazartesi – Cumartesi', 'Cumartesi', 'Pazar'],

  },

  cta: {

    eyebrow: 'Randevu',

    title1: 'Cildiniz için',

    title2: 'bir adım.',

    copy: 'İlk görüşme ücretsizdir. Cildinizi analiz edelim, sizin için doğru protokolü birlikte çizelim.',

    reserve: 'Hemen Ara',

    viewMenu: 'Tedavileri Gör',

  },

  booking: {

    eyebrow: 'Randevu',

    title1: 'Zamanınızı',

    title2: 'ayıralım.',

    copy: 'İşleminizi seçin, günü ve saati belirleyin — ekibimiz onay için size geri döner. İlk görüşme ücretsizdir.',

    stepProtocol: 'İşlem',

    stepDate: 'Tarih',

    stepTime: 'Saat',

    stepForm: 'Bilgileriniz',

    namePh: 'Adınız Soyadınız',

    phonePh: 'Başında sıfır olmadan yazınız',

    concernPh: 'Cilt endişeniz veya notunuz (isteğe bağlı)',

    submit: 'Randevu Talebi Gönder',

    closed: 'Kapalı',

    selectHint: 'Devam etmek için işlem, tarih ve saat seçin.',

    daysMin: ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'],

    months: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],

    prevMonth: 'Önceki ay',

    nextMonth: 'Sonraki ay',

    trigger: 'Özel Konsültasyon Başlat',

    drawerTitle: 'Özel Konsültasyon',

    drawerSub: 'İşleminizi ve saatinizi seçin — ekibimiz onay için döner.',

    demo: 'Demo görünümdesiniz',

    close: 'Kapat',

    slotTaken: 'Bu saat için geçerli randevu bulunamadı',

  },

  auth: {

    signinTitle: 'Giriş Yapın',

    signupTitle: 'Kaydolun',

    google: 'Google ile giriş yap',

    or: 'veya',

    namePh: 'Adınız Soyadınız',

    emailPh: 'E-posta adresiniz',

    passPh: 'Şifreniz',

    signin: 'Giriş Yap',

    signup: 'Kaydol',

    toSignin: 'Zaten üye misiniz? Giriş Yapın',

    toSignup: 'Üye değil misiniz? Kaydolun',

    demo: 'Demo görünümdesiniz',

  },

  results: {

    eyebrow: 'Sonuçlar',

    title1: 'Değişimi',

    title2: 'sürükleyin.',

    copy: 'Karşılaştırma çubuğunu kaydırın — protokol öncesi ve sonrası arasındaki farkı kendiniz görün.',

    cases: ['Leke Protokolü', 'Cilt Yenileme', 'Nem Dengesi'],

    before: 'Önce',

    after: 'Sonra',

    beforeAlt: 'Tedavi öncesi cilt dokusu',

    afterAlt: 'Tedavi sonrası cilt dokusu',

    note: 'Görseller temsilidir; sonuçlar cilt tipine ve protokole göre değişir.',

    stats: [

      { value: '12.400+', label: 'tamamlanan seans' },

      { value: '%97', label: 'danışan memnuniyeti' },

      { value: '4.9', label: 'ortalama puan' },

    ],

  },

  team: {

    eyebrow: 'Ekip',

    title1: 'Cildinize',

    title2: 'kim dokunuyor.',

    copy: 'Her protokol, alanında uzman bir ekibin elinden çıkar — katalog değil, konsültasyon.',

    members: [

      {

        initials: 'W',

        name: 'Wysteria Works',

        role: 'Medikal Estetik Hekimi',

        bio: '12 yıllık klinik deneyim; injeksiyon protokolleri ve cilt biyometrisi üzerine uzmanlaşmıştır.',

        focus: 'injeksiyon · cilt analizi',

      },

      {

        initials: 'W',

        name: 'Wysteria Works',

        role: 'Kıdemli Cilt Terapisti',

        bio: 'Medikal cilt bakımı ve cihaz protokollerinde 8 yıl; her seansın parametrelerini kişiye göre kalibre eder.',

        focus: 'lazer · bbl · hidrasyon',

      },

      {

        initials: 'W',

        name: 'Wysteria Works',

        role: 'Ritüel Terapisti',

        bio: 'Lenfatik drenaj ve bütünsel bakım ritüelleri; gevşeme ve toparlanma protokollerini tasarlar.',

        focus: 'ritüeller · masaj · drenaj',

      },

    ],

  },

  voices: {

    eyebrow: 'Danışan Sesleri',

    title1: 'Geri dönenlerin',

    title2: 'sözleri.',

    starsAria: '5 üzerinden 5 yıldız',

    items: [

      {

        quote: 'İlk kez bir klinikte "size ne yapılsın" yerine "cildiniz ne istiyor" sorusuyla karşılaştım. Üç seans sonunda fark aynada değil, dokunuşta.',

        name: 'Wysteria Works',

        treatment: 'Wysteria Signature',

      },

      {

        quote: 'Randevu sistemi gerçekten randevu demek — beklemek yok, acele yok. Botoks sonucum o kadar doğal ki kimse fark etmedi, herkes "dinlenmişsin" dedi.',

        name: 'Wysteria Works',

        treatment: 'Botoks — Üç Bölge',

      },

      {

        quote: 'Leke protokolü öncesi analiz yapıldı, her parametre anlatıldı. İki ayda iki yıldır uğraştığım güneş lekeleri silindi.',

        name: 'Wysteria Works',

        treatment: 'Lekeli Cilt Protokolü',

      },

    ],

  },

  footer: {

    tagline: "Atatürk Bulvarı'nda, ışığın sakinliğinde bir estetik kliniği. Bilimsel protokoller, sıcak bir ortam.",

    explore: 'Keşfedin',

    visit: 'Ziyaret',

    kitchen: 'Klinik',

    rights: 'Wysteria Works. Tüm hakları saklıdır.',

    backToTop: 'Başa Dön',

    backToTopAria: 'Sayfanın başına dön',

    closedMonday: 'Pazar kapalı',

  },

  menu: {

    eyebrow: 'Tedaviler',

    title: 'Protokol listesi',

    subtitle: 'Cilt bakımından lazer uygulamalarına — her protokol kişiye göre uyarlanır.',

    crumb: 'Tedaviler',

    note: 'Fiyatlarımız bilgilendirme amaçlıdır; kesin protokol ve seans sayısı cilt analizi sonrası belirlenir.',

    cta: 'Randevu Alın',

    popular: 'En Çok Tercih Edilen',

    course: 'Bölüm',

    categories: {

      'Cilt Bakımı': 'Cilt Bakımı',

      'Lazer & Işık': 'Lazer & Işık',

      'İnjeksiyon': 'İnjeksiyon',

      'Vücut': 'Vücut',

      'Ritüeller': 'Ritüeller',

    } as Record<string, string>,

  },

  contact: {

    crumb: 'İletişim',

    headerEyebrow: 'İletişim & Randevu',

    headerTitle: 'Randevunuzu alın',

    headerSubtitle: 'Randevu, sorular veya sadece merhaba demek için — bize ulaşın.',

    infoEyebrow: 'İletişim Bilgileri',

    infoTitle: 'Bizimle iletişime geçin',

    address: 'Adres',

    phone: 'Telefon',

    email: 'E-posta',

    hours: 'Çalışma Saatleri',

    directions: 'Yol tarifi al',

    reservationNote: 'İlk görüşme ücretsizdir; aynı gün randevu öneririz.',

    nameLabel: 'Ad Soyad',

    emailLabel: 'E-posta',

    subjectLabel: 'Konu',

    messageLabel: 'Mesaj',

    namePh: 'Adınız ve soyadınız',

    emailPh: 'ornek@email.com',

    subjectPh: 'Bilgi, öneri, diğer...',

    messagePh: 'Mesajınızı buraya yazın...',

    send: 'Mesaj Gönder',

    sending: 'Gönderiliyor...',

    thanks: 'Teşekkürler!',

    thanksCopy: 'Mesajınız alındı. En kısa sürede size geri döneceğiz.',

    newMessage: 'Yeni Mesaj Gönder',

    errName: 'Lütfen adınızı girin.',

    errEmail: 'Lütfen e-posta adresinizi girin.',

    errEmailValid: 'Geçerli bir e-posta adresi girin.',

    errSubject: 'Lütfen bir konu girin.',

    errMessage: 'Lütfen mesajınızı yazın.',

    errMessageMin: 'Mesajınız en az 10 karakter olmalı.',

  },

  meta: {

    home: {

      title: 'Wysteria Works — Işığın en sakin hali.',

      description: "Adapazarı'nda medikal estetik kliniği. Cilt bakımı, lazer ve ritüel tedaviler; randevu ile.",

    },

    menu: {

      title: 'Tedaviler — Wysteria Works',

      description: 'Cilt bakımı, lazer & ışık, injeksiyon, vücut ve ritüel tedavileri.',

    },

    contact: {

      title: 'İletişim & Randevu — Wysteria Works',

      description: 'Atatürk Bulvarı, Adapazarı. Telefon, e-posta, çalışma saatleri ve randevu.',

    },

  },

  products: {

    t01: { name: 'Wysteria Signature', notes: 'cilt analizi · enzim peeling · serum kürü' },

    t02: { name: 'HydraFacial', notes: 'vakumlu temizlik · nem serumu · ışıltı' },

    t03: { name: 'Kimyasal Peeling', notes: 'leke · ton eşitsizliği · yenileme' },

    t04: { name: 'Gua Sha Ritüeli', notes: 'yeşim taşı · lenfatik drenaj' },

    t05: { name: 'Altın Maske', notes: '24 ayar yaprak · kolajen serum' },

    t06: { name: 'Lazer Epilasyon', notes: 'buz başlık · her cilt tipi' },

    t07: { name: 'BBL / IPL', notes: 'leke · kızarıklık · damarlanma' },

    t08: { name: 'Karbon Peeling', notes: 'q-switch lazer · gözenek · matlık' },

    t09: { name: 'Leke Protokolü', notes: 'melazma · lazer + mezoterapi' },

    t10: { name: 'Botoks — Üç Bölge', notes: 'alın · göz çevresi · doğal mimik' },

    t11: { name: 'Dolgu', notes: 'dudak · elmacık · hiyalüronik asit' },

    t12: { name: 'Gençlik Aşısı', notes: 'h-100 · yoğun nem · aminoasit' },

    t13: { name: 'Saç Mezoterapisi', notes: 'dökülme karşıtı · 6 seans' },

    t14: { name: 'G5 Selülit Masajı', notes: 'mekanik drenaj · sıkılaşma' },

    t15: { name: 'Lenf Drenaj', notes: 'pressoterapi · ödem · dolaşım' },

    t16: { name: 'Radyofrekans', notes: 'kolajen uyarımı · yüz & boyun' },

    t17: { name: 'Kriyo Bakımı', notes: 'buz başlık · -10°c · gözenek' },

    t18: { name: 'Gün Batımı Ritüeli', notes: 'buhar · masaj · bakım · 120 dk' },

    t19: { name: 'Sıcak Taş Masajı', notes: 'bazalt · derin gevşeme · 60 dk' },

    t20: { name: 'Aromaterapi', notes: 'kişisel yağ karışımı · rahatlama' },

    t21: { name: 'Çift Ritüeli', notes: 'aynı oda · iki kişilik masaj' },

  } as Record<string, { name: string; notes: string }>,

  common: {

    home: 'Ana Sayfa',

    skipToContent: 'İçeriğe geç',

    directions: 'Yol Tarifi Al',

    openMap: 'Haritada Aç',

    whatsappMessage: 'Merhaba! Wysteria Works hakkında bilgi almak istiyorum.',

    whatsappTooltip: "WhatsApp'tan Yaz",

    whatsappAria: 'WhatsApp ile iletişime geç',

  },

};

export type Messages = typeof tr;
