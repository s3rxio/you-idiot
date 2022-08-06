'use strict'

const randomPosition = () => {
    const min = 50;
    const x = Math.floor(Math.random() * (window.innerWidth - min) + min) - min;
    const y = Math.floor(Math.random() * (window.innerHeight - min) + min) - min;
    return { x, y }
}

const editButtonPosition = (button) => {
    const { x, y } = randomPosition();
    console.log(x, y);
    button.style.position = 'absolute';
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    switch (button.dataset.action) {
        case 'editTitle':
            button.addEventListener('click', () => {
                document.querySelector('.question__title').innerHTML = button.dataset.title
            });
            break;
        case 'editButtonPosition':
            button.ontouchstart = editButtonPosition.bind(null, button);
            button.onclick = editButtonPosition.bind(null, button);
            button.onmouseenter = editButtonPosition.bind(null, button);
            break;
    }
});