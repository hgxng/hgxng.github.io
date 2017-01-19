$(document).ready(function () {
  // 1. 
  // instantiating full page js 
  // setting header and footer as static elements
  $('#fullpage').fullpage({
    fixedElements: '#header, #footer', // fixed
    controlArrows: false, //events
    //    onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {
    //      console.log( "well fuck ", anchorLink)
    //      if (deleteLog) {
    //        placeHolder.html('');
    //      }
    //    }
    onLeave: callMe
      // onLead: function (index, nextIndex, direction) {}
      //    , afterLoad: function (anchorLink, index) {}
      //    , afterRender: function () {}
      //    , afterResize: function () {}
      //    , afterResponsive: function (isResponsive) {}
      //    , afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {}
      //    , onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {}
  });
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

function callMe(index, nextIndex, direction) {
  console.log("call me \n", index);
  //  console.log("call me \n", nextIndex);
  console.log("call me \n", $(".section"));
  // TODO 
  // kinda works...
  if ($("#landing.section").hasClass("active")) {
    $("#header .nav-item.element").animate({
        "color": "black"
      }, 1000)
      // show the footer 
    $("#footer").animate({
      "opacity": 1
    }, 1000)
  }
  else {
    $("#header .nav-item.element").animate({
        "color": "white"
      }, 350)
      // hide the footer
    $("#footer").animate({
      "opacity": 0
    }, 350)
  }
}

function fun() {}