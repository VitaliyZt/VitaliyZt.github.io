$(function(){
	$(".s1-slider").slick({	slidesToShow: 1	});
	$(".s2-blocks").slick({	slidesToShow: 3	});
	$(".s3-slider").slick({	slidesToShow: 1	});
	




		$("#time-1").ionRangeSlider({
			keyboard: true,
			min: 1,
			max: 120,
			from: 5,
			step: 1,
			postfix: " дн."
		});
		$("#time-2").ionRangeSlider({
			keyboard: true,
			min: 1,
			max: 120,
			from: 7,
			step: 1,
			postfix: " ч."
		});


});


