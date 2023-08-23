const arrayNumber=[1,-7,40,502,-77,91,0,108,89,-601];
arrayNumber.forEach((currentValue, index, array)=>{
    console.log(`value: ${currentValue}, Index: ${index}`);
} ); 
console.log(`---------------step 2- Positive Number-------------`);
arrayNumber.forEach((currentValue)=>{
    if (currentValue>=0) {
        console.log(currentValue);
    }

})
console.log(`---------------step 3: Negative Number--------------`);
let NegativeNo=[];
arrayNumber.forEach((currentValue)=>{
    if (currentValue<0) {
        NegativeNo.push(currentValue)
        console.log(NegativeNo);
    }
    
})

console.log(`-----------------step 4-Even Numbers--------------`);

arrayNumber.forEach((currentValue)=>{
    if (currentValue%2==0) {
        console.log(currentValue);
    }
    
})
console.log(`-----------step 5-----------`);
let sum=0;

 arrayNumber.forEach((currentValue)=>{
    sum+=currentValue;    
})
console.log(`Sum of all element in arrray: ${sum}`);
console.log(`--------------step 6---------------------`);
arrayNumber.forEach((currentValue,index)=>{
    if (index%2==0) {
        console.log(`Even index values is : ${currentValue}`);
    }
    
})