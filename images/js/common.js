$(function(){
    
     /* Written For Navigation for Smaller Resolutions */
        $(".navigation li a").click(function(){
           $(this).siblings("div").slideToggle();

        });  
        
	setInterval(function() {
		$('#link1').fadeIn(3500);
	}, 500);
	setInterval(function() {
		$('#link2').fadeIn(3500);
	}, 2500);
	setInterval(function() {
		$('#link3').fadeIn(3500);
	}, 5500);
	setInterval(function() {
		$('#link4').fadeIn(3500);
	}, 8000);
	$('.clientListestit li:gt(0)').hide();
	$('.clientListtesti li:first').show();
	setInterval(function() {
		$('.clientListtesti li:first-child').fadeOut(1500).next('.clientListtesti li').fadeIn(2500).end().appendTo('.clientListtesti');
	}, 3500);
	
	//fix z-index issue on main page
	var zIndexNumber = 1000;
	$('.primnav').each(function() {
		$(this).css('zIndex', zIndexNumber);
		zIndexNumber -= 10;
	});
	
	//Drop down menu
	$('.primnav ul > li').hover(
		function(){
			$(this).find('.secondaryNav').stop(true, true).slideDown('slow');
		},
		function(){
			$(this).find('.secondaryNav').stop(true, true).slideUp('slow');
		}
	);
	$('.secondaryNav > li').hover(
		function(){
			$(this).find('.subNav').stop(true, true).slideDown('slow');
		},
		function(){
			$(this).find('.subNav').stop(true, true).slideUp('slow');
		}
	);
});
$(document).ready(function(){
   
       
});