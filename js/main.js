$(document).ready(function () {
  $('.sidenav.aa').sidenav({
    "edge": "right"
  });
  $('.scrollspy').scrollSpy();
  $('.tabs').tabs();
  $('.modal').modal();
  $('.carousel').carousel({
    numVisible: 3,
    shift: 1,
    padding: 10,
    noWrap: true
  });
  $('.coleads .owl-carousel').owlCarousel({
    margin: 10,
    stagePadding: 30,
    dotsEach: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      }
    }
  });
  $('.faculty .owl-carousel').owlCarousel({
    margin: 30,
    dotsEach: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      }
    }
  });
});


(function ($) {
  'use strict';
  var navbarLinks = $('.navigate');
  $(navbarLinks).on('click', function (event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
  });
})(jQuery);



window.onscroll = function () {
  myFunction();
};

function myFunction() {
  var navTag = document.getElementById("nav-tag");
  if (
    document.body.scrollTop > 0 ||
    document.documentElement.scrollTop > 0
  ) {
    navTag.className = "white navonscroll";
  } else {
    navTag.className = "white z-depth-0";
  }
}