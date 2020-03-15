$(document).ready(function(){
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
//        pagination: false
    });

    var typed = new Typed(".typed", {
        strings: ["Medical Laboratory Scientist", "IT Student"], 
        typeSpeed: 70,
        loop: true,
        startDelay: 1000
    })

});
