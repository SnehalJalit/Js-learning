function check( num){
 // if block to handle all valid scenarios
         if (num%2==0) {
            console.log( `The ${num} Number is Even`);
        } else {
            console.log(`The ${num} Number is Odd`);
        }
    }

check(45);
check(70);
check(67);
check(98);
console.log(`----------------------------------------------`);
function Eligibility(age){
    // if block to handle all invalid scenarios
    var ageValue = +age;
    if (age<=0 || isNaN(ageValue) || (age>=120)) {
        console.log(` age  is ${age} invalid  `); 
    } else {
        // if block to handle all valid scenarios
        if (age>=18) {
            console.log(`Your age ${age}  Eligible for vote`);
        } else {
            console.log(`Your age ${age} not  Eligible for vote`);
        }
    }
}
Eligibility(18);
Eligibility(20);
Eligibility(17);
Eligibility(40);
console.log(`----------------------------------------------------------`);

    var word = "JavaScript-ES6";
    var result=word.length;
    console.log(`The length of ${word} is ${result}`);
if (result>=10) {
    console.log(`${word} more than 10 char`);
}
 else {
    console.log(`${word} less than 10  char`);
}
console.log(`--------------------------------------`);
var w1="JavaScript Language";
var result=w1.includes('Java');
//console.log(`Include substring 'Java' is :${result}`);
if(result)
{
    console.log(`The ${w1} is start with Java`);
}else{
    console.log(`The ${w1} is not start with Java`);
}
console.log(`---------------------------------------------`);
    
   
