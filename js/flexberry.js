!function(){function e(e){var l=-250*e+250+"px",a="translate(0px,"+l+")";$(".slides").css({"-ms-transform":a,"-webkit-transform":a,transform:a}),e-=1,$(".flex-control-nav li:eq("+e+")").find("a").addClass("flex-active")}$(document).ready(function(){var s=$(".slides");$(".flex-control-nav").find("a").on("click",function(){$(".flex-active").removeClass("flex-active"),$(".flex-active-slide").removeClass("flex-active-slide"),$(this).addClass("flex-active");var i=$(this).text();e(i),s.find("li").eq(i-1).addClass("flex-active-slide"),clearInterval(a),setTimeout(function(){a=setInterval(l,5e3)})})});var l=function(){var l=$(".slides li.flex-active-slide"),a=l.next("li");$(".flex-active").removeClass("flex-active"),l.removeClass("flex-active-slide"),a.length>0?(a.addClass("flex-active-slide"),e(a.attr("data-slide"))):($(".slides li:first").addClass("flex-active-slide"),e(1))},a=setInterval(l,5e3)}();