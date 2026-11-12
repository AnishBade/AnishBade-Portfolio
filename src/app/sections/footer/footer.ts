import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../core/language.service';
import { PROFILE, UI } from '../../data/content';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    :host { display: block; border-top: 1px solid var(--line); }
    .inner {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 8px 24px;
      padding-block: 28px;
      font-size: 13.5px;
      color: var(--ink-3);
    }
    a { text-decoration: none; }
    a:hover { color: var(--ink); }
    @media print { a { display: none; } }
  `,
  template: `
    <div class="wrap inner">
      <p>© {{ year }} <span class="notranslate" translate="no">{{ profile.name }}</span></p>
      <p>{{ i18n.t(ui.footerBuilt) }}</p>
      <a href="#top">{{ i18n.t(ui.backToTop) }}</a>
    </div>
  `,
})
export class Footer {
  protected readonly i18n = inject(LanguageService);
  protected readonly profile = PROFILE;
  protected readonly ui = UI;
  protected readonly year = new Date().getFullYear();
}
