function getLastElementOfProperty(obj,key){
    if((!obj[key])||(!Array.isArray(obj[key]))||(obj[key].length==0)){
            return undefined;
    }
    var obj1=obj[key];
    return obj1[obj1.length-1];

}
var obj = {
  key: [1, 2, 5]
};
var output = getLastElementOfProperty(obj, 'key');
console.log(output);