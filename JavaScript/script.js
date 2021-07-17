
$(document).ready(function(){
    $('.carousel1').slick({
        dots: true,
        speed: 500,
        fade: true,
        infinite: true,
        cssEase: 'linear',
        verticalSwiping: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });
    $('.carousel2').slick({
        dots: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 3,
                speed: 500,
                cssEase: 'linear',
                centerMode: true,
                variableWidth: true
            }
          }
        ]
    });
    $('.carousel3').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 576,
          settings: {
              slidesToShow: 1,
              speed: 500,
              dots: true,
              autoplay: true,
              autoplaySpeed: 2000,
          }
        }
      ]
    });
  });
  