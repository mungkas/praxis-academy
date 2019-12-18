//1
//Object constructor
/*function Tree(name) {
  modelName=name; 
}

let theTree = new Tree('Redwood')
document.write('theTree.constructor is ' + theTree.constructor)
*/

/*
theTree.constructor is function Tree(name) {
  this.name = name
}
*/

//methods Object.prototype.isPrototypeOf()
/*function object1() {}
function object2() {}

object1.prototype = Object.create(object2.prototype);

const object3 = new object1();

document.write(object1.prototype.isPrototypeOf(object3));
// expected output: true

document.write(object2.prototype.isPrototypeOf(object3));
// expected output: true
*/

//2
var shape = {
  type: '',
  getType: function() { return this.type; }
};

function Triangle(a, b, c) {
  this.type = 'triangle';
  this.a = a;
  this.b = b;
  this.c = c;
}

Triangle.prototype = shape;
Triangle.prototype.getPerimeter = function() {
  return this.a + this.b + this.c;
};
Triangle.prototype.constructor = Triangle;

var t = new Triangle(1, 2, 3);
t.constructor === Triangle;
console.log(t);

shape.isPrototypeOf(t);

t.getType();

Triangle.prototype.getParimeter = function()
{
    var perimeter = 0;
    for(i = 0; i < this.arguments.length; i++){
        perimeter = perimeter + this.arguments[i];
    }
    return perimeter;
}

t.getPerimeter();

