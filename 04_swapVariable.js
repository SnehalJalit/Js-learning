function swap(n1, n2){
    console.log('Inside swap function');
    console.log('Before Swap== n1 =', n1, " n2 =", n2 );
    var temp = n1;
    n1 = n2;
    n2 = temp;
    console.log('After Swap== n1 =', n1, " n2 =", n2 );
}
var name1 ="Sweety";
var name2 =" Cutie"
swap(name1,name2);

console.log("------------------------------------------------------");
function swap2( a1,a2,a3){
    console.log('Inside swap function');
    console.log('Before swap==a1=',a1,"a2=",a2,"a3=",a3);
    var temp =a1;
    a1=a2;
    a2=a3;
    a3=temp;
    console.log('After Swap==a1=',a1,"a2=",a2,"a3=",a3);
}
var num1="100";
var num2="200";
var num3="300";
swap2(num1,num2,num3);