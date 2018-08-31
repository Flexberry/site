; (function () {
  $(document).ready(function () {
    $(".nav-mini").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
        top = $(id).offset().top-30;
      $('body,html').animate({scrollTop: top}, 1000);
    });

    $('.multiple-items-solutions').slick({
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed:3000,
      arrows: true,
      nextArrow:'<a class="fa fa-angle-right fa-3x nextArrow" aria-hidden="true"></a>',
      prevArrow:'<a class="fa fa-angle-left fa-3x prevArrow" aria-hidden="true"></a>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
      ]
    });

    $('.multiple-items').slick({
      infinite: true,
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed:3000,
      arrows: true,
      nextArrow:'<a class="fa fa-angle-right fa-3x nextArrow" aria-hidden="true"></a>',
      prevArrow:'<a class="fa fa-angle-left fa-3x prevArrow" aria-hidden="true"></a>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        }
      ]
    });

    var windowWidth = $(window).width();
    if(windowWidth > 768) {
      $(".nav").find(".active").removeClass("active");
      $('a[href="' + location.pathname + '"]').closest('li.dropdown.mega-menu-fullwidth').find('.menu-pointer').css('display', 'block');
    }
  });
})();