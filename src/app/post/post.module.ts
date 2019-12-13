import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post-detail/post.component';
import { PostsComponent } from './post-list/posts.component';
import { SanitizeHtmlPipe } from '../pipes/sanitize-html';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [PostComponent, PostsComponent, SanitizeHtmlPipe],
    imports: [CommonModule, RouterModule],
    providers: []
})
export class PostModule {}
