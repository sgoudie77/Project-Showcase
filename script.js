var swiper = new Swiper('.swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 400,
      modifier: 1,
      slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 5000,
        diableOnInteraction: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });