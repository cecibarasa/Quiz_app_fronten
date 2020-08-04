import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AuthenticationService } from '../service/authenication/authentication.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';



const TOKEN_HEADER_KEY = 'x-access-token';


@Injectable()

export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthenticationService, private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
      if(req.headers.get("noauth") === "True"){
        return next.handle(req.clone());
      }else{
        const clonereq = req.clone({
          headers: req.headers.set("Authorization", "Token " + this.authService.getToken())
        })
        return next.handle(clonereq).pipe(
          tap(
            event => {},
            err => {
              if(err.error.auth == false){
                this.router.navigateByUrl('/login')
              }
            }
          )
        )
      }
    }
}