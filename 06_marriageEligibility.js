console.log(`------------------Assignment 3-------------------------`);
function marriageEligibility(gender ,age){
    if(gender=="male" && age>=21){      
          console.log(`Gender is :${gender},age is ${age},You are eligible for Marriage.`);


    }else if(gender=="female" && age>=18){
        console.log(`Gender is :${gender},age is ${age},You are eligible for Marriage.`);

    }
    else{
        console.log(`Gender is :${gender},age is ${age},You are  not eligible for Marriage.`);

    }
}
   marriageEligibility("male" ,17);
   marriageEligibility("male" ,25);
   marriageEligibility("female",28);
   marriageEligibility("female" ,16);  
    marriageEligibility("other" ,35);
marriageEligibility("other" ,41);


 