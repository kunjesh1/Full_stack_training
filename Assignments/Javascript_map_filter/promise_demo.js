let promiseToCleanTheRoom = new Promise(function (resolve, reject) {

    let isClean = false;

    if (isClean) {
        resolve("Cleaned");


    }

    else
        reject("not cleaned");

});


promiseToCleanTheRoom.then(function (fromResolve) {

    console.log('The room is' + fromResolve);

}).catch(function (fromReject) {

    console.log("the room is" + fromReject)
});


//==========================================================================

let cleanRoom=function(){

    return new Promise(function(resolve,reject){
    
      resolve("cleaned the room");

    });
};

let removeGarbage=function(message){

    return new Promise(function(resolve,reject){

        resolve(message+"Removed garbage");
    });
};

let winPrize=function(message){

    return new Promise(function(resolve,reject){

        resolve(message+"Won Prize ");
    });
};


// cleanRoom().then(function(result){

//     return removeGarbage(result);
// }).then(function(result){

//     return winPrize(result);
// }).then(function(result){

//     console.log(result+"finished");
// });


//==================================================

Promise.race([cleanRoom(),removeGarbage(),winPrize()]).then(function(){

    console.log("all finished");
})



