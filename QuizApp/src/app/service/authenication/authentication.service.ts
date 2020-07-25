import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {environment} from '../../../environments/environment';
import { User } from 'src/app/models/user/user';
import { Login } from 'src/app/models/user/login';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public http:HttpClient) { }

  noAuthHeader = { headers: new HttpHeaders({ 'noAuth': 'True'})}

  //Register Client
  addUser(user:User){
    return this.http.post(environment.authentcationApi + 'signup', user, this.noAuthHeader);
  }

  //User authentication
  authenticateUser(login: Login){
    return this.http.post(environment.authentcationApi + 'login', login, this.noAuthHeader)
  }
}
