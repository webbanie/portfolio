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



   var webDev = new Vue({
  el: '#websites',
  data: {
    items: [
      { 
        title: "Etudes et Chantiers",
        descriptive: "Études et Chantiers is a French non-profit organization created in 1962 that develops, through its regional associations (AREC), volunteer projects, in France and abroad, as well as projects to fight against exclusions.",
        descriptive_2: "Études et Chantiers has developed European and international partnerships with 123 associations in 73 countries. She is a member of several French, European and international associations.",
        image : 'site003',
        link : 'http://etudesetchantiers.org',
      },
      { 
        title: "Paris Kinshasa Express",
        descriptive: "The PKE collective brings together a dozen artists (France, Congo, Togo, Japan), old singers of the Congolese scene or from the new generation.",
        descriptive_2: "Revisiting the Congolese music, these explorer-ambiancers agree to ring together a modern and mixed rumba, texts combining derision and gravity, in Lingala and French.",
        image : 'site002',
        link : 'https://www.pariskinshasaexpress.com/fr/',
      },
      { 
        title: "Banlieues-Creative",
        descriptive: "Banlieues-Creative is a blog that promotes artistic creativity, the associative environment and the entrepreneurial ecosystem of Paris and its suburbs.",
        descriptive_2: "The platform publishes video footage reports produced partly by young people from the Hauts-de-Seine and Seine-St Denis neighborhoods.",
        image : 'site001',
        link : 'http://banlieues-creatives.org/',
      },
      { 
        title: "Allonz enfants de la balle",
        descriptive: "Ici toutes les règles des activités",
        image : 'site004',
        link : 'https://webbanie.github.io/allonz-enfants/',
      },
    ]
  }
});

  if($(window).width() > 768){

    $('.owl-carousel .item').on( "mouseenter", function() {
      $(this).css( "background-color", "#c9b5c47a" );
      $('.item-text .text-summary').css({
       "background-color": "#c9b5c47a",
       "color": "white" });
      $('.item-text .click-me').show().fadeIn( "slow");
    }).on( "mouseleave", function() {
      $(this).css( "background-color", "initial" );
      $('.item-text .text-summary').css({
       "background-color": "initial",
       "color": "black" });
      $('.item-text .click-me').hide();
    });
  };

  // Owl-carousel
   $('#video .owl-carousel, #websites .owl-carousel').owlCarousel({
        items:1,
        merge:true,
        loop:true,
        margin:0,
        video:true,
        nav:true,
        dots:false,
    });



   if($(window).width() > 1300){
    $('#photo .owl-carousel').owlCarousel({
        items:3,
        merge:true,
        loop:true,
        margin:10,
        nav:true,
        dots:false,
      });
    }else{
      if($(window).width() > 768){

        $('#photo .owl-carousel').owlCarousel({
          items:2,
          merge:true,
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        });
      }else{
        $('#photo .owl-carousel').owlCarousel({
          items:1,
          merge:true,
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        });
      };
    };

  var iframe = $('iframe');
  var player = new Vimeo.Player(iframe);


  $('.owl-carousel .owl-nav button').click(function() {
    //alert('stoped');
    player.off('play');
  });


$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var title = button.data('title') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var recipient = button.data('img')
  var modal = $(this)
  modal.find('.modal-title').text(title)
  modal.find('.modal-body img').attr("src", recipient)
});



}); //close document ready


})(jQuery); // End of use strict

