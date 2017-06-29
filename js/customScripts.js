; (function () {    
    $(document).ready(function () { 
			var windowWidth = $(window).width();
    	if(windowWidth > 768){
				$(".nav").find(".active").removeClass("active");
				$('a[href="' + location.pathname + '"]').closest('li.dropdown.mega-menu-fullwidth').find('.menu-pointer').css('display', 'block');
				
				$('.multiple-items-solutions').slick({
					infinite: true,
					slidesToShow: 6,
					slidesToScroll: 1,
					autoplay: true,
					autoplaySpeed:3000,
					arrows: true
				});

				$('.multiple-items').slick({
					infinite: true,
					slidesToShow: 7,
					slidesToScroll: 1,
					autoplay: true,
					autoplaySpeed:3000,
					arrows: true
				});
			}

			else{
				$('.multiple-items-solutions').slick({
					infinite: true,
					slidesToShow: 3,
					slidesToScroll: 1,
					autoplay: true,
					autoplaySpeed:3000,
					arrows: true
				});

				$('.multiple-items').slick({
					infinite: true,
					slidesToShow: 5,
					slidesToScroll: 1,
					autoplay: true,
					autoplaySpeed:3000,
					arrows: true
				});
			}
		});
		}
)();