import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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

 

  constructor(private route: ActivatedRoute, private router: Router) { }

  // GOES BACK TO THE PROFILE
  toProfile() {
    this.router.navigate(['user'])
  }
  // ONSUBMIT FORM
  updateProfile() {
    const update = new FormData();
    update.append('picture', this.editForm.get('picture').value)
    update.append('bio', this.editForm.get('bio').value)
    update.append('company', this.editForm.get('company').value)
  }

  ngOnInit(): void {

    this.editForm.patchValue({
      bio: this.profile['bio'],
      location: this.profile['location'],
    })
  }
}
