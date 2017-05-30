  // $(window).on('scroll', function(){

  //   /*------------- Scroll to Top -----------------*/
  //     // Scroll to top
  //     console.log($(this).scrollTop());
  //     if ($(this).scrollTop() > 1500) {
  //       $('#scroll-to-top').fadeIn('slow');
  //     } else {
  //       $('#scroll-to-top').fadeOut('slow');
  //     }
  //   });


  // $('#scroll-to-top').click(function(){
  //   $("html,body").animate({ scrollTop: 0 }, 1500);
  //   return false;
  // });


  $(document).ready(function() {

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
        mainClass: 'mfp-fade',
        gallery:{
          enabled:true
        }
    });


    /*------------------------- Tooltipster ----------------------------*/
    $('.tooltipster').tooltipster({
      animation: 'grow',
      theme: 'tooltipster-borderless',
      side: 'right'
    });


    /*------------------------- Portfolio Slider ----------------------------*/

    var heroSlider = $('#hero-slider'),
    itemSlider = $('#friends-slider');

    heroSlider.owlCarousel({
        loop: true,
        dots: false,
        autoplay : true,
        autoplayHoverPause : true,
        nav: true,
        navText: ['<span class="fa fa-chevron-left"></span>','<span class="fa fa-chevron-right"></span>'],
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
      autoplay : true,
      autoplayHoverPause : true,
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