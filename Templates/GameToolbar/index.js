const scoreValue = document.getElementById('score')

const plusButton = document.getElementById('plus-btn')
const minusButton = document.getElementById('minus-btn')

function onAddScore(){
    const oldValue = parseInt(score.innerHTML)
    const newValue = oldValue + 1
    scoreValue.innerHTML = newValue
}
function onMinusScore(){
    const oldValue = parseInt(score.innerHTML)
    const newValue = oldValue - 1
    scoreValue.innerHTML = newValue
}

plusButton.addEventListener('click', onAddScore)
minusButton.addEventListener('click', onMinusScore)