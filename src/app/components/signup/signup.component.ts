import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/models/user/user';
import { AuthenticationService } from 'src/app/service/authenication/authentication.service';
import { ValidationService } from 'src/app/service/validation/validation.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',

  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(
    private authService: AuthenticationService,
    private validateService: ValidationService,
    private router: Router,
    private flashmessages: FlashMessagesService,
    private fb: FormBuilder
  ) { }

  signupForm: FormGroup = this.fb.group({
    first_name: [''],
    last_name: [''],
    email: [''],
    username: [''],
    password: [''],
    cpassword: [''],
  });

  isSuccessful: boolean;
  errorMessage;

  onSubmit() {
    //validation of registration
    if (!this.validateService.validateUserRegistration(this.signupForm.value)) {
      this.flashmessages.show('Please fill in all the fields', {
        cssClass: 'alert-danger',
        timeout: 4000,
      });
      return false;
    }

    //validation of email
    if (!this.validateService.validateEmail(this.signupForm.get('email'))) {
      this.flashmessages.show('That email is already taken!', {
        cssClass: 'alert-danger',
        timeout: 3000,
      });
    }

    if (this.signupForm.get('password') !== this.signupForm.get('cpassword')) {
      delete this.signupForm.value.cpassword;
      let user: User = this.signupForm.value;
      this.authService.addUser(user).subscribe(
        (res) => {
          this.isSuccessful = true;
          this.flashmessages.show('Client Registered successfully', {
            cssClass: 'alert-success',
            timeout: 3000,
          });
          this.router.navigate(['/login']);
        },
        (err) => {
          if (err.status === 422) {
            this.errorMessage = this.flashmessages.show(err.error);
          } else if (err.status === 400) {
          } else {
            this.errorMessage = this.flashmessages.show(
              'Something went wrong, Please contact the admin'
            );
          }
        }
      );
    }
    this.signupForm.reset();
    // form.reset()
  }

  ngOnInit(): void { }
}
