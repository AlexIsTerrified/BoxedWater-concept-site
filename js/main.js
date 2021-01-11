$(window).on("load", function(){
	setTimeout(() => { $(".window-loader").fadeOut("slow"); }, 3000);
	$(".owl-carousel").owlCarousel({
			loop: true,
			navigation: true,
			navText:['<','>'],
			slideSpeed : 1500,
			paginationSpeed : 1500,
			items:1,
			autoWidth:false,
			autoplay:false,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
	});
	
	$(function(){  // $(document).ready shorthand
		  $('.fadein').fadeIn('slow');
		});

		$(document).ready(function() {
			
			/* Every time the window is scrolled ... */
			$(window).scroll( function(){
			
				/* Check the location of each desired element */
				$('.fadescroll').each( function(i){
					
					var bottom_of_object = $(this).position().top + $(this).outerHeight();
					var bottom_of_window = $(window).scrollTop() + $(window).height();
					
					/* If the object is completely visible in the window, fade it it */
					if( bottom_of_window > bottom_of_object ){
						
						$(this).animate({'opacity':'1'},1500);
							
					}
					
				}); 
			
			});
			
		});
});

