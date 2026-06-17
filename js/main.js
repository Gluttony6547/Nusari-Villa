const photos = [
  { src: 'assets/images/BIP-MJ-1035.webp', alt: 'Kolam renang privat Nusari Villa dengan taman tropis' },
  { src: 'assets/images/BIP-MJ-1033.webp', alt: 'Pool deck Nusari Villa dari area living' },
  { src: 'assets/images/BIP-MJ-1023.webp', alt: 'Sun lounger di samping kolam renang privat' },
  { src: 'assets/images/BIP-MJ-0806.webp', alt: 'Eksterior Nusari Villa di Mas Ubud' },
  { src: 'assets/images/BIP-MJ-1015.webp', alt: 'Living room, dining area, dan dapur terbuka' },
  { src: 'assets/images/BIP-MJ-1017.webp', alt: 'Dining area dengan view taman' },
  { src: 'assets/images/BIP-MJ-0918.webp', alt: 'Kamar tidur utama dengan king bed' },
  { src: 'assets/images/BIP-MJ-0967.webp', alt: 'Kamar tidur kedua dengan twin bed' },
  { src: 'assets/images/BIP-MJ-0940.webp', alt: 'Balkon kamar dengan pemandangan tropis' },
  { src: 'assets/images/BIP-MJ-0997.webp', alt: 'Pemandangan sawah dan langit dari balkon' },
  { src: 'assets/images/BIP-MJ-0821.webp', alt: 'Tangga interior dengan jendela lengkung' },
  { src: 'assets/images/BIP-MJ-0955.webp', alt: 'Kamar mandi modern Nusari Villa' },
  { src: 'assets/images/BIP-MJ-1016.webp', alt: 'Kitchen island dan area makan villa' },
  { src: 'assets/images/BIP-MJ-0944.webp', alt: 'Pemandangan hijau dari kamar villa' },
  { src: 'assets/images/99d7ef78-0700-414e-800a-87a8f376a79b.webp', alt: 'Jalur hutan tropis di sekitar villa' },
];

const galleryGrid = document.getElementById('gallery-grid');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const header = document.getElementById('header');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
let currentIndex = 0;

if (galleryGrid) {
  photos.forEach((photo, index) => {
    const item = document.createElement('button');
    item.className = 'gallery-item';
    item.type = 'button';
    item.setAttribute('aria-label', `Buka foto: ${photo.alt}`);
    item.innerHTML = `<img src="${photo.src}" alt="${photo.alt}" loading="lazy" decoding="async">`;
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
  lightboxImg.alt = photos[currentIndex].alt;
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

revealElements.forEach((element) => observer.observe(element));

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  header.classList.toggle('menu-open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
  navToggle.setAttribute('aria-label', isOpen ? 'Tutup menu' : 'Buka menu');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    header.classList.remove('menu-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Buka menu');
  });
});
