$(document).ready(function () {
  // 1. 
  // instantiating full page js 
  // setting header and footer as static elements
  $('#fullpage').fullpage({
    fixedElements: '#header, #footer', // fixed
    controlArrows: false, //events
    keyboardScrolling: true, // turn off keys
    anchors: ['p0', 'p1', 'p2', 'p3', 'p4'], //
    menu: '#header', //
    onLeave: animatePartials, //
    afterLoad: animateNav, //
    scrollingSpeed: 1250, //
    easing: "easeInBounce", //
    css3: true, //
    easingcss3: 'ease',//
  });
  // --
  // 2. 
  // scroll to home page animation trigger
  $("#scrollButton").on('click', function (e) {
    e.preventDefault();
    $.fn.fullpage.moveSectionDown();
    //      scrollPage(this);
    //      animateNavbar();
  });
  $("#header a").on("click", function (e) {
    //    navigate(e, $.fn.fullpage);
  })
})

function animateNav(anchorLink, index) {
  var nav = {
    "about": $("#aboutUs"), // 
    "team": $("#meetTheTeam"), // 
    "contact": $("#contactUs") //
  }
  $(".section").each(function () {
    if ($(this).hasClass("active")) {
      var location = $(this).attr("id");
      if (nav[location]) {
        nav[location].addClass("active");
      }
    }
  })
}

function animateNavbar() {
  $(".nav .element").css({
    color: "black"
  })
  $(".nav").css({
    "background": "white"
  })
}

function animatePartials(index, nextIndex, direction) {
  // index for up or down scrolling to home page
  var leavingSection = $(this).attr("id");
  //  console.log(leavingSection.attr("id"));
  //  console.log("SECTION : ", index)
  //  console.log("DIRECTION : ", direction)
  var landing = $("#landing")
    // if you're not on the landing page anymore
  if (leavingSection === "landing" && direction === "down") {
    $("#header .nav-item.element").animate({
      "color": "black"
    }, 1000)
    $("#header").animate({
      "background-color": "white"
    , }, 850)
    $("#header").css({
        "border-bottom": "1px solid #ddd"
      , })
      // show the footer 
    $("#footer").css({
      "display": "inline-block"
    })
    $("#footer").animate({
      "opacity": 1
    }, 1000)
  }
  else if (leavingSection === "home" && direction === "up") {
    $("#header").animate({
      "background-color": "transparent"
    }, 250);
    $("#header").css({
      "border": "transparent"
    , })
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
  if (nextIndex === 1 || nextIndex === 3) {}
  else {}
}