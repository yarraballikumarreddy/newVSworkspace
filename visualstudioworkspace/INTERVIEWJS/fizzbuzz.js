function fizzbuzz(n) {
    for (var i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
                console.log("fizzbuzz");
                
        }
        else if(i % 3 === 0){
            console.log(i+" 3multiple  "+"buzz");
        }

        else if(i % 5 === 0){
            console.log(i+" --5multiple---  "+"buzz");
        }
        else{
            console.log("not a fizz buzz"+i)
        }
    }
}
fizzbuzz(15)