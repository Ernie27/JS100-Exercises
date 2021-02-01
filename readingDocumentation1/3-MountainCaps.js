// Is there a method to capitalize a string, for example turning 'mountain' into 'Mountain'?


//No - We would have to implement it ourselves.

let word = 'hello';

word = word.charAt(0).toUpperCase() + word.slice(1, word.length);

console.log(word)