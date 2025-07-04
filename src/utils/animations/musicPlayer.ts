class MusicPlayer {
  private audio: HTMLAudioElement;
  private musicUrls: string[] = [
    // Free music examples - replace with your own music URLs
    'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    // You can add more music URLs here
  ];

  constructor() {
    this.audio = new Audio();
    this.audio.loop = true;
    this.audio.volume = 0.5; // Set volume to 50%
    this.setupEventListeners();
  }

  private setupEventListeners(): void {
    // Play music on click of .hero_music-on
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (target.classList.contains('hero_music-on')) {
        this.playRandomMusic();
        this.toggleActiveState('on');
      }
    });

    // Pause music on click of .hero_music-off
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (target.classList.contains('hero_music-off')) {
        this.pauseMusic();
        this.toggleActiveState('off');
      }
    });
  }

  private toggleActiveState(activeButton: 'on' | 'off'): void {
    const musicOnButtons = document.querySelectorAll('.hero_music-on');
    const musicOffButtons = document.querySelectorAll('.hero_music-off');

    if (activeButton === 'on') {
      // Add is-active to .hero_music-on and remove from .hero_music-off
      musicOnButtons.forEach((button) => button.classList.add('is-active'));
      musicOffButtons.forEach((button) => button.classList.remove('is-active'));
    } else {
      // Add is-active to .hero_music-off and remove from .hero_music-on
      musicOffButtons.forEach((button) => button.classList.add('is-active'));
      musicOnButtons.forEach((button) => button.classList.remove('is-active'));
    }
  }

  private playRandomMusic(): void {
    try {
      // Select a random music URL
      const randomIndex = Math.floor(Math.random() * this.musicUrls.length);
      const selectedMusic = this.musicUrls[randomIndex];

      // Set the audio source if it's different from current
      if (this.audio.src !== selectedMusic) {
        this.audio.src = selectedMusic;
      }

      // Play the music
      const playPromise = this.audio.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // console.log('Music started playing');
          })
          .catch((error) => {
            console.error('Error playing music:', error);
          });
      }
    } catch (error) {
      console.error('Error setting up music:', error);
    }
  }

  private pauseMusic(): void {
    try {
      this.audio.pause();
      //   console.log('Music paused');
    } catch (error) {
      console.error('Error pausing music:', error);
    }
  }

  // Public method to stop music completely
  public stopMusic(): void {
    try {
      this.audio.pause();
      this.audio.currentTime = 0;
      //   console.log('Music stopped');
    } catch (error) {
      console.error('Error stopping music:', error);
    }
  }

  // Public method to set volume
  public setVolume(volume: number): void {
    this.audio.volume = Math.max(0, Math.min(1, volume));
  }
}

// Initialize the music player
export function initMusicPlayer(): MusicPlayer {
  return new MusicPlayer();
}
