import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {
  @Input() backgroundColor: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.backgroundColor || 'white');
  }
}
