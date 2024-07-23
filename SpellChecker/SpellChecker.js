class SpellChecker {
    constructor(audioSrc, words) {
      this.audio = new Audio(audioSrc);
      this.words = words;
      this.initUI();
    }
  
    initUI() {
      // Create UI elements
      this.audioButton = document.createElement('button');
      this.audioButton.textContent = 'Play Audio';
      this.audioButton.addEventListener('click', () => this.playAudio());
  
      this.inputBox = document.createElement('input');
      this.inputBox.type = 'text';
  
      this.submitButton = document.createElement('button');
      this.submitButton.textContent = 'Submit';
      this.submitButton.addEventListener('click', () => this.checkSpelling());
  
      this.resultsContainer = document.createElement('div');
  
      // Append UI elements to the document body
      document.body.appendChild(this.audioButton);
      document.body.appendChild(this.inputBox);
      document.body.appendChild(this.submitButton);
      document.body.appendChild(this.resultsContainer);
    }
  
    playAudio() {
      this.audio.play();
    }

    saveNewErrors(errorsMade){
        let previousErrors = localStorage.getItem('lx-spell-errors')
        if(!previousErrors) previousErrors = []
        else previousErrors = JSON.parse(previousErrors)
        console.log('previousErrors', previousErrors)
        const newListOfErrors = [...previousErrors, ...errorsMade];
        localStorage.setItem('lx-spell-errors', JSON.stringify(newListOfErrors))
    }
  
    checkSpelling() {
      const userInput = this.inputBox.value;
      const userWords = userInput.split(/\s+/);
      let errors = [];
  
      // Check each word
      userWords.forEach((word, index) => {
        if (this.words[index] !== word) {
          errors.push({
            index,
            given: word,
            expected: this.words[index]
          });
        }
      });

      this.saveNewErrors(errors)
  
      // Display results
      this.displayResults(errors);
      loadNextScript()
    }
  
    displayResults(errors) {
      this.resultsContainer.innerHTML = '';
  
      if (errors.length === 0) {
        this.resultsContainer.textContent = 'No errors found. Well done!';
        return;
      }
  
      errors.forEach(error => {
        const errorDiv = document.createElement('div');
        errorDiv.textContent = `Word ${error.index + 1}: "${error.given}" should be "${error.expected}".`;
        this.resultsContainer.appendChild(errorDiv);
      });
    }
  }

  //remove spell suggestions from input
  //split commas and stops off separatly
  // do a word count before allowing user to submit
// 1. Abundant
// 2. Ambiguous
// 3. Analyze
// 4. Appropriate
// 5. Argument
// 6. Assert
// 7. Assess
// 8. Authentic
// 9. Bias
// 10. Cite
// 11. Claim
// 12. Coherent
// 13. Compare
// 14. Comprehend
// 15. Conclude
// 16. Consequence
// 17. Contrast
// 18. Correlate
// 19. Critique
// 20. Deduce
// 21. Define
// 22. Demonstrate
// 23. Derive
// 24. Determine
// 25. Differentiate
// 26. Distinguish
// 27. Effective
// 28. Evaluate
// 29. Evidence
// 30. Explain
// 31. Explicit
// 32. Factor
// 33. Identify
// 34. Illustrate
// 35. Imply
// 36. Infer
// 37. Interpret
// 38. Justify
// 39. Logical
// 40. Method
// 41. Modify
// 42. Objective
// 43. Paraphrase
// 44. Perspective
// 45. Plausible
// 46. Predict
// 47. Principle
// 48. Problematic
// 49. Propose
// 50. Rational
// 51. Relevant
// 52. Reliable
// 53. Research
// 54. Resolution
// 55. Revise
// 56. Sequence
// 57. Source
// 58. Specify
// 59. Structure
// 60. Substantiate
// 61. Summarize
// 62. Support
// 63. Synthesize
// 64. Theory
// 65. Thesis
// 66. Trace
// 67. Valid
// 68. Verify
// 69. Verify
// 70. Verify
  
  // Example usage:
//   const audioSrc = '/SpellChecker/assets/audio1.mp3'; // Replace with your audio file path
//   const sentence = "The arrivals at the airport were greeted with cheers and smiles.";

//   const audioSrc = '/SpellChecker/assets/audio2.mp3'; 
//   const sentence = "She made a refreshing smoothie with fresh pineapples and mangoes.";

    const audioSrc = '/SpellChecker/assets/audio3.mp3'; 
    const sentence = "The garden was filled with an abundant variety of flowers.";

  
    const words = sentence.split(/\s+/);
    const spellChecker = new SpellChecker(audioSrc, words);
  