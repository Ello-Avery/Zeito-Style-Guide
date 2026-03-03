import { Component, input, computed } from '@angular/core';
import { HlmButton, type ButtonVariants } from '@spartan-ng/helm/button';
import type { ClassValue } from 'clsx';

@Component({
  selector: 'button-ui',
  imports: [HlmButton],
  template: `
    <button hlmBtn [size]="size()" [variant]="variant()" [class]="mergedClasses()">
      <ng-content />
    </button>
  `,
})
export class ButtonComponent {
  public readonly size = input<ButtonVariants['size']>('default');
  public readonly variant = input<ButtonVariants['variant']>('default');
  public readonly classNames = input<ClassValue>('');

  protected readonly mergedClasses = computed(() => `cursor-pointer ${this.classNames()}`);
}
