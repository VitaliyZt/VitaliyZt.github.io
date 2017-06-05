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
	
	$(window).on("load resize", function(){
		$("header").css("height", $("header>nav").outerHeight());
	});
	
	$(".header-menu>li>a:not(:last), .footer-menu>li>a:not(:last)")
		.on("click", function(e){
		e.preventDefault();		
		var link = $(this), target = $(link.attr("href")),
			headerHeight = $("header>nav").outerHeight(),
			targetPadding = parseInt(target.css("padding-top")) - 20,
			top = target.offset().top - headerHeight + targetPadding;
		$("html, body").stop().animate({scrollTop: top}, 800);
	});	
	$(window).on("scroll", function(){
		$("[id^='scr']").each(function(i,el){
			var top  = $(el).offset().top - 120,
				bottom = top + $(el).height(),
				scroll = $(window).scrollTop(),
				id = $(el).attr('id');
			if( scroll > top && scroll < bottom){
				$(".header-menu .active").removeClass("active");
				if($(window).scrollTop() + $(window).height() == $(document).height()) {
					$(".header-menu a[href='#scr5']").parent().addClass("active");
				} else {
					$(".header-menu a[href='#"+id+"']").parent().addClass("active");
				}
			}
		});
	});
	
});