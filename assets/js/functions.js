  // jQuery(window).bind('scroll', function (){
  //   if (jQuery(window).scrollTop() > 175){
  //     jQuery('#main-menu').addClass('navbar-fixed-top').removeClass('topnavbar').slideDown(175);
  //     jQuery('#page-top').addClass('bodytopmargin').removeClass('bodynomargin');
  //   } else {
  //     jQuery('#main-menu').removeClass('navbar-fixed-top').addClass('topnavbar').slideDown(175);
  //     jQuery('#page-top').removeClass('bodytopmargin').addClass('bodynomargin');
  //   }
  // });

//   $('#main-menu').affix({
//       offset: {
//         top: $('header').height()
//       }
// });



  jQuery(window).on('scroll', function($){
    "use strict";

    /*------------- Scroll to Top -----------------*/
      // Scroll to top
      if (jQuery(this).scrollTop() > 100) {
        jQuery('#scroll-to-top').fadeIn('slow');
      } else {
        jQuery('#scroll-to-top').fadeOut('slow');
      }
    });


  $('#scroll-to-top').click(function(){
    $("html,body").animate({ scrollTop: 0 }, 1500);
    return false;
  });


  $(function() {

  // All elements
  $('body').fontFlex(12, 14, 18);

  
});


  jQuery(document).ready(function() {

    "use strict";

    // Fixed menu
    if( $('body').hasClass('header-fixed-top') ){
      $(window).scroll(function(){
        if( $(window).scrollTop()>200 ){
          $('header').addClass('sticky animated fadeInDown');
        }
        else{
          $('header').removeClass('sticky animated fadeInDown');
        }
      });
    }

    /*------------------------- Magnific Popup ----------------------------*/

    $('#home-gallery a').magnificPopup({
        type:'image',
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });

    /*------------------------- Portfolio Slider ----------------------------*/

    var heroSlider = $('#hero-slider'),
    itemSlider = $('#friends-slider');

    heroSlider.owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        responsive:{
            0:{
                items: 1
            },
            1000:{
                items: 1
            }
        }
    });

    itemSlider.owlCarousel({
      loop:true,
      // nav:true,
      dots: false,
      // autoplay : true,
      // autoplayHoverPause : true,
      responsiveClass:true,
      responsive:{
          0:{
              items:1
          },
          450:{
              items:2
          },
          600:{
              items:2
          },
          700:{
              items:3
          },
          1000:{
              items:4
          },
          1200:{
              items:5
          }
      },
      responsiveRefreshRate : 200,
      responsiveBaseElement: window
    });

});