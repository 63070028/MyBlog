import { Component } from '@angular/core';
import { BlogsService } from '../services/blogs.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  page:number = 1;
  blogs:number[] = [];

  constructor(private blogsServices: BlogsService){}

  getBlogs(){
    this.blogs = this.blogsServices.getBlogs();
  }

  ngOnInit(): void {
    this.getBlogs();
  }
  
}
