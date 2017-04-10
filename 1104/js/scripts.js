$(document).ready(function(){
	
	function foo(scrollTo){
		return $('html, body').stop().animate({ scrollTop: $(scrollTo).offset().top }, "slow");
	}
	$(".whatisit-link").on("click", function(){
		foo(".whatisit");
	});
	$(".aboutus-link").on("click", function(){
		foo(".aboutus");
	});
	$(".portfolio-link").on("click", function(){
		foo(".portfolio");
	});
	$(".steps-link").on("click", function(){
		foo(".steps");
	});
	$(".rates-link, .footer-rates-link").on("click", function(){
		foo(".rates");
	});
	$(".bonus-link").on("click", function(){
		foo(".bonus");
	});
	$(".footer-link").on("click", function(){
		foo(".footer");
	});
	$(".request-link, .footer-request-link").on("click", function(){
		foo(".request");
	});
	
	$(".portfolio-btn").on("click", function(){
		var hidden = $(".portfolio-hidden-blocks");
		if( hidden.hasClass('expanded') ){
			hidden.removeClass('expanded');
			$('body').stop().animate({ scrollTop: $(".portfolio-blocks").offset().top });
			$(this).text('больше проектов');
		}	
		else {
			hidden.addClass('expanded');
			$(this).text('свернуть');
		}
		return false;		
	});	
	
	$('#scrollUp').on("click", function(){
		$('body,html').animate({scrollTop:0},800);
	});	
	$(window).on("scroll", function(){
		if($(this).scrollTop() > 2000)
			$('#scrollUp').fadeIn();
		else
			$('#scrollUp').fadeOut();
	});

	$(window).on("scroll", function(){
		var menu = $("#menu"), begin = 100;			
		function toggleClasses(){
			menu.toggleClass("default").toggleClass("scrolled");
			$(".header-menu").toggleClass("header-menu-scrolled").toggleClass("header-menu-default");
		}
		if ( $(this).scrollTop() > begin && menu.hasClass("default") )        
			toggleClasses();
		if ( $(this).scrollTop() <= begin && menu.hasClass("scrolled") ) 
			toggleClasses();
	});
	
	$("#form").on("submit", function(e){
		e.preventDefault();
		var name = $(this).children().find("#name").val();
		var phone = $(this).children().find("#phone").val();
		var email = $(this).children().find("#email").val();
		$.ajax({
			url: "https://formspree.io/info@alakris.ru",
			method: "POST",
			data: {
				Имя: name,
				Телефон: phone,
				Почта: email,
				_subject: ">>> Заявка с сайта!",
				_format: "plain"
			},
			dataType: "json",
			beforeSend: function() {}
		}).done(function(){	
		}).fail(function(){
			alert("!");
		}).always(function(){
			setTimeout('location.replace("http://zakazatlending.ru/thanks.html")',1000); 
		});
	});
	
	new WOW().init();
	
	lightbox.option({
		'fitImagesInViewport': false,
		'showImageNumberLabel': false,
		'wrapAround': true,
		'alwaysShowNavOnTouchDevices': false
	})

	$('.request-btn').hover(
       function(){ $(this).addClass('throb') },
       function(){ $(this).removeClass('throb') }
	);	
	

	function showRates(img){
		var elem = $(img);
		if(elem.is(':visible'))
			return elem.fadeOut();
		elem.fadeIn();
	}	
	$(".select-1, .select-2, .select-3, .select-4").on("click", function(e){
		e.preventDefault();
		$(this).toggleClass("arrow-blue");
		if ($(this).hasClass("select-1"))	showRates('.select-1-after');
		if ($(this).hasClass("select-2"))	showRates('.select-2-after');
		if ($(this).hasClass("select-3"))	showRates('.select-3-after');
		if ($(this).hasClass("select-4"))	showRates('.select-4-after');
	});	
	
});
			
