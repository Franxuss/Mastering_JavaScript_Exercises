function keep(arr,num){
    var result = arr.filter(x => x==2);
    if(result==null){
        return [];
    }
    
   return result ;

}
var output = keep([1, 2, 3, 2, 1], 2) 
console.log(output);