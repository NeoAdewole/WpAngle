import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {
    HttpClient,
    HttpErrorResponse,
    HttpHeaders
} from '@angular/common/http';
import { throwError } from 'rxjs';
import { AuthenticateService } from '../authenticate.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    baseUrl;
    constructor(
        private http: HttpClient,
        private authService: AuthenticateService,
        private router: Router
    ) {}
    loginForm = new FormGroup({
        username: new FormControl(''),
        password: new FormControl('')
    });
    onSubmit() {
        // TODO: Use EventEmitter with form value
        const body = this.loginForm.value;

        this.authService.getToken(body).subscribe(_ => {
            this.router.navigateByUrl('/');
        });
        // Send credentials to JWT-Auth endpoint with appropriate headers
        // If response successful, save token to local storage and redirect to route
        // else show user error message and allow retry
    }
}
