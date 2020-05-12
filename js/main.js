$(function(){
    $('.slider').slick({
        nextArrow: '<button class="slick__arrow slick__next"><img src="images/next.svg" alt="next arrow"></button>',
        prevArrow: '<button class="slick__arrow slick__prev"><img src="images/prev.svg" alt="next arrow"></button>',
        responsive: [
            {
                breakpoint: 441,
                settings: {
                    arrows: false
                }
            }
        ]
    });
});
    
