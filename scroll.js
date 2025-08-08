
  document.querySelectorAll('.video-card video').forEach(video => {
    video.addEventListener('mouseenter', () => {
      video.muted = false; // enable sound
      video.play();        // play on hover
    });

    video.addEventListener('mouseleave', () => {
      video.pause();       // pause when not hovering
    });
  });

