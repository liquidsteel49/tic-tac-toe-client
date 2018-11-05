// write function to pass submit form email as userName var (2.0)
// build an array to store gameboard information
const gameboard = ['', '', '', '', '', '', '', '', '']

let currentPlayer = 'x'

// put player token in box

// document.findElementById().

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

// sends x or o to gameboard array based on it's event.target.id
const playerInput = function (event) {
  const id = parseInt(event.target.id)
  gameboard[id] = currentPlayer
}

/* check if valid click or turn off event
listener once clicked */

module.exports = {
  changeToken
}
