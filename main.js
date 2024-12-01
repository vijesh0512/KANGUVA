import './style.css';
import { initializeVideoPlayer } from './src/videoPlayer.js';

// Initialize the video player when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const player = initializeVideoPlayer('my-video');
  
  // Handle keyboard shortcuts for fullscreen
  document.addEventListener('keydown', (e) => {
    if (e.key === 'f' || e.key === 'F') {
      if (!player.isFullscreen()) {
        player.requestFullscreen();
      } else {
        player.exitFullscreen();
      }
    }
  });
});