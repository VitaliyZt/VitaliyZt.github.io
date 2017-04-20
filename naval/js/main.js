$(function(){
	$(".n2-slides").slick({
		prevArrow: "<button class='n2-left'><i class='fa fa-chevron-left'></i></button>",
		nextArrow: "<button class='n2-right'><i class='fa fa-chevron-right'></i></button>"
	});
	
	$(".leftcol-menu>li>a").on("click", function(e){
		e.preventDefault();
		var currentBlock = $(this).attr("href");
		var	currentBlockOffset = $(currentBlock).offset().top;
		$("html, body").animate({scrollTop: currentBlockOffset}, 500);
	});
});