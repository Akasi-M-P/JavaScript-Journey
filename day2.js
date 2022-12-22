//VARIABLES

/*
In programming, a variable is a container for a value. 

In short, variables label and store data in memory. There are only a few things you can do with variables:

Create a variable with a descriptive name.
Store or update information stored in a variable.
Reference or “get” information stored in a variable.
*/


var myName = 'Arya';
console.log(myName);
// Output: Arya

/*
1. var, short for variable, is a JavaScript keyword that creates, or declares, a new variable.

2. myName is the variable’s name. Capitalizing in this way is a standard convention in JavaScript called camel casing. 
In camel casing you group words into one, the first word is lowercase, then every word that follows will have its first letter uppercased. (e.g. camelCaseEverything).

3. = is the assignment operator. It assigns the value ('Arya') to the variable (myName).

4. 'Arya' is the value assigned (=) to the variable myName. You can also say that the myName variable is initialized with a value of 'Arya'.

5. After the variable is declared, the string value 'Arya' is printed to the console by referencing the variable name: console.log(myName).
*/

/*
There are a few general rules for naming variables:

Variable names cannot start with numbers.
Variable names are case sensitive, so myName and myname would be different variables. It is bad practice to create two variables that have the same name using different cases.
Variable names cannot be the same as keywords.
*/

var favouriteFood = 'pizza';
var numOfSlices = 8;

console.log(favouriteFood);//prints pizza
console.log(numOfSlices);// prints 8

//CREATIN A VARIABLE let

/*Create a Variable: let
The let keyword signals that the variable can be reassigned a different value.

*/

let meal = 'Enchiladas';
console.log(meal); // Output: Enchiladas
meal = 'Burrito';
console.log(meal); // Output: Burrito


/*
Another concept that we should be aware of when using let (and even var) is that we can declare a variable without assigning the variable a value. 
In such a case, the variable will be automatically initialized with a value of undefined
*/

let price;
console.log(price); // Output: undefined
price = 350;
console.log(price); // Output: 350

let changeMe = true;
changeMe = false;
console.log(changeMe); // prints false

/*CREATING VARIABLE const

A const variable cannot be reassigned because it is constant. If you try to reassign a const variable, you’ll get a TypeError.

*/

const myName = 'Gilberto';
console.log(myName); // Output: Gilberto

const entree = 'Enchiladas';
console.log(entree);
entree = 'Tacos' // prints TypeError: Assignment to constant variable.


/*MATHEMATICAL ASSIGNMENT OPERATORS

Let’s consider how we can use variables and math operators to calculate new values and assign them to a variable.

*/

let w = 4;
w = w + 1;
 
console.log(w); // Output: 5

let w = 4;
w += 1;
 
console.log(w); // Output: 5


/*
In the second example, we used the += assignment operator to reassign w.
 We’re performing the mathematical operation of the first operator + using the number to the right, then reassigning w to the computed value.

We also have access to other mathematical assignment operators: -=, *=, and /= which work in a similar fashion.
*/

let x = 20;
x -= 5; // Can be written as x = x - 5
console.log(x); // Output: 15
 
let y = 50;
y *= 2; // Can be written as y = y * 2
console.log(y); // Output: 100
 
let z = 8;
z /= 2; // Can be written as z = z / 2
console.log(z); // Output: 4


//PRACTICAL EXAMPLES

let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// Use the mathematical assignments in the space below:
levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;





// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements. 
console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);

/*Outcome of the log above

The value of levelUp: 15
The value of powerLevel: 8901
The value of multiplyMe: 352
The value of quarterMe: 288

*/

//THE INCREMENT AND DECREMENT OPERATOR

/*
Other mathematical assignment operators include the increment operator (++) and decrement operator (--).
The increment operator will increase the value of the variable by 1. The decrement operator will decrease the value of the variable by 1.

*/

let a = 10;
a++;
console.log(a); // Output: 11

let b = 20;
b--;
console.log(b); // Output: 19

let gainedDollar = 3;
let lostDollar = 50;
gainedDollar ++; //4
lostDollar --; //49


//STRING CONCATENATION WITH VARIABLES

/* In previous exercises, we assigned strings to variables. Now, let’s go over how to connect, or concatenate, strings in variables.

The + operator can be used to combine two string values even if those values are being stored in variables:
*/

let myPet = 'armadillo';
console.log('I own a pet ' + myPet + '.'); 
// Output: 'I own a pet armadillo.'

let favouriteAnimal = 'dog';
console.log('My favorite animal: '+ favouriteAnimal)

//prints 'My favorite animal: dog'


//STRING INTERPOLATION

/*In the ES6 version of JavaScript, we can insert, or interpolate, variables into strings using template literals.
 Check out the following example where a template literal is used to log strings together:
 */

const myPet = 'cat';
console.log(`I own a pet ${myPet}.`);
// Output: I own a pet armadillo.

let myName = 'Peter';
let myCity = 'Accra';
console.log(`My name is ${myName}. My favorite city is ${myCity}.`  );

//prints 'My name is Peter. My favorite city is Accra.'


//TYPEOF OPERATOR

/*While writing code, it can be useful to keep track of the data types of the variables in your program. If you need to check the data type of a variable’s value, you can use the typeof operator.

The typeof operator checks the value to its right and returns, or passes back, a string of the data type.
*/

const unknown1 = 'foo';
console.log(typeof unknown1); // Output: string
 
const unknown2 = 10;
console.log(typeof unknown2); // Output: number
 
const unknown3 = true; 
console.log(typeof unknown3); // Output: boolean


let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable); // prints 'String'
newVariable = 1;
console.log(typeof newVariable); // prints 'Number'