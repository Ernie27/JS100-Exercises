/* Find the MDN documentation on operator precedence, and use it to find out 
which result the expression 4 * 5 + 3 ** 2 / 10 evaluates to.
*/

let result = 4 * 5 + 3 ** 2 / 10
console.log(result)

// 4 * 5 + 9 / 10
// 4 * 5 + .9
// 20 + .9

result = (4 * 5) + ((3 ** 2) / 10)
// Don't assume that somebody working on your code knows the precise precedence rules.