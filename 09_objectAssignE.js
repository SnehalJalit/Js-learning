let sbiBank={
         bankName:"SBI Bank",
         location:"Pune",
         accountNo:"12334546",
         IFSC:"SBINO005678",
         InterestRate:"3.00%-7.10%p.a",
         showDetails:function () {
            console.log(`The Bank Details :${this.bankName},${this.location},${this.accountNo},${this.IFSC},${this.InterestRate}`);
         }
}
let axisBank={
    bankName:"AXIS Bank",
    location:"Mumbai",
    accountNo:"3429495859",
    IFSC:"AXISNO0065743",
    InterestRate:"3%-3.5%p.a",
    showDetails:function () {
        console.log(`The Bank Details :${this.bankName},${this.location},${this.accountNo},${this.IFSC},${this.InterestRate}`);
     }
}
let yesBank={
    bankName:"YES Bank",
    location:"Latur",
    accountNo:"43546656677",
    IFSC:"YESNO768888",
    InterestRate:"2.00%-2.4%p.a",
    showDetails:function () {
        console.log(`The Bank Details :${this.bankName},${this.location},${this.accountNo},${this.IFSC},${this.InterestRate}`);
     }
}
console.log(sbiBank);
sbiBank.showDetails();
console.log(axisBank);
axisBank.showDetails();
console.log(yesBank);
yesBank.showDetails();