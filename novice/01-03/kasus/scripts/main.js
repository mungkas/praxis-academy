//step1
/*
function tellFortune(jobTitle, geoLocation, partner, numKids) {
  var future = 'You will be a ' + jobTitle + ' in ' + geoLocation + ' and married to ' +
  partner + ' ' + ' with ' + numKids + ' kids.';
  document.write(future);
  }

  tellFortune('bball player', 'spain', 'Shaq', 3);
  tellFortune('stunt double', 'Japan', 'Ryan Gosling', 3000);
  tellFortune('Elvis impersonator', 'Russia', 'The Oatmeal', 0);
*/

//step2
/*
function calculateDogAge(age) {
  var dogYears = 7*age;
  document.write("Your doggie is " + dogYears + " years old in dog years!");
}

calculateDogAge(1);
calculateDogAge(0.5);
calculateDogAge(12);
*/

//step3
/*
function calculateSupply(age, numPerDay) {
  var maxAge = 100;
  var totalNeeded = (numPerDay * 365) * (maxAge - age);
  var message = 'You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge;
  document.write(message);
}

calculateSupply(28, 36);
calculateSupply(28, 2.5);
calculateSupply(28, 400);
*/

//step4
function calcGeometry(radius) {

  var circumference = Math.PI * 2*radius;
  document.write("The circumference is " + circumference);
  var area = Math.PI * radius*radius;
  document.write("The area is " + area);
}
calcGeometry(90);

//step5
/*
function celsiusToFahrenheit(celsius) {
  var celsiusInF = (celsius*9)/5 + 32;
  document.write(celsius + '°C is ' + celsiusInF + '°F');
}
celsiusToFahrenheit(24);

function fahrenheitToCelsius(fahrenheit) {
  var fahrenheitInC = ((fahrenheit - 32)*5)/9;
  document.write(fahrenheit + '°F is ' + fahrenheitInC + '°C');
}
fahrenheitToCelsius(23);
*/


  