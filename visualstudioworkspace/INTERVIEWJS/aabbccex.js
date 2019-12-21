var letters = "aabbbcc";

var lettersArray = letters.split("");
// "'a','b','b','c','c']

var numLettersArray=[];

for (i = 0; i < lettersArray.length - 1; i++) {
    if (lettersArray[i == lettersArray[i + 1]]) {
numLettersArray.push('2'+lettersArray[i]);
}
}

console.log(numLettersArray);
var numLettersString = numLettersArray.join("");
console.log(numLettersString);
