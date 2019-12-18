//Pengendalian Alur if else, switch dan try catch thown

var x = 1;
{
var x = 2;
}
console.log(x); // outputs 2

/*var nilai = prompt("Inputkan nilai akhir:");
        var grade = "";

        if(nilai >= 90) grade = "A"
        else if(nilai >= 80) grade = "B+"
        else if(nilai >= 70) grade = "B"
        else if(nilai >= 60) grade = "C+"
        else if(nilai >= 50) grade = "C"
        else if(nilai >= 40) grade = "D"
        else if(nilai >= 30) grade = "E"
        else grade = "F";

        document.write("Grade anda: "+ grade);*/

/*var jawab = prompt("Kamu beruntung! Silahakn pilih hadiahmu dengan memasukan angka 1 sampai 5");
var hadiah = "";
        
switch(jawab){
    case "1":
      hadiah = "Tisu";
      break;
    case "2":
      hadiah = "1 Kotak Kopi";
      break;
    case "3":
      hadiah = "Sticker";
      break;
    case "4":
      hadiah = "Minyak Goreng";
      break;
    case "5":
      hadiah = "Uang Rp 50.000";
      break;
      default:
    document.write("<p>Opps! anda salah pilih</p>");
    }

        if(hadiah === ""){
            document.write("<p>Kamu gagal mendapat hadiah</p>");
        } else {
            document.write("<h2>Selamat kamu mendapatkan " + hadiah + "</h2>");
        }

*/
function f() {
  try {
    console.log(0);
    throw "bogus";
  } catch(e) {
    console.log(1);
    return true; // this return statement is suspended
                 // until finally block has completed
    console.log(2); // not reachable
  } finally {
    console.log(3);
    return false; // overwrites the previous "return"
    console.log(4); // not reachable
  }
  // "return false" is executed now  
  console.log(5); // not reachable
}
f(); // alerts 0, 1, 3; returns false


//Perulangan atau looping
let i = 0; 
let n = 0; 
while (i < 5) { 
  i++; 
  if (i === 3) { 
     // continue; 
  } 
  n += i; 
  console.log(n);
}

const arr = [3, 5, 7];
arr.foo = 'hello';

for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); // logs 3, 5, 7
}