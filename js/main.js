$(function(){
	$(".header-menu > li > a").on("click", function(){
		var link = $(this), li = link.parent(), lis = $(".header-menu > li");
		if (!li.hasClass("active")){
			lis.removeClass("active");
			li.addClass("active");
		}
	});
});