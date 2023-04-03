
(function($) { "use strict";

	$(function() {
		var header = $(".start-style");
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
		
			if (scroll >= 10) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
			// var hT = $('#skill-bar-wrapper').offset().top,
			// 	hH = $('#skill-bar-wrapper').outerHeight(),
			// 	wH = $(window).height(),
			// 	wS = $(this).scrollTop();
			// if (wS > (hT+hH-1.4*wH)){
			// 	jQuery(document).ready(function(){
            // 		jQuery('.skillbar-container').each(function(){
            //     		jQuery(this).find('.skills').animate({
            //         		width:jQuery(this).attr('data-percent')
            //     		}, 5000); // 5 seconds
            // 		});
        	// 	});
    		// }
		});
	});		
		
	//Animation
	jQuery(document).ready(function(){
		jQuery('.skillbar-container').each(function(){
			jQuery(this).find('.skills').animate({
				width:jQuery(this).attr('data-percent')
			}, 5000); // 5 seconds
		});
	});
	$(document).ready(function() {
		$('body.hero-anime').removeClass('hero-anime');
	});

	//Menu On Hover
		
	$('body').on('mouseenter mouseleave','.nav-item',function(e){
			if ($(window).width() > 750) {
				var _d=$(e.target).closest('.nav-item');_d.addClass('show');
				setTimeout(function(){
				_d[_d.is(':hover')?'addClass':'removeClass']('show');
				},1);
			}
	});	
	
	//Switch light/dark
	
	// $("#switch").on('click', function () {
	// 	if ($("body").hasClass("dark")) {
	// 		$("body").removeClass("dark");
	// 		$(".intro").addClass("dark")
	// 		$("#switch").removeClass("switched");

	// 	}
	// 	else {
	// 		$("body").addClass("dark");
	// 		$(".intro").removeClass("dark")
	// 		$("#switch").addClass("switched");

	// 	}
	// });  
	// $(window).scroll(function() {
	// 	var hT = $('#skill-bar-wrapper').offset().top,
	// 		hH = $('#skill-bar-wrapper').outerHeight(),
	// 		wH = $(window).height(),
	// 		wS = $(this).scrollTop();
	// 	if (wS > (hT+hH-1.4*wH)){
	// 		jQuery(document).ready(function(){
	// 			jQuery('.skillbar-container').each(function(){
	// 				jQuery(this).find('.skills').animate({
	// 					width:jQuery(this).attr('data-percent')
	// 				}, 5000); // 5 seconds
	// 			});
	// 		});
	// 	}
	//  });
  })(jQuery);

  
 function menu(){
	document.getElementById('circularMenu').classList.toggle('active');
}
  
