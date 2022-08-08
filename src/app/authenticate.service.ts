import { Injectable } from '@angular/core';
import {
    HttpClient,
    HttpErrorResponse,
    HttpHeaders
} from '@angular/common/http';
// import { filter, map, catchError, tap } from 'rxjs/operators';
// import { Post } from './model/post';
import { Observable, throwError } from 'rxjs';
import { catchError, take, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class AuthenticateService {
    userCredential = 'userCredential';
    constructor(private http: HttpClient, private toastr: ToastrService) {}

    public getToken(credential: any) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        const options = { headers: headers };
        // this.loginForm.value;
        return this.http
            .post(
                environment.baseTokenUrl + 'wp-json/jwt-auth/v1/token',
                credential,
                options
            )
            .pipe(
                take(1),
                tap(data => {
                    localStorage.setItem(
                        this.userCredential,
                        JSON.stringify(data)
                    );
                }),
                catchError(this.handleError.bind(this))
            );
    }

    isUserLoggedIn() {
        return localStorage.getItem(this.userCredential) ? true : false;
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        this.toastr.error(err.error.message, 'Login Error', {
            timeOut: 2000,
            enableHtml: true
            }
        );
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        return throwError(errorMessage);
    }
    logout() {
      localStorage.clear();
    }
}
