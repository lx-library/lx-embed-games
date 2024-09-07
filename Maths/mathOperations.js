const data = [
    {
        operands: [3, 6],
        operation: 'ADDITION'
    },
    {
        operands: [-2, 5],
        operation: 'ADDITION'
    },
    {
        operands: [3, 6],
        operation: 'ADDITION'
    }
];

let currentIndex = 0;
const incorrectAnswers = [];

function displayOperation() {
    const currentData = data[currentIndex];
    const [num1, num2] = currentData.operands;
    let operationSign = '+';
    
    if (currentData.operation === 'ADDITION') {
        operationSign = '+';
    }

    // Display the current operation
    document.getElementById('operation-display').innerText = `${num1} ${operationSign} ${num2}`;
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('user-answer').value, 10);
    const currentData = data[currentIndex];
    const [num1, num2] = currentData.operands;
    let correctAnswer = 0;

    if (currentData.operation === 'ADDITION') {
        correctAnswer = num1 + num2;
    }

    if (userAnswer !== correctAnswer) {
        incorrectAnswers.push({
            question: `${num1} + ${num2}`,
            userAnswer: userAnswer,
            correctAnswer: correctAnswer
        });
    }

    currentIndex++;
    if (currentIndex < data.length) {
        displayOperation();
        document.getElementById('user-answer').value = ''; // Clear input
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('operation-container').style.display = 'none';
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.style.display = 'block';
    
    const incorrectAnswersDiv = document.getElementById('incorrect-answers');
    incorrectAnswers.forEach(item => {
        const resultItem = document.createElement('p');
        resultItem.textContent = `Question: ${item.question} | Your Answer: ${item.userAnswer} | Correct Answer: ${item.correctAnswer}`;
        incorrectAnswersDiv.appendChild(resultItem);
    });
}

// Event listener for the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);

// Event listener for the 'Enter' key on the input field
document.getElementById('user-answer').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkAnswer();
    }
});

// Initial call to display the first operation
displayOperation();
