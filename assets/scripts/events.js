// write function to pass submit form email as userName var (2.0)
const api = require('./auth/api.js')
const ui = require('./auth/ui.js')

// build an array to store gameboard information
let gameboard = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
]

const checkWinner = function () {
  const winningCombos = [
    [gameboard[0][0], gameboard[0][1], gameboard[0][2]],
    [gameboard[1][0], gameboard[1][1], gameboard[1][2]],
    [gameboard[2][0], gameboard[2][1], gameboard[2][2]],
    [gameboard[0][0], gameboard[1][0], gameboard[2][0]],
    [gameboard[0][1], gameboard[1][1], gameboard[2][1]],
    [gameboard[0][2], gameboard[1][2], gameboard[2][2]],
    [gameboard[0][0], gameboard[1][1], gameboard[2][2]],
    [gameboard[0][2], gameboard[1][1], gameboard[2][0]]
  ]
  // => implies return because this is all single line
  /* returns firs element that fits condiion or returns -1 */
  const winner = winningCombos.findIndex((combo) => combo.every(cell => cell === currentPlayer))
  return winner > -1
}

const PLAYER = {
  ONE: 'x',
  TWO: 'o'
}

let currentPlayer = PLAYER.ONE

let moveCount = 0

/* change current player to x or o depending on
clicking empty box */
const changeToken = function (event) {
  // row and col of element clicked
  $(event.target).html(currentPlayer)
  console.log(event)
  // function puts x or o on board
  playerInput(event)
  // parses through whole board to find if current player wins
  const isWinner = checkWinner()
  // increase move count
  moveCount += 1
  $(event.target).off('click', changeToken)
  console.log('move count', moveCount)
  // tie
  if (isWinner === false && moveCount === 9) {
    console.log('It\'s a tie')
  // if no winner keep going
  } else if (isWinner === false) {
    // swap player if no winner
    currentPlayer = currentPlayer === PLAYER.ONE ? PLAYER.TWO : PLAYER.ONE
    // winner
  } else {
    $('.cell').off('click', changeToken)
    console.log(`Winner is ${currentPlayer}`)
    // ui.onWin(currentPlayer) Send currentPlayer to a UI function that will show the winner on screen
    // Make sure to delete the HTML on reset
  }
  console.log(gameboard)
}

/* sends x or o to gameboard array based on it's
event.target.dataset */
const playerInput = function (event) {
  const row = parseInt(event.target.dataset.row)
  const col = parseInt(event.target.dataset.col)
  gameboard[row][col] = currentPlayer
}
// use cell as the common class to make empty gameboard
const reset = () => {
  $('.cell').off('click', changeToken)
  $('.cell').on('click', changeToken)
  $('.cell').empty()
  moveCount = 0
  currentPlayer = PLAYER.ONE
  gameboard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]
  console.log('Current player', currentPlayer)
  console.log(gameboard)
}
// check if array[i] position is filled and when it matches any of the
// winning positions then check for matching x or o

module.exports = {
  changeToken,
  reset
}
