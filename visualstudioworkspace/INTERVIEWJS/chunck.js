// function chunck(array,size){
//   const chunked = [];  

//   for(let element of array){     
//   const last = chunked[chunked.length-1];
//     //   console.log("lastnumbaer"+last)
//       if(last || last.length === size){
//         chunked.push([element]);
//     //    console.log(x)
//       }else {
//          last.push(element);
//         // console.log(y)
//       }
//   }
// }

// chunck([1,12,12,12,1,141,51,15,111,14],3)


///good below//

function chunk(array, size) {
    const chunked = [];
    let index = 0;

    while (index < array.length) {
        chunked.push(array.slice(index, index + size));
        let x = index += size;// or (index=index+size) we call addassign
        console.log("------" + x)
    }
    console.log(chunked)
    return chunked;
}

chunk([1, 23, 45, 46, 47, 48, 49, 5, 5,], 1);
console.log("-array size--2---")
// chunk([1, 23, 45, 46, 47, 48, 49, 5, 5,], 2)
// console.log("---array size---")
// console.log("---3---")
// chunk([1, 23, 45, 46, 47, 48, 49, 5, 5,], 3)
// console.log("------")
// console.log("-array size--4---")
// chunk([1, 23, 45, 46, 47, 48, 49, 5, 5,], 4)




//---------------------------------------
console.log('------------------------------------------------------')
console.log('------------------------------------------------------')
console.log('------------------------------------------------------')


