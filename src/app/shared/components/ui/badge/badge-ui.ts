import { Component, input, computed } from '@angular/core';
import { BadgeVariants, HlmBadge } from '@spartan-ng/helm/badge';
import type { ClassValue } from 'clsx';

@Component({
  selector: 'badge-ui',
  standalone: true,
  imports: [HlmBadge],
  template: `<span hlmBadge [variant]="variant()" [class]="mergedClasses()"><ng-content /></span>`,
})
export class BadgeUIComponent {
  public readonly variant = input<BadgeVariants['variant']>('default');
  public readonly classNames = input<ClassValue>('');
  protected readonly mergedClasses = computed(() => `cursor-pointer ${this.classNames()}`);
}
