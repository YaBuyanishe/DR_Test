const sliderReviews = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.slider__btn-next',
    prevEl: '.slider__btn-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    769: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 50
    },
    1250: {
      slidesPerView: 3,
      spaceBetween: 60
    },
    1500: {
      slidesPerView: 3,
      spaceBetween: 70
    }
  }
});