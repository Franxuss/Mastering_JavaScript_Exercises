function isOldEnoughToDrink(output){
    
    if(output>=21){
        return true;
    }else{
        return false;
    }	
}
var output = isOldEnoughToDrink(22);
console.log(output);