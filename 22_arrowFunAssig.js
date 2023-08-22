console.log(`---------step1---------`);
let arrowFun=()=>{
  
    console.log(`"Good Morning,Today is Tuesday"`);
}
arrowFun();
console.log(`------step 2-----------`);
let multiply=(num1,num2,num3=1)=>{
let multi=num1*num2*num3;
console.log(`Multiplication is :${multi}`);
}
multiply(5,5,2);
multiply(10,4);
console.log(`------step 3----------`);
let add =(v1,v2,v3,v4,v5)=>{
    let addition=v1+v2+v3+v4+v5;
    console.log(`Addition is:  ${addition}`);

    return addition;
}
add(100,100,200,349,756);
add("I am"," learning"," ES6"," features"," in depth .");