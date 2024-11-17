// // closure//
// function sharedPizza(x,y){
//     let slicesPizza = (x / y).toFixed(2);
//     return function() {
//         console.log(`Each person gets ${slicesPizza} slices of pizza from our ${x} 
// slice pizza`);
//     };
// }

// let slicesPizza1 = sharedPizza(8, 2);
// let slicesPizza2 = sharedPizza(8, 3);
// let slicesPizza3 = sharedPizza(21, 20);
// let slicesPizza4 = sharedPizza(10, 3);

// slicesPizza1(); 
// slicesPizza2(); 
// slicesPizza3(); 
// slicesPizza4();


//Interpolated String:
function sharedPizza(x,y) {
    let slicesPizza = (x/y).toFixed(2);
    return `Each person get ${slicesPizza} slices of pizza; from our ${x} slices pizza`;
}

console.log(sharedPizza(8,2));
console.log(sharedPizza(8,3));
console.log(sharedPizza(21,20));
console.log(sharedPizza(10,3));