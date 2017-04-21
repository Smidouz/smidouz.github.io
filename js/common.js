$(function() {

	$('#pagepiling').pagepiling({
		menu: null,
		direction: 'vertical',
		verticalCentered: true,
		sectionsColor: [],
		anchors: [],
		scrollingSpeed: 300,
		easing: 'swing',
		loopBottom: false,
		loopTop: false,
		css3: true,
		// navigation: {
		// 	'textColor': '#000',
		// 	'bulletsColor': '#000',
		// 	'position': 'right',
		// 	'tooltips': ['section1', 'section2', 'section3', 'section4']
		// },
		navigation: false,
		normalScrollElements: null,
		normalScrollElementTouchThreshold: 5,
		touchSensitivity: 5,
		keyboardScrolling: true,
		sectionSelector: '.section',
		animateAnchor: false,

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
	});

});




