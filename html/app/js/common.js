$(function() {

	// Custom JS

	$("#mmenu").mmenu({
		extensions: [ 'fx-menu-slide', 'fx-listitems-slide', 'theme-dark' ],
		navbar: {
			title: 'S-Copr'
		},
		offCanvas: {
			position  : 'right',
			pageSelector: '#mmpage'

		}
	});

	var menu = $('#mmenu').data('mmenu');

	menu.bind( 'open:finish', function() {
		$('.hamburger').addClass('is-active');
	});
	menu.bind( 'close:finish', function() {
		$('.hamburger').removeClass('is-active');
	});

	$('.home-page-catalog .catalog-items').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		dots: true,
		arrows: false,
		responsive: [
		    {
		      breakpoint: 992,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		      }
		    },
		    {
		      breakpoint: 660,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		   ],
	});

	$('.partners-items').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
  		prevArrow: '<div class="partners-arrows partners-arrow-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
  		nextArrow: '<div class="partners-arrows partners-arrow-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
  		responsive: [
		    {
		      breakpoint: 992,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        arrows: false,
		        dots: true,
		      }
		    }
		],
	});


	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/", //Change
			data: th.serialize()
		}).done(function() {
			th.find(".success").addClass("active");
			th.find(".form-inner").addClass("disable");
			setTimeout(function() {
				// Done Functions
				th.find(".success").removeClass("active");
				th.find(".form-inner").removeClass("disable");
				th.trigger("reset");
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});


	$("a[href='#form-callback']").magnificPopup({
		removalDelay: 300,
		type: 'inline',
	});

});
