// Excercise 2a

var string='hello world'

console.log('Excercise 2a. use toUpperCase to convert ' +string+ ' into '  + string.toUpperCase() );

// Excercise 2b

var stringCut;

stringCut= string.substring(0,5);
console.log('Excercise 2b. use substring to cut ' +string+ ' leaving only '  + stringCut);

// Excercise 2c

if (string.length >=10) {
    stringCut= string.substring((string.length-3),string.length);
    console.log('Excercise 2c. use substring to cut ' +string+ ' leaving only '  + stringCut);
} else {
    console.log('Excercise 2c. string length is not enough');
}

// Excercise 2d

var string2;

if (string.length >=10) {
    string2= string.toUpperCase().substring(0,1)+string.toLowerCase(1,11).substring(1,11);
console.log('Excercise 2d. ' +string+ ' convert to '  + string2);
} else {
    console.log('Excercise 2d. string length is not enough');
}


// Excercise 2e

var save;

if (string.length >=10) {
    save= string.indexOf(' ', 0);
    console.log('Excercise 2e. ' +string+ ' find the position of the first " " is: '  + save);

} else {
    console.log('Excercise 2e. string length is not enough');
}



// Excercise 2f
var n,m;
string= 'archeology philosophy';

if (string.length >=21) {
    save= string.indexOf(' ', 0);
    n= string.toUpperCase().substring(0,1)+string.toLowerCase(0,(save)).substring(1,(save));
    m= string.toUpperCase().substring((save),(save+2))+string.toLowerCase((save+2),string.length).substring((save+2),string.length);
    string2= n + m;
    console.log('Excercise 2f. ' +string+ ' convert to '  + string2);
} else {
    console.log('Excercise 2f. string length is not enough');
}

