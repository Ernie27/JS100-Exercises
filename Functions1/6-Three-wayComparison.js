/* Write a function that compares the length of two 
strings. It should return -1 if the first string is 
shorter, 1 if the second string is shorter, and 0 
if they're of equal length, as in the following 
example:
*/

function compareByLength(firstString, secondString) {
  if (firstString.length < secondString.length) {
    return -1;
  } else if (firstString.length > secondString.length) {
    return 1;
  } else {
    return 0;
  }
}
console.log(compareByLength('patience', 'perseverance')); // -1
compareByLength('strength', 'dignity');      //  1
compareByLength('humor', 'grace');           //  0