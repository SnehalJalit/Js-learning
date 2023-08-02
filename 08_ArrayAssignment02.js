const arrayNumber=[20,31,40,25,23,11,29,9,60,2,11];
let arrayNumberLength = arrayNumber.length;
console.log(`The total elements in array :${arrayNumberLength}`);
let element1 = arrayNumber[0];

let elementLast = arrayNumber[arrayNumberLength-1];
console.log(`The  first element is : ${element1} and Last element is : ${elementLast}`);
console.log(`-----------------------------------------------------`);
let a1=[20,31,40,25,23,11,29,9,60,2,11];
let a1len=a1.length;
let thirdlen=a1[a1len-3];
console.log(thirdlen);
console.log(`------------------------------------------------------`);
for (let index = 0; index < arrayNumber.length; index++) {
    const element = arrayNumber[index];
    if(element%2==0){
        const element=arrayNumber[index];
        console.log(`Even no is:${element}`);
    }
}console.log(`----------------------------------------------`);
for (let index = 0; index < arrayNumber.length; index++) {
    const element = arrayNumber[index];
    if(element%2==1){
        const element=arrayNumber[index];
        console.log(`Odd no is:${element}`);
    }
}
console.log(`------------------------------------------------`);
var count=0;
for (let index = 0; index < arrayNumber.length; index++) {
    const element = arrayNumber[index];
    if (index%2==0){
        const element = arrayNumber[index];
//console.log(arrayNumber[index]);
count=count+element;
    }
}
    console.log(`Total count of even positioned element is :${count}`);
    var count=0;
    console.log(`---------------------------------------------------------`);
for (let index = 0; index < arrayNumber.length; index++) {
    const element = arrayNumber[index];
    if (index%2==1){
        const element = arrayNumber[index];
//console.log(arrayNumber[index]);
count=count+element;
    }
}
    console.log(`Total count of odd positioned element is :${count}`);
    console.log(`---------------------------------------------------------`);
    let count1=0;
    for (let index = 0; index < arrayNumber.length; index++) {
        const element = arrayNumber[index];
        //console.log(arrayNumber[index]);
        count1=count1+element;
        
    }
       console.log(`Total of all element of array:${count1}`); 
       console.log(`----------------------------------------------`);
    
       for (let index = 0; index < arrayNumber.length; index++) {
        const element = arrayNumber[index];
        if (element%5==0) {
            console.log(`Multiple  of 5 :${arrayNumber[index]}`);
            
        }
        
       }
       console.log(`--------------------------------------------------`);
       let a5=arrayNumber.includes(115);
       console.log(`The 115 is include:${a5}`);
       console.log(`-------------------------------------------------------`);
       let a6=arrayNumber.includes(23);
       console.log(`The no 23 is include:${a6}`);
       console.log(`--------------------------------------------------------`);
       arrayNumber.splice(3,0,55,66);
       console.log(`The new array is:${arrayNumber}`);
       console.log(`--------------------------------------------------------`);
       arrayNumber.splice(0,4);
       console.log(`The array from fourth index is :${arrayNumber}`);
    
    











