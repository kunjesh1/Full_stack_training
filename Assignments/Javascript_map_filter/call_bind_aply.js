//difference of call() ,apply() and bind()

let bob= function(num,str){

    console.log('bob',num,str,this);
    return true;
}

let bill={
name:'Bill',
movie:'Lost in translation',
myMethod:function(fn){
    console.log("dfjdkfj");
}


}

//bill.myMethod(bob);
// //bill.myMethod(bob);
// bob.call(bill,2,'goodbye');
// let arr=[3,'hi'];
// bob.apply(bill,arr);
//bill.myMethod(bob,4,'ciao');
let arr=[1,"somethin"];
bob.apply(bill,arr);