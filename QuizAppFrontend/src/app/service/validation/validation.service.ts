import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user/user';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  validateUserRegistration(user: User){
    if(user.firstName == '' || user.lastName == '' || user.email == '' || user.username == '' || user.password == ''){
      return false;
    }else{
      return true
    }
  }

  validateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}
