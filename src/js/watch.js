function watch() {
    let data = new Date()
    let hours = data.getHours()
    let min = data.getMinutes()
    let secs = data.getSeconds()
    let days = data.getDate()
    let daysWeek = data.getDay()
    let month = data.getMonth() + 1
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
    if (min < 10) {
        min = `0${min}`
    }
    if (secs < 10) {
        secs = `0${secs}`
    }
    if (days < 10) {
        days = `0${days}`
    }
    if (month < 10) {
        month = `0${month}`
    }

    // Mudando o valor do month para texto
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

function getUserPosition() {
    let url;
    navigator.geolocation.getCurrentPosition((pos) => {
        let lat = pos.coords.latitude;
        let long = pos.coords.longitude;
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&APPID=44b9548462145b818914485d2ae65147`;
        fetchApi(url)
        // console.log(url)
    })
}

function fetchApi(url) {
    let city = document.querySelector('.city')
    let temp = document.querySelector('.tempo')
    let humidade = document.querySelector('.humidade')
    let icon = document.querySelector('.icon')
    fetch(url)
        .then((data) => {
            return data.json()
        })
        .then((data) => {
            let tempInCelsius = ((5 / 9) * (data.main.temp - 32)).toFixed(0)
            // let tempMinInCelsius = ((5/9) * (data.main.temp_min-32)).toFixed(1)
            city.innerText = `${data.name}`
            temp.innerText = tempInCelsius
            humidade.innerText = `${data.main.humidity}`
        })
        .catch((err) => {
            city.innerText = `Impossível acessar o OpenWeather. Verifique a sua conexão.`;
            temp.innerText = `-`;
        })
}
window.addEventListener('load', watch)
window.addEventListener('load', getUserPosition)