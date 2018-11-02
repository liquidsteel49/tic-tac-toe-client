// write function to pass submit form email as userName var (2.0)
// build an array to store gameboard information
const gameboard = ['', '', '', '', '', '', '', '', '']

// for the future
// let userName =  || 'guest' // username from submit box

let currentPlayer = 'x'

// put player token in box

// document.findElementById().

// change current player to x or o depending on clicking empty box
const changeToken = function () {
  if (currentPlayer === 'x') {
    currentPlayer = 'o'
  } else if (currentPlayer === 'o') {
    currentPlayer = 'x'
  }
  return currentPlayer
}

/* check if valid click or turn off event
listener once clicked */

module.exports = {
  changeToken
}
