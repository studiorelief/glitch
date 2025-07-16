import './index.css';

import {
  loopCircle,
  parallaxAssetGenart,
  parallaxAssetImmersive,
  parallaxAssetWeb3,
} from '$utils/animations/gsapAnimations';
import { initMusicPlayer } from '$utils/animations/musicPlayer';
import { initMarker } from '$utils/global/marker';
import { loadModelViewerScript, resetPosition } from '$utils/global/modalviewer';
import { popupContact } from '$utils/global/popupContact';

window.Webflow ||= [];
window.Webflow.push(() => {
  /* Global */
  initMarker();
  loadModelViewerScript();
  resetPosition();
  popupContact();

  /* Music Player */
  initMusicPlayer();

  /* Animaions */
  loopCircle();
  parallaxAssetImmersive();
  parallaxAssetGenart();
  parallaxAssetWeb3();
});
