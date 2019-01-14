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

    })

});
