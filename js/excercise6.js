//Excercise 6a

var a,b,c;

a= 4;
b= 5;

function sum(a,b) {
    return c= a+b;
}
console.log(sum(a,b));

//Excercise 6b

a= 4;
b= 'x';

function sum(a,b) {
    if(isNaN(a) || isNaN(b)){
        return alert ('Excercise 6b. one of the parameters is NaN');
    }else{
        return c= a+b;
    }
}
console.log(sum(a,b));

//Excercise 6c

console.log('Excercise 6c. Numbre is integer? ' +Number.isInteger(b));

//Excercise 6d

a= 4;
b= 5.3;

function sum(a,b) {
    if(isNaN(a) || isNaN(b)){
        return alert ('Excercise 6d. one of the parameters is NaN');
    }else if(Number.isInteger(a) && Number.isInteger(b)){
        return c= a+b;
    }else{
        return alert('Excercise 6d. the resul with rounding is ' + Math.round(a+b))
    }
}
console.log(sum(a,b));

//Excercise 6e

a= 3;
b= 7.3;

function validation(x,y) {
    if(Number.isInteger(a) && Number.isInteger(b)){
        return c= a+b;
    }else{
        return alert('Excercise 6e. the resul with rounding is ' + Math.round(a+b))
    }
}

function sum(a,b) {
    if(isNaN(a) || isNaN(b)){
        return alert ('Excercise 6e. one of the parameters is NaN');
    }else{
        validation(a,b);
    } 
}
console.log(sum(a,b));