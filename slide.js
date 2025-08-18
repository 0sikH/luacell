const slides = document.querySelectorAll('.slide');
let current = 0;

function resetSlide(slideEl) {
  const title = slideEl.querySelector('h2');
  const subtitle = slideEl.querySelector('p');
  const product = slideEl.querySelector('.product');
  const btn = slideEl.querySelector('.btn');
  const label = slideEl.querySelector('.label');

  gsap.set([title, subtitle, product, btn, label], { opacity: 0 });
  gsap.set(product, { x: 50 });
  gsap.set(btn, { y: 10 });
  gsap.set(label, { y: 40 });
}

function showSlide(index) {
  slides.forEach(slide => {
    slide.classList.remove('active');
    resetSlide(slide);
  });

  const active = slides[index];
  active.classList.add('active');

  const title = active.querySelector('h2');
  const subtitle = active.querySelector('p');
  const product = active.querySelector('.product');
  const btn = active.querySelector('.btn');
  const label = active.querySelector('.label');

  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const productX = isMobile ? 12 : 50;

  gsap.to(label,   { opacity: 1, y: 0, duration: 1,   delay: 0.2 });
  gsap.to(title,   { opacity: 1,           duration: 0.6, delay: 0.3 });
  gsap.to(subtitle,{ opacity: 1,           duration: 0.6, delay: 0.6 });
  gsap.fromTo(product, { x: productX }, { opacity: 1, x: 0, duration: 1, delay: 0.9 });
  gsap.to(btn,     { opacity: 1, y: 0,    duration: 0.6, delay: 1.2 });
}

showSlide(current);

setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 5000);
