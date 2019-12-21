import { Injectable, Injector } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import { AuthService} from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class TokenIntersepterService implements    HttpInterceptor {

  constructor(private injector: Injector) { }
  intercept(req, next) {
    let authservice = this.injector.get(AuthService );
    let tokanizedReq = req.clone({
      setHeaders: {
         Authorization: `BEARER ${authservice.getToken()}`
      }
    });
    return next.handle(tokanizedReq );
  }
}
