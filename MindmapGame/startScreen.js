const startScreen = document.getElementById('start-screen')
startScreen.style.position = 'fixed'
startScreen.style.top = '0'
startScreen.style.left = '0'
startScreen.style.zIndex = '3'

let windowWidth = window.innerWidth
let unit = windowWidth / 100

startScreen.style.width = '100%'
startScreen.style.paddingTop = '56.25%';
startScreen.style.background = 'url("http://127.0.0.1:5503/MindmapGame/assets/startScreen/bg.png")'
startScreen.style.backgroundRepeat = 'no-repeat';
startScreen.style.backgroundSize = 'cover';
startScreen.style.position = 'absolute';

const teacher = document.createElement('img');
teacher.style.position = 'absolute'
teacher.style.width = '30%'
teacher.style.height = 'auto'
teacher.style.left = '35%'
teacher.style.bottom = '0'
teacher.style.zIndex = '10'
teacher.src = "http://127.0.0.1:5503/MindmapGame/assets/startScreen/teacher.png"

const bubble = document.createElement('div');
bubble.style.position = 'absolute'
bubble.style.width = (unit * 23 * 1.5) + 'px'
bubble.style.height = (unit * 15 * 1.5) + 'px'
bubble.style.left = (unit * 10) + 'px'
bubble.style.top = (unit * 15) + 'px'
bubble.style.background = 'url("http://127.0.0.1:5503/MindmapGame/assets/startScreen/bubble.png")'
bubble.style.backgroundRepeat = 'no-repeat';
bubble.style.backgroundSize = 'cover';
bubble.style.paddingRight = (unit * 3) + 'px'
bubble.style.paddingTop = (unit * 1) + 'px'

const bubbleText = document.createElement('div');
bubbleText.style.width = '100%'
bubbleText.style.height = '100%'
bubbleText.style.display = 'flex'
bubbleText.style.alignItems = 'center'
bubbleText.style.justifyContent = 'center'
bubbleText.style.fontSize = (unit * 3) + 'px'
bubbleText.style.paddingRight = (unit * 30) + 'px'
bubbleText.innerHTML = "Click to Start!"


startScreen.append(teacher)
startScreen.append(bubble)
bubble.append(bubbleText)

function startGame(){
    startScreen.style.display = "none"
    startTimer()
}

startScreen.addEventListener('click', startGame)
