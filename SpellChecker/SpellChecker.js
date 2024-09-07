class SpellChecker {
  constructor(audioSrc, words) {
      this.audio = new Audio(audioSrc);
      this.words = words;
  }

  playAudio() {
      this.audio.play();
  }

  saveNewErrors(errorsMade) {
      let previousErrors = localStorage.getItem('lx-spell-errors');
      if (!previousErrors) previousErrors = [];
      else previousErrors = JSON.parse(previousErrors);
      const newListOfErrors = [...previousErrors, ...errorsMade];
      localStorage.setItem('lx-spell-errors', JSON.stringify(newListOfErrors));
  }

  checkSpelling(userInput) {
      const userWords = userInput.split(/\s+/);
      let errors = [];

      userWords.forEach((word, index) => {
          if (this.words[index] !== word) {
              errors.push({
                  index,
                  given: word,
                  expected: this.words[index]
              });
          }
      });

      this.saveNewErrors(errors);

      return errors;
  }
}

const dataArray = [
  // { audioSrc: 'assets/audio1.mp3', sentence: "The arrivals at the airport were greeted with cheers and smiles." },
  // { audioSrc: 'assets/audio2.mp3', sentence: "She made a refreshing smoothie with fresh pineapples and mangoes." },
  // { audioSrc: 'assets/audio3.mp3', sentence: "The garden was filled with an abundant variety of flowers." },
  // { audioSrc: 'assets/audio4.mp3', sentence: "The ambiguous statement caused confusion and debate among the committee members." },
  // { audioSrc: 'assets/audio5.mp3', sentence: "Analyze the data to find trends and improve strategies." }
  { audioSrc: 'assets/audio6.mp3', sentence: "Her smile and laughter were clear signs of her true happiness." },
  { audioSrc: 'assets/audio7.mp3', sentence: "The new government introduced several reforms to improve public services." },
  { audioSrc: 'assets/audio8.mp3', sentence: "The artist was proud of the creation that adorned the gallery wall." }

  
  
];

let currentIndex = 0;
let spellChecker;

function initializeSpellChecker() {
  const { audioSrc, sentence } = dataArray[currentIndex];
  spellChecker = new SpellChecker(audioSrc, sentence.split(/\s+/));
}

initializeSpellChecker();

const playButton = document.createElement('button');
playButton.textContent = 'Play Audio';
document.body.appendChild(playButton);

const textarea = document.createElement('textarea');
textarea.rows = 4;
textarea.cols = 50;
textarea.spellcheck = false;
document.body.appendChild(textarea);

const submitButton = document.createElement('button');
submitButton.textContent = 'Submit';
document.body.appendChild(submitButton);

const resultDiv = document.createElement('div');
document.body.appendChild(resultDiv);

const nextButton = document.createElement('button');
nextButton.textContent = 'Next';
nextButton.style.display = 'none';
document.body.appendChild(nextButton);

function loadCharacterInput() {
  const existingScript = document.getElementById('script2');
  if (!existingScript) {
      const script2 = document.createElement('script');
      script2.id = 'script2';
      script2.src = 'CharacterInput.js';
      script2.onload = () => {
          console.log('CharacterInput.js loaded successfully');
      };
      document.body.appendChild(script2);
  }
}

function loadNextItem() {
  currentIndex += 1;
  if (currentIndex < dataArray.length) {
      initializeSpellChecker();
      resultDiv.innerHTML = '';
      textarea.value = '';
      nextButton.style.display = 'none';
  } else {
      resultDiv.innerHTML = '<p>You have completed all the words!</p>';
      loadCharacterInput();
  }
}

playButton.addEventListener('click', () => {
  spellChecker.playAudio();
});

submitButton.addEventListener('click', () => {
  const inputValue = textarea.value;
  const errors = spellChecker.checkSpelling(inputValue);
  resultDiv.innerHTML = '';

  if (errors.length === 0) {
      resultDiv.innerHTML = '<p>No errors found. Well done!</p>';
  } else {
      errors.forEach(error => {
          const errorDiv = document.createElement('div');
          errorDiv.textContent = `Error in word ${error.index + 1}: "${error.given}" should be "${error.expected}".`;
          resultDiv.appendChild(errorDiv);
      });
      const correctAnswerDiv = document.createElement('div');
      correctAnswerDiv.textContent = `Correct answer: ${dataArray[currentIndex].sentence.split(/\s+/).join(' ')}`;
      resultDiv.appendChild(correctAnswerDiv);
  }

  nextButton.style.display = 'inline';
});

nextButton.addEventListener('click', () => {
  loadNextItem();
});
