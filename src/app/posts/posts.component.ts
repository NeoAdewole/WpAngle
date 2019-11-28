import { Component, OnInit } from "@angular/core";
import { PostService } from "../post.service";
import { Observable } from "rxjs";
import { Post } from "../model/post";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"]
})
export class PostsComponent implements OnInit {
  data: Observable<Post[]>;

  constructor(private postService: PostService) {}

  // ngOnInit() {
  //   this.postService.getPosts().subscribe(d => {
  //     console.log(d);
  //     data = d;
  //   });
  // }
  ngOnInit() {
    this.data = this.postService.getPosts();
    console.log(this.data);
  }
}
