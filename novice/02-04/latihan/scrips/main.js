//callback
/*
function main(param1, param2, callBack){
  console.log(param1, param2);
  callBack();
}

function myCallback(){
  console.log("Hello world");
}

main(1, 2, myCallback);
*/

//async
/*
console.log("Hello");
setTimeout(() => {
    console.log("Javascript")
}, 100)
console.log("Coder");

async function fetchWithAsyncAwait(id){
  try{
      let response = await fetch(endpoint.id)
      response = await response.json()
      console.log(response)
  }
  catch(error){
      console.log('ooopss' + error)
  }
}
*/

//promise

const fetch = require("node-fetch");
fetch('https://jsonplaceholder.typicode.com/users/1')
.then(function(response){
    return response.json();
})
.then(function(user){
    console.log(user);
})

