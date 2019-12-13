import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../model/post';
import { PostService } from 'src/app/post.service';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
    posts: Post[] = [];
    errMsg: string;

    constructor(private postService: PostService) {}

    ngOnInit() {
        this.postService.getPosts().subscribe({
            next: posts => {
                this.posts = posts;
                console.log(this.posts);
            },
            error: errorMessage => {
                this.errMsg = errorMessage;
                console.log(this.errMsg);
            }
        });
    }
}
