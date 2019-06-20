const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
   
// for (let i=0;i<companies.length;i++)
// console.log(companies[i]);


// //forEach
// companies.forEach(function(company){

// console.log(company.name);

// });


// let canDrink=[];
// for(let i=0;i<ages.length;i++)
// {

//     if(ages[i]>=21)
//     {
//         canDrink.push(ages[i]);

//     }
// }

// console.log(canDrink);


/*-------filter --*/

// const canDrink=ages.filter(function(age){

//     if(age>=21)
//     {
//         return true;
//     }
// });


// //const canDrink=ages.filter(age => age>=21);
// console.log(canDrink);

// const map1=companies.map(function(company)
// {
//  return 1;

// });

// console.log(map1);


// const Sortedcompanies=companies.sort((a,b) => (a.start < b.start)? 1 : -1 );
// console.log(Sortedcompanies);

// const sum=ages.reduce((age,total)=>total+age,0);
// console.log(sum);

// const example=ages.filter((age)=>age>=60)
// .map((age)=>age*2)
//                 .reduce((total,age)=>total+age,0);
               

//                 console.log(example);


// var global=10;

// (function abc()
// { 
//     var value=20;
//     console.log(global);
// }());

// console.log(value);



// var value1="sample1";

// function as(){
//    var value2="sample2"
//   console.log(value);
// }

// console.log(value1);

const sample1=companies.map(company=>{return `${company.map(c=>c.name).join(" ")}`});
console.log(sample1);

