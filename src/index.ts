import './index.css';

import {
  loopCircle,
  parallaxAssetGenart,
  parallaxAssetImmersive,
  parallaxAssetWeb3,
} from '$utils/animations/gsapAnimations';
import { initLottiePlayer } from '$utils/animations/lottiePlayer';
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
  initLottiePlayer();

  /* Animaions */
  loopCircle();
  parallaxAssetImmersive();
  parallaxAssetGenart();
  parallaxAssetWeb3();

  // alert('Hello');
});
