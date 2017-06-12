$(function(){
	var img = $(".bg-effect-img"), cls = "effected";
	img.addClass(cls);
	setInterval(function(){
		img.toggleClass(cls);
	}, 10000);
});