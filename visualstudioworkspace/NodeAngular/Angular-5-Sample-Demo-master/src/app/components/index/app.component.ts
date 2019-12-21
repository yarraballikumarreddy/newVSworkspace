

import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})


export class AppComponent {
	title = 'Student Management By Sangwin Gawande';

	// Add few students for initial listing
	studentsList = [
	{	
		id : 1,
		first_name : "darshan",
		last_name : "darshan",
		email : "darshan@gmail.com",
		phone : 9503733178,
		department : "FSD"
	},
	{
		id : 2,
		first_name : "uma",
		last_name : "uma",
		email : "uma@gmail.com",
		phone : 8574889658,
		department : "java-developer"
	},
	{
		id : 3,
		first_name : "bharath",
		last_name : "bharath",
		email : "bharath@gmail.com",
		phone : 7485889658,
		department : "FSD"
	},
	{
		id : 4,
		first_name : "koti",
		last_name : "koti",
		email : "koti@gmail.com",
		phone : 9685589748,
		department : "spring-boot"
	},
	{
		id : 5,
		first_name : "kumar",
		last_name : "kumar",
		email : "kumar@gmail.com",
		phone : 8595856547,
		department : "css-designer"
	},

	{
		id : 6 ,
		first_name: "mahit" ,
		last_name: "raj" ,
		email: "mahit@gmail.com" ,
		phone: 7895236485,
		department : "AEM",
	}
	];

	constructor() {
		// Save students to localStorage
		localStorage.setItem('students', JSON.stringify(this.studentsList));
	}
}


