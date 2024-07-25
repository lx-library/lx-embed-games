document.addEventListener('DOMContentLoaded', () => {
    let words = [];
    let previousErrors = localStorage.getItem('lx-spell-errors');
    if (previousErrors) {
        previousErrors = JSON.parse(previousErrors);
        const expectedValues = previousErrors.map(obj => obj.expected);
        words = expectedValues;
    }

    let currentWordIndex = 0;
    let iteration = 0;
    const maxIterations = 2;
    const container = document.createElement('div');
    const wordContainer = document.createElement('div');
    const inputContainer = document.createElement('div');
    const submitButton = document.createElement('button');
    submitButton.innerText = 'Submit';
    submitButton.style.display = 'none';
    container.appendChild(wordContainer);
    container.appendChild(inputContainer);
    container.appendChild(submitButton);
    document.body.appendChild(container);

    function loadWord() {
        if (currentWordIndex >= words.length) {
            alert('All words completed!');
            localStorage.removeItem('lx-spell-errors'); // Remove data from local storage
            return;
        }

        wordContainer.innerText = words[currentWordIndex];
        inputContainer.innerHTML = '';

        const word = words[currentWordIndex];
        const inputs = [];
        for (let i = 0; i < word.length; i++) {
            const input = document.createElement('input');
            input.type = 'text';
            input.maxLength = 1;
            input.dataset.index = i;
            inputs.push(input);
            inputContainer.appendChild(input);

            input.addEventListener('input', (e) => {
                const index = parseInt(e.target.dataset.index, 10);
                if (e.target.value.length === 1 && index < inputs.length - 1) {
                    inputs[index + 1].focus();
                } else if (index === inputs.length - 1) {
                    checkCompletion(inputs);
                }
                if (iteration === 0) {
                    wordContainer.style.display = 'none';
                }
            });
        }

        inputs[0].focus();
    }

    function checkCompletion(inputs) {
        const word = words[currentWordIndex];
        let completedWord = '';
        inputs.forEach(input => {
            completedWord += input.value;
        });

        if (completedWord === word) {
            iteration++;
            if (iteration < maxIterations) {
                inputs.forEach(input => input.value = '');
                inputs[0].focus();
            } else {
                submitButton.style.display = 'block';
            }
        }
    }

    submitButton.addEventListener('click', () => {
        iteration = 0;
        currentWordIndex++;
        submitButton.style.display = 'none';
        wordContainer.style.display = 'block';
        loadWord();
    });

    loadWord();
});
