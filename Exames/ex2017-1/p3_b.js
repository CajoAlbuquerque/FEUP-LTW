'use strict'

let buybutton = document.querySelector('div#products a.buy')
let total = document.querySelector('div#products p.total')
let qtys = document.querySelectorAll('div#products span.qty')
let names = document.querySelectorAll('div#products > ul > li')

function encodeForAjax(data) {
    return Object.keys(data).map(function(k){
      return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&')
}

function sendRequest() {
    let msg = setupMessage()
    let request = new XMLHttpRequest()
    request.open('POST', 'calculatetotal.php')
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    request.onload = updateTotal
    request.send('msg=' + JSON.stringify(msg))
}

function setupMessage() {
    let message = []

    names.forEach( function (li, index) {
        let qty = qtys[index].innerHTML
        let name = li.innerHTML.split(':')[0]
        let product = {};

        product['name'] = name
        product['qty'] = qty
        message.push(product)
    })

    return message
}

function updateTotal() {
    let response = this.responseText

    if (response < 0) {
        total.innerHTML = 'not enough stock'
    } else {
        total.innerHTML = response
    }
}

buybutton.addEventListener('click', sendRequest)