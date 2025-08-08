
  document.querySelectorAll('video').forEach(video => {
    video.addEventListener('mouseenter', () => {
      video.muted = false;
      video.play();
    });

    video.addEventListener('mouseleave', () => {
      video.pause();
    });
  });

