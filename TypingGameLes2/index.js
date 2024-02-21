
const canvas = document.querySelector('canvas') 
const c = canvas.getContext('2d')

let startingX = 20
let startingY = 20

console.log(innerWidth)
console.log(innerHeight)

canvas.width = innerWidth
canvas.height = innerHeight



class Letter{
    constructor(){
        console.log("a new letter has been created")
        // this.image = new Image()
        // this.image.src = './images/f.png'
        // this.speed = 4

        //use a person anaylogy
    }

    moveDown(){
        c.clearRect(0, 0, canvas.width, canvas.height);
        //c.fillRect(startingX, startingY, 100, 100);
        c.drawImage(this.image, startingX, startingY, 100, 100)
        startingY = startingY + this.speed
    }
}

 const letter = new Letter()


function animate(){ 
    console.log("running")
    letter.moveDown()
    requestAnimationFrame(animate)
}

animate()