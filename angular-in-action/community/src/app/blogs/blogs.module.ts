import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsComponent } from './blogs/blogs.component';
import { BlogComponent } from './blog/blog.component';

import { BlogsService } from './services/blogs.service';
import { RouterModule, Routes } from '@angular/router';

const blogsRoutes: Routes = [
  {
    path: 'blogs',
    component: BlogsComponent
  },
  {
    path: 'blogs/:post_id',
    component: BlogComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(blogsRoutes)
  ],
  declarations: [
    BlogsComponent,
    BlogComponent,
  ],
  providers: [
    BlogsService
  ]
})
export class BlogsModule { }
