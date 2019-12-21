import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-deleate-data',
  templateUrl: './deleate-data.component.html',
  styleUrls: ['./deleate-data.component.css']
})
export class DELEATEDATAComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  submitForm(formData):void{
    console.log(formData);
    this.http.post("http://localhost:8081/DeleteData",formData).subscribe(
       (res)=>{
         console.log( res);
         alert('Sucseesfully DEALEATED')
       }
    ); 
 }

}
