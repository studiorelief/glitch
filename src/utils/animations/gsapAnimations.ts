import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

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

export function parallaxAssetImmersiveContent() {
  const assets = document.querySelectorAll('.immersive_content');

  assets.forEach((asset) => {
    gsap.fromTo(
      asset,
      {
        y: '5rem',
      },
      {
        scrollTrigger: {
          markers: false,
          trigger: '[trigger="parallax"',
          start: '0% 50%',
          end: '100% 0%',
          scrub: true,
        },
        y: '-5rem',
        ease: 'none',
      }
    );
  });
}

export function parallaxAssetWeb3() {
  const assets = document.querySelectorAll('.experience_content');

  assets.forEach((asset) => {
    gsap.fromTo(
      asset,
      {
        y: '5rem',
      },
      {
        scrollTrigger: {
          markers: false,
          trigger: '.section_experience',
          start: '0% 50%',
          end: '100% 0%',
          scrub: true,
        },
        y: '-5rem',
        ease: 'none',
      }
    );
  });
}

export function splitTextAnimation() {
  const textSections = document.querySelectorAll('.text-section');

  textSections.forEach((section) => {
    // Find the main text element within the section
    const textElement = section.querySelector('h1, h2, h3, h4, h5, h6, p, div') || section;

    // Split text into lines using GSAP SplitText plugin
    const splitText = new SplitText(textElement, { type: 'lines' });

    // Set initial state for all lines
    gsap.set(splitText.lines, {
      opacity: 0,
      y: '4rem',
    });

    // Animate lines with stagger
    gsap.to(splitText.lines, {
      opacity: 1,
      y: '0rem',
      duration: 2,
      stagger: 0.5,
      ease: 'power2.out',
      markers: true,
      scrollTrigger: {
        trigger: section,
        start: 'top 90%',
        end: 'bottom 65%',
        toggleActions: 'play none none reverse',
        scrub: true,
      },
    });
  });
}
