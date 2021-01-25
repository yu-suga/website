// 画像スワイパー処理

const mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  autoplay: true,
  speed: 1000,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
