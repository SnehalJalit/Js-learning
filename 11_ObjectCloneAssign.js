const array=[20,3,4,56,90,400,49];
let a1=[20,3,4,56,90,400,49];
a1.push(55,66);
console.log(`Original array :${array}`);
console.log(`Cloned and Updated array : ${a1}`)
let a3=array.push(10,25)
console.log(`Updated original array:${array}`);

let clone=[...array,...a1];
console.log(clone);
const arrayEven=[2,30,14,8];
let merge=array.concat(arrayEven);
console.log(merge);
const employee_info={
    emp_id:27,
    emp_name:"John Doe",
    salary:{
        july_month:"40,0000INR",
        aug_month:"50,0000INR",
        jun_month:"65,0000INR"
    },
    address:{
        locality:{
            colony:"OM Vrindavan Society",
            street:"Kanch Pokli ,431202",

        },
        city:"Mumbai",
        state:"Maharashtra",
        country:"India"
    },
    Mobiles:["+91 8600 3456 88","1800-4567 32","+91-9096 5678 77"]
}
let month= JSON.parse(JSON.stringify(employee_info)); // Deep clone 
month.salary.july_month= "80,000INR";
console.log(`Employee Details: ${employee_info.salary.july_month}`);
console.log(`New Employee Details: ${month.salary.july_month}`);
let newCountry=JSON.parse(JSON.stringify(employee_info));
newCountry.address.country="United Kingdom";
console.log(`Employee Details: ${employee_info.address.country}`);
console.log(`New Employee Details: ${newCountry.address.country}`);
