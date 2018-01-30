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
      let i = 0
      profiles.forEach(profile => {
        profile.id = i++
        profile.isHidden = true
      })
      this.profiles = profiles
    })
  }

  toggleSkills(event) {
    let id = event.target.classList[0]
    if(id) {
      this.profiles[id].isHidden === true ? this.profiles[id].isHidden = false : this.profiles[id].isHidden = true
    }
  }

}
