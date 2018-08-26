//create a function shuffle for numbers assigned to crystals so they will not duplicate
var losses = 0;
var wins = 0;

newGame();

function newGame() {

 var counter = 0
 var restart
 //hooked the contents below into their perspective html div id's versus writing in the html
 $("#wins").html(wins);
 $("#losses").html(losses);
 $(".rules").html("<h5> Rules of the Game</h5>");
 $("#description").html("You will be given a random number at the start of the game.");
 $("#description1").html("There are four crystals below. By clicking on a crystal, you will add a specific amount of points to your total score.");
 $("#description2").html("You win the game by matching your total score to random number, you lose the game if your total score goes above the random number. The value of each crystal is hidden from you until you click on it.");
 $("#description3").html("Each time the game starts, the values of each crystal will change.")
 //create random selector for the Goal number
 var crystals = [{}, {}, {}, {}];
 var targetNumber = Math.floor(Math.random() * (120 - 19) + 19);
 $("#target-number").text(targetNumber);
 function Shuffle(o) {
   for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
   return o;
 };

 var crystals = document.getElementsByClassName("crystal-image");
 var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
 var shuffledNumbers = Shuffle(numbers);
 var score = 0;
 $("#data-value").html(score);
 for (let i = 0; i < crystals.length; i++) {
   let crystal = crystals[i];
   crystal.setAttribute("data-value", shuffledNumbers.pop());
   crystal.onclick = function (event) {
     // when crystal is clicked alert with its data-value
     alert(event.target.getAttribute("data-value"));
     score += parseInt(event.target.getAttribute("data-value"));
     // have to hook into the DOM
     document.getElementById("data-value").innerHTML = score;
     counter += score;
     if (score === targetNumber) {
       alert("YOU'RE A WINNER, CHICKEN DINNER!!!");
       wins++;
       document.getElementById("wins").innerHTML = wins;
       newGame();
     } else if (score >= targetNumber) {
       alert("A DAY LATE, A CRYSTAL TOO MUCH!!!! YOU LOSE!!")
       losses++;
       document.getElementById("losses").innerHTML = losses;
       newGame();

     }
   }
 }

};

