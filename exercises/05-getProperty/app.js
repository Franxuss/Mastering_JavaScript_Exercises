function getProperty(obj, key) {
  
  return obj[key];
}
var car = {
  model: 'Toyota'
};
var output = getProperty(car, 'model');
console.log(output);