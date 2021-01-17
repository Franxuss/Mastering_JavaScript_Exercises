//Las mismas opciones que en el apartado anterior
function findMaxLengthOfThreeWords(palabra1,palabra2,palabra3){
    if((palabra1.length>palabra2.length)&&(palabra2.length>palabra3.length)){
        return palabra1.length;
    }else if((palabra2.length>palabra3.length)&&(palabra3.length>palabra1.length)){
        return palabra2.length;
    }else if((palabra3.length>palabra2.length)&&(palabra2.length>palabra1.length)){
        return palabra3.length;
    }else{
        return 'Puede haber alguna coincidencia';
    }

}

function findMaxLengthOfThreeWords(palabra1,palabra2,palabra3){
    if((palabra1.length>palabra2.length)&&(palabra2.length>palabra3.length)){
        return palabra1;
    }else if((palabra2.length>palabra3.length)&&(palabra3.length>palabra1.length)){
        return palabra2;
    }else if((palabra3.length>palabra2.length)&&(palabra2.length>palabra1.length)){
        return palabra3;
    }else{
        return 'Puede haber alguna coincidencia';
    }

}
function findMaxLengthOfThreeWords(palabra1,palabra2,palabra3){
    var arr=[palabra1,palabra2,palabra3];

    if((palabra1.length>palabra2.length)&&(palabra2.length>palabra3.length)){
        return arr.indexOf(palabra1)+1;
    }else if((palabra2.length>palabra3.length)&&(palabra3.length>palabra1.length)){
        return arr.indexOf(palabra2)+1;
    }else if((palabra3.length>palabra2.length)&&(palabra2.length>palabra1.length)){
        return arr.indexOf(palabra3)+1;
    }else{
        return 'Puede haber alguna coincidencia';
    }
}
//Ordenando de menor a mayor y mostrando la última posición
function findMaxLengthOfThreeWords(palabra1,palabra2,palabra3){
    var arr=[palabra1.length,palabra2.length,palabra3.length];
    
    arr.sort()
    return arr[arr.length-1];
}
//Utilizando Math.max
function findMaxLengthOfThreeWords(palabra1,palabra2,palabra3){
    var arr=[palabra1.length,palabra2.length,palabra3.length];
    return Math.max.apply(null,arr);
}

var output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output);