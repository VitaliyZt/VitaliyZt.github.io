$(".collapsecircle").click(function() {
	var cont = $(this).parent().children(".cat-catalog"),
		icon = $(this).find("i");
	$(".cat-catalog").fadeOut('fast');
	$(".circle>i").each(function(){
		if($(this).hasClass("fa-times"))
			$(this).removeClass("fa-times").addClass("fa-plus")
				.parent().css("z-index", 0);
	});
	if (!cont.is(":visible")){
		icon.removeClass("fa-plus").addClass("fa-times")
			.parent().css("z-index", 2);
		cont.fadeIn();
	} else {
		cont.fadeOut();
		icon.removeClass("fa-times").addClass("fa-plus");
	}
});

$(document).ready(function() {
    $(".bottom-main-cat-container").hide();
});
$(".panelp").show();
$(".coollp").click(function() {
    $(this).children(".panelp").toggle();
});

$(".coollp").click(function() {
    $(this).find("i").toggleClass('fa-angle-up fa-angle-down');
});

$(".collapse_tabs").click(function() {
    $(this).parent().children(".tabs-content-inner").toggle('slow');
});
$(".collapse_tabs").click(function() {
    $(this).find("i").toggleClass('fa-chevron-down fa-chevron-up');
});

//accordion
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }
}

jQuery(document).ready(function() {
    jQuery('.product-mainimage-slider').slick({
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 1200,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        infite: true,
        prevArrow: '<i class="fa fa-chevron-left slick-prev" aria-hidden="true"></i>',
        nextArrow: '<i class="fa fa-chevron-right slick-next" aria-hidden="true"></i>',
        responsive: [{
            breakpoint: 1024,
            settings: {
                //slidesToShow: 3,
                //slidesToScroll: 3,
                //infinite: true,
            }
        }, {
            breakpoint: 768,
            settings: {
                //slidesToShow: 3,
                //slidesToScroll: 1
            }
        }, {
            breakpoint: 320,
            settings: {
                //slidesToShow: 2,
                //slidesToScroll: 1.
                dots: true,
                arrows: false
            }
        }]
    });
});
jQuery(document).ready(function() {
    jQuery('.product-page-related_product-slider').slick({
        dots: false,
        arrows: true,
        //autoplay: true,
        autoplaySpeed: 1200,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        infite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '',
        nextArrow: '<i class="fa fa-chevron-right slick-next" aria-hidden="true"></i>',
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '24%'
            }
        }]
    });
});

if (document.documentElement.clientWidth < 768) {
///sort menu on tablet/mobile
$(document).ready(function() {
    $(".product-sort>ul").hide();
    $(".product-sort").click(function() {
        $(".product-sort>ul").toggle();
    });
    $(".product-sort").click(function() {
    $(this).find("i").toggleClass('fa-angle-up fa-angle-down');
});
});
///filter menu on tablet/mobile; backlink click
$(document).ready(function() {
    $(".product-category-filter").hide();
    $(".product-filter").click(function() {
        $(".product-category-filter").show();
    });
    $(".product-filter-backlink").click(function() {
        $(".product-category-filter").hide();
    });

});
}

//////////////////////////////////////////////////
$(window).on("scroll", function() {
	if(!$(".wrapper").hasClass("prod-page")){
		var menu = $(".header-fixed"),	begin = $("header").height();
		if (screen.width > '768' && $(window).width() > '768'){
			if ($(this).scrollTop() > begin && !menu.hasClass("scrolled"))
				menu.addClass("scrolled").fadeIn(300);
			if ($(this).scrollTop() <= begin && menu.hasClass("scrolled")) {			
				menu.removeClass("scrolled").fadeOut(0);
			}
		}
	}
});
$(window).on("resize", function(){
	if ($(window).width() < '769')
		$(".header-fixed").show();
	else 
		$(".header-fixed").hide();
});

if ($(".home-slider").length){
	$(".home-slider").slick({
		dots: true,
		autoplay: false,
		autoplaySpeed: 10000,
		arrows: false,
	});
}

var slider2 = ".home-partial-product-slider-content";
if ($(slider2).length)
	$(slider2).slick({
		centerMode: true,
		variableWidth: true,
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 1
	});



// каталог продукции (отк - закр)
$(".bottom-mc-link>a").on("click", function(){
	var cols = $(".bm-cols");
	if (!cols.hasClass("colsClosed")){
		cols.addClass("colsClosed");
		cols.slideUp();
		$(this).text("Развернуть");
	} else {
		cols.removeClass("colsClosed");
		cols.slideDown();
		$(this).text("Свернуть");
	}
	$(this).next("i").toggleClass('fa-caret-up fa-caret-down');
	return false;
});

// подробнее категория  (отк - закр)
$(".header-category-list>li:not(:last)").on("click", function(){	
	var li = $(this), cname = "moreActive",
	more = li.find(".header-category-list-more");
	$(".header-category-list>li").each(function(){
		if($(this).hasClass(cname)){
			$(this).removeClass(cname)
				.find(".header-category-list-more").fadeOut();
		}
	});
	if(!li.hasClass(cname) && !more.is(":visible")){
		li.addClass(cname);
		more.fadeIn();
	} else {
		li.removeClass(cname);
		more.fadeOut();
	}
});

// каталог товаров в меню (отк - закр)
var timer1;
$(".catalog-menu-mini > a").on("click", function(){
	var btn = $(this), cname = "menuOpen", img = btn.find("img"),
		src1 = "img/menu-icon-hamburger.png", src2 = "img/menu-close.png",
		list = $(".header-fixed .header-category");
	function listOpen(){
		btn.addClass(cname);
		img.attr("src", src2);
		list.slideDown();
	}
	function listClose(){
		btn.removeClass(cname);
		img.attr("src", src1);
		list.slideUp();
	}
	if (!btn.hasClass(cname) && !list.is(":visible")){
		listOpen();
		clearInterval(timer1);
		timer1 = setTimeout(function(){
			if(btn.hasClass(cname)) listClose();
		}, 10000);
	} else {
		listClose();
	}
	return false;
});

(function(){
	function zoom(){
		var el = $("#viewport"),
			ww = window.screen.width, mw = 768, ratio = ww/mw;
		if (ww<mw){ 
			el.attr('content', 'initial-scale='+ratio+', maximum-scale='+ratio+', minimum-scale='+ratio+', user-scalable=no, width='+mw);
		} else {
			el.attr('content', 'initial-scale=1.0, maximum-scale=1, minimum-scale=1.0, user-scalable=yes, width='+ ww);
		}
	}
	window.addEventListener('resize', function(){ zoom(); });
	zoom();
}());

var timer2, clas = 'disable-hover', $body = $('body');
$(window).scroll(function() {
	clearTimeout(timer2);
	if (!$body.hasClass(clas)) {
		$body.addClass(clas);
	}
	timer2 = setTimeout(function(){
		$body.removeClass(clas);
	},500);
});




















