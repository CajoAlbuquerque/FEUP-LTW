'use strict'

let form = document.getElementById('register')
let username = document.querySelector('#register input[name="username"]')
let submit = document.querySelector('#register input[type="submit"]')

function onSubmitClick(evt) {
    evt.preventDefault()

    let request = new XMLHttpRequest()
    request.open('POST', 'verifyusername.php', true)
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    request.onload = responseReady
    request.send('username=' + username.value)
}

function responseReady() {
    let response = JSON.parse(this.responseText)

    if(response.valid) {
        username.style['border-color'] = ''
        form.submit()
    } else {
        username.style['border-color'] = 'red'
    }
}

submit.addEventListener('click', onSubmitClick)