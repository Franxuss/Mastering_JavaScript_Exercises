function addToBackOfNew(arr,num){
/*var newarr = [num]
    var conq= arr.concat(newarr)
    return conq;*/

    var newarr=[];
    newarr.push(num);
    newarr=arr.concat(newarr);
    
    return newarr;
}
var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output);  // --> [1, 2, 3]