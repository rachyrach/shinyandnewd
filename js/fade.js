$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
        $("nav").addClass("scrolling");
    } else {
        $("nav").removeClass("scrolling");
    }
});