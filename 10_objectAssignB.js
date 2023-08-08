let bankSbi={
    bankName:"SBI Bank",
         location:"Pune",
         accountNo:"12334546",
         IFSC:"SBINO005678",
         InterestRate:"3.00%-7.10%p.a"
}
let bankLocation={
    street :"Laxmi Road",
    city :"Pune",
    pinCode:"443621"
}
let mergedObject = Object.assign({} , bankSbi, bankLocation);
console.table(mergedObject);

let rateOfInterest={
    homeLoanInterest:"8.50%",
    personalLoanInterest:"8.75%",
    dueInterest:"5%"
}
let sbiDetails={};
let mergedObject1 = Object.assign({sbiDetails} , bankSbi, bankLocation,rateOfInterest);
console.log(mergedObject1);
console.table(mergedObject1);
for (const key in mergedObject1) {
    {
        console.log(`${key}=>${mergedObject1[key]}`);
    }
    
}console.log(`----------------------------------------`);
let Bank={...bankSbi,...bankLocation};
console.log(bankSbi,bankLocation,Bank);

