//DOM load event

//DOM load event
window.addEventListener("DOMContentLoaded", () => {

    const spotlight = document.querySelector('.spotlight');

    let spotlightSize = 'transparent 160px, rgba(0, 0, 0, 0.85) 200px)';

    window.addEventListener('mousemove', e => updateSpotlight(e));

    window.addEventListener('mousedown', e => {

        spotlightSize = 'transparent 130px, rgba(0, 0, 0, 0.95) 150px)';

        updateSpotlight(e);

    });

    window.addEventListener('mouseup', e => {

        spotlightSize = 'transparent 160px, rgba(0, 0, 0, 0.85) 200px)';

        updateSpotlight(e);

    });

    function updateSpotlight(e) {

        spotlight.style.backgroundImage = `radial-gradient(circle at ${e.pageX / window.innerWidth * 100}% ${e.pageY / window.innerHeight * 100}%, ${spotlightSize}`;

    }
});

// window.addEventListener("DOMContentLoaded", () => {

//     var bodyHeader = $('header');

//     const spotlight = document.querySelector('.spotlight');

//     let spotlightSize = 'transparent 160px, rgba(0, 0, 0, 0.85) 200px)';

//     window.addEventListener('mousemove', e => updateSpotlight(e));

//     window.addEventListener('mousedown', e => {

//         spotlightSize = 'transparent 130px, rgba(0, 0, 0, 0.95) 150px)';

//         updateSpotlight(e);

//     });

//     window.addEventListener('mouseup', e => {

//         spotlightSize = 'transparent 160px, rgba(0, 0, 0, 0.85) 200px)';

//         updateSpotlight(e);

//     });

//     function updateSpotlight(e) {

//         spotlight.style.backgroundImage = `radial-gradient(circle at ${e.pageX / bodyHeader.innerWidth * 100}% ${e.pageY / bodyHeader.innerHeight * 100}%, ${spotlightSize}`;

//     }
// });

// var bodyHeader = $('header');

// var bodyHeader_width = $(bodyHeader).width() - $('#h1').width();

// var document_height = $(document).height() - $(bodyHeader).height();

// $(function () {
//     $(bodyHeader).scroll(function () {
//         var scroll_position = $(bodyHeader).scrollTop();
//         var h1_position_left = bodyHeader_width * (scroll_position / document_height);
//         $('#h1').css({
//             'left': object_position_left
//         });
//     });
// });

// $(bodyHeader).scroll(function () {
//     $("#h1").css("opacity", 1 - $(bodyHeader).scrollTop() / 200);
// });
// $(bodyHeader).scroll(function () {
//     $("#h2").css("opacity", 1 - $(bodyHeader).scrollTop() / 500);
// });
// $(bodyHeader).scroll(function () {
//     $("#h3").css("opacity", 1 - $(bodyHeader).scrollTop() / 800);
// });

// var bodyHeader_width = $(bodyHeader).width() - $('#h1').width();

// var document_height = $(document).height() - $(bodyHeader).height();

// $(function () {
//     $(bodyHeader).scroll(function () {
//         var scroll_position = $(bodyHeader).scrollTop();
//         var h1_position_left = bodyHeader_width * (scroll_position / document_height);
//         $('#h1').css({
//             'left': object_position_left
//         });
//     });
// });

// $(bodyHeader).scroll(function () {
//     $("#h1").css("opacity", 1 - $(bodyHeader).scrollTop() / 200);
// });
// $(bodyHeader).scroll(function () {
//     $("#h2").css("opacity", 1 - $(bodyHeader).scrollTop() / 500);
// });
// $(bodyHeader).scroll(function () {
//     $("#h3").css("opacity", 1 - $(bodyHeader).scrollTop() / 800);
// });

// var bodyHeader_width = $(bodyHeader).width() - $('#object').width();

// var document_height = $(document).height() - $(bodyHeader).height();

// $(function () {
//     $(bodyHeader).scroll(function () {
//         var scroll_position = $(bodyHeader).scrollTop();
//         var object_position_left = bodyHeader_width * (scroll_position / document_height);
//         $('#object').css({
//             'left': object_position_left
//         });
//     });
// });

// $(bodyHeader).scroll(function () {
//     $("#object").css("opacity", 2.8 - $(bodyHeader).scrollTop() / 250);
// });


// $(bodyHeader).scroll(function () {
//     $("#ball").css("opacity", 1 - $(bodyHeader).scrollTop() / 200);
// });