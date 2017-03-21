$(function(){
	
// слайдер
	if($("#s9-slider").length) {
		$("#s9-slider").slick({
			arrows: true,
			autoplay: true,
			autoplaySpeed: 7000,
			speed: 500,
			fade: false,
			cssEase: 'linear',
			prevArrow: "<a href='#' class='s9-btn s9-btn-left'><img src='img/s9-shape.png'></a>",
			nextArrow: "<a href='#' class='s9-btn s9-btn-right'><img src='img/s9-shape.png'></a>"
		});	
	}

	var slidervert = $(".s5-vert-slider");
	if(slidervert.length) {
		slidervert.slick({
			autoplay: true,
			autoplaySpeed: 5000,
			fade: true,
			arrows: false
		});	
	}

	var slider = $(".s5-slider");
	if(slider.length) {
		slider.slick({
			autoplay: true,
			arrows: false,
			autoplaySpeed: 5000,
			fade: true,
			prevArrow: "<a href='#' class='slick-prev'><i class='fa fa-caret-left'></i></a>",
			nextArrow: "<a href='#' class='slick-next'><i class='fa fa-caret-right'></i></a>"
		});	
		s5sliderRows();
	}

	// анимация перелета картин
//	$(window).on("scroll", function(){
//		
//		var img = $(".s4-img"),  start = $(".s4-img-box").offset().top,
//			scrolle = $(this).scrollTop(), arrows = $(".s5-slider > .slick-arrow");
//		
//		if (scrolle > start - 150){
//			img.css("animation", "move 2s ease-in-out");			
//			setTimeout(function(){
//				if (slider.slick("slickCurrentSlide") == 0){
//					slider.slick("slickNext");
//					slider.slick("slickPlay");
//					s5sliderRows();
//					arrows.css("color", "#fff");
//				}
//			}, 2800);
//		} 	
//		else {
//			img.css("animation", "none");
//			arrows.css("color", "#000");
//			slider.slick("slickGoTo", 0);
//			slider.slick("slickPause");
//		}		
//	});	

	// стрелки влево-вправо в слайдере ставим ровно
	function s5sliderRows(){
		var rows = $(".s5-slider .slick-arrow");
		var sliderHeight = $(".s5-slide").height();
		rows.css("line-height",sliderHeight + "px");
	}
	$(window).on("resize, scroll", function(){
		s5sliderRows();
	});		
	
	
// меняем container на container-fluid у блоков
	function contChange(elem){		
		var width = $(window).width(), el = $(elem);		
		if (elem == "#s2-container" || elem == "#s10-container"){
			if ( width >= 1200 ) el.attr("class","container");
			else el.attr("class","container-fluid");
		}
		if (elem == "#s8-container" || elem == "#s11-container" || elem == "#footer-container"){
			if ( width >= 975 ) el.attr("class","container");
			else el.attr("class","container-fluid");
		}
	}
	var items = ["#s2-container", "#s8-container", "#s10-container", "#s11-container", "#footer-container"];
	for(var i=0; i<items.length; i++) contChange(items[i]);
	$(window).resize(function(){
		for(var i=0; i<items.length; i++) contChange(items[i]);
	});	
	
// ставим высоту кнопки у слайдера	
	function btnHeight(param){		
		var btn = $(".s9-btn"), sliderH = $(".s9").height();
		if (param === true && $(window).width() < 992)	sliderH += 9;
		btn.css("line-height", sliderH + "px");		
	}
	btnHeight(true);
	$(window).resize(function(){ btnHeight(false); });	
	
// видео-фон
	$(".s1").vide({
		mp4: "video-bg/1.mp4",
		webm: "",
		ogv: "",
		poster: "video-bg/s1-bg.jpg"
	},{
		volume: 1,
		playbackRate: 1,
		muted: true,
		loop: true,
		autoplay: true,
		position: '50% 50%', 
		posterType: 'jpg',
		bgColor: 'transparent', 
		className: ''
	});
	
	
	
	
});