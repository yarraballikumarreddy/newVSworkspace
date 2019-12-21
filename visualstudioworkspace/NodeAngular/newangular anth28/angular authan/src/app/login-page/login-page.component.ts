import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LOGINPAGEComponent implements OnInit {
 

  constructor(private http: HttpClient, private router: Router) { }
res
  ngOnInit() {
  }
  submitForm(formData): void {
    console.log(formData);
    this.http.post( "http://localhost:8081/LOGIN", formData).subscribe(
       (res: any) => {
        localStorage.setItem('token', res.token);
         // tslint:disable-next-line: align
    
         console.log(res);
         alert ('login succesfully') ;
       }
    );
    if (this.res) {
      this.router.navigate(['/DeleteData']);
     }
 }

 


}
