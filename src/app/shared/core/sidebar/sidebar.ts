import { Component, DestroyRef, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

interface NavLink {
  label: string;
  href: string;
}
interface NavGroup {
  label: string;
  links: NavLink[];
}

const NAV: NavGroup[] = [
  {
    label: 'Foundations',
    links: [
      { label: 'Colors', href: 'colors' },
      { label: 'Typography', href: 'typography' },
      { label: 'Spacing & Radius', href: 'spacing' },
    ],
  },
  {
    label: 'Components',
    links: [
      { label: 'Buttons', href: 'buttons' },
      { label: 'Pills & Chips', href: 'pills' },
      { label: 'Form Inputs', href: 'forms' },
      { label: 'Cards', href: 'cards' },
      { label: 'Badges', href: 'badges' },
      { label: 'Navigation', href: 'navigation' },
    ],
  },
  {
    label: 'Patterns',
    links: [
      { label: 'Workout Parts', href: 'workout-parts' },
      { label: 'Calendar Events', href: 'calendar-events' },
      { label: 'Avatars', href: 'avatars' },
      { label: 'Capacity', href: 'capacity' },
    ],
  },
];

const allLinks = NAV.flatMap((g) => g.links);

const createObserver = (callback: (id: string) => void) =>
  new IntersectionObserver(
    (entries) => entries.filter((e) => e.isIntersecting).forEach((e) => callback(e.target.id)),
    { rootMargin: '-30% 0px -60% 0px' },
  );

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  private readonly doc = inject(DOCUMENT);
  private observer: IntersectionObserver | null = null;

  readonly nav = NAV;
  activeSection = signal('');

  constructor() {
    const destroyRef = inject(DestroyRef);

    inject(Router)
      .events.pipe(filter((e) => e instanceof NavigationEnd), takeUntilDestroyed(destroyRef))
      .subscribe(() => this.resetObserver());

    destroyRef.onDestroy(() => this.observer?.disconnect());
  }

  private resetObserver() {
    this.observer?.disconnect();
    this.initObserver();
  }

  private initObserver() {
    const sections = allLinks
      .map(({ href }) => this.doc.getElementById(href))
      .filter((el): el is HTMLElement => el !== null);
    this.observer = createObserver((id) => this.activeSection.set(id));
    sections.forEach((s) => this.observer!.observe(s));
  }

  setActive(href: string) {
    this.activeSection.set(href);
  }
}
