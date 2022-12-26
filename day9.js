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
  

