import './index.css';

import {
  loopCircle,
  parallaxAssetGenart,
  parallaxAssetImmersive,
  parallaxAssetImmersiveContent,
  parallaxAssetWeb3,
  splitTextAnimation,
} from '$utils/animations/gsapAnimations';
import { initLottiePlayer } from '$utils/animations/lottiePlayer';
import { initMusicPlayer } from '$utils/animations/musicPlayer';
import { initNavbarScroll } from '$utils/animations/navbarScroll';
import { initGlitchCandy } from '$utils/animations/threeScript';
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
  initNavbarScroll();

  /* Music Player */
  initMusicPlayer();
  initLottiePlayer();

  /* 3D/Canvas */
  initGlitchCandy();

  /* Animations */
  initNavbarScroll();
  parallaxAssetImmersive();
  parallaxAssetGenart();
  parallaxAssetWeb3();
  parallaxAssetImmersiveContent();
  loopCircle();
  splitTextAnimation();

  // alert('Hello');
});
