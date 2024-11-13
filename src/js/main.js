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
  var d = document,
    doc = d.documentElement;
  var top = doc.scrollTop || window.pageYOffset || d.body.scrollTop,
    het = d.getElementsByClassName("nav")[0].scrollHeight,
    wid = doc.clientWidth || d.body.clientWidth;
  var childs = d.querySelectorAll(".nav .child"),
    s = childs[0].offsetTop;
  var scroll = (top - s) * (wid / het);
  scroll =
    scroll >= het * (wid / het) ? het * (wid / het) : top - s < 10 ? 0 : scroll;
  d.getElementsByClassName("progressBar")[0].style.width = scroll + "px";
};
// -------------------------------------------------------------------------
