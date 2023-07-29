
console.log(`-------------------Assignment 2---------------------`);
var checkLeapYear=function(year){

    var yearvalues=+year
    if (isNaN(yearvalues) || year=='anystring' || year==null) {
        console.log(`${year}  Please enter valid year.`);
    }
    else{
    if ((0==year % 4) && (0!=year % 100) || (0==year % 400)) {
        console.log(`${year} is leap year`);
    }else{
        console.log(`${year} is not leap year`);
    }
}}
checkLeapYear(2020);
checkLeapYear(1999);
checkLeapYear(1600);
checkLeapYear(2022);
checkLeapYear(1945);
checkLeapYear(null);
checkLeapYear("Twenty Twenty");
checkLeapYear(undefined);
checkLeapYear(NaN);
checkLeapYear(1750);






