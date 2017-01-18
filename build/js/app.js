$(document).ready(function () {
  // 1. 
  // instantiating full page js 
  // setting header and footer as static elements
  $('#fullpage').fullpage({
    fixedElements: '#header, footer'
  , });
  // --
  // 2. 
  // scroll to home page animation trigger
  $("#scrollButton").on('click', function (e) {
    e.preventDefault();
    console.log("scrolling")
    $.fn.fullpage.moveSectionDown();
    //      scrollPage(this);
    //      animateNavbar();
  });
  // -- 
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