import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';

type Theme = 'light' | 'dark';

/**
 * Light/dark mode. By default the site follows the operating system;
 * clicking the toggle stores an explicit choice on <html data-theme="…">.
 * (A tiny inline script in index.html applies the saved choice before
 * Angular loads, so there's no flash of the wrong theme.)
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  toggle(): void {
    if (!this.isBrowser) return;
    const next: Theme = this.current() === 'dark' ? 'light' : 'dark';
    this.document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      // Ignore blocked storage.
    }
  }

  private current(): Theme {
    const explicit = this.document.documentElement.getAttribute('data-theme');
    if (explicit === 'light' || explicit === 'dark') return explicit;
    return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
}
