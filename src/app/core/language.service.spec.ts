import { TestBed } from '@angular/core/testing';
import { LanguageService } from './language.service';

describe('LanguageService', () => {
  let i18n: LanguageService;

  beforeEach(() => {
    i18n = TestBed.inject(LanguageService);
  });

  it('starts in German', () => {
    expect(i18n.lang()).toBe('de');
  });

  it('returns plain strings unchanged in every language', () => {
    i18n.setLang('en');
    expect(i18n.t('FastAPI')).toBe('FastAPI');
  });

  it('picks the translation for the active language', () => {
    const text = { en: 'Skills', de: 'Kenntnisse' };
    expect(i18n.t(text)).toBe('Kenntnisse');
    i18n.setLang('en');
    expect(i18n.t(text)).toBe('Skills');
  });

  it('keeps <html lang> in sync', async () => {
    i18n.setLang('en');
    TestBed.tick();
    expect(document.documentElement.lang).toBe('en');
  });
});
