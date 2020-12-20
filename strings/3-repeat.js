/* 
Implement a function repeat that repeats an input string a given number of times, as 
shown in the example below; without using the pre-defined string method 
String.prototype.repeat().
*/

function repeat(num, string) {
  let arr = []
  for (i = 0; i < num; i += 1) {
    arr[i] = string
  } 
  console.log(arr.join(''))
}

repeat(3, 'ha'); // 'hahaha'