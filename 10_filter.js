const ages =[34,36,18,35,16];
const result=ages.filter(checkAdult);
function checkAdult(age){
    return age>18;
}
console.log(result);
const num=[65,44,12,4];
const newArr=num.map(myFun)
function myFun(num) {
    return num *10;
    
}
console.log(newArr);