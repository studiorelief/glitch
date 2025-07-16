export function loadModelViewerScript() {
  return new Promise<void>((resolve, reject) => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js';
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load model-viewer script'));
    document.head.appendChild(script);
  });
}

export function resetPosition() {
  const modelViewers = document.querySelectorAll('.glitch-logo') as NodeListOf<
    HTMLElement & {
      cameraOrbit: string;
      returnToInitialPosition: number;
      autoRotate: boolean;
      autoRotateDelay: number;
      rotationPerSecond: string;
    }
  >;

  if (modelViewers.length === 0) return;

  const initialOrbit = '0deg 90deg 45deg';
  const userInteracting = new WeakMap<HTMLElement, boolean>();

  modelViewers.forEach((modelViewer) => {
    userInteracting.set(modelViewer, false);
    // Set auto-rotation properties
    modelViewer.autoRotate = true;
    modelViewer.autoRotateDelay = 0;
    modelViewer.rotationPerSecond = '90deg';

    modelViewer.addEventListener('camera-change', () => {
      userInteracting.set(modelViewer, true);
      clearTimeout(modelViewer.returnToInitialPosition);
      modelViewer.returnToInitialPosition = window.setTimeout(() => {
        userInteracting.set(modelViewer, false);
        modelViewer.cameraOrbit = initialOrbit;
        // modelViewer.style.transform = 'rotateZ(0deg)';
      }, 50);
    });

    const resetCameraOrbit = () => {
      if (!userInteracting.get(modelViewer)) {
        modelViewer.cameraOrbit = initialOrbit;
      }
    };

    modelViewer.addEventListener('mouseup', resetCameraOrbit);
    modelViewer.addEventListener('touchend', resetCameraOrbit);
  });
}
