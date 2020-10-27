//Excercise 4a

if(Math.random() >= 0.5){
    alert('Excercise 4a. Greater than 0,5');
}else{
    alert('Excercise 4b. Lower than 0,5');
}

//Excercise 4b

var age= Math.random()*100;

if(age <= 2){
    alert('Excercise 4bi. Baby')
}else if((age > 2) && (age <= 12)){
    alert('Excercise 4bii. Kid')
}else if((age > 13) && (age <= 19)){
    alert('Excercise 4biii. Teen')
}else if((age > 20) && (age <= 30)){
    alert('Excercise 4bv. Young')
}else if((age > 31) && (age <= 60)){
    alert('Excercise 4bv.Adult')
}else if((age > 61) && (age <= 75)){
    alert('Excercise 4bvi. Elderly')
}else if(age > 75){
    alert('Excercise 4bvii. Old man')
}

