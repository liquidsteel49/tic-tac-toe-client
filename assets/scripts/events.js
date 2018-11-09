// write function to pass submit form email as userName var (2.0)
// build an array to store gameboard information
const gameboard = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
]

const PLAYER = {
  ONE: 'x',
  TWO: 'o'
}

let currentPlayer = PLAYER.ONE

/* change current player to x or o depending on
clicking empty box */
const changeToken = function (event) {
  console.log(event)
  $(event.target).html(currentPlayer)
  playerInput(event)
  console.log('gameboard', gameboard)
  currentPlayer = currentPlayer === PLAYER.ONE ? PLAYER.TWO : PLAYER.ONE
  console.log('current player is', currentPlayer)
  $(event.target).off('click', changeToken)
}

/* sends x or o to gameboard array based on it's
event.target.dataset */
const playerInput = function (event) {
  const row = parseInt(event.target.dataset.row)
  const col = parseInt(event.target.dataset.col)
  gameboard[row][col] = currentPlayer
}


/* checks if there is a winner */


/* winning array positions */
// check if array[i] position is filled and when it matches any of the
// winning positions then check for matching x or o

module.exports = {
  changeToken
}
