$(document).ready(() => {
  let currentSlide = 0;
  let isBusy = false;
  const slides = ['img/slider/bootstrap05.jpg', 'img/blog/blog02.jpg', 'img/slider/bootstrap03.jpg'];

  $('.slider-arrow').on('click', (e) => {
    const that = $(e.currentTarget);
    const slideCount = slides.length - 1;

    if (!isBusy) {
      if (that.hasClass('right')) {
        currentSlide += 1;
        if (currentSlide > slideCount) currentSlide = 0;
      } else {
        currentSlide -= 1;
        if (currentSlide < 0) currentSlide = slideCount;
      }
      isBusy = true;

      $('.slider-image').animate({ 'opacity': 0 }, 300, () => {
        $('.slider-image').css('background-image', 'url(' + slides[currentSlide] + ')');
        $('.slider-image').animate({ 'opacity': 1 }, 350, () => {
          isBusy = false;
        });
      });
    }
  });
});
