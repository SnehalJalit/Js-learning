function  stringBasics() {
    console.log(`--------------step 1------------------------`);
    console.log("My dream company name is Google and IBM");
    console.log(`----------------------------------------------`);
    console.log(`Hobby1:Painting   Hobby2:Drawing  Hobby3:Codding`);
    console.log(`-------------------------------------------------`);


}
stringBasics();

var stringBasics = " Painting    Drawing   Coding";
var lengthstringBasics =stringBasics.length;

console.log('Length of string is:'       ,lengthstringBasics);
console.log(`-----------------------------------------------------`);
console.log(`--------------Assignment 2---------------------------------`);
function stringHandsOn(){
    console.log(`Given string is :${  "     Hey you are doing good,keep it up      "}`);
}

stringHandsOn();
var stringHandsOn = "Hey you are doing good , keep it up";
var lengthHandsOn =stringHandsOn.length;
console.log('Length of string is:'       ,lengthHandsOn);
console.log(`----------------------------------------------------------`);
var stringHandsOn="       Hey you are doing good,keep it up      ";

var result=stringHandsOn.trim();
var length=result.length
//var result=stringHandsOn.indexOf('H');
console.log(`Before Trim String length :${stringHandsOn.length},    After Trim string is :${result}  and     it length is :${result.length}`);
console.log(`--------------------------------`);
var stringHandsOn="Hey you are doing good,keep it up";

var res=stringHandsOn.split('');
var words=result.length;
console.log(`Total no of words :${words}`);
console.log(`-------------------------------------`);
var stringHandsOn="Hey you are doing good,keep it up";
var result=stringHandsOn.indexOf(`good`);
console.log(`index of Word:${result}`);
console.log(`------------------------------`);
var stringHandsOn="Hey you are doing good,keep it up";
var result=stringHandsOn.slice(22,33);
console.log(`substring starting from 22: ${result}`);
console.log(`----------------------------------------------`);
var stringHandsOn="Hey you are doing good,keep it up";
var result=stringHandsOn.includes("up");
console.log(` string ends with up: ${result}`);
console.log(`-------------------------------------`);
var stringHandsOn="Hey you are doing good,keep it up";
var result=stringHandsOn.includes("Hey");
console.log(` string Start with Hey: ${result}`);
console.log(`--------------------------------------------`);
var stringHandsOn="Hey you are doing good,keep it up";
var result=stringHandsOn.charAt(0);
console.log(` First char: ${result}`);
var stringHandsOn="Hey you are doing good,keep it up";
var result=stringHandsOn.charAt(32);
console.log(` Last char: ${result}`);




























