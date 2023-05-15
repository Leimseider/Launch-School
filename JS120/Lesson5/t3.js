//present board, player chooses, check for win, prseent board, computer chooses,check for win
//

let readline = require('readline-sync');

let boardPrototype = {

  init(position = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']) {
    this.position = position;
    return this;
  },

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
  },
  mark(marker, choice) {
    this.position[choice] = marker;
  }
};

let playerPrototype = {
  init(marker) {
    this.marker = marker;
    return this;
  }
};

let humanPrototype = Object.create(playerPrototype);

humanPrototype.chooseSquare = function(emptySquares) {
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
};


let computerPrototype = Object.create(playerPrototype);

computerPrototype.chooseSquare = function(emptySquares) {
  let numberOfChoices = emptySquares.length;
  let choice = Math.floor(Math.random() * numberOfChoices);
  return emptySquares[choice];
};


let TTSGame = {
  init() {
    this.board = Object.create(boardPrototype).init();
    this.human = Object.create(humanPrototype).init('X');
    this.computer = Object.create(computerPrototype).init('O');
    return this;
  },
  POSSIBLE_WINNING_ROWS: [
    [ "1", "2", "3" ],            // top row of board
    [ "4", "5", "6" ],            // center row of board
    [ "7", "8", "9" ],            // bottom row of board
    [ "1", "4", "7" ],            // left column of board
    [ "2", "5", "8" ],            // middle column of board
    [ "3", "6", "9" ],            // right column of board
    [ "1", "5", "9" ],            // diagonal: top-left to bottom-right
    [ "3", "5", "7" ],            // diagonal: bottom-left to top-right
  ],

  playerChoice() {
    let emptySquares = [];
    let self = this;

    this.board.position.forEach((element, index) => {
      if (self.board.position[index] === ' ') emptySquares.push(index + 1);
    });
    let choice = this.human.chooseSquare(emptySquares);
    this.board.mark(this.human.marker, choice);
  },

  computerChoice() {
    let emptySquares = [];
    let self = this;

    this.board.position.forEach((element, index) => {
      if (self.board.position[index] === ' ') emptySquares.push(index);
    });

    let choice = this.computer.chooseSquare(emptySquares);
    this.board.mark(this.computer.marker, choice);
  },

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
  },

  gameOver() {
    let emptySquares = [];
    let self = this;
    this.board.position.forEach((element, index) => {
      if (self.board.position[index] === ' ') emptySquares.push(index);
    });
    return this.checkWin(this.board.position, 'X') || this.checkWin(this.board.position, 'O') || this.boardFull(emptySquares);
  },

  boardFull(emptySquares) {
    return emptySquares.length === 0;
  },

  playAgain() {
    let choice = readline.question(`Would you like to play again? Y/N?`);
    if (choice[0].toLowerCase() === 'y') return true;
    return false;
  },

  displayResult() {
    let emptySquares = [];
    let self = this;
    this.board.position.forEach((element, index) => {
      if (self.board.position[index] === ' ') emptySquares.push(index);
    });
    this.board.showBoard();
    switch (true) {
      case this.checkWin(this.board.position, 'X'):
        console.log(`You win!`);
        break;
      case this.checkWin(this.board.position, 'O'):
        console.log(`You lose!`);
        break;
      case this.boardFull(emptySquares):
        console.log(`It's a tie.`);
        break;
    }
  },

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
      this.board = Object.create(boardPrototype).init();
      console.clear();
    }
    console.log(`Thanks for playing.`);
  },
};

let newGame = Object.create(TTSGame).init();
console.log(newGame);
newGame.play();