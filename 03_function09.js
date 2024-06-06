console.log(`------------------Assignment----------------------`);
var square =function() {
    var result=num*num;
    var num=5;
    var result=5*5;
    console.log(`Squre of 5 is :  ${result}`);
    var num =6;
    var result=6*6;
    console.log(`square of 6 is : ${result}`);
    var num =25;
    var result=25*25;
    console.log(`square of 25 is : ${result}`);
    var num=100;
    var result=100*100;
    console.log(`square of 100 is : ${result}`);
    var num=67;
    var result=67*67;
    console.log(`square of 67 is : ${result}`);
    var num=59;
    var result=59*59;
    console.log(`square of 59 is : ${result}`);
    console.log(`----------------------------------------`);
    console.log(`Type of  function :${ typeof square}`);
    console.log(`--------------------------------------------`);
    var len=499;
    var breadth=917;
    var result=len*breadth;
    console.log(` The area of Rectangle :${result}`);

}
    square();

    var swap=function swap(n1, n2){ // n1, n2 arguments or parameters n1=100   n2=200
        console.log('Inside swap function');
        console.log('Before Swap= n1', n1, " n2", n2 );
        var temp = n1;
        n1 = n2;
        n2 = temp;
        console.log('After Swap= n1', n1, " n2", n2 );
    }
    
var name1= "Mahi";
var name2= "Raina";
swap(name1,name2);
console.log(    `----------------------------------------------------------------`);

var v1 =55;
var v2 =77;
swap(v1,v2);
console.log(`--------------------------------------------------------------------`);
var str=function () {
}
str();
var display ="Js the most popular language of internet";
 var len     =display.length;
 console.log(`Total length of string; ${len}`);
 var display ="Js the most popular language of internet";

 var result=display.charAt(7)
 console.log(`char of index 7: ${result}`);
 var display ="Js the most popular language of internet";
var result=display.charAt(11)
 console.log(`char of index 11: ${result}`);
  var display ="Js the most popular language of internet";
 var len     =display.length-1;
 console.log(`Total length of string; ${len}`);
 var result=display.charAt(39)
 console.log(`last char: ${result}`);
 var result=display.charAt(0)
 console.log(`very first char :${result}`);
 var len     =display.length-3;
 console.log(`Total length of string; ${len}`);
 var result=display.charAt(37)
 console.log(` Third last char: ${result}`);
 var display ="Js the most popular language of internet";

 var result=display.trim().split(/\s+/).length;
 console.log( `Total no of words:${result}`);
 var res=result*result;
 console.log(`Square of result: ${res}`);
 





