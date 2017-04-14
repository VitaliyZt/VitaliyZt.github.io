$(function(){
	$(".s1-slider").slick({
		dots: true,
		prevArrow: "<i class='s1-slide-left fa fa-angle-left'></i>",
		nextArrow: "<i class='s1-slide-right fa fa-angle-right'></i>"
	});
	
	$(".prod-cols").slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: true,
		prevArrow: "<i class='prod-cols-left fa fa-angle-left'></i>",
		nextArrow: "<i class='prod-cols-right fa fa-angle-right'></i>"
	});
	
	
});