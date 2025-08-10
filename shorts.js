const shortsScrollWrapper = document.querySelector('.shorts-section .video-scroll-wrapper');

let shortsAutoScrollInterval;
let shortsIsUserScrolling = false;

function startShortsAutoScroll() {
  shortsAutoScrollInterval = setInterval(() => {
    if (!shortsIsUserScrolling) {
      shortsScrollWrapper.scrollLeft += 1;

      if (shortsScrollWrapper.scrollLeft >= shortsScrollWrapper.scrollWidth - shortsScrollWrapper.clientWidth) {
        shortsScrollWrapper.scrollLeft = 0;
      }
    }
  }, 20);
}

function stopShortsAutoScroll() {
  clearInterval(shortsAutoScrollInterval);
}


shortsScrollWrapper.addEventListener('mousedown', () => {
  shortsIsUserScrolling = true;
  stopShortsAutoScroll();
});

shortsScrollWrapper.addEventListener('mouseup', () => {
  shortsIsUserScrolling = false;
  startShortsAutoScroll();
});

shortsScrollWrapper.addEventListener('touchstart', () => {
  shortsIsUserScrolling = true;
  stopShortsAutoScroll();
});

shortsScrollWrapper.addEventListener('touchend', () => {
  shortsIsUserScrolling = false;
  startShortsAutoScroll();
});

// Pause on hover
shortsScrollWrapper.addEventListener('mouseenter', () => {
  shortsIsUserScrolling = true;
  stopShortsAutoScroll();
});

shortsScrollWrapper.addEventListener('mouseleave', () => {
  shortsIsUserScrolling = false;
  startShortsAutoScroll();
});

// Start auto-scroll initially
startShortsAutoScroll();

document.querySelectorAll('.shorts-card').forEach(card => {
  card.addEventListener('click', () => {
    const videoId = card.getAttribute('data-id');
    card.innerHTML = `
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    `;
  });
});

