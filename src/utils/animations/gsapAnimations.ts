import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function loopCircle() {
  const circles = document.querySelectorAll('.ai_video-circle');

  circles.forEach((circle) => {
    gsap.to(circle, {
      rotation: 360,
      duration: 30,
      repeat: -1,
      ease: 'none',
    });
  });
}

export function parallaxAssetGenart() {
  const assets = document.querySelectorAll('.genart_asset, .genart_asset-shadow');

  assets.forEach((asset) => {
    gsap.fromTo(
      asset,
      {
        y: '8rem',
      },
      {
        scrollTrigger: {
          markers: false,
          trigger: '.genart_content',
          start: '0% 50%',
          end: '100% 0%',
          scrub: true,
        },
        y: '0rem',
        ease: 'none',
      }
    );
  });
}

export function parallaxAssetImmersive() {
  const assets = document.querySelectorAll('.immersive_asset, .immersive_asset-shadow');

  assets.forEach((asset) => {
    gsap.fromTo(
      asset,
      {
        y: '4rem',
      },
      {
        scrollTrigger: {
          markers: false,
          trigger: '.immersive_content',
          start: '0% 50%',
          end: '100% 0%',
          scrub: true,
        },
        y: '0rem',
        ease: 'none',
      }
    );
  });
}
