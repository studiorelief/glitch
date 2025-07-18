// GlitchCandy configuration interface
interface GlitchCandyConfig {
  canvas: HTMLElement;
  width: number;
  height: number;
  basePath: string;
}

// GlitchCandy constructor interface
interface GlitchCandyConstructor {
  new (config: GlitchCandyConfig): unknown;
}

// Declare global GlitchCandy type
declare global {
  interface Window {
    GlitchCandy?: GlitchCandyConstructor;
  }
}

/**
 * Dynamically loads the GlitchCandy script and initializes it
 */
export function initGlitchCandy(): void {
  // Check if script is already loaded
  if (document.querySelector('script[src*="glitchcandy.vercel.app"]')) {
    initializeGlitchCandy();
    return;
  }

  // Create and load the module script
  const script = document.createElement('script');
  script.type = 'module';
  script.crossOrigin = 'anonymous';
  script.src = 'https://glitchcandy.vercel.app/assets/index-CtJBbBvE.js';

  // Initialize GlitchCandy when script loads
  script.onload = () => {
    initializeGlitchCandy();
  };

  script.onerror = () => {
    console.error('Failed to load GlitchCandy script');
  };

  document.head.appendChild(script);
}

/**
 * Initializes GlitchCandy instance
 */
function initializeGlitchCandy(): void {
  // Wait for window load if not already loaded
  if (document.readyState === 'complete') {
    createGlitchCandyInstance();
  } else {
    window.addEventListener('load', createGlitchCandyInstance);
  }
}

/**
 * Creates the GlitchCandy instance
 */
function createGlitchCandyInstance(): void {
  if (window.GlitchCandy) {
    const canvas = document.getElementById('glitch-candy-canvas');
    if (canvas) {
      new window.GlitchCandy({
        canvas: canvas,
        width: 400,
        height: 400,
        basePath: 'https://glitchcandy.vercel.app/',
      });
    } else {
      //   console.warn('GlitchCandy: Canvas element with id "glitch-candy-canvas" not found');
    }
  } else {
    console.error('GlitchCandy: Library not available on window object');
  }
}
