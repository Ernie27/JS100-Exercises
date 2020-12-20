// What will the following code log to the console and why? Don't run it until you have tried to answer.

const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);

/*
TypeError: Assignment to constant variable. 
The fact that const variables cannot be re-assigned does not 
mean that the value they hold is immutable. As we see in the 
example above, objects that are assigned to const variables 
can be mutated.
*/