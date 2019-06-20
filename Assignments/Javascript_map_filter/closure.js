
// let name="john";

// function sayHi(){

//     alert("Hi"+ name);
// }

// name="Pete";
// sayHi();

/**************return function */

// function makeWorker(){


//     let name="Pete";
    
//     return function(){


//         alert(name);
//     };


// }

// let name="John";

// //create function
// let work=makeWorker();

// work();



let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];


//   users.sort(byField('name'));
//   users.sort(byField('age'));

  function byField(field)
  {
     return (a,b)=>(a[field]>b[field])?1:-1;



  }

  
  console.log(users.sort(byField('surname')));
  //console.log(users.sort(byField('age')));

  
// users.sort(byField('name'));
// users.forEach(user => console.log(user.name)); // Ann, John, Pete

// users.sort(byField('age'));
// users.forEach(user => console.log(user.name));