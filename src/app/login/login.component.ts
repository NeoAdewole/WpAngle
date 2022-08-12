import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {
    HttpClient,
    HttpErrorResponse,
    HttpHeaders
} from '@angular/common/http';
import { AuthenticateService } from '../authenticate.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    @Input() loginMethod: 'login' | 'signup' = 'login';
    model: any = {};
    baseUrl;
    loading : boolean = true;
    returnUrl: string = '/';
    constructor(
        private http: HttpClient,
        private route: ActivatedRoute,
        private authService: AuthenticateService,
        private router: Router
    ) {}
    loginForm = new FormGroup({
        username: new FormControl(''),
        password: new FormControl('')
    });

    displayStyle = "none";

    ngOnInit() {
        // reset login status
        this.authService.logout();
        this.displayStyle = "block";
    }

    openPopup() {
        this.displayStyle = "block";
    }
    closePopup() {
        this.displayStyle = "none";
    }

    onSubmit() {
        this.loading = true;
        this.returnUrl = this.route.snapshot.queryParams.redirectUrl;
        this.authService.getToken(this.loginForm.value)
            .subscribe(
                data => {
                    // login successful so redirect to return url
                    this.router.navigateByUrl(this.route.snapshot.queryParams.redirectURL);
                },
                error => {
                    // login failed so display error
                    // this.alertService.error(error);
                    this.loading = false;
                });
    }
}
