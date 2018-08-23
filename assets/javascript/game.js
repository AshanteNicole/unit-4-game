// Create variables 
//Create number options to be assigned to the crystals
var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(numberOptions)
//Create r```````````````````````andom target numbers that will select random numbers to calculate
var targetNumber = []
$("#number-to-guess").text(targetNumber);
console.log(targetNumber)
var counter = 0



// A function off of css-tricks to shuffle an array https://css-tricks.com/snippets/javascript/shuffle-array/
function Shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};
// Next we create a for loop to create crystals for every numberOption.
for (var i = 0; i < numberOptions.length; i++) {

