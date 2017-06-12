$(function(){
	var img = $(".bg-effect-img"), cls = "effected";
	img.addClass(cls);
	setInterval(function(){
		if (!img.hasClass(cls)){
			img.addClass(cls);
		} else {
			img.removeClass(cls);
		}
	}, 10000);
});