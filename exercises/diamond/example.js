export default class Diamond {
  makeDiamond(input) {
    const inputIndex =  input.charCodeAt() - 65;
    var output = "";
    var i = 0;
    for(i = 0; i <= inputIndex; i++){
      output += getLine(inputIndex, i);
    }
    for(i = inputIndex - 1; i >= 0; i--){
      output += getLine(inputIndex, i);
    }
    return output; 
  }
}

function getLine(inputIndex, index) {
  var difference = inputIndex - index;
  return spaceTimes(difference) + printAlphabets(index) + spaceTimes(difference) + "\n";
}

function printAlphabets(index) {
  var character = 65 + index;
  if(index === 0){
    return "A";
  }
  else {
    return String.fromCharCode(character) + spaceTimes((index - 1) * 2 + 1) + String.fromCharCode(character); 
  }
}

function spaceTimes(times) {
  return " ".repeat(times);
}
