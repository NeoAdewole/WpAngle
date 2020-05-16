import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PageService } from '../page.service';
import { Page } from '../model/page';
import { environment } from 'src/environments/environment';
import { Observable, from } from 'rxjs';
import { filter, map, catchError, tap, take, mergeMap, distinctUntilChanged } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageComponent implements OnInit {

  // id: number;
  errMsg: string;
  loading = true;
  id = parseInt(this.route.snapshot.paramMap.get('id'));

  page$: Observable<Page>

  // data = [];
  pages$ = this.pageService.pages$;
  // page = this.pageService.getPage(this.id).subscribe();

  // defaultImage = environment.assetsUrl + 'Iconsocial.png';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pageService: PageService
    ) { }

    ngOnInit() {
      // this.pageService.getPages();
      this.route.url
      .subscribe(url => console.log('The URL changed to: ' + url + " Snapped as: " + this.route.snapshot.paramMap.get('id')));
    // }

    // this.selectPage();
      // return this.pageService.getPage()

      console.log(this.pageService.pages$)

      // this.page$ = this.pageService.getPage(this.id);

      // this.pageService.getPage().pipe(
      //   take(1),
      //   distinctUntilChanged(),
      //   // tap(data => {
      //   //   console.log(data)
      //   // }),
      //   mergeMap(data => data),
      //   filter(data => data.id === this.id
      //     // console.log("Filtered: " + data);
      //   ),
      //   tap(data => {console.log('Page is: ' + JSON.stringify(data))}),
      //   // catchError(this.handleError),
      //   // map(page => {return page})

      //   // map(selected => {
      //   //   console.log(selected)
      //   //   return selected
      //   // }),
      //   // tap(page => {console.log("Last Service Tap: " + page)}),
      // )

      // this.page.subscribe(
      //     {
      //       complete: () => {
      //         console.log("Done!")
      //       },
      //       next: selectedPage => {
      //         JSON.stringify("selected: " + selectedPage);
      //       },
      //       error: errorMessage => {
      //         this.errMsg = errorMessage;
      //         this.loading = false;
      //       }
      //     }
      //   )
    }

  selectPage() {
    const id = +this.route.snapshot.paramMap.get('id');
    // this.page = this.pageService.getPage(id);
    // this.page$ = this.pageService.getPage(this.id);
    // console.log(this.page$)
  }

}
