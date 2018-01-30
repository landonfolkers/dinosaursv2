import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Profile } from '../models/profile.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { setTimeout } from 'timers';

@Injectable()
export class ProfileService {
  profilesUrl: string = '../../assets/dinosaurs.json';
  public newSkillsSubject = new BehaviorSubject<string[]>(["Loading skills"]);

  constructor(private _http: HttpClient) { }

  getProfiles(): Observable<Profile[]> {
    return this._http.get<Profile[]>(this.profilesUrl)
  }

  pushSkills(skillsArray: string[]) {
    //console.log(skillsArray);
    this.newSkillsSubject.next(skillsArray)
  }

}
