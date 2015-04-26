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
		var pos = $('#main-text-container').offset();
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

	
	// HOMEPAGE PICTURE TRANSITIONS
	var animated2 = false;
	$(window).bind('scroll', function() {
		var pos2 = $('#store-text').offset();
		if ($(window).scrollTop() > pos2.top && !animated2) {
			setTimeout(function() {
				$('#one').css({
					'top': '18.5%', 
					'left': '51.25%',
					'-webkit-transition': 'all 0.7s',
					'-webkit-transform': 'rotate(0deg)',
					'-moz-transform': 'rotate(0deg)',
					'-ms-transform': 'rotate(0deg)',
					'transform': 'rotate(0deg)',
				});
			}, 0);
			setTimeout(function() {
				$('#two').css({
					'top': '43.5%', 
					'left': '51.25%',
					'-webkit-transition': 'all 0.7s',
					'-webkit-transform': 'rotate(0deg)',
					'-moz-transform': 'rotate(0deg)',
					'-ms-transform': 'rotate(0deg)',
					'transform': 'rotate(0deg)',
				});
			}, 200);
			setTimeout(function() {
				$('#three').css({
					'top': '63%', 
					'left': '51.25%',
					'-webkit-transition': 'all 0.7s',
					'-webkit-transform': 'rotate(0deg)',
					'-moz-transform': 'rotate(0deg)',
					'-ms-transform': 'rotate(0deg)',
					'transform': 'rotate(0deg)',
				});
			}, 400);
			setTimeout(function() {
				$('#four').css({
					'top': '18.5%', 
					'left': '66.5%',
					'-webkit-transition': 'all 0.7s',
					'-webkit-transform': 'rotate(0deg)',
					'-moz-transform': 'rotate(0deg)',
					'-ms-transform': 'rotate(0deg)',
					'transform': 'rotate(0deg)',
				});
			}, 600);
			setTimeout(function() {
				$('#five').css({
					'top': '43.5%', 
					'left': '61.25%',
					'-webkit-transition': 'all 0.7s',
					'-webkit-transform': 'rotate(0deg)',
					'-moz-transform': 'rotate(0deg)',
					'-ms-transform': 'rotate(0deg)',
					'transform': 'rotate(0deg)',
				});
			}, 800);
		};
	});


	//VIEW SCRABPBOOK STARTS HERE
	function centerImg() {
		var selected = $("#selected-img");
	 	var selectedWidth = selected.width();
	 	var parentWidth = selected.parent().width();
	 	var widthPercentage = 100*(selectedWidth/parentWidth);
	 	var left = (100-widthPercentage)/2;
	 	// debugger;
	 	selected.css('left', '' + left + '%');
	};
	
	centerImg();

	$('.small-img').click(function() {
		//fix gallery selection
		var oldSelected = $('.small-selected');
		oldSelected.removeClass('small-selected');
		var newSelected = $(this).parent();
		newSelected.addClass('small-selected');
		//change displayed img
		var url = $(this).attr('id');
		$('#selected-img').attr('src', url);
		centerImg();
	});

	$('#next').click(function () {
		var oldSelected = $('.small-selected');
		var newSelected = oldSelected.next();
		oldSelected.removeClass('small-selected');
		newSelected.addClass('small-selected');
		//change displayed img
		var img = newSelected.children();
		var url = img.attr('id');
		$('#selected-img').attr('src', url);
		centerImg();
	});
	$('#prev').click(function () {
		var oldSelected = $('.small-selected');
		var newSelected = oldSelected.prev();
		oldSelected.removeClass('small-selected');
		newSelected.addClass('small-selected');
		//change displayed img
		var img = newSelected.children();
		var url = img.attr('id');
		$('#selected-img').attr('src', url);
		centerImg();
	});

})









