function getAllElementsButNth(arr,num){

//arr.splice(num,1);

        var primero=arr.slice(0,num);
        var segundo=arr.slice(num+1); 
        var final= primero.concat(segundo);
        return final;
 


}

var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output);