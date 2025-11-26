// Initialize Lenis for smooth scrolling
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// GSAP Registration
gsap.registerPlugin(ScrollTrigger);

// Hero Animations
const heroTimeline = gsap.timeline();

heroTimeline
  .from('.hero-nav-link', {
    y: 20,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out'
  })
  .from('.hero-profile-img', {
    scale: 1.1,
    opacity: 0,
    duration: 1.5,
    ease: 'power2.out'
  }, '-=0.5')
  .from('.hero-headline', {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  }, '-=1')
  .from('.hero-subtext', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.8')
  .from('.hero-cta-wrapper', {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.6');

// Scroll Animations (Reveal on Scroll)
const revealElements = document.querySelectorAll('.reveal');

revealElements.forEach((element) => {
  gsap.fromTo(element,
    {
      y: 50,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    }
  );
});

// Magnetic Buttons
const magneticButtons = document.querySelectorAll('.nav-link, .hero-nav-link, .btn-submit, .project-card');

magneticButtons.forEach((btn) => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(btn, {
      duration: 0.3,
      x: x * 0.2, // Magnetic strength
      y: y * 0.2,
      ease: 'power2.out'
    });
  });

  btn.addEventListener('mouseleave', () => {
    gsap.to(btn, {
      duration: 0.5,
      x: 0,
      y: 0,
      ease: 'elastic.out(1, 0.3)'
    });
  });
});

// 3D Tilt Effect for Project Cards
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5; // Max rotation deg
    const rotateY = ((x - centerX) / centerX) * 5;

    gsap.to(card, {
      duration: 0.5,
      rotateX: rotateX,
      rotateY: rotateY,
      scale: 1.02,
      transformPerspective: 1000,
      ease: 'power2.out'
    });
  });

  card.addEventListener('mouseleave', () => {
    gsap.to(card, {
      duration: 0.5,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      ease: 'power2.out'
    });
  });
});
