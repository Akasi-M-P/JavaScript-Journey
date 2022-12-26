/*
Magic Eight Ball
You’ve learned a powerful tool in JavaScript: control flow! It’s so powerful, in fact, that it can be used to tell someone’s fortune.

In this project we will build a Magic Eight Ball using control flow in JavaScript.

The user will be able to input a question, then our program will output a random fortune.



*/

//Creation of variable with value string
let userName = '';

userName = 'Peter'

//A ternary expression deciding output of input
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

//Creation of variable with value as string
let userQuestion = '';

userQuestion = 'Am I a good software developer?';

//Output of userQuestion
console.log(`Hi, My name is ${userName} and my question is ${userQuestion}`)

//Creation of variable and value assignment
let randomNumber = Math.floor(Math.random() * 8);

//Creation variable with value as string
let eightBall = '';

//creation of switch statements for the eight phrases
eightBall = 8 ;

switch (eightBall) {
  case 1:
  console.log(`Hi, ${userName}. It is certain`);
  break;
  case 2:
  console.log(`Hi, ${userName}. It is decidedly so`);
  break;
  case 3:
  console.log(`Hi, ${userName}. Reply hazy try again`);
  break;
  case 4:
  console.log(`Hi, ${userName}. Cannot predict now`);
  break;
  case 5:
  console.log(`Hi, ${userName}. Do not count on it`);
  break;
  case 6:
  console.log(`Hi, ${userName}. My sources say no`);
  break;
  case 7:
  console.log(`Hi, ${userName}. Outlook not so good`);
  break;
  case 8:
  console.log(`Hi, ${userName}. Signs point to yes`);
  break;
}

//Creation of log for eightBall answer
console.log(eightBall);

