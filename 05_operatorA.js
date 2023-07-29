function squareOfWordLenth() {
    console.log(`----------1-----------------------`);
var str1="javaScript";
var result=str1.length;
var res=result*result;
console.log(`The Square of length of JavaScript is: ${res}`);
var str2="Google Chrome";
var result=str2.length;
var res=result*result;
console.log(`The Square of length of Google Chrome is: ${res}`);
var str3="Developer Smart";
var result=str3.length;
var res=result*result;
console.log(`The Square of length of Developer Smart is: ${res}`);

}
squareOfWordLenth();
console.log(`--------------------------2-----------------------`);
var str=function(){
    var display="I am Angular Developer"
    var res=display.length;
    console.log(`Length of string:${res}`);
    var result=display.trim().split(/\s+/).length;
 console.log( `Total no of words:${result}`);
 var res1=res/result;
 console.log(`Dividing lenght of string to word of string:${res1}`);
 var res1=res *result;
 console.log(`Multiplying length of string to word in string:${res1}`);
}
str();