import { Component, input } from '@angular/core';
import { HlmButton, type ButtonVariants } from '@spartan-ng/helm/button';
import type { ClassValue } from 'clsx';

@Component({
  selector: 'button-ui',
  imports: [HlmButton],
  template: `
    <button hlmBtn [size]="size()" [variant]="variant()" [class]="classNames()">
      <ng-content />
    </button>
  `,
})
export class ButtonComponent {
  public readonly size = input<ButtonVariants['size']>('default');
  public readonly variant = input<ButtonVariants['variant']>('default');
  public readonly classNames = input<ClassValue>('');
}
