import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Profile } from '../models/profile.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private profileUrl = 'http://localhost:3000/user';

  constructor(private http: HttpClient) {
  }

  getProfile(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.profileUrl);
  }

  getProfileById(payload: number): Observable<Profile> {
    return this.http.get<Profile>(`${this.profileUrl}/${payload}`);
  }

//   createProfile(payload: Profile): Observable<Profile> {
//     return this.http.post<Profile>(this.profileUrl, payload);
//   }

//   updateProfile(Profile: Profile): Observable<Profile> {
//     return this.http.patch<Profile>(
//       `${this.profileUrl}/${Profile.id}`,
//       Profile
//     );
//   }

//   deleteCustomer(payload: number) {
//     return this.http.delete(`${this.customersUrl}/${payload}`);
//   }
}
