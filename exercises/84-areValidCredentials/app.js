function areValidCredentials(nombre,contraseña){
    if((nombre.length>3)&&(contraseña.length>=8)){
        return true;
    }else{
        return false;
    }

}var output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output);