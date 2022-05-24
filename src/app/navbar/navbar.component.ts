import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../shared/models/profile.model';
import { ProfileService } from '../shared/services/profile.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentUserId: number = 2;
  profile$: Observable<Profile>;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profile$ = this.profileService.getProfileById(this.currentUserId)
  }

}
