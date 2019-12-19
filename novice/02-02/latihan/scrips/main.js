//1
// function Vehicle(make, model, color) {
//   this.make = make,
//   this.model = model,
//   this.color = color,
//   this.getName = function () {
//       return this.make + " " + this.model;
//   }
// }

// let car = new Vehicle("toyota", "corolla", "black");
// console.log(car);
// console.log(Vehicle("toyota", "corolla", "black"));

//2
// class Clock {
//   constructor({ template }) {
//     this.template = template;
//   }

//   render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;

//     let output = this.template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);

//     console.log(output);
//   }

//   stop() {
//     clearInterval(this.timer);
//   }

//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
//   }
// }


// let clock = new Clock({template: 'h:m:s'});
// clock.start();

//3
// const x = function() {}

// Initialize a constructor from a function
// const constructorFromFunction = new x();

// console.log(constructorFromFunction);

//4
// 'use strict';

// // Example 1: Creating a new class (declaration-form)
// // ===============================================================

// // A base class is defined using the new reserved 'class' keyword
// class Polygon {
//   // ..and an (optional) custom class constructor. If one is
//   // not supplied, a default constructor is used instead:
//   // constructor() { }
//   constructor(height, width) {
//     this.name = 'Polygon';
//     this.height = height;
//     this.width = width;
//   }

//   // Simple class instance methods using short-hand method
//   // declaration
//   sayName() {
//     console.log('Hi, I am a ', this.name + '.');
//   }

//   sayHistory() {
//     console.log('"Polygon" is derived from the Greek polus (many) ' +
//       'and gonia (angle).');
//   }

//   // We will look at static and subclassed methods shortly
// }

// // Classes are used just like ES5 constructor functions:
// let p = new Polygon(300, 400);
// p.sayName();
// console.log('The width of this polygon is ' + p.width);

// // Example 2: Creating a new class (expression-form)
// // ===============================================================

// // Our Polygon class above is an example of a Class declaration.
// // ES6 classes also support Class expressions - just another way
// // of defining a new class. For example:
// const MyPoly = class Poly {
//   getPolyName() {
//       console.log('Hi. I was created with a Class expression. My name is ' +
//       Poly.name);
//   }
// };

// let inst = new MyPoly();
// inst.getPolyName();

// // Example 3: Extending an existing class
// // ===============================================================

// // Classes support extending other classes, but can also extend
// // other objects. Whatever you extend must be a constructor.
// //
// // Let's extend the Polygon class to create a new derived class
// // called Square.
// class Square extends Polygon {
//   constructor(length) {
//     // The reserved 'super' keyword is for making super-constructor
//     // calls and allows access to parent methods.
//     //
//     // Here, it will call the parent class' constructor with lengths
//     // provided for the Polygon's width and height
//     super(length, length);
//     // Note: In derived classes, super() must be called before you
//     // can use 'this'. Leaving this out will cause a reference error.
//     this.name = 'Square';
//   }

//   // Getter/setter methods are supported in classes,
//   // similar to their ES5 equivalents
//   get area() {
//     return this.height * this.width;
//   }

//   set area(value) {
//     this.area = value;
//   }
// }

// let s = new Square(5);

// s.sayName();
// console.log('The area of this square is ' + s.area);

// // Example 4: Subclassing methods of a parent class
// // ===============================================================

// class Rectangle extends Polygon {
//   constructor(height, width) {
//     super(height, width);
//     this.name = 'Rectangle';
//   }
//   // Here, sayName() is a subclassed method which
//   // overrides their superclass method of the same name.
//   sayName() {
//     console.log('Sup! My name is ', this.name + '.');
//     super.sayHistory();
//   }
// }

// let r = new Rectangle(50, 60);
// r.sayName();

// // Example 5: Defining static methods
// // ===============================================================

// // Classes support static members which can be accessed without an
// // instance being present.
// class Triple {
//   // Using the 'static' keyword creates a method which is associated
//   // with a class, but not with an instance of the class.
//   static triple(n) {
//     n = n || 1;
//     return n * 3;
//   }
// }

// // super.prop in this example is used for accessing super-properties from
// // a parent class. This works fine in static methods too:
// class BiggerTriple extends Triple {
//   static triple(n) {
//     return super.triple(n) * super.triple(n);
//   }
// }

// console.log(Triple.triple());
// console.log(Triple.triple(6));
// console.log(BiggerTriple.triple(3));
// // var tp = new Triple();
// // ChromeSamples.log(tp.triple()); tp.triple is not a function

// // Example 6: Subclassing built-in classes and DOM
// // ===============================================================

// // Extend Date built-in
// class MyDate extends Date {
//   constructor() {
//     super();
//   }

//   getFormattedDate() {
//     var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
//       'Oct', 'Nov', 'Dec'];
//     return this.getDate() + '-' + months[this.getMonth()] + '-' +
//       this.getFullYear();
//   }
// }

// var aDate = new MyDate();
// console.log(aDate.getTime());
// console.log(aDate.getFormattedDate());

// // Extend Uint8Array
// class ExtendedUint8Array extends Uint8Array {
//   constructor() {
//     super(10);
//     this[0] = 255;
//     this[1] = 0xFFA;
//   }
// }

// var eua = new ExtendedUint8Array();
// console.log(eua.byteLength);

//5 Functional Classes
// 'use strict';

// function Fruit (type) {
//     this.type = type;
//     this.color = 'unknown';
//     this.getInformation = getFruitInformation;
// }

// function getFruitInformation() {
//     return 'This ' + this.type + ' is ' + this.color + '.';
// }

// let lime = new Fruit('Mexican lime');
// console.log(lime.getInformation());

// lime.color = 'green';
// console.log(lime.getInformation());

//6
// 'use strict';

// function Fruit (type) {
//     this.type = type;
//     this.color = 'unknown';
//     this.getInformation = getFruitInformation;
// }

// function getFruitInformation() {
//     return 'This ' + this.type + ' is ' + this.color + '.';
// }

// let lime = new Fruit('Mexican lime');
// console.log(lime.getInformation());

// lime.color = 'green';
// console.log(lime.getInformation());

//7 The Prototype Property
// 'use strict';

// function Fruit (type) {
//     this.type = type;
//     this.color = 'unknown';
// }

// Fruit.prototype.getInformation = function() {
//     return 'This ' + this.type + ' is ' + this.color + '.';
// }

// let lime = new Fruit('Mexican lime');
// console.log(lime.getInformation());

//8 Using Object Literals
// 'use strict';

// let lime = {
//     type: 'Mexican lime',
//     color: 'green',
//     getInformation: function() {
//         return 'This ' + this.type + ' is ' + this.color + '.';
//     }
// }

// console.log(lime.getInformation());

// lime.color = 'yellow';
// console.log(lime.getInformation());

// lime.color = 'green';
// console.log(lime.getInformation());

//9 Singleton Class Using a Function
// 'use strict';

// let lime = new function() {
//     this.type = 'Mexican lime';
//     this.color = 'green';
//     this.getInformation = function() {
//         return 'This ' + this.type + ' is ' + this.color + '.';
//     };
// }

// console.log(lime.getInformation());

// lime.color = 'yellow';
// console.log(lime.getInformation());

//10
//Classes
//Class Declarations

// class Polygon {
//   constructor(height, width) {
//       this.height = height;
//       this.width = width;
//   }
// }

// let p = new Polygon(1, 2);
// console.log('Polygon p:', p);

//11 
try {
  let p = new Polygon(1, 2);
  console.log('Polygon p:', p);
}
catch (exception) {
  console.log(exception.name + ': ' + exception.message);
}
class Polygon {
  constructor(height, width) {
      this.height = height;
      this.width = width;
  }
}

p = new Polygon(1, 2);
console.log('Polygon p:', p);