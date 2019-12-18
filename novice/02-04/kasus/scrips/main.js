
function Person(name) { this.name = name; }
let ferdinand = Person("Ferdinand"); // oops
//console.log(name);
// → Ferdinand

// function sum (a) {
//     sum(a - 1);
//   }
//   sum(10);

function canYouSpotTheProblem() {
    "use strict";
    for (counter = 0; counter < 10; counter++) {
      console.log("Happy happy");
    }
  }
  
  canYouSpotTheProblem();
  // → ReferenceError: counter is not defined