function watch() {
    let data = new Date()
    let hours = data.getHours()
    let min = data.getMinutes()
    let secs = data.getSeconds()
    let days = data.getDate()
    let daysWeek = data.getDay()
    let month = data.getMonth()+1
    let year = data.getFullYear()

    let h = document.querySelector('#h')
    let m = document.querySelector('#m')
    let s = document.querySelector('#s')

    let w = document.querySelector('#w')
    let d = document.querySelector('#d')
    let mm = document.querySelector('#mm')
    let y = document.querySelector('#y')

    // adicionando zero para os valores abaixo de 10 
    if (hours < 10) {
        hours = `0${hours}`
    }
    if (min < 10){
        min = `0${min}`
    }
    if (secs < 10){
        secs = `0${secs}`
    }
    if (days < 10){
        days = `0${days}`
    }
    if (month < 10){
        month = `0${month}`
    }
    //Mundado o valor do month para texto
    switch (daysWeek) {
        case 0:
            daysWeek = 'Dom'
            break
        case 1:
            daysWeek = 'Seg'
            break
        case 2:
            daysWeek = 'Ter'
            break
        case 3:
            daysWeek = 'Qua'
            break
        case 4:
            daysWeek = 'Qui'
            break
        case 5:
            daysWeek = 'Sex'
            break
        default:
            daysWeek = 'Sab'
            break                        
    }

    h.textContent = hours
    m.textContent = min
    s.textContent = secs

    w.textContent = daysWeek
    d.textContent = days
    mm.textContent = month
    y.textContent = year

    let time = setInterval(watch, 1000)
}

window.addEventListener('load', watch)

let dataHora = new Date()

console.log(dataHora)