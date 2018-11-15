'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./events.js')

// click listeners
// $('.gameboard').on('click', events.exampleFunc)
$(() => {
  $('.cell').on('click', events.changeToken)
  $('.reset').on('click', events.reset)
})
