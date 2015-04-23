$(document).ready(function() {
	$('#sign-right').click(function() {
		window.location = 'browseScrapbooks.html';
	})

	// CAROUSEL STUFF STARTS HERE
	//Implement the "slide to left" when the user clicks on #carousel-next here
	var currMargin;
	var clicked;
	var carousel;
	// $('#carousel-next').click(function() {
	$('.right').click(function() {
		clicked = $(this);
		carousel = clicked.next();
		currMargin = parseInt(carousel.css('margin-left').replace("px", ""));
		if (currMargin === -1710) {
			carousel.css({'margin-left': 0, 'transition-duration': '0.3s'});
			return false;
		} else {
			carousel.css('margin-left', currMargin - 570);
		}
	});
	//Implement the "slide to right" when the user clicks on #carousel-prev here
	$('.left').click(function() {
		clicked = $(this);
		carousel = clicked.next().next();
		currMargin = parseInt(carousel.css('margin-left').replace("px", ""));
		if (currMargin >= 0) {
			carousel.css({'margin-left': -1710, 'transition-duration': '0.3s'});
			return false;
		} else {
			carousel.css('margin-left', currMargin + 570);
		}
	});



	// HOMEPAGE ARROW ANIMATIONS
	var animated = false;
	$(window).bind('scroll', function() {
		var pos = $('#main-te-container').offset()
		if ($(window).scrollTop() > pos.top && !animated) {
			animated = true;
			// outer arrows
			$('.outer').animate({
		        'top': '450%'
		    }, 1000, function () {
		    	//remove arrow class, add outer left/right arrow class
		    	$('#outer-left').addClass('rotate1');
		    	$('#outer-right').addClass('rotate4');
		        $('#outer-left').animate({
		            'left': '170%',
		            'top': '650%'
		        }, 1000);
		        $('#outer-right').animate({
		            'left': '-150%',
		            'top': '660%'
		        }, 1000);
		    });
		    $('.outer-bar').animate({
		    	'height':'350%'},1000,function(){
		    	$('#bar1').animate({'height':'490%', 'left':'105%', 'top':'300%'},1000);
		    	$('#bar4').animate({'height':'540%', 'left':'-50%', 'top':'280%'},1000);
		    });

		    // inner arrows
		    $('.inner').animate({
		        'top': '300%'
		    }, 1000, function () {
		    	$('#inner-left').addClass('rotate2');
		    	$('#inner-right').addClass('rotate3');
		        $('#inner-left').animate({
		            'left': '97%',
		            'top': '600%'
		        }, 1000);
		        $('#inner-right').animate({
		            'left': '3%',
		            'top': '600%'
		        }, 1000);
		    });
		    $('.inner-bar').animate({
		    	'height':'200%'},1000,function(){
		    	$('#bar2').animate({'height':'380%', 'left':'68%', 'top':'250%'},1000);
		    	$('#bar3').animate({'height':'360%', 'left':'25%', 'top':'260%'},1000);
		    });
		}
	});
})









