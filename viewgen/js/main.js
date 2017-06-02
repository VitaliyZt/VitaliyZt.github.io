$(function(){	
	if ($(".s9-stories>div").length > 3){
		var btn = "<button class='s9-stories-btn'><img src='img/s9-btn.png'></button>";
		$(".s9-stories").slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: false,
			autoplaySpeed: 2000,
			prevArrow: btn,
			nextArrow: btn,
			responsive: [{
				breakpoint: 768,
				settings: {	slidesToShow: 1	}
			}]
		});
	}
	
	
});

