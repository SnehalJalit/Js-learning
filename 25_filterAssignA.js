const arrayNumber=[20,11,40,25,37,49,9,90,60,2,19];
const newArray = arrayNumber.filter( (currentValue) =>{
    return currentValue>50;
} );
console.log(`The numbers greater than 50 : ${newArray}`);
console.log(`------------Even Numbers---------`);
const evenArray=arrayNumber.filter((currentValue)=>{
return currentValue%2==0;
});
console.log(`The even no. :  ${evenArray}`);
console.log(`-------Odd Numbers-------------`);
const oddArray=arrayNumber.filter((currentValue)=>{
    return currentValue%2==1;
    });
console.log(`The odd numbers : ${oddArray}`);
console.log(`----------Multiple of 5--------`);
const multi=arrayNumber.filter((currentValue)=>{
  return (currentValue%5==0);
});
console.log(`The multiple of 5 : ${multi}`);
console.log(`----------Numbers between 20 and 50-------`);
const a1=arrayNumber.filter((currentValue)=>{
    return currentValue>20 && currentValue<50;
    });
    console.log(`The numbers between 20 and 50 are : ${a1}`);
    