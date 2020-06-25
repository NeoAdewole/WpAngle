import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../content/loader/loader.component';
import { ImgFallbackDirective } from './directives/img-fallback';

@NgModule({
    declarations: [LoaderComponent, ImgFallbackDirective],
    imports: [CommonModule],
    exports: [LoaderComponent, ImgFallbackDirective]
})
export class SharedModule {}
