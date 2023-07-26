var graduation=function (gradeScore,HscScore,SSCScore,candidateName)
{
    var result=(gradeScore>=70 ||  HscScore>=80 || SSCScore>90) ? console.log(`Congrates ${candidateName} You are eligible for TCS interview`):console.log(`Sorry ${candidateName},You are not eligible for TCS interview`);

}
graduation(80,86,90,"Ankita");
graduation(70,65,55,"Nikita");
graduation(60,79,88,"Pranita");
