const readline = require('readline-sync');

function prompt(message) {
  console.log(`${message}`);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const VALID_CHOICES = ['water', 'fire', 'earth', 'lightning'];

let playAgain = '';
let winCounter = 0;
let lossCounter = 0;

prompt(`Welcome to Sorceror Battle!
Water beats Fire.
Fire beats Earth.
Earth beats Water.
A sorceror appears to do battle!`);

do {
  prompt(`Choose Water, Fire, or Earth.`);

  let playerElementChoice = readline.question().toLowerCase().trim();

  while (!VALID_CHOICES.includes(playerElementChoice)) {
    prompt(`For now, you only know the ways of Water, Fire, or Earth. You must choose.`);
    playerElementChoice = readline.question().toLowerCase().trim();
  }

  let computerChoice = getRandomInt(3);

  switch (computerChoice) {
    case 0:
      prompt('Your opponent unleashed Water.');
      break;
    case 1:
      prompt('Your opponent unleashed Fire.');
      break;
    case 2:
      prompt('Your opponent unleashed Earth.');
      break;
  }

  switch (true) {
    case (playerElementChoice === 'water' && computerChoice === 1):
      prompt(`You extinguished the enemy sorceror's attack before it could reach you.
      You have vanquished the enemy sorceror.`);
      break;
    case (playerElementChoice === 'fire' && computerChoice === 2):
      prompt(`The Earth turns into dust as your flames consume the enemy.
      You have vanquished the enemy sorceror.`);
      break;
    case (playerElementChoice === 'earth' && computerChoice === 0):
      prompt(`Your opponent is crushed as the water splits across the Earth.
      You have vanquished the enemy sorceror.`);
      break;
    case (playerElementChoice === 'water' && computerChoice === 2):
      prompt(`Your water is repelled as you are crushed by the force of the Earth.
      You have been defeated.`);
      break;
    case (playerElementChoice === 'fire' && computerChoice === 0):
      prompt(`Your opponent's water douses your attack as the riptide tears you apart.
      You have been defeated.`);
      break;
    case (playerElementChoice === 'earth' && computerChoice === 1):
      prompt(`Your attack disintegrates to the heat of the flames, taking your new ashen form with it.
      You have been defeated.`);
      break;
    case (playerElementChoice === 'lightning'):
      prompt(`The sky crackles with power, leaving your opponent a smoldering, lifeless husk.
      You have vanquished the enemy sorceror.`);
      break;
    default:
      prompt(`With equal elements and equal power, you are both knocked back, shaken but unharmed.
      Perhaps you will meet again.`);
  }
  
  if ((playerElementChoice === 'water' && computerChoice === 1) || 
    (playerElementChoice === 'fire' && computerChoice === 2) ||
    (playerElementChoice === 'earth' && computerChoice === 0) ||
    (playerElementChoice === 'lightning')) {
      winCounter += 1;
    } else if ((playerElementChoice === 'water' && computerChoice === 2) ||
      (playerElementChoice === 'fire' && computerChoice === 0) || 
      (playerElementChoice === 'earth' && computerChoice === 1)) {
      lossCounter += 1;
      }
 
  prompt(`Your record on this plane is ${winCounter} - ${lossCounter}.`);
 
  prompt(`A new sorceror appears! Enter yes to do battle.`);

  playAgain = readline.question();
} while (playAgain[0].toLowerCase() === 'y');

if (winCounter > lossCounter) {
  prompt(`Victorious, you pass through time and space to return to the admiration of your disciples in your home world.`);
  } else if (winCounter < lossCounter) {
    prompt(`Defeated, you return to your homeworld through time and space, determined to hone your power.`);
  } else {
    prompt(`You pass through time and space to return to your own world.`);
}