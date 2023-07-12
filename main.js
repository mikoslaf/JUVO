var $ = jQuery;
$(window).on("load", function () {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:55,
        nav:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
});