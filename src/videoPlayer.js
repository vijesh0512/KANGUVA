import videojs from 'video.js';

export function initializeVideoPlayer(elementId) {
  const player = videojs(elementId, {
    controls: true,
    fluid: true,
    preload: 'auto',
    playbackRates: [0.5, 1, 1.5, 2],
    responsive: true,
    userActions: {
      hotkeys: true
    },
    controlBar: {
      pictureInPictureToggle: true,
      fullscreenToggle: true
    }
  });

  // Handle fullscreen changes
  player.on('ready', () => {
    console.log('Player is ready');
    
    // Add double-click to toggle fullscreen
    player.on('dblclick', function() {
      if (!player.isFullscreen()) {
        player.requestFullscreen();
      } else {
        player.exitFullscreen();
      }
    });
  });

  // Handle mobile device orientation changes
  window.addEventListener('orientationchange', () => {
    player.dimensions(window.innerWidth, window.innerHeight);
  });

  return player;
}