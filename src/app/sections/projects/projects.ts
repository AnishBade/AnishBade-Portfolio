import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../core/language.service';
import { PROJECTS, PROJECTS_TITLE, navLabel } from '../../data/content';
import { Reveal } from '../../shared/reveal.directive';
import { SectionHeading } from '../../shared/section-heading';
import { TagList } from '../../shared/tag-list';

@Component({
  selector: 'app-projects',
  imports: [Reveal, SectionHeading, TagList],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  protected readonly i18n = inject(LanguageService);
  protected readonly projects = PROJECTS;
  protected readonly title = PROJECTS_TITLE;
  protected readonly label = navLabel('projects');
}
