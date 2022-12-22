//DAY 1

//console
console.log(40);
console.log(10);


//Data Types

/*
NUMBER: Any number, including numbers with decimals: 4, 8, 1516, 23.42.

STRING: Any grouping of characters on your keyboard (letters, numbers, spaces, symbols, etc.) surrounded by single quotes: ' ... ' or double quotes " ... ", though we prefer single quotes. Some people like to think of string as a fancy word for text.

BOOLEAN: This data type only has two possible values— either true or false (without quotes). It’s helpful to think of booleans as on and off switches or as the answers to a “yes” or “no” question.

NULL: This data type represents the intentional absence of a value, and is represented by the keyword null (without quotes).

UNDEFINED: This data type is denoted by the keyword undefined (without quotes). It also represents the absence of a value though it has a different use than null. undefined means that a given value does not exist.

SYMBOL: A newer feature to the language, symbols are unique identifiers, useful in more complex coding. No need to worry about these for now.

OBJECT: Collections of related data.

The first 6 of those types are considered primitive data types. They are the most basic data types in the language.
*/

console.log('JavaScript');
console.log(2011);
console.log('Woohoo! I love to code! #codecademy');
console.log(20.49);



/*Arithmetic Operators

Add: +
Subtract: -
Multiply: *
Divide: /
Remainder: %
*/

console.log(20 + 3.5);
console.log(2022 - 1969);
console.log(65 / 240);
console.log(0.2708 * 100);


/*STRING CONCATENATION
This process of appending one string to another
*/

console.log('Hello' + 'World');
console.log('Hello' + ' ' + 'World');



//Properties

/*
When you introduce a new piece of data into a JavaScript program, the browser saves it as an instance of the data type. 
All data types have access to specific properties that are passed down to each instance. 
For example, every string instance has a property called length that stores the number of characters in that string. 
*/

console.log('Teaching the world how to code'.length);


//METHODS
//Methods return information about an object, and are called by appending an instance with a period ., the method name, and parentheses.

//Use .toUpperCase() to log 'Codecademy' in all uppercase letters
console.log('Codecademy'.toUpperCase());

// Use a string method to log the following string without whitespace at the beginning and end of it.
console.log('    Remove whitespace   '.trim());




//Built-in Objects

console.log(Math.random() * 100);
console.log(Math.floor(Math.random() * 100));

console.log(Math.ceil(43.8));
console.log(Number.isInteger(2017));


