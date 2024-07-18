const toolbarMain = document.getElementById('toolbar')
const toolbarWrapper = document.createElement('div');
const logo = document.createElement('div');

const clockWrapper = document.createElement('div');
const clockIcon = document.createElement('div');
const time = document.createElement('div');
time.id = 'time'
time.innerHTML = '00:00'

const scoreWrapper = document.createElement('div');
const scoreIcon = document.createElement('div');
const score = document.createElement('div');
score.id = 'score'
score.innerHTML = 0

toolbarMain.appendChild(toolbarWrapper); 
toolbarWrapper.appendChild(logo); 
toolbarWrapper.appendChild(clockWrapper); 
toolbarWrapper.appendChild(scoreWrapper); 

clockWrapper.appendChild(clockIcon); 
clockWrapper.appendChild(time); 

scoreWrapper.appendChild(scoreIcon); 
scoreWrapper.appendChild(score); 

let padding
let logoSize
let previousScore = 0

function updateVars(){
    windowWidth = window.innerWidth
    padding = unit
    logoSize = unit * 7
}
function reRender(){
    debugger
    drawToolbar()
    drawLogo()
    drawTimer()
    drawScore()
}
function drawToolbar(){
    const toolbarWidth = unit * 100
    //Toolbar Wrapper
    toolbarWrapper.style.width = toolbarWidth + 'px'
    toolbarWrapper.style.position = 'fixed'
    toolbarWrapper.style.top = 0
    toolbarWrapper.style.left = 0
    toolbarWrapper.style.zIndex = 1
    toolbarWrapper.style.height = (
        padding +
        logoSize +
        padding
    ) + 'px'
    toolbarWrapper.style.backgroundColor = 'rgba(0,0,0, 0.6)'
    
}
function drawLogo(){
    //Toolbar Wrapper
    logo.style.width = logoSize + 'px'
    logo.style.height = logoSize + 'px'
    logo.style.position = 'absolute'
    logo.style.top = padding + 'px'
    logo.style.left = padding + 'px'
    logo.style.backgroundImage = 'url("http://127.0.0.1:5503/images/gameIcons/mindmap.png")'
    logo.style.backgroundSize = 'cover'
    logo.style.backgroundPosition = 'center'
    logo.style.backgroundRepeat = 'no-repeat'
    logo.style.borderRadius = '30%'
}
function drawTimer(){
    clockWrapper.style.width = logoSize + 'px'
    clockWrapper.style.height = logoSize + 'px'
    clockWrapper.style.position = 'absolute'
    clockWrapper.style.top = padding + 'px'
    clockWrapper.style.left = padding + (windowWidth / 2) - (logoSize / 2) + 'px'

    clockIcon.style.width = logoSize + 'px'
    clockIcon.style.height = logoSize + 'px'
    clockIcon.style.backgroundImage = 'url("http://127.0.0.1:5503/images/clock.png")'
    clockIcon.style.backgroundSize = 'cover'
    clockIcon.style.backgroundPosition = 'center'
    clockIcon.style.backgroundRepeat = 'no-repeat'
    clockIcon.style.borderRadius = '30%'

    
    time.style.width = logoSize  + 'px'
    time.style.height = logoSize + 'px'
    time.style.position = 'absolute'
    time.style.top = 0
    time.style.right = (unit * -12) + 'px'
    time.style.display = "flex"
    time.style.justifyContent = "center"
    time.style.alignItems = "center"
    time.style.color = "white"
    time.style.fontSize = (unit * 5) + 'px'
}
function drawScore(){
    scoreWrapper.style.width = (logoSize * 2)  + 'px'
    scoreWrapper.style.height = logoSize + 'px'
    scoreWrapper.style.position = 'absolute'
    scoreWrapper.style.top = padding + 'px'
    scoreWrapper.style.right = padding + 'px'


    scoreIcon.style.width = logoSize  + 'px'
    scoreIcon.style.height = logoSize + 'px'
    scoreIcon.style.backgroundImage = 'url("http://127.0.0.1:5503/images/score.png")'
    scoreIcon.style.backgroundSize = 'cover'
    scoreIcon.style.backgroundPosition = 'center'
    scoreIcon.style.backgroundRepeat = 'no-repeat'
    scoreIcon.style.borderRadius = '30%'

    score.style.width = logoSize  + 'px'
    score.style.height = logoSize + 'px'
    score.style.position = 'absolute'
    score.style.top = 0
    score.style.right = 0 + 'px'
    score.style.display = "flex"
    score.style.justifyContent = "center"
    score.style.alignItems = "center"
    score.style.color = "white"
    score.style.fontSize = (unit * 5) + 'px'
}
function resizeCanvas3() {
    updateVars()
    reRender()
}
function startTimer() {
    let timer = 0; // Start from 0 seconds
    const display = document.getElementById('time');

    const interval = setInterval(() => {
        let minutes = Math.floor((timer % 3600) / 60);
        let seconds = timer % 60;

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        display.textContent = `${minutes}:${seconds}`;

        timer++;
    }, 1000);
}

function animateScore(color){
    console.log(`Run ${color} animation...`)
}

const targetNode = document.getElementById('score');

const observerOptions = {
    childList: true,
    subtree: true,
};

const observerCallback = (mutationsList, observer) => {
    for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            const newScore = parseInt(targetNode.innerHTML)
            if(newScore > previousScore){
                animateScore("GREEN")
            }else{
                animateScore("RED")
            }
            previousScore = newScore
        }
    }
};

const observer = new MutationObserver(observerCallback);

observer.observe(targetNode, observerOptions);

function changeContent() {
    debugger
    //targetNode.innerHTML = 'Content has been changed!';
}
resizeCanvas3()
// startTimer()
//window.addEventListener('resize', resizeCanvas3);