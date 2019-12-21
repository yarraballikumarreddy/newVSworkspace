var student = [{id:1,Name:"somu"},{id:2,Name:"reddy"},{id:3,Name:"Kumar"}];

student.forEach(stu=>{
    console.log(stu.id,stu.Name);});


///

var arr  =[0,1,4,5,10];
;
var Filter = arr.map(x=> ((x+9)^(2)) -1);

var Filter1=arr.map(x=>x*5);
console.log(Filter,Filter1);
