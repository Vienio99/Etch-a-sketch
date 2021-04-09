function findSquare(number) {
    return Math.sqrt(number).toFixed()
}

const setBg = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}

function createGrid(size) {
    let squaredSize = findSquare(size)
    size = squaredSize * squaredSize;
    for (let i = 0; i < size; i++) {
        square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
        container.style.gridTemplateColumns = "repeat(" + Math.sqrt(size) + ", 0fr)";
    } 
}

const container = document.querySelector('.container')
let square;

let size = 10;
createGrid(size);

// Button to change size of the grid
const changeSize = document.querySelector('.main-buttons #size')

changeSize.addEventListener('click', () => {
    size = prompt('Choose size from 1 to 100');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    createGrid(size);
})


const squares = document.querySelectorAll('.square')


container.onmouseover = function(event) {
    if (event.target.className === 'square') {
        event.target.style.backgroundColor = setBg();
    }
}

const restart = document.querySelector('.main-buttons #restart')
restart.addEventListener('click', () => {
    squares.forEach((square) => {
        square.style.backgroundColor = 'white';
    })
})

