// write function to pass submit form email as userName var (2.0)
// build an array to store gameboard information
const gameboard = ['', '', '', '', '', '', '', '', '']

let currentPlayer = 'x'

// put player token in box

// document.findElementById().

// change current player to x or o depending on clicking empty box
const changeToken = function (event) {
  console.log(event)

/* assigns currentPlayer marker then switches
marker to either x or o depending on what it
was previous */
  $(event.target).html(currentPlayer)
  if (currentPlayer === 'x') {
    currentPlayer = 'o'
  } else if (currentPlayer === 'o') {
    currentPlayer = 'x'
  }
  return currentPlayer
}



const playerInput = function (event) {
  gameboard.map(event.target(id))
}

/* check if valid click or turn off event
listener once clicked */

module.exports = {
  changeToken
}
