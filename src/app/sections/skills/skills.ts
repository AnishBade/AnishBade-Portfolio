import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../core/language.service';
import { SKILLS, SKILLS_TITLE, navLabel } from '../../data/content';
import { Reveal } from '../../shared/reveal.directive';
import { SectionHeading } from '../../shared/section-heading';

@Component({
  selector: 'app-skills',
  imports: [Reveal, SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './skills.css',
  template: `
    <section class="section wrap" id="skills">
      <app-section-heading appReveal number="04" [label]="label" [title]="title" />

      <div class="grid">
        @for (group of groups; track $index) {
          <div class="group" [class.wide]="group.wide" appReveal>
            <h3>{{ i18n.t(group.title) }}</h3>
            <ul class="chips">
              @for (skill of group.items; track $index) {
                <li [class.core]="skill.core">{{ i18n.t(skill.name) }}</li>
              }
            </ul>
          </div>
        }
      </div>
    </section>
  `,
})
export class Skills {
  protected readonly i18n = inject(LanguageService);
  protected readonly groups = SKILLS;
  protected readonly title = SKILLS_TITLE;
  protected readonly label = navLabel('skills');
}
