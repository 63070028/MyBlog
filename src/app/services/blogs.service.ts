import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  // constructor() { }
  getBlogs():number[]{
    return [1, 2, 3, 4, 5 , 6, 7, 8, 9, 10];
  }
}
