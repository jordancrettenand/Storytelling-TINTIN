// -- animation commentaire -----------------------------------------------------------------------
$(document).ready(function () {
  $("#imageCarousel").carousel({
    interval: 9000, // Temps en millisecondes pour le défilement automatique
  });
});
// -------------------------------------------------------------------------

// -- Bouton scroll -----------------------------------------------------------------------
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
