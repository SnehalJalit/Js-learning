let array=[];
let professor= {
    name :"V.Kumar",
    phone : "76859430",
    Address :"M.K Road",
    city :"Pune",
    mail :"Vkumar3@gmail.com",

           degrees:{
           Engineering : "CSC",
           PHD :"Adv. Computing",
           PGD :"Computer Management",
           MBA :"Business Analytics",
           getDegrees:function () {
         console.log(`Teacher Degrees:${this.Engineering},${this.PHD},${this.PGD},${this.MBA}`);
           }

          },
          certificates :["Hacker Rank Participation","IFE cources","Adv Programming"],

}
console.log(professor);
let p=professor.degrees;
console.log(p);
professor.degrees.getDegrees();
professor.certificates.push("Oracle ");
console.log(`The new certificate is:${professor.certificates}`);
professor.TotalExperience="14 Years";
console.log(professor);
//console.table(professor);
professor.certificates.pop();
console.log(`After deleting last element:${professor.certificates}`);





