$(function(){
	$("#foo1_client").carouFredSel({
		circular: true,
		infinite: true,
		items : 1,
		scroll: {
		fx: 'crossfade'
		},
	auto: {
		play: true,
		pauseDuration: 5000,
		duration: 1000
		}
	}); 
	
/* 	$("#foo2").carouFredSel({
		circular: false,
		infinite: false,
		items : 3,
		auto : false,
		prev : {	
			button	: "#foo2_prev",
			key		: "left"
		},
		next : { 
			button	: "#foo2_next",
			key		: "right"
		}
	}); */
	$("#foo3").carouFredSel({
		width   : "100%",
		circular: true,
		infinite: true,
		direction: "up",
		items : 2,
		height: 205,
		auto: {
			play: true,
			pauseDuration: 13000,
			duration: 600
		},
		prev : {	
			button	: "#foo3_prev",
			key		: "up"
		},
		next : { 
			button	: "#foo3_next",
			key		: "down"
		}
	});
	
	$(".client_logos").carouFredSel({
		circular: true,
		infinite: true,
		items : 1,
		direction: "up",
		auto: {
		play: true,
		pauseDuration: 3000,
		duration: 600
		}
	});
	$(".signuppage").fancybox();
});