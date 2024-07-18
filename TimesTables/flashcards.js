class FlashCards {
    constructor(parentDiv, data) {
        this.parentDiv = parentDiv;
        this.data = data;
        this.width = parentDiv.offsetWidth;
        this.height = parentDiv.offsetHeight;
        this.unit = this.width / 100;
        this.logoSize = this.unit * 7;
        this.currentCardIndex = 0;
        this.handleResize = this.handleResize.bind(this);
        this.currentInputId = 'current-input'; // ID for the current input element
        window.addEventListener('resize', this.handleResize);
    }

    handleResize() {
        this.width = this.parentDiv.offsetWidth;
        this.height = this.parentDiv.offsetHeight;
        this.unit = this.width / 100;
        this.logoSize = this.unit * 7;
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
        const element = document.getElementById("flashcard-wrapper");
        if (element) {
            element.remove();
        }

        const wrapper = document.createElement('div');
        wrapper.style.width = '100%';
        wrapper.id = "flashcard-wrapper";
        wrapper.style.height = `${this.height - (9 * this.unit)}px`;
        wrapper.style.position = 'absolute';
        wrapper.style.left = 0;
        wrapper.style.bottom = 0;
        wrapper.style.display = 'flex';
        wrapper.style.alignItems = 'center';
        wrapper.style.justifyContent = 'center';

        const square = document.createElement('div');
        square.style.height = `${this.height - (9 * this.unit)}px`;
        square.style.width = `${this.height - (9 * this.unit)}px`;

        const topSq = document.createElement('div');
        topSq.style.height = '50%';
        topSq.style.width = '50%';
        topSq.style.margin = 'auto';

        const bottomSq = document.createElement('div');
        bottomSq.style.height = '50%';
        bottomSq.style.width = '100%';
        bottomSq.style.margin = 'auto';
        bottomSq.style.display = 'grid';
        bottomSq.style.gridTemplateColumns = '1fr 1fr';

        let nextCardData = (this.data.cards && this.data.cards[this.currentCardIndex]) || null;
        nextCardData = this.hideRandomCard(nextCardData);
        nextCardData = this.assignRandomState(nextCardData);
        nextCardData = this.shuffleArray(nextCardData);

        const node1 = this.newNode(nextCardData[0]);
        const node2 = this.newNode(nextCardData[1]);
        const node3 = this.newNode(nextCardData[2]);

        topSq.appendChild(node1);
        bottomSq.appendChild(node2);
        bottomSq.appendChild(node3);

        square.appendChild(topSq);
        square.appendChild(bottomSq);

        wrapper.appendChild(square);

        this.parentDiv.appendChild(wrapper);

        // Refocus the input after rendering
        const inputElement = document.getElementById(this.currentInputId);
        if (inputElement) {
            inputElement.focus();
        }
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

    update() {
        this.currentCardIndex++;
        if (this.currentCardIndex >= this.data.cards.length) {
            this.currentCardIndex = 0;
            debugger
        }
        this.draw();
    }

    newNode(nodeData) {
        const state = (nodeData && nodeData.state) || null;
        const isHidden = (nodeData && nodeData.isHidden) || null;
        const question = (nodeData && nodeData.question) || null;
        const src = (nodeData && nodeData.src) || null;
        if (!state || !question || !src) return;

        const newNode = document.createElement('div');
        newNode.style.height = '80%';
        newNode.style.width = '80%';
        newNode.style.borderRadius = '50%';
        newNode.style.backgroundColor = 'teal';
        newNode.style.display = 'flex';
        newNode.style.alignItems = 'center';
        newNode.style.justifyContent = 'center';
        newNode.style.fontSize = '8vw';
        newNode.style.color = 'white';

        const input = document.createElement('input');
        input.style.width = '12vw';
        input.style.height = '8vw';
        input.style.borderRadius = '2vw';
        input.style.textAlign = 'center';
        input.style.fontSize = '5vw';
        input.id = this.currentInputId; // Assign the ID to the input element

        // Arrow function to preserve 'this'
        input.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                // Handle Enter key press
                console.log('Enter key pressed', event.target.value);
                this.update(); // Call update method from class instance
            }
        });

        if (state === 'IMAGE') {
            if (isHidden) {
                newNode.append(input);
            } else {
                const imgElement = document.createElement('img');
                imgElement.src = question;
                imgElement.style.height = '80%';
                imgElement.style.width = '80%';
                imgElement.style.backgroundColor = 'white';
                imgElement.style.borderRadius = '50%';
                newNode.appendChild(imgElement);
            }
        } else if (state === 'TEXT') {
            if (isHidden) {
                newNode.append(input);
            } else {
                const imgElement = document.createElement('img');
                imgElement.src = src;
                imgElement.style.height = '80%';
                imgElement.style.width = '80%';
                imgElement.style.backgroundColor = 'white';
                imgElement.style.borderRadius = '50%';
                newNode.appendChild(imgElement);
            }
        }

        return newNode;
    }

    startGame() {
        this.draw();
    }
}