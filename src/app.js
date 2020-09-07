const button = document.getElementById('button-tradaru');

let eventClick = () => {
    if(!button.classList.contains('loading')) {
        button.classList.add('loading');

        setTimeout(() => {
            button.classList.add('done');
            setTimeout(() => {
                button.classList.add('loading');
                button.classList.add('add');
            }, 1500);
        }, 3000);
    }
}

button.addEventListener('click', eventClick)
button.addEventListener('touch', eventClick)