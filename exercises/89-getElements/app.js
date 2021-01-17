function getElementsThatEqual10AtProperty(obj,key){
    if((!obj[key])||(!Array.isArray(obj[key]))||(obj[key].length==0)||(!obj[key]==10)){
            return [];
        }
        var filtered= obj.key.filter(x => x===10);
            return (filtered);
            
}          

var obj = {
  key: [1000, 10, 50, 10]
};
var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output);

