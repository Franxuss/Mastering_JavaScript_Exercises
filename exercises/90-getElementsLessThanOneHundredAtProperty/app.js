function getElementsLessThan100AtProperty(obj,key){
    if((!obj[key])||(!Array.isArray(obj[key]))||(obj[key].length==0)||(obj[key]<100)){
            return [];
        }
        var filtered= obj.key.filter(x => x<100);
            return (filtered);
            
}          

var obj = {
  key: [1000, 20, 50, 500]
};
var output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output);