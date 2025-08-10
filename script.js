const scrollWrapper = document.querySelector('.video-scroll-wrapper');

let autoScrollInterval;
let isUserScrolling = false;

function startAutoScroll() {
  autoScrollInterval = setInterval(() => {
    if (!isUserScrolling) {
      // Scroll 1 pixel every 20ms, adjust speed here
      scrollWrapper.scrollLeft += 1;

      // If reached end, scroll back to start (loop)
      if (scrollWrapper.scrollLeft >= scrollWrapper.scrollWidth - scrollWrapper.clientWidth) {
        scrollWrapper.scrollLeft = 0;
      }
    }
  }, 20);
}

function stopAutoScroll() {
  clearInterval(autoScrollInterval);
}


scrollWrapper.addEventListener('mousedown', () => {
  isUserScrolling = true;
  stopAutoScroll();
});


scrollWrapper.addEventListener('mouseup', () => {
  isUserScrolling = false;
  startAutoScroll();
});


scrollWrapper.addEventListener('touchstart', () => {
  isUserScrolling = true;
  stopAutoScroll();
});
scrollWrapper.addEventListener('touchend', () => {
  isUserScrolling = false;
  startAutoScroll();
});


startAutoScroll();


scrollWrapper.addEventListener('mouseenter', () => {
  isUserScrolling = true; 
  stopAutoScroll();
});

scrollWrapper.addEventListener('mouseleave', () => {
  isUserScrolling = false;
  startAutoScroll();
});

document.querySelectorAll('.video-card').forEach(card => {
  card.addEventListener('click', () => {
    const videoId = card.getAttribute('data-video-id');
    card.innerHTML = `
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    `;
  });
});
