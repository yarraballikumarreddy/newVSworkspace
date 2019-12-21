

// ------METHOD-----1-----START


// function palindrome(str) {
//     const reversed = str.split('').reverse().join('')
//     const x = str === reversed
//     console.log(str+" === "+reversed)
//     console.log(x )
//     return x

// }

// palindrome("kumar")
// palindrome('rrr')
// palindrome('mama')


// function palidrome(str){
//     const arr =str.split('');
//     var rever =arr.reverse();
//     const x = rever.join('');
//console.log(str+" === "+x)
//     console.log(x)
//     const y = x===str;

//     console.log(y)
//     return y

// }
// palidrome('kumarreddy')
// palidrome('abab')
// palidrome('abba')
// ------METHOD-----1-----END==+../

function palidrome(str) {
    return str.split('').every((char, i) => {
        console.log(char)
        console.log(i)
        return (char === str[str.length - i - 1])

    },

    );

}
// console.log(char===str[str.length -i-1])

palidrome("ababa")


