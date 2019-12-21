
//method1
// function reverse(str){
//     const arr = str.split('');
//     console.log(`arrray  ${arr}`) 
//     console.log("-------------------")
//  var x=arr.reverse();
//     console.log("-------------------")
//     console.log(`arrray  ${x}`)
//   var reverse=  arr.join('');
//   console.log(reverse)
// return reverse
// }
// reverse("kumarreddy")




// function reverse(string){
//     return string
//     .split('')
//     .reverse()
//     .join('');
// }
// reverse("ramesh")

//method1--end=======

//----------------------method2--->
// function reverse(str){
//    let reversed="";
  
//    for (let character of str){
//     // console.log("kkrs"+str)
//     //    console.log(character)
//        reversed =reversed+character
//        reversed1=character+reversed
//     //    console.log("cwwwww"+character+reversed)
//    } 
//    console.log(reversed)
//    console.log(reversed1)
// return reversed;
// }
// reverse("ramesh")



function reverse(str){
    return str.split('').reduce((reversed,character)=>{
        return character+reversed 
},'');
 }
console.log(reverse("lakshmi"))
 