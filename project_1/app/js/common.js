$(function() {

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
	});

	$(".arrow-botton").click(function(){
		$("html, body").animate({ scrollTop: $(".section-1").height()-450 }, "slow");
		return false;
	});

	$(".button-home").click(function(){
		$("html, body").animate({ scrollTop: $(".main-mnu").height() }, "slow");
		return false;
	});

	$(".section-content .info-item").equalHeights();
	$(".section-content-bottom .info-item").equalHeights();
	$(".s3-content .s3-info-item").equalHeights();
	$(".section-8 .s8-item").equalHeights();

	/*Animate CSS Script START*/

	$(".section-1 .info-item").animated("zoomIn");
	$(".section-3 .s3-info-item").animated("zoomIn");
	

	/*Animate CSS Script END*/


	/*SCRIPT START Одиночное появление с добавлениеm классов*/
	$(".section-2").waypoint(function(){
		$(".s2-content .s2-item").each(function(index) {
			var ths = $(this);
			setInterval(function(){
					ths.addClass("on");		
			}, 150*index);
			
		});
		
	}, {
		offset : "5%"
	});

	$(".section-4").waypoint(function(){
		$(".section-4 .card").each(function(index) {
			var ths = $(this);
			setInterval(function(){
					ths.removeClass("card-off").addClass("card-on");		
			}, 150*index);
			
		});
		
	}, {
		offset : "5%"
	});

	$(".section-4 .section-button").waypoint(function(){
		$(".triangle-container .tc-item").each(function(index) {
			var ths = $(this);
			setInterval(function(){
					ths.addClass("on");		
			}, 50*index);
			
		});
		
	}, {
		offset : "5%"
	});

	$(".section-6").waypoint(function(){
		$(".section-6 .team").each(function(index) {
			var ths2 = $(this);
			setInterval(function(){
					ths2.removeClass("team-off").addClass("team-on");		
			}, 150*index);
			
		});
		
	}, {
		offset : "5%"
	});

	/*Script END Одиночного появления */

	/*Карусель Слайдов*/
	$(".slider").owlCarousel({
		items : 1,
		nav : true,
		navText : "",
		autoplay : true,
		loop : true,
		autoplaySpeed : 1200,
		navSpeed : 1200,
		dotsSpeed : 1200,
		dragEndSpeed : 1200
	});

	/*Magnific Popup*/
	$(".section-button .btn").click(function(){
		$("#callback h4").html($(this).text());
	}).magnificPopup({
	type:"inline",
	mainClass: 'mfp-forms'
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../mail.php", //Change
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

/*Script Scrol Anchor код на якоря  -------------------*/

  $('a[href*="#"]:not([href="#"])').click(function() {
  	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    	var target = $(this.hash);
    	target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    	if (target.length) {
      	$('html, body').animate({
        	scrollTop: target.offset().top
      	}, 1000);
      	return false;
    	}
  	}
	});

  /*Finished Script Scrol Anchor ------------------*/

});
