////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

var move
function getPlayerMove(move) {
    if (move !== null){
        return move
    }else {return getInput ()
    }
}

function getComputerMove(move) {
    if (move !== null){
        return move
    } else {return randomPlay()
    }
}

function getWinner(playerMove,computerMove) {
    var winner;

    if (playerMove == computerMove){winner = 'tie'} else

      if (playerMove == 'rock'){if (computerMove =='scissors'){
        winner = 'player'}else if (computerMove == 'paper') {winner = 'computer'}
      }

      if (playerMove == 'paper'){if (computerMove =='scissors'){
        winner = 'computer'}else if (computerMove == 'rock') {winner = 'player'}
      }

      if (playerMove == 'scissors'){if (computerMove =='rock'){
        winner = 'computer'}else if (computerMove == 'paper') {winner = 'player'}
      }
    return winner;




var playToFive = function() {

 console.log('Let\'s play Rock Paper Scissors');
 var playerWins = 0;
 var computerWins = 0;
 var playCount = 0;


 while (playerWins<5 && computerWins<5){

   var playerMove = prompt("what is your move?");

   var computerMove = Math.random();
       if (computerMove < .33)
           {computerMove = "rock";}
           else if
           (computerMove > .67)
           {computerMove = "paper"}
           else
           computerMove = "scissors";

   winner = getWinner(playerMove,computerMove);

       if (winner == 'computer'){console.log("computer wins");computerWins++;
           }

       else if (winner == 'player'){console.log("YOU WIN!");playerWins++;
           }
       else {console.log("tie")}

 console.log("player move: "+playerMove);
 console.log("computer move: "+computerMove);
 console.log("player score " + playerWins);
 console.log("computer score " + computerWins);
 console.log();

       playCount++;

}}}

