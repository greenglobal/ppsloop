$(window).ready(function() {
  var Width = $(window).innerWidth();

  $('.banner-slider-content').slick({
    infinite: false,
    fade: true,
    speed: 1200,
    asNavFor: '.banner-nav-slider',
    autoplaySpeed: 5000,
    autoplay: true,
    vertical: false,
    slidesToShow: 1,
    swipeToSlide: false,
    slidesToScroll: 1,
    dots: false,
    cssEase: 'linear',
    arrows: true,
    pauseOnHover: true,
    pauseOnFocus: true,
    touchMove: false,
    responsive: [
    {
      breakpoint: 1026,
      settings: {
        infinite: false,
        dots: false,
        arrows: false,
      }
    }]
  });

  $('.banner-nav-slider').slick({
    asNavFor: '.banner-slider-content',
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    pauseOnHover: true,
    pauseOnFocus: true,
    touchMove: false,
    centerMode: false,
    focusOnSelect: true
  });

  $('.detail-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    pauseOnHover: true,
    pauseOnFocus: true,
    touchMove: false,
    centerMode: false
  });

  $('.filter-select').select2();
  $('.btn-menu-mobile').on('click', function(){
    $('.btn-menu-mobile, .menu-top').toggleClass('active');
    $('html body').toggleClass('menu-active');
  });

  slickEffect('banner-slider-content','slider-effect','slick-active','center','banner-slider-items');
  if (Width < 767) {
    $('.detail-slider').slick('unslick');
    var ourRightContent = $('.detail-container .featured-block .featured-content .content-block .right-content').height();
    $('.detail-container .featured-block .featured-content .content-block .item-description:last-child').css({'margin-top': ourRightContent + 30});
  } else {
    $('.detail-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      pauseOnHover: true,
      pauseOnFocus: true,
      touchMove: false,
      centerMode: false
    });
  }
});

$(window).resize(function(){
  var Width = $(window).innerWidth();

  if (Width < 767) {
    $('.detail-slider').slick('unslick');    
    var ourRightContent = $('.detail-container .featured-block .featured-content .content-block .right-content').height();
    $('.detail-container .featured-block .featured-content .content-block .item-description:last-child').css({'margin-top': ourRightContent + 30})
  } else {
    $('.detail-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      pauseOnHover: true,
      pauseOnFocus: true,
      touchMove: false,
      centerMode: false
    });
  }
});

function slickEffect(slider, mainclass, sliderActive, itemsEffect, sliderItems) {
  var datain = "";
  var dataout = "";
  $('.' + sliderItems + ' .' + itemsEffect).addClass('hidden');
  $('.' + sliderActive + ' .' + itemsEffect).removeClass('hidden');
  $('.' + mainclass).each(function(i) {
    datain = $(this).attr('data-in');
    $('.' + sliderActive).removeClass('hidden');
    $('.' + sliderActive).addClass('first');
    $(this).addClass('animated');
    $(this).addClass('animated');
    $(this).addClass(datain);
  });
  $('.' + slider).on('afterChange', function(event, slick, currentSlide, nextSlide){
    $('.' + mainclass+',.' + mainclass+ ' .' + mainclass).each(function(i) {
      datain = $(this).attr('data-in');
      dataout = $(this).attr('data-out');
      $(this).removeClass(dataout); 
      $(' .' + mainclass).removeClass('animated-out');
      $(this).addClass(datain);
    });
    $('.' + sliderItems + ' .' + itemsEffect).addClass('hidden');
    $('.' + sliderActive + ' .' + itemsEffect).removeClass('hidden');
  });

  $('.' + slider).on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('.' + mainclass+',.' + mainclass+ ' .' + mainclass).each(function(i) {
      datain = $(this).attr('data-in');
      dataout = $(this).attr('data-out');
      $(this).removeClass(datain);
      $(this).addClass(dataout);
      $(this).addClass('animated-out');
      $('.' + sliderActive).removeClass('first');
    });
  });
}