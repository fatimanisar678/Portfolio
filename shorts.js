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

// User interaction handlers
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
