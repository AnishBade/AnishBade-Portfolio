import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../core/language.service';
import { EXPERIENCE, EXPERIENCE_TITLE, navLabel } from '../../data/content';
import { Reveal } from '../../shared/reveal.directive';
import { SectionHeading } from '../../shared/section-heading';
import { TagList } from '../../shared/tag-list';

@Component({
  selector: 'app-experience',
  imports: [Reveal, SectionHeading, TagList],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Experience {
  protected readonly i18n = inject(LanguageService);
  protected readonly jobs = EXPERIENCE;
  protected readonly title = EXPERIENCE_TITLE;
  protected readonly label = navLabel('experience');
}
