function http( ){
    var x = 10;
      var promise = new Promise( function(resolve,reject){
              
              setTimeout(function(){
      var data="Hello Welcome To Call Back Function";
      var err;
      if(data){
              resolve(data);
      }
      else{
              reject(err);
      }
              },3000);
              console.log(x);
      });
      return promise;
}

http()
.then(function(data){
console.log(data);
})
.catch(function(err){
console.log(err);
});