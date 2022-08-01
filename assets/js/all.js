"use strict";

$('document').ready(function () {
  // 打開選單
  $('.m-link').click(function (event) {
    event.preventDefault();
    $('.m-menu').toggleClass('hidden');
  });
  var swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    speed: 1000,
    effect: 'slide',
    // If we need pagination
    pagination: {
      el: '.swiper-pagination'
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
});
//# sourceMappingURL=all.js.map
