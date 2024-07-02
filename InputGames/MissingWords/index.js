const app = document.getElementById('missing_words')

const params = new URLSearchParams(window.location.search);

// Get the value of a specific parameter
const sentence1 = params.get('sentence1');

console.log(sentence1);  //
function parseString(str) {
    // Regular expression to match words inside braces
    const regex = /{([^}]+)}/g;
    let matches;
    let lastIndex = 0;
    const result = [];
  
    // Use the regular expression to find matches
    while ((matches = regex.exec(str)) !== null) {
      // Add the text before the match as visible
      if (matches.index > lastIndex) {
        result.push({
          text: str.slice(lastIndex, matches.index),
          type: 'visible'
        });
      }
  
      // Add the text inside the braces as hidden
      result.push({
        text: matches[1],
        type: 'hidden'
      });
  
      // Update lastIndex to the end of the current match
      lastIndex = regex.lastIndex;
    }
  
    // Add any remaining text after the last match as visible
    if (lastIndex < str.length) {
      result.push({
        text: str.slice(lastIndex),
        type: 'visible'
      });
    }
  
    return result;
}


const parsedArray = parseString(sentence1);

function drawToDom(){
    for(let i = 0; i < parsedArray.length; i++){
        if(parsedArray[i].type === 'visible'){
            const newDiv = document.createElement('div');
            newDiv.innerHTML = parsedArray[i].text;
            newDiv.className = 'new-div-class'; 
            app.appendChild(newDiv);
        }else if(parsedArray[i].type === 'hidden'){
            const input = document.createElement('input');
            input.innerHTML = parsedArray[i].text;
            input.className = 'new-div-class'; 
            app.appendChild(input);
        }
    }
}

drawToDom()
console.log(parsedArray);
  