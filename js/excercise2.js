// Excercise 2a

var string='hello world'

console.log('Excercise 2a. use toUpperCase to convert ' +string+ ' into '  + string.toUpperCase() );

// Excercise 2b

var stringCut;

stringCut= string.substring(0,5);
console.log('Excercise 2b. use substring to cut ' +string+ ' leaving only '  + stringCut);

// Excercise 2c

stringCut= string.substring(8,11);
console.log('Excercise 2c. use substring to cut ' +string+ ' leaving only '  + stringCut);

// Excercise 2d

var string2;

string2= string.toUpperCase(0,1).substring(0,1)+string.toLowerCase(1,11).substring(1,11);
console.log('Excercise 2d. ' +string+ ' convert to '  + string2);

// Excercise 2e

console.log('Excercise 2e. ' +string+ ' find the position of the first " " is: '  + string.indexOf(' ', 0));

// Excercise 2f

string= 'archeology philosophy';
string2= string.toUpperCase(0,1).substring(0,1)+string.toLowerCase(0,10).substring(1,10) + string.toUpperCase(12,1).substring(12,10)+string.toLowerCase(12,21).substring(12,21) ;
console.log('Excercise 2f. ' +string+ ' convert to '  + string2);
 



//+ string.toUpperCase(12,1).substring(13,21)+string.toLowerCase(13,21).substring(0,13) 