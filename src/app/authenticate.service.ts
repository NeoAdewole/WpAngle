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

@Injectable({
    providedIn: 'root'
})
export class AuthenticateService {
    userCredential = 'userCredential';
    constructor(private http: HttpClient) {}

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
                catchError(this.handleError)
            );
    }

    isUserLoggedIn() {
        return localStorage.getItem(this.userCredential) ? true : false;
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
    logout() {
      localStorage.clear();
    }
}
