/* Take your code from the previous Check the Weather exercise and rewrite it as 
a switch statement. Feel free to add more cases besides 'sunny' and 'rainy'.
*/


let weather = 'rainy';

switch (weather) {
  case 'rainy':
    console.log("Grab your umbrella.");
    break;
  case 'sunny':
    console.log("It's a beautiful day!");
    break;
  case 'snowy':
    console.log("Let's stay inside");
    break;
  case 'cloudy':
    console.log("Just in case, grab your umbrella!");
    break;
  default:
    console.log("I'm cold");
}