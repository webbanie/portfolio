(function($) {
  "use strict"; // Start of use strict

  $(document).ready(function(){

    $(document).on('click', '[data-toggle="lightbox"]:not([data-gallery="navigateTo"]):not([data-gallery="example-gallery-11"])', function(event) {
      event.preventDefault();
      return $(this).ekkoLightbox({
        onShown: function() {
          if (window.console) {
            return console.log('Checking our the events huh?');
          }
        },
      });
    });


  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

  // Owl-carousel
   if($(window).width() > 768){
      $("#websites .owl-carousel").owlCarousel({
        loop:true,
        margin:15,
        nav:true,
        items :3, 
        responsiveClass:true,  
      });
    }else{
      $("#websites .owl-carousel").owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items :1, 
        responsiveClass:true,   
        });
    };

   $('#video .owl-carousel, #photo .owl-carousel').owlCarousel({
        items:1,
        merge:true,
        loop:true,
        margin:0,
        video:true,
        nav:true,
    })


})


})(jQuery); // End of use strict

