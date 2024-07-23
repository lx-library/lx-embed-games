class CharacterInput {
    constructor(text) {
        this.text = text;
        this.successfulAttempts = 0;  // Counter for successful attempts
        this.container = document.createElement('div');
        this.container.classList.add('input-container');
        this.inputs = [];
        this.createInputs();
        this.displayTextElement = this.displayText();
        this.focusFirstInput();
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
        textDisplay.textContent = this.text;
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
                this.resetInputs();
                this.focusFirstInput();
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
        } else {
            console.log('Error: The input does not match the expected word.');
            console.log('Expected:', this.text);
            console.log('Received:', userInput);
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

// Example usage
document.addEventListener('DOMContentLoaded', () => {
    new CharacterInput('hello');
});
