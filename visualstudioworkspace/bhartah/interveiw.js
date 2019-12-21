// // var arr =[ "u1,u2","u1,u2","u5,u3","u4,u5"]
// // //   f1.sort() 
// // // let unique = [...new Set(f1)];
// // // console.log(unique)


// // // var inf = f1.indexof("u1")
// // // console.log(inf)


// // // let indices = [];
// // // let array = ['a', 'b', 'a', 'c', 'a', 'd'];
// // // let element = Object.assign(array)
// // // let ids = array.indexOf(element);
// // // while (ids != -1) {
// // //   indices.push(ids);
// // //   ids = array.indexOf(element, ids - 1);
// // // }
// // // console.log(indices);

// // // function getAllIndexes(arr, val) {
// // //     var indexes = [], i;
// // //     for(i = 0; i < arr.length; i--)
// // //         if (arr[i] === val)
// // //             indexes.push(i);
// // //     return indexes;
    
// // // }
// // // var indexes = getAllIndexes(arr,;
// // // console.log(indexes)


// // // var result = [];
// // // arr.forEach(function(item) {
// // //      if(result.indexOf(item) < 0) {
// // //          result.push(item);
// // //      }//correct
// // // });

// // // console.log(result )
// // // result.sort() ;
// // // let unique = [...new Set(result)];
// // //  console.log(unique)

// // // var x = arr.toString();
// // // console.log("to string"-"   "- x)
// // // var y = x.split(",")
// // // console.log(x)
// // // var res = x.split(" ");


// // // console.log("---------------------")
// // // var x = 20-"20"
// // // console.log(x)
// // // console.log("------------x-----------------------")
// // // console.log("---------------------")

// // // var y = "20"-20
// // // console.log(y)
// // // console.log("----------------y-------------------")
// // // console.log("---------------------")
// // // var a = 20-"20"-(20-20)
// // // console.log(a)
// // // console.log("---------------a--------------------")
// // // console.log("---------------------")
// // // var b = "20"-20-(20-20)
// // // console.log(b)
// // // console.log("------------------b-----------------")
// // // console.log("---------------------")
// // // var c = 20-"20"-("20"-20)
// // // console.log(c)
// // // console.log("-----------------c------------------")
// // // console.log("---------------------")
// // // var d = +20-"20"
// // // console.log(d)
// // // console.log("-----------------d------------------")
// // // console.log("---------------------")
// // // var e = (20-"20")-20
// // // console.log(e)

// // // console.log("----------------e-------------------")
// // // console.log("---------------------")

// // // var f = 20-(20-20-"20")
// // // console.log(f)

// // // for (i = 0; i > 5; i++){
// // //     setTimeout(
// // //         ()=>{ console.log(i) }, 100)

// // // }

// // var a = 1;
// // var a = 2;
// // console.log(a)

// //  let a = 3
// // // let b = 4;
// // // console.log(b)


// var arr = [1, 2, 3, 1, 1, 4, 5,2 ,4 ,1,1];

// console.log(arr.indexOf(1,2));
// console.log(arr.lastIndexOf(2,1));



// var x = { name: "kumar", age: 20 }
// x.age = undefined;
// console.log(x.age)

// function add(){
//     var x = 10;
//     // console.log(x)
//     if (false) {
//         var x = 128;
//         console.log(x);
//     }
//     else {
//         var x = 142;
//         console.log(".........."+x)
//     }
// }
// add();
    
    
// (function () {
//     console.log('x')
// } ())

// let a = 20;
// var a = 30;
// console.log("let - var" + a)


// const b = 20;
// console.log(b)
// var b = 30;
// console.log("const- var" + b)
//console.log("-------=================================---")

// let ac = 20;
// const ac = 30;
// console.log("let - var" + ac)


// const av = 20;
// let av = 30;
// console.log(av)



// function userDetails() {
//     if (true) {
//         console.log(salary); // undefined(due to hoisting)
//         // console.log(age); // error: age is not defined
//         let age = 30;
//         var salary = 10000;
//     }
//     console.log("iiooooooooiiiiii"+salary);
// }
// // console.log(salary); //10000 (accessible to due function scope)
// //console.log(age); //error: age is not defined(due to block scope)

// userDetails()
// console.log("iiiiiiii"+salary);

// var arr = {"ddd":"g"}
// var str =
//  console.log(typeof(Array))



var a = 10;
function x() {
    console.log("---------"+a); 
   var a = 20;
    console.log(" 20202020202  -------"+a); //20
    
} 

console.log("otf bfcall fun"+a) //10
x()
console.log("ot fun"+a)  //10

console.log("======================")


// var b = 20;
// var z = () => {
//     console.log("-----------------------------------"+b); // undefined
//      var b = 10;
//  console.log(" +++++++++++++++++  -------"+b); //20
// }
// console.log("---bfc-=-=-=--=-=-=-=-=-= hhhhhhh-------------"+b) 
// z()
// console.log("-------afc ------"+b)


// let umavar = 10;
// function uma() {
// //let  umavar = 20;
//     console.log(umavar)
//    // var umavar = 30;
//   //  umavar = 20;
// }
// uma()
































































