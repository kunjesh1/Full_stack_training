// function bike(){
// console.log(this.name);
// }

// var name="bike";
// var obj1={name:"Pulsar",bike:bike};
// var obj2={name:"Ninja",bike:bike};

// bike();
// obj1.bike();
// obj2.bike();

/*---------Implicit and Explicit binding----*/

var obj1={

    name:"Pulsar",
    bike:function(){

        console.log(this.name);
    }
}

var obj2={name:"Gixxer",bike:obj1.bike};
var name="Ninja";
var bike=obj1.bike;

bike();
obj1.bike();
obj2.bike();


