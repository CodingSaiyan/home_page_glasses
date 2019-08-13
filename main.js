$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

  var owl = $('.owl-carousel');
  owl.owlCarousel({
      loop: false,
      nav:false,
      dots: false,
      fluidSpeed: 1,
      margin:10,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },            
          960:{
              items:4
          }
      }
  });
  $('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})
