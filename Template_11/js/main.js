$(document).ready(function(){
	
	
	setTimeout(function(){
	   $('.wrap-loader').hide();
	}, 5000);


	$(document).on('click', '.navbar-nav>li>a[href^="#"]', function(e) {
	    let id = $(this).attr('href');
	    let $id = $(id);
	    if ($id.length === 0) {
	        return;
	    }
	    e.preventDefault();
	    let pos = $id.offset().top;

	    $('body, html').animate({scrollTop: pos});
	});

	
     
     $('.slick-slider').slick({
     	slidesToScroll: 1,
  		autoplay: true,
  		autoplaySpeed: 2000,
     });
     $('.slick-slider-works').slick({
     	slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
		dots:true,
		responsive: [
                {
		            breakpoint: 450, // mobile breakpoint
		            settings: {
		                slidesToShow: 1,
		                slidesToScroll: 1,
		                autoplay: true,
  						autoplaySpeed: 2000,
		                dots:false
		            }
       		 }
    	]
     });
     $('.slick-slide-feed').slick({
     	slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
     });
     
     $('.slick-blog-slider').slick({
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 3,
		responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '40px',
		        slidesToShow: 3
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '40px',
		        slidesToShow: 1
		      }
		    }
		  ]
		});

     $('.slick-arrow').hide();

    function number_to(className, from,to,duration) {
		let element = $('.'+className);
		let start = new Date().getTime();
		setTimeout( function() {
			let now = (new Date().getTime()) - start;
			let progress = now / duration;
			let result = Math.floor((to - from) * progress + from);
			element.html(progress < 1 ? result+'+' : to+'+');
		if (progress < 1)setTimeout(arguments.callee, 10);
		}, 10);
	}
	
	number_to('price-num-1', 1,500,10000);
	number_to('price-num-2', 1,300,10000);
	number_to('price-num-3', 1,200,10000);
	number_to('price-num-4', 1,400,10000);

	

	$( "#tabs" ).tabs();


	window.onscroll = function() {fixing_navbar()};

	function fixing_navbar (){
		let header = $(".navbar");
		let windowHeight = window.pageYOffset;
		
		if (windowHeight > 0) {
		   header.addClass("navbar-fixed");
		} else {
		   header.removeClass("navbar-fixed");
		}
	}

});



