let bars = document.querySelector('.btn-menu')
let nav = document.querySelector('.nav')

function menuRemoveClass() {
    nav.classList.toggle('active')
}
bars.addEventListener('click', menuRemoveClass)