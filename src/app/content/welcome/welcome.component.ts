import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PageService } from '../../page.service';
import { Page } from '../../model/page';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
    page: Page;
    errMsg: any;
    pageName = 'home';

    page$: Observable<Page>;
    constructor(
      private pageService: PageService
    ) {}

    ngOnInit() {
      this.page$ = this.pageService.getPage(this.pageName);
    }
}
