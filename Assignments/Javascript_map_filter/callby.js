// function callByValue(var1,var2)
// {

//     console.log("Inside call by value method");
//     var1=100;
//     var2=200;
//    console.log(var1+" "+var2);
// }


// let var1=10;
// let var2=20;

// console.log("Before call by value method");
// console.log(var1+" "+var2);
// callByValue(var1,var2);
// console.log("After call by value method");
// console.log(var1+" "+var2);


/**Function-call by reference */

function callbyReference(varobj)
{

varobj.a=-1;
console.log("Inside call by value method");
console.log(varObj.a);
}


let varObj={a:1};
console.log("Before call by reference");
console.log(varObj.a);
callbyReference(varObj);

console.log("After call by reference");
console.log(varObj.a);