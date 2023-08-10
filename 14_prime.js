function prime(n){
    if(n<=1){
        return false;
        
    }
    for (let i=2;i<n;i++){
        if(n%i===0){
            return false;
        }
    }
    return true;
}

console.log(`Is 11 is prime ? :${prime(11)}`);
console.log(`Is 21 is prime ? :${prime(21)}`);