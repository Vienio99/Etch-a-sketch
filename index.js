let container = document.querySelector('.container')
let square;
for (let i = 0; i < 100; i++) {
    square = document.createElement('div');
    square.classList.add('square')
    container.appendChild(square)
}

squares = document.querySelectorAll('.square')

squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = setBg();
    })
})

const setBg = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}