import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Posts } from '../models/profile.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private postUrl = 'http://localhost:3000/postList';

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<Posts[]> {
    return this.http.get<Posts[]>(this.postUrl);
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
