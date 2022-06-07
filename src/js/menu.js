function toggle() {
    let nav = document.querySelector(".nav")
    let toggle = document.querySelector(".toggle")
    let toggleBox = document.querySelectorAll(".toggle-box")

    for (let i = 0; i < toggleBox.length; i++) {
        toggle.addEventListener("click", (e) => {
            e.preventDefault()
            toggleBox[i].classList.toggle("active_toggle")
        })
        nav.classList.toggle("bounce_in_top")
    }
}


function menu() {
    let link = document.querySelectorAll('.nav a')
    let main = document.querySelectorAll('.main .main_content')

    for (let i = 0; i < link.length; i++) {
        link[i].addEventListener('click', function (e) {
            e.preventDefault()
            for (let x = 0; x < link.length; x++) {
                link[x].classList.remove('link_active')
            }
            this.classList.add('link_active')
        })
    }
}

window.addEventListener('load', menu)
window.addEventListener('load', toggle)