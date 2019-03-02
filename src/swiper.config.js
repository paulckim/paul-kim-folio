/******************** [SWIPER CONFIG] ********************/
const paginationConfig = Object.freeze({
  el: ".swiper-pagination",
  clickable: true,
  bulletElement: "span",
  bulletClass: "bullet",
  bulletActiveClass: "active"
});
const swiperConfig = Object.freeze({
  direction: "vertical",
  mousewheel: true,
  speed: 800,
  slidesPerView: 1,
  renderBullet: () => '<span class="bullet disabled" />',
  pagination: paginationConfig
});
/******************** [SWIPER CONFIG] ********************/

export default swiperConfig;
