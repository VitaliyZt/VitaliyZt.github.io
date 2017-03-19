$(function(){
	$(".header-menu > li > a").on("click", function(){
		var link = $(this), li = link.parent(), lis = $(".header-menu > li");
		if (!li.hasClass("active")){
			lis.removeClass("active");
			li.addClass("active");
		}
	});
	
	if ($(".modal-country-btn").length)	$(".modal-country-btn").magnificPopup({type: 'inline'});
	if ($(".modal-form-btn").length) $(".modal-form-btn").magnificPopup({type: 'inline'});
	if ($(".modal-form-2-btn").length) $(".modal-form-2-btn").magnificPopup({type: 'inline'});	
	
	$(".modal-form-back-btn").on("click", function(){
		$.magnificPopup.close();
	});
	
	new WOW().init();
});

