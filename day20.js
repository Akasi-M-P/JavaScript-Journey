//PASSING BY REFERENCE

/*
Objects are passed by reference. 
This means when we pass a variable assigned to an object into a function as an argument, the computer interprets the parameter name as pointing to the space in memory holding that object.
As a result, functions which change object properties actually mutate the object permanently (even when the object is assigned to a const variable).



*/

const spaceship = {
    homePlanet : 'Earth',
    color : 'silver'
  };
   
  let paintIt = obj => {
    obj.color = 'glorious gold'
  };
   
  paintIt(spaceship);
   
  spaceship.color // Returns 'glorious gold'


  /*
Our function paintIt() permanently changed the color of our spaceship object. However, reassignment of the spaceship variable wouldn’t work in the same way:

  */

let spaceship = {
    homePlanet : 'Earth',
    color : 'red'
  };
  let tryReassignment = obj => {
    obj = {
      identified : false, 
      'transport type' : 'flying'
    }
    console.log(obj) // Prints {'identified': false, 'transport type': 'flying'}
   
  };
  tryReassignment(spaceship) // The attempt at reassignment does not work.
  spaceship // Still returns {homePlanet : 'Earth', color : 'red'};
   
  spaceship = {
    identified : false, 
    'transport type': 'flying'
  }; // Regular reassignment still works.




  /*
Let’s look at what happened in the code example:

We declared this spaceship object with let. This allowed us to reassign it to a new object with identified and 'transport type' properties with no problems.
When we tried the same thing using a function designed to reassign the object passed into it, the reassignment didn’t stick 
(even though calling console.log() on the object produced the expected result).
When we passed spaceship into that function, obj became a reference to the memory location of the spaceship object, but not to the spaceship variable.
 This is because the obj parameter of the tryReassignment() function is a variable in its own right. The body of tryReassignment() has no knowledge of the spaceship variable at all!
When we did the reassignment in the body of tryReassignment(),
 the obj variable came to refer to the memory location of the object {'identified' : false, 'transport type' : 'flying'}, 
 while the spaceship variable was completely unchanged from its earlier value.


  */


 //EXERCISE

 let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
  };
  
  // Write your code below
  
  let greenEnergy = obj => {
    obj['Fuel Type'] = 'avocado oil';
  }
  
  let remotelyDisable = obj => {
    obj.disabled = true;
  }
  
  greenEnergy(spaceship);
  
  remotelyDisable(spaceship);
  
  console.log(spaceship)


  //LOOPING THROUGH OBJECTS

  /*
Looping Through Objects
Loops are programming tools that repeat a block of code until a condition is met. We learned how to iterate through arrays using their numerical indexing, 
but the key-value pairs in objects aren’t ordered! JavaScript has given us alternative solution for iterating through objects with the for...in syntax .

for...in will execute a given block of code for each property in an object



  */

let spaceship = {
    crew: {
      captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
      },
      'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
      },
      medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
      translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
      }
    }
  }; 
   
  // for...in
  for (let crewMember in spaceship.crew) {
    console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
  }

  /*
Our for...in will iterate through each element of the spaceship.crew object. 
In each iteration, the variable crewMember is set to one of spaceship.crew‘s keys, enabling us to log a list of crew members’ role and name.

  */

let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

// Write your code below

for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
};

for (let crewMember in spaceship.crew) {
  console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`)
};
