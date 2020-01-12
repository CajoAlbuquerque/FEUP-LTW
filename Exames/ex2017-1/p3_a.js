'use strict'

let addButtons = document.querySelectorAll('#products > ul > li > a')
let quantities = document.getElementsByClassName('qty')

function enableAddListeners() {
    for(let i = 0; i < addButtons.length; i++) {
        let qty = quantities[i]
        let button = addButtons[i]
        button.addEventListener('click', incrementOne.bind(button, qty))
    }
}

function incrementOne(element) {
    let oldValue = parseInt(element.textContent)
    element.textContent = oldValue + 1
}

enableAddListeners()