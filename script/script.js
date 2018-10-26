(function(){

$(document).ready(function  (){

	$(document).ready(function(){
      $('.carousel').bxSlider({

      	auto: true,
      	pause: 4000,
      	
      });
   

    });



	$(".button").on("click", function(e) {
			//do buttona
				if ($(".button").hasClass("button-active") && ("button-after") && ("button-before") ) {
					$(".button").removeClass("button-active"),
					$(".button").removeClass("button-after"),
					$(".button").removeClass("button-before");
				} else {
					$(".button").addClass("button-active"),
					$(".button").addClass("button-after"),
					$(".button").addClass("button-before");
					
				}

			//do nawigacji
				$("nav").toggleClass("active");

		});

			$( window ).resize(function() {

				if (window.innerWidth > 768) {
				//do nawigacji
					$(".nav").removeClass("active"),
				//do buttona
					$(".button").removeClass("button-active"),
					$(".button").removeClass("button-after");
				}
			 	
			});


		$("nav a").click(function(){
				$("nav a").removeClass("active-nav-menu");
				$(this).addClass("active-nav-menu");


		});






});

})();