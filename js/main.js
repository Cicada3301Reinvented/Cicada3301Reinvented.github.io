AOS.init({
  duration: 800,
  easing: "slide",
  once: true,
});

jQuery(document).ready(function ($) {
  "use strict";

  var siteMenuClone = function () {
    $(".js-clone-nav").each(function () {
      var $this = $(this);
      $this
        .clone()
        .attr("class", "site-nav-wrap")
        .appendTo(".site-mobile-menu-body");
    });

    setTimeout(function () {
      var counter = 0;
      $(".site-mobile-menu .has-children").each(function () {
        var $this = $(this);

        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find(".arrow-collapse").attr({
          "data-toggle": "collapse",
          "data-target": "#collapseItem" + counter,
        });

        $this.find("> ul").attr({
          class: "collapse",
          id: "collapseItem" + counter,
        });

        counter++;
      });
    }, 1000);

    $("body").on("click", ".arrow-collapse", function (e) {
      var $this = $(this);
      if ($this.closest("li").find(".collapse").hasClass("show")) {
        $this.removeClass("active");
      } else {
        $this.addClass("active");
      }
      e.preventDefault();
    });

    $(window).resize(function () {
      var $this = $(this),
        w = $this.width();

      if (w > 768) {
        if ($("body").hasClass("offcanvas-menu")) {
          $("body").removeClass("offcanvas-menu");
        }
      }
    });

    $("body").on("click", ".js-menu-toggle", function (e) {
      var $this = $(this);
      e.preventDefault();

      if ($("body").hasClass("offcanvas-menu")) {
        $("body").removeClass("offcanvas-menu");
        $this.removeClass("active");
      } else {
        $("body").addClass("offcanvas-menu");
        $this.addClass("active");
      }
    });

    // click outisde offcanvas
    $(document).mouseup(function (e) {
      var container = $(".site-mobile-menu");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("offcanvas-menu")) {
          $("body").removeClass("offcanvas-menu");
        }
      }
    });
  };
  siteMenuClone();
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Countdown Timer
let finalDate = new Date(2021, 04, 28, 20, 0, 0);
let timerDays = document.getElementById("timer-days");
let timerHours = document.getElementById("timer-hours");
let timerMinutes = document.getElementById("timer-minutes");
let timerSeconds = document.getElementById("timer-seconds");
setInterval(() => {
  let date = new Date();
  let diff = finalDate - date;
  if (diff > 0) {
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    days = days < 10 ? "0" + days : days;
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    hours = hours < 10 ? "0" + hours : hours;
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);
    seconds = seconds < 10 ? "0" + seconds : seconds;
    timerDays.innerHTML = days;
    timerHours.innerHTML = hours;
    timerMinutes.innerHTML = minutes;
    timerSeconds.innerHTML = seconds;
  } else {
    timerDays.innerHTML = "00";
    timerHours.innerHTML = "00";
    timerMinutes.innerHTML = "00";
    timerSeconds.innerHTML = "00";
  }
}, 1000);

(function ($) {
  "use strict";

  var fullHeight = function () {
    $(".js-fullheight").css("height", $(window).height());
    $(window).resize(function () {
      $(".js-fullheight").css("height", $(window).height());
    });
  };
  fullHeight();

  var carousel = function () {
    $(".featured-carousel").owlCarousel({
      loop: true,
      autoplay: false,
      margin: 30,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      dots: true,
      autoplayHoverPause: true,
      items: 1,
      navText: [
        "<span class='fa fa-arrow-left'></span>",
        "<span class='fa fa-arrow-right'></span>",
      ],
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        600: {
          items: 2,
          nav: true,
        },
        1000: {
          items: 3,
          nav: true,
        },
      },
    });
  };
  carousel();
})(jQuery);

let flipcards = document.getElementsByClassName("flip-card");
let flipcardsArray = Array.from(flipcards);
flipcardsArray.forEach((card) => {
  card.addEventListener("click", (e) => {
    if (e.target.classList[0] != "session-btn") {
      let a = e.currentTarget.getElementsByClassName("flip-card-inner")[0];
      if (a.style.transform == "rotateY(180deg)") {
        a.style.transform = "rotateY(0deg)";
      } else {
        a.style.transform = "rotateY(180deg)";
      }
    }
  });
});
