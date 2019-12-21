function reversint(n){
 
    const revesed=n.toString().split('').reverse().join('')
    console.log( revesed)

// if(n<0){
// return parseInt( revesed)*-1
// }
//return parseInt(revesed)

//or

return parseInt(revesed)*Math.sign(n)
}

reversint(-12)