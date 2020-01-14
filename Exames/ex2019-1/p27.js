'use strict'

let gameId = document.getElementById('tic-tac-toe')['data-id']
let squares = document.querySelectorAll('#tic-tac-toe > .square')
let state = document.getElementById('state')

function encodeForAjax(data) {
    return Object.keys(data).map(function(k){
    return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&')
}

function startGame() {
    let request = new XMLHttpRequest()

    request.open('GET', 'play.php?id=' + gameId, true)
    request.onload = updateState
    request.send()
}

function updateState() {
    let response = JSON.parse(this.responseText)
    let resSquares = response.squares

    state.innerHTML = response.state

    resSquares.forEach(function (resValue, index) {
        squares[index].innerHTML = resValue 
    })
}

startGame()