//Example:1   //get the lenght of last word from given statement using split 
let ArrayString = `My Name is Prasanth45 001`

let ArrayStringWord = ArrayString.split(" ")
let ArrayStringlastword = ArrayStringWord[ArrayStringWord.length - 1]

let ArrayStringlastwordlength = ArrayStringlastword.length

console.log(ArrayStringlastword);
console.log(ArrayStringlastwordlength);



//Example:2   //get the lenght of last word from given statement using trim
const InputStatement = `My Name is Prasanth45 00`

const words = InputStatement.trim().split(" ")
const lastword = words[words.length - 1]

const lastwordlength = lastword.length

console.log(lastword);
console.log(lastwordlength);


//Example:3   Anagram check the given input
function areAnagrams(str1, str2) {
    // Remove spaces and convert to lowercase
    const normalize = (str) => str.replace(/\s+/g, "").toLowerCase();
    
    // Sort the characters of the string
    const sorted = (str) => normalize(str).split("").sort().join("");
  
    // Compare the sorted versions of both strings
    return sorted(str1) === sorted(str2);
  }
  
  // Example usage
  console.log(areAnagrams("listen", "silent")); // true




