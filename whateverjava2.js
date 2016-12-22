


// $(document).ready(function(){
// 	$("a").on('click', function(event) {
// 		if (this.hash !== " ") {
// 			event.preventDefault();

// 			var hash = this.hash;

// 			$('html, body').animate({
// 				scrollTop: $(hash).offset().top
// 			}, 800, function(){
// 				window.location.hash = hash;

// 			});
// 		}
// 	});
// });


// 	$("#btn2").click(function(){
// 		$("#myParagraph").fadeIn(1000, function(){
// 			$("#myParagraph").css({
// 				"font-weight":"bolder",
// 				"color":"green"
// 			});
// 		});
// 	});
// });

// $(document).ready(function(){
// 	$(window).scroll(function(){
// 		$("fixedbody").fadeIn(1000, function(){
// 			$("fixedbody").css({
// 				"font-weight":"bolder",
// 				"color":"black"
				
// 			});
// 		});
// 	});
// });

// This is the fade out for the scroll down function in case I fuck up the code - CR

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




