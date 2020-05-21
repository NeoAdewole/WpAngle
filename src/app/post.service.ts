import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { filter, map, catchError, tap } from 'rxjs/operators';
import { Post } from './model/post';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class PostService {
    baseUrl;
    constructor(private http: HttpClient) {}

    public getPosts(): Observable<Post[]> {
        return this.http
            .get<Post[]>(

                environment.baseTokenUrl+'wp-json/wp/v2/posts?_embed',
                {
                    params: { per_page: '10' }
                }
            )
            .pipe(
                // tap(data => console.log('All: ' + JSON.stringify(data))),
                catchError(this.handleError)
            );
    }

    public getPost(id: number): Observable<Post> {
        // map(epics => epics.filter(epic => epic.id === id)[0]
        return this.getPosts().pipe(
            map(posts => {
                return posts.filter(p => p.id === id)[0];
            })
        );
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
}
