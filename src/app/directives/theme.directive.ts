import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverBackground]'
})
export class HoverBackgroundDirective {
  @Input('appHoverBackground') hoverColor: string = 'yellow'; // Default hover color

  private defaultColor: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.defaultColor = this.el.nativeElement.style.color; // Save the original background color
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeBackgroundColor(this.hoverColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeBackgroundColor(this.defaultColor);
  }

  private changeBackgroundColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}
