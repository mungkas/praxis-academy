/*//String Object
const foo = new String('foo'); // Creates a String object
const st = new String("dark");
console.log(foo); // Displays: [String: 'foo']
console.log(st);
typeof foo; // Returns 'object'
typeof st;

//fist-secord
const foos = '2+2'; // Creates a String object
const sts = new String('dark');
eval(foos);
eval(sts);

//codepointAt()
//var icons = '☃★♲';
var icons = '☃';

console.log(icons.codePointAt(1));
// expected output: "9733"

//parameter indexOf
const str = 'To be, or not to be, that is the question.';
let count = 0;
let position = str.indexOf('a');

while (position !== -1) {
  count++;
  position = str.indexOf('a', position + 1);
}

console.log(count); // displays 4
*/

//include menemukan satu kata dari var yg berbeda
var sentence = 'The quick brown fox jumps over the lazy dog.';

var word = 'fox';

console.log(`The word "${word}" ${sentence.includes(word? 'is':'is')} in the sentence`);

//concat menggabungkan dua kata
console.log(word.concat(' ', sentence));

//split mencari kata atau variabel
var words = sentence.split(' ');
console.log(words[3]);

//slice 
console.log(sentence.slice(4, 10));

//substring nilai didepan berdasarkan kata, subdtr nilai dari nilai itu berdasarkan dari nilai itu
console.log(sentence.substring(4, 7));
console.log(sentence.substr(4, 7));

//regular expression
var myArray = /d(b+)d/g.exec('cdbbdbsbz');
console.log('The value of lastIndex is ' + /d(b+)d/g.lastIndex);

// "The value of lastIndex is 0"







