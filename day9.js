//FUNCTIONS

/*
A function is a reusable block of code that groups together a sequence of statements to perform a specific task.




A function declaration consists of:

The function keyword.
The name of the function, or its identifier, followed by parentheses.
A function body, or the block of statements required to perform a specific task, enclosed in the function’s curly brackets, { }.
A function declaration is a function that is bound to an identifier, or name. In the next exercise we’ll go over how to run the code inside the function body.

We should also be aware of the hoisting feature in JavaScript which allows access to function declarations before they’re defined.
*/


//Take a look at example of hoisting:

greetWorld(); // Output: Hello, World!
 
function greetWorld() {
  console.log('Hello, World!');
}

/*
Notice how hoisting allowed greetWorld() to be called before the greetWorld() function was defined!
Since hoisting isn’t considered good practice, we simply want you to be aware of this feature

*/

//hoisting of function1
getReminder();

//creating of function and logging
function getReminder() {
  console.log('Water the plants.');
}

//hoisting of function2
greetInSpanish();

//creating of function and logging
function greetInSpanish() {
  console.log('Buenas tardes.');
}


//CALLING A FUNCTION
//This function call executes the function body, or all of the statements between the curly braces in the function declaration.

//creation of function
function sayThanks() {
    console.log('Thank you for your purchase! We appreciate your business.');
  }
  
  //calling function
  sayThanks();
  sayThanks();
  sayThanks();



  //PARAMETERS AND ARGUEMENTS

/*
So far, the functions we’ve created execute a task without an input. However, some functions can take inputs and use the inputs to perform a task.
When declaring a function, we can specify its parameters. Parameters allow functions to accept input(s) and perform a task using the input(s). 
We use parameters as placeholders for information that will be passed to the function when it is called.

*/

function sayThanks(name) {
    console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
  }
  
  //calling of function
  sayThanks('Cole');
  

//DEFAULT PARAMETERS

/*
One of the features added in ES6 is the ability to use default parameters. 
Default parameters allow parameters to have a predetermined value in case there is no argument passed into the function or if the argument is undefined when called.

Take a look at the code snippet below that uses a default parameter:

*/

function greeting (name = 'stranger') {
    console.log(`Hello, ${name}!`)
  }
   
  greeting('Nick') // Output: Hello, Nick!
  greeting() // Output: Hello, stranger!
 
  
  function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
  }

  
//RETURN
/*
When a function is called, the computer will run through the function’s code and evaluate the result of calling the function. 
By default that resulting value is undefined.

*/

function rectangleArea(width, height) {
  let area = width * height;
}
console.log(rectangleArea(5, 7)) // Prints undefined

/*
In the code example, we defined our function to calculate the area of a width and height parameter. 
Then rectangleArea() is invoked with the arguments 5 and 7. But when we went to print the results we got undefined. Did we write our function wrong?
 No! In fact, the function worked fine, and the computer did calculate the area as 35, but we didn’t capture it. So how can we do that? With the keyword return!

 To pass back information from the function call, we use a return statement. To create a return statement, we use the return keyword followed by the value that we wish to return. 
 Like we saw above, if the value is omitted, undefined is returned instead.

When a return statement is used in a function body, the execution of the function is stopped and the code that follows it will not be executed. Look at the example below:

*/

function rectangleArea(width, height) {
  if (width < 0 || height < 0) {
    return 'You need positive integers to calculate area!';
  }
  return width * height;
}

/*
If an argument for width or height is less than 0, then rectangleArea() will return 'You need positive integers to calculate area!'. 
The second return statement width * height will not run.

The return keyword is powerful because it allows functions to produce an output. We can then save the output to a variable for later use.

*/

//declaring a function
function monitorCount(rows, columns){
  return(rows * columns);
}

//declaration of variable
const numOfMonitors = monitorCount(5 , 4);

//log variable
console.log(numOfMonitors);


//HELPER FUNCTIONS
/*
We can also use the return value of a function inside another function.
 These functions being called within another function are often referred to as helper functions. 
 Since each function is carrying out a specific task, it makes our code easier to read and debug if necessary.

If we wanted to define a function that converts the temperature from Celsius to Fahrenheit, we could write two functions like:


*/

function multiplyByNineFifths(number) {
  return number * (9/5);
};
 
function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
};
 
getFahrenheit(15); // Returns 59

/*
getFahrenheit() is called and 15 is passed as an argument.
The code block inside of getFahrenheit() calls multiplyByNineFifths() and passes 15 as an argument.
multiplyByNineFifths() takes the argument of 15 for the number parameter.
The code block inside of multiplyByNineFifths() function multiplies 15 by (9/5), which evaluates to 27.
27 is returned back to the function call in getFahrenheit().
getFahrenheit() continues to execute. It adds 32 to 27, which evaluates to 59.
Finally, 59 is returned back to the function call getFahrenheit(15).

*/


function monitorCount(rows, columns) {
  return rows * columns;
}

//create cost of monitors function
function costOfMonitors(rows, columns){
  return monitorCount(rows, columns) * 200;
}

//create total cost variable
const totalCost = costOfMonitors(5, 4);

//log total cost
console.log(totalCost);




/*
FUNCTION EXPRESSIONS
Another way to define a function is to use a function expression. To define a function inside an expression, we can use the function keyword. 
In a function expression, the function name is usually omitted. 
A function with no name is called an anonymous function. A function expression is often stored in a variable in order to refer to it.

Consider the following function expression:

To declare a function expression:

1. Declare a variable to make the variable’s name be the name, or identifier, of your function. 
Since the release of ES6, it is common practice to use const as the keyword to declare the variable.

2. Assign as that variable’s value an anonymous function created by using the function keyword followed by a set of parentheses with possible parameters.
Then a set of curly braces that contain the function body.

To invoke a function expression, write the name of the variable in which the function is stored followed by parentheses enclosing any arguments being passed into the function.

*/

variableName(argument1, argument2)



//create variable
const plantNeedsWater = function(day) {
  if (day === 'Wednesday'){
    return true;
  } else {
    return false;
  }
};

//call variable
plantNeedsWater('Tuesday');

//log variable
console.log(plantNeedsWater('Tuesday'));




//ARROW FUNCTIONS
/*

ES6 introduced arrow function syntax, a shorter way to write functions by using the special “fat arrow” () => notation.

Arrow functions remove the need to type out the keyword function every time you need to create a function. 
Instead, you first include the parameters inside the ( ) and then add an arrow => that points to the function body surrounded in { } like this

*/

const rectangleArea = (width, height) => {
  let area = width * height;
  return area;
};


/*
It’s important to be familiar with the multiple ways of writing functions because you will come across each of these when reading other JavaScript code.

*/

const plantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};




//CONCISE BODY ARROW FUNCTIONS

/*
JavaScript also provides several ways to refactor arrow function syntax. The most condensed form of the function is known as concise body. 
We’ll explore a few of these techniques below:

Functions that take only a single parameter do not need that parameter to be enclosed in parentheses.
However, if a function takes zero or multiple parameters, parentheses are required.

*/


//So if we have a function:
const squareNum = (num) => {
  return num * num;
};

//We can refactor the function to:
const squareNum = num => num * num;


/*
Let’s refactor plantNeedsWater() to be a concise body. 
Notice that we’ve already converted the if/else statement to a ternary operator to make the code fit on one line

*/

const plantNeedsWater = day => day === 'Wednesday' ? true : false;

