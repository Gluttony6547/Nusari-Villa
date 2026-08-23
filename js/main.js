const WHATSAPP_NUMBER = '6287780867880';
const WHATSAPP_MESSAGE = 'Halo! Nama saya ______, saya tertarik untuk menyewa Nusari Villa. Bisa bantu info ketersediaan dan harga?';

const translations = {
  en: {
    meta: {
      title: 'Nusari Villa Ubud | Private Pool Villa in Nature',
      description: "Nusari Villa Ubud is a two-bedroom private pool villa in Gianyar, Ubud. A quiet retreat with tropical views, modern spaces, and easy access to Bali's cultural heart.",
      ogDescription: 'A two-bedroom villa in Gianyar, Ubud with a private pool, open living space, and tropical surroundings.',
    },
    nav: {
      about: 'About',
      villa: 'Villa',
      amenities: 'Amenities',
      gallery: 'Gallery',
      pricing: 'Pricing',
      location: 'Location',
      reservation: 'Reservation',
    },
    cta: {
      whatsapp: 'Reserve via WhatsApp',
      gallery: 'View Gallery',
    },
    hero: {
      label: 'Private Pool Villa in Ubud',
      subtitle: 'A two-bedroom retreat in Gianyar, Ubud for guests seeking nature, modern comfort, and the privacy of a calm Bali stay.',
      scroll: 'Scroll',
    },
    facts: {
      bedrooms: 'Bedrooms',
      private: 'Private',
      pool: 'Pool',
    },
    intro: {
      label: 'About the Villa',
      title: 'A place to rest close to nature.',
      p1: "Nusari Villa blends modern minimalist architecture with Ubud's tropical landscape. From the pool deck, balcony, and living room, every space is made to feel calm and open for a staycation, a small family trip, or a slower work-from-villa rhythm.",
      p2: "Located in Mas, a cultural village near Ubud's attractions, the villa remains tucked away enough to feel private from the moment you arrive.",
    },
    story: {
      1: {
        title: 'Wake up to tropical green',
        text: 'Large windows and balconies frame trees, gardens, and the quiet rhythm of Mas village.',
      },
      2: {
        title: 'Private space to slow down',
        text: 'The pool, sun deck, and open living area become the center of the stay without needing to leave the villa.',
      },
      3: {
        title: 'Close to Ubud',
        text: 'Easy access to cultural areas, restaurants, and family destinations, while returning to a quieter setting.',
      },
    },
    experience: {
      label: 'Experience',
      title: 'Designed to enjoy your time.',
      poolTitle: 'Private Pool',
      pool: 'An intimate pool deck for morning swims, reading, or slow afternoons in the tropical garden.',
      livingTitle: 'Indoor-Outdoor Living',
      living: 'Living, dining, and kitchen spaces connect through wide openings so light and air feel natural.',
      balconyTitle: 'Forest Balcony',
      balcony: 'A quiet sitting area by the bedroom gives you a gentle pause before starting the day in Ubud.',
    },
    villa: {
      label: 'Accommodation',
      title: 'Two Bedroom Pool Villa',
      description: 'Two air-conditioned bedrooms, a living room, dining area, fully equipped kitchen, and private outdoor space. The layout suits small families, couples, or guests planning a longer Ubud stay.',
      feature1: 'Master bedroom with king bed',
      feature2: 'Second bedroom with twin beds',
      feature3: 'Fully equipped kitchen and island bar',
      feature4: 'Smart TV, Wi-Fi, and free parking',
      feature5: 'Balcony and tropical garden',
      feature6: 'Housekeeping and laundry service',
    },
    amenities: {
      label: 'Amenities',
      title: 'Essential, tidy, and ready to stay.',
      poolLabel: 'Pool',
      pool: 'Private Pool',
      kitchenLabel: 'Cook',
      kitchen: 'Full Kitchen',
      acLabel: 'Cool',
      ac: 'Air Conditioning',
      wifiLabel: 'Wi-Fi',
      wifi: 'Free Wi-Fi',
      parkingLabel: 'Park',
      parking: 'Free Parking',
      tvLabel: 'TV',
      tv: 'Smart TV',
      sunLabel: 'Sun',
      sun: 'Sun Terrace',
      cleanLabel: 'Clean',
      clean: 'Housekeeping',
    },
    gallery: {
      label: 'Gallery',
      title: 'Corners of Nusari Villa',
      description: 'Real villa photos: exterior, bedrooms, living area, pool deck, and the surrounding landscape.',
      view: 'View',
    },
    location: {
      label: 'Location',
      title: 'Gianyar, Ubud',
      description: 'Located in the Mas area of Gianyar, Nusari Villa is ideal for guests who want to stay close to Ubud while returning to a more private, natural setting.',
      maps: 'Open Google Maps',
    },
    contact: {
      label: 'Reservation',
      title: 'Ready to stay at Nusari Villa? 🌿',
      description: 'Send your check-in date, check-out date, and number of guests. We will help check availability and confirm the best rate for you!',
    },
    pricing: {
      label: 'Pricing',
      title: 'How much does it cost?',
      perMonth: '/month',
      note: 'Estimated price is between 30-35 million, note that long-term stays will be cheaper compared to short-term.',
    },
    aria: {
      nav: 'Main navigation',
      language: 'Language selector',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      highlights: 'Villa highlights',
      scrollAbout: 'Scroll to about villa',
      atmosphere: 'Villa atmosphere',
      amenities: 'Nusari Villa amenities',
      map: 'Nusari Villa location on Google Maps',
      galleryDialog: 'Nusari Villa photo gallery',
      closeGallery: 'Close gallery',
      prevPhoto: 'Previous photo',
      nextPhoto: 'Next photo',
    },
    alt: {
      hero: 'Nusari Villa private pool with tropical garden',
      staircase: 'Nusari Villa staircase with arched window',
      balconyView: 'Rice field and sky view from the villa balcony',
      pool: 'Private pool with sun loungers',
      living: 'Nusari Villa open living room and dining area',
      forestBalcony: 'Bedroom balcony with forest view',
      masterBedroom: 'Nusari Villa master bedroom',
      twinBedroom: 'Nusari Villa twin bedroom',
    },
  },
  id: {
    meta: {
      title: 'Nusari Villa Ubud | Villa Private Pool di Alam Ubud',
      description: 'Nusari Villa — villa 2 kamar dengan private pool di Mas, Ubud. Tempat yang pas buat staycation, liburan keluarga, atau work-from-villa yang santai dan mewah.',
      ogDescription: 'Villa 2 kamar di Gianyar, Ubud. Ada private pool, dapur lengkap, dan suasana alam tropis yang bikin nagih.',
    },
    nav: {
      about: 'Tentang',
      villa: 'Villa',
      amenities: 'Fasilitas',
      gallery: 'Galeri',
      pricing: 'Harga',
      location: 'Lokasi',
      reservation: 'Reservasi',
    },
    cta: {
      whatsapp: 'Pesan via WhatsApp',
      gallery: 'Lihat Galeri',
    },
    hero: {
      label: 'Private Pool Villa di Ubud',
      subtitle: 'Dua kamar tidur, kolam privat, dan suasana Bali yang tenang — semua dalam satu villa yang terasa seperti rumah sendiri.',
      scroll: 'Scroll',
    },
    facts: {
      bedrooms: 'Kamar Tidur',
      private: 'Privat',
      pool: 'Pool',
    },
    intro: {
      label: 'Tentang Villa',
      title: 'Tempat yang bikin kamu nggak mau pulang.',
      p1: 'Nusari Villa punya desain modern minimalis yang menyatu cantik sama alam tropis Ubud. Dari pool deck, balkon, sampai living room — semuanya terasa lapang dan bikin betah, entah buat staycation dadakan, liburan bareng keluarga, atau kerja remote sambil nikmatin angin sore.',
      p2: 'Lokasinya di Mas, desa budaya yang mana-mana deket ke spot ikonik Ubud — tapi tetap cukup tersembunyi biar kamu bisa punya waktu sendiri.',
    },
    story: {
      1: {
        title: 'Pagi yang terasa beda',
        text: 'Bangun dengan pemandangan hijau dari jendela lebar dan balkon — pohon, taman, dan ritme desa Mas yang tenang banget.',
      },
      2: {
        title: 'Villa-mu, aturanmu',
        text: 'Kolam renang, sun deck, dan living terbuka jadi pusat hari-hari kamu. Nggak perlu kemana-mana kalau nggak mau.',
      },
      3: {
        title: 'Dekat, tapi tetap privat',
        text: 'Ke pusat Ubud, warung enak, atau tempat wisata keluarga? Gampang. Tapi kamu selalu punya tempat tenang buat balik.',
      },
    },
    experience: {
      label: 'Pengalaman',
      title: 'Setiap sudut dirancang buat dinikmati.',
      poolTitle: 'Private Pool',
      pool: 'Berenang pagi, baca buku sore, atau cuma duduk santai di tepi kolam — pool deck ini jadi favorit semua tamu.',
      livingTitle: 'Living Indoor-Outdoor',
      living: 'Dapur, meja makan, dan ruang santai nyambung lewat bukaan lebar. Cahaya dan angin masuk natural — nggak ada sekat yang ganggu.',
      balconyTitle: 'Balkon Tropis',
      balcony: 'Spot favorit buat ngopi pagi atau sekedar tarik napas sebelum mulai hari. View hijaunya bikin kepala jernih.',
    },
    villa: {
      label: 'Akomodasi',
      title: 'Villa 2 Kamar dengan Private Pool',
      description: 'Dua kamar ber-AC, living room, dining area, dapur lengkap, dan area outdoor privat. Pas banget buat keluarga kecil, pasangan, atau siapa aja yang pengen staycation quality di Ubud.',
      feature1: 'Master bedroom dengan king bed',
      feature2: 'Kamar kedua dengan twin bed',
      feature3: 'Dapur lengkap + island bar',
      feature4: 'Smart TV, Wi-Fi kencang, parkir gratis',
      feature5: 'Balkon dan taman tropis',
      feature6: 'Housekeeping + laundry service',
    },
    amenities: {
      label: 'Fasilitas',
      title: 'Semua yang kamu butuhkan, sudah ada.',
      poolLabel: 'Pool',
      pool: 'Private Pool',
      kitchenLabel: 'Dapur',
      kitchen: 'Dapur Lengkap',
      acLabel: 'Sejuk',
      ac: 'Air Conditioning',
      wifiLabel: 'Wi-Fi',
      wifi: 'Wi-Fi Gratis',
      parkingLabel: 'Parkir',
      parking: 'Parkir Gratis',
      tvLabel: 'TV',
      tv: 'Smart TV',
      sunLabel: 'Teras',
      sun: 'Sun Terrace',
      cleanLabel: 'Bersih',
      clean: 'Housekeeping',
    },
    gallery: {
      label: 'Galeri',
      title: 'Intip Sudut-Sudut Nusari Villa',
      description: 'Foto asli villa — eksterior, kamar, area living, pool deck, dan pemandangan sekitar. Nggak ada filter, ini aslinya.',
      view: 'Lihat',
    },
    location: {
      label: 'Lokasi',
      title: 'Mas, Gianyar — Ubud',
      description: 'Berada di desa Mas, area Gianyar — cuma beberapa menit dari pusat Ubud. Cukup dekat buat jalan-jalan, cukup tenang buat istirahat beneran.',
      maps: 'Buka Google Maps',
    },
    contact: {
      label: 'Reservasi',
      title: 'Mau menginap di Nusari Villa? 🌿',
      description: 'Kirim tanggal check-in, check-out, dan jumlah tamu. Kami bantu cek ketersediaan dan kasih harga terbaik buat kamu!',
    },
    pricing: {
      label: 'Harga',
      title: 'Berapa biaya menginap?',
      perMonth: '/bulan',
      note: 'Estimasi Harga berada di antara 30-35 juta saja, makin lama sewanya, makin murah harganya.',
    },
    aria: {
      nav: 'Navigasi utama',
      language: 'Pilihan bahasa',
      openMenu: 'Buka menu',
      closeMenu: 'Tutup menu',
      highlights: 'Highlight villa',
      scrollAbout: 'Scroll ke tentang villa',
      atmosphere: 'Suasana villa',
      amenities: 'Daftar fasilitas Nusari Villa',
      map: 'Lokasi Nusari Villa di Google Maps',
      galleryDialog: 'Galeri foto Nusari Villa',
      closeGallery: 'Tutup galeri',
      prevPhoto: 'Foto sebelumnya',
      nextPhoto: 'Foto berikutnya',
    },
    alt: {
      hero: 'Kolam renang privat Nusari Villa dengan taman tropis',
      staircase: 'Tangga interior Nusari Villa dengan jendela lengkung',
      balconyView: 'Pemandangan sawah dan langit dari balkon villa',
      pool: 'Kolam renang privat dengan sun lounger',
      living: 'Living room dan dining area terbuka Nusari Villa',
      forestBalcony: 'Balkon kamar dengan pemandangan tropis',
      masterBedroom: 'Kamar tidur utama Nusari Villa',
      twinBedroom: 'Kamar tidur twin bed Nusari Villa',
    },
  },
};

const photos = [
  {
    src: 'assets/images/BIP-MJ-1035.webp',
    alt: {
      en: 'Nusari Villa private pool with tropical garden',
      id: 'Kolam renang privat Nusari Villa dengan taman tropis',
    },
  },
  {
    src: 'assets/images/BIP-MJ-1033.webp',
    alt: {
      en: 'Nusari Villa pool deck from the living area',
      id: 'Pool deck Nusari Villa dari area living',
    },
  },
  {
    src: 'assets/images/BIP-MJ-1023.webp',
    alt: {
      en: 'Sun loungers by the private pool',
      id: 'Sun lounger di samping kolam renang privat',
    },
  },
  {
    src: 'assets/images/BIP-MJ-0806.webp',
    alt: {
      en: 'Nusari Villa exterior in Mas Ubud',
      id: 'Eksterior Nusari Villa di Mas Ubud',
    },
  },
  {
    src: 'assets/images/BIP-MJ-1015.webp',
    alt: {
      en: 'Open living room, dining area, and kitchen',
      id: 'Living room, dining area, dan dapur terbuka',
    },
  },
  {
    src: 'assets/images/BIP-MJ-1017.webp',
    alt: {
      en: 'Dining area with garden view',
      id: 'Dining area dengan view taman',
    },
  },
  {
    src: 'assets/images/BIP-MJ-0918.webp',
    alt: {
      en: 'Master bedroom with king bed',
      id: 'Kamar tidur utama dengan king bed',
    },
  },
  {
    src: 'assets/images/BIP-MJ-0967.webp',
    alt: {
      en: 'Second bedroom with twin beds',
      id: 'Kamar tidur kedua dengan twin bed',
    },
  },
  {
    src: 'assets/images/BIP-MJ-0940.webp',
    alt: {
      en: 'Bedroom balcony with tropical view',
      id: 'Balkon kamar dengan pemandangan tropis',
    },
  },
  {
    src: 'assets/images/BIP-MJ-0997.webp',
    alt: {
      en: 'Rice field and sky view from the balcony',
      id: 'Pemandangan sawah dan langit dari balkon',
    },
  },
  {
    src: 'assets/images/BIP-MJ-0821.webp',
    alt: {
      en: 'Interior staircase with arched window',
      id: 'Tangga interior dengan jendela lengkung',
    },
  },
  {
    src: 'assets/images/BIP-MJ-0955.webp',
    alt: {
      en: 'Nusari Villa modern bathroom',
      id: 'Kamar mandi modern Nusari Villa',
    },
  },
  {
    src: 'assets/images/BIP-MJ-1016.webp',
    alt: {
      en: 'Kitchen island and dining space',
      id: 'Kitchen island dan area makan villa',
    },
  },
  {
    src: 'assets/images/BIP-MJ-0944.webp',
    alt: {
      en: 'Green view from the villa bedroom',
      id: 'Pemandangan hijau dari kamar villa',
    },
  },

];

const galleryGrid = document.getElementById('gallery-grid');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const header = document.getElementById('header');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const langButtons = document.querySelectorAll('[data-lang-option]');
const whatsappLinks = document.querySelectorAll('.js-whatsapp');
let currentIndex = 0;
let currentLang = localStorage.getItem('nusari-lang') || 'en';

function getTranslation(path, lang = currentLang) {
  return path.split('.').reduce((value, key) => value?.[key], translations[lang]);
}

function getAlt(photo) {
  return photo.alt[currentLang] || photo.alt.en;
}

function updateWhatsappLinks() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  whatsappLinks.forEach((link) => {
    link.href = href;
  });
}

function updateMeta() {
  document.documentElement.lang = currentLang;
  document.title = getTranslation('meta.title');
  document.querySelector('meta[name="description"]')?.setAttribute('content', getTranslation('meta.description'));
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', getTranslation('meta.title'));
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', getTranslation('meta.ogDescription'));
}

function applyTranslations() {
  updateMeta();

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const text = getTranslation(element.dataset.i18n);
    if (typeof text === 'string') element.textContent = text;
  });

  document.querySelectorAll('[data-i18n-attr]').forEach((element) => {
    element.dataset.i18nAttr.split(',').forEach((pair) => {
      const [attr, key] = pair.split(':').map((part) => part.trim());
      const text = getTranslation(key);
      if (attr && typeof text === 'string') element.setAttribute(attr, text);
    });
  });

  langButtons.forEach((button) => {
    const isActive = button.dataset.langOption === currentLang;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  document.querySelectorAll('.gallery-item').forEach((item, index) => {
    const alt = getAlt(photos[index]);
    item.dataset.viewLabel = getTranslation('gallery.view');
    item.setAttribute('aria-label', `${getTranslation('gallery.view')}: ${alt}`);
    item.querySelector('img')?.setAttribute('alt', alt);
  });

  if (lightbox.classList.contains('active')) {
    lightboxImg.alt = getAlt(photos[currentIndex]);
  }

  navToggle.setAttribute(
    'aria-label',
    navLinks.classList.contains('open') ? getTranslation('aria.closeMenu') : getTranslation('aria.openMenu')
  );
}

function setLanguage(lang) {
  currentLang = translations[lang] ? lang : 'en';
  localStorage.setItem('nusari-lang', currentLang);
  applyTranslations();
}

if (galleryGrid) {
  photos.forEach((photo, index) => {
    const item = document.createElement('button');
    item.className = 'gallery-item';
    item.type = 'button';
    item.dataset.viewLabel = getTranslation('gallery.view');
    item.setAttribute('aria-label', `${getTranslation('gallery.view')}: ${photo.alt.en}`);
    item.innerHTML = `<img src="${photo.src}" alt="${photo.alt.en}" loading="lazy" decoding="async">`;
    item.addEventListener('click', () => openLightbox(index));
    galleryGrid.appendChild(item);
  });
}

function openLightbox(index) {
  currentIndex = index;
  updateLightboxImage();
  lightbox.classList.add('active');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  document.querySelector('.lightbox-close').focus();
}

function closeLightbox() {
  lightbox.classList.remove('active');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function updateLightboxImage() {
  lightboxImg.src = photos[currentIndex].src;
  lightboxImg.alt = getAlt(photos[currentIndex]);
}

function navigateLightbox(direction) {
  currentIndex = (currentIndex + direction + photos.length) % photos.length;
  updateLightboxImage();
}

document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
document.querySelector('.lightbox-prev').addEventListener('click', () => navigateLightbox(-1));
document.querySelector('.lightbox-next').addEventListener('click', () => navigateLightbox(1));

lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (event) => {
  if (!lightbox.classList.contains('active')) return;
  if (event.key === 'Escape') closeLightbox();
  if (event.key === 'ArrowLeft') navigateLightbox(-1);
  if (event.key === 'ArrowRight') navigateLightbox(1);
});

function updateHeaderState() {
  header.classList.toggle('scrolled', window.scrollY > 40);
}

window.addEventListener('scroll', updateHeaderState, { passive: true });
updateHeaderState();

const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
);

revealElements.forEach((el) => observer.observe(el));

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  header.classList.toggle('menu-open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
  navToggle.setAttribute('aria-label', isOpen ? getTranslation('aria.closeMenu') : getTranslation('aria.openMenu'));
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    header.classList.remove('menu-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', getTranslation('aria.openMenu'));
  });
});

langButtons.forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.langOption));
});

updateWhatsappLinks();
applyTranslations();
