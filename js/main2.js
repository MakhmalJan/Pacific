// Make it rain!!!
// When the user clicks the button (#showModal)
  // Fade in the modal (.modal-background)
//$('#drinks').hide();


$('.hamburger').on('click', function() {
  $('.nav-links').addClass('active');
});

$('.close').on('click', function() {
  $('.nav-links').removeClass('active');

});

$('#make-reservation').on('click', function() {
  $('.reservation-background').fadeIn(300);
});

    // When the user clicks the close button (#close)
      // Fade out the modal (.modal-background)
$('#close').on('click', function() {
  $('.reservation-background').fadeOut(300);
});

$('#images').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

    // When the user clicks .show-drinks
$('.show-drinks').on('click', function (event) {
  event.preventDefault();

      // Hide #brunch and #dinner
  $('#show-brunch').hide();
  $('#show-dinner').hide();

      // Fade in #drinks
  $('#show-drinks').fadeIn(300);
});



    // When the user clicks .show-drinks
$('.show-brunch').on('click', function (event) {
  event.preventDefault();

  $('#show-drinks').hide();
  $('#show-dinner').hide();

  $('#show-brunch').fadeIn(300);
});



    // When the user clicks .show-drinks
$('.show-dinner').on('click', function (event) {
  event.preventDefault();

  $('#show-brunch').hide();
  $('#show-drinks').hide();

  $('#show-dinner').fadeIn(300);
});
