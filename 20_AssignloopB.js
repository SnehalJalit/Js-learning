class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_dept=emp_dept;
        this.emp_name=emp_name;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;

    }
}
const emp_anil=new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha=new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi=new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali=new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika=new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny=new Employee(88,"Vinay","IT",75000,"TCS");
const emp_mahi=new Employee(99,"Mahi","HR",85000,"Infy");
let arrayEmployees=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
for (const Employee of arrayEmployees) {
    if (Employee.emp_company=='TCS'){
        console.log(`Employee name :${Employee.emp_name},company:${Employee.emp_company}`);
    }}
    console.log(`-----------------step 2----------------------------`);
    for (const Employee of arrayEmployees) {
        if (Employee.emp_dept=='Finance') {
            console.log(`Employee name :${Employee.emp_name},Department :${Employee.emp_dept}`);
        }
        
    }
    
console.log(`---------------step3-------------------------------------`);
for (const Employee of arrayEmployees) {
    if (Employee.emp_name.startsWith("R")) {
        console.log(`Employee Id :${Employee.emp_id},Employee name :${Employee.emp_name},Employee Id :${Employee.emp_id},Employee deparatment: ${Employee.emp_dept},Employee Salary:${Employee.emp_salary}`);
        
    }
    
}
console.log(`--------------step4-----------------`);
for (const Employee of arrayEmployees) {
    if (Employee.emp_salary>75000) {
        console.log(`Employee Id :${Employee.emp_id},Employee Name :${Employee.emp_name}, salary :${Employee.emp_salary} ,Company :${Employee.emp_company}`);
    }
    
}
console.log(`-------------------step 5-----------------`);
for (const Employee of arrayEmployees) {
if (Employee.emp_salary>=50000 && Employee.emp_dept=='IT') {
    console.log(`Employee Name :${Employee.emp_name}, salary :${Employee.emp_salary} ,Company :${Employee.emp_company}`);

}
    
}
console.log(`--------------------step 6-----------------------`);
for (const Employee of arrayEmployees) {
    if (Employee.emp_company=='Infy'){
        console.log(`Employee Id:${Employee.emp_id},Employee Name :${Employee.emp_name}, salary :${Employee.emp_salary} ,Company :${Employee.emp_company},Deparatment :${Employee.emp_dept}`);

    }}