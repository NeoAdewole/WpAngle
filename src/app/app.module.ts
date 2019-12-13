import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './content/welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { PostModule } from './post/post.module';

@NgModule({
    declarations: [AppComponent, WelcomeComponent, LoginComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, PostModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
