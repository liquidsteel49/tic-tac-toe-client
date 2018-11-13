// write function to pass submit form email as userName var (2.0)
// build an array to store gameboard information
const gameboard = [
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
  // function puts x or o on board
  playerInput(event)
  // parses through whole board to find if current player wins
  const isWinner = checkWinner()
  // increase move count
  moveCount += 1
  console.log(moveCount)
  // if no winner keep going
  if (isWinner === false) {
    // swap player if no winner
    currentPlayer = currentPlayer === PLAYER.ONE ? PLAYER.TWO : PLAYER.ONE
    // if no winner, lock down cell
    $(event.target).off('click', changeToken)
    // tie
  } else if (isWinner === false && moveCount === 9) {
    console.log('It\'s a tie')
    // win
  } else {
    $('.cell').off('click', changeToken)
    console.log(`Winner is ${currentPlayer}`)
  }
}

/* sends x or o to gameboard array based on it's
event.target.dataset */
const playerInput = function (event) {
  const row = parseInt(event.target.dataset.row)
  const col = parseInt(event.target.dataset.col)
  gameboard[row][col] = currentPlayer
}

// check if array[i] position is filled and when it matches any of the
// winning positions then check for matching x or o

module.exports = {
  changeToken
}
