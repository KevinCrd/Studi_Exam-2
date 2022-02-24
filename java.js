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
player: 1,
roundp1: 54,
roundp2: 0,
globalp1: 0,
globalp2: 10,
dicenumber: 0,
};

/* Player / Hold */ 

const ButtonHold = document.getElementById('ButtonHold');
ButtonHold.addEventListener('click', HoldChangePlayer);

function HoldChangePlayer () {

    if ( tableauScore.player == 1 ) 
        tableauScore.globalp1 += tableauScore.roundp1;

    else if ( tableauScore.player == 1 && tableauScore.globalp1 > 100 )
       Win /* rajouter ecran de win */

    else
        tableauScore.roundp1 = 0;
        tableauScore.player = 2; 

    if ( tableauScore.player == 2 ) 
        tableauScore.globalp2 += tableauScore.roundp2;

    else if ( tableauScore.player == 2 && tableauScore.globalp1 > 100 )
        Win /* rajouter ecran de win */
 
    else
         tableauScore.roundp2 = 0;
         tableauScore.player = 1; 

}

/* End Player / Hold */

/* Reset */

const ButtonNewGame = document.getElementById('ButtonNewGame');

ButtonNewGame.addEventListener('click', Reset);

function Reset() {

    tableauScore.roundp1 = 0;
    tableauScore.roundp2 = 0;
    tableauScore.globalp1 = 0;
    tableauScore.globalp2 = 0;
    tableauScore.dicenumber = 0;
    return tableauScore;

}

/* End Reset */ 

/* Roll Dice */

const ButtonRollDice = document.getElementById('ButtonRollDice');
ButtonRollDice.addEventListener('click', Roll(1,6));
ButtonRollDice.addEventListener('click', ChangeDice);

function Roll(min, max) {

    tableauScore.dicenumber = min + Math.floor(Math.random() * ( max - min +1));
    return;
}

    const ImageDice = document.getElementById("Dice");
    let DiceAttribute = ImageDice.getAttribute("src");

function ChangeDice() {

    if ( tableauScore.dicenumber == 1 ) 
        DiceAttribute = "images/D1.png"
        else if  ( tableauScore.dicenumber == 2 )
            DiceAttribute = "images/D2.png"
        else if  ( tableauScore.dicenumber == 3 )
            DiceAttribute = "images/D3.png"
        else if  ( tableauScore.dicenumber == 4 )
            DiceAttribute = "images/D4.png"
        else if  ( tableauScore.dicenumber == 5 )
            DiceAttribute = "images/D5.png"
        else
            DiceAttribute = "images/D6.png"

    if ( tableauScore.dicenumber == 1 && tableauScore.player == 1 )
        tableauScore.roundp1 = 0;
        tableauScore.player = 2;

    if ( tableauScore.dicenumber == 1 && tableauScore.player == 2 )
        tableauScore.roundp2 = 0;
        tableauScore.player = 1;

    return tableauScore;

}    
    
/* End Roll Dice */

/* Round */ 



/* End Round */

/* Score */

const DisplayScore = document.body;

DisplayScore.addEventListener("click", FunctionScore);

function FunctionScore() { 

    document.getElementById("score_p1_affichage")
    .innerText = (tableauScore.globalp1) + '';
    document.getElementById("score_p2_affichage")
    .innerText = (tableauScore.dicenumber) + '';
    document.getElementById("current_p1_affichage")
    .innerText = (tableauScore.roundp1) + '';
    document.getElementById("current_p2_affichage")
    .innerText = (tableauScore.roundp2) + '';
}
/* End Score */