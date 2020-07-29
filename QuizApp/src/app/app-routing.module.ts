import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';
import {HomePageComponent} from "./components/home-page/home-page.component";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserProfileComponent } from './components/dashboard/profile/user-profile/user-profile.component';
import { EditProfileComponent } from './components/dashboard/profile/edit-profile/edit-profile.component';
import { QuizComponent } from './components/quizes/quiz/quiz.component';


let routes: Routes;
routes = [
  {path: '', component: HomePageComponent},
  {path: 'homepage', component: HomePageComponent},
  {path: 'login-page', component: LoginComponent},
  {path: 'signup-page', component: SignupComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user', component: UserProfileComponent },
  { path: 'edit', component: EditProfileComponent },
  { path: 'quiz', component: QuizComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
