const readline = require('readline-sync');

class Deck {
  constructor() {
    this.remainingCards = [
      2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5,
      6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9,
      10, 10, 10, 10, 'Jack', 'Jack', 'Jack', 'Jack',
      'Queen', 'Queen', 'Queen', 'Queen',
      'King', 'King', 'King', 'King',
      'Ace','Ace','Ace','Ace',
    ];
  }
}

class Dealer {
  constructor() {
    this.hand = [];
  }
}

class Player {
  constructor() {
    this.hand = [];
    this.wallet = 5;
  }
  gainDollar() {
    this.wallet += 1;
  }
  loseDollar() {
    this.wallet -= 1;
  }
}

class TwentyOneGame {
  constructor() {
    this.human = new Player();
    this.dealer = new Dealer();
    this.deck = new Deck();
  }

  dealHands(dealer, human) {
    this.dealSingleCard(human);
    this.dealSingleCard(dealer);
    this.dealSingleCard(human);
    this.dealSingleCard(dealer);
  }

  dealSingleCard(player) {
    let randomInt = Math.floor(Math.random() * this.deck.remainingCards.length);
    player.hand.push(this.deck.remainingCards[randomInt]);
    this.deck.remainingCards.splice(randomInt, 1);
  }

  getHandTotal(player) {
    let handTotal = 0;
    for (let idx = 0; idx < player.hand.length; idx++) {
      if (player.hand[idx] === 'Jack' || player.hand[idx] === 'Queen' || player.hand[idx] === 'King') {
        handTotal += 10;
      } else if (player.hand[idx] === 'Ace') {
        handTotal += 11;
      } else {
        handTotal += player.hand[idx];
      }
    }
    for (let idx = 0; idx < player.hand.length; idx++) {
      if (handTotal > 21 && player.hand[idx] === 'Ace') {
        handTotal -= 10;
      }
    }
    return handTotal;
  }

  check21(player) {
    return this.getHandTotal(player) === 21;
  }

  checkBust(player) {
    return this.getHandTotal(player) > 21;
  }

  compareHands(dealer, player) {
    if (this.getHandTotal(dealer) === this.getHandTotal(player)) console.log(`It's a tie!`);
    else if (this.getHandTotal(dealer) > this.getHandTotal(player)) {
      console.log(`You lose!`);
      player.loseDollar();
    } else if (this.getHandTotal(dealer) < this.getHandTotal(player)) {
      console.log(`You win!`);
      player.gainDollar();
    }
  }

  playAgain() {
    console.log(`Would you like to play again? Y/N`);
    let answer = readline.question();
    if (answer[0].toLowerCase() === 'y') return true;
    else return false;
  }
  showDealerCard() {
    console.log(`The dealer is showing: ${this.dealer.hand[1]}, and a face down card.`);
  }
  showAllDealerCards() {
    console.log(`The dealer's hand: ${this.dealer.hand.join(', ')}.`);
  }
  showPlayerCards() {
    console.log(`Your hand: ${this.human.hand.join(', ')}.`);
  }
  welcomeMessage() {
    console.log(`Welcome to 21.`);
  }
  playerTurn(player) {
    while (true) {
      console.log(`Would you like to hit or stay?`);
      let choice = readline.question().toLowerCase();
      if (choice === 'hit') this.dealSingleCard(player);
      else break;
      this.showPlayerCards();
      if (this.check21(player) || this.checkBust(player)) break;
    }
  }
  dealerTurn(dealer) {
    this.showAllDealerCards();
    while (this.getHandTotal(dealer) < 17) {
      console.log(`The dealer hits.`);
      this.dealSingleCard(dealer);
      this.showAllDealerCards();
    }
  }

  showWallet() {
    if (this.human.wallet > 1) {
      console.log(`You have ${this.human.wallet} dollars.`);
    } else {
      console.log(`You have one dollar.`);
    }
  }
  resetGame() {
    this.human.hand = [];
    this.dealer.hand = [];
    this.deck = new Deck();
  }
  dealer21Win() {
    this.showAllDealerCards();
    console.log(`The dealer has 21, you lose.`);
  }
  playSingleGame() {
    this.dealHands(this.dealer, this.human);
    this.showDealerCard();
    this.showPlayerCards();

    if (this.check21(this.dealer)) {
      this.dealer21Win();
      this.human.loseDollar();
      return;
    }

    this.playerTurn(this.human);

    if (this.checkBust(this.human)) {
      console.log(`You bust!`);
      this.human.loseDollar();
      return;
    }
    this.dealerTurn(this.dealer);
    if (this.checkBust(this.dealer)) {
      console.log(`The dealer busts! You win!`);
      this.human.gainDollar();
      return;
    }

    this.compareHands(this.dealer, this.human);
  }
  playerRich() {
    return this.human.wallet >= 10;
  }
  playerPoor() {
    return this.human.wallet <= 0;
  }
  play() {
    this.welcomeMessage();
    while (true) {
      this.showWallet();
      this.playSingleGame();
      if (this.playerRich()) {
        console.log(`You're rich!`);
        break;
      }
      if (this.playerPoor()) {
        console.log(`You're too poor to play!`);
        break;
      }
      if (!this.playAgain()) break;
      this.resetGame();
    }
    console.log(`Thanks for playing!`);
  }
}


let newGame = new TwentyOneGame();
newGame.play();