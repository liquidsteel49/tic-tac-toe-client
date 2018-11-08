// write function to pass submit form email as userName var (2.0)
// build an array to store gameboard information
const gameboard = ['', '', '', '', '', '', '', '', '']

let currentPlayer = 'x'

/* change current player to x or o depending on
clicking empty box */
const changeToken = function (event) {
  console.log(event)
  $(event.target).html(currentPlayer)
  playerInput(event)
  console.log('gameboard', gameboard)
  if (currentPlayer === 'x') {
    currentPlayer = 'o'
  } else if (currentPlayer === 'o') {
    currentPlayer = 'x'
  }
  console.log('current player is', currentPlayer)
  return currentPlayer
}

/* sends x or o to gameboard array based on it's
event.target.id */
const playerInput = function (event) {
  const id = parseInt(event.target.id)
  gameboard[id] = currentPlayer
}

/* checks if there is a winner */


/* winning array positions */
// check if array[i] position is filled and when it matches any of the
// winning positions then check for matching x or o
const winningPositions = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 8]]

/* if winning positions filled are all markers same? */


/* check if valid click or turn off event
listener once clicked */

module.exports = {
  changeToken
}
