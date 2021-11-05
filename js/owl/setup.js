$('.owl-carousel').owlCarousel({
    loop:false,
    margin:4,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:4
        },
        600:{
            items:4
        },
        1000:{
            items:5.4
        }
    }
})

$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 15) {
            $(".header").addClass("enable");
        } else {
            $(".header").removeClass("enable");
        }
    });
});
