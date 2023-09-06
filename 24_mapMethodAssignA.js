const arrayNumber=[20,11,40,25,23,11,9,31,60,2,19];
const array = arrayNumber.map((currentValue) => {
    return currentValue +10;
});
console.log(`By adding 10 in each element in array : ${array}`);
console.log(`---------cube of element---------`);
const arrayOfcube = arrayNumber.map((currentValue) => {
    return currentValue * currentValue *currentValue;
});
console.log(`Cube of each element : ${arrayOfcube}`);
console.log(`--------Add index value to current value--------`);
const addIndex=arrayNumber.map((currentValue,index)=>{
    return currentValue+ index;
});
console.log(addIndex);