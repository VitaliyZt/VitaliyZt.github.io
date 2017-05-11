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

	if ($("#modal").length){
		$("svg a").magnificPopup({
			type: 'inline',	
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});
	}
	
	$(".room-link").on("click", function(){
		var roomId = $(this).attr("id"),
		stage = roomId.charAt(1), room = roomId.charAt(2);
		$("#room-img").attr("src", "img/rooms/"+stage+"/"+room+".png");
		$("#room-num").text(room);
		$(".room-descr>div>div").hide();
		var roomTextId = "#room"+stage+room;
		var roomSquare = $(roomTextId+">span:nth-child(1)>span").text();
		$("#room-square").text(roomSquare);
		$(roomTextId).show();
	});
	
	$(window).load(function(){
		if($(".s1").length){
			$(".ng-scope").removeClass("container");
			console.log("+");
		} else {
			$(".ng-scope").addClass("container");
			console.log("-");
		}

	});
	
	
});