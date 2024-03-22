import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  standalone:true,
  selector: '[highlight]'
})
export class HighlightDirective implements OnChanges {

  @Input ('highlight') availPieces:number = 0
  constructor(private ele:ElementRef) {
    
   }

   ngOnChanges(): void {
    
    if(this.availPieces < 5)
    {
      this.ele.nativeElement.style.color="#0E67CD";
      this.ele.nativeElement.style.fontWeight="bold";
    }
   }

}
