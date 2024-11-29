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

// -- livre édition ------
const track = document.querySelector(".custom-carousel-images");
const prevButton = document.getElementById("custom-prev-button");
const nextButton = document.getElementById("custom-next-button");

let currentIndex = 0;
const totalImages = document.querySelectorAll(
  ".custom-carousel-images img"
).length;
const visibleImages = 3;

const updateCarousel = () => {
  const offset = currentIndex * (200 + 20); // Image width + margin
  track.style.transform = `translateX(-${offset}px)`;
};

const autoScroll = () => {
  currentIndex = (currentIndex + 1) % (totalImages - visibleImages + 1);
  updateCarousel();
};

// Auto-scroll every 5 seconds
setInterval(autoScroll, 5000);

prevButton.addEventListener("click", () => {
  currentIndex = Math.max(currentIndex - 1, 0);
  updateCarousel();
});

nextButton.addEventListener("click", () => {
  currentIndex = Math.min(currentIndex + 1, totalImages - visibleImages);
  updateCarousel();
});

// -------------------------------------------------------------------------
// --- sroll vertival
