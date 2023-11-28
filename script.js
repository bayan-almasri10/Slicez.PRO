let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelector('.slider');
    const slideWidth = document.querySelector('.slide').offsetWidth;

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = slides.childElementCount - 1;
    } else if (currentSlide >= slides.childElementCount) {
        currentSlide = 0;
    }

  slides.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
}
