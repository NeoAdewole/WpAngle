import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) {}

  public getPosts() {
    return this.http.get<Post[]>(
      'http://localhost/portfolio/wp-json/wp/v2/posts'
    );
  }
}
