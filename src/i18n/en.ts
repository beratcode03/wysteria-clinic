import type { Messages } from './tr';

export const en: Messages = {

  nav: {

    home: 'Home',

    contact: 'Contact',

    reserve: 'Book Now',

    menuCta: 'Treatments',

    openMenu: 'Open menu',

    closeMenu: 'Close menu',

    homeAria: 'Wysteria Works home',

    call: 'Call',

    signin: 'Sign in',

  },

  hero: {

    openNow: (closes: string) => `Open now · until ${closes}`,

    closedNow: (opens: string) => `Closed now · opens at ${opens}`,

    eyebrow: 'Adapazarı · Aesthetic Clinic',

    title1: 'The calmest',

    title2: 'form of',

    title3: 'light.',

    subtitle:

      'We see your skin not as a project, but as a ritual. Scientific protocols, a quiet setting, and a touch that is never rushed.',

    ctaMenu: 'View Treatments',

    ctaReserve: 'Book Now',

    today: 'Today',

    scroll: 'Discover',

    arriveEyebrow: 'You are in',

    arriveTitle: 'Now, slow down.',

  },

  manifesto: {

    eyebrow: 'Philosophy',

    line1: 'Beauty refuses to be rushed.',

    copy: "At Wysteria Works, no treatment is chosen off a shelf. Your skin is analysed, listened to — then we decide what it actually needs. Our aim isn't to make you someone else; it's to reveal the best version of you.",

    stat1: 'established',

    stat2: 'min. average session',

    stat3: 'specialists',

    statNote: 'science-led skin protocols',

  },

  signature: {

    eyebrow: 'Signature Treatments',

    title1: 'Most',

    title2: 'requested',

    copy: 'The protocols our clients return for — and see results fastest.',

    ctaAll: 'View All Treatments',

    chefsPick: "Editor's pick",

  },

  science: {

    eyebrow: 'The Science of Skin',

    title1: 'Three layers,',

    title2: 'one map.',

    copy: 'Every treatment is chosen knowing which of the skin’s three layers it touches. What shows on the surface begins in the depth.',

    layers: [

      { name: 'Epidermis', note: 'Barrier & tone — surface renewal' },

      { name: 'Dermis', note: 'Collagen & elasticity — firming' },

      { name: 'Hypodermis', note: 'Volume & support — contour' },

    ],

    principles: [

      'Every protocol targets a specific layer',

      'Energy dosage is calibrated to skin type',

      'Every result feeds the next session',

    ],

  },

  craft: {

    eyebrow: 'Clinical Discipline',

    title1: 'Measure first,',

    title2: 'then touch.',

    steps: [

      {

        n: '01',

        title: 'Skin Biometrics',

        meta: 'SPECTRAL ANALYSIS',

        copy: 'High-resolution spectral imaging maps hydration, melanin distribution and barrier integrity. No guesses — measurements.',

      },

      {

        n: '02',

        title: 'Dosing & Calibration',

        meta: 'PARAMETER TUNING',

        copy: 'Energy dose and molecular delivery are calibrated to your skin type. No catalogue protocols — every parameter is personal.',

      },

      {

        n: '03',

        title: 'Cellular Integration',

        meta: 'MONITORING PROTOCOL',

        copy: 'Tissue response is tracked after every session. Each result becomes the input of the next appointment — the loop deepens.',

      },

    ],

  },

  story: {

    eyebrow: 'The Space',

    title1: 'Not a clinic —',

    title2: 'more like',

    title3: 'a refuge.',

    p1: 'The moment you step in, the pace drops: travertine walls, filtered daylight, clean unscented air, and a team expecting you.',

    p2: 'Every room is private, every session by appointment. The lounge waits for calm, not for you.',

    link: 'Explore Treatments',

    slide2Title: 'Discipline in the detail',

    slide2Copy: 'Material, light and acoustics — nothing that is not part of the treatment lives in this room.',

    metrics: ['Acoustic Isolation', 'Filtered Daylight', 'Sterile Air Cycle'],

    slide3Title: 'Consultation Suite',

    slide3Copy: 'Your first visit begins here — analysis, mapping and protocol.',

    features: [

      'Private single-patient rooms',

      'Medical-grade devices, current protocols',

      'By appointment — no waiting',

    ],

  },

  marquee: {

    items: ['Skin Analysis', 'Medical Aesthetics', 'Laser & Light', 'Ritual Care', 'Personal Protocols', 'A Calmer Space'],

  },

  gallery: {

    eyebrow: 'The Space',

    title: 'Step through the light',

    labels: ['Corridor', 'Stone Texture', 'Monolith', 'Pavilion', 'Treatment', 'Laboratory'],

    viewAria: 'Enlarge photo',

    closeAria: 'Close gallery',

    prevAria: 'Previous photo',

    nextAria: 'Next photo',

    count: 'frames',

  },

  notFound: {

    eyebrow: '404',

    title1: 'This room',

    title2: 'seems empty.',

    desc: 'The page you are looking for may have moved or never existed. Let us take you somewhere calmer.',

    home: 'Home',

    menu: 'View Treatments',

  },

  visit: {

    eyebrow: 'Visit',

    title: 'Our door is open',

    address: 'Address',

    hours: 'Hours',

    open: 'Open now',

    closed: 'Closed now',

    closedDay: 'Closed on Sundays',

    cta: 'Get Directions',

    days: ['Mon – Sat', 'Saturday', 'Sunday'],

  },

  cta: {

    eyebrow: 'Booking',

    title1: 'One step',

    title2: 'for your skin.',

    copy: 'The first consultation is free. Let us analyse your skin and draw the right protocol together.',

    reserve: 'Call Now',

    viewMenu: 'View Treatments',

  },

  booking: {

    eyebrow: 'Booking',

    title1: 'Let us hold',

    title2: 'your hour.',

    copy: 'Choose a treatment, pick a day and time — our team confirms back. First consultation is free.',

    stepProtocol: 'Treatment',

    stepDate: 'Date',

    stepTime: 'Time',

    stepForm: 'Your details',

    namePh: 'Full name',

    phonePh: 'Enter without the leading 0',

    concernPh: 'Skin concern or note (optional)',

    submit: 'Send Booking Request',

    closed: 'Closed',

    selectHint: 'Select a treatment, date and time to continue.',

    daysMin: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],

    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],

    prevMonth: 'Previous month',

    nextMonth: 'Next month',

    trigger: 'Begin Private Consultation',

    drawerTitle: 'Private Consultation',

    drawerSub: 'Choose your treatment and time — our team confirms back.',

    demo: 'You are viewing a demo',

    close: 'Close',

    slotTaken: 'No appointment available for this slot',

  },

  auth: {

    signinTitle: 'Sign In',

    signupTitle: 'Sign Up',

    google: 'Continue with Google',

    or: 'or',

    namePh: 'Full name',

    emailPh: 'Email address',

    passPh: 'Password',

    signin: 'Sign In',

    signup: 'Sign Up',

    toSignin: 'Already a member? Sign in',

    toSignup: 'Not a member? Sign up',

    demo: 'Demo mode',

  },

  results: {

    eyebrow: 'Results',

    title1: 'Drag to see',

    title2: 'the change.',

    copy: 'Slide the comparison bar — see the difference between protocol before and after for yourself.',

    cases: ['Pigment Protocol', 'Skin Renewal', 'Hydration Balance'],

    before: 'Before',

    after: 'After',

    beforeAlt: 'Skin texture before treatment',

    afterAlt: 'Skin texture after treatment',

    note: 'Imagery is illustrative; results vary by skin type and protocol.',

    stats: [

      { value: '12,400+', label: 'completed sessions' },

      { value: '97%', label: 'client satisfaction' },

      { value: '4.9', label: 'average rating' },

    ],

  },

  team: {

    eyebrow: 'The Team',

    title1: 'The hands behind',

    title2: 'your skin.',

    copy: 'Every protocol is delivered by a specialist — consultation, not catalogue.',

    members: [

      {

        initials: 'W',

        name: 'Wysteria Works',

        role: 'Medical Aesthetics Physician',

        bio: '12 years of clinical practice; specialised in injection protocols and skin biometrics.',

        focus: 'injectables · skin analysis',

      },

      {

        initials: 'W',

        name: 'Wysteria Works',

        role: 'Senior Skin Therapist',

        bio: '8 years in medical skincare and device protocols; calibrates every parameter to the individual.',

        focus: 'laser · bbl · hydration',

      },

      {

        initials: 'W',

        name: 'Wysteria Works',

        role: 'Ritual Therapist',

        bio: 'Lymphatic drainage and holistic care rituals; designs recovery and relaxation protocols.',

        focus: 'rituals · massage · drainage',

      },

    ],

  },

  voices: {

    eyebrow: 'Client Voices',

    title1: 'In the words of',

    title2: 'regulars.',

    starsAria: '5 out of 5 stars',

    items: [

      {

        quote: 'For the first time, a clinic asked "what does your skin need" instead of "what would you like". After three sessions the difference was in the touch, not just the mirror.',

        name: 'Wysteria Works',

        treatment: 'Wysteria Signature',

      },

      {

        quote: 'Their appointment system actually means appointment — no waiting, no rush. My result was so natural nobody noticed; everyone just said I looked rested.',

        name: 'Wysteria Works',

        treatment: 'Botox — Three Zones',

      },

      {

        quote: 'Analysis before the pigment protocol, every parameter explained. Two months cleared two years of sun spots.',

        name: 'Wysteria Works',

        treatment: 'Pigment Protocol',

      },

    ],

  },

  footer: {

    tagline: "An aesthetic clinic on Atatürk Boulevard, in the stillness of light. Scientific protocols, a warm setting.",

    explore: 'Explore',

    visit: 'Visit',

    kitchen: 'Clinic',

    rights: 'Wysteria Works. All rights reserved.',

    backToTop: 'Back to Top',

    backToTopAria: 'Back to top of page',

    closedMonday: 'Closed Sunday',

  },

  menu: {

    eyebrow: 'Treatments',

    title: 'Protocol list',

    subtitle: 'From skin care to laser applications — every protocol is tailored to you.',

    crumb: 'Treatments',

    note: 'Prices are indicative; final protocol and session count are set after skin analysis.',

    cta: 'Book an Appointment',

    popular: 'Most Requested',

    course: 'Section',

    categories: {

      'Cilt Bakımı': 'Skin Care',

      'Lazer & Işık': 'Laser & Light',

      'İnjeksiyon': 'Injectables',

      'Vücut': 'Body',

      'Ritüeller': 'Rituals',

    } as Record<string, string>,

  },

  contact: {

    crumb: 'Contact',

    headerEyebrow: 'Contact & Booking',

    headerTitle: 'Book your visit',

    headerSubtitle: 'For bookings, questions, or just to say hello — reach us.',

    infoEyebrow: 'Contact Details',

    infoTitle: 'Get in touch',

    address: 'Address',

    phone: 'Phone',

    email: 'Email',

    hours: 'Hours',

    directions: 'Get directions',

    reservationNote: 'First consultation is free; same-day booking recommended.',

    nameLabel: 'Full Name',

    emailLabel: 'Email',

    subjectLabel: 'Subject',

    messageLabel: 'Message',

    namePh: 'Your full name',

    emailPh: 'you@example.com',

    subjectPh: 'Info, feedback, other...',

    messagePh: 'Write your message here...',

    send: 'Send Message',

    sending: 'Sending...',

    thanks: 'Thank you!',

    thanksCopy: 'Your message has been received. We will get back to you shortly.',

    newMessage: 'Send Another Message',

    errName: 'Please enter your name.',

    errEmail: 'Please enter your email.',

    errEmailValid: 'Please enter a valid email.',

    errSubject: 'Please enter a subject.',

    errMessage: 'Please write your message.',

    errMessageMin: 'Your message must be at least 10 characters.',

  },

  meta: {

    home: {

      title: 'Wysteria Works — The calmest form of light.',

      description: 'A medical aesthetics clinic in Adapazarı. Skin care, laser and ritual treatments; by appointment.',

    },

    menu: {

      title: 'Treatments — Wysteria Works',

      description: 'Skin care, laser & light, injectables, body and ritual treatments.',

    },

    contact: {

      title: 'Contact & Booking — Wysteria Works',

      description: 'Atatürk Boulevard, Adapazarı. Phone, email, hours and booking.',

    },

  },

  products: {

    t01: { name: 'Wysteria Signature', notes: 'skin analysis · enzyme peel · serum course' },

    t02: { name: 'HydraFacial', notes: 'vacuum cleanse · hydrating serum · glow' },

    t03: { name: 'Chemical Peel', notes: 'spots · uneven tone · renewal' },

    t04: { name: 'Gua Sha Ritual', notes: 'jade stone · lymphatic drainage' },

    t05: { name: 'Gold Mask', notes: '24k leaf · collagen serum' },

    t06: { name: 'Laser Hair Removal', notes: 'ice tip · all skin types' },

    t07: { name: 'BBL / IPL', notes: 'spots · redness · vessels' },

    t08: { name: 'Carbon Peel', notes: 'q-switch laser · pores · dullness' },

    t09: { name: 'Spot Protocol', notes: 'melasma · laser + mesotherapy' },

    t10: { name: 'Botox — Three Areas', notes: 'forehead · eyes · natural motion' },

    t11: { name: 'Filler', notes: 'lips · cheeks · hyaluronic acid' },

    t12: { name: 'Youth Vaccine', notes: 'h-100 · deep hydration · amino' },

    t13: { name: 'Hair Mesotherapy', notes: 'anti-loss · 6 sessions' },

    t14: { name: 'G5 Cellulite Massage', notes: 'mechanical drainage · firming' },

    t15: { name: 'Lymphatic Drainage', notes: 'pressotherapy · oedema · flow' },

    t16: { name: 'Radiofrequency', notes: 'collagen boost · face & neck' },

    t17: { name: 'Cryo Care', notes: 'ice tip · -10°c · pores' },

    t18: { name: 'Sunset Ritual', notes: 'steam · massage · care · 120 min' },

    t19: { name: 'Hot Stone Massage', notes: 'basalt · deep release · 60 min' },

    t20: { name: 'Aromatherapy', notes: 'personal oil blend · relaxation' },

    t21: { name: "Couple's Ritual", notes: 'same room · massage for two' },

  } as Record<string, { name: string; notes: string }>,

  common: {

    home: 'Home',

    skipToContent: 'Skip to content',

    directions: 'Get Directions',

    openMap: 'Open in Maps',

    whatsappMessage: 'Hello! I would like to know more about Wysteria Works.',

    whatsappTooltip: 'Write on WhatsApp',

    whatsappAria: 'Contact via WhatsApp',

  },

};
