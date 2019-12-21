import { Component } from '@angular/core';

@Component({
	selector: 'property_comp',
   templateUrl:'./property.component.html',
   styleUrls: ['./propertycomponent.css']
	
})
export class Propertycomponent {
name="sri";

student1=[{id:1, firstname:"sri", marks:85},
{id:2,firstname:"nath",marks:75},
{id:3,firstname:"thrinath",marks:87}];

appList= [ {
      "ID": "1",
      "Name" : "One"
   },

   {
      "ID": "2",
      "Name" : "Two"
   } ];


   cities=["hyd","bang","chen"];


student=[{id:1, firstname:"sri", lastname:"s"},{id:2,firstname:"nath",lastname:"t"}];

value1:string="";
users = [
   'Mahesh',
   'Krishna',
   'Narendra',
'Jitendra'
];

getCSSClasses(flag:string) {
   let cssClasses;
   if(flag == 'nightMode') {  
        cssClasses = {
      'one': true,
      'two': true 
   }	
   } else {  
        cssClasses = {
      'two': true,
      'four': false 
   }	
   }
   return cssClasses;
}	

f1(){
   console.log("this is export class")
}

}

