
$('.exp-slider').slick({
    centerMode: true,    
    centerPadding: '0',
    slidesToShow: 3,
    // adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 1500,
    // useTransform: true,
    cssEase: 'ease-out',
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 575,
        settings: {
          autoplay: false,          
          cssEase: 'ease',
          arrows: true,
          // prevArrow: '<span class="fa fa-chevron-left left">',   
          // nextArrow: '<span class="fa fa-chevron-right right">',        
          slidesToShow: 1
        }
      }
    ]
  });

  $('.testimonials-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear'
  });


  $('.games-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    centerMode: true,
    variableWidth: true,
    infinite: true,
    focusOnSelect: true,
    cssEase: 'ease-out',
    touchMove: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 575,
        settings: {          
          arrows: false,  
          autoplay: true,
          autoplaySpeed: 2000,
          cssEase: 'ease-out',
          centerMode: true,   
          slidesToShow: 1,
          dots: true
        }
      }
    ]
  });


  
var imgs = $('.games-slider img');
imgs.each(function(){
  var item = $(this).closest('.game');
  item.css({
    'background-image': 'url(' + $(this).attr('src') + ')', 
    'background-position': 'center',            
    '-webkit-background-size': 'cover',
    'background-size': 'cover', 
  });
  $(this).hide();
});


