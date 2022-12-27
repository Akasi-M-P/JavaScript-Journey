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



/*
Race Day
Codecademy’s annual race is just around the corner! This year, we have a lot of participants. 
You have been hired to write a program that will register runners for the race and give them instructions on race day.

As a timeline, registration would look like this:



Here’s how our registration works. There are adult runners (over 18 years of age) and youth runners (under 18 years of age). 
They can register early or late. Runners are assigned a race number and start time based on their age and registration.

Race number:

Early adults receive a race number at or above 1000.
All others receive a number below 1000.
Start time:

Adult registrants run at 9:30 am or 11:00 am.
Early adults run at 9:30 am.
Late adults run at 11:00 am.
Youth registrants run at 12:30 pm (regardless of registration).
But we didn’t plan for runners that are exactly 18! We’ll handle that by the end of the project.

*/






let raceNumber = Math.floor(Math.random() * 1000);

//creation of variable to determine time of registration
const registeredEarly = false;

//creation of variable to determine runners age
const age = 18;

//control flow statement to check if runner is an adult AND registered early
if (age > 18 && registeredEarly)
raceNumber += 1000;

//create statement to determine race time
if (age > 18 && registeredEarly) {
  console.log(`${raceNumber}, Race time is 9:30 am`);
} else if (age > 18 && !registeredEarly){
  console.log(`${raceNumber}, race time is 11:00 am `);
} else if (age < 18 ){
  console.log(`${raceNumber}, race time is 12:30 pm`);
} else {
  console.log('Runner to see the registration desk.');
}






