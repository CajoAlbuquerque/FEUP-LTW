'use strict'

let username = document.querySelector('#pin > input[name="username"]')
let pin2 = document.querySelector('#pin > input[name="pin"]')
let submit = document.querySelector('#pin > input[type="submit"]')

function sendRequest(evt) {
    evt.preventDefault()

    let request = new XMLHttpRequest()
    request.open('POST', 'verify_pin.php')
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    request.onload = responseReceived
    request.send('username=' + username.value + '&pin=' + pin2.value)
}

function responseReceived() {
    let response = JSON.parse(this.responseText)

    if(response['valid'] === 'false') {
        pin2.style['border-color'] = 'red'
        pin2.value = ''
    } else {
        alert('Logged In!')
    }
}

submit.addEventListener('click', sendRequest)