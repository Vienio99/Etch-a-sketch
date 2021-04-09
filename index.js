const container = document.querySelector('.container')
let square;

function findSquare(number) {
    return Math.sqrt(number).toFixed()
}

function createGrid(size) {
    size = findSquare(size) * findSquare(size);
    for (let i = 0; i < size; i++) {
        square = document.createElement('div');
        square.classList.add('square')
        container.appendChild(square)
        container.style.gridTemplateColumns = "repeat(" + Math.sqrt(size) + ", 0fr)";
    } 
}

const changeSize = document.querySelector('.main-buttons #size')

changeSize.addEventListener('click', () => {
    size = prompt('Choose size from 1 to 100');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    createGrid(size);
})
let size = 10;

createGrid(size);

const squares = document.querySelectorAll('.square')

squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = setBg();
    })
})

const setBg = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}

const restart = document.querySelector('.main-buttons #restart')
restart.addEventListener('click', () => {
    squares.forEach((square) => {
        square.style.backgroundColor = 'white';
    })
})

