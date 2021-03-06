const setBg = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}

function createGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size ** 2; i++) {
        square = document.createElement('div');
        square.classList.add('square');
        square.style.backgroundColor = 'white';
        container.appendChild(square);
        square.style.height = square.style.width;
    } 
}

const container = document.querySelector('.container')
let square;

let size = 10;
createGrid(size);

// Button to change size of the grid
const changeSize = document.querySelector('.main-buttons #size')

changeSize.addEventListener('click', () => {
    let ask = true;
    while (ask) {
        let userValue = prompt('Enter a number between 1 to 100');
        if (userValue === null) {
            ask = false;
            break;
        } else if (userValue > 1 && userValue < 100) {
            ask = false;
            size = userValue;
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
            createGrid(size);
            break;
        } 
    }

})


let squares = document.querySelectorAll('.square')


container.onmouseover = function(event) {
    if (event.target.className === 'square') {
        event.target.style.backgroundColor = setBg();
    }
}

const restart = document.querySelector('.main-buttons #restart')

restart.onclick = function(event) {
    // To select newly created squares
    squares = document.querySelectorAll('.square')
    squares.forEach((square) => {
        square.style.backgroundColor = 'white';
    })
    
}