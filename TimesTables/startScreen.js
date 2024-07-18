class StartScreen {
    constructor(parentDiv) {
        this.parentDiv = parentDiv;
        this.width = parentDiv.offsetWidth; // Get the width of the parentDiv
        this.unit = this.width / 100;

        this.handleResize = this.handleResize.bind(this);
        window.addEventListener('resize', this.handleResize);
    }

    handleResize() {
        this.width = this.parentDiv.offsetWidth; 
        this.unit = this.width / 100;
        this.draw(); 
    }

    draw() {
        // Clear previous content
        this.parentDiv.innerHTML = '';

        const screenWrapper = document.createElement('div');
        screenWrapper.style.width = this.width + 'px';
        screenWrapper.style.height = (this.unit * (9 / 16) * 100) + 'px';
        screenWrapper.style.position = 'absolute';
        screenWrapper.style.top = 0;
        screenWrapper.style.left = 0;
        screenWrapper.style.backgroundColor = 'rgba(0,0,0, 0.7)';
        screenWrapper.style.cursor = 'pointer';

        const teacherImage = document.createElement('img');
        teacherImage.src = 'assets/teacher.png';
        teacherImage.style.width = '30%';
        teacherImage.style.height = 'auto';
        teacherImage.style.position = 'absolute';
        teacherImage.style.bottom = 0;
        teacherImage.style.left = '35%';

        const startBtn = document.createElement('img');
        startBtn.src = 'assets/bubble.png';
        startBtn.style.width = '30%';
        startBtn.style.height = 'auto';
        startBtn.style.position = 'absolute';
        startBtn.style.top = '25%';
        startBtn.style.left = '13%';

        const text = document.createElement('div');
        text.style.position = 'absolute';
        text.style.top = '38%';
        text.style.fontSize = '3vw';
        text.style.left = '22%';
        text.innerHTML = "START!";

        screenWrapper.append(startBtn);
        screenWrapper.append(text);
        screenWrapper.append(teacherImage);
        this.parentDiv.append(screenWrapper);

        // Add event listener to screenWrapper
        screenWrapper.addEventListener('click', this.handleClick);
    }

    handleClick() {
        setTimeout(() => {
            startGame()
        }, 500)
        
    }
}
