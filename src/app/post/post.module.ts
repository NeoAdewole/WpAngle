import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post-detail/post.component';
import { PostsComponent } from './post-list/posts.component';
import { SanitizeHtmlPipe } from '../pipes/sanitize-html';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [PostComponent, PostsComponent, SanitizeHtmlPipe],
    imports: [CommonModule, RouterModule, SharedModule],
    providers: [SanitizeHtmlPipe]
})
export class PostModule {}
