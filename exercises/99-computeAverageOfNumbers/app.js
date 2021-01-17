function computeAverageOfNumbers(input){
    if(input===[]){
        return 0;
    }
    var suma = input.reduce((acc, el) => acc + el ,0);
    return suma/input.length;
}
var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output);