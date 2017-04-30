$(function(){	
	$(window).on("scroll", function(){
		var menu = $(".header-fix"), begin = $(".s1").height();
		var menuH = menu.outerHeight();
		if ($(this).scrollTop() > begin && !menu.hasClass("scrolled"))        
			if (screen.width > '991' && $(window).width() > '991'){
				menu.addClass("scrolled");
				$(".s1").css({"marginBottom": menuH});	
			}			
		if ($(this).scrollTop() <= begin && menu.hasClass("scrolled")){
			menu.removeClass("scrolled");
			$(".s1").removeAttr("style");
		} 		
	});
	

	
	$(".menur-menus>ul:first>li>a").each(function(){
		$(this).addClass("clearfix");
	});

	var menu = $(".menur"), menuW = menu.width();
	$(".header-menu-btn").on("click", function(){
		if (parseInt(menu.css("right")) < 0)
			menu.css("right", 0);
		else 
			menu.css("right", -menuW);
	});
	$(".menur-close-btn").on("click", function(){
		menu.css("right", -menuW);
	});	
	
	
	$(".header-phones-list>li>a").on("click", function(){
		var numb = $(this).text();
		$(".header-phone>span").text(numb);
		phones.slideUp();
	});		
	$(".header-lang-list>li>a").on("click", function(){
		var lng = $(this).text();
		$(".header-lang-switch").text(lng);	
		lngs.slideUp();
	});	
	
	var phones = $(".header-phones-list");
	$(".header-phones").hover(
		function(){	if (!phones.is(":visible"))	phones.slideDown();	},
		function(){ if (phones.is(":visible")) phones.slideUp(); }	
	);	
	var lngs = $(".header-lang-list");
	$(".header-lang").hover(
		function(){	if (!lngs.is(":visible")) lngs.slideDown();	},
		function(){ if (lngs.is(":visible")) lngs.slideUp(); }	
	);
	
	
	$(".s4-menu>li:even>a").hover(
		function(){
			$(".s4-left-img>img").attr("src", "img/s4/s4-bg.png");
		}, function(){}
	);
	$(".s4-menu>li:odd>a").hover(
		function(){
			$(".s4-left-img>img").attr("src", "img/s4/s4-bg-2.png");
		}, function(){}
	);
	
	$(".s3-brand").on("click", function(e){
		e.preventDefault();
		var imgSrc = $(this).find("img").attr("src");
		$(".s4-brand-tag>img").attr("src", imgSrc);		
		$(".s3-brand").each(function(){
			$(this).removeClass("active");
		});
		$(this).addClass("active");
	});
	
	
	

	
	
	
	
	
	
	
});

$(window).load(function(){
	$(".s7-block").each(function(){
			var bg = $(this).find(".s7-block-bg");
			bg.css("height", $(this).outerHeight());
		}
	);
		
	$("section:not('.s1') .sec-top>i").on("click", function(){
		var block = $(this).parents("section").next();
		var offset = $(block).offset().top;
		$("html, body").animate({scrollTop: offset - 69}, 500);
	});
		
	$(".s1 .sec-top>i").on("click", function(){
		var offset = $(".header-fix").offset().top;
		$("html, body").animate({scrollTop: offset}, 500);
	});

});