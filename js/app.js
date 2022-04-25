$('.slider__container').slick({
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4000,
});

$('.main__auto-top').on('click', function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})