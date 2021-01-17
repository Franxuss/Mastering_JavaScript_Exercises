function addToFrontOfNew(arr,num){
    /*var newarr = [num]
    var conq= newarr.concat(arr)
    return conq;
    
    var newarr=[];
    newarr.unshift(num);
    
    return newarr;*/
    
    
    return [num, ...arr];
    
}
var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output);
console.log(input);

