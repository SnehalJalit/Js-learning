let info=`{
    "name" :"Aleix Melon",
    "id"   :"E00245",
    "role" :["Dev","DBA"],
    "Age"  :"23",
    "DOJ" :"11-12-2019",
    "Married" : "False",
    "Address":{
        "street" : "32, Laham St.",
        "country" : "Austria "
    },
    "referred_by" :"E0012"
}`;
console.log(`type of info  ==> ${typeof info}`);
const information = JSON.parse(info); // Convert from JSON format to object
console.log(` info type of ==>  ${typeof information}`);
console.log(information);

const employee ={};
console.log(`----------To get Dev from array-----------`);
const arrayRole=information.role;
for (const role of arrayRole) {
    if (role=="Dev") {
        console.log(role.toUpperCase());
  
    }

}
console.log(`---------------To get last Name--------`);
const employeeName=information.name;
console.log(`The last Name :${employeeName.substr(6,11)}`);
console.log(`--------------To get only Year------------`);
const employeeDate= information.DOJ.split("-");
//console.log(employeeDate);
const year=employeeDate[2];
console.log(year);




