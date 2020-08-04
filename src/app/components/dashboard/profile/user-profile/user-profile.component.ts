import { Component, OnInit } from '@angular/core';
import { EndpointService } from 'src/app/service/endpoint.service'
import {  ActivatedRoute,Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authenication/authentication.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  profile;
  picture;
  id:number
  token
  constructor(private endpointService:EndpointService,private route: ActivatedRoute, private router:Router,private authService:AuthenticationService) { }
  onClick(){
    this.router.navigate(['user/edit'])
  }
  ngOnInit(): void {
    this.endpointService.getProfile().subscribe(res => {
      this.profile = res;
      console.log(this.profile)
      this.picture = this.endpointService.profileUrl + this.profile.picture
    })
  }

}
