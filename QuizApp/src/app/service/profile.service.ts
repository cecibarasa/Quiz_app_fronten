import { Injectable } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authenication/authentication.service';
import { ValidationService } from 'src/app/service/validation/validation.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EndpointService } from 'src/app/service/endpoint.service'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  apiHost = 'https://quizzzin.herokuapp.com/auth/';
  profileUrl="https://quizzzin.herokuapp.com/";

  constructor(private authenService: AuthenticationService,
    private validateService: ValidationService,
    private router: Router,private http: HttpClient,private endpoints: EndpointService,) { }
  
    // getProfile(id:number){
    //   return this.http.get(this.apiHost+'profile/'+id)
    // }
}
