import { ChangeDetectionStrategy, Component, afterNextRender, inject } from '@angular/core';
import { LanguageService } from './core/language.service';
import { UI } from './data/content';
import { About } from './sections/about/about';
import { Contact } from './sections/contact/contact';
import { Education } from './sections/education/education';
import { Experience } from './sections/experience/experience';
import { Facts } from './sections/facts/facts';
import { Footer } from './sections/footer/footer';
import { Header } from './sections/header/header';
import { Hero } from './sections/hero/hero';
import { Projects } from './sections/projects/projects';
import { Skills } from './sections/skills/skills';

/** The whole page: a header, the sections in order, and a footer. */
@Component({
  selector: 'app-root',
  imports: [Header, Hero, Facts, About, Experience, Projects, Skills, Education, Contact, Footer],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a class="skip-link" href="#main">{{ i18n.t(ui.skip) }}</a>
    <app-header />
    <main id="main">
      <app-hero />
      <app-facts />
      <app-about />
      <app-experience />
      <app-projects />
      <app-skills />
      <app-education />
      <app-contact />
    </main>
    <app-footer />
  `,
})
export class App {
  protected readonly i18n = inject(LanguageService);
  protected readonly ui = UI;

  constructor() {
    // The prerendered HTML is German. Once the page is live in the browser,
    // switch to English if the URL (?lang=en) or a saved choice asks for it.
    afterNextRender(() => this.i18n.detectInitialLanguage());
  }
}
