class CharacterInput {
    constructor(words) {
        this.words = words;
        this.currentWordIndex = 0;
        this.successfulAttempts = 0;  // Counter for successful attempts
        this.container = document.createElement('div');
        this.container.classList.add('input-container');
        this.inputs = [];
        this.displayTextElement = this.displayText();
        this.loadWord();
    }

    loadWord() {
        this.container.innerHTML = ''; // Clear previous inputs
        this.inputs = [];
        if (this.currentWordIndex < this.words.length) {
            this.text = this.words[this.currentWordIndex];
            this.createInputs();
            this.focusFirstInput();
        } else {
            this.displayTextElement.textContent = 'You have completed all the words!';
            localStorage.removeItem('lx-spell-errors'); // Clear local storage
        }
    }

    createInputs() {
        for (let i = 0; i < this.text.length; i++) {
            const input = document.createElement('input');
            input.type = 'text';
            input.maxLength = 1;
            input.classList.add('input-box');
            input.addEventListener('input', (e) => this.handleInput(e, i));
            this.inputs.push(input);
            this.container.appendChild(input);
        }
        document.body.appendChild(this.container);
    }

    displayText() {
        const textDisplay = document.createElement('div');
        textDisplay.classList.add('text-display');
        document.body.insertBefore(textDisplay, this.container);
        return textDisplay;
    }

    handleInput(event, index) {
        const input = event.target;
        if (input.value.length > 0) {
            if (index < this.inputs.length - 1) {
                this.inputs[index + 1].focus();
            } else {
                this.checkInputs();
            }
        }
    }

    checkInputs() {
        let userInput = this.inputs.map(input => input.value).join('');
        if (userInput === this.text) {
            this.successfulAttempts++;
            if (this.successfulAttempts >= 10) {
                alert('Congratulations! You have typed the text correctly 10 times.');
                this.successfulAttempts = 0;  // Reset the counter after alert
            }
            this.currentWordIndex++;
            this.loadWord(); // Load the next word
        } else {
            console.log('Error: The input does not match the expected word.');
            this.resetInputs();
            this.focusFirstInput();
        }
        // Hide the display text after checking inputs
        if (this.displayTextElement) {
            this.displayTextElement.style.display = 'none';
        }
    }

    resetInputs() {
        this.inputs.forEach(input => input.value = '');
    }

    focusFirstInput() {
        if (this.inputs.length > 0) {
            this.inputs[0].focus();
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let errors = localStorage.getItem('lx-spell-errors');
    if (errors) {
        errors = JSON.parse(errors).map(error => error.expected);
        new CharacterInput(errors);
    } else {
        console.log('No errors found in local storage.');
    }
});