$(function(){
	
	//	фиксированое меню	
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
	
	
	$('#fullpage').fullpage({
		onLeave: function(index, nextIndex, direction){
			if (nextIndex == 1 || nextIndex == 8){
				$(".header-fix").hide();
				console.log(nextIndex);
			} else {
				$(".header-fix").show();
			}
		}
	});
	
	$('.sec-top i').click(function(e){
		e.preventDefault();
		$.fn.fullpage.moveSectionDown();
	});
	
	
	//	правое меню	- фикс
	$(".menur-menus>ul:first>li>a").each(function(){
		$(this).addClass("clearfix");
	});
	
	//	правое меню	- разворачивание
	(function(){
		var menu = $(".menur"), menuW = menu.width();
		$(".header-menu-btn").on("click", function(){
			if (parseInt(menu.css("right")) < 0){
				menu.css("right", 0);
				$(".menur-overlay").addClass("menur-open");
			}
//			else{
//				menu.css("right", -menuW);
//				$(".menur-overlay").removeClass("menur-open");
//			} 
		});
		$(".menur-close-btn, .menur-overlay").on("click", function(){
			menu.css("right", -menuW);
			$(".menur-overlay").removeClass("menur-open");
		});	
	})();
	
	//	хедер-меню - списки
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
	
	//	s4 - подстановка картинок по категориям	
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
	
	//	подстановка картинок в s4 по клику на лого 		
	$(".s3-brand").on("click", function(e){
		e.preventDefault();
		var imgSrc = $(this).find("img").attr("src");
		$(".s4-brand-tag>img").attr("src", imgSrc);		
		$(".s3-brand").each(function(){
			$(this).removeClass("active");
		});
		$(this).addClass("active");
	});
	
	//	центрируем по высоте маркер 
//	$(".sec-top").each(function(){
//		$(this).css("line-height", $(this).css("height"));
//	});	
	
	//	вывод новостей и объектов - фикс
	$(".news-blocks>div:nth-child(4n), .obj-blocks>div:nth-child(4n)")
		.after("<div class='clearfix'></div>");
	$(".s20-videos-slide>div:nth-child(4n)").after("<div class='clearfix'></div>");

	// выводим карту в модальном окне
	if ($(".s13").length)
	$(".s13-contacts-block:first-child>.s13-contact-link").magnificPopup({
		disableOn: 300,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
	
	// фейк - селекты
	$(".fake-sel").on("click", ".fake-sel-title", function(){
		var select = $(this), parent = select.parent(),	options = select.next();
		if(!parent.hasClass("opened")){		
			$(".fake-sel").each(function(){
				if ($(this).hasClass("opened")){
					$(this).removeClass("opened")
						.children(".fake-sel-list").slideUp("fast");
				}
			});	
			parent.addClass("opened");
			options.slideDown("fast");
			setTimeout(function(){
				if(parent.hasClass("opened"))
					options.slideUp("fast");
			}, 1e4);
		} else {
			parent.removeClass("opened");
			options.slideUp("fast");
		}
	});
	$(".fake-sel-option").on("click", function(){
		var option = $(this), options = option.parent(), txt = option.text(),
			content = option.parents(".fake-sel"), select = content.prev("select"),
			fakeselect = content.children(".fake-sel-title");
		options.slideUp("fast");
		fakeselect.text(txt);
		select.attr("value", txt);
	});	
	
	//	инпут - файл 
	$(document).on("change", ".uploaded-file", function(){
		var file = $(this).val();
		file = file.replace(/\\/g, "/").split('/').pop();
		$(this).next().text(file);
	});
	
	//	s20, s21 - слайдер 
	var s20Slider = $(".s20-videos"), s21Slider = $(".s21-objects");
	if (s20Slider.length)
		s20Slider.slick({slidesToShow: 1,arrows: false,dots: true});
	if (s21Slider.length)
		s21Slider.slick({slidesToShow: 1,arrows: false,dots: true});
	$(".s20 .slider-panel>i").on("click", function(){
		if($(this).is(":first-child"))
			s20Slider.slick("slickPrev");
		else s20Slider.slick("slickNext");
	});
	$(".s21 .slider-panel>i").on("click", function(){
		if($(this).is(":first-child"))
			s21Slider.slick("slickPrev");
		else s21Slider.slick("slickNext");
	});
	
	// таблица s22 - сабменю 
	$(".s22-brand-list>ul>li>a").on("click", function(e){
		e.preventDefault();
		var li = $(this).parent(), menu = li.find("ul");
		if(!menu.hasClass("+")){
			$(".s22-submenu").each(function(){
				if($(this).hasClass("+")) $(this).fadeOut("fast");
			});
			menu.addClass("+").slideDown();
//			setTimeout(function(){
//				if(menu.hasClass("+"))
//					menu.fadeOut("fast");
//			}, 1e4);
		} else
			menu.removeClass("+").slideUp();
	});
	
	// каталог-2, 3 - оборачиваем слово 'Серия' в span	
	$(".s24-left-title>span:nth-of-type(2), .s25-left-title>span:nth-of-type(2)")
	.each(function(){
		this.innerHTML = this.innerHTML.replace( /^(.+?\s)/, '<span>$1</span><br>');
	});
	
	// каталог 3 - попап галерея
	if ($(".s25-item-img").length)
	$(".s25-item-img").magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) { return item.el.attr('title'); }
		},
		gallery: { enabled: true },
		zoom: {
			enabled: true,
			duration: 300, 
			opener: function(element) {	return element.find('img');	}
		}
	});	
	// галерея 2 - попап галерея
	if ($(".s27").length)
		$(".s27-col").magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) { return item.el.attr('title'); }
		},
		gallery: { enabled: true },
		zoom: {
			enabled: true,
			duration: 300, 
			opener: function(element) {	return element.find('img');	}
		}
	});
	


});

$(window).load(function(){
	//	переход к след блоку по клику на маркер
	$("section:not('.s1') .sec-top>i").on("click", function(){
		var block = $(this).parents("section").next();
		var offset = $(block).offset().top;
		$("html, body").animate({scrollTop: offset - 57}, 500);
	});		
	$(".s1 .sec-top>i").on("click", function(){
		var offset = $(".header-fix").offset().top;
		$("html, body").animate({scrollTop: offset}, 500);
	});
	
	//	высота заливки новости (hover)
	$(".news-block").each(function(){
		var bg = $(this).find(".news-block-bg");
		bg.css("height", $(this).outerHeight());
	});
	$(".s16-items>li").each(function(){
		var bg = $(this).find(".s16-item-bg");
		bg.css("height", $(this).outerHeight());
	});
	
	//	положение белой полосы в s11 	
	if ($(".s11").length){
		var el = $(".news-blocks>.clearfix + div"), elH = el.offset().top + 129;
		$(".news-main-bg").css({"top": elH+"px", "display": "block"});
	}
	
	// таблица s22 - фикс
	var rightH = [], k = 0;
	$(".s22-brand-list").each(function(){
		rightH[k++] = $(this).outerHeight();
	});	k = 0;
	$(".s22-brand").each(function(){
		$(this).css("height", rightH[k++]);
	});
	
	// каталог - 2, 3 - высота левой рамки
	$(".s24-left, .s24-main").css("height", $(".s24-right").outerHeight());	
});





