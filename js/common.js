$(function() {

	$(".toggle_menu").click(function() {
		$(this).toggleClass("on");
		$(".main_menu").slideToggle();
	});

	/*Scroll Function*/
	$("#Features").click(function(){
		$("html, body").animate({ scrollTop: $(".creative_features").height()+500 }, "slow");
	});

	$(".header_sliders .explore_btn").click(function(){
		$("html, body").animate({ scrollTop: $(".creative_features").height()+500 }, "slow");
	});

	/*CSS Animation Qjs*/
	// $(".header_sliders h1").animated("fadeInRight");
	// $(".header_sliders h2").animated("fadeInLeft");
	// $(".header_sliders h3").animated("fadeInLeft");
	// $(".header_sliders .explore_btn").animated("bounceInUp");
	// $(".header_sliders .purchase_btn").animated("bounceInUp");
	$(".common_sect h2").animated("flipInX");
	

	/*SCRIPT START Одиночное появление с добавлениеm классов*/
	$(".four_option").waypoint(function(){
		$(".four_option .option").each(function(index) {
			var ths = $(this);
			setInterval(function(){
					ths.addClass("on");		
			}, 300*index);
			
		});
		
	}, {
		offset : "500"
	});

	$(".features_items").waypoint(function(){
		$(".features_items .features_item").each(function(index) {
			var ths = $(this);
			setInterval(function(){
					ths.addClass("on");		
			}, 150*index);
			
		});
		
	}, {
		offset : "500"
	});

	/*jQuery Simple Equal Heights*/
	// $('.four_option .option').equalHeights();

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	/*Отмена событий перехода по ссылке*/
	$(".main_menu a").click(function(){
		event.preventDefault();
		// alert ("Work")
	});

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
