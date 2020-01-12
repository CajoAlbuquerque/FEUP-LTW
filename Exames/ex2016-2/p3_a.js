'use strict'

let pin = document.querySelector('#pin > input[name="pin"]')
let keys = document.querySelectorAll('div#keypad > a')

function onNumClick(evt) {
    let num = evt.target.innerHTML
    pin.value += num
}

keys.forEach(function (key){
    key.addEventListener('click', onNumClick)
})