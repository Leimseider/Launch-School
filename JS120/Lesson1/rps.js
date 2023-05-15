/* eslint-disable max-lines-per-function */
const readline = require('readline-sync');

function createPlayer() {
  return {
    move: null,
  };
}

function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {
    choose() {
      const choices = ['rock', 'paper', 'scissors'];
      let randomNumber = Math.floor(Math.random() * choices.length);
      this.move = choices[randomNumber];
    },
  };
  return Object.assign(playerObject, computerObject);
}

function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    choose() {
      let choice;

      while (true) {
        console.log('Choose rock, paper, or scissors.');
        choice = readline.question();
        if (['rock', 'paper', 'scissors'].includes(choice)) break;
        console.log('Invalid choice!');
      }

      this.move = choice;
    }
  };
  return Object.assign(playerObject, humanObject);
}

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),

  displayWelcomeMessage() {
    console.log('Welcome to the Battlezone.');
  },

  displayGoodbyeMessage() {
    console.log('Blood has been shed. Goodbye...for now.');
  },

  displayWinner() {
    console.log(`You chose ${this.human.move}.`);
    console.log(`The computer chose ${this.computer.move}.`);
  },

  playAgain() {
    console.log('Battle again?');
    let answer = readline.question();
    return answer[0] === 'y';
  },

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      if (!this.playAgain()) break;
    }
    this.displayGoodbyeMessage();
  },
};

RPSGame.play();