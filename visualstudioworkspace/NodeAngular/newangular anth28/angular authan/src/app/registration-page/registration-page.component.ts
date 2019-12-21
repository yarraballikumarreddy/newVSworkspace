import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  submitForm(formData): void {
    console.log(formData);
    this.http.post (" http://localhost:8081/REGISTRATION ", formData).subscribe(
       (res) => {
         console.log( res);
         alert('Sucseesfully Inserted' );
       }
    );
 }
}
