console.log(`---------sum of array element using traditional method----------`);
const array=[20,11,40,25,37,49,9,90,60,2,19];
let sum = 0; 
for (const element of array) { 
    sum = sum + element; 
}
console.log(sum);

console.log(`Finding sum using reduce() `);

const totalSum = array.reduce( (runningTotal, element) => {
    return runningTotal + element;
} );
console.log(totalSum);
console.log(`----------Multiple of 5--------`);
const multi=array.filter((currentValue)=>{
  return (currentValue%5==0);
});
console.log(multi);
const total = multi.reduce( (runningTotal, element) => {
    return runningTotal + element;
} );
console.log(`Total of multiple of 5 : ${total}`);

