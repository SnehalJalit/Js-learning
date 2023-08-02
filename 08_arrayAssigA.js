const arrayFruits=["Banana","Orange","Apple","Mango","Water Melon"];
let element1 = arrayFruits[0];
let arrayFruitsLength = arrayFruits.length;
let elementLast = arrayFruits[arrayFruitsLength-1];
console.log(`The  first element is : ${element1} and Last element is : ${elementLast}`);
console.log(`----------------------------------------------------------------------`);
arrayFruits.unshift("Papaya");
console.log(arrayFruits);
console.log(`--------------------------------------------`);
let remove=arrayFruits.splice(4);
console.log(arrayFruits);
console.log(remove);
console.log(`--------------------------`);
let a1=["Banana","Orange","Apple","Mango","Water Melon"];
a1.push("Pineapple");
console.log(a1);
console.log(`---------------------------`);
let a2=["Banana","Orange","Apple","Mango","Water Melon"];
a2.splice(4,0,"Dragon Fruit");
console.log(a2);
console.log(`------------------------------------------------`);
let a3=["Banana","Orange","Apple","Mango","Water Melon"];
a3.splice(1,2,"kiwi");
console.log(a3);
console.log(`-------------------------------------------------`);
let a4=["Banana","Orange","Apple","Mango","Water Melon"];
for (let index = 1; index <= 4; index++) {
    const element = a4[index];
    console.log(element);
    
}
console.log(`--------------------------------------------------`);
let a5=["Banana","Orange","Apple","Mango","Water Melon"];
a5.splice(0,a5.length-3);
console.log(a5);