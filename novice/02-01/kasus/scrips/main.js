/*
var Animal = function(){};
Animal.prototype.eat = function(){
	console.log("They eat food to survive.");
};

var Mammal = function(){};
Mammal.prototype = new Animal();      //Mammal inherits from Animals
Mammal.prototype.giveBirth = function(){
	console.log("They give birth to young ones.");  
};

var elephant = new Mammal(); //Creating instance of type Mammal
elephant.eat();              //elephant can use the inherited method from Animal.
elephant.giveBirth();

console.log(elephant instanceof Mammal);
console.log(elephant instanceof Animal);
*/


function Alpha(){}

Alpha.prototype.isAlpha = function(letter){
    return /^[a-zA-Z]$/.test(letter);
};

function Vowel(){}
Vowel.prototype = new Alpha();
       Vowel.prototype.isiVowel = function(letter){
           return /^[aeiueoyAEIUOTY]$/.test(letter);
       }

function Consonant(){}
Consonant.prototype = new Alpha();
       Consonant.prototype.isiConsonant = function(letter){
           return /^[aeiueoyAEIUOTY]$/.test(letter);
       }

function processData(input) {
    var a = new Alpha();
    console.log(`'${input[0]}' is ${a.isAlpha(input[0])? ``: `not `}a letter.`);
    
    var b = new Vowel();
    console.log(`'${input[1]}' is ${b.isAlpha(input[1])? `a letter ${b.isVowel(input[1])? `and`: `but not`} a vowel.`: "not a letter."} `);
    
    var c = new Consonant();
    console.log(`'${input[2]}' is ${c.isAlpha(input[2])? `a letter ${c.isConsonant(input[2])? `and`: `but not`} a consonant.`: "not a letter."} `);
    
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input.split(' '));
});



