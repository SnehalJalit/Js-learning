class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
      this.emp_id = emp_id;
      this.emp_name = emp_name;
      this.emp_dept = emp_dept;
      this.emp_salary = emp_salary;
      this.emp_company = emp_company;
    }
  }
  const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
  const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
  const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
  const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
  const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
  const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
  const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");
  
  let arrayEmployees = [
    emp_anil,
    emp_radha,
    emp_rishi,
    emp_sonali,
    emp_monika,
    emp_viny,
    emp_mahi,
  ];
  const employeeTCS=arrayEmployees.filter((employee)=>{
    return employee.emp_company==='TCS';
  })
  console.log(employeeTCS);
  for (const employee of employeeTCS) {
    console.log(`Company Name : ${employee.emp_company},Employee Name : ${employee.emp_name}`);

  }
  console.log(`--------------find average salary of employee from Wipro-----------`);
  const wiproemp=arrayEmployees.filter((employee)=>{
    return employee.emp_company==='Wipro';
  });
  let salarysum=0;
  for (const employee of wiproemp) {
    
    salarysum=salarysum+employee.emp_salary;

  }
  console.log(`Average salary from employee in wipro: ${salarysum/wiproemp.length}`);
  console.log(`---------------step 3--------------------`);
  const wiprInfyoemp=arrayEmployees.filter((employee)=>{
    return employee.emp_company==='Wipro' || employee.emp_company==='Infy';
  });
  let salsum=0;
  for (const employee of wiprInfyoemp) {
    
    salsum=salsum+employee.emp_salary;

  }
  console.log(`Average salary from employee in wipro and Infy: ${salsum/wiprInfyoemp.length}`);