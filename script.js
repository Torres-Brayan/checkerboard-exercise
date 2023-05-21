const container = document.querySelector("body");

function makeSquare(color) {
    const div = document.createElement('div')
    div.style.height = "12.5%"
    div.style.width = "12.5%"
    div.style.backgroundColor = color
    container.style.display = 'flex'
    container.style.flexWrap = 'wrap'
    container.style.width = "800px"
    container.style.height = "800px"
    container.style.margin = 'auto'
    container.style.padding = '10px'

    container.appendChild(div)
}

// function randomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for(var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

function makeBoard() {
    for(var i = 0; i < 8; i++) {
        for(var j = 0; j < 8; j++) {
        if((i + j) % 2 == 0) {
            makeSquare('red');
        } else {
            makeSquare('black');
        }
    }
  }
}
makeBoard();