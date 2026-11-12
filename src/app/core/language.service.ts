import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, effect, inject, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { UI } from '../data/content';
import { Lang, Text } from '../data/models';

const STORAGE_KEY = 'lang';

/** The language the site is prerendered in and shown to first-time visitors. */
export const DEFAULT_LANG: Lang = 'de';

/**
 * Holds the current language as a signal and translates `Text` values.
 *
 * Templates call `i18n.t(someText)`. Because `t()` reads the `lang` signal,
 * Angular re-renders those bindings automatically whenever the language changes.
 */
@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  /** The active language. Read it with `lang()`, change it with `setLang()`. */
  readonly lang = signal<Lang>(DEFAULT_LANG);

  constructor() {
    // Keep <html lang>, the tab title and the meta description in sync.
    effect(() => {
      const lang = this.lang();
      this.document.documentElement.lang = lang;
      this.title.setTitle(UI.meta.title[lang]);
      this.meta.updateTag({ name: 'description', content: UI.meta.description[lang] });
    });
  }

  /** Translate a piece of text into the active language. */
  t(text: Text): string {
    return typeof text === 'string' ? text : text[this.lang()];
  }

  setLang(lang: Lang): void {
    this.lang.set(lang);
    if (this.isBrowser) {
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch {
        // Storage can be blocked (private mode); the toggle still works for this visit.
      }
    }
  }

  /**
   * Pick the starting language in the browser:
   * `?lang=en` in the URL wins, then a choice saved from the EN/DE toggle,
   * otherwise German. Only runs in the browser — the prerendered HTML is German.
   */
  detectInitialLanguage(): void {
    if (!this.isBrowser) return;

    const fromUrl = new URLSearchParams(location.search).get('lang');
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch {
      saved = null;
    }

    const choice = [fromUrl, saved].find((v): v is Lang => v === 'en' || v === 'de');
    this.lang.set(choice ?? DEFAULT_LANG);
  }
}
