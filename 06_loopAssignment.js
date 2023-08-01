function vowelCount(str) {
    let count = 0;
    let index=0;
    while ( index <str.length)  {
        index ++;
         let char = str.charAt(index);
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || 
            char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
            console.log(char); 
            count = count + 1;
            

        }
    }
    console.log(`Total number of vowels is: ${count}`);
}
vowelCount("I am very good IT Developer");
console.log(`--------------------------------------------`);
let sum = function(){
    let totalSum = 0;
     for (let index = 1; index <=5; index++) {
        
        totalSum = totalSum + index *index*index;
     }
     console.log(`Sum of cube of first 5 numbers is : ${totalSum}`);
 }
 sum();
 console.log(`----------------------------------------------------`);
 function oddPositionedChars(str){
    var odd= "";
for( let index = 0 ;index < str.length; index++){
    
    if(  index%2!= 0 && str.charAt(index)!== " " ){               //
        var char =(str.charAt(index));
        
     odd= odd.concat(char); 
    }

         
     }
     console.log(`Given String is := "${str}"`);
     console.log(`odd position char := ${odd}`);
}
oddPositionedChars("Hard work always pays back");
oddPositionedChars("Soon I will be Angular IT Champ")



