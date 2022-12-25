//TRUTHY AND FALSY ASSIGNMENT

/*
Truthy and falsy evaluations open a world of short-hand possibilities!

Say you have a website and want to take a user’s username to make a personalized greeting. 
Sometimes, the user does not have an account, making the username variable falsy. 
The code below checks if username is defined and assigns a default string if it is not:
*/

let username = '';
let defaultName;
 
if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';
}
 
console.log(defaultName); // Prints: Stranger


/*
If you combine your knowledge of logical operators you can use a short-hand for the code above. 
In a boolean condition, JavaScript assigns the truthy value to a variable if you use the || operator in your assignment:
*/

let username = '';
let defaultName = username || 'Stranger';
 
console.log(defaultName); // Prints: Stranger

/*
Because || or statements check the left-hand condition first, 
the variable defaultName will be assigned the actual value of username if it is truthy, 
and it will be assigned the value of 'Stranger' if username is falsy. This concept is also referred to as short-circuit evaluation.
*/

/*

1.
Let’s use short-circuit evaluation to assign a value to writingUtensil. Do not edit tool yet, we’ll return to tool in the next step.

Assign to writingUtensil the value of tool and if tool is falsy, assign a default value of 'pen'.



2.
Notice that text 'The pen is mightier than the sword' logged to the console. Which means the value of writingUtensil is 'pen'.

What if we reassign the value of tool to 'marker'. Let’s see what happens to the value of writingUtensil.

*/

let tool = '';

tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);



//TERNARY

/*
In the spirit of using short-hand syntax, we can use a ternary operator to simplify an if...else statement.

Take a look at the if...else statement example:

*/

let isNightTime = true;
 
if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}

//We can use a ternary operator to perform the same functionality:

isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');


//EXERCISE

let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");



//ELSE IF STATEMENTS
/*
We can add more conditions to our if...else with an else if statement. 
The else if statement allows for more than two possible outcomes. 
You can add as many else if statements as you’d like, to make more complex conditionals!

The else if statement always comes after the if statement and before the else statement. 
The else if statement also takes a condition. Let’s take a look at the syntax:

*/

let stopLight = 'yellow';
 
if (stopLight === 'red') {
  console.log('Stop!');
} else if (stopLight === 'yellow') {
  console.log('Slow down.');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}



let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter'){
  console.log('It\'s winter! Everything is covered in snow.');
} else if (season === 'fall') {
  console.log('It\'s fall! Leaves are falling!');
} else if (season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!');
  } else {
  console.log('Invalid season.');
}



//SWITCH STATEMENTS
/*
else if statements are a great tool if we need to check multiple conditions. 
In programming, we often find ourselves needing to check multiple values and handling each of them differently. For example:
*/

let groceryItem = 'papaya';
 
if (groceryItem === 'tomato') {
  console.log('Tomatoes are $0.49');
} else if (groceryItem === 'papaya'){
  console.log('Papayas are $1.29');
} else {
  console.log('Invalid item');
}

/*
In the code above, we have a series of conditions checking for a value that matches a groceryItem variable. 
Our code works fine, but imagine if we needed to check 100 different values! Having to write that many else if statements sounds like a pain!

A switch statement provides an alternative syntax that is easier to read and write. A switch statement looks like this:

*/

let groceryItem = 'papaya';
 
switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}
 
// Prints 'Papayas are $1.29'

/*
The switch keyword initiates the statement and is followed by ( ... ), which contains the value that each case will compare. 
In the example, the value or expression of the switch statement is groceryItem.
Inside the block, { ... }, there are multiple cases. The case keyword checks if the expression matches the specified value that comes after it. 
The value following the first case is 'tomato'. If the value of groceryItem equalled 'tomato', that case‘s console.log() would run.
The value of groceryItem is 'papaya', so the third case runs— Papayas are $1.29 is logged to the console.
The break keyword tells the computer to exit the block and not execute any more code or check any other cases inside the code block. 
Note: Without break keywords, the first matching case will run, but so will every subsequent case regardless of whether or not it matches—including the default. 
This behavior is different from if/else conditional statements that execute only one block of code.
At the end of each switch statement, there is a default statement. If none of the cases are true, then the code in the default statement will run.

*/

let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
  

}