'use strict'

// let gameId = document.getElementById('tic-tac-toe')['data-id']
// let squares = document.querySelectorAll('#tic-tac-toe > .square')

function executePlay(position) {
    let msg = {'id':gameId, 'position':position}
    let request = new XMLHttpRequest()

    request.open('GET', 'play.php?' + encodeForAjax(msg), true)
    request.onload = updateState
    request.send()
}

squares.forEach(function (square, index) {
    square.addEventListener('click', () => executePlay(index + 1))
})