// let square = function(x){ 
//     return (x*x); 
//   }; 
// console.log(square(9));
// console.log("-------------------------------------------------")
// console.log("-------------------------------------------------") 
// console.log("-------------------------------------------------")
// var square1 = (x) => { 
//     return (x*x); 
// }; 
// console.log(square1(9)); 
this.outsidename=" out side name accesor"
let user = {
   name: "arrow vs function ",
    arrow: () => {
        console.log(`"arrow function" =====    + ${this.name}`)
        console.log( `" outsidename normol function" ${this.outsidename}`)  
    },

    function1() {''
        console.log(`"fhggh         "thisnormol function" ===========  + this ${this.name}`),
        console.log( `" outsidename normol function"   + this ${this.outsidename}`)      
    }    
}
 user.arrow();
user.function1();

// let user1 = {       
//     show(){ 
//         console.log(arguments); 
//     } 
// }; 
// user1.show(1, 2, 3); 

// let user11={      
//     show_ar : () => { 
//     console.log(...arguments); 
// } 
// }; 
// user11.show_ar(1, 2,12, 3); 


// var alpha = {
//     a: 1, b: 2, c: 3, X:"fals", u: 8, i: 9
// }
// console.log("00000000000"+alpha.X)
// var ali = alpha;
// console.log("00000000000"+ali.X)
// ali.X = "kk";
// console.log(ali.X)
// console.log(alpha.X)

for (var i = 0; i < 4; i++) { // global scope
    setTimeout(() => console.log(i));
  }
  
  for (let i = 0; i < 4; i++) { // block scope
    setTimeout(() => console.log(i));
}
