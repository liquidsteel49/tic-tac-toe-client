'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

// should not use fat arror functions for promises
const onSignUp = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // take this data and send it to our server
  // using an HTTP request (POST)
  api.signUp(data)
    .then(ui.signUpSuccess) // if your request was succesful
    .catch(ui.signUpFailure) // if your request failed
}

const onSignIn = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = event => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onReset = event => {
  api.reset()
    .then(ui.onResetSuccess)
    .catch(ui.onResetFailure)
}
// something here isn't right
const onCellClick = event => {
  const index = $(event.target).attr('.data-apiIndex').replace('cell id', '')
  const value = currentPlayer
  const over = checkIfOver()
  const data = {
    game: {
      cell: {
        index,
        value
      },
      over
    }
  }
  api.patchGame(data)
    .then(ui.onPatchGameSuccess)
    .catch(ui.onPatchGameFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onReset
}
