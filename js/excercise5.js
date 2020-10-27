//Excerise 5a

var array=['cat ','dog ','bird ','fox ','tiger '];

for (let i = 0; i < array.length; i++) {
    alert('Excercise 5a. '+ array[i]);
}

//Excercise 5b

for (let i = 0; i < array.length; i++) {
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    alert('Excercise 5b. '+ array[i]);
}

//Excercise 5c

var sentence= '';

for (let i = 1; i < array.length; i++) {
    sentence += array[i];  
}
alert('Excercise 5c. '+ sentence);

//Excercise 5d
var sentence= [];

for (let i = 0; i < 10; i++) {
    sentence[i] = i;
}
console.log('Excercise 5d. '+ sentence);