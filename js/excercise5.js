//Excerise 5a

var array=['cat','dog','bird','fox','tiger'];

for (let i = 0; i < array.length; i++) {
    alert(array[i]);
}

//Excercise 5b

for (let i = 0; i < array.length; i++) {
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    alert(array[i]);
}

//Excercise 5c

var sentence=[];

for (let i = 0; i < array.length; i++) {
    sentence[i] = array[i]; 
}
alert(sentence);

//Excercise 5d

for (let i = 0; i < 10; i++) {
    sentence[i] = i;
}
console.log(sentence);