import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [PageComponent],
  imports: [
    CommonModule, RouterModule, SharedModule
  ]
})
export class PageModule { }
