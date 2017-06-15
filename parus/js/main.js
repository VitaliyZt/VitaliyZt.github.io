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
	
});