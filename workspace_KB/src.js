$(document).ready(function(){

	$("#rice").click(function(){

		/*$(this).toggleClass("on");*/
		$(this).toggleClass("button-primary");
		$("#noodle").removeClass("button-primary");
		$("#pizza").removeClass("button-primary");

		/*$("section div.rice").slideToggle();*/
		$("article.pizza").hide();
		$("article.noodle").hide();
		$("article.rice").slideToggle();


	});


	$("#noodle").click(function(){

		$(this).toggleClass("button-primary");
		$("#rice").removeClass("button-primary");
		$("#pizza").removeClass("button-primary");

		$("article.pizza").hide();
		$("article.noodle").slideToggle();
		$("article.rice").hide();
	});


	$("#pizza").click(function(){

		$(this).toggleClass("button-primary");
		$("#rice").removeClass("button-primary");
		$("#noodle").removeClass("button-primary");

		/*$("section img.pizza").slideToggle();*/
		$("article.pizza").slideToggle();
		$("article.noodle").hide();
		$("article.rice").hide();
	});

});
// Or use the update codes
/*$(document).ready(function() {*/
/*
	$(".menuButtons").delegate( "button", "click", function() {
		$(this).toggleClass( "button-primary" ).siblings().removeClass("button-primary");
		var className = $(this).data("food");
		$("."+className).fadeToggle().siblings().hide();
	});

	// $("#CF").click(function() {
	// 	$(this).toggleClass("button-primary");
	// 	$("#JF").removeClass("button-primary");
	// 	$("#DF").removeClass("button-primary");
	//   	$(".CF").fadeToggle();
	//   	$(".JF").hide();
	//   	$(".DF").hide();
	// });

	// $("#JF").click(function() {
	// 	$(this).toggleClass("button-primary");
	// 	$("#CF").removeClass("button-primary");
	// 	$("#DF").removeClass("button-primary");
	//   	$(".JF").fadeToggle();
	//   	$(".CF").hide();
	//   	$(".DF").hide();
	// });

	// $("#DF").click(function() {
	// 	$(this).toggleClass("button-primary");
	// 	$("#CF").removeClass("button-primary");
	// 	$("#JF").removeClass("button-primary");
	//   	$(".DF").fadeToggle();
	//   	$(".CF").hide();
	//   	$(".JF").hide();
	// });

});*/