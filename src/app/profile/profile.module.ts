import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


const routes = [
  {
    path: '',
    component: ProfileComponent
  }
]
@NgModule({
  declarations: [
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class ProfileModule { }
