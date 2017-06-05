$(function(){	
	if ($(".s9-stories>div").length > 3){
		var btn = "<button class='s9-stories-btn'><img src='img/s9-btn.png'></button>";
		$(".s9-stories").slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 7000,
			prevArrow: btn,
			nextArrow: btn,
			responsive: [{
				breakpoint: 768,
				settings: {	slidesToShow: 1	}
			}]
		});
	}
	
	$(".header-menu>li>a:not(:last)").on("click", function(){
		var link = $(this),	headerHeight = $("header>nav").outerHeight(),
		top = $(link.attr("href")).offset().top - headerHeight;		
		$(".header-menu>li").removeClass("active");
		link.parent().addClass("active");		
		$("html, body").animate({scrollTop: top}, "slow");
		return false;
	});
	
	$(window).on("load resize", function(){
		$("header").css("height", $("header>nav").outerHeight());
	});

});

