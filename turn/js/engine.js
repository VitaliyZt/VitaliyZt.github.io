$(function(){
	$(window).on("scroll", function(){
		var el = $("header"), begin = el.find("nav").outerHeight();
		if (screen.width > '768' && $(window).width() > '768'){
			if ($(this).scrollTop() > begin && !el.hasClass("scrolled")){
				el.addClass("scrolled");
			}
			if ($(this).scrollTop() <= begin && el.hasClass("scrolled")){
				el.removeClass("scrolled");
			} 	
		}			
	});
	
	$(window).on("scroll", function(){		
		var st = $(this).scrollTop();
		$(".s1").css({
			"background-position": "center " + st/2 + "px", 
		})
	});
});