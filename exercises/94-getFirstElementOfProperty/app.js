function getFirstElementOfProperty(obj,key){
    if((!obj[key])||(!Array.isArray(obj[key]))||(obj[key].length==0)){
            return undefined;
    }
    //var result= obj[key].slice(0 , 1);
    //var result1= result.toString();
    //return result1;
    
    var obj1=obj[key];
    return obj1[0];
}
var obj = {
  key: [1, 2, 4]
};
var output = getFirstElementOfProperty(obj, 'key');
console.log(output);