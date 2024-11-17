// -- CODE DE FONCTIONEMENT GSAP -----------------------------------------------------------------------

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// -------------------------------------------------------------------------

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

// -- SCROLL HORIZONTAL -----------------------------------------------------------------------

// gsap.registerPlugin(ScrollTrigger);

// let sections = gsap.utils.toArray(".panel");

// gsap.to(sections, {
//   xPercent: -100 * (sections.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".container",
//     pin: true,
//     scrub: 1,
//     snap: 1 / (sections.length - 1),
//     end: () => "+=" + document.querySelector(".container").offsetWidth,
//   },
// });

// -------------------------------------------------------------------------

// <!-- forme tranversante diagonal ---------------- -->

gsap.registerPlugin(ScrollTrigger);

const square = document.querySelector(".square");

gsap.to(square, {
  x: window.innerWidth + 100, // Déplacement vers la droite et hors de l'écran
  y: window.innerHeight + 100, // Déplacement vers le bas et hors de l'écran
  scrollTrigger: {
    trigger: "body",
    start: "top top", // Débute lorsque le haut du body atteint le haut de la fenêtre
    end: "bottom top", // Finit lorsque le bas du body atteint le haut de la fenêtre
    scrub: true, // Synchronisation avec le scroll
  },
});

// -------------------------------------------------------------------------

// -- carousel édition livre -----------------------------------------------------------------------

const carousel = document.getElementById("carousel");
const images = Array.from(carousel.children);
const totalImages = images.length;
let currentIndex = 0;

function updateCarousel() {
  // Mettre à jour les classes et l'état des images
  images.forEach((img, index) => {
    const position = (index - currentIndex + totalImages) % totalImages;

    if (position === 0) {
      img.classList.add("active"); // Au centre, le plus grand
      img.style.display = "block";
    } else if (position === 1 || position === totalImages - 1) {
      img.classList.remove("active");
      img.style.display = "block"; // Visible à gauche et à droite
    } else {
      img.classList.remove("active");
      img.style.display = "none"; // Caché hors du cadre
    }
  });
}

document.getElementById("prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateCarousel();
});

document.getElementById("next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalImages;
  updateCarousel();
});

// Auto-slide toutes les 3 secondes
setInterval(() => {
  currentIndex = (currentIndex + 1) % totalImages;
  updateCarousel();
}, 3000);

// Initialisation
updateCarousel();

// -------------------------------------------------------------------------

// --- sroll vertival

// -- livre édition ------
// let customCurrentIndex = 0;
// const customImages = document.querySelectorAll(".custom-carousel img");

// document
//   .getElementById("custom-next-button")
//   .addEventListener("click", function () {
//     customImages[customCurrentIndex].classList.remove("custom-active");
//     customCurrentIndex = (customCurrentIndex + 1) % customImages.length;
//     customImages[customCurrentIndex].classList.add("custom-active");
//   });
