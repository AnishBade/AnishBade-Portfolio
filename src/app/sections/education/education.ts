import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../core/language.service';
import { EDUCATION, EDUCATION_TITLE, LANGUAGES, LANGUAGES_LABEL, navLabel } from '../../data/content';
import { Reveal } from '../../shared/reveal.directive';
import { SectionHeading } from '../../shared/section-heading';

@Component({
  selector: 'app-education',
  imports: [Reveal, SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './education.css',
  template: `
    <section class="section wrap" id="education">
      <app-section-heading appReveal number="05" [label]="label" [title]="title" />

      <div class="grid">
        @for (item of degrees; track item.degree) {
          <article class="card" appReveal>
            <p class="eyebrow">{{ i18n.t(item.period) }}</p>
            <h3>{{ item.degree }}</h3>
            <p class="school">{{ i18n.t(item.school) }}</p>
            @if (item.note) {
              <p class="note">
                @if (item.highlight) {
                  <span class="pill">{{ i18n.t(item.note) }}</span>
                } @else {
                  {{ i18n.t(item.note) }}
                }
              </p>
            }
          </article>
        }

        <article class="card languages" appReveal>
          <p class="eyebrow">{{ i18n.t(languagesLabel) }}</p>
          <ul>
            @for (language of languages; track $index) {
              <li>
                <span>{{ i18n.t(language.name) }}</span>
                <span class="level">{{ i18n.t(language.level) }}</span>
              </li>
            }
          </ul>
        </article>
      </div>
    </section>
  `,
})
export class Education {
  protected readonly i18n = inject(LanguageService);
  protected readonly degrees = EDUCATION;
  protected readonly languages = LANGUAGES;
  protected readonly languagesLabel = LANGUAGES_LABEL;
  protected readonly title = EDUCATION_TITLE;
  protected readonly label = navLabel('education');
}
