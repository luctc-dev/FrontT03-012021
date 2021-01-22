
var buttonRoll = document.querySelector('.roll-dice');
var diceOne = document.querySelector('.dice-1');
var diceTwo = document.querySelector('#dice-2');
var arrDice = [
  './images/dice1.png',
  './images/dice2@2x.png',
  './images/dice3@2x.png',
  './images/dice4@2x.png',
  './images/dice5@2x.png',
  './images/dice6@2x.png',
]

function getDiceIndex(number) {
  return number - 1;
}
function randomDice() {
  return getDiceIndex(Math.floor(Math.random() * 6 + 1));
}

function handleClickRollDice() {
  var diceOneIdx = randomDice();
  var diceTwoIdx = randomDice();

  var srcDiceOne = arrDice[diceOneIdx];
  var srcDiceTwo = arrDice[diceTwoIdx];

  diceOne.setAttribute('src', srcDiceOne);
  diceTwo.setAttribute('src', srcDiceTwo);
}

buttonRoll.addEventListener('click', handleClickRollDice)