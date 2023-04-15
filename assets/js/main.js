var swiper = new Swiper(".swiper-digifist", {
    slidesPerView: 'auto',
    slidesOffsetAfter: -10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      576: {
        spaceBetween: 32,
      },
      100: {
        spaceBetween: 12,
      },
    }
  });