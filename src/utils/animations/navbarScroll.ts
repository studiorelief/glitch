let lastScrollY = 0;
let ticking = false;

export function initNavbarScroll(): void {
  const logoElement = document.querySelector('.navbar_logo-link') as HTMLElement;

  if (!logoElement) {
    console.warn('Navbar logo element not found');
    return;
  }

  function updateNavbarPosition(): void {
    const currentScrollY = window.scrollY;
    const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
    // const viewportHeight = window.innerHeight;
    // const scrollThreshold = viewportHeight * 0.725; // 50vh

    // if (scrollDirection === 'down' && currentScrollY > scrollThreshold) {
    if (scrollDirection === 'down') {
      // Scroll vers le bas ET au-delà de 50vh - logo monte
      logoElement.style.transform = 'translateY(-10rem)';
    } else {
      // Scroll vers le haut OU en dessous de 50vh - logo position normale
      logoElement.style.transform = 'translateY(0rem)';
    }

    lastScrollY = currentScrollY;
    ticking = false;
  }

  function handleScroll(): void {
    if (!ticking) {
      requestAnimationFrame(updateNavbarPosition);
      ticking = true;
    }
  }

  // Ajouter une transition CSS pour un mouvement fluide
  logoElement.style.transition = 'transform 0.3s ease-in-out';

  // Écouter les événements de scroll
  window.addEventListener('scroll', handleScroll, { passive: true });
}
