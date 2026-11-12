import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { LanguageService } from '../core/language.service';
import { Text } from '../data/models';

/** "01 — About" kicker plus a large title, used at the top of each section. */
@Component({
  selector: 'app-section-heading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    :host { display: block; margin-bottom: clamp(32px, 4vw, 52px); }
    h2 { margin-top: 14px; }
  `,
  template: `
    <p class="kicker">{{ number() }} — {{ i18n.t(label()) }}</p>
    <h2 class="display-title">{{ i18n.t(title()) }}</h2>
  `,
})
export class SectionHeading {
  protected readonly i18n = inject(LanguageService);
  readonly number = input.required<string>();
  readonly label = input.required<Text>();
  readonly title = input.required<Text>();
}
