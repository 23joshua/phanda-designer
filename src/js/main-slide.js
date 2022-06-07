function main() {
    let link = document.querySelectorAll('.nav a')
    let main = document.querySelectorAll('.main .main_content')

    for (let i = 0; i < link.length; i++) {
        link[i].addEventListener('click', (e) => {
            e.preventDefault();
            let dataText = link[i].getAttribute('data-text');
            for (let k = 0; k < main.length; k++) {
                main[k].classList.remove('main_active')
                if (dataText == main[k].getAttribute('id')) {
                    main[k].classList.add('main_active');
                }

            }
        });
    }
}

main()