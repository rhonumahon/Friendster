import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Profile } from '../shared/models/profile.model';
import { ProfileService } from '../shared/services/profile.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile$: Observable<Profile>;
  userId: number;

  constructor(private profileService: ProfileService, route: ActivatedRoute) { 
   this.userId = route.snapshot.params["id"]
  }

  ngOnInit(): void {
    this.profile$ = this.profileService.getProfileById(this.userId)
  }

}
