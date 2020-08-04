import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EndpointService } from 'src/app/service/endpoint.service'
import { AuthenticationService } from 'src/app/service/authenication/authentication.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  profile
  user;
  picture: File

  imageSelected(event) {
    this.picture = event.target.files[0]
    this.editForm.get('picture').setValue(this.picture)
    console.log(this.picture)
  }


  editForm = new FormGroup({
    bio: new FormControl(''),
    location: new FormControl(''),
    picture: new FormControl(''),
  })

 

  constructor(private route: ActivatedRoute, private router: Router, private endpointService:EndpointService, private authservice:AuthenticationService) { }

  // GOES BACK TO THE PROFILE
  toProfile() {
    this.router.navigate(['user'])
  }
  // ONSUBMIT FORM
  editProfile() {
    const update = new FormData();
    update.append('picture', this.editForm.get('picture').value)
    update.append('bio', this.editForm.get('bio').value)
    update.append('location', this.editForm.get('location').value)
  }

  ngOnInit(): void {
    this.endpointService.getProfile().subscribe(res => {
      // localStorage.setItem('Token', res.user.token)
      this.profile = res;
      this.user = this.profile['user']

      this.editForm.patchValue({
        bio: this.profile['bio'],
        location: this.profile['location'],
      })
    })
}
}
