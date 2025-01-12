import { Directive, ElementRef, Renderer2, OnInit, OnDestroy, Input } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
  standalone: true
})
export class ScrollAnimationDirective implements OnInit, OnDestroy {
  @Input('appScrollAnimation') animationType: string = '';

  private observer!: IntersectionObserver;
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'visible');
          if (this.animationType) {
            this.renderer.addClass(this.el.nativeElement, this.animationType);
          }
          this.observer.unobserve(entry.target);
        }
      });
    });
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}