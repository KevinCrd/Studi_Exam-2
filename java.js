/* 

New tour = remise de round a 0
Si Des == 1, tour fini. 
Round + Round + ect
Hold = total des Round + global / Changement de joueur
Si global == ou =< a 100 = joueur 1/2 a gagner

-----------------

Bouton new game = remise a zero des variables
Bouton roll dice = lancer de des
bouton hold = envoyer du resultat de round sur le global

------------------

2 variable round / 2 variable global / 1 variable lancer de des

*/

let roundp1 = 0;
let roundp2 = 0;
let globalp1 = 0;
let globalp2 = 0;
let reboot = 0;


/* Reset */
document
  .getElementById("ButtonNewGame")
  .addEventListener("click", function(e) {
  e.preventDefault();
  e.stopPropagation();
  
document
    .getElementById("score_p1_affichage")
    .innerText = (globalp1 ) + '';
document 
    .getElementById("score_p2_affichage")
    .innerText = (globalp2 ) + '';
document
    .getElementById("current_p1_affichage")
    .innerText = (roundp1 ) + '';
document
    .getElementById("current_p2_affichage")
    .innerText = (roundp2 ) + '';
});