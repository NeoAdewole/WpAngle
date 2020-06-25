import { Directive, ElementRef, Input, HostListener } from '@angular/core';
import { environment } from 'src/environments/environment';

@Directive({
    selector: '[imgFallback]'
})
export class ImgFallbackDirective {
  defaultImage = environment.baseTokenUrl + environment.assetsUrl + 'Iconsocial.png';
  @Input() imgFallback: string;

  constructor(private eRef: ElementRef) { }

  @HostListener('error')
  loadFallbackOnError(){
    const element: HTMLImageElement = <HTMLImageElement>this.eRef.nativeElement;
    element.src = this.defaultImage;
  }

}
