let mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  autoplay: {
    delay: 2500,
  },
  breakpoints: {
    // when window width is >= 540px
    1180: {
      autoplay: false,
      slidesPerView: 2,
      spaceBetween: 30,
    }
  }
});