import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { environment } from '../../../environments/environment';
import { User } from 'src/app/models/user/user';
import { Login } from 'src/app/models/user/login';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public http: HttpClient) { }

  noAuthHeader = { headers: new HttpHeaders({ 'noAuth': 'True' })}

  //Register Client
  addUser(user: User) {
    return this.http.post(environment.authentcationApi + 'signup/', user, this.noAuthHeader);
  }

  //User authentication
  authenticateUser(login: Login) {
    return this.http.post(environment.authentcationApi + 'login/', + login, this.noAuthHeader)
  }

  //Helper Method (TOKENS)
  setToken(token: string) {
    localStorage.setItem('token', token);
  };

  getToken() {
    return localStorage.getItem('token');
  };

  deleteToken() {
    localStorage.removeItem('token')
  };

  getUserPayLoad() {
    let token = this.getToken();
    if (token) {
      var clientPayload = atob(token.split('.')[1]);
      return JSON.parse(clientPayload)
    } else {
      return null
    }
  }

  isLoggedIn() {
    var userPayload = this.getUserPayLoad();
    if (userPayload) {
      return userPayload.exp > Date.now() / 1000;
    }
  }
}
