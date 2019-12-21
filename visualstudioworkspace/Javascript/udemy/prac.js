

var kumar = (1)
var reddy = (11);
var yarraballi = (1);
console.log(kumar);
console.log(reddy);
console.log(yarraballi);

if (kumar > (reddy && yarraballi)) {
    console.log("kumar winner" + (kumar) + 'point');

    if (reddy == yarraballi) {
        console.log("draw bw yarraballi and reddy" + (yarraballi - reddy) + 'point');
    }
    else if (kumar == (reddy)) {
        console.log(`${'reddy'}is equal to kumar ==========and value is
        ${reddy}`)

    }

    else if (kumar == (yarraballi)) {
        console.log(`is equal to kumar ${'yarraballi'},
        ${yarraballi}`)

    }
}



else if (reddy > (kumar && yarraballi)) {
    console.log("reddy winner" + (reddy) + 'point');
    if (kumar == yarraballi) {
        console.log("draw bw yarraballi and kumar" + (yarraballi - kumar) + 'point');
    }
}
else if (yarraballi > (kumar && reddy)) {
    console.log("yarra winner" + (yarraballi) + 'point');
    if (reddy == kumar) {
        console.log("draw bw kumar and reddy" + (kumar - reddy) + 'point');
    }
}


else if ((yarraballi == kumar) && (yarraballi !== reddy)) {
    console.log("drawyy bw yarraballi and kumar" + (yarraballi - kumar) + 'point');
}
else if ((yarraballi == reddy) && (yarraballi !== kumar)) {
    console.log("drawyy bw yarraballi and reddy" + (yarraballi - reddy) + 'point');
}
else if (reddy == kumar && (yarraballi !== reddy)) {
    console.log("drawyy bw reddy and kumar" + (reddy - kumar) + 'point');
}


else {
    console.log("draw");
}



// function tipcalculator(bill) {
//     var percentage;
//     if (bill < 50) {
//         return percentage = 0.2;
//     }
//     else if (bill > 40 && bill < 200) {
//         return percentage = 0.152;
//     }
//     else {
//         return percentage = 0.1;
//     }
// }
// var bills = [150, 40, 280];
// var tips = [
//     tipcalculator(bills[0]),
//     tipcalculator(bills[1]),
//     tipcalculator(bills[2])
// ];
// console.log(" hekkkkkkkk" + tips);
// var finalvalve = [
//     tips[0] + bills[0],
//     tips[1] + bills[1],
//     tips[2] + bills[2]
// ];

// console.log(finalvalve);


console.log('---------------------uuu--------------------');
var kumar = {
    firstName: 'kumar reddy',
    bills: [100, 200, 300, 50, 29],
    calcutip: function () {
        this.tips = [];
        this.finalValve = [];
        
        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];

            if (this.bills[i] < 50) {
                percentage = 0.2;
            }
            else if (this.bills[i] >= 50 && this.bills[i] < 200) {
                percentage = 0.15;
            }
            else {
                percentage = 0.1;
            }

            this.tips[i] = this.bills[i] * percentage;
            console.log('-----------------------------------------');
            this.finalValve[i] = this.bills[i] + this.bills[i] * percentage;


        }

    }
}
kumar.calcutip();
console.log(kumar)
console.log('--------------------uuiii---------------------');
console.log('--------------------uuiii---------------------');
console.log('--------------------uuiii---------------------');
console.log('--------------------uuiii---------------------');



function calcuaverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum
}
kumar.average = calcuaverage(kumar.tips);
console.log(kumar)



// console.log("++++++++++++++++++++++++++++++++++++")

function calcuaverage1(mytips) {
    var sum = 0;
    for (var i = 0; i < mytips.length; i++) {
        console.log("i value" + i)
        sum = sum + mytips[i];
        // 0+1=1
        // 1+2=3
        // 3+3=6
        // 6+4=10
        // 10+5=15
        console.log("sum value" + sum)
    }
    return sum
}
var myaverage = calcuaverage1([1, 2, 3, 4, 5])
console.log('final value below');
console.log(myaverage);

console.log("============asynous call back\"=================")
function recipe() {
    setTimeout(() => {
        const recipeid = [123, 125, 1234];
        console.log(recipeid);

        setTimeout((id) => {
            const myrecipe = { title: 'dosa', publisher: "kumar resddy" }
            console.log(`${id}...........${myrecipe.title}.....${myrecipe.publisher}`);



            setTimeout(publisher => {
                const myrecipe2 = { title: 'puri', publisher: "kumarooooo resddy" }
                // console.log(`${id}...........${myrecipe.title}.....${myrecipe.publisher}`)

                console.log(myrecipe);
            }, 1000, myrecipe.publisher );
        }, 1000, recipeid[2]);
    }, 1500);
}
recipe();


















