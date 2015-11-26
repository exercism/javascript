const notAlpha = /[^a-z]+/gi,
      alphaLength = 26;
let cleaned, sortedSet;

class Pangram {

  constructor (candidate){
    cleaned = (candidate.replace(notAlpha,'')).toLowerCase();
    sortedSet = new Set([...cleaned].sort());
  }

  isPangram (){
    return sortedSet.size === alphaLength;
  }
}

export default Pangram;
