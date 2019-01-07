import { Directive, OnInit, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[cardType]'
})
export class CardTypeDirective implements OnInit {

  @Input('cardType') cardType: number = 0;
  @Input('increaseClass') increaseClass: string = 'increase';
  @Input('decreaseClass') decreaseClass: string = 'decrease';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    if (this.cardType) {
      if (this.cardType >= 0) {
        this.el.nativeElement.classList.add(this.increaseClass);
        this.el.nativeElement.classList.remove(this.decreaseClass);
      } else if (this.cardType <= 0) {
        this.el.nativeElement.classList.add(this.decreaseClass);
        this.el.nativeElement.classList.remove(this.increaseClass);
      } else {
        this.el.nativeElement.classList.remove(this.decreaseClass);
        this.el.nativeElement.classList.remove(this.increaseClass);
      }
    }
  }

}
