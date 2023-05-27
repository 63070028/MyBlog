import { Component } from '@angular/core';
import { BlogsService } from '../services/blogs.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  page:number = 1;
  blogs:number[] = [];

  constructor(private blogsServices: BlogsService, private router: Router){}

  getBlogs(){
    this.blogs = this.blogsServices.getBlogs();
  }

  goToDetails(id:string) {
    this.router.navigateByUrl('/details/'+id);
  }

  ngOnInit(): void {
    this.getBlogs();
  }
  
}
