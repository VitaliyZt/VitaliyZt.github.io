$(function(){
	$(".s1-slider").slick({	slidesToShow: 1	});		
	$(".s2-blocks").slick({
		slidesToShow: 3,
		responsive: [{
		breakpoint: 960,
		settings: {	slidesToShow: 1	}
		}]
	});		
	$(".s7-blocks").slick({
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
	$(".s10-slider, .s12-slider").slick({
		slidesToShow: 1,
		dots: true
	});	
	$(".s10-slider-thumb").on("click", function(){
		$(".s10-slider").slick("slickGoTo", $(this).index());
	});	
	$(".s12-slider-thumb").on("click", function(){
		$(".s12-slider").slick("slickGoTo", $(this).index());
	});	

	$("#time-1").ionRangeSlider({
		min: 1,
		max: 120,
		from: 5,
		step: 1,
		postfix: " дн."
	});
	$("#time-2").ionRangeSlider({
		min: 1,
		max: 120,
		from: 7,
		step: 1,
		postfix: " ч."
	});	
	$("#range-1").ionRangeSlider({
		hide_min_max: true,
		min: 1,
		max: 10,
		from: 4,
		step: 1,
		onChange: function(){
			var val = $(".s8-range-box:nth-child(1) .irs-single").text();
			$(".s8-range-box:nth-child(1) .s8-range-value").text(val);
		}
	});
	$("#range-2").ionRangeSlider({
		hide_min_max: true,
		min: 1,
		max: 10,
		from: 4,
		step: 1,
		onChange: function(){
			var val = $(".s8-range-box:nth-child(2) .irs-single").text();
			$(".s8-range-box:nth-child(2) .s8-range-value").text(val);
		}
	});
	$("#range-3").ionRangeSlider({
		hide_min_max: true,
		min: 1,
		max: 100,
		from: 80,
		step: 1,
		onChange: function(){
			var val = $(".s8-range-box:nth-child(3) .irs-single").text();
			$(".s8-range-box:nth-child(3) .s8-range-value").text(val);
		}
	});
	$("#s13time-1").ionRangeSlider({
		hide_min_max: true,
		min: 1,
		max: 120,
		from: 5,
		step: 1,
		postfix: " дн."
	});
	$("#s13time-2").ionRangeSlider({
		hide_min_max: true,
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
	
	if($("#map").length){		
		ymaps.ready(init);
		var myMap, myPlacemark;
		function init(){     
			myMap = new ymaps.Map("map", {
				center: [55.76707457, 37.56832700],
				zoom: 16,
				controls: []
			});
			myPlacemark = new ymaps.Placemark([55.76717457, 37.57132700], {
				iconCaption: 'Малая Грузинская ул., 27/13'
			},{
				preset: 'islands#redDotIconWithCaption'			
			});		
			myMap.geoObjects.add(myPlacemark);
			myMap.behaviors.disable('scrollZoom'); 	
		}
	}
	
	var scrollEl1 = $(".s10-slider-thumbs");
	if (scrollEl1.length){	
		scrollEl1.each(function(){			
			$(this).niceScroll({
				autohidemode: false,
				horizrailenabled: false,
				cursorfixedheight: 105,
				cursorcolor: "#959595",
				cursorwidth: 8,
				cursorborder: 0,
				cursorborderradius: "0px",
				background: "#e3e3e3",
				railoffset: {left: 24}
			});
		});
	}	
	var scrollEl2 = $(".s12-slider-thumbs");
	if (scrollEl2.length){	
		scrollEl2.each(function(){			
			$(this).niceScroll({
				autohidemode: false,
				horizrailenabled: false,
				cursorfixedheight: 105,
				cursorcolor: "#959595",
				cursorwidth: 8,
				cursorborder: 0,
				cursorborderradius: "0px",
				background: "#e3e3e3",
				railoffset: {left: 22}
			});
		});
	}
	$(".s8-tag").on("click", function(){
		$(this).remove();
	});
	$(".s13-filt-close-btn").on("click", function(){
		$(".s13-filters").slideUp();
	});
	$(".s13-top-btn, .s13-top-search-btn").on("click", function(){
		$(".s13-filters").slideDown();
	});
	$(".s15-filt-close-btn").on("click", function(){
		$(".s15-filters").slideUp();
	});
	$(".s15-top-search-btn").on("click", function(){
		$(".s15-filters").slideDown();
	});
	
	if($(".datepicker").length){
		$(".datepicker").datepicker({
			numberOfMonths: [1, 1],
			beforeShowDay: function(date) {
				var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#input1").val());
				var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#input2").val());
				return [true, date1 && ((date.getTime() == date1.getTime()) || (date2 && date >= date1 && date <= date2)) ? "dp-highlight" : ""];
			},
			onSelect: function(dateText, inst) {
				var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#input1").val());
				var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#input2").val());
				var selectedDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, dateText);

				if (!date1 || date2) {
					$("#input1").val(dateText);
					$("#input2").val("");
					$(this).datepicker();
				} else if (selectedDate < date1) {
					$("#input2").val($("#input1").val());
					$("#input1").val(dateText);
					$(this).datepicker();
				} else {
					$("#input2").val(dateText);
					$(this).datepicker();
				}
			}
		});
	}

});


