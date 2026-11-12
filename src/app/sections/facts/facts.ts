import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../core/language.service';
import { FACTS, UI } from '../../data/content';
import { Reveal } from '../../shared/reveal.directive';

@Component({
  selector: 'app-facts',
  imports: [Reveal],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './facts.css',
  template: `
    <section class="wrap" [attr.aria-label]="i18n.t(ui.facts)">
      <dl class="grid">
        @for (fact of facts; track fact.value) {
          <div appReveal>
            <dt>{{ fact.value }}</dt>
            <dd>{{ i18n.t(fact.label) }}</dd>
          </div>
        }
      </dl>
    </section>
  `,
})
export class Facts {
  protected readonly i18n = inject(LanguageService);
  protected readonly facts = FACTS;
  protected readonly ui = UI;
}
