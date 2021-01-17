function countAllCharacters(palabra) {
  var newobj = {};
  for (var i = 0; i < palabra.length; i++) {
    //Iteramos cada posición de la palabra
    if (newobj.hasOwnProperty(palabra[i])) {
      newobj[palabra[i]]++;
    } else {
      newobj[palabra[i]] = 1;
    }
  }
  return newobj;
}
var output = countAllCharacters('banana');
console.log(output);