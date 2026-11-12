import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  afterNextRender,
  inject,
  signal,
} from '@angular/core';
import { LanguageService } from '../../core/language.service';
import { ThemeService } from '../../core/theme.service';
import { NAV, PROFILE, UI } from '../../data/content';
import { Lang } from '../../data/models';
import { Icon } from '../../shared/icon';

@Component({
  selector: 'app-header',
  imports: [Icon],
  templateUrl: './header.html',
  styleUrl: './header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.scrolled]': 'scrolled()',
    '(window:scroll)': 'onScroll()',
    '(document:keydown.escape)': 'menuOpen.set(false)',
  },
})
export class Header {
  protected readonly i18n = inject(LanguageService);
  protected readonly theme = inject(ThemeService);
  protected readonly profile = PROFILE;
  protected readonly nav = NAV;
  protected readonly ui = UI;
  protected readonly languages: Lang[] = ['en', 'de'];

  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);
  /** Id of the section currently in the middle of the screen. */
  protected readonly activeSection = signal<string | null>(null);

  constructor() {
    const destroyRef = inject(DestroyRef);

    // Scroll-spy: highlight the nav link for the section being read.
    afterNextRender(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) this.activeSection.set(entry.target.id);
          }
        },
        { rootMargin: '-45% 0px -50% 0px' },
      );
      document.querySelectorAll('main section[id]').forEach((section) => observer.observe(section));
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }

  protected onScroll(): void {
    this.scrolled.set(window.scrollY > 8);
  }
}
