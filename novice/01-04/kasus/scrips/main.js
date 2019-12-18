let plat = prompt("Masukkan Nomor Plat Anda: ");
        function isiPlat(p){
            let regex = /^[a-zA-Z]{1,2} [0-9]{1,4} [a-zA-Z]{2,3}/;
            return regex.test(p);
        }
        if(isiPlat(plat)){
            alert("Ini adalah plat nomor Indonesia");
        } else{
            alert("Ini BUKAN plat nomor Indonesia");
        }