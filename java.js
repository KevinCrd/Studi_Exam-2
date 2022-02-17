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

let tableauScore = {
roundp1: 54,
roundp2: 0,
globalp1: 0,
globalp2: 10,
};

/* Reset */

const ButtonNewGame = document.getElementById('ButtonNewGame');

ButtonNewGame.addEventListener('click', Reset);

function Reset() {

    tableauScore.roundp1 = 0;
    tableauScore.roundp2 = 0;
    tableauScore.globalp1 = 0;
    tableauScore.globalp2 = 0;
    dicenumber = 0;
    return tableauScore;

}

/* End Reset */ 

/* Roll Dice */

let dicenumber = 0;

const ButtonRollDice = document.getElementById('ButtonRollDice');
ButtonRollDice.addEventListener('Click', Roll(1,6));

function Roll(min, max) {

    dicenumber = min + Math.floor(Math.random() * ( max - min +1));
    console.log(dicenumber);
    return;
}
/*
function ChangeDice() {

    let ImageDice = document.getElementById("Dice");
    let DiceAttribute = ImageDice.getAttribute("src");

}
 End Roll Dice */

/* Hold */

const ButtonHold = document.getElementById('ButtonHold');
ButtonHold.addEventListener('click', Hold);

function Hold(){}

/* End Hold */

/* Score */

const DisplayScore = document.body;

DisplayScore.addEventListener("click", FunctionScore);

function FunctionScore() { 

    document.getElementById("score_p1_affichage")
    .innerText = (tableauScore.globalp1 ) + '';
    document.getElementById("score_p2_affichage")
    .innerText = (dicenumber ) + '';
    document.getElementById("current_p1_affichage")
    .innerText = (tableauScore.roundp1 ) + '';
    document.getElementById("current_p2_affichage")
    .innerText = (tableauScore.roundp2 ) + '';
}
/* End Score */