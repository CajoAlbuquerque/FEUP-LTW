'use strict'

let pass = document.querySelector('#register input[name="password"]')

function onPassBlur(evt) {
    let value = evt.target.value

    if(value.length >= 8 && /\W/.test(value)){
        evt.target.style['border-color'] = ''
    } else {
        evt.target.style['border-color'] = 'red'
    }
}

pass.addEventListener('blur', onPassBlur)