import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Page } from '../model/page';

@Injectable({
    providedIn: 'root'
})
export class PageService {
    // baseUrl;
    constructor(private http: HttpClient) {}

    public getPages(): Observable<Page[]> {
      return this.http
        .get<Page[]>(
          'http://localhost/portfolio/wp-json/wp/v2/pages'
        )
        .pipe(
          // tap(data => console.log('All: ' + JSON.stringify(data))),
          catchError(this.handleError)
        );
    }
    public getPage(slug: string): Observable<Page> {
      // map(epics => epics.filter(epic => epic.id === id)[0]
      return this.getPages().pipe(
        map(pages => {
          return pages.filter(p => p.slug === slug)[0];
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
