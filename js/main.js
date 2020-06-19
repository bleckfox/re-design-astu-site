;(function () {
	
	'use strict';


	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var fullHeight = function() {

		if ( !isMobile.any() ) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height());
			});
		}

	};




	var burgerMenu = function() {
		$('.js-nav-toggle').on('click', function(event){
			event.preventDefault();
			var $this = $(this);
			if ($('body').hasClass('offcanvas')) {
				$this.removeClass('active');
				$('body').removeClass('offcanvas');
				showTopBar();
			} else {
				$this.addClass('active');
				$('body').addClass('offcanvas');
				hideTopBar();
			}
		});
	};

    var hideTopBar = function() {
        var top_bar = document.getElementById('top-bar');
        top_bar.style.display = "none";
    };

    var showTopBar = function() {
        var top_bar = document.getElementById('top-bar');
        top_bar.style.display = "block";
    };


	// Click outside of offcanvass
	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#aside, .js-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {
    			$('body').removeClass('offcanvas');
    			$('.js-nav-toggle').removeClass('active');
    			showTopBar();
	    	}
	    }
		});
	};


	var stickyFunction = function() {

		var h = $('.image-content').outerHeight();

		if ($(window).width() <= 992 ) {
			$("#sticky_item").trigger("sticky_kit:detach");
		} else {
			$('.sticky-parent').removeClass('stick-detach');
			$("#sticky_item").trigger("sticky_kit:detach");
			$("#sticky_item").trigger("sticky_kit:unstick");
		}

		$(window).resize(function(){
			var h = $('.image-content').outerHeight();
			$('.sticky-parent').css('height', h);


			if ($(window).width() <= 992 ) {
				$("#sticky_item").trigger("sticky_kit:detach");
			} else {
				$('.sticky-parent').removeClass('stick-detach');
				$("#sticky_item").trigger("sticky_kit:detach");
				$("#sticky_item").trigger("sticky_kit:unstick");

				$("#sticky_item").stick_in_parent();
			}
		});

		$('.sticky-parent').css('height', h);

		$("#sticky_item").stick_in_parent();

	};

	var owlCrouselFeatureSlide = function() {
        var owl = $('.owl-carousel');
        owl.owlCarousel({
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            autoplay: true,
            loop:true,
            nav:true,
			dots:false,
            margin:0,
            navText: [
                "<i class='icon-arrow-left3 owl-direction'></i>",
                "<i class='icon-arrow-right3 owl-direction'></i>"
            ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                960:{
                    items:3
                },
                1200:{
                    items:3
                }
            }
        });
	};

	var switcher = function() {
		$(".light-switch").on('click', function () {
			if ($(this).is(":checked")){
                $('html').attr('data-theme-color', 'dark');
			} else {
                $('html').attr('data-theme-color', 'light');
			}
        })
	};

	// Document on load.
	$(function(){
		fullHeight();
		burgerMenu();
		mobileMenuOutsideClick();
		stickyFunction();
		owlCrouselFeatureSlide();
		switcher();
	});


}());