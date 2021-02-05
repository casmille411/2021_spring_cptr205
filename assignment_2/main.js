alert('Click and press buttons to make rectangles appear.')

let canvas = document.querySelector('canvas');

let context = canvas.getContext('2d');

        context.fillStyle = 'red'
            context.fillRect(80, 75, 10, 10)

document.addEventListener('keydown', keydown => {
    if(keydown.key === '')
        context.fillStyle = 'orange'
            context.fillRect(50, 75, 10, 10)
}); 

document.addEventListener('click', click => {
        context.fillStyle = 'orange'
            context.fillRect(110, 75, 10, 10)
}); 



