//present board, player chooses, check for win, prseent board, computer chooses,check for win
//

let readline = require('readline-sync');

function Board() {
  this.position = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
}

Board.prototype.showBoard = function() {
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
};

Board.prototype.mark = function(marker, choice) {
  this.position[choice] = marker;
};

function Player(marker) {
  this.marker = marker;
}

function Human() {
  Player.call(this, 'X');
}

Human.prototype = Object.create(Player.prototype); //
Human.prototype.constructor = Human;

Human.prototype.chooseSquare = function(emptySquares) {
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

function Computer() {
  Player.call(this, 'O');
}

Computer.prototype = Object.create(Player.prototype);
Computer.prototype.constructor = Computer;

Computer.prototype.chooseSquare = function(emptySquares) {
  let numberOfChoices = emptySquares.length;
  let choice = Math.floor(Math.random() * numberOfChoices);
  return emptySquares[choice];
};

function TTSGame() {
  this.board = new Board();
  this.human = new Human();
  this.computer = new Computer();
}

TTSGame.POSSIBLE_WINNING_ROWS = [
  [ "1", "2", "3" ],            // top row of board STATIC???
  [ "4", "5", "6" ],            // center row of board
  [ "7", "8", "9" ],            // bottom row of board
  [ "1", "4", "7" ],            // left column of board
  [ "2", "5", "8" ],            // middle column of board
  [ "3", "6", "9" ],            // right column of board
  [ "1", "5", "9" ],            // diagonal: top-left to bottom-right
  [ "3", "5", "7" ],            // diagonal: bottom-left to top-right
];

TTSGame.prototype.playerChoice = function() {
  let emptySquares = [];
  let self = this;

  this.board.position.forEach((element, index) => {
    if (self.board.position[index] === ' ') emptySquares.push(index + 1);
  });
  let choice = this.human.chooseSquare(emptySquares);
  this.board.mark(this.human.marker, choice);
};

TTSGame.prototype.computerChoice = function() {
  let emptySquares = [];
  let self = this;

  this.board.position.forEach((element, index) => {
    if (self.board.position[index] === ' ') emptySquares.push(index);
  });

  let choice = this.computer.chooseSquare(emptySquares);
  this.board.mark(this.computer.marker, choice);
};

TTSGame.prototype.checkWin = function(boardPosition, playerMaker) {
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
};

TTSGame.prototype.gameOver = function() {
  let emptySquares = [];
  let self = this;
  this.board.position.forEach((element, index) => {
    if (self.board.position[index] === ' ') emptySquares.push(index);
  });
  return this.checkWin(this.board.position, 'X') || this.checkWin(this.board.position, 'O') || this.boardFull(emptySquares);
};

TTSGame.prototype.boardFull = function(emptySquares) {
  return emptySquares.length === 0;
};

TTSGame.prototype.playAgain = function() {
  let choice = readline.question(`Would you like to play again? Y/N?`);
  if (choice[0].toLowerCase() === 'y') return true;
  return false;
};

TTSGame.prototype.displayResult = function() {
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
};

TTSGame.prototype.play = function() {
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
};

let newGame = new TTSGame();
newGame.play();