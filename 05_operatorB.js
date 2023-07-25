function  greaterNumber(num1,num2) {
    var result=(num1>num2) ? num1 :num2 ;
    var res=
    console.log(`Greatest number is :${result}`);
}
greaterNumber(10,-10);
greaterNumber(800,899);
console.log(`-----------------------------------------------`);
 var isEvenOrOddNum=function (num) {
    var res=29 % 2==0 ? " even" : " odd";
     console.log(`The number 29 is :${res}`);
     var res=44 % 2==0 ? " even" : " odd";
     console.log(`The number 44 is :${res}`);
     var res=0 % 2==0 ? " even" : " odd";
     console.log(`The number 0 is :${res}`);
     var res=101 % 2==0 ? " even" : " odd";
     console.log(`The number 101 is :${res}`);

}
isEvenOrOddNum();
console.log(`---------------------------------------------------`);
var wordLength= function(){
    var str ="Javascript";
    var len=str.length;
    var res=len % 2== 0 ? "Even" : "Odd";
    console.log(`The length of word Javascript is :${res}`);
    var str ="Developer";
    var len=str.length;
    var res=len % 2== 0 ? "Even" : "Odd";
    console.log(`The length of word Javascript is :${res}`);
    var str ="Google";
    var len=str.length;
    var res=len % 2== 0 ? "Even" : "Odd";
    console.log(`The length of word Javascript is :${res}`);

}
wordLength();