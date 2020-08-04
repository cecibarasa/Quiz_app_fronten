import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authenication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthenticationService,
              public router: Router) { }

  ngOnInit(): void {
  }

  logOut(){
    this.authService.deleteToken();
    this.router.navigateByUrl('/login')
  }

}
