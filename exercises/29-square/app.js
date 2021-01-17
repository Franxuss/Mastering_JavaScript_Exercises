function square(num){
    return Math.pow(num,2);
}var output=square(5);
console.log(output);

//------------O----------------

function square(num){
    return num*=num;
}var output=square(5);
console.log(output);