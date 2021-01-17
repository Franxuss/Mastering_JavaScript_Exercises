function getElementsGreaterThan10AtProperty(obj,key){
    if((!obj[key])||(!Array.isArray(obj[key]))||(obj[key].length==0)||(!obj[key]>100)){
            return [];
        }
        var filtered= obj.key.filter(x => x>10);
            return (filtered);
            
}          

var obj = {
  key: [1, 20, 30]
};
var output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output); // --> [20, 30]