function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction();
// that variables declared by let aren't available until the code runs
// ReferenceError: Cannot access 'a' before initialization