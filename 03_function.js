
    console.log("---------step1-------");
    function show() {
        console.log();
    }

var add=show()
console.log('this is function with no argument and no return vale');
console.log('this is show function');
console.log("---------------------------------------------------------------------")
    


function personalDetails(){
    console.log("firstName :Snehal  lastName :Jalit  CollegeName :VBMV");
    
    
}
personalDetails();
console.log("-----------------------------------------------------------------------------");
function swap(n1,n2 ){ // n1, n2 arguments or parameters n1=100   n2=200
    console.log('Inside swap function');
    console.log('Before Swap=> n1', name1, " n2", name2 );
    var temp = n1;
    n1 = n2;
    n2 = temp;
    console.log('After Swap=> n1', name2, " n2", name1 );
}
var name1="Virat";
var name2="Anushka"
swap(name1,name2)
console.log("------------------------------------------------------------------------------");

function swapValues(a1,a2){
    console.log('Inside swap function')
    console.log('Before Swap=> a1', a1, " a2", a2 );
    var temp = a1;
    a1 = a2;
    a2 = temp;
    console.log('After Swap=> a1', a1, " a2", a2 );
}
var val1="1000";
var val2="2000";
swapValues(val1,val2)
console.log("---------------------------------------------------------------------------------");
function addThreeValues(arg1, arg2, arg3){
    //console.log('Values are: ', arg1, arg2, arg3);
    var result = arg1 + arg2 + arg3;
    return result;
}
var res = addThreeValues(10.23,600,40);
console.log('Result is ', res);
function addValues(arg1, arg2, arg3){
   // console.log('Values are: ', arg1, arg2, arg3);
    var result = arg1 + arg2 + arg3;
    return result;
}
var res= addValues("Hello","Good","Morning");
console.log('Result is ', res);
console.log("---------------------------------------------------------------------");
function bankDetails(params) {
    console.log("BankName :CITI Bank   Account NO: 3425167877   Location : Pune     pincode :436218");
    console.log("BankName :Axis Bank   Account NO: 340000877   Location : Mumbai    pincode :676218");
    console.log("BankName :HDFC Bank   Account NO: 77666516787   Location : Pune     pincode :876218");
}
bankDetails();

