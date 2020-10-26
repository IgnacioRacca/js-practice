//Excercise 4a

if(Math.random() >= 0.5){
    alert('Greater than 0,5');
}else{
    alert('Lower than 0,5');
}

//Excercise 4b

var age= Math.random()*100;

if(age <= 2){
    alert('Baby')
}else if((age > 2) && (age <= 12)){
    alert('Kid')
}else if((age > 13) && (age <= 19)){
    alert('Teen')
}else if((age > 20) && (age <= 30)){
    alert('Young')
}else if((age > 31) && (age <= 60)){
    alert('Adult')
}else if((age > 61) && (age <= 75)){
    alert('Elderly')
}else if(age > 75){
    alert('Old man')
}

