import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { Profile } from '../../models/profile.model';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent implements OnInit {
  skills: Array<Array<string>> = [];

  constructor(public profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.newSkillsSubject.subscribe(data => {
      //console.log(data)
      this.skills.push(data)
    })

    //setTimeout(() => {console.log(this.skills)}, 3000)
  }

}
