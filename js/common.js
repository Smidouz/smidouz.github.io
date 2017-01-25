$(function() {

	$(".toggle_menu").click(function() {
		$(this).toggleClass("on");
		$(".main_menu").slideToggle();
	});

	/*Scroll Function*/

	$(".header_sliders .explore_btn").click(function(){
		$("html, body").animate({ scrollTop: $(".creative_features").height()+500 }, "slow");
	});

	/*CSS Animation Qjs*/
	$(".four_option .option_1").animated("zoomIn");
	$(".four_option .option_2").animated("zoomIn");
	$(".four_option .option_3").animated("zoomIn");
	$(".four_option .option_4").animated("zoomIn");
	// $(".common_sect h2").animated("fadeInLeft");
	

	/*SCRIPT START Одиночное появление с добавлениеm классов*/

	$(".features_items").waypoint(function(){
		$(".features_items .features_item").each(function(index) {
			var ths = $(this);
			setInterval(function(){
					ths.addClass("on");		
			}, 250*index);
			
		});
		
	}, {
		offset : "500"
	});

	/*Карусель Слайдов*/
	$(".service_slider").owlCarousel({
		items : 1,
		// loop : true,
		// autoplay: true,
		URLhashListener:true,
		autoplaySpeed : 1200,
		navSpeed : 1200,
		dotsSpeed : 1200,
		dragEndSpeed : 1200
	});

	$(".work_slider").owlCarousel({
		items : 1,
		nav : true,
		// loop : true,
		// autoplay: true,
		// URLhashListener:true,
		// center : true,
		// margin : -20,
		autoplaySpeed : 1200,
		navSpeed : 1200,
		dotsSpeed : 1200,
		dragEndSpeed : 1200
	});

	/*jQuery Simple Equal Heights*/
	$(".service_menu a").equalHeights();

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

	$(".work_menu_wrap a").click(function(){
		event.preventDefault();
		// alert ("Work")
	});

	$(".work_slid a").click(function(){
		event.preventDefault();
		// alert ("Work")
	});

	/*Gallery MagnificPopup*/
	$(".work_slid_img").magnificPopup({
  	type: 'image',
  	gallery:{
    	enabled:true
  	}
	});


	/*для всех якорей на сайте, плавный переход*/
	$(document).ready(function() {
		$('a[href^="#"]').click(function(){
			var el = $(this).attr('href');
			$('body').animate({ scrollTop: $(el).offset().top}, 800);
			return false;
			});
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

/*Lightbox gallery*/

