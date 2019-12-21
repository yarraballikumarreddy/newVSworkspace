function http(successcallback,errorcallback)
{
      var x= 20;
      setTimeout(function(){
var data ;
var err="plese Give a valid Information";
if(data){
      successcallback(data);
}
else{
      errorcallback(err);
}
      },3000);
      console.log(x);
}


http(
function(ghh){
console.log(ghh)},
function(err){
console.log(err)}
);


a