import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './post/post-list/posts.component';
import { PostComponent } from './post/post-detail/post.component';
import { WelcomeComponent } from './content/welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    {
        path: 'posts',
        component: PostsComponent
    },
    {
        path: 'posts/:id',
        component: PostComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: WelcomeComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
