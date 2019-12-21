import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { EmployeedetailComponent } from './Employeedetail/Employeedetail';
import { MainbodyComponent } from './mainbody/mainbody.component';
import { HOMEComponent } from './home/home.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';


const appRoutesConfig: Routes = [
  {
    path: '' , component: MainbodyComponent
  },
  {
    path: 'Homedetails', component: HOMEComponent
  },
  {
    path: 'Employeedetails', component: EmployeedetailComponent
  },

  {
    path: 'Employeelogindetails', component:  EmployeeloginComponent
  },
  
  {
    path: '',
    redirectTo: '/Homedetails',
    pathMatch: 'full'
},
{
    path: '**',
    redirectTo: '/Homedetails',
    pathMatch: 'full'
}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    EmployeedetailComponent,
    NavigationComponent,
    HOMEComponent,
    MainbodyComponent,
    EmployeeloginComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule,
    RouterModule.forRoot(appRoutesConfig)
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent]

})
export class AppModule { }
