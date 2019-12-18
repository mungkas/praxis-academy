let email = prompt("Masukkan email anda: ");
var user = /[\W-]+@([\W-]+\.)+[\W-]+$/i;
var karakter = /([^@]*)/;
var domain = /[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/;
function cekEmail(email){
    var x = user.exec(email);
    var y = karakter.exec(email);
    var z = domain.exec(email);
    if(!x){
        alert(email + " Email yang Anda masukkan salah");
    } else{
        alert("Hallo, username Anda adalah " + karakter[0] + " dan domain anda adalah " + domain[0]);
    }
}
cekEmail(email);