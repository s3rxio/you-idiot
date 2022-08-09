'use strict'

const randomPosition = () => {
    const min = 50;
    const x = Math.floor(Math.random() * (window.innerWidth - min) + min) - min;
    const y = Math.floor(Math.random() * (window.innerHeight - min) + min) - min;
    return { x, y }
}

const editButtonPosition = (button) => {
    if(isIdiot) return;
    const { x, y } = randomPosition();
    button.style.position = 'absolute';
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
    button.style.zIndex = '1';
    button.style.backgroundColor = 'unset';
    button.style.color = '#fff';
}

const buttons = document.querySelectorAll('.button');
const questionTitle = document.querySelector('.question__title');
let isIdiot = false;
buttons.forEach(button => {
    let {action, title} = button.dataset;
    switch (action) {
        case 'editTitle':
            button.onclick = () => {
                if (isIdiot) title = "YEAA, YOU IdIoT";
                questionTitle.textContent = title;
                isIdiot = true;
            };
            break;

        case 'editButtonPosition':
                button.ontouchstart = () => editButtonPosition(button);
                button.onclick = () => isIdiot ? questionTitle.textContent = title : editButtonPosition(button);
                button.onmouseenter = () => editButtonPosition(button);

            break;
    }
});