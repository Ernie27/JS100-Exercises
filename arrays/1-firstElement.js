// Write a function that returns the first element of an input array. For example:

function first(position) {
  return position[0];
}

console.log(first(['Earth', 'Moon', 'Mars']));

// we create a function with the name first and set position as the parameter
// in the function block we want to return the first element of the input array
// since arrays are index-based we can use bracket notion with the first element of the 
// parameter, which is zero since Indexes in JS begin with 0. 

// we invoke the method console to log and call the function first while passing in an array
// as an argument.
// the output is Earth which is the index 0 element of the given array. 