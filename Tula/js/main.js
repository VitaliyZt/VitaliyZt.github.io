$(function(){
	$(".s1-slider").slick({	slidesToShow: 1	});	
	
	$(".s2-blocks").slick({
		slidesToShow: 3,
		responsive: [{
		breakpoint: 960,
		settings: {	slidesToShow: 1	}
		}]
	});	
	
	$(".s3-slider").slick({	slidesToShow: 1	});
	
	$(".s4-blocks").slick({
		slidesToShow: 3,
		responsive: [{
		breakpoint: 960,
		settings: {	slidesToShow: 1	}
		}]
	});	

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

	(function(){
		function zoom(){
			var el = $("#viewport"),
				ww = window.screen.width, mw = 580, ratio = ww/mw;
			if (ww<mw){ 
				el.attr('content', 'initial-scale='+ratio+', maximum-scale='+ratio+', minimum-scale='+ratio+', user-scalable=no, width='+mw);
			} else {
				el.attr('content', 'initial-scale=1.0, maximum-scale=1, minimum-scale=1.0, user-scalable=yes, width='+ ww);
			}
		}
		window.addEventListener('resize', function(){ zoom(); });
		zoom();
	}());	

});


