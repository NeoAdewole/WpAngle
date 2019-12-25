import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './content/welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { PostModule } from './post/post.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectsComponent } from './content/projects/projects.component';

@NgModule({
    declarations: [AppComponent, WelcomeComponent, LoginComponent, ProjectsComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        PostModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
