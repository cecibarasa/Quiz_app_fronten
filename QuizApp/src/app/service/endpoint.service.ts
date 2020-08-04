import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { AuthInterceptor } from "src/app/Interceptor/auth-interceptor";

@Injectable({
  providedIn: 'root'
})
export class EndpointService {
  apiHost = 'https://quizzzin.herokuapp.com/auth/';
  profileUrl = "https://quizzzin.herokuapp.com/";

  constructor(private http: HttpClient) { }
  getProfile() {
    return this.http.get(this.profileUrl + 'profile/')
  }

  updateProfile(body) {
    return this.http.put(this.profileUrl + 'profile/', body)
  }


  quizzes() {
    return this.profileUrl + 'quiz/';
  }

  




}