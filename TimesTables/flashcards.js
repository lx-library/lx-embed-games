class FlashCards {
    constructor(parentDiv, data) {
        this.parentDiv = parentDiv;
        this.data = data;
        this.currentCardIndex = 0;
        this.currentInputId = 'current-input'; // ID for the current input element
        this.handleResize = this.handleResize.bind(this);
        window.addEventListener('resize', this.handleResize);
        this.updateDimensions();
    }

    updateDimensions() {
        this.width = this.parentDiv.offsetWidth;
        this.height = this.parentDiv.offsetHeight;
        this.unit = this.width / 100;
        this.logoSize = this.unit * 7;
    }

    handleResize() {
        this.updateDimensions();
        this.draw();
    }

    hideRandomCard(cardData) {
        if (cardData.length !== 3) {
            throw new Error("The cardData array must contain exactly three items.");
        }

        const randomIndex = Math.floor(Math.random() * 3);
        return cardData.map((card, index) => ({
            ...card,
            isHidden: index === randomIndex
        }));
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    draw() {
        const existingWrapper = document.getElementById("flashcard-wrapper");
        if (existingWrapper) {
            existingWrapper.remove();
        }

        const wrapper = document.createElement('div');
        wrapper.id = "flashcard-wrapper";
        Object.assign(wrapper.style, {
            width: '100%',
            height: `${this.height - (9 * this.unit)}px`,
            position: 'absolute',
            left: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        });

        const square = document.createElement('div');
        Object.assign(square.style, {
            height: `${this.height - (9 * this.unit)}px`,
            width: `${this.height - (9 * this.unit)}px`
        });

        const topSq = document.createElement('div');
        Object.assign(topSq.style, {
            height: '50%',
            width: '50%',
            margin: 'auto'
        });

        const bottomSq = document.createElement('div');
        Object.assign(bottomSq.style, {
            height: '50%',
            width: '100%',
            margin: 'auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr'
        });

        let nextCardData = this.data.cards?.[this.currentCardIndex] || null;
        nextCardData = this.shuffleArray(this.assignRandomState(this.hideRandomCard(nextCardData)));

        [topSq, bottomSq].forEach((sq, idx) => {
            sq.appendChild(this.newNode(nextCardData[idx]));
            if (idx === 1) sq.appendChild(this.newNode(nextCardData[2]));
        });

        square.append(topSq, bottomSq);
        wrapper.appendChild(square);
        this.parentDiv.appendChild(wrapper);

        // Refocus the input after rendering
        document.getElementById(this.currentInputId)?.focus();
    }

    getRandomState() {
        return Math.random() >= 0.5 ? 'TEXT' : 'IMAGE';
    }

    assignRandomState(cardData) {
        if (cardData.length !== 3) {
            throw new Error("The cardData array must contain exactly three items.");
        }

        return cardData.map(card => ({
            ...card,
            state: this.getRandomState()
        }));
    }

    update(answer, usersAnswer) {
        onAnswerSubmitted(answer, usersAnswer)
        this.currentCardIndex = (this.currentCardIndex + 1) % this.data.cards.length;
        this.draw();
    }

    newNode({ state, isHidden, question, src, answer }) {
        if (!state || !question || !src) return;

        const newNode = document.createElement('div');
        Object.assign(newNode.style, {
            height: '80%',
            width: '80%',
            borderRadius: '50%',
            backgroundColor: 'teal',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '8vw',
            color: 'white'
        });

        const input = document.createElement('input');
        Object.assign(input.style, {
            width: '12vw',
            height: '8vw',
            borderRadius: '2vw',
            textAlign: 'center',
            fontSize: '5vw'
        });
        input.id = this.currentInputId;
        input.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                console.log('Enter key pressed', event.target.value);
                this.update(answer, event.target.value);
            }
        });

        if (isHidden) {
            newNode.appendChild(input);
        } else {
            const imgElement = document.createElement('img');
            imgElement.src = state === 'IMAGE' ? question : src;
            Object.assign(imgElement.style, {
                height: '80%',
                width: '80%',
                backgroundColor: 'white',
                borderRadius: '50%'
            });
            newNode.appendChild(imgElement);
        }

        return newNode;
    }

    startGame() {
        this.draw();
    }
}
