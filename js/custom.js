$('document').ready(function(){
  //Adjust Header height
  $('.header').height($(window).height());
  $(window).resize(function(){
    $('.header').height($(window).height());
  });
  $('.links li a').on('click' , function(){
    $(this).addClass('active').siblings().removeClass('active');
  });

  $('.bxslider').bxSlider({
    pager : false,
  });
  // Smmoth Scroll
  $('.links li a').on('click' , function(){
        $('html,body').animate({
          scrollTop : $('#' + $(this).data('value')).offset().top
        },1000);
  });
  //Start My own slidre
  (function myslider(){
    $('.testmonials .slider .active').each(function(){
      if(!$(this).is(':last-child')){
        $(this).delay(2000).fadeOut(2000 , function(){
          $(this).removeClass('active').next().addClass('active').fadeIn(2000);
          myslider();
        });
      }else {

        $(this).delay(3000).fadeOut(1000 ,function(){
          $(this).removeClass('active').fadeOut(1000, function(){
            $('.slider div:first-child').addClass('active').fadeIn();
            myslider();
          } );

        })
      }
        });

  }());
  // End Myown Slider
  var mixer = mixitup('.row');
  //nicescroll
  $("body").niceScroll();

});
