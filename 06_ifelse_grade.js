var voteEligibility=function (age){
    var ageValue = +age;
    if (age<=0 || isNaN(ageValue) || (age>=120)) {
        console.log(` your age ${age} is invalid`); 
    } else {
        // if block to handle all valid scenarios
        if (age>=18) {
            console.log(`Your age ${age} is eligible for vote`);
        } else {
            console.log(`Your age ${age} is you are not eligible for vote`);
        }
    }
}   
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(undefined);
voteEligibility(null);