// slider
const nextIcon = '<img src="images/next.png">';
const backIcon = '<img src="images/back.png">';

$(".owl-carousel").owlCarousel({
  loop: false,
  margin: 10,
  nav: true,
  dots: false,
  navText: [backIcon, nextIcon],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
