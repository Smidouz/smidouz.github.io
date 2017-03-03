$(function() {

	// Slider Script ---------------------------------

	$(".counter-slider").owlCarousel({
		items : 1,
		smartSpeed : 0,
		URLhashListener: true,
		startPosition: 'URLHash'
	});

	$(".features-slider").owlCarousel({
		items : 1,
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
	
	// Finish ----------------------------------------

	$(".accordeon dd").hide().prev().click(function(){
		$(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
		$(this).next().not(":visible").slideDown().prev().addClass("active");
	});

	$(".twentytwenty-container").twentytwenty();

	$("a[href*='#']").mPageScroll2id({
		offset : 90
	});

});

