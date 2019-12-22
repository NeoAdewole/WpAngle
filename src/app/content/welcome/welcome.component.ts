import { Component, OnInit } from '@angular/core';
import { PageService } from '../page.service';
import { Page } from 'src/app/model/page';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
    page: Page;
    errMsg: any;
    pageName = 'home';

    constructor(private pageService: PageService) {}

    ngOnInit() {
        this.pageService.getPage(this.pageName).subscribe({
            next: page => {
                this.page = page;
            },
            error: errorMessage => {
                this.errMsg = errorMessage;
                console.log(this.errMsg);
            }
        });
    }
}
