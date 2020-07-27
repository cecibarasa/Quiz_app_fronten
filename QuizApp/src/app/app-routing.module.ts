import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';
import {HomePageComponent} from "./components/home-page/home-page.component";
import { DashboardComponent } from './components/dashboard/dashboard.component';


let routes: Routes;
routes = [
  {path: '', component: HomePageComponent},
  {path: 'homepage', component: HomePageComponent},
  {path: 'login-page', component: LoginComponent},
  {path: 'signup-page', component: SignupComponent},
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
