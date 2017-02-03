$(function() {
	/*Script Menu-------------------------*/
	$("#toggle").click(function() {
		$(this).toggleClass("on");
		$("#menu").toggleClass("on");
		$(".toggle_wrap").toggleClass("on");
	});
	/*------------------- Finish Script Menu*/

	/*Owl Carousel ------------------------*/
  $(".about_me_slider").owlCarousel({
  	items : 1,
  	nav : true,
		URLhashListener:true,
		autoplaySpeed : 1200,
		navSpeed : 1200,
		dotsSpeed : 1200,
		dragEndSpeed : 1200
  });
  /*Script Scrol Anchor -------------------*/
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

	/*Animate CSS*/
	$(".mouse_scroll ").animated("fadeInDown");

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
