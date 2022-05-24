import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Posts } from '../shared/models/profile.model';
import { PostService } from '../shared/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts$: Observable<Posts[]>;
  userId: number;

  constructor(private postervice: PostService) {}

  ngOnInit(): void {
    this.posts$ = this.postervice.getPosts();
    this.posts$.subscribe(i=> console.log(i)
    )
  }

}
