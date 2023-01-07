//NESTED OBJECTS
/*
In application code, objects are often nested— an object might have another object as a property which in turn could have a property that’s an array of even more objects!

In our spaceship object, we want a crew object. This will contain all the crew members who do important work on the craft. Each of those crew members are objects themselves. 
They have properties like name, and degree, and they each have unique methods based on their roles. 
We can also nest other objects in the spaceship such as a telescope or nest details about the spaceship’s computers inside a parent nanoelectronics object.



*/
const spaceship = {
    telescope: {
       yearBuilt: 2018,
       model: '91031-XLT',
       focalLength: 2032 
    },
   crew: {
       captain: { 
           name: 'Sandra', 
           degree: 'Computer Engineering', 
           encourageTeam() { console.log('We got this!') } 
        }
   },
   engine: {
       model: 'Nimbus2000'
    },
    nanoelectronics: {
        computer: {
           terabytes: 100,
           monitors: 'HD'
        },
       'back-up': {
          battery: 'Lithium',
          terabytes: 50
        }
   }
}; 

/*
We can chain operators to access nested properties. We’ll have to pay attention to which operator makes sense to use in each layer.
 It can be helpful to pretend you are the computer and evaluate each expression from left to right so that each operation starts to feel a little more manageable.


*/

spaceship.nanoelectronics['back-up'].battery; // Returns 'Lithium'





//EXERCISE:
let spaceship = {
    passengers: [{name:'Space Ape'}],
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 
  
  let capFave = spaceship.crew.captain['favorite foods'][0];
  
  let firstPassenger = spaceship.passengers[0];




  //PASS BY REFERENCE:
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
Our function paintIt() permanently changed the color of our spaceship object. 
However, reassignment of the spaceship variable wouldn’t work in the same way:

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

  
  