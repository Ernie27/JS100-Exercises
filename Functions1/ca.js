const getUserChoice = userInput => {
  userInput = userInput.toLowerCase()
  if (userInput === 'rock') {
    return userInput
  } else if (userInput === 'paper') {
    return userInput
  } else if (userInput === 'scissors') {
    return userInput
  } else {
    console.log('error message')
  }
}

const getComputerChoice = () => {
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return 'rock'
  } else if (getComputerChoice === 1) {
    return 'paper'
  } else {
    return 'scissors'
  }
}


getUserChoice('Rock')

console.log(getComputerChoice())