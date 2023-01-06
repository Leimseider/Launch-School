/* eslint-disable max-lines-per-function */
const readline = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const MATCH_WIN = 5;
const WINNING_COMBOS = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];

function prompt(message) {
  console.log(`${message}`);
}

// eslint-disable-next-line max-statements
function displayBoard(board) {
  console.clear();

  console.log('Win 5 games to win the match!');
  console.log('Human is X. AI Overlord is O.');

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};
  for (let idx = 1; idx <= 9; idx++) {
    board[idx] = INITIAL_MARKER;
  }
  return board;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function winCondition(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  for (let idx = 0; idx < WINNING_COMBOS.length; idx++) {
    let [sq1, sq2, sq3] = WINNING_COMBOS[idx];
    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Human';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'AI Overlord';
    }
  }
  return null;
}

function findWinningSquare(line, board, marker) {
  let markersOnBoard = line.map(square => board[square]);

  if (markersOnBoard.filter(value => value === marker).length === 2) {
    let emptySquare = line.find(square => board[square] === INITIAL_MARKER);
    if (emptySquare !== undefined) {
      return emptySquare;
    }
  }
  return null;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function playerChoice(board) {
  let playerChoice;

  while (true) {
    prompt(`Choose a square: ${joinOr(emptySquares(board))}`);
    playerChoice = readline.question().trim();

    if (emptySquares(board).includes(playerChoice)) break;

    prompt('Choose a valid square.');

  }
  board[playerChoice] = HUMAN_MARKER;
}

// eslint-disable-next-line max-statements
function computerChoice(board) {
  //look at empty squares, choose empty square, add 0 to empty square
  let square;
  for (let idx = 0; idx < WINNING_COMBOS.length; idx++) {
    let line = WINNING_COMBOS[idx];
    square = findWinningSquare(line, board, COMPUTER_MARKER);
    if (square) break;
  }

  if (!square) {
    for (let idx = 0; idx < WINNING_COMBOS.length; idx++) {
      let line = WINNING_COMBOS[idx];
      square = findWinningSquare(line, board, HUMAN_MARKER);
      if (square) break;
    }
  }
  if (!square) {
    if (board[5] === INITIAL_MARKER) {
      square = 5;
    }
  }
  if (!square) {
    let possibleChoices = emptySquares(board); //an array of available squares
    let randomIndex = Math.floor(Math.random() * possibleChoices.length);
    square = emptySquares(board)[randomIndex];
  }
  board[square] = COMPUTER_MARKER;
}


function joinOr(array, splitter = ', ', word = 'or') {
  if (array.length > 1) {
    return array.slice(0, -1)
    // eslint-disable-next-line indent
                     .join(splitter) +
                     splitter +
                     word +
                     ' ' +
                     array.slice(-1) +
                     '.';
  } else if (array.length === 1) {
    return array + '.';
  } else {
    return '';
  }
}

function alternatePlayer(currentPlayer) {
  if (currentPlayer === 'human') {
    return 'ai overlord';
  } else {
    return 'human';
  }
}

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === 'ai overlord') {
    computerChoice(board);
  } else {
    playerChoice(board);
  }
}

while (true) {
  let playerScore = 0;
  let computerScore = 0;
  while (true) {
    let board = initializeBoard();
    displayBoard(board);
    prompt('Who would you like to go first? Choose "Human" or "AI Overlord"');
    let currentPlayer = readline.question().toLowerCase();
    while (currentPlayer !== 'human' && currentPlayer !== 'ai overlord') {
      prompt('You most choose "Human" or "AI Overlord"!');
      currentPlayer = readline.question().toLowerCase();
    }

    while (true) {
      displayBoard(board);
      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);
      if (winCondition(board) || boardFull(board)) break;
    }


    if (boardFull(board)) {
      prompt("It's a tie!");
    } else {
      prompt(`${detectWinner(board)} wins!`);
      if (detectWinner(board) === 'Human') {
        playerScore++;
      } else {
        computerScore++;
      }
    }
    prompt(`Human: ${playerScore} - AI Overlord: ${computerScore}`);
    if (playerScore >= MATCH_WIN || computerScore >= MATCH_WIN) {
      playerScore = 0;
      computerScore = 0;
      prompt(`${detectWinner(board)} won the match!`);
    }
    prompt('Battle again?');
    let replay = readline.question().toLowerCase();
    let validAnswers = ['yes', 'no', 'y', 'n'];
    while (validAnswers.includes(replay) === false) {
      prompt(`Choose either yes or no!`);
      replay = readline.question().toLowerCase();
    }
    if (replay[0] !== 'y') break;

  }
  prompt(`Thanks for playing!`);
  break;
}