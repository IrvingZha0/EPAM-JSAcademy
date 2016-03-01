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
