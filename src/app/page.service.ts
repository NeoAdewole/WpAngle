import { Injectable } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { filter, map, catchError, tap, take, mergeMap } from 'rxjs/operators';

import { Page } from './model/page';
import { environment } from 'src/environments/environment';
import { WpContent } from './model/wp-content';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  constructor(private http: HttpClient) {}

  getPageList(): Observable<Page[]> {
    return this.http.get <Page[]>(
      environment.baseTokenUrl+'wp-json/wp/v2/pages?_embed'
      //'http://localhost/portfolio/wp-json/wp/v2/pages?_embed'
      )
    .pipe(
        map(res =>
          res.map(page => ({
            ...page,
            id: page.id,
            slug: page.slug,
            date: page.date,
            modified: page.modified,
            title: page.title,
            // content: page.content,
            authorName: page.authorName,
            excerpt: page.excerpt,
            // link?: page.link,
            // featured_image_src?: page.rendered.string,
            // author?: page._embeded.author[0]
          }) as Page)
        ),
        // tap(data => console.log('All Pages: ' + JSON.stringify(data))),
        catchError(this.handleError),
    );
  }

  getPage(id:number|string) : Observable<Page> {
    let singlePage : Observable<Page> = null;

    singlePage = this.getPageList().pipe(
      map((pageList, index) => {
        return pageList.find(p => {
          return (typeof(id) === "string") ? p.slug === id : p.id === id
          // p.id === id
        });
      }),
      tap(data => console.log('Selected Page: ' + JSON.stringify(data)))
    );
    tap
    return singlePage;
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
