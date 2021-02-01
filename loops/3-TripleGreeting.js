// Write a loop that logs greeting three times.


let greeting = 'Aloha!';
let counter = 1;
while (counter <= 3) {
  console.log(greeting);
  counter += 1;
}

// solution alternate 

for (let count = 1; count <= 3; count += 1) {
  console.log(greeting);
}