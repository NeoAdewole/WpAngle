import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './post/post-list/posts.component';
import { PostComponent } from './post/post-detail/post.component';
import { WelcomeComponent } from './content/welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { ProjectsComponent } from './projects/project-list/projects.component';
import { ProjectComponent } from './projects/project-detail/project.component';
import { PageComponent } from './page/page.component';

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
        path: 'projects',
        component: ProjectsComponent
    },
    {
        path: 'projects/:id',
        component: ProjectComponent
    },
    {
      path: 'page/:id',
      component: PageComponent
    },
    {
        path: 'projects/:slug',
        component: PageComponent
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
