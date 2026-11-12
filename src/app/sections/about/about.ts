import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../core/language.service';
import { ABOUT, FOCUS, navLabel } from '../../data/content';
import { Icon } from '../../shared/icon';
import { Reveal } from '../../shared/reveal.directive';
import { SectionHeading } from '../../shared/section-heading';

@Component({
  selector: 'app-about',
  imports: [Icon, Reveal, SectionHeading],
  templateUrl: './about.html',
  styleUrl: './about.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  protected readonly i18n = inject(LanguageService);
  protected readonly about = ABOUT;
  protected readonly focus = FOCUS;
  protected readonly label = navLabel('about');
}
