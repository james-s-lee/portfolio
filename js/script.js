$(document).ready(function() {

    $('#slides').superslides({
      animation: "fade",
      play: 5000,
      pagination: false
    });

    var typed = new Typed(".typed", {
      strings: ["Undergraduate Student.", "Junior Developer.", "Interpreter."],
      typeSpeed: 40,
      loop: true,
      startDelay: 1000,
      showCursor: false,

    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        //margin:10,
        //nav:true,
        items: 4,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    var skillsTopOffset = $(".skillsSection").offset().top;
    var statsTopOffset = $(".statsSection").offset().top;
    var countUpFinished = false;

    $(window).scroll(function() {
      if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
        $('.chart').easyPieChart({
          easing: 'easeInOut',
          barColor: '#fff',
          trackColor: false,
          scaleColor: false,
          linewidth: 4,
          size: 152,
          animate: {
            duration: 2000,
            enabled: true
          },
          onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
          }
        });
      }
      if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
        $(".counter").each(function() {
          var element = $(this);
          var endVal = parseInt(element.text());

          element.countup(endVal);
        })

        countUpFinished = true;
      }

    });


});
