//present board, player chooses, check for win, prseent board, computer chooses,check for win
//

let readline = require('readline-sync');

class Board {
  constructor() {
    this.position = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
  }
  showBoard() {
    console.log("");
    console.log("     |     |");
    console.log(`  ${this.position[0]}  |  ${this.position[1]}  |  ${this.position[2]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.position[3]}  |  ${this.position[4]}  |  ${this.position[5]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.position[6]}  |  ${this.position[7]}  |  ${this.position[8]}`);
    console.log("     |     |");
    console.log("");
  }
  mark(marker, choice) {
    this.position[choice] = marker;
  }
}

class Player {
  constructor(marker) {
    this.marker = marker;
  }

}

class Human extends Player {
  constructor() {
    super('X');
  }
  chooseSquare(emptySquares) {
    let choice;
    while (true) {
      choice = readline.question(`Choose one of the following squares: (${emptySquares.join(', ')}) `);
      if (emptySquares.includes(+choice)) {
        break;
      }

      console.log("Sorry, that's not a valid choice.");
      console.log("");
    }
    return choice - 1;
  }
}

class Computer extends Player {
  constructor() {
    super('O');
  }
  chooseSquare(emptySquares) {
    let numberOfChoices = emptySquares.length;
    let choice = Math.floor(Math.random() * numberOfChoices);
    return emptySquares[choice];

  }
}

class TTSGame {
  constructor() {
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
  }
  static POSSIBLE_WINNING_ROWS = [
    [ "1", "2", "3" ],            // top row of board
    [ "4", "5", "6" ],            // center row of board
    [ "7", "8", "9" ],            // bottom row of board
    [ "1", "4", "7" ],            // left column of board
    [ "2", "5", "8" ],            // middle column of board
    [ "3", "6", "9" ],            // right column of board
    [ "1", "5", "9" ],            // diagonal: top-left to bottom-right
    [ "3", "5", "7" ],            // diagonal: bottom-left to top-right
  ];

  playerChoice() {
    let emptySquares = [];
    let self = this;

    this.board.position.forEach((element, index) => {
      if (self.board.position[index] === ' ') emptySquares.push(index + 1);
    });
    let choice = this.human.chooseSquare(emptySquares);
    this.board.mark(this.human.marker, choice);
  }
  computerChoice() {
    let emptySquares = [];
    let self = this;

    this.board.position.forEach((element, index) => {
      if (self.board.position[index] === ' ') emptySquares.push(index);
    });

    let choice = this.computer.chooseSquare(emptySquares);
    this.board.mark(this.computer.marker, choice);
  }
  checkWin(boardPosition, playerMaker) {
    let counter = 0;
    for (let idx = 0; idx < TTSGame.POSSIBLE_WINNING_ROWS.length; idx++) {
      let counter = 0;
      for (let idx2 = 0; idx2 < TTSGame.POSSIBLE_WINNING_ROWS[idx].length; idx2++) {
        if (boardPosition[TTSGame.POSSIBLE_WINNING_ROWS[idx][idx2] - 1] === playerMaker) counter++;
        if (idx2 === 2 && counter === 3) {
          return true;
        }
      }
    }
    return false;
  }
  gameOver() {
    let emptySquares = [];
    let self = this;
    this.board.position.forEach((element, index) => {
      if (self.board.position[index] === ' ') emptySquares.push(index);
    });
    return this.boardFull(emptySquares) || this.checkWin(this.board.position, 'X') || this.checkWin(this.board.position, 'O');
  }
  boardFull(emptySquares) {
    return emptySquares.length === 0;
  }
  playAgain() {
    let choice = readline.question(`Would you like to play again? Y/N?`);
    if (choice[0].toLowerCase() === 'y') return true;
    return false;
  }
  displayResult() {
    let emptySquares = [];
    let self = this;
    this.board.position.forEach((element, index) => {
      if (self.board.position[index] === ' ') emptySquares.push(index);
    });
    this.board.showBoard();
    switch (true) {
      case this.boardFull(emptySquares):
        console.log(`It's a tie.`);
        break;
      case this.checkWin(this.board.position, 'X'):
        console.log(`You win!`);
        break;
      case this.checkWin(this.board.position, 'O'):
        console.log(`You lose!`);
        break;
    }
  }
  play() {
    console.log(`Welcome to Tic Tac Toe!`);
    while (true) {
      while (true) {
        this.board.showBoard();
        this.playerChoice();
        if (this.gameOver()) break;
        this.computerChoice();
        if (this.gameOver()) break;
        console.clear();
      }
      this.displayResult();
      if (!this.playAgain()) {
        console.clear();
        break;
      }
      this.board = new Board();
      console.clear();
    }
    console.log(`Thanks for playing.`);
  }
}

let newGame = new TTSGame();
newGame.play();