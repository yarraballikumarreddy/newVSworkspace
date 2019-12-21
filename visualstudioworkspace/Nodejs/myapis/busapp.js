
const dboperation =require('./buses');
dboperation.list();
var kkr={"id":116, "name":'kumar',"age":23};// JSON formate representation of data
var kkf={"id":117, "name":'bbc1',"age":23};
var kkf1={"id":118, "name":'ggg',"age":23};
dboperation.add(kkr);
dboperation.add(kkf);
dboperation.add(kkf1);
dboperation.list();

var kkff={"id":117, "name":'bc1b',"age":25};
dboperation.update(kkff);

dboperation.delete(18);
dboperation.list();
console.log('allast endied');
