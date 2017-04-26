$(function(){});

$(window).load(function(){
	$(".s7-block").each(function(){
			var bg = $(this).find(".s7-block-bg");
			bg.css("height", $(this).outerHeight());
		}
	);
});