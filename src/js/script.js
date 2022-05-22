let bars = document.querySelector('.btn-bars')
let nav = document.querySelector('nav')
let link = document.querySelector('.a_link')

function menuRemoveClass() {
    nav.classList.toggle('active')
}
bars.addEventListener('click', ()=>{
    link.classList.add('link_active')
})