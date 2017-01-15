$(document).ready(function () {
  $(function () {
    $("#scrollButton a").on('click', function (e) {
      e.preventDefault();
      console.log( "should animate you know")
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
      }, 450, 'linear');
    });
  });
})