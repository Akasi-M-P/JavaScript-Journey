//JAVASCRIPT OBJECTS

/*CREATING OBJECTS




*/
let spaceship = {}; // spaceship is an empty object

// An object literal with two key-value pairs
let spaceship = {
    'Fuel Type': 'diesel',
    color: 'silver'
  };


  //EXERCISE
  // Write your fasterShip object literal below
let fasterShip = {
    'Fuel Type' : 'Turbo Fuel',
    color : 'silver'
  };


  //ACCESSING OBJECT PROPERTIES

  //THE .DOT NOTATION
  let spaceship = {
    homePlanet: 'Earth',
    color: 'silver'
  };
  spaceship.homePlanet; // Returns 'Earth',
  spaceship.color; // Returns 'silver',


  //EXERCISES
  let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
  };
  
  // Write your code below
  let crewCount = spaceship.numCrew;
  
  let planetArray = spaceship.flightPath;


  //THE []BRACKET NOTATION

  let spaceship = {
    'Fuel Type': 'Turbo Fuel',
    'Active Duty': true,
    homePlanet: 'Earth',
    numCrew: 5
  };
  spaceship['Active Duty'];   // Returns true
  spaceship['Fuel Type'];   // Returns  'Turbo Fuel'
  spaceship['numCrew'];   // Returns 5
  spaceship['!!!!!!!!!!!!!!!'];   // Returns undefined



  /*
With bracket notation you can also use a variable inside the brackets to select the keys of an object.
 This can be especially helpful when working with functions:

If we tried to write our returnAnyProp() function with dot notation (objectName.propName) 
the computer would look for a key of 'propName' on our object and not the value of the propName parameter.
  */
 let returnAnyProp = (objectName, propName) => objectName[propName];
 
returnAnyProp(spaceship, 'homePlanet'); // Returns 'Earth'


//EXERCISE
let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
   };
  
  let propName =  'Active Mission';
  console.log(spaceship['Active Mission']);
  // Write your code below
  let isActive = spaceship['Active Mission'];