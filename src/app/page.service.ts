import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { filter, map, catchError, tap, take, mergeMap } from 'rxjs/operators';

import { Page } from './model/page';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  constructor(private http: HttpClient) {}

  getPageList(): Observable<Page[]> {
    return this.http.get <Page[]>(
      environment.baseTokenUrl+'wp-json/wp/v2/pages'
      //'http://localhost/portfolio/wp-json/wp/v2/pages?_embed'
      )
    .pipe(
        map(res =>
          res.map(page => ({
            ...page,
            id: page.id,
            slug: page.slug,
            date: page.date,
            modified: page.modified
            // link?: page.link,
            // slug?: page.slug,
            // title?: page.rendered.title,
            // excerpt?: page.rendered.excerpt,
            // content?: page.rendered.excerpt,
            // featured_image_src?: page.rendered.string,
            // authorName?: string,
            // author?: page._embeded.author[0]
          }) as Page)
        ),
        // tap(data => console.log('All Pages: ' + JSON.stringify(data))),
        catchError(this.handleError),
    );
  }

  getPage(id:number) : Observable<Page> {
    let singlePage : Observable<Page> = null;

    singlePage = this.getPageList().pipe(
      map((pageList, index) => {
        return pageList.find(p => p.id === id);
      })
    );

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
