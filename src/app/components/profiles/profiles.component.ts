import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service'
import { Profile } from '../../models/profile.model'

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  profiles: Profile[];

  constructor(public profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.getProfiles().subscribe(profiles => {
      profiles.forEach(profile => {
        profile.isHidden = false
      })
      this.profiles = profiles
    })
  }

}
