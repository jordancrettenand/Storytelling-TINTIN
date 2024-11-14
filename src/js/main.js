// -- animation commentaire -----------------------------------------------------------------------
$(document).ready(function () {
  $("#imageCarousel").carousel({
    interval: 9000, // Temps en millisecondes pour le défilement automatique
  });
});
// -------------------------------------------------------------------------

// -- Bouton scroll -----------------------------------------------------------------------

//Scroll back to top

(function ($) {
  "use strict";

  $(document).ready(function () {
    "use strict";

    var progressPath = document.querySelector(".progress-wrap path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 550;
    jQuery(window).on("scroll", function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery(".progress-wrap").addClass("active-progress");
      } else {
        jQuery(".progress-wrap").removeClass("active-progress");
      }
    });
    jQuery(".progress-wrap").on("click", function (event) {
      event.preventDefault();
      jQuery("html, body").animate({ scrollTop: 0 }, duration);
      return false;
    });
  });
})(jQuery);
// -------------------------------------------------------------------------

// -- NEWSLETTER -----------------------------------------------------------------------
function submitEmail() {
  const email = document.getElementById("email-input").value;
  if (email) {
    alert("Vous êtes abonnez ! : " + email);
    // Ici vous pouvez ajouter le code pour envoyer l'email à votre serveur
  } else {
    alert("Veuillez entrer une adresse email valide.");
  }
}
// -------------------------------------------------------------------------

// -- Barre de progression -----------------------------------------------------------------------
window.onscroll = function () {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  var windowHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrollPercent = (scrollTop / windowHeight) * 100;

  document.getElementById("progress-bar").style.width = scrollPercent + "%";
  document.getElementById("progress-icon").style.left = scrollPercent + "%"; // Déplace la fusée
};
// -------------------------------------------------------------------------
