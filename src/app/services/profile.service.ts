import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Profile } from '../models/profile.model';

@Injectable()
export class ProfileService {
  profilesUrl: string = '../../assets/dinosaurs.json';

  constructor(private _http: HttpClient) { }

  getProfiles(): Observable<Profile[]> {
    return this._http.get<Profile[]>(this.profilesUrl)
  }

}
