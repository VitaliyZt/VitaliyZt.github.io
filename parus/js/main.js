$(function(){	
	$("#phone-mask").mask("(099) 999-99-99");	

	$(".zoom-gallery").magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: { verticalFit: true	},
		gallery: { enabled: true },
		zoom: {
			enabled: true,
			duration: 300, 
			opener: function(element) {
				return element.find('img');
			}
		}
	});
	
	var sl7 = $(".p7-slider"), sl7_img = "<img src='img/p7-arrow.png'>";
	if(sl7.length) sl7.slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 8000,
		prevArrow: "<button type='button' class='slick-prev'>"+sl7_img+"</button>",
		nextArrow: "<button type='button' class='slick-next'>"+sl7_img+"</button>",
	});
	
	$(".p1").parallax({imageSrc: "img/p1-bg.jpg"});
	$(".p3-right").parallax({imageSrc: "img/p3-right.jpg"});
	$(".p5").parallax({imageSrc: "img/p5-bg.jpg"});
	$("footer").parallax({imageSrc: "img/footer-bg.jpg"});	

	$("body").scrollspy({ target: "#scrollspy-nav", offset: 88 });
	
	$("a[href^='#scr']").on("click", function(e){
		e.preventDefault();		
		var link = $(this), target = $(link.attr("href")),
			headerHeight = $("header>nav").outerHeight(),
			top = target.offset().top - headerHeight;
		$("html, body").stop().animate({scrollTop: top}, 800);
	});		
	
	$(window).on("scroll", function(){
		var nav = $("header>nav"), p1 = $(".p1");		
		if ($(window).scrollTop() > $(".header-top").height()){
			nav.addClass("navbar-fix");
			p1.css("margin-top", parseInt(nav.outerHeight()) + "px");
		} else {
			nav.removeClass("navbar-fix");
			p1.css("margin-top", "0");		
		}
	});		
});