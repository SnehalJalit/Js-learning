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
  const wiproemp=arrayEmployees.filter((employee)=>{
return employee.emp_company==='Wipro'
  })
  
  for (const employee of wiproemp) {
    console.log(`Company Name : ${employee.emp_company}  ,Name of Employee : ${employee.emp_name}`);

  }
  console.log(`----------Employee from IT and HR----------`);
  const empfromITandHR=arrayEmployees.filter((employee)=>{
    return employee.emp_dept==='HR' || employee.emp_dept==='IT'
      })
      
      for (const employee of empfromITandHR ) {
        console.log(`Dept Name : ${employee.emp_dept}  ,Name of Employee : ${employee.emp_name}`);
    
      }
      console.log(`----------Employee ID greater than 50----------`);
      const empid=arrayEmployees.filter((employee)=>{
        return employee.emp_id>50;
          })
          
          for (const employee of empid) {
            console.log(`Employee Id : ${employee.emp_id}  ,Name of Employee : ${employee.emp_name}`);
        
          }
          console.log(`----------Employee with start name alphabet A,M,v-----------`);
          const emp=arrayEmployees.filter((employee)=>{
            return employee.emp_name.startsWith('A')||employee.emp_name.startsWith('M')||employee.emp_name.startsWith('V');
              })
              
              for (const employee of emp ) {
                console.log(`Employee Name : ${employee.emp_name} `);
            
              }
              console.log(`---------------step 3--------------------`);
  const empsal=arrayEmployees.filter((employee)=>{
    return employee.emp_salary
  });
  let salsum=0;
  for (const employee of empsal) {
    
    salsum=salsum+employee.emp_salary;

  }
  console.log(`Average salary of all employee: ${salsum/empsal.length}`);
  console.log(`---------Average salary of employee from IT department------`);
  const empIT=arrayEmployees.filter((employee)=>{
    return employee.emp_dept==='IT'
  });
  for (const employee of empIT) {
    console.log(`Employee dept: ${employee.emp_dept}  ,Name of Employee : ${employee.emp_name} ,Salary : ${employee.emp_salary}`);

  }
  const avg=empIT.reduce((employee)=>{
    return employee.emp_salary;
  })
  let sal=0;
  for (const employee of empIT) {
    
    sal=sal+employee.emp_salary;

  }
  console.log(`Average salary of IT employee: ${sal/empIT.length}`);
  

      