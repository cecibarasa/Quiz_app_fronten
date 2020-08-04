import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  FlashMessagesModule,
  FlashMessagesService,
} from 'angular2-flash-messages';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AuthenticationService } from './service/authenication/authentication.service';
import { AuthInterceptor } from '../app/Interceptor/auth-interceptor';
import { RedirectInterceptor } from '../app/Interceptor/redirect.interceptor';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserProfileComponent } from './components/dashboard/profile/user-profile/user-profile.component';
import { EditProfileComponent } from './components/dashboard/profile/edit-profile/edit-profile.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { QuizComponent } from './components/quizes/quiz/quiz.component';

import { QuizService } from './service/quiz.service';
import { AuthGuard } from './auth/auth.guard';
import { ResultsComponent } from './components/quizes/results/results.component';

import { AnswersComponent } from './components/quizes/answers/answers.component';

// import { ComponentsComponent } from './dashboard/components/components.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomePageComponent,
    DashboardComponent,
    NavbarComponent,
    UserProfileComponent,
    EditProfileComponent,
    QuizComponent,

    ResultsComponent,

    AnswersComponent,

    // ComponentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,

    HttpClientModule,
    FlashMessagesModule,

    ReactiveFormsModule,
  ],
  providers: [
    AuthenticationService,
    FlashMessagesService,
    QuizService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RedirectInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
