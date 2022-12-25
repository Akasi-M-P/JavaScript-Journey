//LOGICAL OPERATORS

/*
Working with conditionals means that we will be using booleans, true or false values. In JavaScript, there are operators that work with boolean values known as logical operators. We can use logical operators to add more sophisticated logic to our conditionals. There are three logical operators:

the and operator (&&)
the or operator (||)
the not operator, otherwise known as the bang operator (!)

Logical operators are often used in conditional statements to add another layer of logic to our code.

*/

//THE AND OPERATOR

//When we use the && operator, we are checking that two things are TRUE:

if (stopLight === 'green' && pedestrians === 0) {
    console.log('Go!');
  } else {
    console.log('Stop');
  }



  //THE OR OPERATOR
//If we only care about either condition being true, we can use the || operator:

if (day === 'Saturday' || day === 'Sunday') {
    console.log('Enjoy the weekend!');
  } else {
    console.log('Do some work.');
  }





  //THE NOT OPERATOR
  //The ! not operator reverses, or negates, the value of a boolean:

  let excited = true;
console.log(!excited); // Prints false
 
let sleepy = false;
console.log(!sleepy); // Prints true


/*

1.
In main.js there are two variables mood and tirednessLevel.

Let’s create an if...else statement that checks if mood is 'sleepy' and tirednessLevel is greater than 8.

If both conditions evaluate to true, then console.log() the string 'time to sleep'. Otherwise, we should console.log() 'not bed time yet'.

After you press “Run”, play around with the || operator and the ! operator! What happens if you negate the value of the entire statement with ! and switch to || instead of &&?

*/

let mood = 'sleepy';
let tirednessLevel = 10;

if (mood === 'sleepy' && tirednessLevel > 8 ) {
  console.log('time to sleep');
} else {
  console.log('not bed time yet');
} 



//TRUTHY AND FALSY
/*

Let’s consider how non-boolean data types, like strings or numbers, are evaluated when checked inside a condition.

Sometimes, you’ll want to check if a variable exists and you won’t necessarily want it to equal a specific value — you’ll only check to see if the variable has been assigned a value.

Here’s an example:

*/

let myVariable = 'I Exist!';
 
if (myVariable) {
   console.log(myVariable)
} else {
   console.log('The variable does not exist.')
}

/*

The code block in the if statement will run because myVariable has a truthy value; 
even though the value of myVariable is not explicitly the value true, when used in a boolean or conditional context, 
it evaluates to true because it has been assigned a non-falsy value.

*/



/*

So which values are falsy— or evaluate to false when checked as a condition? The list of falsy values includes:

0
Empty strings like "" or ''
null which represent when there is no value at all
undefined which represent when a declared variable lacks a value
NaN, or Not a Number
Here’s an example with numbers:

*/

let numberOfApples = 0;
 
if (numberOfApples){
   console.log('Let us eat apples!');
} else {
   console.log('No apples left!');
}
 
// Prints 'No apples left!'

/*

The condition evaluates to false because the value of the numberOfApples is 0. 
Since 0 is a falsy value, the code block in the else statement will run.

*/


let wordCount = 4;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}


/*
1.
Change the value of wordCount so that it is truthy. This value should still be a number.

After you make this change and run your code, 'Great! You've started your work!' should log to the console.




2.
Change the value of favoritePhrase so that it is still a string but falsy.

After you make this change and run your code, 'This string is definitely empty.' should log to the console.
*/