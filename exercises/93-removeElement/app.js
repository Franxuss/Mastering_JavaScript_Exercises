function removeElement(arr,element){
    if ((typeof [] === "undefined") || ([] === null)) {
      return [];
    }
    return arr.filter(function(value){
        return value!=element;
    });
    
}
var output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output);