function select(arr, obj) {
    var newObj = {};
    for (var i in arr) {
        for (var key in obj) {
            if (arr[i] === key) {
                newObj[key] = obj[key];

      }
    }
  } return newObj;
   
}
var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output);