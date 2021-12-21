function changeImage(a) {
    document.querySelector('.big-image img').setAttribute('src', a.querySelector('img').getAttribute('src'))
}