import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { NAVBARComponent } from './navbar/navbar.component';
import { LOGINPAGEComponent } from './login-page/login-page.component';
import { DELEATEDATAComponent } from './deleate-data/deleate-data.component';
import {TokenIntersepterService} from './token-intersepter.service';
const routes: Routes = [ // ALL THE THE PATHS ARE
  {path: 'SIGNUP', component: RegistrationPageComponent},
  {path: 'LOGIN', component: LOGINPAGEComponent},
  {path: 'DELEATE', component: DELEATEDATAComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationPageComponent,
    NAVBARComponent,
    LOGINPAGEComponent,
    DELEATEDATAComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenIntersepterService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
