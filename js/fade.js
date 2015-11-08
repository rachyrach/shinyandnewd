$(document).ready(function(){
  $(window).bind('scroll', function() {
    var distance = 600;
    if ($(window).scrollTop() > distance) {
      $('header').addClass('scrolled');
    }
    else {
      $('header').removeClass('scrolled');
    }
  });
});