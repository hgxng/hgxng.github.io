$(document).ready(function () {
  // 1. 
  // instantiating full page js 
  // setting header and footer as static elements
  $('#fullpage').fullpage({
    fixedElements: '#header, #footer', // fixed
    controlArrows: false, //events
    keyboardScrolling: true, // turn off keys
    //    onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {
    //      console.log( "well fuck ", anchorLink)
    //      if (deleteLog) {
    //        placeHolder.html('');
    //      }
    //    }
    onLeave: animatePartials, //
    //    onSlideLeave: animateNavigation, // onLead: function (index, nextIndex, direction) {}
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
  $("#header a").on("click", function (e) {
//    navigate(e, $.fn.fullpage);
  })
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

function navigate(event, fP) {
  var location = $(event.currentTarget).attr("id")
    , nav = {
      "logo": fP.silentMoveTo(2, 0)
      , "aboutUs": fP.silentMoveTo(2, 1)
      , "meetTheTeam": fP.silentMoveTo(2, 2)
      , "contactUs": fP.silentMoveTo(2, 3)
    }
  console.log("id : ", location);
  //  console.log("mmoving to...", nav[location]);
  // navigating to the appropriate location 
  //  nav[location];
  //  fP.moveTo( 0, 0)
}

function animatePartials(index, nextIndex, direction) {
  // index for up or down scrolling to home page
  var leavingSection = $(this);
  console.log(leavingSection);
  console.log("SECTION : ", index)
  console.log("DIRECTION : ", direction)
  if (nextIndex === 1 || nextIndex === 3) {
    $("#header .nav-item.element").animate({
        "color": "white"
      }, 350)
      // hide the footer
    $("#footer").animate({
      "opacity": 0
    }, 350, function () {
      $("#footer").css({
        "display": "none"
      })
    })
  }
  else {
    $("#header .nav-item.element").animate({
        "color": "black"
      }, 1000)
      // show the footer 
    $("#footer").css({
      "display": "block"
    })
    $("#footer").animate({
      "opacity": 1
    }, 1000)
  }
}

function animateNavigation(anchorLink, index, slideIndex, direction, nextSlideIndex) {
  //  console.log("slides are moving ")
  console.log("anchorlink : ", anchorLink)
  console.log("index : ", index)
  console.log("slideIndex : ", slideIndex)
  console.log("nextSlideIndex : ", nextSlideIndex)
}