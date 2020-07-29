import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user';
import { AuthenticationService } from 'src/app/service/authenication/authentication.service';
import { ValidationService } from 'src/app/service/validation/validation.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthenticationService,
              private validateService: ValidationService,
              private router:Router,
              private flashmessages:FlashMessagesService) { }

  user: User = {
    firstName: null,
    lastName: null,
    email: null,
    username: null,
    password: null
  }

  isSuccessful: boolean;
  errorMessage;

  onSubmit(){

    //validation of registration
    if(!this.validateService.validateUserRegistration(this.user)){
      this.flashmessages.show('Please fill in all the fields', {cssClass: 'alert-danger', timeout: 4000});
      return false;
    }

    //validation of email
    if(!this.validateService.validateEmail(this.user.email)){
      this.flashmessages.show('Please use a vaild email', {cssClass: 'alert-danger', timeout: 3000})
    }

    this.authService.addUser(this.user).subscribe(
      res => {
        this.isSuccessful = true;
        this.flashmessages.show('Client Registered successfully', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/login-page']);
      },
      err =>{
        if(err.status === 422){
          this.errorMessage = this.flashmessages.show(err.error)
        }else{
          this.errorMessage = this.flashmessages.show('Something went wrong, Please contact the admin')
        }
      }
    )


      // form.reset()


  }



  ngOnInit(): void {
  }

}
