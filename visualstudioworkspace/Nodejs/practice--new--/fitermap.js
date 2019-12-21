var ages = [12, 23, 2, 5, 6, 45, 96, 41, 52, 63, 10, 20, 30];

var companies = [{ name: "kumarreddy", categuory: "engineer", start: 1996, end: 2019 },
{ name: "jaswanthreddy", categuory: "AE", start: 1996, end: 2020 },
{ name: "maddireddy", categuory: "farmer", start: 1996, end: 2011 },
{ name: "venkataramanareddy", categuory: "ui", start: 1996, end: 2010 },]

//console.log(ages)

//forloop
// for(let i=0;i<ages.length;i++){
//     console.log("total age"+ages[i])
//     console.log("--------hh------------")
//     for(let i=0;i<companies.length;i++){
//     console.log(companies[i])
//  }
// }

// console.log("--------//////////------------")
// for(let i=0;i<companies.length;i++){
//     console.log(companies[i].name)
//.name =name in comapany will come
//}


//----foreacch
//(1)
// console.log("------for eavch--//////////------------")
// companies.forEach(function(data){

//     console.log(data.name)

// }) 
//(2) arreow function
// console.log("------for eavch--//////////-arreow functio-----------")
// companies.forEach(data=>console.log(data.categuory))

//filter

let candrink = [];

// for(let i=0;i<ages.length;i++){
//     if(ages[i]>=20){
//         candrink.push(ages[i])
//     }
//     else{   
//     } 
// }
// console.log(candrink);

// const canidrink = ages.filter(function (age) {
//     if (age >= 21) {
//         return true
//     }
//     console.log(age)

// });
// console.log(canidrink)

// const icanidrink = ages.filter((age) => age <= 21)
// console.log(icanidrink)


const re = companies.filter(company => {
    if (company.name === "kumarreddy") {
        console.log("-ok---" + company.name)
       return company.name
    }

}

);
console.log(re)


console.log("-----------------;;;;;;;;;;;----------")
const re1 = companies.filter(company => company.name === "kumarreddy");
console.log(re1)

const compname =companies.map(function(company){
return company.name
})
console.log(compname)
console.log(`${compname.name} ==${compname.ages}`)







