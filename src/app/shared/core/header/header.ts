import { Component, computed, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideGithub, lucideMoon, lucideSun, lucideTwitter } from '@ng-icons/lucide';
import { Logo } from '../../components/ui/logo/logo';

const themeIcons: Record<string, string> = { true: 'lucideSun', false: 'lucideMoon' };
const toggleDark = () => document.documentElement.classList.toggle('dark');
const isDark = () => document.documentElement.classList.contains('dark');

@Component({
  selector: 'app-header',
  imports: [Logo, NgIcon],
  providers: [provideIcons({ lucideGithub, lucideTwitter, lucideMoon, lucideSun })],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  dark = signal(isDark());
  themeIcon = computed(() => themeIcons[String(this.dark())]);

  toggleTheme() {
    toggleDark();
    this.dark.set(isDark());
  }
}
