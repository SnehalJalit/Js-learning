const arrayRollNum=[113,45,56,11,32,45,109,799,56,45];
const a1=arrayRollNum.reverse();
console.log(`Reverse array :${a1}`);
const a2=arrayRollNum.sort();
console.log(`sort array : ${a2}`);
console.log(`----------sort array in ascending order----------`);
arrayRollNum.sort( (n1, n2) => { 
    return n1>n2 ? 1 : -1;
} );
console.log(arrayRollNum);
console.log(`------------Greatest number------------`);
const maxNum=arrayRollNum.reduce((pre,currentvalues)=>{
    return pre>currentvalues?pre:currentvalues
});
console.log(`The Greatest No : ${maxNum}`);
console.log(`------------Smallest number------------`);
const minNum=arrayRollNum.reduce((pre,currentvalues)=>{
    return pre<currentvalues?pre:currentvalues
});
console.log(`The Smallest No : ${minNum}`);
console.log(`----------Remove Duplicates -------------`);
let array=[...new Set(arrayRollNum)];
console.log(array);

