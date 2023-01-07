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