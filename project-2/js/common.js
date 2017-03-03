$(function() {

	// _____________________________________________Slider Script ---------------------------------

	$(".counter-slider").owlCarousel({
		items : 1,
		smartSpeed : 0,
		URLhashListener: true,
		startPosition: 'URLHash'
	});

	$(".features-slider").owlCarousel({
		animateOut: 'slideOutDown',
		animateIn: 'flipInX',
		items : 1,
		center : true,
		loop : true,
		smartSpeed : 600,
		nav : true
	});

	$(".our-franchisee-slider").owlCarousel({
		items : 1,
		nav : false,
		smartSpeed : 0,
		URLhashListener: true,
		startPosition: 'URLHash'
	});
	
	// ________________________________________________Finish ----------------------------------------

	$(".accordeon dd").hide().prev().click(function(){
		$(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
		$(this).next().not(":visible").slideDown().prev().addClass("active");
	});

	$(".twentytwenty-container").twentytwenty();

	$("a[href*='#']").mPageScroll2id({
		offset : 90
	});

	//-------------------------------------------burger-menu
	$('.burger-menu').on('click', function() {
		if ($(this).hasClass("burger-menu-clicked")) {
			$(this).removeClass("burger-menu-clicked");
			$(this).addClass("burger-menu-closing");
		} else {
			$(this).addClass("burger-menu-clicked");
			$(this).removeClass("burger-menu-closing");
		}
	});

	$(".burger-menu").click(function(){
		$(".menu-items").slideToggle();
	});

	//________________________________________
	//______________________________________________________Animate CSS 

	$(".main-menu img").animated("pulse");
	$("h2").animated("flipInY");
	$(".pizza-factory img").animated("bounceInLeft");
	$(".pizza-factory h4").animated("bounceInRight");
	$(".pizza-factory p").animated("bounceInRight");
	$(".pizza-factory__btn").animated("bounceInRight");

	$(".features-1 img").animated("rotateInUpRight");
	$(".features-1__service h3").animated("bounceInLeft");
	$(".features-1__service p").animated("bounceInLeft");
	$(".features-1__service ul").animated("bounceInLeft");

	$(".features-2 img").animated("bounceInLeft");
	$(".features-1__service h3").animated("bounceInLeft");
	$(".features-1__service p").animated("bounceInLeft");
	$(".features-1__service ul").animated("bounceInLeft");
	$(".features-2--red").animated("bounceInRight");

	// $(".features-3").animated("zoomIn");

	$(".features-4").animated("flipInX");
	$(".features-4__desc").animated("bounceInRight");

	$(".features-5 img").animated("bounceInLeft");
	$(".features-5__desc h3").animated("bounceInRight");
	$(".features-5__desc p").animated("bounceInRight");
	$(".features-5__desc ul").animated("bounceInRight");

	$(".features-6 h3").animated("bounceInLeft");
	$(".features-6 p").animated("bounceInLeft");
	$(".features-6 ul").animated("bounceInLeft");
	$(".features-6 img").animated("bounceInRight");

	$(".family-cafe").animated("bounceInLeft");
	$(".solutions img").animated("bounceInRight");
	$(".solutions .accordeon").animated("bounceInLeft");
	$(".costs__desc").animated("bounceInRight");

	$(".btn-phone").animated("tada");

	//_____________________________________________________________magnificPopup

	$(".pizza-factory__btn").magnificPopup({
		type:'inline'
	});

	$(".btn-phone").magnificPopup({
		type:'inline'
	});

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$(".callback-form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});

