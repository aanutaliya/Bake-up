const slideshow = document.querySelector('.slideshow');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide();
}

function updateSlide() {
  slideshow.style.transform = `translateX(-${currentSlide * 100}%)`;
}

setInterval(nextSlide, 5000); // Change slide every 5 seconds