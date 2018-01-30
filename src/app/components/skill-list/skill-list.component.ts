import { Component, OnInit, Input } from '@angular/core';
import { Profile } from '../../models/profile.model';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent {
  @Input() skills: Array<string>;

}
