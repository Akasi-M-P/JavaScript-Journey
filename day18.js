//PROPERTY ASSIGNMENT
/*
Once we’ve defined an object, we’re not stuck with all the properties we wrote. Objects are mutable meaning we can update them after we create them!

We can use either dot notation, ., or bracket notation, [], and the assignment operator, = to add new key-value pairs to an object or change an existing property



One of two things can happen with property assignment:

If the property already exists on the object, whatever value it held before will be replaced with the newly assigned value.
If there was no property with that name, a new property will be added to the object.
It’s important to know that although we can’t reassign an object declared with const, we can still mutate it, meaning we can add new properties and change the properties that are there.
*/

const spaceship = {type: 'shuttle'};
spaceship = {type: 'alien'}; // TypeError: Assignment to constant variable.
spaceship.type = 'alien'; // Changes the value of the type property
spaceship.speed = 'Mach 5'; // Creates a new key of 'speed' with a value of 'Mach 5'

//You can delete a property from an object with the delete operator.

const spaceship = {
    'Fuel Type': 'Turbo Fuel',
    homePlanet: 'Earth',
    mission: 'Explore the universe' 
  };
   
  delete spaceship.mission;  // Removes the mission property
  




  //EXERCISE
  let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
  
  // Write your code below
  spaceship ['color'] = 'glorious gold';
  spaceship.numEngines = 1, 2, 3, 4, 5, 6, 7, 8, 9, 10;
  delete spaceship['Secret Mission'];

  
  //METHODS 
  /*
When the data stored on an object is a function we call that a method. A property is what an object has, while a method is what an object does.

Do object methods seem familiar? That’s because you’ve been using them all along! For example console is a global JavaScript object and .log() is a method on that object. 
Math is also a global JavaScript object and .floor() is a method on it.

We can include methods in our object literals by creating ordinary, colon-separated key-value pairs. The key serves as our method’s name, while the value is an anonymous function expression.




  */

const alienShip = {
    invade: function () { 
      console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
    }
  };

  //With the new method syntax introduced in ES6 we can omit the colon and the function keyword.

  const alienShip = {
    invade () { 
      console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
    }
  };
  
  //Object methods are invoked by appending the object’s name with the dot operator followed by the method name and parentheses:

  alienShip.invade(); // Prints 'Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.'


  
  //EXERCISE
  let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
let alienShip = {
  retreat() {
    console.log(retreatMessage)
  },
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!');
  }
};

alienShip.retreat();
alienShip.takeOff();