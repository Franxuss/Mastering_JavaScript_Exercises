function getNthElementOfProperty(obj,key,num){
     if((!obj[key])||(num>obj[key].length)||(!Array.isArray(obj[key]))||(obj[key].length==0)){
            return undefined;
    }
    var obj1=obj[key];
    return obj1[num];
}
var obj = {
  key: [1, 2, 6]
};
var output = getNthElementOfProperty(obj, 'key', 1);
console.log(output);
