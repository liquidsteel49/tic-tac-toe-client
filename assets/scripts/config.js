'use strict'

// api user to server comm
let apiUrl
const apiUrls = {
  production: 'https://aqueous-atoll-85096.herokuapp.com/',
  development: 'http://localhost:7165'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
