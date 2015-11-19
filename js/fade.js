$(document).ready(function(){
  $(window).bind('scroll', function() {
    var distance = 600;
    if ($(window).scrollTop() > distance) {
      $('nav').addClass('scrolled');
    }
    else {
      $('nav').removeClass('scrolled');
    }
  });
});