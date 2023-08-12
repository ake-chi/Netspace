
//slide menu
$('.menu-btn').on('click', function () {
    $('.slide-menu').addClass("open");
    $('body').addClass("disable");
  });
  
  $('.close-btn p').on('click', function () {
    $('.slide-menu').removeClass("open");
    $('body').removeClass("disable");
  });


//AOS

AOS.init({ disable: 'mobile'});

// Tilt

$('.vrglassTilt').tilt({
    perspective:    1000// Transform perspective, the lower the more extreme the tilt gets.
});