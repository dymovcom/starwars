$( document ).ready(function() {
    $('.owl-carousel').owlCarousel({
        margin:10,
        nav:true,
        navClass: ["slider__nav--left", "slider__nav--right"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            880:{
                items:3
            },
            1160:{
                items:4
            }
        }
    })
});