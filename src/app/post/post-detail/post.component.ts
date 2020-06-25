import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../post.service';
import { Post } from '../../model/post';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
    data: Observable<Post>;
    defaultImage = environment.baseTokenUrl + environment.assetsUrl + 'Iconsocial.png';

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private postService: PostService
    ) {}

    ngOnInit() {
        this.getPost();
    }

    getPost(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.data = this.postService.getPost(id);
    }

    onBack(): void {
        this.router.navigate(['/posts']);
    }
}
