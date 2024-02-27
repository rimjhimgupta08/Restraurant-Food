$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    nav:true,
    autoplay:true,
    autoplayTimeout: 2000,
//     navText:["<div class='nav-btn prev-slide '></div>","<div class='nav-btn next-slide'></div>"],
    //   navText: ["<img src='image/left-arrow.png' class= 'nav-btn1'>","<img src='image/rights.png' class='nav-btn2'>"],



    responsive:{
        0:{
            items:1,
            nav:true,
            dots:2

        },
        600:{
            items:2,
            nav:true,
            dots:2

        },
        1000:{
            items:3,
            nav:true
        }
    }
})
$( ".owl-prev").html('<i class="fa-solid fa-arrow-left nav-btn1"></i>');
 $( ".owl-next").html('<i class="fa-solid fa-arrow-right nav-btn2"></i>');

// $('.owl-carousel').owlCarousel({
//       nav: true,
//       navText: ["<img src='left-arrow.png'>","<img src='mynextimage.png'>"]
//     });