const canvas = document.querySelector('canvas') 
const c = canvas.getContext('2d')

let startingX = 20
let startingY = 20
const letterSize = 80

canvas.width = innerWidth
canvas.height = innerHeight


class Letter{
    moveDown(){
        c.clearRect(0, 0, canvas.width, canvas.height);
        c.fillRect(startingX, startingY, letterSize, letterSize)
        startingY++;
        console.log('square drawn')
    }
}

const letter = new Letter()






function animate(){
    letter.moveDown()
    requestAnimationFrame(animate)
}

animate()














// function moveDown(){
//     c.clearRect(0, 0, canvas.width, canvas.height);
//     c.fillRect(startingX, startingY, 100, 100);
//     startingY = startingY + 1
// }

// function animate(){ 
//     console.log("running")
//     moveDown()
//     requestAnimationFrame(animate)
// }

// animate()