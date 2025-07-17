import { DotLottie } from '@lottiefiles/dotlottie-web';

let dotLottie: DotLottie | null = null;

function setupLottiePlayer(): void {
  // Créer l'instance DotLottie
  dotLottie = new DotLottie({
    autoplay: false, // Désactivé par défaut pour contrôler manuellement
    loop: true,
    canvas: document.querySelector('#dotlottie-canvas') as HTMLCanvasElement,
    src: 'https://lottie.host/5f1f894c-2a7f-4ce8-b464-823a1e856ce3/FgKqlJ9ung.lottie',
  });

  // Écouter les clics sur les boutons de musique pour contrôler le Lottie
  setupLottieControls();
}

function setupLottieControls(): void {
  // Écouter les clics sur .hero_music-on pour jouer l'animation
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    if (target.classList.contains('hero_music-on')) {
      playLottie();
    }
  });

  // Écouter les clics sur .hero_music-off pour mettre en pause
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    if (target.classList.contains('hero_music-off')) {
      pauseLottie();
    }
  });
}

function playLottie(): void {
  if (dotLottie) {
    try {
      dotLottie.play();
      //   console.log('Lottie animation started');
    } catch (error) {
      console.error('Error playing Lottie animation:', error);
    }
  }
}

function pauseLottie(): void {
  if (dotLottie) {
    try {
      dotLottie.pause();
      //   console.log('Lottie animation paused');
    } catch (error) {
      console.error('Error pausing Lottie animation:', error);
    }
  }
}

// Fonction publique pour arrêter complètement l'animation
export function stopLottie(): void {
  if (dotLottie) {
    try {
      dotLottie.stop();
      //   console.log('Lottie animation stopped');
    } catch (error) {
      console.error('Error stopping Lottie animation:', error);
    }
  }
}

// Fonction d'initialisation à exporter - CORRECTION: appelle setupLottiePlayer au lieu de se rappeler elle-même
export function initLottiePlayer(): void {
  setupLottiePlayer();
}

// Export direct de l'instance pour usage externe si nécessaire
export { dotLottie };
