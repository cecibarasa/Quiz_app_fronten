import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authenication/authentication.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Login } from 'src/app/models/user/login';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService,
              private router: Router,
              private flashmessages: FlashMessagesService) { }

  loginCl: Login = {
    email: null,
    password: null
  }

  onLogin(){
    this.authService.authenticateUser(this.loginCl).subscribe(
      res => {
        this.authService.setToken(res['token']);
        this.router.navigateByUrl('/client-profile')
      },
      err => {
        this.flashmessages.show(err, {cssClass: 'alert-danger', timeout: 3000})
      }
    );
  }

  reloadPage(){
    window.location.reload()
  }


  ngOnInit(): void {
    if(this.authService.isLoggedIn()){
      this.router.navigateByUrl('/profile')
  }

}
}
