const canvas = document.querySelector('canvas') 
const c = canvas.getContext('2d')

const spriteSize = 100
const canvasHeight = spriteSize * 7

canvas.width = 400
canvas.height = canvasHeight

const button = document.getElementById('start_button')
button.addEventListener("click",(event) => {
    startGame()
});

const wrapper = document.getElementById('wrapper')

let gameIsRunning = true

class Player {
    constructor() {
        this.initComponent()
        this.position = { 
            x: 200, 
            y: 0
        }
        this.velocity = {
            x: 0, 
            y: 0
        }
        const image = new Image()

        
        // this.currentLetter = 'f'
        // this.currentLetter = this.updateCurrentLetter(1)
        

        image.src = `./images/${this.currentLetter}.png`
        this.image = image
        this.width = spriteSize
        this.height = spriteSize
        this.speed = 3
        
    }

    setLetters(letters){
        this.letters = letters
    }

    startTimer(){
        this.goToStart()
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
        accuracy.innerHTML = "0"
        clock.innerHTML = 60
        
    }

    updateCurrentLetter(){
        if(this.letters){
            const min = 0
            const max = this.letters.length-1
            const randomInt = this.getRandInteger(min, max)
            return this.letters[randomInt]
        }
        
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

const player = new Player()


function startGame(){
    start_button.style.display = 'none'
    wrapper.style.display = 'inline'
    player.startTimer()
    this.animate()
}
const gradeRButton = document.getElementById('grade_r')
gradeRButton.addEventListener("click",(event) => {
    onLevelSelect('GRADE_R')
    toggleContainer()
});

const grade1Button = document.getElementById('grade_1')
grade1Button.addEventListener("click",(event) => {
    onLevelSelect('GRADE_1')
    toggleContainer()
});

const grade2Button = document.getElementById('grade_2')
grade2Button.addEventListener("click",(event) => {
    onLevelSelect('GRADE_2')
    toggleContainer()
});

const grade3Button = document.getElementById('grade_3')
grade3Button.addEventListener("click",(event) => {
    onLevelSelect('GRADE_3')
    toggleContainer()
});

function toggleContainer(){
    const buttonsContainer = document.getElementById('buttons')
    buttonsContainer.style.display = 'none'

    const startButton = document.getElementById('start_button')
    startButton.style.display = 'inline'
}





let letters = []



addEventListener('keydown', (event) => {
    console.log("key event", event.key)
    const pressedKey = event.key
    player.checkKey(pressedKey)
})

function onLevelSelect(level){
    console.log(level)
    switch(level){
        case 'GRADE_R':
            letters = ['f', 'j', 'g']
            player.setLetters(letters)
            return
        case 'GRADE_1':
            letters = ['f', 'j', 'g', 'h']
            player.setLetters(letters)
            return
        case 'GRADE_2':
            letters = ['f', 'j', 'g', 'h', 'd', 'k']
            player.setLetters(letters)
            return
        case 'GRADE_3':
            letters = ['f', 'j', 'g', 'h', 'd', 'k', 's', 'a', 'l']
            player.setLetters(letters)
            return
        default:
            return null
    }
}
function animate(){ 
    if(gameIsRunning){
        player.draw()
        requestAnimationFrame(animate)
    }
}

