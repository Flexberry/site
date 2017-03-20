; (function () {
    
    $(document).ready(function () {               

        var $slider = $(".slides");
        $('.flex-control-nav').find('a').on('click', function () {
            $(".flex-active").removeClass("flex-active");
            $(".flex-active-slide").removeClass("flex-active-slide");
            $(this).addClass('flex-active');
            var val = $(this).text();
            setPositionSlide(val);
            $slider.find("li").eq(val-1).addClass("flex-active-slide");

            clearInterval(myInterval);

            setTimeout(function () {
              myInterval = setInterval(nextSlide, 5000);
            });

        });
    });

    function setPositionSlide(val) {
        var positionY = val * (-250) + 250 + "px";
        var cssPropertyForTransform = "translate(0px," + positionY + ")";
        $(".slides").css({
            "-ms-transform": cssPropertyForTransform,
            "-webkit-transform": cssPropertyForTransform,
            "transform": cssPropertyForTransform
        });
        val = val - 1;
        $(".flex-control-nav li:eq(" + val + ")").find('a').addClass('flex-active');
    }

    var nextSlide = function() {
        var $active = $('.slides li.flex-active-slide');
        var $activeNext = $active.next('li');
        $(".flex-active").removeClass("flex-active");
        $active.removeClass('flex-active-slide');
        if ($activeNext.length > 0) {
            $activeNext.addClass('flex-active-slide');
            setPositionSlide($activeNext.attr('data-slide'));

        } else {
            $('.slides li:first').addClass('flex-active-slide');
            setPositionSlide(1);
        }
    };

    var myInterval = setInterval(nextSlide, 5000);

    var removeOpenedSubmenu = function() {
        menuItems.each(function () {
            $(this).removeClass().next('ul').hide();
        });
    };
}
)();