let imgLarge = document.querySelector('img.large');
let listItems = document.querySelectorAll('#photos > ul > li');

function onImageClick(event) {
    let img = event.target;
    let src = 'large/' + img.getAttribute('src');

    imgLarge.setAttribute('src', src);
}

function addListeners() {
    listItems.forEach((li) => li.addEventListener('click', onImageClick));
}

addListeners();

let load = document.querySelector('a.load');
let list = document.querySelector('#photos > ul');

function loadImages() {
    let request = new XMLHttpRequest();
    request.open('GET', 'getrandomimages.php', true);
    request.onload = addImagesToList;
    request.send();
}

function addImagesToList() {
    let imgs = JSON.parse(this.responseText);

    imgs.forEach(function (src) {
        let li = document.createElement('li');
        let img = document.createElement('img');

        img.setAttribute('src', src);
        li.appendChild(img);
        list.appendChild(li);
    });
}

load.addEventListener('click', loadImages);