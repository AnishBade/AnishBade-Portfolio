import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { LanguageService } from './core/language.service';
import { EXPERIENCE, PROJECTS } from './data/content';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [App] }).compileComponents();
  });

  it('renders my name as the main heading', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelector('h1')?.textContent).toContain('Anish Bade');
  });

  it('renders every job and project from the content file', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelectorAll('.job').length).toBe(EXPERIENCE.length);
    expect(page.querySelectorAll('.project').length).toBe(PROJECTS.length);
  });

  it('shows German by default', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelector('#experience h2')?.textContent).toContain('Berufserfahrung');
  });

  it('switches the page text to English', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    TestBed.inject(LanguageService).setLang('en');
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelector('#experience h2')?.textContent).toContain("Where I've worked");
  });
});
