const readline = require('readline-sync');

function dealCards(playerHand, AIHand, deck) {
  for (let idx = 0; idx < 2; idx++) {
    let randomCard = Math.floor(Math.random() * deck.length);
    playerHand.push(deck[randomCard]);
    deck.splice(randomCard, 1);
  }
  for (let idx = 0; idx < 2; idx++) {
    let randomCard = Math.floor(Math.random() * deck.length);
    AIHand.push(deck[randomCard]);
    deck.splice(randomCard, 1);
  }
}

function displayCards(playerHand, AIHand) {
  console.log(`The dealer is showing ${AIHand[0]} and an unknown card.`);
  console.log(`Your cards: ${playerHand.join(', ')}.`);
}

function revealDealerHand(AIHand) {
  console.log(` The Dealer's cards: ${AIHand.join(', ')}.`);
}

function calculateHand(hand) {
  let handTotal = 0;
  for (let idx = 0; idx < hand.length; idx++) {
    if (hand[idx] === 'Jack' || hand[idx] === 'Queen' || hand[idx] === 'King') {
      handTotal += 10;
    } else if (hand[idx] === 'Ace') {
      handTotal += 11;
    } else {
      handTotal += hand[idx];
    }
  }
  for (let idx = 0; idx < hand.length; idx++) {
    if (handTotal > 21 && hand[idx] === 'Ace') {
      handTotal -= 10;
    }
  }
  return handTotal;
}

function checkForBust(hand) {
  if (hand > 21) return true;
  return false;
}

function checkFor17(hand) {
  if (hand >= 17) return true;
  return false;
}

function checkFor21(hand) {
  if (hand === 21) return true;
  return false;
}

function dealSingleCard(hand, deck) {
  let randomCard = Math.floor(Math.random() * deck.length);
  hand.push(deck[randomCard]);
  deck.splice(randomCard, 1);
}

function compareHandTotals(playerHandTotal, AIHandTotal) {
  if (playerHandTotal < 22 && AIHandTotal < 22) {
    if (playerHandTotal > AIHandTotal) {
      console.log(`You have ${playerHandTotal}, the Dealer has ${AIHandTotal}. You win!`);
    } else if (playerHandTotal < AIHandTotal) {
      console.log(`You have ${playerHandTotal}, the Dealer has ${AIHandTotal}. You lose!`);
    } else {
      console.log(`You have ${playerHandTotal}, the Dealer has ${AIHandTotal}. It's a tie!`);
    }
  }
}

//begin game
while (true) {
  let deck = [
    2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5,
    6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9,
    10, 10, 10, 10, 'Jack', 'Jack', 'Jack', 'Jack',
    'Queen', 'Queen', 'Queen', 'Queen',
    'King', 'King', 'King', 'King',
    'Ace','Ace','Ace','Ace',
  ];
  let playerHand = [];
  let AIHand = [];

  dealCards(playerHand, AIHand, deck);
  let playerHandTotal = calculateHand(playerHand);
  let AIHandTotal = calculateHand(AIHand);

  //player turn
  while (true) {
    displayCards(playerHand, AIHand);

    if (checkForBust(playerHandTotal) === true) {
      console.log(`You bust!`);
      break;
    }

    console.log('Would you like to hit or stay?');
    let playerDecision = readline.question().toLowerCase();

    while (playerDecision !== 'hit' && playerDecision !== 'stay') {
      prompt('You most choose "hit" or "stay"!');
      playerDecision = readline.question().toLowerCase();
    }

    if (playerDecision === 'hit') {
      dealSingleCard(playerHand, deck);
      playerHandTotal = calculateHand(playerHand);
    } else {
      break;
    }
  }

  //dealer turn
  revealDealerHand(AIHand);
  while (true) {
    if (checkForBust(playerHandTotal) === true) {
      break;
    }
    if (checkForBust(AIHandTotal) === true) {
      console.log(`The Dealer busts! You win.`);
      break;
    }
    if (checkFor21(AIHandTotal) === true) {
      console.log(`The Dealer has 21. You lose.`);
      break;
    }
    if (checkFor17(AIHandTotal) === true) {
      console.log(`The dealer stays.`);
      break;
    }

    dealSingleCard(AIHand, deck);
    AIHandTotal = calculateHand(AIHand);
    revealDealerHand(AIHand);
  }

  compareHandTotals(playerHandTotal, AIHandTotal);
  console.log(`Do you want to play again?`);
  let replay = readline.question().toLowerCase();
  if (replay !== 'yes') break;
}
