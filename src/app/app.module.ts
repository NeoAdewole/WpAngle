import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './content/welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { PostModule } from './post/post.module';
import { ProjectsModule } from './projects/projects.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageModule } from './page/page.module';
import { MatSidenavModule, MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
    declarations: [AppComponent, WelcomeComponent, LoginComponent],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      PostModule,
      ProjectsModule,
      PageModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      MatSidenavModule, MatIconModule,
      MatButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
