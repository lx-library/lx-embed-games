const parent = document.getElementById('times-tables')

const toolbar = new Toolbar(parent);
const startScreen = new StartScreen(parent)


let inPlay = false

function startGame(){
    inPlay = true
    reRender()
    toolbar.startTimer()
}
function onAnswerSubmitted(answer, usersAnswer){
    let isCorrect = false
    if(usersAnswer === answer){
        isCorrect = true
    }
    if(isCorrect){
        toolbar.updateScore(1)
        changeColor('times-tables', 'green')
    }else{
        toolbar.updateScore(-1)
        changeColor('times-tables', 'red')
    }
}
function changeColor(divId, newColor) {
    const div = document.getElementById(divId);
    
    // Change to the new color instantly
    div.style.transition = 'none'; // Disable transition for the immediate change
    div.style.backgroundColor = newColor;
    
    // Force a reflow to apply the immediate style change
    div.offsetHeight; // This is a trick to force reflow
  
    // Change back to the default color over one second
    div.style.transition = 'background-color 1s ease';
    div.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
  }
// Usage example:
const cards = [
    [
        {
            src: 'assets/encodings/3.png',
            question: 'assets/numbers/3.png',
            answer: '3'
        },
        {
            src: 'assets/encodings/4.png',
            question: 'assets/numbers/4.png',
            answer: '4'
        },
        {
            src: 'assets/encodings/12.png',
            question: 'assets/numbers/12.png',
            answer: '12'
        },
    ],
    [
        {
            src: 'assets/encodings/3.png',
            question: 'assets/numbers/3.png',
            answer: '3'
        },
        {
            src: 'assets/encodings/5.png',
            question: 'assets/numbers/5.png',
            answer: '5'
        },
        {
            src: 'assets/encodings/15.png',
            question: 'assets/numbers/15.png',
            answer: '15'
        },
    ],
    [
        {
            src: 'assets/encodings/3.png',
            question: 'assets/numbers/3.png',
            answer: '3'
        },
        {
            src: 'assets/encodings/6.png',
            question: 'assets/numbers/6.png',
            answer: '6'
        },
        {
            src: 'assets/encodings/18.png',
            question: 'assets/numbers/18.png',
            answer: '18'
        },
    ],
    [
        {
            src: 'assets/encodings/3.png',
            question: 'assets/numbers/3.png',
            answer: '3'
        },
        {
            src: 'assets/encodings/7.png',
            question: 'assets/numbers/7.png',
            answer: '7'
        },
        {
            src: 'assets/encodings/21.png',
            question: 'assets/numbers/21.png',
            answer: '21'
        },
    ],
    [
        {
            src: 'assets/encodings/3.png',
            question: 'assets/numbers/3.png',
            answer: '3'
        },
        {
            src: 'assets/encodings/8.png',
            question: 'assets/numbers/8.png',
            answer: '8'
        },
        {
            src: 'assets/encodings/24.png',
            question: 'assets/numbers/24.png',
            answer: '24'
        },
    ],
    [
        {
            src: 'assets/encodings/3.png',
            question: 'assets/numbers/3.png',
            answer: '3'
        },
        {
            src: 'assets/encodings/9.png',
            question: 'assets/numbers/9.png',
            answer: '9'
        },
        {
            src: 'assets/encodings/27.png',
            question: 'assets/numbers/27.png',
            answer: '27'
        },
    ],
    [
        {
            src: 'assets/encodings/3.png',
            question: 'assets/numbers/3.png',
            answer: '3'
        },
        {
            src: 'assets/encodings/12.png',
            question: 'assets/numbers/12.png',
            answer: '12'
        },
        {
            src: 'assets/encodings/36.png',
            question: 'assets/numbers/36.png',
            answer: '36'
        },
    ],
    [
        {
            src: 'assets/encodings/4.png',
            question: 'assets/numbers/4.png',
            answer: '4'
        },
        {
            src: 'assets/encodings/4.png',
            question: 'assets/numbers/4.png',
            answer: '4'
        },
        {
            src: 'assets/encodings/16.png',
            question: 'assets/numbers/16.png',
            answer: '16'
        },

    ],
    [
        {
            src: 'assets/encodings/4.png',
            question: 'assets/numbers/4.png',
            answer: '4'
        },
        {
            src: 'assets/encodings/5.png',
            question: 'assets/numbers/5.png',
            answer: '5'
        },
        {
            src: 'assets/encodings/20.png',
            question: 'assets/numbers/20.png',
            answer: '20'
        },
    ],
    [
        {
            src: 'assets/encodings/4.png',
            question: 'assets/numbers/4.png',
            answer: '4'
        },
        {
            src: 'assets/encodings/6.png',
            question: 'assets/numbers/6.png',
            answer: '6'
        },
        {
            src: 'assets/encodings/24.png',
            question: 'assets/numbers/24.png',
            answer: '24'
        },

    ],
    [
        {
            src: 'assets/encodings/4.png',
            question: 'assets/numbers/4.png',
            answer: '4'
        },
        {
            src: 'assets/encodings/7.png',
            question: 'assets/numbers/7.png',
            answer: '7'
        },
        {
            src: 'assets/encodings/28.png',
            question: 'assets/numbers/28.png',
            answer: '28'
        },
    ],
    [
        {
            src: 'assets/encodings/4.png',
            question: 'assets/numbers/4.png',
            answer: '4'
        },
        {
            src: 'assets/encodings/8.png',
            question: 'assets/numbers/8.png',
            answer: '8'
        },
        {
            src: 'assets/encodings/32.png',
            question: 'assets/numbers/32.png',
            answer: '32'
        },
    ],
    [
        {
            src: 'assets/encodings/4.png',
            question: 'assets/numbers/4.png',
            answer: '4'
        },
        {
            src: 'assets/encodings/9.png',
            question: 'assets/numbers/9.png',
            answer: '9'
        },
        {
            src: 'assets/encodings/36.png',
            question: 'assets/numbers/36.png',
            answer: '36'
        },
    ],
    [
        {
            src: 'assets/encodings/4.png',
            question: 'assets/numbers/4.png',
            answer: '4'
        },
        {
            src: 'assets/encodings/12.png',
            question: 'assets/numbers/12.png',
            answer: '12'
        },
        {
            src: 'assets/encodings/48.png',
            question: 'assets/numbers/48.png',
            answer: '48'
        },
    ],
];
const data = {
    cards: cards
};


const flashcards = new FlashCards(parent, data)



function reRender(){
    toolbar.draw();
    if(!inPlay) {
        startScreen.draw()
    }else{
        flashcards.startGame()
    }
}

reRender()