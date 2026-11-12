import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../core/language.service';
import { CONTACT, PROFILE, navLabel } from '../../data/content';
import { Icon } from '../../shared/icon';
import { Reveal } from '../../shared/reveal.directive';

@Component({
  selector: 'app-contact',
  imports: [Icon, Reveal],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './contact.css',
  template: `
    <section class="contact wrap" id="contact" appReveal>
      <p class="kicker">06 — {{ i18n.t(label) }}</p>
      <h2>{{ i18n.t(contact.title) }}</h2>
      <p class="lede">{{ i18n.t(contact.lede) }}</p>

      <a class="mail notranslate" translate="no" [href]="'mailto:' + profile.email">
        {{ profile.email }}
        <app-icon name="arrow-up-right" />
      </a>

      <ul class="links">
        <li><a [href]="profile.linkedin" target="_blank" rel="noopener">LinkedIn ↗</a></li>
        <li><a [href]="profile.github" target="_blank" rel="noopener">GitHub ↗</a></li>
        <li>{{ i18n.t(profile.location) }}</li>
      </ul>
    </section>
  `,
})
export class Contact {
  protected readonly i18n = inject(LanguageService);
  protected readonly contact = CONTACT;
  protected readonly profile = PROFILE;
  protected readonly label = navLabel('contact');
}
