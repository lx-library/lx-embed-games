const canvas = document.querySelector('canvas') 
const c = canvas.getContext('2d')


const spriteSize = 100
const canvasHeight = spriteSize * 7
canvas.width = 400


canvas.height = canvasHeight

const button = document.getElementById('button')

let gameIsRunning = true

function startGame() {
    button.style.display = "none"

    


    const wrapper = document.getElementById('wrapper')
    wrapper.style.display = "block"
    animate()
}

button.addEventListener("click", startGame);


class Player {
    constructor(letters) {
        this.initComponent()
        this.position = { 
            x: 200, 
            y: 0
        }
        this.velocity = {
            x: 0, 
            y: 0
        }
        this.letters = letters
        const image = new Image()

        
        this.currentLetter = 'f'
        this.currentLetter = this.updateCurrentLetter(1)
        

        image.src = `./images/${this.currentLetter}.png`
        this.image = image
        this.width = spriteSize
        this.height = spriteSize
        this.speed = 3
        
    }

    startTimer(){
        setInterval(() => {
            const clock = document.getElementById('clock')
            const currentTick = clock.innerHTML
            if(currentTick > 0){
                clock.innerHTML = clock.innerHTML -1
            }else{
                gameIsRunning = false
                clock.innerHTML = 0
            }
            
        }, 1000)
    }

    initComponent(){
        const score = document.getElementById('score')
        const missed = document.getElementById('missed')
        //const speed = document.getElementById('speed')
        const accuracy = document.getElementById('accuracy')
        const clock = document.getElementById('clock')

        score.innerHTML = "0"
        missed.innerHTML = "0"
        //speed.innerHTML = "0"
        accuracy.innerHTML = "0"
        clock.innerHTML = 60
        this.startTimer()
    }

    updateCurrentLetter(){
        const min = 0
        const max = this.letters.length-1
        const randomInt = this.getRandInteger(min, max)
        return this.letters[randomInt]
    }

    getRandInteger(min, max) {
        min = Math.ceil(min); // Round up to the nearest integer
        max = Math.floor(max); // Round down to the nearest integerxs
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    goToStart(){
        this.currentLetter = this.updateCurrentLetter()
        this.image.src = `./images/${this.currentLetter}.png`
        this.position.y = 0;
    }



    // Add click event listener to the moving div


    checkGroundCollision(currentY) {
        const bottomPoint = currentY + this.height
        if(bottomPoint >= canvasHeight + spriteSize){
           
            this.goToStart() 
            this.feedback('incorrect')
        }
    }

    draw() { 
        const middle = (canvas.width / 2) - (this.width / 2)
        c.clearRect(0, 0, canvas.width, canvas.height);
        c.drawImage(this.image, middle, this.position.y, 100, 100)
       
        this.checkGroundCollision(this.position.y)
        this.position.y = this.position.y + this.speed
    }

    feedback(type){
        if(type === 'correct'){
            canvas.style.backgroundColor = 'rgba(0,0,0, 0.2)'
            this.updateStats('pass')
        }else if(type === 'incorrect'){
            canvas.style.backgroundColor = 'rgba(255,0,0, 0.7)'
            this.updateStats('fail')
            this.resetCanvas()
        }
    }

    updateStats(state){

        const score = document.getElementById('score')
        const missed = document.getElementById('missed')
        const speed = document.getElementById('speed')
        const accuracy = document.getElementById('accuracy')


        if(state === "fail"){
            score.innerHTML =  score.innerHTML - 1
            missed.innerHTML = parseInt(missed.innerHTML) + 1
            //accuracy.innerHTML = "dave" 
        }
        else if(state === "pass"){
            score.innerHTML =  parseInt(score.innerHTML) + 1
            accuracy.innerHTML =  parseInt(accuracy.innerHTML) + 1
        }

    }

    resetCanvas(){
        setInterval(() => {
            canvas.style.backgroundColor = 'rgba(0,0,0, 0.2)'
        }, 300)
    }
    
  

    checkKey(pressedKey){
        console.log(pressedKey)
        if(pressedKey === this.currentLetter){
            this.feedback('correct')
            this.goToStart()
        }else{
            this.feedback('incorrect')
            this.goToStart()
        }

    }

}

const player = new Player(['f', 'j'])

addEventListener('keydown', (event) => {
    console.log("key event", event.key)
    const pressedKey = event.key
    player.checkKey(pressedKey)
})

function animate(){ 
    if(gameIsRunning){
        player.draw()
        requestAnimationFrame(animate)
    }
}

