import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { LanguageService } from '../core/language.service';
import { Text } from '../data/models';

/** A row of small technology tags. */
@Component({
  selector: 'app-tag-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    :host { display: block; }
    ul { display: flex; flex-wrap: wrap; gap: 6px; margin: 0; padding: 0; list-style: none; }
    li {
      padding: 3px 9px;
      border-radius: 6px;
      background: var(--surface-2);
      color: var(--ink-2);
      font: 400 12px/1.6 var(--sans);
    }
  `,
  template: `
    <ul>
      @for (tag of tags(); track $index) {
        <li>{{ i18n.t(tag) }}</li>
      }
    </ul>
  `,
})
export class TagList {
  protected readonly i18n = inject(LanguageService);
  readonly tags = input.required<readonly Text[]>();
}
