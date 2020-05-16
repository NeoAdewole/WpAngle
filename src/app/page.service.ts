import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { filter, map, catchError, tap, take, mergeMap } from 'rxjs/operators';

import { Page } from './model/page';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  // http://localhost/portfolio/wp-json/wp/v2/pages
  // baseUrl;
  id = parseInt(this.route.snapshot.paramMap.get('id'));
  // pages: Observable<Page[]>;
  page: Observable<Page>

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) {}

  pages$ = this.http.get <Page[]>('http://localhost/portfolio/wp-json/wp/v2/pages?_embed')
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

  // public getPage(id: number): Observable<Page> {
  // public getPage(id: number): Observable<Page> {
            // pipe(
      //   filter(page => page.filter(p => p.id === id)[0])
      //   // tap(page => {console.log('Page is: ' + JSON.stringify(page))}),
      //   // catchError(this.handleError),

      // );


      // page$ = this.pages$.pipe(
      //   // map(res => res),
      //   mergeMap(pages => pages),
      //   filter(page => page.id === id),
      //   tap(page => {console.log(page)}),
      //   take(1),
      //   tap(page => {console.log('Page is: ' + page)
      //     return page;
      //   }),
      // );


      // .subscribe({
      //   complete: () => {
      //     this.loading = false;
      //     // console.log(page);
      //     console.log("Completed: ");
      //   },
      //   next: page => {
      //     // this.data.push(page);
      //     this.loading = false;
      //     console.log("Next: " + page.id);
      //   })
      // this.pageService.getPages().pipe(
      //   mergeMap(pages => pages),
      //   filter(page => page.id === this.id),
      // )
    // }

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
