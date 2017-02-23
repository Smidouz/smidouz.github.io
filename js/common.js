$(function() {

	$('.multiscroll').multiscroll({
		verticalCentered : true,
		scrollingSpeed: 700,
		menu: "main-menu",
		anchors: ["project-1", "project-2", "project-3"],
		sectionsColor: [],
		css3: true,
		paddingTop: 0,
		paddingBottom: 0,
	});

});

//____________________________________________________ Script Window Height  & Resize
$(document).ready(function(){

	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function(){
		heightDetect();
	});

});

//_____________________________________________________________ jQoery Page Preload
$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(600).fadeOut("slow"); 
});

