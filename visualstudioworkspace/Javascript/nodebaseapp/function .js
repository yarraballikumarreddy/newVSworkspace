
//Basic Function() Without Any Arguments

function f(){

    console.log("Hi ramesh Welcome To JS")
    
    }
    f();
    
    //Basic Function() With An Arguments
    
    function add(x,y){
    
              return x+y;
              
              }
      var Addtion = add(10,10);
    
      console.log(Addtion);
    
      //Basic Function() Passing As     Arguments
    
    function Perameter(){
    
              console.log("Hi Umamaheswar")
    
      }
    
    function pass(k){
    console.log("hiii");
    k();
    
      }
    pass(Perameter);
      
    //Basic Function() Passing As     Arguments
    
    
    function F(x,y){
      var z=x+y;
      console.log(z);
      return function (){
              console.log("hellow");
              
      }
      
      }
    
    function add(F){
    
    var g=F(10,20);
    
    g();
    
    }
    
    add(F);
    
    