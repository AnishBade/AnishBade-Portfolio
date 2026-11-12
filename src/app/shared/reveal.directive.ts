import { Directive, ElementRef, afterNextRender, inject, DestroyRef } from '@angular/core';

/**
 * Fades an element in the first time it scrolls into view.
 * Usage: <div appReveal>…</div>
 *
 * Runs only in the browser (afterNextRender never runs during prerendering),
 * and skips elements that are already on screen, so nothing ever flickers.
 */
@Directive({ selector: '[appReveal]' })
export class Reveal {
  constructor() {
    const el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
      const alreadyVisible = el.getBoundingClientRect().top < window.innerHeight;
      if (reducedMotion || alreadyVisible || !('IntersectionObserver' in window)) return;

      el.classList.add('reveal');
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add('in');
            observer.disconnect();
          }
        },
        { rootMargin: '0px 0px -8% 0px' },
      );
      observer.observe(el);
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
