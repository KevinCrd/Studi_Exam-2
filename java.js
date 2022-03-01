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
roundp1: 0,
roundp2: 0,
globalp1: 0,
globalp2: 0,
dicenumber: 0,
};

/* Player / Hold */ 

const ButtonHold = document.getElementById('ButtonHold');
ButtonHold.addEventListener('click', HoldChangePlayer);

function HoldChangePlayer () {

    if ( tableauScore.player == 1 && tableauScore.roundp1 != 0 ) {
        tableauScore.globalp1 += tableauScore.roundp1;
        tableauScore.roundp1 = 0;
        tableauScore.player = 2;
    }
    else if ( tableauScore.player == 2 && tableauScore.roundp2 != 0 ) {
        tableauScore.globalp2 += tableauScore.roundp2; 
        tableauScore.roundp2 = 0;
        tableauScore.player = 1;
    }

    return tableauScore;

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
    tableauScore.player = 1;
    return tableauScore;

}

/* End Reset */ 

/* Roll Dice */

const ButtonRollDice = document.getElementById('ButtonRollDice');
let min = 1;
let max = 6;
ButtonRollDice.addEventListener('click', Roll);
ButtonRollDice.addEventListener('click', ChangeDice);
ButtonRollDice.addEventListener('click', Dice1);
ButtonRollDice.addEventListener('click', Round);

function Roll() {

    tableauScore.dicenumber = min + Math.floor(Math.random() * ( max - min +1));
    return tableauScore.dicenumber;
}


function ChangeDice() {

    if ( tableauScore.dicenumber == 1 ) {
        document.getElementById("Dice").src="images/D1.jpg";
    }
        else if  ( tableauScore.dicenumber == 2 ) {
            document.getElementById("Dice").src="images/D2.jpg";
        }
        else if  ( tableauScore.dicenumber == 3 ) {
            document.getElementById("Dice").src="images/D3.jpg";
        }
        else if  ( tableauScore.dicenumber == 4 ) {
            document.getElementById("Dice").src="images/D4.jpg";
        }
        else if  ( tableauScore.dicenumber == 5 ) {
            document.getElementById("Dice").src="images/D5.jpg";
        }
        else if ( tableauScore.dicenumber == 6 ) {
            document.getElementById("Dice").src="images/D6.jpg";
        }

         return;

}
function Dice1() {

    if ( tableauScore.dicenumber == 1 && tableauScore.player == 1 ){
        tableauScore.roundp1 = 0;
        tableauScore.dicenumber = 0;
        tableauScore.player = 2;
        
    }
        else if ( tableauScore.dicenumber == 1 && tableauScore.player == 2 ){
    
            tableauScore.roundp2 = 0;
            tableauScore.dicenumber = 0;
            tableauScore.player = 1; 
            
        }

}
   
    
/* End Roll Dice */

/* Round */ 

function Round() {

    if ( tableauScore.player == 1 ) {
    tableauScore.roundp1 += tableauScore.dicenumber 
    tableauScore.dicenumber = 0;
    }
        else if ( tableauScore.player == 2 ) {
        tableauScore.roundp2 += tableauScore.dicenumber;
        tableauScore.dicenumber = 0;
        }

        return tableauScore;

}

/* End Round */

/* Score */

const DisplayScore = document.body;

DisplayScore.addEventListener("click", FunctionScore);
DisplayScore.addEventListener("click", Win);

function FunctionScore() { 

    document.getElementById("score_p1_affichage")
    .innerText = (tableauScore.globalp1) + '';
    document.getElementById("score_p2_affichage")
    .innerText = (tableauScore.globalp2) + '';
    document.getElementById("current_p1_affichage")
    .innerText = (tableauScore.roundp1) + '';
    document.getElementById("current_p2_affichage")
    .innerText = (tableauScore.roundp2) + '';
}
/* End Score */

/* Win */ 

function Win() {

    if ( tableauScore.globalp1 >= 100 || tableauScore.globalp1 == 100){
    document.getElementById("Player1")
    .innerText = 'Winner';
    document.getElementById("Player2")
    .innerText = 'Loser' 
    }
    else if ( tableauScore.globalp2 >= 100 || tableauScore.globalp2 == 100 ){
    document.getElementById("Player2")
    .innerText = 'Winner';
    document.getElementById("Player1")
    .innerText = 'Loser'
    }
}

/* End Win */