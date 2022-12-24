//CONDITIONAL STATEMENTS
//A conditional statement checks a specific condition(s) and performs a task based on the condition(s).

/*

In this lesson, we will explore how programs make decisions by evaluating conditions and introduce logic into our code!

We’ll be covering the following concepts:

if, else if, and else statements
comparison operators
logical operators
truthy vs falsy values
ternary operators
switch statement

*/


/*
IF STATEMENTS

We often perform a task based on a condition. For example, if the weather is nice today, then we will go outside. 
If the alarm clock rings, then we’ll shut it off. If we’re tired, then we’ll go to sleep.

In programming, we can also perform a task based on a condition using an if statement:

*/

if (true) {
    console.log('This message will print!'); 
  }
  // Prints: This message will print!




  //Prints: Time to buy if sale is TRUE
  let sale = true;

sale = false;

if (sale) {
  console.log('Time to buy!');
}


//IF..ELSE STATEMENTS
/*
In the previous exercise, we used an if statement that checked a condition to decide whether or not to run a block of code. 
In many cases, we’ll have code we want to run if our condition evaluates to false.

If we wanted to add some default behavior to the if statement, we can add an else statement to run a block of code when the condition evaluates to false. 
Take a look at the inclusion of an else statement:
*/

if (false) {
    console.log('The code in this block will not run.');
  } else {
    console.log('But the code in this block will!');
  }
   
  // Prints: But the code in this block will!


//Added else statement to the if statement above
let sale = true;

sale = false;

if(sale) {
  console.log('Time to buy!');
} else {
  console.log('Time to wait for a sale.');
}



//COMPARISON OPERATORS

/*
When writing conditional statements, sometimes we need to use different types of operators to compare values. These operators are called comparison operators.

Here is a list of some handy comparison operators and their syntax:

Less than: <
Greater than: >
Less than or equal to: <=
Greater than or equal to: >=
Is equal to: ===
Is not equal to: !==
*/

10 < 12 // Evaluates to true

'apples' === 'oranges' // false



/*

1.
Using let, create a variable named hungerLevel and set it equal to 7.

Checkpoint 2 Passed
2.
Write an if...else statement using a comparison operator. The condition should check if hungerLevel is greater than 7. 
If so, the conditional statement should log, 'Time to eat!'. Otherwise, it should log 'We can eat later!'.

After you press run, play around with the condition by tweaking the comparison of hungerLevel by using different operators such as <=,>=,>, and <.

*/

let hungerLevel = 7;

hungerLevel = 9;

if (hungerLevel <= 7)  {
  console.log('Time to eat!');
} else {
  console.log('We can eat later!');
}
