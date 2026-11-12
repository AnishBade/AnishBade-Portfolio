/** Languages the site is available in. */
export type Lang = 'en' | 'de';

/**
 * A piece of text shown on the page.
 * Use a plain string when it reads the same in every language (e.g. "FastAPI"),
 * or an object with one entry per language when it needs translating.
 */
export type Text = string | Record<Lang, string>;

export type IconName =
  | 'mail'
  | 'linkedin'
  | 'github'
  | 'sun'
  | 'moon'
  | 'menu'
  | 'server'
  | 'document'
  | 'cloud'
  | 'arrow-up-right';

export interface Profile {
  name: string;
  initials: string;
  email: string;
  linkedin: string;
  github: string;
  location: Text;
  status: Text;
  role: Text;
  lede: Text;
}

export interface Fact {
  value: string;
  label: Text;
}

export interface FocusArea {
  icon: IconName;
  title: Text;
  text: Text;
}

export interface Job {
  role: Text;
  company: string;
  period: Text;
  location: string;
  bullets: Text[];
  tags: Text[];
}

export interface Project {
  name: Text;
  badge: Text;
  year: string;
  subtitle: Text;
  /** Short paragraph for regular cards. */
  summary?: Text;
  /** Bullet points for the featured card. */
  bullets?: Text[];
  tags: string[];
  featured?: boolean;
}

export interface SkillGroup {
  title: Text;
  /** `core: true` highlights the skills I use most. */
  items: { name: Text; core?: boolean }[];
  wide?: boolean;
}

export interface Degree {
  degree: string;
  school: Text;
  period: Text;
  note?: Text;
  /** Show the note as a highlighted pill (e.g. a scholarship). */
  highlight?: boolean;
}

export interface SpokenLanguage {
  name: Text;
  level: Text;
}

export interface NavItem {
  id: string;
  label: Text;
}
