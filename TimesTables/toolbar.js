class Toolbar {
    constructor(parentDiv) {
        this.parentDiv = parentDiv;
        this.width = parentDiv.offsetWidth; // Get the width of the parentDiv
        this.unit = this.width / 100;
        this.logoSize = this.unit * 7;

        this.handleResize = this.handleResize.bind(this);
        window.addEventListener('resize', this.handleResize);

        this.time = null; // Will hold the reference to the time div
        this.startTime = 0; // Will hold the start time in seconds
    }

    draw() {
        if (this.parentDiv.firstChild) {
            this.parentDiv.removeChild(this.parentDiv.firstChild);
        }
        const wrapper = document.createElement('div');
        wrapper.style.width = '100%';
        wrapper.style.padding = (this.unit) + 'px';
        wrapper.style.backgroundColor = 'rgba(0,0,0, 0.5)';
        wrapper.style.position = 'absolute';
        wrapper.style.left = 0;
        wrapper.style.top = 0;

        const logo = document.createElement('img');
        this.drawLogo(logo);
        wrapper.appendChild(logo);

        const clockWrapper = document.createElement('div');
        this.drawTimer(clockWrapper);
        wrapper.appendChild(clockWrapper);

        const scoreWrapper = document.createElement('div');
        this.drawScore(scoreWrapper);
        wrapper.appendChild(scoreWrapper);

        this.parentDiv.appendChild(wrapper);
    }

    drawLogo(logo) {
        logo.src = "assets/gameIcons/mindmap.png";
        logo.style.width = this.logoSize + 'px';
    }

    updateScore(changeBy){
        const score = document.getElementById('score-wrapper')
        const previousScore = parseInt(score.innerHTML)
        score.innerHTML = previousScore + changeBy
    }

    drawTimer(clockWrapper) {
        clockWrapper.style.width = this.logoSize + 'px';
        clockWrapper.style.height = this.logoSize + 'px';
        clockWrapper.style.position = 'absolute';
        clockWrapper.style.top = (this.unit) + 'px';
        clockWrapper.style.left = this.unit + (this.width / 2) - (this.logoSize / 2) + 'px';

        const clockIcon = document.createElement('img');
        clockIcon.src = 'assets/clock.png';
        clockIcon.style.width = this.logoSize + 'px';
        clockIcon.style.height = this.logoSize + 'px';
        clockIcon.style.borderRadius = '30%';
        clockWrapper.appendChild(clockIcon);

        this.time = document.createElement('div');
        this.time.style.width = this.logoSize + 'px';
        this.time.style.height = this.logoSize + 'px';
        this.time.style.position = 'absolute';
        this.time.style.top = 0;
        this.time.style.right = (this.unit * -12) + 'px';
        this.time.style.display = "flex";
        this.time.style.justifyContent = "center";
        this.time.style.alignItems = "center";
        this.time.style.color = "white";
        this.time.style.fontSize = (this.unit * 5) + 'px';
        this.time.innerHTML = "00:00";
        clockWrapper.appendChild(this.time);
    }

    drawScore(scoreWrapper) {
        scoreWrapper.style.width = (this.logoSize * 2) + 'px';
        scoreWrapper.style.height = this.logoSize + 'px';
        scoreWrapper.style.position = 'absolute';
        scoreWrapper.style.top = this.unit + 'px';
        scoreWrapper.style.right = this.unit + 'px';

        const scoreIcon = document.createElement('img');
        scoreIcon.style.width = this.logoSize + 'px';
        scoreIcon.style.height = this.logoSize + 'px';
        scoreIcon.src = 'assets/score.png';
        scoreIcon.style.borderRadius = '30%';
        scoreWrapper.appendChild(scoreIcon);

        const score = document.createElement('div');
        score.id = "score-wrapper"
        score.style.width = this.logoSize + 'px';
        score.style.height = this.logoSize + 'px';
        score.style.position = 'absolute';
        score.style.top = 0;
        score.style.right = 0 + 'px';
        score.style.display = "flex";
        score.style.justifyContent = "center";
        score.style.alignItems = "center";
        score.style.color = "white";
        score.style.fontSize = (this.unit * 5) + 'px';
        score.innerHTML = "0";
        scoreWrapper.appendChild(score);
    }

    handleResize() {
        this.width = this.parentDiv.offsetWidth;
        this.unit = this.width / 100;
        this.logoSize = this.unit * 7;
        this.draw();
    }

    startTimer() {
        this.startTime = 0; // Reset start time
        setInterval(() => {
            this.startTime++;
            const minutes = Math.floor(this.startTime / 60);
            const seconds = this.startTime % 60;
            this.time.innerHTML = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }, 1000);
    }
}