//Excercise 6a

var a,b,c;

a= 6;
b= 5;

function sumA(x,y) {
    return x+y; 
}
c= sumA(a,b);
console.log('Excercise 6a. the sum '+a+ '+'+b+'=' +c);


//Excercise 6b

a= 4;
b= 'x';

function sumB(x,y) {
    if(isNaN(x) || isNaN(y)){
        alert ('Excercise 6b. one of the parameters is NaN');
        return 'NaN';
    }else{
        return x+y;
    }
}
c= sumB(a,b);
console.log('Excercise 6b. ' +c);

//Excercise 6c

function validateInteger(y) {
    return Number.isInteger(y);
}
console.log('Excercise 6c. Numbre is integer? ' +validateInteger(b));

//Excercise 6d

a= 4;
b= 7.3;

function sumD(x,y) {
    if(isNaN(x) || isNaN(y) ){
        alert ('Excercise 6d. one of the parameters is NaN');
        return 'NaN';
    }else if(Number.isInteger(x)===false || Number.isInteger(y)===false){
        alert ('Excercise 6d. one of the parameters is not integer but the rounded result will be displayed on the console');
        return Math.round(x+y);
    }else if(Number.isInteger(x)===true && Number.isInteger(y)===true){
        return x+y;
    }
}
c=sumD(a,b);
console.log('Excercise 6d. the result is '+c);

//Excercise 6e

/*Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.

-Solo la validacion (la de si alguno de los parametros es un numero) del ejercicio 6b tenes que transformar en una funcion separada.
-Tenes que llamarla dentro de la funcion suma (ejercicio a). si no estas haciendo la misma validacion 2 veces.
*/

a= 3;
b= 'x';

function notNumber(x,y) {
    if(isNaN(x) || isNaN(y)){
        alert ('Excercise 6e. one of the parameters is NaN');
        return 'NaN';
    }
}

function sumE(n,m) {
    if(notNumber(n,m)==='NaN'){
        return 'NaN';
    }else{
        return n+m;
    }
}
c= sumE(a,b);
console.log('Excercise 6b. ' +c);