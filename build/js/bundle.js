$(document).ready(function () {
  $(function () {
    $("#scrollButton a").on('click', function (e) {
      e.preventDefault();
      scrollPage(this);
      animateNavbar();
    });
  });
})

function scrollPage(_this) {
  $('html, body').animate({
    scrollTop: $($(_this).attr('href')).offset().top
  }, 450, 'linear');
}

function animateNavbar() {
  $(".nav .element").css({
    color: "black"
  })
}