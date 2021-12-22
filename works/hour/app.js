let second = document.querySelector('.second');
let minute = document.querySelector('.minute');

let now = new Date();
let seconds = now.getSeconds();
let secondRotation = (90 + seconds * 6)