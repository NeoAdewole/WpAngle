import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../model/post';
import { PostService } from 'src/app/post.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
    posts: Post[] = [];
    errMsg: string;
    loading = true;
    defaultImage = environment.assetsUrl + 'Iconsocial.png';

    constructor(private postService: PostService) {}

    ngOnInit() {
        this.postService.getPosts().subscribe({
            complete: () => {
                this.loading = false;
            },
            next: posts => {
                this.posts = posts;
                this.loading = false;
            },
            error: errorMessage => {
                this.errMsg = errorMessage;
                this.loading = false;
                console.log(this.errMsg);
            }
        });
    }
}
