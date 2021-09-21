const chai = "chai";
const spies = "chai-spies";

function receivesAFunction(otherFunc){
    otherFunc();
}

function returnsANamedFunction(){
    const tom = function Tommy(){

    }
    return tom;
}
let anon = '';
function returnsAnAnonymousFunction(){
    return function() {
        console.log("");
    }
    return;
}
//returnsAnAnonymousFunction();





















// function Monday() {
//     // runFiveMiles();
//     // liftWeights();
//     exerciseRoutine(liftWeights);
//   }
  
//   function Tuesday() {
//     console.log("Go for a five-mile run");
//     console.log("Swim 40 laps");
//   }
  
//   function Wednesday() {
//     console.log("Go for a five-mile run");
//     console.log("Go for a five-mile run");
//   }
  
//   function Thursday() {
//     console.log("Go for a five-mile run");
//     console.log("Pump iron");
//   }
  
//   function Friday() {
//     console.log("Go for a five-mile run");
//     console.log("Swim 40 laps");
//   }



//   function runFiveMiles() {
//     console.log("Go for a five-mile run");
//   }
//   function liftWeights() {
//     console.log("Pump iron");
//   }
  
//   function swimFortyLaps() {
//     console.log("Swim 40 laps");
//   }

//   function exerciseRoutine(postRunActivity) {
//     runFiveMiles();
//     postRunActivity();
//   }

//   console.log(Monday());
  

  