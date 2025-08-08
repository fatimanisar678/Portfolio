const track = document.querySelector('.slider-track');
const dots = document.querySelectorAll('.dot');
const videos = document.querySelectorAll('video');

let index = 0;
const total = dots.length;

function showSlide(i) {
  track.style.transform = `translateX(-${i * 100}vw)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[i].classList.add('active');
}

function autoScroll() {
  index = (index + 1) % total;
  showSlide(index);
}

let scrollInterval = setInterval(autoScroll, 4000); // Auto scroll every 4s

// Stop auto-scroll when video is hovered
videos.forEach(video => {
  video.addEventListener('mouseenter', () => {
    clearInterval(scrollInterval);
  });

  video.addEventListener('mouseleave', () => {
    scrollInterval = setInterval(autoScroll, 4000);
  });
});

// Optional: click dot to jump
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    index = i;
    showSlide(index);
    clearInterval(scrollInterval);
    scrollInterval = setInterval(autoScroll, 4000);
  });
});
