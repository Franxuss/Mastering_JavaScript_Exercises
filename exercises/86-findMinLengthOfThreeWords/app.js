//Esta función muestra la longitud del elemento más corto.
function findMinLengthOfThreeWords(palabra1,palabra2,palabra3){
    if((palabra1.length<palabra2.length)&&(palabra2.length<palabra3.length)){
        return palabra1.length;
    }else if((palabra2.length<palabra1.length)&&(palabra1.length<palabra3.length)){
        return palabra2.length;
    }else if((palabra3.length<palabra1.length)&&(palabra1.length<palabra2.length)){
        return palabra3.length;
    }else{
        return 'Puede haber alguna coincidencia';
    }
}
//Esta función muestra el elemento con la longitud más corta.
function findMinLengthOfThreeWords(palabra1,palabra2,palabra3){
    if((palabra1.length<palabra2.length)&&(palabra2.length<palabra3.length)){
        return palabra1;
    }else if((palabra2.length<palabra1.length)&&(palabra1.length<palabra3.length)){
        return palabra2;
    }else if((palabra3.length<palabra1.length)&&(palabra1.length<palabra2.length)){
        return palabra3;
    }else{
        return 'Puede haber alguna coincidencia';
    }
}
//Esta función muestra la posición del elemento con la longitud más corta.
function findMinLengthOfThreeWords(palabra1,palabra2,palabra3){
    var arr=[palabra1,palabra2,palabra3];

    if((palabra1.length<palabra2.length)&&(palabra2.length<palabra3.length)){
        return arr.indexOf(palabra1)+1;
    }else if((palabra2.length<palabra3.length)&&(palabra3.length<palabra1.length)){
        return arr.indexOf(palabra2)+1;
    }else if((palabra3.length<palabra2.length)&&(palabra2.length<palabra1.length)){
        return arr.indexOf(palabra3)+1;
    }else{
        return 'Puede haber alguna coincidencia';
    }
}
//Ordenando de menor a mayor el array y mostrando el prime valor
function findMinLengthOfThreeWords(palabra1,palabra2,palabra3){
var arr=[palabra1.length,palabra2.length,palabra3.length];
    
    arr.sort()
    return arr[0];
}
//Con la función Math.min
function findMinLengthOfThreeWords(palabra1,palabra2,palabra3){
var arr=[palabra1.length,palabra2.length,palabra3.length];

    return Math.min.apply(null,arr);
}
var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output);
