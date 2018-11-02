'use strict'

// api user to server comm

let apiUrl
const apiUrls = {
  production: '<replace-with-heroku-url>',
  development: 'http://localhost:7165'
}
// do i need to chang below line because of localhost?
if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
