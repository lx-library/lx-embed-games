const dataSets = {
    addition: [
        {
            operands: [8, 7],
            operation: 'ADDITION'
        },
        {
            operands: [5, 9],
            operation: 'ADDITION'
        },
        {
            operands: [6, 7],
            operation: 'ADDITION'
        },
        {
            operands: [5, 12],
            operation: 'ADDITION'
        },
        {
            operands: [-5, 2],
            operation: 'ADDITION'
        },
        {
            operands: [-12, 5],
            operation: 'ADDITION'
        },
        {
            operands: [-16, 7],
            operation: 'ADDITION'
        }
    ],
    subtraction: [
        {
            operands: [9, 4],
            operation: 'SUBTRACTION'
        },
        {
            operands: [12, 5],
            operation: 'SUBTRACTION'
        },
        {
            operands: [14, 6],
            operation: 'SUBTRACTION'
        },
        {
            operands: [22, 13],
            operation: 'SUBTRACTION'
        },
        {
            operands: [7, 9],
            operation: 'SUBTRACTION'
        },
        {
            operands: [4, 12],
            operation: 'SUBTRACTION'
        },
        {
            operands: [5, 16],
            operation: 'SUBTRACTION'
        },
        {
            operands: [8, 19],
            operation: 'SUBTRACTION'
        },
        {
            operands: [-14, 5],
            operation: 'SUBTRACTION'
        }

        
    ]
};

// Function to get the dataset parameter from the URL
function getDataSetFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('set') || 'addition'; // Default to 'addition' if no parameter is provided
}

let currentIndex = 0;
const incorrectAnswers = [];

// Get the data set based on the URL parameter
const selectedDataSet = getDataSetFromURL();
const data = dataSets[selectedDataSet] || dataSets['addition']; // Fallback to 'addition' if set not found

function displayOperation() {
    const currentData = data[currentIndex];
    const [num1, num2] = currentData.operands;
    let operationSign;

    // Determine the operation sign based on the operation type
    if (currentData.operation === 'ADDITION') {
        operationSign = '+';
    } else if (currentData.operation === 'SUBTRACTION') {
        operationSign = '-';
    }

    // Display the current operation
    document.getElementById('operation-display').innerText = `${num1} ${operationSign} ${num2}`;
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('user-answer').value, 10);
    const currentData = data[currentIndex];
    const [num1, num2] = currentData.operands;
    let correctAnswer;

    // Calculate the correct answer based on the operation type
    if (currentData.operation === 'ADDITION') {
        correctAnswer = num1 + num2;
    } else if (currentData.operation === 'SUBTRACTION') {
        correctAnswer = num1 - num2;
    }

    // Check if the user's answer is correct
    if (userAnswer !== correctAnswer) {
        incorrectAnswers.push({
            question: `${num1} ${currentData.operation === 'ADDITION' ? '+' : '-'} ${num2}`,
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
