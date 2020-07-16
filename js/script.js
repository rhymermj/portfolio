$(window).on("load", function(){
    $(".loader .inner").fadeOut(500);
        $(".loader").fadeOut(750);
})

$(document).ready(function(){
    $('#slides').superslides({
        animation: 'fade',
        play: 3000,     // play every 5 seconds        
        // pagination: false  // don't put pagination control on the bottom
    });

    // var typed = new Typed('.element', options); 
    var typed = new Typed(".typed", {

        /* DO NOT CHANGE THIS SPEED */
        strings: ["Student ^470", "Medical Laboratory Scientist ^90", "Fitness Enthusiast ^520", "Creator ^1500", "Coffee Lover ^800"], 
        typeSpeed: 60,
        loop: true,
        showCursor: false,
        startDelay: 1000
    })

    $('.owl-carousel').owlCarousel({
        loop:true,
        items: 7,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            },
            1200:{
                items:5
            },
            480:{
                items:6
            },
            938:{
                items:7
            }
        }
    });

    $('.chart').easyPieChart({
        easing: 'easeInOut',
        barColor: '#fff',
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });

    var skillsTopOffset = $(".skillsSection").offset().top;

	$(window).scroll(function() {

		if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

			$('.chart').easyPieChart({
		        easing: 'easeInOut',
		        barColor: '#fff',
		        trackColor: false,
		        scaleColor: false,
		        lineWidth: 4,
		        size: 152,
		        onStep: function(from, to, percent) {
		        	$(this.el).find('.percent').text(Math.round(percent));
		        }
		    });
			
		}


    });

    $("#navigation li a").click(function(e){
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({
            scrollTop: targetPosition - 50}, "slow");
    })
    
    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation(){

        var body = $("body");

        if($(window).scrollTop() >= navTop) {
            body.css("padding-top", nav.outerHeight() + "px");
            body.addClass("fixedNav");
        }
        else {
            body.css("padding-top", 0);
            body.removeClass("fixedNav");
        }


    }

});
