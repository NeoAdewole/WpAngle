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
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageComponent implements OnInit {

  // id: number;
  errMsg: string;
  loading = true;
  id = 0;

  page$: Observable<Page>;

  // data = [];
  // pages$ = this.pageService.pages$;
  // page = this.pageService.getPage(this.id).subscribe();

  // defaultImage = environment.assetsUrl + 'Iconsocial.png';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pageService: PageService
    ) { }

    ngOnInit() {
      this.id = +this.route.snapshot.paramMap.get('id');
      this.page$ = this.pageService.getPage(this.id);
    }
}
