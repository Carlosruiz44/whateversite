

 $(document).ready(function() {

	$(window).scroll( function(){

		$('.fadesection').each(function(i){

			var bottom_of_object = $(this).offset().top +
			$(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() +
			$(window).height();

			if( bottom_of_window > bottom_of_object){
				$(this).animate({'opacity':'1'},350);
			}
		})

	})

})

// Fade out code that didnt work, interfered with user experience.

// $(window).on("load",function() {

// 	$(window).scroll( function(){	

// 		$('.fadesection').each(function(){

// 			var bottom_of_object = $(this).offset().top +
// 			$(this).outerHeight();
// 			var bottom_of_window = $(window).scrollTop() +
// 			$(window).innerHeight();

// 			if( bottom_of_object < bottom_of_window){
// 				if ($(this).css("opacity")==0) {$(this).fadeTo(200,1);}
// 			} else {if ($(this).css("opacity")==1) {$(this).fadeTo(200, 0);}
// 			}
// 		});

// 	}); $(window).scroll();

// });




