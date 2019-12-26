//////////////////// try catch syntax /////////////////////

try{
    alert("Start of try runs");
    //...no errors here
    alert("End of try runs");
}
catch(err){
    alert("Catch is ignored, because there are no errors");
}

try{
    alert("Start of try runs");
    lalala;
    alert("End of try (never reached)");
}
catch(err){
    alert("Error has occured");
}

//////////// try catch only works for runtime errors /////////////

try{
    // {{{{{{{
}
catch(err){
    alert("The engine can't understand this code, it's invalid");
}

///////////////// try catch works synchronously /////////////////

try{
    setTimeout(function(){
        noSuchVariable; //script will die here
    }, 1000);
}
catch(err){
    alert("Won't work");
}

setTimeout(function(){
    try{
        noSuchVariable; //try .. catch handles the error!
    }
    catch(err){
        alert("error is caught here!");
    }
}), 1000;