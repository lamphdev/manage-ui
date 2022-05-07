import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { PostListComponent } from './pages/post-list/post-list.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeService } from '../shared/services/theme.service';


@NgModule({
  declarations: [
    PostListComponent,
    CreatePostComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class BlogModule { 

  constructor(private themeService: ThemeService) {
    themeService.setShowHeader(true);
    themeService.setShowSideBar(true);
  }
  
}
