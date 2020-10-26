//Excercise 3a

var month= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log('Excercise 3a. The month 5 is: ' +month[4]+ ' and the month 11 is: ' +month[10]);

//Excercise 3b

console.log('Excercise 3b. month is: ' +month+' alphabetically ordered month is: ' +month.sort() );

//Excercise 3c
 

 console.log('Excercise 3c. original month: ' +month+ ' month adding element to start (' +month.unshift('fox')+') ' +month+' month adding element to end (' +month.push('tiger') + ') ' +month);

 //Excercise 3d

 console.log('Excercise 3d. original month: ' +month+ ' month romving element to start (' +month.shift()+') ' +month+' month removing element to end (' +month.pop() + ') ' +month);
 
 //Excercise 3e

 console.log('Excercise 3e. original month: ' +month+ ' reverse month: ' +month.reverse());

 //Excercise 3f

 console.log('Excercise 3f. original month: ' +month+ ' applying join: ' +month.join('-'));

 //Excercise 3g
 month= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

 console.log('Excercise 3g. original month: ' +month+ ' applying slice: ' +month.slice(4, 11));