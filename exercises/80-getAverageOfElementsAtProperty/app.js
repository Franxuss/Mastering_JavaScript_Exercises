function getAverageOfElementsAtProperty(objeto,atributo){
        //objeto.hasOwnProperty(atributo)
        if((!objeto[atributo])||(!Array.isArray(objeto[atributo]))||(objeto[atributo].length==0)){
            return 0;
        }
/*
        var suma=0
            for(var i = 0; i < objeto[atributo].length; i++){
                var num = objeto[atributo][i];
                    suma += num;
                var promedio = suma/objeto[atributo].length;
            }
        return promedio;
    */
   
    var newobj=objeto[atributo];
        var reducer = ((accumulator, currentValue) => accumulator + currentValue,0);
        var result = newobj.reduce(reducer);
        return result/objeto[atributo].length;
}



var obj = {
  key: [1, 2, 3]
}
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); 



